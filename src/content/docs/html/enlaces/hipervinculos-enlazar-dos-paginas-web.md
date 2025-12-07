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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCKRM6RW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQRknKjc28Hlu3DDDg6qLbyWQ75KAGultiMUw91SvvIAiEAor6LfMHgYaoLKRb3ZVZGcTXvOAKk6XpdMkptH%2FQYNVQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdLUUUOdpcMZYuMVircA45Sllpr4sj1hCwIbg3r6Ueq0We0KLoVhGxZ%2FMFtV79InAnCfQoQ4aqdKEerEyal1%2BdbnCiER001VOhbdzBFtYO1Ie2Ps8bqd2ypaGT8EHe%2F9%2B9NYO3jMhYUYpNWA0xSCOOo65Y1n5lDmMERp72y7vyow4I7cK2cIYlo2xHLsCzwoPlqHw6RcJwBodej3X9xjvDlbKMNnjrI5ArxM%2FwuxWr%2BNB3y4bHTGDxnbYVuTSKH6ydj%2BH%2Bdiafj93%2BCa0L9zUzToURVAs25T7LhZ9pJ5aoSZb8g91wt7f5fHrqGbaAeE298cxHdKC96vIn64gCCJRy6zYOWX7OoCH5n3tn9%2F0yyr9vpYfDqMSWbohDK3vOiPHH7EIsg7nPli3clZSNDFcNuxIyZytD98IZ0pEInHY3NQmoW0NyXwb5lFz8SyyzLIL1rHG0ZxXmUaLEG0vdjsDcvcfirHqlFheVH7He8idGQfg7g2Icyd%2B%2BVsH1mgD12HnFD%2BB%2FpqkJ3jgi9bHtVCx65pGatd9ivh9qTuogi9CeKpYapR3fwJetw9JCidP9oJmK99ngWvjCSltHSMbJAxzF4sm99hmEiGyhOfnPIxmWF%2F16diCl7cHinRRxWOn6Y5SkQi2Gpf7thfFUpMKua1ckGOqUBPviDIaoZhAILYj3u5Fv7rpmKA3RyjPFDUOecy%2Fy0Bk0B%2FHL%2BNaU8RJCCgEQXYohILjtbKdXAP%2BtqoCuZS%2BoBN94XZ1rnV8F6YK1EfMbvyyqdKEJnEnzC%2BWKq2p%2BhNR3qlW0G20soaL8Q6AuSSmu2RX5eWfNgEeY%2Fbd0VMtdR%2BWScoomm%2FSj%2F7UsOgimKQGXQcFr7ZEnmBujeo5SB5kOjoW94x60k&X-Amz-Signature=55d42aaced0ee50fb110d2f9448d915821d9adb3c0f46fbd9474fc7b2c8920c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

