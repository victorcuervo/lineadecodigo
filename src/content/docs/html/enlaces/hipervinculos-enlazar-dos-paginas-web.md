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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IQRLJ4B%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkIK6OqIaBH3%2FpyPwEpdWufY2%2Bytw0LhUkmUN1WQr1bAiAoJoIb4F1U7gR6g15Gn98Pc1z2pvM4NEVHqRHZVzdRniqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMqRRAvqltQvjCcE2KtwD42eHMsb0NEH3BdXYXx%2FkNCfvI%2FNGa5Hclumi8YrqB9%2F7nUqN5%2BJ1so4Nm20WjsPwP88YmhqGFucwp%2FM8NIeatHrsiAlzlTijUt8unmegccw3i9ZUzdS79%2F%2B1NYqV53AhglvxP9lk%2F2K1td9N6RCSXndW4rhpST3abDJQIzZhjxBhG98UAYXwYa7zX%2BZBN2LpXEfzWjHb2OZeOOQ0WcmxGOnvmQIFzQLLpiwNd01iBF6IlfAfmfXLEckiMyoisLk3bDeE67Obh3dy%2FmN4A0JZlrF8YD5sGZ%2BnQyNMP3fgVdOGHHWv9ppu3BveeEgsD5pve%2BzLE8ZjQYMFyA9YLT%2FQwJ54925BcF0cgq3UjLdrSGUtwrQ8OhNHAYAvgwXEEH%2Bit5HzokkdwugXgzad8YTwcmicks29JjTrvnMqjwzM%2FS2JthfB%2BXnMzmSDUGlliKm9168WCL%2B6Q5gnHxto6df82%2BLmDOwz7KJkplmRRgsWjZQfsAkBN6qDhnwRoDC2%2BY9iPAdsJ%2Bto8SuodpfDx36UfvXVHuVqY1LwECHJy2XZDtEnJm4k7HPAAAAktQ8VLfVTArPACNanlMMCfXJ1NKN9YHXllrfDBjz5saP%2B1HB6LRHTxNQui27ISb6At9gw8K3eyQY6pgGRQMlzyntBqJitJDia9uReBiM98X5hLK9uhctXgtQtamJSyKpui2Dknks%2BkS9ugOhcJYXTDaS6fTxoIKzlLQdIgpQiZyrybipN6G1PGSyP%2F07EHhtSqADarDpJH7e7nc0Xs0JKCrQBfqjSjHcLCOyf%2BYxp9nyx0UwQL12LpxubunTPwkZA0xj2Uqqu%2BE%2ByaAIYAoNky3gH3QwfeoMwYrqGeIjgVkLt&X-Amz-Signature=4926115e01ca4983c4481d6b19cc4ab0b32d0a5bc55a1d46e87a6d49769d5a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

