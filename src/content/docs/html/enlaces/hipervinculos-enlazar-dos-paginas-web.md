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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NWMX6RR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BkJFa8ybkydxl2Xi9G3498%2BBDB35Q2uKeINt5C%2BjCXAiEArK%2FY15V4NxQjXbwLZbwxiDoBw89jlsy8vSucVaGKB4EqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtz7Oa0%2FKoPfJvGNyrcAyFGP6N9%2BHwc1rEMloa04qzyNrH91fw2cy570hyxhmXWV7xEg8fWA0YWjAns5YzY4S%2B2WZ%2FYXUdLNNfSgy86xodza42GKp05kO%2FIs5fJuk4v4PlN%2B9%2FmudNMT0DcWpZedsCMoU8TYQEETNY71v6QP%2BQNlpM6hQ4ryQllGFrmfs9DPq6ZF4w3pj%2F%2FfhuLTzs%2FLoSvKLg8bW7t46TqsgOKZn8Hq0epruoCQKBJYtEN%2Bi3azJtBHHPRvQZ8AJazPUk95DiT4%2B63pvcpK5VtGWhtOE8SLvtysYaIo0ypFn5HfjERJJZYbkdZbWiCGu6ku5yVxprtsZMRg80WzOq9pcyH3j7N0X3dqPIoky6Yq%2By62Ce%2B%2F3zS8Bjd3nJg3J%2B6vFViTtxg95%2FZlTbrAvUDTKoqPpEkp2ucS%2Fbq%2FCZi03ethgywwC%2BuKRTkOTi3cyul9MIlYTQ0%2FoOLgibUD7Rp6RF4tGN7t4QmjlPai8SXTO7AWCriSXVeMLifCXEsPDnT04TdVBtwh0dEIwVBoEelwtCVLsVFtOG3WORverKtMzt7JPcX2UXJdsmWGBQmAOiUVrI6kOlVJFBsDbjc2DVaayrUipp0a32%2Fm6wVyTaU1TuQO5Hxpk63lUxp36LchTDYMMaA3ckGOqUBl%2BqGMioZVm%2FEs79PoBY4jgtrU72Nyfal%2FDdaaKMGpjWpHmK8vo5vP2Xct5kCUQjq5wqtxqUEEoTqTJt8xbvRdLAF7bMiuLc8A3YVBVxwdrh0AacO1PhniygTBQMW%2FEiIdtQD0A8qZE6T04Kqd9lQfrzH4Qob5KvywhJbzN0SX4jvw6gnLY8ALFNQxAkzScgjcVtCnOT2OCG4SupuSVKUqLeemBgt&X-Amz-Signature=8742704b4f79c5c555d085d2dc47e616c327af344caf2d0fd0b5ce697472bf79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

