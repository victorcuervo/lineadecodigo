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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZUIAKIK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1h8tSxGGavpwK9cSQS1sf77ur5GvG1BzCgwpHOrvPmAiEAkrO8wfim%2FJCr%2B7y953y228zaOEwRO2%2BczUDt00s8LS8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDASrMKSQSjMtrBAoLCrcA%2FY7erzuJTxa3mxs%2FVkcNgMYJDwPTnAD9UwBb9%2FfO7bZTXtJ8MD8qRsqL1LDxSI45rNIuaWjuU5eWs52s2uHqYjuxoAZdUAwigKSjkO2GCJUH2%2BKH6%2FjmbBXYLH3NqI68nKa1yv0yOroeGbDlQ3cd2MrGE28lxwejgjeytg6R%2F0eYcq2rREQzZAlV0oHQ0WpUcEhIIlbzSWWpyAhbGdvDrd%2FD4VZqz68txO9Vb4BVJ7mqNsBNfcgTmziAJHxZbfwMSBxNVDnEzfPe8qSmms4pRi7JqeFUxW2YYfNIdr7sGjtoMFllfbVOC49okROyzqYwb4XVH7keoF1ytrSJ1Hcd2gIkdfARa9zINSNsqEJvcRAzZUua%2B4R11Uh8WSXNhyFedAthiV1c0Y7Y4mgNttT8cI%2B0t%2B868IPNBdD%2BciU%2BZFi53JeBaStE693HI%2FjwRAC8ZeJ9ztW%2BvPTnejmopnkarBlr5KaayH6lDeaOjNsD%2Bhfk1CDueT4XoM1vnavBgfe1Dxmx%2BUAh9aKI71xVjfnTshQfnC2GzXUevw0pXB1A8e3W1FiIPhA4tYmWWO4%2BSAJAzTZAl%2Fc7zMSBYyp9ecCRTkwqFQir2w8nC6pt5ELF6aBeTfQClwx1HnhQay1ML68z8kGOqUBtUrN7BEpWI55Ye%2FtObmw%2FiqDGOaiNoGkLAwODVYjuwx6w%2FYw0GJamAJcEx%2BnoFxWwSq9oQ7iOtFYXuzTjCKIZgiOa6gCWsdg82I%2Bh7UzJ8NZKPHXNtdvoK27%2FawgZL6HdNWzUKPXMT6G2SX%2B4k4qM%2BZOKvDU1rTSgYeMAasGBGHyU1y5jrru%2FitHrj5YnEP2DuEqrpTfPi34B0QDvn%2Be9%2BKtMfMz&X-Amz-Signature=3018be8a7497af95fd0a254fa590e9005ade4f6e98fb4e43f064b99aa33d3a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

