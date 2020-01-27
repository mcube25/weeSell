//using bcrypt
//install bcrypt using npm install bcrypt-nodejs
import bcrypt from'bcrypt'
const saltRounds = 10 // increase this if you want more iterations  
const userPassword = 'supersecretpassword'  
const randomPassword = 'fakepassword'
 
const storeUserPassword = (password, salt) =>  
  bcrypt.hash(password, salt).then(storeHashInDatabase)
 
const storeHashInDatabase = (hash) => {  
   // Store the hash in your password DB
   return hash // For now we are returning the hash for testing at the bottom
}
 
// Returns true if user password is correct, returns false otherwise
const checkUserPassword = (enteredPassword, storedPasswordHash) =>  
  bcrypt.compare(enteredPassword, storedPasswordHash)
 
 
// This is for demonstration purposes only.
storeUserPassword(userPassword, saltRounds)  
  .then(hash =>
    // change param userPassword to randomPassword to get false
    checkUserPassword(userPassword, hash)
  )
  .then(console.log)
  .catch(console.error)
/*That’s it! You can now rest assured that you have stored the user password securely. The interesting thing with security is that it is always a cat and mouse game. Security advice changes with the time as new exploits are discovered and computing power increases. New attacks will be discovered but so will new solutions. Remember, the best security for your application means constantly keeping up with vulnerabilities, software updates, and new tools. For now, you can breathe easy…*/