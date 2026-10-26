import {
  siAxios,
  siDocker,
  siExpress,
  siFirebase,
  siGit,
  siJavascript,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPostgresql,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

export type SkillIcon = {
  title: string;
  slug: string;
  path: string;
  hex: string;
};

// Aliased with clean professional display title
const javaIcon: SkillIcon = {
  ...siOpenjdk,
  title: "Java",
};

// 3×5 grid — consumed by the 3D keyboard (one icon per keycap) and, on mobile,
// by the flat list below for the static skills grid that replaces the
// hover-driven keyboard interaction. Taglines live in the i18n dictionary
// under `keyboard.taglines.<slug>`.
export const SKILLS_GRID: readonly (readonly SkillIcon[])[] = [
  [siJavascript, siTypescript, siReact, siNextdotjs, siTailwindcss],
  [siNodedotjs, siExpress, siPostgresql, siMongodb, siFirebase],
  [javaIcon, siPython, siAxios, siGit, siDocker],
] as const;

export const SKILLS_FLAT: readonly SkillIcon[] = SKILLS_GRID.flat();
