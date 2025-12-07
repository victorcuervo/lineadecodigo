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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B3DNKVN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuozy365q4KQXwSpJyLz4XPkShrouSleySw%2FIWEJmZfgIgTFslITaoDELm3R5B%2Bp4mv0q%2BGdlW6Dg7C1j%2FCcIaULoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjqiMiOHDBOvUrOoSrcA%2Bos6ZoXM6mI5qgkWatLWNHdN%2FyfsqlwCB9MbSRr7fLCQqYlwqMxYc8gNdbH1JOOwiViAx%2FBbzqqg%2BU9bbEhArq2K%2BXGBUVJdZRuvhigp48DXyYJ1E9Ddteu0WR7P2EQueCNo9MY8K8GlMGQk60x4OB5yy5P%2BjJVi0Tkb9jBdZ2bWnAf8mcbn8WQXKqieYXDSZ2CLLTwX9f%2FS5xOCpNdIFZUx8XzNMkaWyx%2B49eamN7JEEdf%2BROY4zscwtGDFNMK6qfwCKwkXbKjVmIXtr%2Br8sZ0ZoGQAAqyAMeefqC1P5OLauEBdd7rRpk%2F8Yy%2FTAEGdbc1BwJtAo7C1bxQkstvMn%2FpvqFxJ38Hv3hEAOjIP8lAO6EjqvT7cPQIj3j5J6Ll%2F3xNUlvEPclRXpovNSXpJNdS2KXwXxF9smyEKSyuA%2BTv3NRHcSdwBYPGadN2OJmBG09piPMrRHP1q27%2FLRAGbVE160y0xvP%2BT6TMqrF6ylTd7IwsuVsyFJ3r6Gqsshf%2BqItI2fZ%2B0SPBJYvww%2FlHbwF6xfnGvSxA4cADITvhu2V3bdCc6vsuEWZP5o2UeqPcLniYNzYDylbju4jAR%2B2%2FO6An7jFi%2FYitc6ktmoo6Dq41QobuBBfHE6kCMAAFMKL90skGOqUB4K6%2F0BxwRmKvxN6cf2ISSxTO7EHiGxrQYxDelSN7NFJ3RkRzcUcQQy8BLQSB%2B9pATpo6BR9ZFaOyPySPtsk4G90lsDt89pDnneG3uliMg9JVkgaBkIfrQrlg7dAFzNYGLZbasHK17DlBCd%2BB1pHq9n3N2%2BXDOLq4R%2BuWRZaZJCjxWA9bPxa8W4MpTivuiNCHP1qGnwjoLt3nRBGqI8ej9MAXRFQV&X-Amz-Signature=4e9e36a31e7919933b89d194ce4e201b9d56db7ea9768431e08c9c2532bb5697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

