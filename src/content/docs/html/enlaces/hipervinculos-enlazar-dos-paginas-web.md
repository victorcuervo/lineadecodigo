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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y74JAMOX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T124405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOGf%2Bs1NYQzjjgHw%2FIem3W0QLEr46PdAcko0%2BHEDWtwAiAhdga4j9BXTfSSfnAVZ5Fz6OzXgXRMgiruEDyhdub8Gyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMYW0N%2F1uzKzq2nqPUKtwDJ1IQLt4X8Mshh1c6F79xOIXLYQqI1wx8kLvMt9KUOiJcLvPiR%2BIfOzN5rLqtX5Jf3OejuyRM9bx8Siv9qtv991sY%2FTZULdULVcG1ILMAx7c5Tz%2FBX8vssjTwXUbC1qdZd6CxvlbCBl%2FbNwzW3qn80nwS2nEpseSi4X0DOUphF%2B5SnLELcRjRcrjovEwHjLb7hmmx%2F0yE6QxSoQX8D3zRLptZsr%2B6UpR4EJbAJwXiDZhaW0faEj0%2FnXny3fncZDElqrJmFVmmANCyObMUVVRs4uSGMyepyXX25WncBPz2pVnsDFNvFCDLOoKjeObUiunWANI38IEWotcnqLcBhC95URLP0lpXeCItahIrNBkM2f3yPYbqZ7SBOdlo9yWm%2BYASmD66zQXJ279zZmxoIGdWZgRfmiv%2FSKXVeyjK1YSBW9wwr0aVwAodd3mDsrVcYSlwwtwTDjF0AJqZNh3daYsuMbGOGB4UKjmenBuMCAChISr2LQdkdHg2U7yMn26kksqBSY4hyrmUMUNgcDQwwW1VX%2BSDWbvu8k0hnwMgqr8yTLTUnPP5cxYLaLvL7FD2a1VmwjO7LroqQYQ1ww7NLRMUyRiMewKutax8V9cVm9LXh0j%2FrgAdKh4MOQ4xpMEwp87KyQY6pgHjIO8BMFPcLNtrr26BpUedIRE6uNByDtGiers7fHGEiT8WI42FfIs1rtt1zmVTtngsCoQdOX56%2F2t2Z%2FKMJ3uCpzAvOOGlS%2BwDvyYWU21aMSHBRLdqZcJo0kAF0d7Wv4%2FwDi4%2FfS6j708rlKsG%2Bcz%2BOqh0sHDOQNBk%2FXGx2Z74tDmXGFOBUKz4I3BHwnUgm4D2zRnwC%2BTaqJDbGYR%2B7nflNSNPlw6x&X-Amz-Signature=1ba02ba2fde3a2094e5606cc462613b1a3d092720b71f80f8aa69f25961acf69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

