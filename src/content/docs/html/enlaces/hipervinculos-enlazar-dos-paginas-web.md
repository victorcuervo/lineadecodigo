---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4A72M5Y%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T233238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIjUQX%2BzjAiWCTn9oTTzRP2GZPO%2FapuW5tYpH9bPfDlAiACMnuxgAL8Ez0a8pGVYsS7NrhNjbtrvIzpO%2F6vVVh0gCqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAvwY6amKzb50aDvbKtwDclzydJpYvOwvTui9m2E4I0mNMbfeLmOJSelFQHzZ0MNvBgnDN%2BR6Bc00t3MXNF2caHyLqCK21yjNnSB4SZuVQl5EIUmEUfjNdUkwZ8hQ4WhA8Myq53INh0peuIyX64%2FdeABh9TSnI54Sri0dBVe8XsH7w0JBpfZ7hix09kzbSdte6BMoyZsIPL%2BqYeXiSUrUs0PgW2pOaRUbxkPFJo%2B7Bt3WIFD%2FIt5IVDnrdWmPV6rascuQLxJQR0ckR%2F%2FTxz7z31ZmDh7Rd9bGDSo7RsFtjtyHQ%2F14L1SvzsBSCXPVO2ccvBi3v1FvA2ffZUREAbtfOGiib%2Be5tf6fp0V7FY2pFBE3bwmGIOR2WmRxp0vB3lmYxsqRj%2BYIko%2BqsvmuVpH5Q6MUbad0U0oQGgeOifK8oVpA1CobTrHHsVgMvKqixlD0GzXdOY94QKgRq24bvGwYdTbMYxKho3bJY9%2BTirEMGQ8qWouUSOdrWeeH31TuW%2FUyFvkTrwvgXvBi8SKPWRWZz4t82PxWwHw%2FqaNWPA2Xzu58sZgpcouauwUw0lLZgXv41k6lhbpTzQJHK5CG2VrrXuXTXQYPt98%2FnNbVvjeVsFR98q1Z5oVYQmyPipp7VcXF0hCRX%2BAeNRuOu40w4MPiyQY6pgEU5tKkV%2FFy1eHDx41q8yUGugFSC0oARzBAP2DPOtTpGALQjS9rA7VdFWJlxBEPrkgnru4kreM44tx8kABpv5FXs%2BDCJXeQOGW%2BgC61Ic2WGcTmxvGt7B5I9LWrHy%2FafwurmXj2wIWTvcvfKhZw0U4fnvT9nctzZFL79m3JCT65VyRR3%2F8CdJ%2FP9%2B%2Bukex5CU587HyUCRfYHXLp%2B6lDPtADUy8xlA42&X-Amz-Signature=9d03d257d5da6b0ea1d5e1995c2cd3bb4067f6fcb5dbd3f0c745af614b4d2e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

