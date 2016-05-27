#!/bin/sh

set -e

GITURL=https://github.com/shunkou/tsc-tmpl.git

## set appname
if [ "$1" = "" ]; then
  appname=tsc-tmpl
else
  appname=$1
fi

## git clone
git clone ${GITURL} ${appname}
cd ${appname}

## npm install
npm install

## clean git files
rm -rf .git
rm .gitignore
