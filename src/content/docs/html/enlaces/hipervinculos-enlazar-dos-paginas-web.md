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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJMG6WRN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh9TEMBsf7NiUQT8b3mldFxrrhtlA24zrk5h%2BS%2BJAt6wIgDcsZfUb8sl3d5esrGUejz8CMM30gHjOqHOGKfF5lJG0q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCs%2BS1LTjijFsV66HircAwyQrMC7H5vK9LwSnMAEUv7pYOGeU1QsvIU2z4aTfpbJDHqQ3jNYeYw51rTTN8GYPfStYsxl1EpMzVnO4YkZIqydQfzGZeObosIpCJpmAylyMnv10gseIcWLYQN5OJcSnAxzXsw5BMTqNcjaSAme5AB6FzpFtxXFSGxBI%2FWrE8j3q8mQq7KGPxzYyDC3wDdayH7rVuNgm0pRxRR3Cm94xe0mlgokbPY1XFRWV2rpT6NfZPK7ZRPGeJYHmhXVSRiE4a0L9R%2BnAyg%2BAvobrjQNyFcr5%2BiKiQsqTLjCITRDfYtGc7W12b%2BQGDu66qxjZSnhdWx8UzLCzXhUcMaomNy1mRhnCZjQxbH47YVT%2B2j4X%2Fc5B1MOE%2F6PiRAK48sw%2B54EksxwE0ZE4CsdbgdDnKgVVTaVaJXo0ErJCoOfPLYSFtqmU5p0E0gx%2BiFLn0SeQLYi6bhOy%2BKJN3osXAen8Ke0hycr%2FkAmOOzA80fcQKujcMzIUc8A%2BmrDYq6C%2FV9GVglBCPuCFUAr5faV9Q2RTlAu3xBWZ38S4VP0Xn2%2BwtPDli2WmnF1JBlrTvpXAXJ9SkoW%2FVWzCfm96mahimlMgasYagbHiGPiG5fUdq77QvUXwMmchUcHNg9ldIqKfkjpMJ%2FQyskGOqUBgSV8uI8bfZZqPp%2BtMzIuiSrD92EI0dK1rhpt5NAgId4gu2SmtnYzwZjnzD3McbnARyA7xhHhwf8cE6xZANe2WUQmEm6Uo90rlfn01O6FKG4ZqocHbItnCBrqKfbKUlnW56EpeHwkYdaC5e%2FH5Wc6knTpFkQ3TGHm3ucQ6HfDYiDXda5%2FEvxmx%2BiCAuCVpm5EYqmZji46BnSfDuW1p2UGF0Yrp2Yz&X-Amz-Signature=0fd9cb84152c603bef788ed40c31e83e0c7e8c92fb3a4b64d11c11fcc493f272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

