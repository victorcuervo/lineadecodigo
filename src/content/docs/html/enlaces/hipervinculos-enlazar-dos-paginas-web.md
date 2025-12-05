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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZODF4LBY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcrrwh%2FZZVcZduWH6qPm63IVXiqNyXNCZuyLzOOTJNgAiEA8P%2BuBaGy6H1F%2BujxjxLRbaGlanljZjmey2DPLECIA08q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJrp9XnC12oibt8%2F2ircA51KvMPZKLpoG7iXTs3ZEOsAN8NJnFWGnoPZ2ptiYwIlvPJtW1Bqt98H1J417O1h7xBI85YpVHGHEfNfHF4Sub2aYkiA9Gu4xCm2%2F%2FmAjltRByHlezRvursXJF2sQhTN4b2p5aw8y%2BfWZKPrqPU%2BOfW06X8BYfnhPtY6Vdik%2BbujhX38PuYZ2nZWAesKYZjmOmQ7U8uX%2F5WYlI5I96EBK0MmpXPv03MOVlRoTw7pU0U%2Br6ZHH5AzWY1rl9uxwo41MXc911IbEpMjRkjiG68UyU3MvrUEvwfM9%2BEFCESAhzppDKUTDaH9JpQCl2D3YRtxx0HD2R1nN9yLHWrLQv%2FkXlYS4uqI7d0nL%2F%2FZ3Aq7IC3%2BI7o7ippR8ijDgieA5X7nvAn%2FQWDAK5YaDk8gBRdNXAI7LcTYAU%2BtNGhMsL8VgTwHduZA%2FN0sHnyj2bxXOCiSxD7qUdsGpbhH9ALJho6gZ6mthwyvA2atkM7toPmfMzCtXcoZdUCegS34kuLb3MXqup8z2UGs7MXyk11JoTM8sjGd6hH7Lu%2BZKjSW%2Bao3Ak%2FBMfeCTMaubAiOHRjWobKdXfGWU4hso9MH7n6bVVoEXbbGl%2FT54OxJ%2FP2yDCGBYcy4AIoWYSnZ54sMGjEqMInLyskGOqUBd%2BQ75Zhrsh79OPfNNnHRBsvjfedx1wMF1PMa0O6HVfOcsoEdRaZHATc8RNAfXPZQRKJbfUhWXrJsc8IapQzjnMuSt8TFNH97Q2PCBjRLwWiBDDf%2BGKEnWlSugkNHF1lxRu4exydeoVydYUqZmv8d1nMlHtE3bZeSfc4DccH%2BWnGrYgdkst2hgMLJdDf9LHqDhpWSYV0xVpxbDPBqMctXr7ohKamC&X-Amz-Signature=ebce6bc3e1e1eb2f97dd62cd7e5001a1c57cc0edf0645b31399aacd49ebea205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

