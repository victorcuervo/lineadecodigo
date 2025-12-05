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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFGK7QA4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpNfCrIaDkllWNUcYYKT85mS7y%2BBJJwzdLE48985%2Bu%2BAiEAipTtKpYKYKNF4r88edZR%2BWVFdyf0wkMkjf0hayZyQFUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFBGBWehkKE8ZH5EhCrcA2gIZ0j%2B2vSE1WT1su9skH3b4h6JXn86lTEniS1Bw%2Fh%2BM0tTzXkm5L7SwunQBsFvdUprtx1CktpIoSqPjQIq2qADHhVnzlsoPicNoFHZyKfjrIYK38rBZ5ChTMqmUXpO1yk052DsKO6wdBtc4O%2F13DRC74wNX%2B98YxVUdYIq6NvxTVh3C%2BnHiBvqfdYIOnupqpT6mNFCIubtJhNcmE5%2BHdN0uoXYrte1Cky7ueBtQtOMhriLDIzbQgdi2u9H3%2B%2BKSUZnMvD8QmlsiMqF7ktNumrR5ah%2FX%2FDz6s6lLlScuoJ%2BfMd7WCyCkFOfgZAscBOEsPtq%2FqXd9N%2BvHJiHdX2%2BEGh1adTKRVb9w8QJwUxCwZYNarSvIac1lHc6t5YXwwOExcMY0I%2F97v84ptwFlQACMY%2F6649q9CN6sCcTKBSJPy6WAcbhP5cjgnR1JGjhsD6zC1N%2F%2BdNhxQHcmV22e%2BLo3b57aS9HDjJJSIe7ZSxQzWXrB4J2FNr4zUICv6um5wtTWKyt8QRvpziET0YAlEKAQmgsA4VbEmFBls52p3bweV2Poo5oH5Un36%2F%2FeGx1ttc3HEVLaS%2FAmqGGqV%2Fp8vS4ps7%2FH8S8pXwF86RWisBpLNYH%2BSu4QLhzRKkwzUCwMOOMyMkGOqUBVSeRQo%2BC%2FtGZsMsxwHN0xC7VN59SjRVyheOm2enVMv5wqMx9qzAC8IZAe9nOT4RTmcmUHs7JHsZP89uARwlgCMpDDxa6AGwtbaU%2FXpaIXv3pWpq5fZxLIFSlYH2I3BkHikwLoPegdjhcEoEIV32I6ipGtx59baw44OK9EXvtwu2bbo9luJwXHQ8Qw5LId3jdqKJR%2FbkNg0sq26kn1TpFhhOR1boX&X-Amz-Signature=74a85ddd6c36d50707d5e3bed5b6881fbb7ed9ee697d899d990d7d8624f1e909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

