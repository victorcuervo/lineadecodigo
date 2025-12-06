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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632V6F54E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVRPH1CAP2sQG9wi6OOOF9vFCg2ZcbSZNIir5tdH%2FrzwIgayDGvPbnajgoScv1nu74M79zaxetEZEekYcUju2l7Wwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIkDBAhH1BXFAyQoVyrcA7h1d1gCMoTH8F%2BS%2BnazmLeo0%2BRVgrV38zJSWhZlaYnQd%2FQR5L5Jf%2FbtWYvVUsQE2FHoOhSyoYjr0AgmSOXZSQ9SCsgkO5K7p86WKyhXuVSVFWlIoeolWBrRZuMVLot5uTFrm0POvSWg0iVnk7h%2FxRCCO5xgVO%2FcITKUDqz8SHMtUUIoUQLyzb9SIkSYOpM1DCUz1mN039vlMHHsc97R%2BUB7z%2B%2BjU96hjuX1FFYIo3FWbg%2F8GO4IA%2B16uVAQYs1U4uqp%2F1hu3amkPLmR9luOI5Y7j9ENASjMaIrUh81iB7mZQUocwhlAdbAh5IJ3WscPkQQ%2FCaLjs%2FeyBGCo5QUFcQbEER7%2FZBg1Z1iqDd97utzi%2FeHX1TGSvYxDdu8h53nOt6r4HhbD3ovIBETyE72IkGWMjXvAxpRNcewQWNukJYJKiUMUr65ctwrK4EdrvW%2B3fQaG3o8fKsRhBo8r%2BUYy9uATgL8%2F1xVWNNz7pwdAvWZ%2BylfiAYCmtyvO2oj12CefUybqewDRcIEnjMOOq7yqKxirAvryoNJ1k1SinoTKTvn28NJO69eCrBvxzdsTppQO6lPPIMEXFyxiUCmpDaY3%2F%2FL6RDSy8iAMO1XIPN8Ye1UvS5gngcvD3o0zGIdGMNPezskGOqUBqr2FeI17d8tXJQzWfDefEeqH%2FSJLLtib%2BVdFiRg6ueP80XvDTjvh7u9sI1Km4CbrmxTkyBk%2BPuPADYcJqb9H2o0HW9CfLy7R15bpdycpbLQC6qzy7NnMLbAzWNmBRuUgnAfUHj%2Fh2vu3eytN4Vab4X60SuDcKhSQvexRlkGcllmBFEguxhwU6bU%2BP4n06zS5EoQEIvOG6fExwbIbYkC55SAvFx8s&X-Amz-Signature=e70c982680c3ec710d3777e9e6b022a4774ff77d59b98438c3ee35e60142ea1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

