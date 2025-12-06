---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
slug: /html/hipervinculos-enlazar-dos-paginas-web/
author: victor_cuervo
---

Uno de los principios sobre los que se sustenta la WWW es el enlazado de documentos. Así que vamos a aprender a enlazar dos páginas web. Esto se basa en el concepto de Hipertexto, que viene a decir algo así como presentar documentos que puedan bifurcarse o ejecutarse cuando sea solicitado. Esta definición se data en 1963 por **el sociólogo Theodore Holm Nelson**, mucho antes de que naciese la WWW.


Una de las formas del hipertexto son los _hipervínculos_ o _hiperenlaces_ o enlaces (forma vulgar más conocida de las tres).


Así que si queremos hacer páginas web utilizando [HTML](https://www.manualweb.net/html), lo primero que tenemos que aprender, o una de las primeras cosas, es [cómo hacer enlaces](https://lineadecodigo.com/tag/html-enlaces/).


Para ello nos tenemos que apoyar en [el elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que viene del ingles _"anchor"_ (ancla) y que es uno de los elementos base del lenguaje [HTML](http://www.manualweb.net/html).


### Atributos del elemento a para enlazar dos páginas web


Los atributos [del elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que tenemos que conocer para generar los enlaces son los siguientes:

- [`href`](https://w3api.com/HTML/a/href/), donde habrá que especificar la página (o recurso) de destino. Este podrá ser con la dirección absoluta o relativa al enlace que queremos poner.
- [`target`](https://w3api.com/HTML/a/target/), donde indicaremos el frame destino de la página. Si queremos que el enlace se abra sobre la misma página, lo dejamos vacío.
- [`title`](https://w3api.com/HTML/title/), título del enlace. Será útil para que se interprete por los clientes qué significa el enlace que se muestra. Suele ser útil en temas de SEO.
- [`type`](https://w3api.com/HTML/a/type/), que especifica el tipo MIME del recurso enlazado, es decir, si es una página, si es una image, un archivo de vídeo,…, ayudando al [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) a determinar cómo manejar el contenido al que se está enlazando. Este atributo es especialmente útil cuando se enlaza a recursos que no son páginas web estándar.

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSWDFQTS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1iCcRPj8PJE4ElTqxMmCC91csleom9cPAO9A%2BjCbbxQIhAL9HcnwO%2BYLukpnnYzTfgB%2FGko4v98qBjVzFpg0xRrhBKv8DCG0QABoMNjM3NDIzMTgzODA1IgyafEsK4KotxBl1mtMq3AO4azSFTsfHbY5afwFjt2s3eAMHlvmhsoj08dABHrsuFAHPRkV4qMH5ugZrmwQv23AK1l1%2FChd3KC9Ng%2Bx50FwvJh4gU2P2NxjDV9h3vEBPMx80aDa5%2BELo9%2BVPMgrezhu8whYscxjVbFRt4I%2FdrophDKgcUvS9ZltTXwBKr7%2BHjLgToG1gPPylC7MDFlkYxujkz%2FbLaFoLfS1TBg6iXP8tQm7EfO%2FjQkCgZ3ztsgy%2BYBXz%2B2aYeiVqKJbMjS58PcPRmCYHQ87tCHqQA2dh9TyOnx6ftUYmm8OzA2JSR1wVOPj6vEjG3kXnXhbNlsyq0PlvLr7TAkh89XWXcNUa23kT1k0uEDXi7US4QJl7Olf9FwO8b7Y9Rd%2Fq6WzZwxeKMPTMGh%2FueIjZcRx%2BHJQW8aejGp%2FEe5QvGdFsokh2SGMGePdrIkb9V8hPdtaGHV8LDuwSiNVep7vBDnUNOSj3kR2JXCVb6Zx6YQkdX%2BlXlzO6IiaIQMMPGk6Bfvl6DKLJdpDJ2SjeHQg0vZnvDbbE3licxTc%2BamW7Ejid06oV88%2FEZ0xhd1aLYS6HTwcbHApLRkel9GVNEdiP2VghsWewHEwXGuBE5fanFtvoidnNT18QZIs0cJVxCZU%2Fic3BrjCzw87JBjqkAbPLJjngyGrgKo5hXzARulIamAC2kGcXDikthS0JrJ5GgFIQAT0ROFrpYnq%2FRpop01OGjetgdx1Fz%2FdFQiBay4VENMz9zlYE0WRBQt%2B0sBLyWBk8zmu7u%2FIL3GvUsiVFq5PZKGaKTKBRPxn1zD1Zm0mRHjlRgp0%2F8Up%2F84bUlbN6nbE6lOg0COtffJbsYQeEAsIRn7EnYKzgZDISgri%2B%2FCWEVMKK&X-Amz-Signature=c7f5643c601dc0e2f2f49fa41bd575d89e7b07e00fdb5c44698e70520aa0a4b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

