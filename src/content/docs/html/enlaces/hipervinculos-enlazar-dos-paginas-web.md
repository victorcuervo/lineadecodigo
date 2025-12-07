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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H35SFHO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQR8vAxguMD678cy%2BHRswXsoNvPLeFdtlsYhMBQAKx7QIgX3uhBe2z5Qr2QaoAnOXktDIUZ00Gf83qylDyDVE2DBkqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfl8H%2FSjUyaCcpiSyrcAxZZKsXL2rHrX6bTYlGacWqXqiBXRFVJJtAosSXXxWklnGA2Vc4q5o0qnvMIs%2FKv%2FXaf9BTsi03%2BltV4YGUL7eaozaJ8hBbDNURmxUzhCOuBJI7v3BcgMkatB1mtziCR%2FnSj29eXXijxZCVsHi0j6hAt1jbN%2F3lbvQT7Vt6NIyry0pvpG0%2Frv6tBrO%2FLmxxcTRl9a5ePEnuwXd%2FYkOI15U3jUn1w%2FYxq9jbIDr26QRJQ4CRZ8RnaRy8qomSgL72giXDc8meaLgqvrFx5pbQhUtkbsU4etNhXDF3bS5Goc6J5dmVt6csyctYAwm%2FrtsP7F3T5%2FTopFIZs0EPE%2BAKUXKcglljbDDoVqoT2pDuqOpvT8hW3KpaWOzgLV%2BAlC2wyV3Uzc0l2eyzskvrpp01C%2BAN0ag1AZeEevxuLLrH0RlL1qqDXh20B032nvP3E1zXEgor5%2BcGAN5%2FSKZLBz0Yqllaj7bABpYJZQeP0JsIjBEc7%2BMk1zYWUjTCZqUWKYOHISNm%2BzRdelHIfKoiMW7YpWhfe42TuHSk1eOC1JZ5cAqTcdda6RwuHcktoV%2FS5q9Rzq7rqRJRAFr0GOVS6cOYkSYqV60PyR%2Bo8KSkgFBuQ4TAG6qbHwaOJcvkNFSwqMIXI18kGOqUBN0Xl%2Bb3YnQzCJ9g7F%2BlvzuWa%2FjeOArc%2BgOgmVsg8lV6Vtm5Fc7letqlb%2Bho2QQfN4t9e5ti5M9NnyMJ2O%2BQ99gKNCpHLvu2r6sNyqaBj74W2UcHYHgslFy6%2BSJQKS51tqw7JjQpD157uMP%2F1BNvFtwYqeyDs84I%2F65sAtBIcUEmHBuxiGE%2B9w67PPY7tsW7cZjBwsDdWYHPOroDPfjHh2yzXpv4h&X-Amz-Signature=2bb7948c9f586ca73be5aa2c665e4592c5dddb1aee38ae3312d5b172babdcdd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

