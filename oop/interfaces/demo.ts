interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  //getCoupon: (coupanName: string) => number;
  getCoupon?(coupanName: string, value?: number): number;
}

interface User {
  githubToken: string;
}

const sp: User = {
  dbId: 12,
  email: "sp@gmail.com",
  userId: 123,
  startTrail: () => {
    return "trial started";
  },
  getCoupon(coupanName: "mx10", value: 10) {
    return 10;
  },
  githubToken: "1234121dbc",
};

sp.email = "anshu@gmail.com";


