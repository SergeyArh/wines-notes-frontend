import {
  Button,
  Rating as FlowbiteRating,
  Label,
  RatingStar,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";

interface RatingProps {
  range?: number;
  name: string;
  control: any;
  label: string;
}

const TOTAL_RANGE = 5;

export const Rating = ({ range = 0, name, control, label }: RatingProps) => {
  const stars = new Array(TOTAL_RANGE).fill("*");

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        console.log({ value });
        const [filled, setFilled] = useState(value);

        const handleClick = (index: number) => {
          const newValue = index + 1;
          onChange(newValue);
          setFilled(newValue);
        };

        return (
          <div>
            <div className="mb-2 block">
              <Label htmlFor={name}>{label}</Label>
            </div>
            <FlowbiteRating size="md">
              {stars.map((__, index) => (
                <RatingStar
                  className="cursor-pointer"
                  key={index}
                  onClick={() => handleClick(index)}
                  filled={index < filled}
                />
              ))}
            </FlowbiteRating>
          </div>
        );
      }}
    />
  );
};
