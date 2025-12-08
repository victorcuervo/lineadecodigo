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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LJDZUC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGVxm7jMlgWZGTBDGyg6UGoysapMJSpM%2BIzANp2jbAIAiAyjr5bbT%2FDLfj%2FlsSZSRvfxHxeQ9y0Ob5I3zEP3S1pGSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmbumRi4c2vXRIHfLKtwDGd5wY8QrzmXQVKecaW9bgzgoEhWzQf3gbe9mvzjgOucYzHr9%2BMdWq23wIee%2B1%2F7GmMjEGL2GMbb3k6DXJWtB5ftylAORVgHEw607fs%2BwYBOyNTKaLrJexBXv%2FIioRvluldT%2BcrUG7Uq6UtaTdl9LKNFcWrSuzq3Wa8BTKDrDsPKTXgy00sYJdQaijiw2e5Jh6fp84Jjb15fvb2tYy6L%2BBfCj%2BpRqkflDs6vj2CPeO7JDEtK6SNyvgLhO7ZJVK6QS%2BTso5mhzSAX6b7V8gqol1c7dl5HpikXe%2F3vwmM%2BaOeIP8p2MBSg9jwTdbKcfwr4VBqFgG9p%2BV5O1Vxxxw2K5MFrCvQFyQgBUMQBPqt4Ina%2FYZsNyH9nd2VtMAVVdAhz4atmXY1rXOSHDn51O%2FNGI3AgANRkVQO1vWjTyCZkh5k%2BJNz8iyuUl9GBLmBvePXjkrwqGa4PdrKxtIWXO3hyEh6AxLGMZJcndUpsIK5xC3lkgyYQS6BzOKfeBRU3mfBe5e4YUr3tT%2B0Cq7NJ%2BWHmUErAHdX1CUs7EqNZJPr7F%2Bi%2B3f9dPchU4sEPhhpcgkqWbQyw4DuNutzlLRrtrag37qDiDn%2FDkKhW54SEuzqzIcDFZOuifRab40FpFYf0wiIDdyQY6pgFftdnYrKEF8uUPkmx7apYBCeqNvoI7mrzylC6qphDu52APZpe0AYeylrz77CIV2ByGSQe%2F01HI5xYsoNcZTILb%2BS%2Fep0Jovto4X865ir7BltdtQcgwSR5lFNcJJ0jkgNT4T3QrJbEie6ZS2YExm94WoVYe%2BLHb%2BuZvywXZB2RECR6M0x8Rlt8eVOFhoWXksps7zSFoy4dgtfPxEhA1EudydGwzcrvt&X-Amz-Signature=cbb1f51773de14ff54aa6602fa03d7af811737daa8a001d75fd8568282aedfea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

