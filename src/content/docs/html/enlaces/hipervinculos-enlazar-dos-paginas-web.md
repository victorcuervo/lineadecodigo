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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677AI3KTA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6Aus5HdDAkQMf48Xjse0qSm%2B16DI8vpGbSXfGy0ncVAiAoyNgR8%2B5ThHwPGTlFeFMa%2FYLDFYqZF%2FVYiMLP8fWVuyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME3bKzvK0J0piZFRUKtwD3poVwjdP4fTCjg4Z%2FSBE3oUhSprow6rcCr00jdRacWY8WjWqG8xLO6kgQMmGAv6hJiWunxGO73%2F8h3eWVqxxgUQHNVWbVB0Chs3IhMKDfB3UHdq3Ee4y28junGJdfkgpDb1W21jv8K9Ch8JVEGYMY4Xpbmc%2Bpx8%2FfUmB1X3Ez%2BdaoTxrYyUQQi5L98BCKrDfb0wzEq%2FegFXXddRgMySYFAF%2BRMahCxk0eKCUKhhXFi5CDVGZ4ugQm%2Fl6SwK1nmItbe1hFYkjSSB98akRs2dbXphXxJVxGOzAeEZyfCV3VZyW7ptpflcAOjkJ2gWPjomLtGQx%2BzDD%2FUcae0hsBC1wT3qXkNpLAcDqBEx0v7uqqei%2Fz9Cjc3ByAE%2BRn6Al%2FK7zDQGm2kYeTkmiQaTRhH1OIbqwoUch0cAg6j6VxIkoqpHbKYO0k%2BP%2F1cZ77kaCjTLyt7Cm5rklTRzCZT0JMeSUnZ7F32CgEXbCVjHH%2FVzROklcRysY%2FC6fUTsxL7bDjH1WI2lM0HiurSBVzpFZOM5Or5cAAZlo%2BM0zZG34AuVGb4GzNGMz%2FN%2Bbc0QwH%2FBKVavioSjHFB8Ktr6JvU2YcVN6vf8tCC60S%2FYnW5Q3TSm6bwx2tg6uSZrxKTpGydwwjKnXyQY6pgF8VvyA6lj4cSTQkqsYTcn8uTU5yyfr%2FnVsD9X4gzFCdUs%2B5d7OhHONR%2F8hsN%2Br40BmunyvySOTvmLy4QOeeY6%2B%2FnegcH0qM74JGwyE9NAsYASugjKICbf%2FGPQY6sdObcFIs01%2FgTxmd3WbJeSemAjmIEEuOY1Axp6n%2BIDnKj3S3BA4ouXmOtoVrok32RtaGbQeaMVBz5Qfq%2BYkgqf7Yo9pkLaEAzBO&X-Amz-Signature=8c593f626d3ef11273e119aa7f55c86efc82081eea2325eca942292cdf5278ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

