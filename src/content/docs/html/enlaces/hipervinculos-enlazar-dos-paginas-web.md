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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIOMG22Q%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBja3sCm5Ac10er8zsjc6ioycD9j7QNcdPv4%2FdeQKaGwIgVzS0U9CU51BpFbtzjuvQ5lp3K9j6ZsXULCc1pUJICbQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBLmS5FtmmUvTPC%2BPircA%2FMGgg8Yj3TUyJw8Hjz%2Bxbbn%2FCqVSNj2QB7s%2FaywfYJohIZGIlil%2BGdAlUwpt6HC7X764IZwPMYGZU%2FYkVJ2vfpfJoII7o8BLhddJ0HKHXmMdTWSXKLg43x1kG7SV3DFv%2B%2BdvEIK3pIDCITNiFWcahgolIpsj1%2FadRTqwqxK2UKtl229%2B9aeh%2B1Pg7sz2FVMuB6ypGUdJg1StRFXm3LFhIuDH61oWsxJxwCvRYTzopbsvdgxXBYKPynKlQ058rJOlyuloGYknh8qp8vKq3%2FvXvzYiOgDhcEjvAScccD3TeB6xtlNx95ziD2BnjHF%2BR40U2rsOMkATnvsrr1XcBQHvXJBKnoWGX8o%2BGgbfzSTq5mXiooAaI4rw8ij33LfJcrg0IqO4NWYGwtkd5VHybC7ZHuE3GAHWMUWFefWJdHEF2B%2FhmhmIvamR4d0HaNVWaIE%2FbF5kz1QtHI4gHZu7B8om%2Bb56AivSQE1%2BJVWQs7bPLKIJy6NDh3L19aozdGrxEIJn7XqeHwVzibtHTkFonqr9FgkuOnxxpzaWVLXXziw%2BDwVSMQXNrfUiKmJM9uS0hYtUlgBk%2FBAkAMurCK41jYF8OxmyRECHvIEi%2BAoXwv0j%2BZD7ZQC%2FHq9FkPQOOcRMJL4y8kGOqUBo8j8pboOs8WXs0EXFZOPQR0feA8yF9gcZFnHrlaTcUWmwBRhQpV%2BA%2FnL4TiaVJoQdH3SqBxKYbuaCwGZPfYZPKRLIR%2F1eeBKLsWplc6PllIyRB7n5bvoeViSa9j77g8FyyWhUGgx%2FKniD55%2F3ogltGwIUqH551X2iLrFDIOFMmVf2foC3%2B%2FUZe8MKtehMPWAQX1c7nNc4sw5FxA%2Bs4xiAUy9laVi&X-Amz-Signature=a6fef98aa384df50465dd541b1a27252a2fa717419bf9415864ba23939ea09ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

