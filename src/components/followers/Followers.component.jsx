import FollowersList from '../followers-list/FollowersList.component';
import Header from '../header/Header.component';
import { FollowersContainer } from './Followers.styles';

const Followers = () => {
  return (
    <FollowersContainer>
      <Header title="Followers" />
      <FollowersList />
    </FollowersContainer>
  );
};

export default Followers;
