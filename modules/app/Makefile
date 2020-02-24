#
#	                    __    _
#	   ____  ___  _____/ /_  (_)____  ____  _________
#	  / __ \/ _ \/ ___/ __/ / / ___/ / __ \/ ___/ __ \
#	 / / / /  __(__  ) /_  / (__  ) / /_/ / /  / /_/ /
#	/_/ /_/\___/____/\__/_/ /____(_) .___/_/   \____/
#	                   /___/      /_/
#										   nestjs.pro
#
include .make/Makefile.inc

NS		?= default
VERSION ?= $(shell git rev-parse HEAD)
APP     ?= app-name-here
IMAGE	?= gcr.io/your.repo.path/$(APP):$(VERSION)
PORT    ?= 80

.PHONY: build

build: 		; docker build -t $(IMAGE) .
run: 		; docker run -p 8080:8080 $(IMAGE)
push:		; docker push $(IMAGE)
