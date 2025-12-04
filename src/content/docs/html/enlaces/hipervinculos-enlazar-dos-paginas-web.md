---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2DRCWW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGIBlt0U5vyaiSbYcTkREueWucfQrnuu2o%2B7g7od30XWAiAtNu71T%2FJuv5pi8WrQlvtht7DAXlOWymLqzOIM%2Bpr4Cir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMs9tAKDxX%2FGXxRxahKtwD6%2BrgqUo1Rf5gahUXQA8vg%2BXAUjUkBGJj6Bu7%2FXExcSfqKsT1oWxYHzf4wOEbpqyY2TOlb5LJwsdLHxFBAP5pV1NQPX6171xP0L08yoWeDTZh8XAOnlxIYq0rE%2B4RaOWsEdSywzH1BkpC8uDY8%2BpqzGJ76d5qz00flvX5sgZ3R4KXQ4a67Rnnv7jeHMv8dNfma6zUhuXND%2BFe%2F3Y0WqOHM4ho%2BDYDwOBxAgEa%2FK69bhPTu2XrvR%2BeTuIqgsUVuQ6CzHrGT3XNK4MZ18A6jXpJc%2BfsL0E%2BEBIvMLGBSTTf%2BQ8AbRStMT%2B9gYNSbabhSu7lPAnDKR4%2FQZvbnlOx1cws7YASgIOXuh3mXJV69Y8L5XqXYrkaU13Fn%2BTsLf53V%2BcST7xB4CHCbrr55TFg97eouUs2JCIKeILx0L%2FHn8ayvYCwzLXZGxEGLPTCV3jiuJgT32I1vnsVXo1c2FQ%2B4My7rmBjmzZhk7tzpvf1UWbGPj%2BWmCf03Rnc%2FpU3ddYYBlQTR6t0l9vx6Z9RBUKHVPElfUdX5YlBv6EuihB%2FMRXJZ5X6Fg4piOcGCpD5jX5%2FJ188hvrxjwkGgSfF1sliiBB67yh1dWNQWYUnm4hjXsJmxgUsaUAQYsIPGKqQawYwk7TDyQY6pgHdsAa83GyT5JlXIBqhVsJHmIJcr%2BDZ6evHNXfu5xfcC4b0te%2BZJstkbAf8U1SnmCfCS%2B%2FwgaOsSdSMkKrzpxzh27VtXn0caZkXWJHQNoYCUIPJ2OItmwixNaXh7Qr8M5ZPqbl5aH5%2BubkNQMzYBuD%2FdU9MLAnHUCZnXYBqsvj4byMFZgsuED8qT8CWmobHXwSip9EJBixpf1ee74%2FQ61UsqrQ3lCAs&X-Amz-Signature=5c58aedc987dc4a60ce7a1a8dcec56315dd1a290e9d20c6c5a5ec5530b7dd7c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

