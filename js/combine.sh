#!/bin/bash
echo "Combining all javascript resources into one file in the correct order..."
cat jquery.min.js WebSite.js ImageParticle.js GDD2011Berlin.js > all.js
echo "Done..."
