import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
    return (
        <Label>
            Find contacts by name:
            <Input type="text" name="filter" value={value} onChange={onChange} />
        </Label>
    );
};

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default Filter;