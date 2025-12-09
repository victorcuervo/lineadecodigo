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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P3HTIWD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T203423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4VIUlRFVXLAhJ1dshUGRxj8RD7anjNh9XaiSe7%2FbgDwIgbwn4ADcgXwE0E2O2B%2BSxu2%2BQEbP%2BLPUTWTU2Y8khcsIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjJefx7Jff4q2BY7ircA%2B%2F9yNknoisEcNxF%2BxzcG2oA10R9Wpu6qFzCakFtOLiWhi8eVBWsIyEECI86raDKGLMqneIyY4AH1ADvodUqzH8xEFsBqUKaI8MRZw5ahrxO%2F%2BNmifXNBgbBIz8wqgk%2BWjaVcK2yjlRy7mGCoBif2dgrc%2FMzhsKE7iMoNIcZ69FjvoUFxsGWVSqZt7Ib2c15iceakg6gPBuxLa1nKjf%2FK729fNLVt7fgCHmZncBHVVfz0wHhCd32j4OKkjNNZd0Zu3gne%2FbZt9ElDzlZCVCzVKn141nBTEmlorif7fuT1%2Be4dQ5KQjNkvxeoXg6IZZo5zDxnMVxJDzHByjDDa4llGjGQSbecEFZErdSVFxq%2BW8awr5jcCvLZRguZC2%2F3uoaST27LlRQgC%2Ftsqhy5QAJuA8Sp%2BscxYflvbigRqKAX7JaKDtHOPd48DaCuyTuNXUv2unihSlevC9M1%2FGy29hFQZkGHPaac%2B970npDsNBSjyU5nJLY6C8h8Pfpq2o17dH05FdtKi6GMNO9TMgfYnLAd5CntqRfQkrAe7GmrZLlZb7VnR07nFTgrOZrR9vEB9BK8Ym1MPWow6xV3jCzS%2BxsKtcnP3HLre5QkoVkiRpZkRxgbwXYyJ%2BHJswDRYe3bMNH%2B4ckGOqUBel1Jbdg5V6OeLK%2Bi1xkF5n2jdvu6RRY5xGttWniaAB%2BjglWbgjUlIiQtVQwBs6Yc8Fb9%2FBi0T6d276PhhWM8d3cHgso6Wn5N%2BPLBG3pqDHKpZuN6IHdOEwUJUALFvytGLO8KsyAS8SRh9XaYwm2FwtTFCMVKDGt1GnqkFn1q8o5a5N3Kel4tJO8WHbCAeVHcP81QUsnwfzP%2BiYIduljVIyHma8wT&X-Amz-Signature=adf4b45d4053e23b6e9bb19f565b557b100651d1eeae7b34e59abb0c30df385a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

