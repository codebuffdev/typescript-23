type UserType = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(User: UserType): UserType {
  return User;
}

const User2: UserType = {
  name: "John Doe",
  email: "john.doe@example.com",
  isActive: true,
};

createUser(User2);

//--

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };


