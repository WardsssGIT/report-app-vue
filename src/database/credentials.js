const { ipcRenderer } = require('electron');

class UserCredentialsModel {
  constructor() {
    this.tableName = 'user_credentials';
    this.username = 'username';
    this.password = 'password';
    this.role = 'role'; // Add a role column to distinguish between client and admin
    this.created = 'created_at';
    this.updated = 'updated_at';
  }

  fetchCredentials(callback) {
    const selectQuery = `SELECT * FROM ${this.tableName};`;
    ipcRenderer.send('select-table', selectQuery, null);

    ipcRenderer.on('select-table-response', (event, result) => {
      callback(result);
    });

    ipcRenderer.on('select-table-response-error', (event, error) => {
      console.error(error);
      // Handle the error
    });
  }

  checkCredentials(username, password, callback) {
    const selectQuery = `SELECT * FROM ${this.tableName} WHERE ${this.username} = ? AND ${this.password} = ?;`;
    const params = [username, password];

    ipcRenderer.send('select-table', selectQuery, params);

    ipcRenderer.on('select-table-response', (event, result) => {
      const isValidCredentials = result.length > 0;
      callback(isValidCredentials);
    });

    ipcRenderer.on('select-table-response-error', (event, error) => {
      console.error(error);
      // Handle the error
    });
  }

  checkUserType(username, callback) {
    const selectQuery = `SELECT ${this.role} FROM ${this.tableName} WHERE ${this.username} = ?;`;
    const params = [username];

    ipcRenderer.send('select-table', selectQuery, params);

    ipcRenderer.on('select-table-response', (event, result) => {
      const userType = result.length > 0 ? result[0][this.role] : null;
      callback(userType);
    });

    ipcRenderer.on('select-table-response-error', (event, error) => {
      console.error(error);
      // Handle the error
    });
  }
}

export default UserCredentialsModel;
