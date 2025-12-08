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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IMGRBET%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T132547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHv9vsSwFRk7VJAhMmJUJ%2F3wbETz1LUWBoCFAjgRtyMGAiAXbPQOw47lgXZxm50Qt4JM1VGNRCOQFrDy%2BJzCjEeheyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxZI4Q9D1UTaqtheOKtwD%2Bz36LRMl0mpuYanjmQpphYjO9oyCBRpPrTqdENl7NEcgFqapFqxz95AtsGL3shrXbF6T%2BAJjfN%2FF8IYK7RnvXXMOsjGu98JQErZaNdPafWwzYoVa0FRA4aacUtdXtR%2FrbupAIV5rD4Kzp%2BEnIw883rWwpDlYlSUp0aHSfDYzyHnoMASWQYlOAwaYEhO575r8mBEFl%2FAZZbyipO2GXPAl0X6o8WkY3C4a19USS7Uyao2a2gAAxzppuoCfhW1mAkbaIapbWVz0VcfifxpJ0%2Fn%2BtxaKLsbu6cuRGjYnMlh8JSgkKa5u0fAzNp%2FFaVdRKNAT62Pky76GGHIfN7j6ANIbd9187RlP2rNfQaVjTtNZPUqyzkl3yXhB%2FXqKV9ydY2tVre8AVQ0nTc1ElIlCJwu%2FhOMsY6OpsRr0T%2B1YlmYmP1fLZ5cj7cETzwUtMbJKxWT5O44jYVxMOqlmXE4SpPJWeMTUQc2JVqPDC8N7Uyk9gU8766bM3pl1wH5fLTGgigiXNTRJEuA9JkmLPfct6q23qThdlWxavuE1zpa%2F8DYfPZfd4uSSnrYP4ftbp0ATf5juaRg42vGTA8Dhe6p6Kidmhw1V%2FlNuirNo%2B7ban6atwCbVtNsPbRH9C4q40tMwjZDbyQY6pgH4iMeGVWRCA7GDjnltYhtLGb1x8Cg3m8%2FQ4Pg59cwPXaY74pbfNIn7V%2BtGW9PFmAw%2F3xHZMbjXWZ5MJ1XffsyaKBK3rH16bI4q%2BafvVV%2Fi8lDUX2bBvy6a0e5s2zN4xRQ%2FOFBvHxdBa92FtbOT0dBf4z98nhr%2BqGu%2BItt0FNcqhncZTKer63Vya4VOQv9a%2F0i21ihScFS9JDSD2BX0Ibsg7x9HMVNB&X-Amz-Signature=045197f9325218061ebdce76830f8afb8fa841a074876933ab7482efb3016d5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

