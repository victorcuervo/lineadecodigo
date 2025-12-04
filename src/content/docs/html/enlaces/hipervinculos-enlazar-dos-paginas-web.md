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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG72X4HT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD1IcTvdeBV1p9mhhFFrNEd9SsgZpDjLm2jQ6DxYmMfNAIhAKM03QzMg5FgEfuJ6zOhfrnhknoJs%2BALxIIX8cdfVc3dKv8DCD4QABoMNjM3NDIzMTgzODA1Igx8L6K%2BqjaOp6NEuD0q3AP9poKXjKg0NwLQLTgRTq0LBrhSdS2XDsHRD4QCHx10Hwna3%2Fr%2By1eKkPy3bk4A5HA81%2BdS4xQqXfhWCD34ei3RpP2ENpftUGN0MDiAsC5UA4cD%2FmC%2Few60%2FCTSJvAi91OPO7ov9soGKPuSuqdoePyD9ycp2IAVAQHOKghTSty%2FldJYzAcH%2B7BFPfluHKnbltlcSKgvwz0zlUpNnVAZ%2FUeaKtD8rTDluai3lRyUuF8ZT4JNMoGjgAxJQEvtpcq79uc6jEdfXFB4%2BpVI8EajRuphY5pXyHR37Fvvj%2BJAZDQg7qwR9KPnZpHOXN6%2FrA4cI1YlVV%2B3aWOQ6JQaOilvZSYMKU0QMN3rsBw4WTIXF0PKT7TOWQ8U8SrgiALEeIGWdx3qztg2r6PrDsuxtGcHqaw4QjM8GEX7ZtC%2BoW0oAfhqGEheoG49kgZisWXOg0yzX%2FY4H1aeU2M%2BsAF0v82IZERQb6Yiqa%2FQ8uYpnVxkOh8iOWtsLbbK5njghZ3fmJaEJVCuGPUF4vNDukfMYJEE2OWHvvt1F7M01Md88dRqwuwbLf3FpX4YffL7UNqeF9aD4VwDfdDf8j0XHVqMjZHvLAfJzWuHLfalCIC%2FRAeMlErdsluRlvvj%2B3Ck%2FwVA6DChrsTJBjqkAWYqr6Jlwn%2BWOK9ME7g2Or15yjUwGtQEa1IZ5mZLqoqx4qlDfhsZPpjNxizej%2F5Ydn%2B%2FzBsgRC8Q9u%2F64Nc9LmEK6KHjz9fpOO3nQaXnCcGjlY5L8%2FKfYug%2F5XMzcVGw9rW6YOtyHkX1pCV%2FPyCwf0wD5nfSzrSFD6B2S1wB3Jbc39e%2Fu6YxaoPxxvb02JoRi%2BjKvnxaJSiPfqvdBDlCPGYc3Odq&X-Amz-Signature=ed6893c451cb299122d8d8ba65ad37f270151286389efbfbcda2223817f41c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

