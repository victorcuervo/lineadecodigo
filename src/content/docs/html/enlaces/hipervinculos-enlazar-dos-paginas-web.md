---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMFIFTJ2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDw8cM84Kv4GjBvbUUZB4MvuC%2BPKa2fOHSyE28nJgtg5AiB0Dvv0b7InBcKVXYEwqplemlavMwUiOPy8krPZc6tXACr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMggJF5qi7fGj9h2M2KtwDFqEVPpTUd3WGfs29ausj%2FY0eCvoT5zrcYoKYEroIKDZwPzOl7%2Fk1yMSe%2FkYjWnApmTNt%2FWFyx18UPESUdNustvQyhvKAAHn5MOq2WMuK6CVXpariCbWbt%2BLBIONEZfEr4sAAozLANfXV8%2BAbnCoD4q3adxio%2BW5nCpAuxoxSoRnShA7QCQM1rZVtaWm08L94XL1b3CkFxwp%2FYucTU1RV2RcqMv43GkDu9x3h1E7BqSbjtmQ%2B37XynBf3%2FcHgq2mePQAu%2FBQtlP6CW90Ta0cg7gEvwAr1RI%2Fsb1GnoLgOV6Znhv7tqNe9rRHBhFUWGLflhAsS2G4VjX0vXUrhte04zjEW533cLzw0y4UB2jneNQ4T4LvRHJdTTyNGjhGjCo%2BVtWVaWN3yVjHV5vhUkf1CIE0Q27Ak1vb7jg5tdabchGRVtnl%2By%2BquSIFJIMnxnynSFEpy3om1KUqzuO%2BUgit32zdnfqvuagnDIG%2BBQ3zb4NU5%2FqfsXGkhwUF3HlGzTZNBkJXb3n5krSHGQByhOHOehbBtriQdep7JxMUBea6L5Evh1RA8COkh2btQtopWyaK7bTzrpIMKDz8Yttm35D7aLv4Rrmz3l3Mb%2BvusFAYBITNbbaNf8FqAgZNP83Ywv5XDyQY6pgHVQb7iJG3Rq%2Bo3U80G1v5ON4XT224rKpPtRp6Ne82Gh241wg%2Fa6S7pEUJxLKQF%2Bdubz717DYHtCA8lnB22uBgbcTGQn18ivh%2B5%2F%2B03b8RtVj3vwkM5GhuTHJzktpQX2Gb4sljhhuSos9fPVfW%2FXWh746mVO63i06Vym%2FZugcGdbKIFszOj1Jj%2FEdYBpb8CPyNoBy7kj3w5MDKD3Hzh94jPbc2y7Sjc&X-Amz-Signature=3748c719e0a894b33fa59ec8c15a3d60cc4900d327751139488d76fab2a8d6ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

