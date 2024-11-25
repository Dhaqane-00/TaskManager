"use client";

import { HelpCenterProps } from "./types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const HelpCenter = ({ 
  title, 
  description, 
  buttonText, 
  onHelpClick 
}: HelpCenterProps) => {
  return (
    <Card className="bg-gray-900 text-white">
      <CardHeader>
        <div className="flex justify-center">
          <div className="flex shrink-0 rounded-full bg-white/10 h-[60px] w-[66px]" />
        </div>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <h2 className="text-base tracking-tight">{title}</h2>
        <p className="font-medium text-xs">{description}</p>
        <Button
          onClick={onHelpClick}
          aria-label={buttonText}
          variant="secondary"
          className="w-full mt-7 text-xs"
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};