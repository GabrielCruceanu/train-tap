export enum AuthProvider {
  Google = "google",
  Facebook = "facebook",
  Apple = "apple",
  Email = "email",
}

export enum AuthType {
  Login = "login",
  SignUp = "signup",
  ForgotPassword = "forgot-password",
  ResetPassword = "reset-password",
}

export enum AuthInputError {
  UserAlreadyRegistered = "User already registered",
  EmailAlreadyRegistered = "Email already registered",
  UsernameInvalid = 'Invalid characters, you can only use "a-z", "0-9" and "_"',
  UsernameIsNotAvailable = "Username is taken.",
  InputRequired = "This field is required",
  NeedOnlyOne = "You need to select only one option",
  OnlyLetter = 'You can only use "a-z" characters',
  OnlyNumbers = 'You can only use "0-9" characters',
}

export enum AuthResponseError {
  InvalidLoginCredentials = "Invalid login credentials",
  NewPasswordNeedBeDifferent = "New password should be different from the old password.",
  EmailUsedToMuch = "Email rate limit exceeded",
  EmailNotConfirmed = "Email not confirmed",
}

export enum UserType {
  ADMIN = "admin",
  CLIENT = "client",
  NUTRITIONIST = "nutritionist",
  TRAINER = "trainer",
}
