import React from 'react';
import './CleanFooter.css';
// import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import { FiNavigation } from 'react-icons/fi'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaPinterest
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';
import { Button } from './Button';
import { Pinterest } from '@material-ui/icons';


function CleanFooter() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          {/* <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
              autoComplete="off"
              required
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>

          </form> */}
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About</h2>
            <Link to='/contacts'>Domestic Cleaning.</Link>
            <Link to='/'>Boats & Marine Cleaning.</Link>
            <Link to='/'>Gardening Services.</Link>
            <Link to='/'>Handyman Services. </Link>
            <Link to='/'>Scaffolding & Building Services. </Link>
          </div>
          <div className='footer-link-items'>
            <h2>Services</h2>
            <Link to='/contacts'>ISO 9001 for quality standards.</Link>
            <Link to='/'>ISO 14001 for environmental systems.</Link>
            <Link to='/'>ISO 18001 for health and safety systems.</Link>
            <Link to='/'>ISO 27001 for information security.</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social</h2>
            <Link to='//www.instagram.com/tazzercleaners/' target='_blank' >Instagram</Link>
            <Link to='//www.facebook.com/tazzercleaners' target='_blank' >Facebook</Link>
            <Link to='//www.linkedin.com/in/tazzercleaners' target='_blank' >LinkedIn</Link>
            <Link to='//twitter.com/tazzercleaners' target='_blank' >Twitter</Link>
            <Link to='//www.pinterest.com/tazzercleaners/' target='_blank' >Pinterest</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <FiNavigation className='navbar-icon' />
              tazzercleaner
            </Link>
          </div>
          <small className='website-rights'>tazzercleaner © 2021</small>
          <div className='social-icons'>
            {/* <Link
              className='social-icon-link'
              to='/https://web.facebook.com/tazzercleaners?_rdc=1&_rdr'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link> */}
            <Link
              className='social-icon-link'
              to={
                '//web.facebook.com/tazzercleaners?_rdc=1&_rdr'
              }
              target='_blank'
              aria-label='Facebook'
            >
               <FaFacebook />
            </Link>
            {/* <Link
              className='social-icon-link'
              to='//https://www.instagram.com/tazzercleaners/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link> */}
            <Link
              className='social-icon-link'
              to={
                '//www.instagram.com/tazzercleaners/'
              }
              target='_blank'
              aria-label='Instagram'
            >
               <FaInstagram />
            </Link>
            {/* <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link> */}
            <Link
              className='social-icon-link'
              to={
                '//www.pinterest.com/tazzercleaners/'
              }
              target='_blank'
              aria-label='Pinterest'
            >
              <FaPinterest />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//twitter.com/tazzercleaners'
              }
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to={'//www.linkedin.com/in/tazzercleaners'}
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CleanFooter;
