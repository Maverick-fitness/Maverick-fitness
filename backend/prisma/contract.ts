import sqlFamily from "@prisma/orm-postgres/family";
import {
  defineContract,
  nativeEnum,
  pg,
} from "@prisma/orm-postgres/contract-builder";
import postgresPack from "@prisma/orm-postgres/target";

const Role = nativeEnum("Role", "ADMIN", "RECEPTIONIST", "TRAINER", "MEMBER");

export const contract = defineContract(
  {
    family: sqlFamily,
    target: postgresPack,
  },
  ({ field, model, gen, type }) => ({
    models: {
      User: model("User", {
        fields: {
          id: field.column(type.Uuid()).id().onCreate(gen.uuid(7)),
          email: field.column(type.String()).unique(),
          name: field.column(type.String()),
          role: field.column(pg.enum(Role)),
          createdAt: field.column(type.temporal.CreatedAt()),
        },
      }),
    },
  }),
);