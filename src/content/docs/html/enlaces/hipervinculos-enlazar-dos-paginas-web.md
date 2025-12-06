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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD6SKX3F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANg0kLP784a%2FkxwYnwf1ATOgPrp8qI2kC9h%2BtqRlFFfAiEAw3QSx3xcV7DzB5sFnYycpA1K4YNusKA5fVBilIKbaAIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDClnMPGnOUwFafQa2CrcA76%2Bw7tGrW4pN44k3cL0mMtDDq744WAmCDrgTqUSUz0y4Yu6NSj466%2Fpa2dh%2BCG%2FaG9mjyMlFXjmnKLgk2iZSDKnu1rGgSuj%2B0993hC3%2B8N6y5%2BGkOIoTiqudaA5LPuHZrd1Qp0e%2FDHkO9v9nQ40uIOMyDnOHfzEEejFoFsoWPb944TtyvQx0Gbswy2LWuVTRk4HTW%2BtjRUaroVdTvlZLtX%2BskatSMR2jEccnv9hw%2BqFyqFCwEFIwTmiCip6n5eNJHzitFLQHErDKgpSbOCTdNN5PQ%2FgH4hZ1PDDpzxPCl6hQ1nqAz0%2F9gG%2B5HdW0PxLiGjpBO7yVBB%2BUjq4iRj1ZNAlhmwUAo3BsjOQOFZHIZjbyoh5qcVHthEHZ7rMdERzUrfUl6ORBPvMkUSi%2Bxh1fbh7Ltlgmco9M5%2B1xeDN5Juah2bc%2Fz5XQNoslmV%2BBIwXJs9CAehz55mIepEqyJcP6fWQpCikWzEX5CNoKmhhTlUyNF5TN7nULw8LoPOe5zH%2Fucv4e%2FBr65McluX6MjZYLAM1N9DLoKg9kwKXWodWamdKm%2Fb8qs9GeTXvqwkDP83VPYLbiC6XVWSDgtxlsN4i1EE2hDGPGmymhrZFPyXErmZAVSvlKHnNFsHzi%2FnZMPvG0ckGOqUBDkrXrqsdx%2FsuxQ99AgG86rZcju7SaSxJEiiCWJhdus5N%2B4MegJMeL4Oe6sab2pVveyLFUargG9djwH305spwDFSxogrWzENI3B97g8xoE2qZmy5C%2BQblXB3iShNdabTvRW3DVWeP4yV9ouND0N5qvH2FkWkOXuv1CALwq1j%2FElnYAIHr13EOFUZGKQxhVe3CMey1j3p3l%2FcGVUNvvmUBzO1rjSBr&X-Amz-Signature=1dd1e0d562673a42dc3a22d9efce8314ba518a2ca01a41af403f17682d281782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

