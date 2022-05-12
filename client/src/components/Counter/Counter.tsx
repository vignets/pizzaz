import {
  Group,
  ActionIcon,
  NumberInput,
  NumberInputHandlers,
} from "@mantine/core";
import React, { useRef } from "react";

type Props = {
  value: number;
  onChange: (value: number) => void;
};

export const Counter: React.FunctionComponent<Props> = ({
  value,
  onChange,
}) => {
  const handlers = useRef<NumberInputHandlers>();
  return (
    <div className="flex space-x-2">
      <ActionIcon
        variant="default"
        onClick={() => handlers.current?.decrement()}
        className="p-[17px]"
      >
        -
      </ActionIcon>

      <NumberInput
        hideControls
        value={value}
        onChange={(val) => onChange(val ?? 0)}
        handlersRef={handlers}
        max={10}
        min={0}
        styles={{ input: { width: 54, textAlign: "center" } }}
      />

      <ActionIcon
        variant="default"
        onClick={() => handlers.current?.increment()}
        className="p-[17px]"
      >
        +
      </ActionIcon>
    </div>
  );
};

export default Counter;
