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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6O4AZY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChh3VaWoHtMK5wVFFkcMJ8F547VX22BdsZnT%2FM%2BTDq1AiEAxsUJawux7y10qeQKeUZHWLbwgH%2F%2FWG9HxWEORpvos0AqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTSfFBEfLqJw3wYkyrcA0TtxlsYEDZUSQy1xNYFi9xz8Hq%2B0KSU34OizClOYB5zhdA6121eqnPnFJB6oxC7H8hS3q7r7%2Bsca%2BjbfqqR1o4Gz%2BbZACtIHM9lJAblJ7FgSwdSvFN5TDDMMpEdFovz49029QMoIB8G0PxCYj73GlYeaz%2FF%2BOntdoCmmIP0yzaZ9Lc7ExeSbHFAzFAkamR0tXRKjdAxR0HO556hvevZX1lMgIOdr4BzYJlH07qNIow2xRsSvDSu73WxBGnr6vrZRuvTlsKIJl7l8zd46DG0EWz%2BDvyqjoxaDK05UXa7HGSK0AxcFG0vAgzQeWyKnz%2BS9SiPJIR1493jPrLmcWCVtuAUJKMG2ymkTFkhLqHp6GVwNmeQ6VDw9MvzbQOQCDhejVysv8eRZ3ZjMe%2FdnHZoo670xMNjVFUJoenzxoVk5vIT8zz8mNMIPcY9uDKjKjMwYptwJDVvqetP2FW63o%2Bq%2B%2BtUtkPBg4AMjEJpr%2BkDC1PQXeZS2aaL1ydiwqIiBc%2FQtOzZZo3dLo%2Fex2eioP5jrufttdkvu9aXxPcXGSleydKpXvkL3zKOknX4atiNo3RHU7a7%2FCCN1wXhTxHidSys2h%2FHXKNPzUv7wA0SEDCzzki5Tf1Ji%2FYNufixG%2BigMK7%2B0skGOqUBVrYXgccW2fKuIT6JQdJUouQepskV5Xpz9ANsenFb91ESVaVKCDdON4%2Bg7VXwN%2ByyAI6wKs4WDyFJKjQeZq5RbCCKaYR%2BBx6lQdQI4tQb0U26DYnY7jHJoPrs6owFODZL41e97wkLzxELw5ow9K87tixWysZH4flc295Gj6j5KYD0wIS0o1muky6CAL0gC%2BJCzLrw7LvP7mBdHib80wlxg201VFzb&X-Amz-Signature=954a9cf837efdfcecbfc0ab52b3c3666f66abf94fa34e3d9b13a332ea174ebff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

