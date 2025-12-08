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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTNFAYWI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6GYoC6tVSgv8Pk8tc45gVTihvSec3bTf0RpinGlab%2FAIgYNwuRYO4%2BC%2FrORxN%2BA788lODcHi%2F%2BXJr3GsXkS%2FlPVMqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIYGxqifwQ4bRrpdSrcA7na2wrdKfTPa6WAhAu34nMMDN%2BTunoW5rk8kR8sl9a%2FxHb72%2BtJsQTEy6BhIm1XUYFkWPVbymqwhDMZn0k1dqz0IKAXtU%2BkATkKwl0AcAG%2Fm8DxF%2F799GRWpSk%2FodkNhZu7y77JaJNxbdX77mLWibdcDDUOMtP1Y%2FMKIiqH123ebm%2FU3JAXtLWI1CixWOHxcKLW6iWOtKrEqk%2F73%2B0KmoEo03bR2uOCR9tChb6RTWwcx%2Biqk0PFt6MkQJc5I1iJ5D7422FZd1QJ5fQaRP4PiJPCgZ7Gj%2Fkmg8MkiTg0wGxmSOaAljptBpRGsrFis4TYGFOuN%2BpIXQHpJYx%2B%2BYYVtSEmTKzhijTz33pQsn8gj9LQLm9GESmECSqKJF9U7rQWm%2BJZJcPoXsKISVIUATQYZ9lC3dU6gWVASHISSiG86mRI8wcrnC98aXNn%2Bs2bHfL7yFVSwMDeQUgqOpWKeFjwMBuqc6hEjVLf6nz2rpcDSBpO8SAzcvZSIQucHHk5Sil5o8jY97PisoeHhxrjheiZTONrGC1vMObyUEbohoA6uRTq64NYxPD94QdDBTZg%2Fw7irh5UndOxNU40FIoggmRGJ5Cb%2FbAg%2BOllaLt2jiqzf%2FgrX4TpgiWcVEwMs1WxMKXk28kGOqUBw4sx4cZgOqEZhLqMPTRhW%2BaMb0KGf2z5wpq3yEMgFIYz7ZXZNEZ8bC5RvJ%2FKizwFN0Mpx5rV8hciUjhhAwqtneebvhoA4OOQTl978bnXwD9vv2%2B3VC%2B0TqcdH5rX4GeyR1RC2WkLaC6fgmpi6agwDi37c1vXQKm14VyxJj9FSAsEMpgGkgt9v365UGm%2FMmeTxEQQdILQ4GFfMswfYIgsPsli31IL&X-Amz-Signature=7565d6699a3d774269834ce36e7e022a969a728297482d95dd0a8b0c86f06331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

