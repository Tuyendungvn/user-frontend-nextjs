import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
interface ISwitchUI {
  enabled: boolean | undefined;
  disabled?: boolean;
  onChange?: (enable: boolean) => void;
}

const SwitchUI: React.FC<ISwitchUI> = ({
  enabled = false,
  disabled = false,
  onChange,
}) => {
  const [checked, setChecked] = useState<boolean>(enabled);

  useEffect(() => {
    setChecked(enabled);
  }, [enabled]);

  return (
    <Switch
      checked={checked}
      onChange={() => {}}
      // onChange={(checked) => {
      //   setChecked(checked);
      //   onChange?.(checked);
      // }}
      disabled={disabled}
      className={`${
        checked ? "bg-primary" : "bg-primary bg-opacity-60"
      } relative inline-flex items-center h-2.5 rounded-full w-4.5 transition-colors`}
    >
      <span
        className={`${
          checked ? "translate-x-2.5" : "translate-x-0.5"
        } inline-block w-1.5 h-1.5 transform bg-background rounded-full transition-transform`}
      />
    </Switch>
  );
};

export default SwitchUI;
