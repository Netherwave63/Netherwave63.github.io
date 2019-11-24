// dependencies
import React from 'react';

// higher order components
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';

// constants
import * as ROUTES from '../../constants/routes';

// main component -> HomePage
const HomePage = () => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-4">
          <Menu />
        </div>

        <div className="column">
          <Tasks />
        </div>
      </div>
    </div>
  </section>
);

// component -> Menu
const Menu = () => (
  <aside className="menu box">
    <p className="menu-label">
      General
    </p>
    <ul className="menu-list">
      <li><a>Dashboard</a></li>
      <li><a>Archive</a></li>
    </ul>

    <p className="menu-label">
      Account
    </p>
    <ul className="menu-list">
      <li><a>View Account</a></li>
      <li><a>Change Password</a></li>
      <li><a>Background Color</a></li>
    </ul>
  </aside>
);

// component -> Tasks
class TasksBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      tasks: [],
      text: ''
    };
  }

  componentDidMount = () => {
    this.setState({ loading: true });

    this.props.firebase.tasks().on('value', snapshot => {
      const tasksObject = snapshot.val();

      if (tasksObject) {
        const tasksList = Object.keys(tasksObject).map(key => ({
          ...tasksObject[key],
          uid: key
        }));

        this.setState({
          loading: false,
          tasks: tasksList
        });
      } else {
        this.setState({
          loading: false,
          tasks: null
        });
      };
    });
  }

  componentWillUnmount = () => {
    this.props.firebase.tasks().off();
  }

  onChange = event => {
    this.setState({ text: event.target.value });
  }

  onCreateTask = event => {
    this.props.firebase.tasks().push({
      text: this.state.text,
      createdAt: this.props.firebase.serverValue.TIMESTAMP
    });

    this.setState({ text: '' });

    event.preventDefault();
  }

  onRemoveTask = uid => {
    this.props.firebase.task(uid).remove();
  }

  onEditTask = (task, text) => {
    this.props.firebase.task(task.uid).set({
      text
    });
  }

  render() {
    const {
      loading,
      tasks, 
      text
    } = this.state;

    return (
      <div>
        <p className="subtitle">Dashboard</p>

        <form onSubmit={this.onCreateTask}>
          <div className="field has-addons">
            <div className="control">
              <input 
                type="text"
                value={text}
                onChange={this.onChange}
                className="input"
                placeholder="Add new task"
              />
            </div>
            <div className="control">
              <button
                type="submit"
                className="button is-link"
              >
                Create
              </button>
            </div>
          </div>
        </form>

        <hr />

        {loading && <p>Loading...</p>}

        {tasks ? (
          <TaskList 
            tasks={tasks} 
            onRemoveTask={this.onRemoveTask}
            onEditTask={this.onEditTask}
          />
        ) : (
          <p>There are no tasks yet.</p>
        )}

      </div>
    );
  }
}

const Tasks = withFirebase(TasksBase);

// component -> TaskList
const TaskList = ({ tasks, onRemoveTask, onEditTask }) => (
  <div>
    {tasks.map(task => (
      <TaskItem 
        key={task.uid} 
        task={task}
        onRemoveTask={onRemoveTask}
        onEditTask={onEditTask}
      />
    ))}
  </div>
);

// component => TaskItem
class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      editText: this.props.task.text
    };
  }

  onToggleEditMode = () => {
    this.setState({ 
      editMode: !this.state.editMode,
      editText: this.props.task.text });
  }

  onChangeEditText = event => {
    this.setState({ editText: event.target.value });
  }

  onSaveEditText = () => {
    this.props.onEditTask(this.props.task, this.state.editText);
    this.setState({ editMode: false });
  }

  render() {
    const {
      editMode,
      editText
    } = this.state;

    const {
      task,
      onRemoveTask
    } = this.props;

    return (
      <article className="box">
        <div className="level">
          <div className="level-left">
            {editMode ? (
              <input 
                type="text"
                value={editText}
                className="input"
                onChange={this.onChangeEditText}
              />
            ) : (
              <p>{task.text}</p>
            )}
          </div>

          <div className="level-right">
            {editMode ? (
              <span>
                <button
                  type="button"
                  className="button is-link is-small"
                  onClick={this.onSaveEditText}
                  disabled={editText === ''}
                >
                  Save
                </button>
                &nbsp;
                <button
                  type="button" 
                  className="button is-small"
                  onClick={this.onToggleEditMode}
                >
                  Reset
                </button>
              </span>
            ) : (
              <span>
                <button
                  type="button"
                  className="button is-success is-small"
                  onClick={this.onToggleEditMode}
                >
                  Edit
                </button>
                &nbsp;
                <button
                  type="button" 
                  className="button is-danger is-small"
                  onClick={() => onRemoveTask(task.uid)}
                >
                  Delete
                </button>
              </span>
            )}
          </div>
        </div>
      </article>
    );
  }
}

const condition = authUser => !!authUser; 

export default withAuthorization(condition)(HomePage);