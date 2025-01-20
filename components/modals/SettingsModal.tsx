"use client";
import { useSettings } from "@/hooks/use-settings";
import React from "react";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { Label } from "../ui/label";
import { ModeToggle } from "../mode-toggle";

const SettingsModal = () => {
  const settings = useSettings();
  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">My Settings</h2>
        </DialogHeader>
        <div className="flex item-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>Appearance</Label>
            <span className="text-[0.8rem] text-slate-300">
              Customize how Solution looks on your device
            </span>
          </div>
          <ModeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsModal;
