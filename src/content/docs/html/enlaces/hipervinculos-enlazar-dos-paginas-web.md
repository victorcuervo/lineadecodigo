---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUX5SHXW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDClIA0SnddOSZdIp6GAxw%2BEH1cTpJmFzabE0EcZqbS7QIhAIx1xUkp3eG5e4VUV0Zk7IzUxK%2FIbtLVymaULd3sRsnVKv8DCEYQABoMNjM3NDIzMTgzODA1IgyBuViRUYoRQfl9gikq3AN4AcHBI6w%2Bj%2FLIy1aEkTKBi8OMVvZ6g%2BS%2FxjLfjd%2Fq9co3l%2FhIzHQe1N0hDt0mWZsU%2FvSZ%2FTaxG%2BNdHORAWu%2F7sZ1bYBb9PQ097waQuiakuj4Qzlj2AF%2BrtLJiJbfDlr3HAvZ%2Bpi3aFMQla5%2BvvsAaBh%2Btf8UXyMr6YL4%2FvnXnmx%2FvtQO6fgQ3I9HJvgasY7ATDBdhlvWPmDgKAEEmf9eCCjG50xOiClvgsIILCAGU1BBvvNBitkjWT0dz%2BDhvIG%2BDfKA6SJ2UN4SaqD2U1UJrdsCSwZU8X2vDjSKgwn1gHzhMvMbrOR0XCsABnF7g%2FXfXvDkKhDyKPo8bCjbh2qbOwxRGqZy04kD%2Bl6yKxTVZjsyXbu6oj835A3Z2eiMU7fFEauLq5e8XhxT1a7AjbHH0tUYXaZxOnw2%2B2Hem3HdzzUZdWerHf5ayNZiSd3zqPeqnOgLZfL73JspFfzFNdMqXGgKt149QKpKX4w5zu87UNDCha1LwMmJFYIxdHWH4E0a%2FpaHLsOsjIQQufDxdTEfYxDLGkq7uf33D4TAnE%2B8wz9ficVNCrIf%2BwxNX%2Fa%2FCyF%2BjldqTq%2FYGEwTAja6PPNyo0PpiFQjDiAxKNv3YSGr4p5Z1WTm5CK1HSL1PsTCphMbJBjqkAXkeQ9kj4iCKL8MXyDTDQ%2Folx%2FWVstiMrNF3zRzmvHbokgOEYr%2BYE7ttPIo9ZGIHriShHv2dCVTPbYgnJ0vHM5dJ8kOQiKCJv2RRqXjqEUo%2FEk3y4NZbGITe8u62aFoBmbX4I0atjFaBVPL56uq2gY9rGwhi2iRP0%2FQ4tptrLRg%2BSkH%2F4%2FikC9Mpvw0HRga34%2Fq0swh6x6ErNMfMCQZmWUUsAgCv&X-Amz-Signature=2af1a527c3241bb3033606f1b6f161305fbbf7c99d797f3deb54a371b4500762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

