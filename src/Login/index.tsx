import React, { useState, FormEvent } from "react";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { Stack, TextField } from "@fluentui/react";

const Login = () => {
  const [user, setUser] = useState<any>({
    email: "",
    password: ""
  });

  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setUser({ ...user, [name]: value });
  };

  const log123 = () => {
    console.log(user.email);
  };

  return (
    <Stack>
      <Stack>
        <Stack.Item grow>
          <TextField
            placeholder="Enter your email ID"
            label="Username"
            value={user.email}
            name="email"
            onChange={handleInputChange} required
          />
          {/* <TextField
            placeholder="Password"
            label="Password"
            value={user.password}
            name="password"
            onChange={handleInputChange}
          /> */}
           <TextField
              placeholder="Enter your password"
              label="Password"
              type="password"
              canRevealPassword
              revealPasswordAriaLabel="Show password"
        />
        </Stack.Item>
        <PrimaryButton onClick={log123}>LOGIN</PrimaryButton> 
      </Stack>
    </Stack>
  );
};
 

 

 

export default Login;
