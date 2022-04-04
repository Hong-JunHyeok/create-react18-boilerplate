import { lazy } from "react";

const Transition = lazy(() => import("./Transition"));
const BatchContent = lazy(() => import("./BatchContent"));
const SuspenseContent = lazy(() => import("./SuspenseContent"));
const WorkingContent = lazy(() => import("./WorkingContent"));
const RenderingAPIContent = lazy(() => import("./RenderingAPIContent"));
const StrictModeContent = lazy(() => import("./StrictModeContent"));
const HooksContent = lazy(() => import("./HooksContent"));
const Welcome = lazy(() => import("./Welcome"));
const InstallationContent = lazy(() => import("./InstallationContent"));

export default {
  Transition,
  BatchContent,
  SuspenseContent,
  WorkingContent,
  RenderingAPIContent,
  StrictModeContent,
  HooksContent,
  Welcome,
  InstallationContent,
};
