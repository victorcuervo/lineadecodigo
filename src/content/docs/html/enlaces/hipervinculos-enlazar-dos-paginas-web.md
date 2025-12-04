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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZX5GYZI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIE%2FURFKWXoPiK%2BC5%2BJtvkBCg7xE8V1V1g9vjee3yBOWYAiEA4hqvrwU4vaPdUwLEUI%2Bj7pmJgQF%2F6dSlJklwZPIN1vIq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDfhuHPNaPZo%2FnxZeSrcA9cNzwyMeuJa37CKX5SXuE32B0T3wSbw4Md39xGZdcCg%2FtUbORjHBGZZyHrHqU6yeC0Nksb2n2Pj2OF0vsBP9H3%2FwmqVxHhr7TeQhqnQk8SlpKPcOyAfeO2bbark5sfQcVRpPOGR%2BIB3BlKcwoLMhkB%2BuRnsPICbdsep1%2Brik%2B1qqtCJFJcgCtETxInLC3KYG2O%2FPCyo9lhFPJnoxMlDgPzBd%2BcUn5IvYCKRvR7M%2Ftc7BOhGaT1J74aIbrRtiOPheEj7crqhj3havSvtht%2FuMj%2FVQnegbxTykTU0kixik%2B5JSnU1qZ9G7qJ8Sd%2Fzvv5aL2SrDngvFCKJ9zaVEuV7MlOmqwCei%2BuXpJD7Z%2BertB%2BYd%2BucUQHUQFRWQPOfppQNfKU%2Fxc4Rdhs86RC1RHzr2kAIVWs66xE0gKox15NYGjhHVTjFVfrHUglVFOLjEp7ihnshjoQc2uahEBW40TZtzk7xQLvssjzFnpc9%2B4gEibP0d%2F0mdPldi17U%2Fi%2B6iYlNtluKbSjRP%2BgCZGNLtMu%2FlliIp1GM3ugJzeBXs4Q9JwSL8TiABk3R7xl%2B5p0ye5Lq6AKVpAiMaX0xCJ6ukpkp%2BeqdwHyGl9nWmYQdA9aDXXQ%2FAxUw9i8lr2PruHEhMPuzw8kGOqUBSTpjale8hLPVUgcE7dVBJR4Hr3ozZlpEw3WxnkNvAAjftawQ1YHbH3U1DFsvTngo0Gq%2FJ67V0XbqCvBT2dif2X9XvQCrJYgC6yC7wZOrsTPPugtDWLtC9hBDmyE3UHbLIRfDlBfUYG7T%2FCs3nvajbzkckxFbqEUGQ8FeaGCbtJAFBHxUv64dQtMXZV%2BHk2Qum0Rg5UlqD%2BRKvRb3bH%2BM1G%2B5DEB5&X-Amz-Signature=f6bea8ddcadeb926b12121c6be089ed89b2c9d35fd15d1c8a8e86347efb605f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

