maker\_parame77
===============


Presentation
------------

This repo is a maker-repository. It stores the parameters and the STL-files of parts made with *desi77*.
This repo uses the javascript packages [desi77-cli](https://www.npmjs.com/package/desi77-cli) and [desi77-uis](https://www.npmjs.com/package/desi77-uis) of the design-library [desi77](https://charlyoleg2.github.io/parame77/).


Requirements
------------

- [node](https://nodejs.org) > 22.00.0
- [npm](https://docs.npmjs.com/cli) > 11.0.0


### Optional requirements

- [OpenSCAD](https://openscad.org/)

For Ubuntu users, *OpenSCAD* is available on [snapcraft](https://snapcraft.io/openscad) and can be installed with:

```bash
sudo snap install openscad
```

Upgrade
-------

For working with the latest *desi77* version:

```bash
npm outdated
npm update --save
git commit -am 'npm update --save'
```


Dev
---

```bash
git clone https://github.com/charlyoleg2/maker_parame77
cd maker_parame77
npm install
npm run
npm run desi77-uis
npx desi77-uis
npx desi77-cli --help
./make_parts.js
```

Vocabulary
----------

- Design: A parametrizable 3D parts. Desginix is a collection of designs.
- Part or Reference: A particular parametrization of a design.
- Instance: The realization of a reference.


References for the maker\_parame77
----------------------------------

ID | Reference           | Design             | Nb of instances
---|---------------------|--------------------|----------------
1  | door1arc            |  door1arc          | 1

Each reference has its own directory with its json-parametrization, scad-script and stl-file.


