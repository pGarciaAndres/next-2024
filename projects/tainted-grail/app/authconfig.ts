export const authConfig = {
  providers:[],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request }: any) {
      if (request.nextUrl.pathname.startsWith("/statuses")) {
        if (auth?.user) return true;
        return false;
      } else if (auth?.user) {
        return Response.redirect(new URL("/statuses", request.nextUrl));
      }
      return false;
    }
  },
};