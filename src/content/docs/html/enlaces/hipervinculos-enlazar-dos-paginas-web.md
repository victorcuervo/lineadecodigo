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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR6DHDVN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0SLko0bGSHi%2FtW8BWLj6rsqPeVxxeuAWMW7WgjgVxiAiB%2BB6Cid4G2IrOgwU8D1WMKh9LyJuk9%2B0nJRzmXIWUtmSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX3AepkQH2Vaz%2FZUIKtwD%2FBiw%2BONhvoVS2z3aKjaCr2SmtxY4ozLdkp%2FeohNI0bQXlSw07iKK41Of%2FjZD1kLQTQyYvior23U6OIFR%2FFtI3%2FIOu4ow9FacI%2F8pJdrVvF1TmPUIn%2BUE5lvp6JtQp31h3dE14NwEX4KaiqS0vc9IHgC1BSUONJsgVi5JEOOKUexo2IQZZYV49vWD9NYymMdN3nUrtsqznfzNr%2FieY1h6BYH0kdroCPQ%2F68xSXc3tc6OwvjSyCn8SfRJXESZdfwHzc31lDdsYNoQZFfp%2FJPu16Z7apG6cFLlFJXp0msg09LqNSgGa1L2koQWnkTqvHDxGJVDxFKNzfAT3PBkhZO7bvbwnbqT8vgvRrPF44PQb95CtjZGWQf%2B5F1PZWNZwhrcG74LoI68X0WBT12Akx06p9mq0sBXAZdpYVvaAIWFUurAWm4nC28sf4i9Ic3luZ%2B1KqkrZAIZqunqcrp%2FZCZaREHUFLcLmJFYN3BHOtAO08DJ0s1JaiZj2UehYyS0%2BvjYAdOyAlzBBMBHCPN5ymbiVWIxcFBV47b%2Ba8QsdDjLd7NLMGUyUSAnbOXZT7cui7lpTLKJCYTFjuMxjC2FvtgeSRzJb%2B9QiTTf3aeEo0XaTCGHA3%2FUdc%2BLSHCLMaeIwmJnVyQY6pgFri0CqFMe99GbC0XPb1wNknXjK4B4qbwaPPkYQoVzCGUEbkEBSRvouRzMeBm2FESs8CPtJ1IXtR8gf9eEY4EuUL%2FvFQF%2FB%2Fn%2B%2ForhnKQWbdHeBrjpm%2BbrbpJoWih4YV0m8BjOO89CEzMadnRwvONS%2BdFLj7ZaCQyHCndCnaqVF5VwsofWgu9iLnMqaRW5JuUDX9k9EvMdA5BdhBE34Wn8rOZQIefQk&X-Amz-Signature=ed934d42715bbe33b0df437eb8145651815bbd46fa0d62ff7493a49f5f4d201c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

