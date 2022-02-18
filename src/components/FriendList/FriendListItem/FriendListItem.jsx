import css from "./friendlistitem.module.css";
import PropTypes from 'prop-types';



const FriendListItem =({avatar, name, isOnline, }) => {
    return (
      <li className={css.list}  >
  <span className= {isOnline ? css.online : css.ofline }></span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
</li>
    )
  }

  FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
   
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}

export default FriendListItem;