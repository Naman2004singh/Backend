- Browser understand only the HTML, CSS, JS at the end

- There are various ways to create the application in the frontend - React, Vue,js, Angular etc

- These are the bundlers, called as toolchain -
theu basically help to bundle all these files and convert to browser understandble HTML, CSS, JS

# To create the frontend application
- npm create vite@latest . - create in current folder
- npm i
- npm run dev

// to handle the web request, can be donw using the fetch() also
- npm i axios


# CORS(Cross origin resource sharing) - provide the safety
- server is running on diff website, port or domain 
- same origin means url, port everything should be same

- to avoid it we need to
    1) from the backend
    white list the origins(i.e ports, urls) or allow all
    * remember while deploying vercel, netlify they work on diff ports

# use of the proxy
- add the proxy and use it with all the end points

in vite.config file

 // this toolchain detect if /api is there then automatically add this

// this proxy will be added like the request is coming from this url only

// server will see - it is originateled from this url only

# bad practice
- npm run build