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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AE7K6AT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T155011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJm6sJKFzA5tDj%2BTdxFFJQtUEncVKE6YrK9%2F5tYKrxXwIhANNhWDpR5v%2Bh6x8i7ocjXn6JuygXnI%2FU8jxjepT22s%2FWKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFPEt7sSVNBKus%2Bisq3AOhAPsgBedJRjla6Ry72koEps9ffsmme%2FzWwRgk37L%2FZhmEOjzK9StIcDPm2mpzCXQbqIpmR7T3TYHEsY4RIB%2BGq6bJTAISnDiXQ0IwfUr%2BARcrYEhMQmK1437V31c3DylmW%2FoiOuSdH1L78%2FW%2BfhCZcrI%2FtoNptdoe33Ya%2FG4LqhHe6mRtHsXVv6XJt%2FpeBrhN7%2F4kMglpTUR7hH%2FOS3TsDqNI7flBekTRm6KdmVqDcDEKUQtN7Ft0k0iqHwfjq5vZuH%2BEqQsOiP5bilQ2cFX3pLwCTsYmAPbw8rXv7ljI9Js%2BeGjMLDaTWlJOA7YLGArHQcH7TxGQfglyQFNSWqjL%2Fo3l%2FMSvG5KBbSDWbLsF8koDUVxPkYxI6loFPowBFx2Pi79kGFQSsew43aetqvpEPxkzfK%2Ffc%2FaywEBmsWVqgDXMhovPjeagoAW6JRkTEPuICoyATc2oYWmPx4UYhE0WuAdl7mWpF5sZkn8muD6tFhB3VX1%2B%2BAHnH%2F03nLKr2VhKp7ubGgqrD%2FFZ9rAB5%2F093qskrnyUdOng4vIBcQ8m86Exa2SkZ1F26yBWmOYv0tG%2B3uOIiglPfq0kwHktCzlw4hu%2B%2Fuww5j%2B%2FllSpVbRCOje4tQm4HEeHvyX36jDF3eDJBjqkAY6Ge9MDhF0859FlfORjjFFhnpd1mWA0NLKW2UdL40RwfBbqcFkJcpzjfciJ7mfss4Zu90Zx%2BleQFgFu7zr419QYl2jCYMYlEXJzns%2FzbGrPAdeJ7P5v2l03nnhzV3OOR4%2B7K0mf%2ByeT5uH6ClLxsaKCTRM5a9u50HJfskifO9FOke34JXT7em%2B%2FyfH2BZ9SA%2BK%2BqVaONJmcHmhVJ%2FV2DoQLnnBS&X-Amz-Signature=68e88c71e24c8f8076dc073cccd9160fd6d68f8ffe317878a1ca698eac90e1fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

