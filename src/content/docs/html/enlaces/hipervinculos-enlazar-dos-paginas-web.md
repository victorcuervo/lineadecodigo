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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMGKUWT3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjqyr8G16ax0Nlz08fj%2FpRmtEUBR2ZWZK9pn1NTRn%2B4wIgMBNNhCCoEFs4Gekgu4C6sBPbfAi8pCdN%2BOF%2FmfeUIdMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDW%2F3FO9iDdkM3uYiSrcA5mLLTup7f7XLaEMY4MiK6AYeDzSu%2Fyyei1nNZfi15cvbw7x7dk%2Be%2BShC8qHSKFZsfaLIXCkLXrottc6%2Fue9llR8i2CVDhAND7JDXmU1RX7XL5Ym3Do6fZtK4RoGpr6c%2BQ5yDE2U7QJ%2BHU9YqWMC39gP1w5F0zxcCja%2BKLH8KrJifLemVrSlvcxPHvYU%2FSlcvnMp1qoGtk9GG0vpXdBkN5D%2FUx9LIkWgfCva5BM8kc9V9RWGQ%2F8e%2B8FS3FYLgQ4iVkLIBg4FZqci7B9u0HaaYzeuUGWWY2PsblbbQgMluu2qX%2F7yj3QEcRUn7pd1ayrHeNC%2BDmrvM%2FM0YWffmVIsVqgeDy9G9RMPozigTSI%2FUOmiB9Z26A%2BxtTOh3kQkAG0nRJkXIw3o%2FAZQMvJ8fA6j9YvQSNCXf8GtagqdxNDN8GB5uMnoPshnV71%2BfhZ27LtoO%2F8etW3FXCHU5HpqdhOr6ul6TGVEb%2FF4Eu1NpsFE%2BY9UsvNURCeEeL%2FRkYzSKQAWyOTmPO8yXZSE2c4IcUEivc70RdOpGbyQDCGL9aOsqH1yFb%2BmLOl%2F%2Fq9vlfctJvVqrUaIrv%2B6PEz%2B1TNc9DQyOvau2MdikSrz4SZzooHgbujIj3zjqyXwEgSxDBHLMMOm0MkGOqUBk9KLFVwFLEbwTpQ7LZmJHC88kqB9KYhMGquIg6EtoUwU4lJEkIQpuT%2BSrqa4UhCjX0ns1ZmEG6knKIKQYJqjdQlyHmJzyf8aim5K9Q%2F1HC5Q0Nog7GdxHdSR%2FHlzRYDslxc%2FsCy8DrsIsb%2BEsREq5IJOW%2FHwSj0xTU9hvQs2nHIYODrdPcy3Vfp1RMnOaqWPepwhzV5bgOx%2BHAv%2BIGuDUkZd7t0n&X-Amz-Signature=fce99ccdccfce0987c85a6001ab251c8df9d9ee2d78bca7e73d0fa61a95b1c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

