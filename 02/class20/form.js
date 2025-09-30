export const userForm = (req, res) => {
  res.write(`   <form action="/submit" method="post">
    <h1>Send from server</h1>
    <input type="text" name="username" id="">
    <input type="password" name="password" id="">
    <button type="submit">Click</button>
   </form>`);
};

