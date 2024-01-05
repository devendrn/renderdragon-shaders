# Extra resources

This page will include random things that might be useful to a small niche of users.


## Unpacking data from material.bin files

```sh
java -jar MaterialBinTool-all.jar -u "material.bin files to unpack"
```

You can find material.bin files inside `<minecraft data path>/assets/renderer/materials`


## Merged material files using MBT {#merged-data}

Material data from multiple platforms can be merged into a single data file and then be used to compile materials that will work on all platforms that were included in the merge.
Keep in mind that the final material.bin file will be quite large.

To merge material data using the MBT jar, run:
```sh
java -jar ./MaterialBinTool-all.jar --data-only -o "output dir" -m "material.json files of each platform"
```

This will only work if the material.json files are all from the same version of MC.

Here is a bash script to do multiple files in the following structure:
```
Android
└─ RenderChunk
   └─ RenderChunk.json
Windows
└─ RenderChunk
   └─ RenderChunk.json
iOS
└─ RenderChunk
   └─ RenderChunk.json
```
```sh
#!/bin/bash
MBT="java -jar ./MaterialBinTool-0.8.2-all.jar"
MATERIALS="Android/*"
for s in $MATERIALS; do 
  MAT=$(basename ${s})
  echo "Merging $MAT"
  $MBT --data-only -o merged/$MAT/ -m Android/$MAT/$MAT.json Windows/$MAT/$MAT.json iOS/$MAT/$MAT.json 
done
```

To use these, copy the `Merged/` directory to `data/`, and add the argument `-p Merged` when building.
