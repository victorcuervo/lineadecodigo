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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZT65ISI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3%2Bcwx%2FxGKym9OJDR44NfAtnoPbrT%2B8mYBxiarfU0%2BQwIgbKdXA0DL1oqiW%2FWcULfIaQXRVZJ6RbTCD16VWC0uK%2FYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6ILPLR7LE3ppVSISrcA6zW5g75b4n4zyuxQhzE4L4f%2Bb9H9i9EaoDKI5Bwh%2FGfu8bgjC0vgCcRyN3uE9cJ3YHbPo8SPln%2BnXwMTab6hJ3jxg4kFheVkwUFQgFojbcHdvZIo7OcI0MzVyxb6Za4t4%2BvKzRO7x1om%2BTanRgqsERw8gifSP7BOTljnimOfZYqIWYl4BfSPAMK1JU363QY0z0QY85f1OTPyFXWj4oidr3jNjIDolGLEmgx%2FNH91g%2Bmesda%2Bh3u6YyQPNUzBW9%2Bek8QUAOccCKkpYRAUmrKt7KTR2nIHSlZ5gw2BqoM8jD7WRJhCdGWZQDAsjzCoL8VW1Ajm5KeYG2LDKR4uerT1L9tNs6mqyqLfBwEYYQiGIHrys7ZelyOQuueQqxbO%2BdWuY8ZUc3lYXkcHu5bcmsS47tWRU8EXgcyA7pvTEx6wevnDSGSvgH2%2FcB8pbUsAdp7MCX%2FhZfnv56uq4naTFqFFE9Sc%2FCEMoeLzFy6nNyq9ComirWX1vSzgOco18jQDQyjmoxNBXBLXS%2FtUUKguwNvm%2BkZBc7AuSvG2cu%2FjsXshXFJuEI56iWMtjbwhl%2BRR4Iisn2oC09zhEEFADq2%2FCIhZv9ZtIvlOO84niHt1jObJpeLQb3swgCPfBKSDoqkMN2b1MkGOqUB%2FZOI68NC%2FnUt8Vh%2BFxww3LHnDiwJv4y2ITavcyfw7K90Lz7o4DZ7wB%2BUVmZzAM6MMdFfHMCXWbS6YyeHG1NowbFrDXLrre29IYAOx4ZHIdXJcYSyetoJFgf8qyg3aEvpu9nII9wzl%2FkM32u5cifOYCn%2Fz1kewFDeVKwnL4J8rcdDgdEvAm8pJoV44wEetlgPGJuygmSuuXhfX2DVuPIxeORMS%2FCI&X-Amz-Signature=8c9b25dd5dbdb290ba62e186a4a09a26bf81015569f356709b6f829bef6120a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

