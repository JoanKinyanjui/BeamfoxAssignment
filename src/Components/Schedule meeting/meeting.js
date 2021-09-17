import React,{useRef,useState} from 'react';
import '../Send Email/Email.css';
import {Overlay} from 'react-bootstrap';
import Setmeetings from './Setmeeting';

function Meetings() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
  
    return (
      <>
        <div variant="danger" ref={target} onClick={() => setShow(!show)}>
        <i class="far fa-calendar-alt"></i> Schedule Meeting
        </div>
        <Overlay target={target.current} show={show} placement="right">
          {({ placement, arrowProps, show: _show, popper, ...props }) => (
            <div
              {...props}
              style={{
                margin:'auto',
                width:'40rem',
                height:'max-content',
                backgroundColor: 'rgba(255, 100, 100, 0.85)',
                padding: '2px 10px',
                color: 'white',
                borderRadius: 3,
                ...props.style,
              }}
            >
              <Setmeetings />
            </div>
          )}
        </Overlay>
      </>
    );
  }
  
  export default Meetings;