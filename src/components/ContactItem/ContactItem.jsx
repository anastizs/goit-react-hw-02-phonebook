import PropTypes from "prop-types";
import { TextName, TextTel, Item, Button } from "./ContactItem.styled";

const ContactItem = ({ name, number, onDelete }) => {
  return (
    <Item>
      <TextName>{name}</TextName>
      <TextTel>{number}</TextTel>
      <Button type="button" onClick={onDelete}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
