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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL6PEOAN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj%2FeWfj3IcCQhL0QPRm%2BkTWCe9yBWqjlbsoFwWX0EGvAIhAJdb5zx7W06Z1g2EC2BxhkeuCnM9gvJqsK3wztsmEGg%2BKv8DCE8QABoMNjM3NDIzMTgzODA1Igy8AlFppEzKJFlCbOUq3ANn%2FjCixTI7Xj4io%2FQdCXaj%2BrmWWSgdMqjRAZYHBHIM6AZGRQW6OdFwE3s9Y2NNPquHIlapMIu0RNsgyechpe3rWFnL4lSLYtKDYo1Ez74KfY0T%2Faa1OdkRoY7oN%2B33Z4SYgHaTKI6zN5%2Fbp51iVciquGRYYdrwjZCsjpgXmB%2FFXZH2T4KUVvsgPiCV3aBKS7NuCz9YRz7n7blY4v9YOBxS4iRlqZQRfz68ZB%2BbdssAdSC0rqVx%2FlLERj1006tgfaPY%2F9VcUWBsDmHpHLUguW2EEu3hJydb7N9OxsPlytZ92wHBoUCBsETZBpyb3MPhuQVrVSm6%2FLkifhno2UL%2BG2uvDOXo8%2BBfRZMEv%2FAO5OAIcM2JWwnSDNmWR%2BXH2x%2ByeDF8CQMY6jrU25%2FEVPrqKBHt7lIDlZ%2BgTMTEoT9w8zUdV2xXt2rSREMAXQR9ifgO6IBV1RPHIJPIn6BtGDQrU6e%2BdMvg2BDhKqvtN095hyBDfabw9TERJnIoLvoJ3S8QCv1iS%2BaO0Lm0iwJnWm5P9ReEPkdh7ZMnanikrXyDKrJWPnwFoWGt%2B1Ma1M8wbRVR%2FGBLV5PVJh06tXNEkymG0dLBITbkyUktCBV%2BL1r8MSVCMGAv4U3DOolLUC1MPzD0i8jJBjqkAfOWf8KzfWm44X0Il8yRv%2BcjzaAhHflW6j5RNU0yyDF94to3e9VKDHQ1gtFjpV49TmrCvBSRyn1QwxPR9I16bO1k37dleTRlb%2F5k7KL24aD20TtL9nI7I2K%2BTVPrL0Erf1qKnfRVrBV0L3kpobjSf5HeFD5e2ypMlLPqAJbpc2DxUDYAvuPn%2FVrDCH7XFm%2Bjtf8Y8tDmY62bppmsAB2xbGy%2ByGQh&X-Amz-Signature=2e097a7e07858873acf1c7f9cd30602a1bcd5b8d46f9a441e75cebc47e364d8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

