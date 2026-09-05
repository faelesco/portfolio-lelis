import { ReactNode } from "react";

export interface ImpactMetric {
  id: string;
  objective: string;
  title: string;
  keyResult: string | ReactNode;
  description: string;
  technologies: string[];
  colSpan: string;
  isHighlight?: boolean;
}