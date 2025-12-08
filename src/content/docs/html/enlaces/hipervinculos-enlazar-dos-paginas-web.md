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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NG47I4Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMofR0EOJOBYXS0BvFIpKACKgiQiBEod8%2BxK5tAd7pAAiEAyZemEmrIXl%2FjDYDbbOQPJ8OoJ%2FCg3ng%2BeawhidrvmxIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3P0G6ftLZlwlQVjyrcA44euW5Neeur60QGRTeE0bzwYwABDhUTjecXdyppTrKvOGYA5KGV0pxmthP668Pkd7avwum%2BY%2FU6%2FK%2BnT0MG2srjnbNKNalnMsrFFr3yUz80KwXX83B2gY1zg7EgY%2FCXbURdq4v0GlRQ3ebOSmEwmBwPbU30bPjelLzynq5u9jiiSQI5DYOq4mwdMFru%2FT7K6Td2RJTqBymn2wCCjUU%2FNNZyg7eFFWLPEUAhagqNaUAYKSSCP7%2BJlb4TKU7PGZB2bJBt4%2Fk2zfLK%2BF2sbW75C%2FOxc8DamOpaKgvH5Tm8zKRFF7JPPZOO40Gm3F%2B6IcsEkFC8XRAaEDRc%2Fc1Ef4%2BouXZwUsjhCS8CSmSQVZRrvzomlWpYU28qH9bA5%2BE6ZZnRoPvlPEels4HzkX8xCQXssHcTlClM8FsMd7mZabz9uG5VM4Lpf2P2MiIeoHGu4JsRcxDQqHLsgnlcDaq%2FL1TmJlD4IJ1d4Tdio9jmAgI5Kuo2iqNVZSpN0UDbPavL%2BAOaYe6DLA%2FYmwlgAn1mhiR8I5iwtDpiC7Po7u0dC5fZeogvEPbiceBhcsv%2BWjfKH4uejOJoiU81wmzocaVvuC5f7QgJYpPMzbdRz5u%2BtVn0YIg0MaqBjhHvgguEb6HVMOHt2ckGOqUB8mJXtTVk8VEYcJF5DEYaBv1gywPbG%2BY2Mh7D%2FxIaAp%2Bm1V9g5FFoaAJrMZOVhQuPAuBuc%2BgajgFk4lwOxgbIcrAWZ%2F62BanSJ%2Fa4PQuTCbzIkAvlMrbA68%2FKZdxFxYHNCPpZv6nqyD%2BTqJdANUaU7yELQFTa8tvpF9eEOG09g4e%2FEqcM6I1tO2sRYJ3WkhLrzejtM4axpW9qlsKdhaUhJ%2BzMoKVR&X-Amz-Signature=edcec79ff60979fc895ee28e6f8d1f5b3bd322160fd3df3eaa24930e27f8cb0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

