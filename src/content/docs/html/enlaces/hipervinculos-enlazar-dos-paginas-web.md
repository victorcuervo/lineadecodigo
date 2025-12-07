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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JQQVYJ5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2Bfz4OydZsskrgKZqwxD9%2BauvmCYW5s7YaFWWVnmsvdAiEAs4QZxod77wlytxHZw5AbItvJ0zM11701gWQkTnzX0iYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZ52xc78SVKgGFOiyrcA9eW9Geq0e6KCh5SPKs8ac0ytc4kaYCzivieOucYA4DIlSqZd3zpNOGDulOBJSVayEKd%2F90fSwjUOGDxpXncBLgL6I6AnkjTsBvYuFE2x1551mehecOWGzXcqNc0UXvNxZkjNbFILjQrDfbSpuiX5q%2BL36qWSOugC7Ow7l9lHlq2LJN7pCb9%2FYbsE5BesKGqmy1fadJiJdycf%2BgyNk38%2BWyq5NfDtcRFA3ceZGKy6kkfn0RzzW81MsQUZmYkjvPDR1gPZf1XRpVeJ7PL8PvwRGLEyUuLsCid2Lv1sqjB%2BpfzWhONRXVAeN4Z8UFlvStG56knnrGZNaCfLIVNR2PiDeUCI3ceVNCb7S%2FT3YGfwPGvFp%2F06SVQfby2abv86uvrIxeYyXoqzZKmK0Mt6mVbm5R72oH8FLIug91kd98P72LEe4JHw7q1iKmmpgZxj%2BI5VumMlMIEmcTylVc1x4u2rS5tlG0HnmoKEGZ%2FjYFmWf1Xu5txQUgiAUIULAnHb%2F9eU7H17N3wh%2F%2BOeqLL6N6KHkClsPyhtaF8RzU8XNNtyFaN93h50cS1l5y%2BrPY8FilDdG77z5RC9BQ3f2BujcCE0oVPoKMHkctWXJxS724ttJgEZBTCXzzW0ufM97V%2FMLv90skGOqUB0DIKKPy46Q67MMAed3dPQr1zT9nT7QPQh8eHNXA862JH%2F4Xn%2B8UYv7G17phRVf2gEXfYEfAx8qHr9d0l9JSqueMMw6D1Drn2xKSLm%2F2gntU6lpkrg3VqmeFnVB8ybLZWOrEJ3r5HjTZlzBwJm9RT4M9%2Fp1RuG8Fb0Sd4a9o%2Bq4VH8hm6s4rBnJNAH32oePTVF1SuSLm3sfmsf%2BQjAJ5TaMomJXFy&X-Amz-Signature=7b3e8a9e08680fd18db4ae7ac4e7e6c0fce7818bdc7fee639fadb529e2ce6ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

