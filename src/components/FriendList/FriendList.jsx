import css  from "./friendlist.module.css";
import PropTypes from "prop-types";
import FriendListItem from './FriendListItem';


const FriendList = ({friends}) => {
        const elements = friends.map(friend => <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} key={friend.id}  />);
  
  return (
      <ul className={css.item}>
{elements}
</ul>
    )
  }

  FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })),
  };

export default FriendList;