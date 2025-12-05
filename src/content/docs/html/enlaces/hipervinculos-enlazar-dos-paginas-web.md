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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XKN6GTB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2K9y3evLXMxifRFdD1FxG4U2VGJwJlxJ7lmG%2BbRwZNQIgQh6St64e4WGnOPs%2FT%2BDrnRrzUMsJ1ETwfPqo%2BTanmPgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDTQ6W8MtfzMq6Pl2yrcAxYvAoNkcJG2pectizjrv9EftEcId%2BIimaZOHkraG8LLNmE1Gcomqu%2FqwLP4IwcIqHdZNap6ATxUBKbUwdSDx9Csb74M%2F1CPXTVaimamdRhiTuv0dqNl01tAcs9ouEGln0BFyH%2BVUDINws67mf7Ig4h7QmiFEEDweuAoZgFV8cwHfNJp3hL7uCQJZCyDalTzl%2BXo9U30myTaJNCf68kqD8Ik565PK2GmFYrINdURFLfyHcHTn7UD%2FLzPHW0IxP5cHRiEgfnUku7aSnLZrUs0i%2BXd5G%2BoQU0fB16p17176iyHkLCR%2FVJUQT5w7UneYsCy69DZSJssz4GfncRr7uJoUBm68mI4vr74JQiWXzA8NyzVqwWkuAwvj2%2BobVM9fUiOSOICadIfpGj95NuU%2Becpiyj8EF3TiPiErqS0NB8mI5MN2acUK8y9cK4bE%2FX%2BmuzOTwundZJIfV6NcWMHUQ9ob6%2FamfnS97sSqmO58FoOqakfVEvlaSN9csgBevVqPcyBOkuOgghKJv0ibkS3ae6wk8OYhgxIdQDvON4jlLMDuf2L4gyvf0newLCzxaqFFBkPIgEecgg9dsCT1XfA0U%2Bb8ZLUf3Y7m1I9IIMPVYyqopu5uO4rNCxEz4%2Fl0BV4MJSqyckGOqUB5u7xVqec7w79K8zoGBnVQI%2BnERfteGEX511AzYPVg78jplGe05d00gHXI3o4lARKC06xBgrSOUpARoYjsN1qo5kZwoEO1DRoJBkSVeeI9pTJeRsLs7HBYyUJLZ4WaSzimd3Ns%2B9bJ%2Fc5btij7jzq5OR6w4AZr%2BFfUDPM4bCuTtr2ToeXVWKl8GzTfAsbxuq8hQSj6TOnBodoOEXYfofFgcvdWt3v&X-Amz-Signature=2ecda672d3d984542f9757c1c0d61a245e421c2532a0cff80b5e75bbac1ff9bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

