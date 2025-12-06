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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX2SYIQS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC67dKZCddMcdO7VW1QdU9%2F0RoAxljfpvtbJ3aDV1ukvAIgZssO2gdhujJlL2tiKjDZ9SaZqZyTPzo4rD3RgQg0XPgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMzKNvS%2FDz5qgR8HMCrcAzCBQcAli%2FnBdHoqW3xS2SH4gb3V8PSI4J%2BvQ9UBoe1ZDxYzYM2x9J4f76IST%2FxYLbxIvoTa7uAQB7%2B8epdkPAZ3SOX%2FqEpW7Cf6lA1MA8jYo3SExtsGOWc92Eou6%2BtWCZI2NzrCJ73ZhXLVXjLHqRypB%2FxCsj7KI%2FZT%2Ft3YL0A7sIWMmCxwxwvnbbHaWqKKL0X2NUUo4mmDOcbidJs4vjUCpcqpZivY1N9CJwhlGXtQZpEFgYRTaflQFU3CLob9%2B6GCWzoi%2FZedPvfoP%2FZi2ifx%2BFXqxleRDE5FOjcGFztwkGlZOH1%2BLpdXm3xmw8RxflZ3FytDLkNg3H5tqmmmrewtzTPf8QS1Y2%2BXFoikgEdrTo1gRO%2BAFb3FDTb8JzMoo3UDxczHGG%2Fna7I1%2FFTChBLDxG3p%2FKVrAUlcNZP1%2FtoH3C6F%2FeyJfdl%2BvdIfQGzSbzhIQZfnLYLmVOM5bceR2jzs8qWZ8a9fRiNSXwqQq%2BbUy%2BJveHnCB2Caxpw5nmNK5cPxz3skeH4VUWM8vhTW5AWHQ3iebYATwB%2Bs9nd1BW7BRoItTYHgxGJ3ZxQdfhWuHI6BOgSW1fnHtfDhYxCRMoSiGWXfVePBI3QJUf6QHtOSIRtS8fEUrheBLbPoMNPG0ckGOqUBWvTwG0HbhFBppa%2BU6giZZMT%2Bj4RJ%2FspOLNhHGfmYuJn%2FDA8MUX%2FMCf9bgfktKtuXGruSrFHZpvlwLiwPFAAJTn6xzXRmRMdvW2jAaEXp3XRd1zls5NZAIgFttm0baEI4wgB8%2FYJi0PDQ%2BUsEUIlR69rO0yUftqSsKQJ9ivuEP0kQrvXLFKQfkaD6uF%2FoprwwunDHsI9ZiDFZxkcIl%2B3MzvtYhiyo&X-Amz-Signature=aa0353b2e5fcbfb5e78cbad21b087d55cd9914a605a46622bb397abd3cb3e1e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

