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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXUBKB7E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T122645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9dgIJjuBLYDsgJHStM%2BFQ%2BYrP8LwVHsnLseNJ8N%2BwVwIhALCNNAu1YVyjM52zadpXhyRUtCcvoYADAslIuOrqFxWlKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXkO6SqM%2FX4sN0ZM8q3ANgvrQ1HOU9n7Tgkp2T8FhSatZn%2FWjx6%2FvuLQ6PmavktkKCGG5H%2F6j31J8TxLw9uPSutp2blzP1RqO7BmVr8wRBm%2FBVwA9fJv1%2FZ3AvgnA8CYRO0szxDUErp3eebmJzHFmcSn9CguGWPC8p80Q5yvtlt4E1vXx%2Bqlh4EwA%2F93TV37lYKPRDxFH4zfPSKOhU%2BdCecrMqjwSBe43K6HjyfiwdLRSOOHt%2BHGgO0hZ7ffR1VVPUPyB%2FxgdWAzqD%2BJBSIWNnJQB8YXBW5jmzzmv9N44yefSYu5%2FBmmcuD%2BNm31UHAQPIjvRaumo1BWX9Q42HtUcVkMWylUSWUR6SkrdWrTLOOp98ers3adAHTbfDbgvEPSgGP0zfw9WN8o%2BLjGw9lXj0pKA4XzgRWIkic2WYJ5yqndH%2BbImUNtK1LG9PTbg60Xf%2FM9gbuqgDtFoZhp5zxi2IquIsB5eEGNOkxiz3O%2FgwUZIpRpza2B59eAd58fT96CRaIL%2FBYSm28Lt2rO9R4bm6RBHFHtzGPy3h%2BtP3yLQ9ZxEo%2BtmcnV2L4C3%2FIy%2BInNTDycgcFqPwxxl%2BS%2BN6s2n2xHhRzzLkuHXDm8wENIFRu6g%2Bah%2FkCZakmMthwz1ZD3yGamfLSmR5oJTYgDCemdXJBjqkAVTVfsbxW0%2FcUB3JEigeWARebvgA6BIxBBMUzAqY%2FE2NT8T8b3MLkpusKnm6A%2B1R0zkBaMEtuhYEaA1WCUgey%2F4TJRiUUoPeCup5gtqypBdMA6hOrajEs%2BEhwNwn8uGoYe%2Fq2sVZLMIE35fUfvJ5IC5Ne2i0dg6OZAsfztkaVJlkCuCaz%2B7MT3VkWc5IkgOTiK8q2EKS0%2BFGDSiMr3iwTob5njpr&X-Amz-Signature=4c049a7983fb3603b0da3a442abae3a0964f397e067871f2c9b63b0374a1976d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

