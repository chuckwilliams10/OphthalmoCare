FROM yassmokh/node-mongo-neo

MAINTAINER yass, yassmokh@ophthalmo.care

#WORKDIR /etc/init.d
#RUN sh neo4j-service start

WORKDIR /
RUN mkdir -p /data/db && chown -R mongodb:mongodb /data/db
#WORKDIR /data/db
#RUN sudo service mongod start

#WORKDIR /
RUN mkdir -p /home/ophthalmocare
WORKDIR /home/ophthalmocare
ADD package.json /home/ophthalmocare/package.json
RUN npm install

#ADD .bowerrc /home/ophthalmocare/.bowerrc
#ADD bower.json /home/ophthalmocare/bower.json
#RUN bower install

ADD . /home/ophthalmocare

ENV NODE_ENV development

VOLUME /data/db

#EXPOSE 3000 35729
EXPOSE 0000 27017

CMD ["mongod", "grunt"]
#RUN cd /home/vagrant/GitHub/ophthalmocare

# Install Mean.JS packages
#ONBUILD ADD package.json /home/vagrant/GitHub/OphthalmoCare/
#RUN npm install

# Manually trigger bower. Why doesnt this work via npm install?


#WORKDIR /home/vagrant/GitHub/ophthalmocare

# currently only works for development
#ENV NODE_ENV development

#CMD ["grunt"]

# Port 3000 for server
# Port 35729 for livereload
#EXPOSE 3000 35729
