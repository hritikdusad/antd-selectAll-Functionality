import { Select, Tooltip } from "antd";
import useComboBoxHook from "./hook/useComboBoxHook";
import { IOptions } from "./type";
import "antd/dist/antd.css";
import "./style.css";

const { Option } = Select;

const ComboBox = () => {
  const { state, handleChange, handleDeselect, handleSelect } =
    useComboBoxHook();

  const options = state.comboOptions.map((item: IOptions) => {
    return (
      <Option key={item.key} value={item.value}>
        {item.text}
      </Option>
    );
  });

  return (
    <Tooltip title={state.value.join(",")} placement="right">
      <Select
        mode="multiple"
        allowClear
        placeholder="Select option"
        onChange={handleChange}
        value={state.value}
        style={{ width: "100%" }}
        onSelect={(value: any, options: any) =>
          handleSelect(value, options, "Select Options")
        }
        onDeselect={(value: any, options: any) =>
          handleDeselect(value, options, "Select Options")
        }
        className="remove-overflow"
      >
        {options}
      </Select>
    </Tooltip>
  );
};

export default ComboBox;
