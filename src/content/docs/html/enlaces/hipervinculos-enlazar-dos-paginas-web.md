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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNS5AHFP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBObQ3OWYlSf7Uc6N1J0BHIzzu7sc2ZA9UvD4HRuXzR4AiEAieg4Udgo%2BNVBjxEsrG4oi2nUZchBNMh%2F5RNB8QN998kq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDLM2oE0cCyhZF6svyrcA3Rvh039tF5cQ5rvjMAjWbIHv9GtyhUk5kvfCsuJfwglZieJQ7Hy6fxc%2Bech1WCGwEviaKBmXyvdD4FzXhDWu7vM%2FJ415Hkor4rav3%2F7w5z2wbF7olZZwQ0kCzXMU4PRRlW%2FkFeWNpUAiPC2GU%2Bcrkp6uJYx8dgsMbZ2pjT25iyjpvbpzjRBAOU5pjWOU52V6l%2BJCV207IOVRl46dnNQkNhHIMMAKzuOxG%2BtBYb0LQqEj9dtAJCH25%2FDXvGR4XF5oE3hhll4vg6IhtuvwEJIFhOiNwQVmTvNWAxGvfoK%2FDd0CKqghbgxUWNfogKKG%2BDPOIlQpdeEdIs9S2NLK5tacQBEBBfiZYT7jL9jduNNCd2Fr9V8lkBgCR1kYWu9sPSAWHwwu4WSyNCE0Xcx%2BjXpvR04yTXhLyp1YGbsUk%2FDNFPsYHY8Apv2Vgp98Dxtv5RVU2ptwLBULGKNPfJh3E2bMTfKD8cXdgzOKb8kyCsp9Cc6DHeiGqY1fMFhIo8h%2BqECUc6PyFsgj6%2FWFKeyOAeGSeSxeDr3A9yE3jMf4%2FOL7DstD4aBa9jGLWLQNttTk7fgPl4HfWBw7S9%2F64ZkcZssgNAdQhHo8nbjYAPrrTPMHUzAS99awJaK2g2IA7jQMOP0y8kGOqUBZmOqE7ag6fCcmZl9Ix7jnXd09m4hD9hquRTNWS%2BtfI7TWJ%2FxADwD0J8ziCwH0fPxm3zSvTGosJO3OfGDeSvBT5EXp1saQKYJNeMIfZj1zUs6Z9qhpyGnGkKS648gu0NvXsA0opspLjejAQXuhsc7L%2FdKiqBarkh%2FaHeCcWvUbfSKZqt0Vu7D3eXTM4uQ6x4DGTcRkLtyJIX0Rup6qWSk7sdnveI8&X-Amz-Signature=999cbd76e7a697da395e9ba4b3c2c89bd9d54fdd40550e93c3c1ae8f10c827a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

