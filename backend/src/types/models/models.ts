import type { Optional } from "sequelize";

export interface ExempleAttributes {
  id: string;
  Exemplebis: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export type ExempleCreationAttributes = Optional<
  ExempleAttributes,
  "id" | "createdAt" | "updatedAt"
>;