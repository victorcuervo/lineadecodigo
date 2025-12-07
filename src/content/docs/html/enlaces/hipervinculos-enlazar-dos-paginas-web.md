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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UISRQNHZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeXScSzXM6WQh%2B%2FAMvX3XUMAyzf36y3W2K%2FSszG5nRrQIgE0f08RNX4LvZaxnyZv6U9AN4EV6%2FF5CZBuWZNgm72hkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeDsdhLkuffxR6IayrcA9M4USBMHVip5yfN2Dg%2BdG0%2BJ5OYaumzHwGgtTQe%2Bb%2BnbaTo1IZhNFRywdL4oi9wBWNdplPvUh3AMJCZYmNSCsAiRUWxp7BkmbDpYZGkBEUlV8a993tU%2BwQpYbfP2wyHk8tkgrNaTKxw%2Bu0ygx22QTO%2BzQn3xx3OneklBOFFz8zHWPldy5%2F1H7sIBL0B%2BmhEZLxUQy9AcHMQgaGLVDP%2FGj4O5lAi5tvyPdXh1rPwyYeX0RtJIDwddcZLUj2Yp4olIFJJwprZQQsmakFOy4mykRCAy4Eg8Su2qO8qsyIrIVIIkiin5qTwh5p4oiLRsbFgqLLWxI8Q04HTOh1jmd8OQp4gXIoHcjrlWYBwhrWNkjxOg44wByajU4KQUJjf7tifHUEc8VLs%2BuX6Be9PXyt7LX58gBMLiCheNN9bRVps5xk397GlaNddEG4T%2FkBFaYcqTd5glYVJ3U54ar3vZN5RLyCtrX8h3HPP1hDdeHoWxMG2zWpf6j8wLkAW5Uy5k3dpFB5x9XMsRf6%2BvET489Gquei1%2FCWecM6JKpvvmyfzBeTIIV%2FuikxvvpI9kn7sIHEd68cKMUal6pgX0qAsIbmAvrgm4TuD4gkHLU2qvaaVR6RfaK2TDlY%2BYV1vYKq4MPj90skGOqUBw5z1rd7g6Soa9uADR856UQZwct5Uwh%2Fv9YWntg24NooXV6%2BU4dtC8NMrQwEq7cCLB0YHjHEdwcicSruzWvZx9gAZK8vBYo14ndYRsZ5PDeXEhv5bXxtupMBwuzlHHxpzn9ycViZZnfCR6wMgM43gYTsWwRoSGLeM5RSYNFC%2BGiWDM8LTMJ1d0QIIcvcOHxDBLMs%2FXRNy5mPO%2FRlHX2iJWm%2FpEm5n&X-Amz-Signature=b4194c0bb2b4747da883cc8c72038f9b010d7464b5e508385f089c2e06cdb376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

