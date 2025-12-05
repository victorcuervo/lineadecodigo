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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGVIXV5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T222156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyjCHfLw1Uzg4M3pX1byRDa7fd7hjxOBq4PYKmqbR9uAiEA3iHdq3xxwNVrIOd%2BOwC7nb6sMIChvFX%2FgCy5irrxUj0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDP0pxubVokZAy5uTBCrcAwN3r5lM6xDXlBGSDRU9l28qfzfEaGB0NLhb3Hq9yfqN8sLHlWHmmXV%2FVsBS5FSPt2uW%2BFjbMhSaUbe1955p37LLIsBASbq5%2BMb%2FJvJaROBttMryNdvSAxN4RVfUNjdBxujdOT3iLPLdOXIuvXCshYYXulrKbXBrJ6r7jbWBfQfhy%2BhKVg6gntTgJ73NMKaNyqT6NoivPDCiZKOXmEdCU97HsKLJ2q6JPR3tbRKe6vCE19%2FJZ6pCDjIxLZDSmIBvTWyNOfztDxkNDUzCxVJEMdsN1qkApP46njuNlzHQNo68eLjdKJzkGqd2%2B0E3XfMmxo1A2WmuqsBlwXVaBYBb1GZzn6KDDmcSqYZyrWBMA%2FiDFTkv7Pfi4EAH3CcjgKtSlOXFRFBydwz1VVfH7LNaYtaMfXnd0bxO9pomGraa9DhdGE57VlkhvaBE54RPAE5heZehEXGL50lmPW42ybG%2Fdby7x1GvykvVScTMdvUF8lvruH84bq9wuiQ22QjzN4GqWce9AUZe6B1ZeDoXkbz1yQ6bZ%2BeVhrErw4Il3OLU%2Fq6mpf6ZXGmzU8sCXYyMXW7z5FlqnLXU1BdoQXBNpJrjWKzaAW%2FkHT3ModtndNlYNGZrPmpN17WA5I8UMjnRMMaTzckGOqUBsTmb5Z4b3PNscHPYLXlKd5w5oE%2BlVH3hBps0QZf4cuiATudr%2F%2BsMbtkHRNUP3g3tga8a%2FDrOZm9Fdo28nx9TaJDxXc21rW%2FcbTgNGQiFXrbCNsJWD7W6lr6EX%2BP%2F4Zn3K2bu0iCKtT2DG5uzSiKg0AtyEdiD7wrvoGrxXmQodXyGJ7jIVa%2BIAY0piABRzePU%2BOeCpjT66gK1%2BoZj0vC5brjFDsyx&X-Amz-Signature=88346323fcf1132607d64e57adc2c210d0c644887d131b8cea4a715d78b48378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

