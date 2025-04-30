import * as bcrypt from 'bcryptjs';

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    throw new Error(`Error hashing password: ${error}`);
  }
}

export const comparePasswords = async (
  password: string,
  hash: string,
): Promise<boolean> => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    throw new Error(`Error comparing passwords: ${error}`);
  }
};
