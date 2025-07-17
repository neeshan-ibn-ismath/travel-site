import { postgraphile } from 'postgraphile';
import ConnectionFilterPlugin from 'postgraphile-plugin-connection-filter';

const { DATABASE, PG_USER, PASSWORD, HOST } = process.env;

export default postgraphile(
  {
    database: DATABASE,
    user: PG_USER,
    password: PASSWORD,
    host: HOST,
    port: 5432,
  },
  'public',
  {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    appendPlugins: [ConnectionFilterPlugin],

    // detailed error messages
    showErrorStack: 'json',
    extendedErrors: ['hint', 'detail', 'errcode', 'message', 'stack'],
  }
);
