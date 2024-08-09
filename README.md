# Practice-Full-Stack-1

Frontend - setup
```
npm create vite@latest . 
npm install
npm run dev
```

Backend - setup (root directory)
```
npm init -y   
pm i express jsonwebtoken bcryptjs dotenv cors mongoose cookie-parser cloudinary
npm i -D nodemon   
npm run dev  
```

Concurrently
```
npm install concurrently --save-dev
or
npm install -D concurrently
```


```
    "client" : "npm run dev --prefix frontend",
    "dev"    : "concurrently \"npm run server\" \"npm run client\"",
```

After completing the project - root's package.json
```
	"scripts"    : {
		"dev"  : "NODE_ENV=development nodemon backend/server.js",
		"start": "NODE_ENV=production node backend/server.js",
		"build": "npm install && npm install --prefix frontend && npm run build --prefix frontend"
	},
```