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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VCCFU6K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFh75%2BVVfu3J443WwQp9wcoB%2FSXkQ2TAjZAQOJIbelj2AiEAraXM3FTDvUF124lfPtRyO%2BS8wAUr0Ppv9YofJ2RqgbEqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBy2NYmcaxMCVo6yESrcAyLsd65rwH8mZjm%2FHdx5uqrVYGBrQGirpoh7yN6YeAKrhbUjjBJeUv1LTqmYse5WCwmtRa4zg%2FEkHN1k0%2FtcY64gtvM2PxcjjKER8%2BEVqIIv0ucNZpbjW7Gw2tWBHtYppBZbt8ebn%2Fp44XK0MyhsDoynNsiX4uJlSXx1BxUgIRBKpZS9iZvuudVnWOi7qLWcq2SHh8BI5DVOcVlGtXIs6GvsNv3LIWZSKrMNFsuxoXaKN6z49luMM1Hekz7FEPTTqqgc%2BLpExBFAp4UFZl5o13cv%2B5%2BUo4NSP2o66Ec29XscX%2BQYilAHFqFYT2AD3WpFqgeNjErvGZo988YoBbcusByzBc5NiOZ%2B2tQgkerK9ZRPEM26VQ0h9SdtIS94mUl0TeZ8yDO9QF%2BwxHhw%2B0tigFfr3ScRHqOc2WlnVO0BMgiDHb8NvGYl8lyfyrXxq8QVn0lRwtwDINqMAIB%2BQkQVrYFtwmugPvHk2YCqArV9%2BVMf0TJn9bLOwMJW0OYqJ5R0S%2BqbdGxl%2FMKz96CaoiD%2BkbSqCkElTg%2BLxeWOxY2VRn5yxZvGMYff%2BGQHTNkHKDsk49dk6x5zZE8cbTpE%2FDar3uzdGb3M9UI%2FgDRdjmIz8kT%2BU%2BmDu9Am5V6z%2BWW0MKrR2ckGOqUBS8rB8MZNaESCniW2Wczn1HZEd5e5DPUOfDw2zymqFKXBnhq8tusx2srC%2B07JnCPhmmqohdeULJUnfXoP45nsl%2FpbZTlSZP2XnXAygLvUyMj%2Fwnq62C0pDYoDWBaJahlBcInldssB7c4upp8UlaQo2VskvJZiviOlVh3xb%2B9HthyA6Sr3vad43MmsEbnWCItNt56s1vKl6%2F6VCuivSxapwIHzOsJj&X-Amz-Signature=2f7e2cfb2b5cb50d75296d7eaebee4ebc06f92cbd7d2b4dcf9c8f6a9f09f27ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

