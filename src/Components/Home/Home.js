import Reminder from '../Reminder/reminder';
import Meetings from '../Schedule meeting/meeting';
import Email from '../Send Email/Email';
import './Home.css';

function Home() {
  return (
  <div className='Home' > <i class="fas fa-caret-down"></i> Actions
  <div className='Actions'>
  <div>
      <ul className='unordered'>
          <li className='list-items'>
          <Email />
          </li>
          <li className='list-items'>
              <Meetings />
          </li>
          <li className='list-items'>
          <Reminder />
          </li>
      </ul>
      </div>
  </div>
  </div>
  );
}

export default Home;