import { execa } from "execa";

export const initializeGit = async (projectDir: string) => {
  try {
    await execa("git", ["init"], { cwd: projectDir });
    return "Initialized Git";
  } catch (error) {
    return "Failed to initialize Git. Please initialize manually";
  }
};
