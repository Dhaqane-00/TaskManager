import * as React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { HelpCenterProps } from "./types";

export const HelpCenter: React.FC<HelpCenterProps> = ({ title, description, buttonText }) => {
  return (
    <Card className="bg-gray-900 text-white">
      <CardBody className="text-center py-6">
        <div className="flex shrink-0 rounded-full bg-white/10 h-[60px] w-[66px] mx-auto" />
        <h2 className="text-base mt-4">{title}</h2>
        <p className="text-xs mt-4 font-medium">{description}</p>
        <Button
          color="default"
          className="mt-11 bg-white text-gray-900 font-semibold"
          size="lg"
          radius="lg"
          fullWidth
        >
          {buttonText}
        </Button>
      </CardBody>
    </Card>
  );
};