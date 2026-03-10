ManagementApplication is a primarily Python Django application that utilizes Reactjs as its frontend


firstv you'll need to install node via 
    npm init -y

then:

    npm install --save-dev \
    @babel/core \
    babel-loader \
    @babel/preset-env \
    @babel/preset-react

    npm install react react-dom

    npm install bootstrap @popperjs/core
    npm install --save-dev style-loader css-loader


If you ever nuke node_modules and want to reinstall everything:

    npm install react react-dom bootstrap @popperjs/core &&
    npm install --save-dev \
    webpack webpack-cli webpack-dev-server \
    @babel/core babel-loader @babel/preset-env @babel/preset-react \
    style-loader css-loader


run to see what is installed:
    npm list --depth=0
