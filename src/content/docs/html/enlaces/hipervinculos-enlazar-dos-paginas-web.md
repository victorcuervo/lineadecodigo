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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FBFFJOG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAKBFWPdoBJwnoRoXrnsIHUTDaeKzXI%2BHaVq7mPzQr3QIge6jV3Nzna8hTKdORMhgDFcDrVSwSEMub20%2BSAa4tmrEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0kyJd8McpRSi5H1CrcA6%2FHGjNmZFSOKO8AbUk%2FR0x4pMS2FXsWqiGnWZe73WD3pGB0KjQyqhNK1tK1yu2W1t%2FnOHt4mGkIb1fgOCUhxrIhd3ZJUEqDRoipidSYkLYvgd3VY2N9xh84ngIzIfdnPhCOflQF3Osy1%2FkA7fjxY2N1SKidhw0u%2FnBZXOMcXKD49Ahi7b%2FC%2FJmUSbOFC%2FaTkYee1rGG7R%2B1txiDPjGpup63k45rYQC%2FdnvkK9FR4HDz3v88BcrxrBRX94eFFJcCQn706mgpNPSl0Yfsa9R0oc9CCcVYMXDIPaDYNm3qa%2B9aJkzlA3bFgMQJPHVJTpF2T47wrSNPuT9mQG0W7s623%2FadjvqpZKNvUPqlUQ1RXA5QQYOpm6zc0%2Bk4TDkff8SGEcmBj5sA34EgZzHBg5wcaOXTvJ4IFNhSqC%2FmJwlgVATC6viiOIeclx5HjlqbPjhYkBFJOnOmYGftm0wBzlYrCvzoQUdvvf2aYshq8JDzr%2BhwcVPr5PjDa7xkCc5CXd%2Bk3Yg8HvNRMca9goV7ZKkVzFNRCirVbYkZ303ufEZCWSlA6Kl%2BozDsXHJoN6qc%2Bv6VWMXnYRQ4JLWBq%2Fq%2BXv%2B7O1vNJUuQxhHj1jYZUHizrZuRcn5lSUp8nwrlBBIqMJb90skGOqUBtMMOlZDQQLTP16IDYTTjCvJgeWNkReseMdoTyxeAqQibQfr1h4BxxDMPxUkA7%2FHuqTOyOoK5O1vEwPR4kAoRaBDm7SKhjlfGRhFYCxsuXEwrclKta53L7H5bvfgvFrk0b8whITZ0AvZc9jfkIuNDhjD2QlDhNUsYBUmgaNESNwRnidSD1JYQN%2FevYBpRQJiPuQrDlfRUCYHT7MD4v%2Bt3QzLh1OH9&X-Amz-Signature=9f724832aae3ebf6f8535bbb993a532580b5cfd592e685b469038af16bb86f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

