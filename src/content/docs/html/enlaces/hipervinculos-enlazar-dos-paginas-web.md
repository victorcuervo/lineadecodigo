---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAMAGHEP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQD6uLhp4JVNA9FNBtxQ53yCxIslqSb%2BYBgOKvsfdTAEegIgUfIeb97Gg8yemgD3vOIIB3C%2FnnbK4aGoKLjdYqCaJIwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJlybN9YwaK6PAKx%2FyrcA770fmu6xAwWl2Z0eMz9z8RjCpY10fdCpq%2Bq2w8XvHhNiX9JN10Fh9YjJsFd2TC87iGjJ8tJP25SKfsru%2Fury%2BzEAkWUJfAqoJWtOa%2Fk%2BqzKsCCrPSCT1lLgB8Vjxf1%2FrAENXcQCmFH1HWY1SMqfqA7LsoJNWUCgYMVm0oEXRVfZSvTMZHVa8LfRo9cSISv6NpXYG8UzIKeac3rISB10byJyumedokQSvlJ81KYLVQ%2B7M5XBRYhO33pjbwZFsomy8lokUJ4ReoxCv3E%2BqG8%2F3CxZseaQdJbm%2Fd0nPfcEfhwuiCJF47DGtNGTjPXUYf5%2F%2B2BTNg5Ljj%2BmU24ZF9vyrwb12limkWlWL%2F1%2FYMrE5ifYzATdWdUzHBtphNsxI00y7fIalitJxiWnqBgMv54pEsbnASlsENPYBIAefcKOs8g8lxRIqXkPHCYHuYT5Ym5WoF8espX4i0Qq%2BYDs7WYn9tpRX8rKs6gAS8qnYMzssacDGlZGq2%2FYCXCh05RCLUAfIXv%2Fr6nZIevdD5bwiBj0eKONxllhzKd5iDBxArZ8PxA0Nnvgc5bWQaHHiAH9IIVCRQqQVZqlMitAuCZoYsimUT9NVp%2BT1s34JIB87CElq%2BM5mkjRXKizmj7031pmMLitxMkGOqUBl2ge%2BxbgP92oTSRvLGEfXOd2l4kjfB87WwtgfFo3jGzTvHneo0FkIS8jIA0UA%2Bo%2FiPmvmB9D09GyB9myWvY6fBP2Q%2BuWzEgALoe1Me0LW56yAPc5M9WquW%2FllfWLVnM8oTa0YSQuYbx00jHxif5UT%2B6ADjAYBYoLG0bA%2BRil%2Fs6U1wj0Qgk3xzmG4JpLqpkjeNIv2nDRysNvQuf0Lj7gw%2Fj%2BqFy3&X-Amz-Signature=34a015fc5a268d86399d8ec75d12e138df516f42f07d5834da1f7910948d1777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

