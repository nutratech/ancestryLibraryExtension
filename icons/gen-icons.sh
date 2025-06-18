#!/bin/bash -ex

JPG_FILENAME=Ancestry_Logo-150x150-416312872.jpeg

convert $JPG_FILENAME -resize 48x48 border-48.png
convert $JPG_FILENAME -resize 96x96 border-96.png

