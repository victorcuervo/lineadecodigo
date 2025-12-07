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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTB7MST%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsnepOJSci7gmbF9nTSIGuCCa4Sw0T8aa7F1XIJdxvzgIgQczlgli3i9UWHy0NgkvbMNjnJGdKQKK1H1oLxjNXDxAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnH2Mnuix6oB2vMVircA9on9G9AyxovchG9jNzk%2FbK1H2tXwu4pK1EFYc3mJl%2B%2Fich6A7R22%2F%2FYGCzrXa5IbWkmec6bx1KlqqHqpEc5dz2mpeezjOvqBJrialQ%2B6wptR310r62CadgGZ6qWxNHjaeqqhGFvla6OKX4ZG5e444bF%2FYjHoU9wLviEFFB2XXWHolQcx6zRosfOYy5RfBvoBkl3yNmsLTAn3OpfeXo%2FNRNdC4ELu9L3rqOitSccZNochJLLsXVlJkK1jRqTsxqBBGhlf3hcGqhwrd5pbWgWlLL0emaw7H76KjpBVd7%2BYTDil25L7%2B8%2ByWmZzUkATOxNXaeNVwbrrFC%2FPzm00VYnTjYJtAZrQLLZyYNNgVv%2B77TSn0Fhp1Uh0ap%2BtKywwuwuxHZI181Dnlf4UnYDqFywRbwHXWXJsMQRG9mFr36rrNpZrVzSpNsefCYUK1rwKRMnfZeduiXUgxSxUMCgCWTVwjKfo0JcrBM1fz%2FMGRxSTzoBdkyYXHNQyklMNtrO3CnXNp4ApxRYgqXOTzGiux5q8ddzAy7c2PuQK8Z9tAerSiMY9IDrJnmm56q2FFYM00Ss7SuZe3XL12yH4Q6Fr3a4Sj3YO9n%2BKzYV81D9R9xxBDQ5KUviHBADcyyLWVV8MM790skGOqUBzbTP0cJY6w8FlRGIXrFSiq23fsBGmeF0kTsftXQyWgEOf7SfSo3%2FnpAzJgDlYimkiHVC%2BvpvpExBTWfIozRW4UtF21a3EkFwokseHAmqXYbQwgC50cTCjwkQ2vldnZTxI67Y5OSfWjIq2%2B%2BI6McoZvPzrtoSEDIFt03nTPvet33ku%2F8KB3%2Bbwt4k%2BQwsrs7qatHZjjs1ZXLVi20VWbxOIHRxSWwW&X-Amz-Signature=f03170f914fe99636f69331a770be4bfee8fbffcbdd4b043415a70c9a342827e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

