FROM btwiuse/k0s as k0s

FROM node:buster

ENV TZ utc

COPY --from=k0s /usr/bin/k0s /bin/k0s

RUN chmod +x /bin/k0s

RUN apt update && apt install -y curl bash git tmux vim

COPY . /app

RUN chmod +x /app/entrypoint.sh

WORKDIR /app/packages

# .git folder not available in heroku
# RUN git submodule update --init --recursive
RUN bash -c "git clone -b subquery https://github.com/subqns/nftmart-subql nftmart || :"

WORKDIR /app

RUN yarn && yarn build

ENTRYPOINT [ "/bin/bash", "-c" ]

CMD /app/entrypoint.sh
