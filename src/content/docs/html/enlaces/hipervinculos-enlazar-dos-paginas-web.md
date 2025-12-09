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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQVL5I5K%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBor9c%2BKICgcPCHg70zGgLEQoOof6ByQYX1zS3AjciAVAiEAtFxtNxvPPbUjOHmu57jn99vuxuFyPvOS5F3YgpBqiAAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxr%2BL0rg9dNedsooyrcAzmD36hYMtOFPeFQkTGu1OgspAf0E8phMKmc0HzR4PqAw7IYQoap8rLbZY3KhD1dUYdNgvUOK09an%2F4zyovUBmMiho1kf75c6YFs8BCjJ05bMTNCOJTONiqfzFXNSE3loCO5hmTp6Zwfa3dsfjcGu2BSHMBBYuBl4fHvcLt1x1fILziOVi8jIPBSj4i3Jq42GF4gpgwGoGsxqNXKFXz8%2BEW03u1rVt%2BYre5W7ILAxf6BcyLGHxwRxH1CxPp0kHmAMDUjwTEjoNz9HJxGFWutDEOzFPjs1DzOhJMVD8qxJP2D6ymE6AlN5LldVOFa1KWB4WRU3WtIbqjcAPxJkpUsHrWEyqLD1nwFKaPs%2FKHy1SMe501jiTIezsSUadNIehAzueroS9r7yTTTK91RbThqw%2BkbE7KGcwj%2BdU%2BCvYyj%2FQFxFxOsk7%2FHgXy11YFyK7FYcT5Eso9r4TsnDy50XXplr0mw4WqsmcYcSoseaQcQ6UU2bSsWPZ9Zpr%2BxehmobXtzWb99DUgS24LVPaWU5lXDTaBT6tQnKbbIli3nBSGEsy9GKjLvWjBMS8nUV6sIQ83oC2mZuVeSJXnBsF03pgAftnASWYX6TkMVBg7KQDTvOJdnSI6HQNGFVXmlAV88MLHJ3skGOqUBcrk8DIY6Mahd20WreC81l3yfy0k%2FllQvOlPl5IDp0GNWYwVxrImiDo2LQbDUU3JIthnAwwJk2r0SUZsGBAEjOGaQ4dxRTyHxbfTET1x%2BojPWthUG1WjrYVjRBl4cnu2qiIZ0EwVpUAjaWyK7AtbsXUDUpmfXwHBFpRJm%2Bvj4c%2FYeAarutRN1hDgW5%2BVTglwxWCJuiOov7zZ12YaGlnmxh5w933a3&X-Amz-Signature=d77ff24f8b604a2f65f4e70e861167fd89942d2091e7a17a39740667c5ad7889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

