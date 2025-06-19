SHELL := /bin/bash

.DEFAULT_GOAL := build

.PHONY: format
format:
	prettier -w .


.PHONY: build
build:
	zip -rvl0 ext_packed_ancestry_lib.zip \
	ancestryLibrary.js manifest.json icons/
