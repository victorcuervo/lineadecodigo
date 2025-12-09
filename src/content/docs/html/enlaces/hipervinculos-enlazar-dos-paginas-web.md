---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIOQPKQ3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T193004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWYgBm%2FhM4St%2FRLogdQeSNhGdmY2Ou9Y8OzE%2BwBIMujAiEA19sz7HrBFYJQzIx0ItgIBTHbcN6LUwN5i18bkOPFbawqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj5ZOBj%2B%2FUCQeB8hCrcA3cTTAXjVCF2GZEJGMtQ7sjgXMgPMNXXaJEEHFO3qgphK8Xe7VzC0sLdXABFtOpsb44LqI16%2Fm%2FZakpHE8xLJ6ODmNo6zFstA0tXLwmjJy09dg6xjyiRKEHi6nBixEImzt8LNlAL2PIyZaIILHdHo2XAVnv1nCjBrQF%2Fh2m%2BjQqphY41Z5NG8htzsfC3talkCNEkBT2D5EKJNONpA5GOGLzBSq6p2ocGV1d48EOfaS8VNtmJA3NqB%2BLYkMJz4OIs3xlfMPwbYwIWu5BsSEDmGsJhcwkl0r4IH0j8d8M%2BBI3IowO2d7OwAyaEuYAfre%2BK5j5IBpzR9Q1xD0rqcRvBCLHuSwLI7H1%2FbO0KdE7cFUW%2BSJHCcvQdKEbsGv3exPhnSInCZwtd7uG1PSSvw5cWqTaWyhnC%2BjVIv%2Fua5iH5CwCiFPVwxKFkkUkgn7%2B3y3QMZjXICOTxNgeuosBXNH%2BbEHxwPBcjBKwG01%2BdI1dY4BX0Pi0jrHlMRflSy%2BP0mBDC1ZyBoDOdKty7XnyWldpsbVln6fs05nYVBOJyLoclhZKwOZK0brB20fR%2ByTJaYnUc04b2TfkhZwBkQSrqWwnlO4cfQtaFNZutLfxAo2%2BDaHYRAsy7QTmBtBanxy3MMPbe4ckGOqUBQj%2FAqXE%2FtUwp7UICDJY7rzT3Esd58%2F4jjiXOfl5R8lDcaJfj26DsxVxbolPc4O4Zfh0pn6zbkVyzsub9j3MadOgZ%2FoZbvx4kRDMy1gu4ndlsLSbLAKL2YGOJ%2BhUOcdUc1saLgf%2Fn5NxsQutpPcrfVHuuhjXcLYNzt6cu4nlfCGJv86t7PZxs%2Fs6%2BQ%2BmYroeBCbM2W3JHcB%2F5lSWWb2GSi04URXH5&X-Amz-Signature=ade18c26bf9d062c39e604d66dc86baa46229a1cbc8b9d7691926a8106eb5932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

