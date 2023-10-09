// Please read the README.md to understand what to do. Happy Coding !
async function fetchUserData() {
  let newUsers = [];
  try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      let usersData = await response.json();

      const modifiedUsers = usersData.map((user) => ({
          Name: user.name,
          Username: user.username,
          Email: user.email,
          Address: user.address.street,
          Phone: user.phone,
          Website: user.website,
          Company: user.company.name
      }));
      console.log('%cindex.js line:17 modifiedUsers', 'color: #007acc;', modifiedUsers);

      const filteredUser = modifiedUsers.filter((user) => user.Email.includes(".biz"));
      console.log('%cindex.js line:22 filteredUser', 'color: #007acc;', filteredUser);

      const sortedUser = modifiedUsers.sort((a, b) => a.Name.localeCompare(b.Name));

      console.log("%cindex.js line:23 sortedUser", "color: #007acc;", sortedUser);
  } catch (error) {
      console.log(error);
  }
}

fetchUserData();
