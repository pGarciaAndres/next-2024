export const authConfig = {
  providers: [],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request }: any) {
      if (isAllowedUrl(request.nextUrl.pathname)) {
        if (auth?.user) {
          return true
        } else {
          return Response.redirect(new URL('/login', request.nextUrl))
        }
      }

      return false
    },
  },
}

function isAllowedUrl(url: string) {
  return (
    url.startsWith('/notes') ||
    url.startsWith('/health') ||
    url.startsWith('/statuses')
  )
}
