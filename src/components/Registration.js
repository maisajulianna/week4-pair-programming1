function Registration() {
  return (
    <div className="registration">
        <form action="/submit_registration" method="post">
        <label for="username">username:</label>
        <input type="text" id="username" required/>

        <label for="email">email:</label>
        <input type="email" id="email" name="email" required/>

        <label for="password">password:</label>
        <input type="password" id="password" name="password" required/>

        <label for="confirmPassword">confirm password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required/>
      </form>
    </div>
  );
};

export default Registration;
