import PropTypes from "prop-types";
import { Text, Item, Button } from "./ContactItem.styled";

const ContactItem = ({ name, number, onDelete }) => {
  return (
    <Item>
      <Text>{name}</Text>
      <Text>{number}</Text>
      <Button type="button" onClick={onDelete}>Delete</Button>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
