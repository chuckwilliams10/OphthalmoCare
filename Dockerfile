FROM dockerfile/nodejs-bower-grunt

MAINTAINER yass, yassmokh@ophthalmo.care

# Install Mean.JS packages
ONBUILD ADD package.json /home/mean/package.json
ONBUILD RUN npm install

# Manually trigger bower. Why doesnt this work via npm install?
ONBUILD ADD .bowerrc /home/mean/.bowerrc
ONBUILD ADD bower.json /home/mean/bower.json
ONBUILD RUN bower install --allow-root
ONBUILD ADD . /home/mean
#ONBUILD RUN grunt build

WORKDIR /home/mean

# currently only works for development
ENV NODE_ENV development

CMD ["grunt"]

# Port 3000 for server
# Port 35729 for livereload
EXPOSE 3000 35729
