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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUVO66UM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEg3Uij1xoBMz6u6N5Sn0CaltiUt8ShLb4YjelwIasVTAiAhrSrgFEknBZzArE2QvwK2iqd0o2tz9DXntTC1yfaIlyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMCN4A6mzLjb0wb3SgKtwDXanD3EFdrwUEeFBo5z5ifzh0jXbur%2F%2FpvujPiEockGfL8BVRNekxH7aqSCPReSAq1dOiXmWLkm8efI9znrOgliOXkQBTpbaVL4xmri4aaF6Nmgq5Q8YfDOtNcB6Du%2FfibjRZ47rTAZvW%2BrwyZCJ7zWYsJIBfj6EV1ZSdX2FdjDq4WfniTCSJ47%2BIGgUV65haFyFfRPwr38SmfXr%2FBQzqQkJnnAlxYE9d%2Fy9pi8FCiP%2BwruX4tonTpYY2ydOjQYnxOVfcohI5H7wN21UVaLjQPvy1r00qDFmHLIHw0Gkeqm4Sd%2FQ%2BBmbE6GPoSbkhgSceQzhTxhTTpdFtxdpEdgc11swaWPe%2FoOg1Z0GexuOtpDs6PLjFeSlR4c%2BpjxNQ0%2BWsWvDRnGnpywgC8ae6Jbn39Itc6B0uz0BNFTJP8pPVs0R3SmhoVlrX3b9oZEZWj4j0MnBAAYVoIwz4QZDYNQQ4vaufZ%2FLKQib9zk96hcm4FYZKMgNJCeuIzaazjTTSBPvdj%2Bm6G%2B%2Fx5x1q%2BO0atgDrmEQE7PMEax6NmzmR89uZukRIaJNAfzupgFFcW%2FAlYrdB0tnJqdCVzFEzH%2F2kS56YGqFe7AC8FvWPEDk90avW0PLx41gfOaFZj%2Bg13mMwrtTSyQY6pgH1wuRRZpO8kFGmg7vbznh35NzkTgKzE5qzSwQMS6QekHd16AsIu%2BpDL1BLKvpS%2BL7JmQliG7F430Zzq6mR2b9A9JkOUI2RbfKOT8uyvuFuGBBh%2Bb%2FwdBzPDux2wUdt%2Bj98hz06oXPfJoTI7OtQpPHNEQFL6nI2u6DFuTlG7JgC3BB9MG1H0Z%2Bacu9%2FlRscY%2BLmOE72bHoFAuCEMrNnr7e5ejYV4xRH&X-Amz-Signature=1be26c9d5d9f31a7756f5ab8ed9e8e2b54cbab3cda40254395de9a9a29fd5ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

