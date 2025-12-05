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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWHQ6J4A%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEk512pBUffjWYEEHuz9hccmCduoEflM1jUp3eon2%2FNFAiEAm9vQDtWjbB77GPPmHRkRrCeyXj077Z0vnytchBui9Gwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDCSis76obrp%2F%2Fn2r3yrcAzI6Hk8yJSP07pslTDBSsQ9I1gbp3vQ1856u13%2Bdr5QNTHK21AXkh94Ey3WDIgYRDeuiT%2F9MsidzKZW75tjDuNVBJ%2FpOttMHUsJLrrZw3GcSdpDMw%2BXGUqTbQruJ40eIdPkgfmD0hLtkgl0CfU1T3cYa6X%2BAtliuZk9EEICR5BdFBu148uHIbVnDDTLoO%2FOjIFV32a5Ge45GL58HQA0J4o%2FpI7NF%2BrhKge9oqRK7qwtX%2BM8Lt5zEyQiRT%2Fxknj%2BiZLlvTrfJRqJk1q9Hn29EPzqPvP2VUvY5%2BpbWbBf4iNM2KxMARF%2FtEvJP3WuOc%2BX7gNWKbFXkxokCNmWaEtrijS42BuM52S%2F9d5bTsjucFk1psPtSSCSZs9e34RwrviEybmCT853OBiJFUguymItJiAk6DjhlzY5n2uLC%2FFkWCFgHmxng0KJ2EBJ3nd3x1FK%2BQgYHg8xJ%2FatgmWx0IojAFlZVd%2FAQX6q58Ck9u1kIt%2FVPkmyn9THWzrozKcX21dNpx1J%2B%2Fy96TQ5Q1Shm1%2FHfTZmSM%2B%2BqSnJJqwe1bW0a1SlLz0wc5PNCUcEVwL58wPammoBgCDrSUINcmeCFOoZ%2FUF8i2I%2BHBfc2oG982SK01sZ9Lo8vvq4C6J4fUocJMJLxzMkGOqUBr5nNphAOPBpdmNGpR2MWZYifOZgSxbnOsmNss874XF25nBSGJxyUI91ClDjpIwlkLn0eQAnpqnajGNMyZV%2FwJ9ilbYEhn1E287a6tt4bjA%2FKLt75TLtnuWg0Xqvj5Rop370v8ft%2BuD6SJmApqGMTbgG9sn0tNY66vnNtQedi4oNpdxZncW1bv%2BnwSflf4T0Ve2ilkc0O5plJTE3hhsiSnwOfEOEq&X-Amz-Signature=83c15f40be3689ca5bb4f51e0d240c60ab080c731d7c989dea3caf89d55ea566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

