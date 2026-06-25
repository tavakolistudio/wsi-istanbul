import type { CrowdLevel } from "@/content/types";

/** A location choice already resolved to the active locale's strings. */
export interface PlannerLocationChoice {
  id: string;
  title: string;
  image?: string;
  bestTime?: string;
  crowdLevel?: CrowdLevel;
  outfitSuggestion?: string;
  estimatedDuration?: string;
}
