import { useState, useEffect } from "react";
import { IOptions } from "../type";

const useComboBoxHook = () => {
  const [state, setState] = useState({
    comboData: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, -1,
    ],
    comboOptions: [] as IOptions[],
    value: [] as number[],
  });

  useEffect(() => {
    let options: IOptions[] = [];
    options.push({
      key: -1,
      value: -1,
      text: "Select All",
    });

    state.comboData.forEach((item: number) => {
      options.push({
        key: item,
        value: item,
        text: item,
      });
    });

    setState((prev) => ({ ...prev, comboOptions: options }));
  },[state.comboData]);

  const setDefaultValues = () => {
    let defaultOptions: IOptions[] = [];
    defaultOptions.push({
      key: -1,
      value: -1,
      text: "Select All",
    });
    state.comboData.forEach((item: number) => {
      defaultOptions.push({
        key: item,
        value: item,
        text: item,
      });
    });
    setState((prev) => ({ ...prev, comboOptions: defaultOptions, value: [] }));
  };

  const handleChange = (value: number[], data: any) => {
    if (value.length === 0) {
      setDefaultValues();
    } else {
      setState((prev) => ({ ...prev, value: value }));
    }
  };

  const handleSelect = (value: any, options: any, data:any) => {
    if (value === -1) {
      const v: any = [];
      state.comboData.forEach((item: number) => {
        v.push(item);
      });
      console.log(v);
      let newOptions: IOptions[] = [];
      state.comboOptions.forEach((item: IOptions) => {
        if (item.key === -1) {
          newOptions.push({
            key: -1,
            value: -1,
            text: "Unselect All",
          });
        } else {
          newOptions.push(item);
        }
      });

      setState((prev) => ({
        ...prev,
        value: v,
        comboOptions: newOptions,
      }));
    }
  };

  const handleDeselect = (value: any, options: any, dataType: any) => {
    if (value === -1) {
      let newOptions: IOptions[] = [];
      state.comboOptions.forEach((item: IOptions) => {
        if (item.key === -1) {
          newOptions.push({
            key: -1,
            value: -1,
            text: "Select All",
          });
        } else {
          newOptions.push(item);
        }
      });
      setState((prev) => ({ ...prev, value: [], comboOptions: newOptions }));
    }
  };

  return {
    state,
    handleChange,
    handleSelect,
    handleDeselect,
  };
};

export default useComboBoxHook;
