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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXBL5E6Z%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T223957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaKNcaW1JVj8j%2F64JDvrGJxYEZNJfb%2FAIZ6DqOSakZRAiEAp77hHl%2ByLFw2Ucra1E5rm3s2hCwhAX5adt5DCxa8NlgqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCSHCTdIuVzbxlg5SrcA9oOqetxuop3wmF4So9WmpNHFyHGkZ02iBjncuFLHiNohnUdFRtMlDEp62eXwUORXfBf54%2BfKeS6xsZDW6JBbV%2B5kjeSnnQtYTyADJ%2Fy13168g1Vc0z%2FsbKvee%2FdT4dHjVtp4F1g461tP7Ftx4FoHCdeBm9j4E5I%2BifED5qY789csDI16MO5UgMealtISMQHrsox9rfEDaH1xdjOoBlTpIUeyHSO1YWSDTlKnMl27Pb3cHCe0h2S61SfkQ%2FKICvc1KqIQC9a7EBbVkQaBAWoCvz2%2FlBDLxMA2YKfKncFEH5mFNai6EtGZykjLSqsjuhWBOW2yPNIcXkHWHIdQrOb1oLUixxgvCAs1Eu0Vp%2BxCK5%2BxNZAmhPGDMqaFJqqhF766ato6jt8O%2BtWGden%2B4oTVEN4ilWsdyZnuAQyl%2Fpm8fi1XUvxDcF5TFyZAlVGh%2B4Ra885b8WS2AYqm3me2DVG0RvQiDuB5m3TU9nuosvXgC1xj4fqWAeTJtTHNHXxvWMxH0nZaqHDiw3XvzZoI%2BpTPDJe82mxjZP44wCGhhrGX5cNBlNKl98%2B2F6Pbmzh7a03VPmfyHWm1q6TcQQnkbWJxoUjTsCQyWPMZnXZxCH9HhcDakpb66b2js8A00tiMM%2FI4skGOqUBb7UK%2BPeOfu9C3rff4J36gtIRnuXiTjZ0jf909DSG%2BxPAwAC31BuITlSC%2BKVHv5CSMgB9IelMR4NEXnkDACe%2F%2FOPjkBwwV%2Fm2lGLo8HQuQY46N%2F0Z25ojhdBHYTQARGs5LogzN%2Bg2fAeH4u2loGLLZ0rt2cKVwDFTqVJbuWR09no8ctwtXFwJz4ZgFEVz8pkpyi0OcPZaeOu92%2F2fApEDDpq9%2BM69&X-Amz-Signature=d1a9b905124a06e68fc6c1bd821fb04b80344da9af63e16ce3c9793e763f97e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

