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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VJJE7IZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHV4L7rAjymIQj47XOe4V9t%2F76Npd3tNsHd%2BSZN5WlBrAiEAniINUVPgVWC1Kct6l5LvI%2B4ABLdu0KDgBhF60btwUpsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDN6v9iW6dCeoVvGPQircAzUCM0ju6bFSgC20O9TObNpNOS%2Fzare1XjG7yg9b0QqhRgTeaEguwLmBAW11O%2BJVC%2BCmZh2MCE7T9hdqA%2FkojRW%2F0zM2%2BQrngaj0tDI0JE0tzkjsoUYVYNkElUmygWslh%2FfENcgqYEquP9fNUtFHMMq%2Fhgsbns8HY9dCR6Yj2e7pvhRnBtSawJ6UW1C4KdyJEAHomSmVf%2FFfCx8JWM9%2Be18uSazCugi71hDDENW0CWIfNs8hSGY2D2oepbJrf5lG8Reb%2FbOvUYhM0V7watnFChOFLQSYIMBTg3knz8xyBD7m1KRgX6wTORfDIZNzRV%2Bvpio6W0v7ji8JfjIdAM7hq37ehC3FyjC9DBygjq2SmvpFTAiXOf1WVNBue8palCtqMjMd2Xwkun3o0a5ERyKLo1rRxYzZZFW1LEZHMpPZA6V777qymSGQragvt%2BSDRzlJNjIEvtPZicLp1PvDgxVVzlrf7dxV81Wo82IOiOJdJ76wJwhjNrjghEGGY7BD%2BF2b4UCd6A8HP1DyvUnvWDm11smBH82blzLV1jZHL0JROvp%2FMBJP7EZGppglLCNjtSuuRemSufBBf%2B8%2FfATPsIUjz2A8ysQQMN05nnxm919WwjWeZ5QY%2FE75HCe2sPIhMLTtzMkGOqUBdiTFpSeQlurGj0wRNzFWzhkc3lDdGxCoYlI7j1sVkWCMd%2BpgyhoslBtjwsrNHDSo4MPzMtTVLI0nLuKKQy3JveRF2uIuwtc%2FXZt5w6vAwbBygTeVEvPBJrOTUAnTe%2FZl2lIULZac6CVLcrc1KWatAfn7zM6xvAOGN85Ux22XINipOzPudLTtimFqrOO%2FQXX2g5bwk6u7g5sxwRkDqJgaF1vl6Nc%2B&X-Amz-Signature=476b4dcf6c87a9d3abcffba87543aed18bfe8b8aaed030fcc4cc811e17aa79cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

