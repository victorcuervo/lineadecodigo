---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677ACFYNE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T160159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMRfNiLlCtF7W5FwogG9KZrQAZKJleRVchRlDUNz9vWQIgB2BV4TR7%2FA5jlKyut%2BzWl%2F9jwXPubQKeyuDW9DneT%2FkqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOt57848Hlgy8kdXyrcAz1vxiRVw1pvO8tKxNLRs%2B4xnmkI4OxirYqoom%2BvefwTklpkaOal%2BGYC7HRJhtgZjrADxFEdjxwsAbkTC4%2BJ3Xf02QsybOQJXLAKcrKW5zKLbhBKGS6BneGLNgafaAfJrEHAV8kCouMFc27kHJjh6cdQZ5h82dabPVyZHtCTWWWkSGuVBGoM86o2BS65KuUiJddrrRgbuqMQTSbxx4kBh1%2BOH1ivuPDXauYZfQLTbhVLJaLNf%2BbgtySGupf37gmzJ%2FB%2FV9THc%2Bl8OXbCp2Ohb5OUeDg9meMrJn5ZpHy93Dh%2FbrY7fChrFNKt8W2N3%2F1v2XAz54VGmoVl9ZyVesF0xW8VDFmUXQpCf9uKHRwRYSSGBmlo0HVNfIb4kE4itkx4ubSP6V%2F3tD9SBXRuackvzTLtAKR2hu9macFmz7cS%2B5MTTzuvExvgIqwYlBory2BlrNSTVsOV6P7l6OkYKqGHTruqfk5a9HLaDo0kCg0ta2dN3EQX%2FdAUaQLvWT%2BmTHXeJ5RWFNhd4yrMcC2Z3WgKfeoUyq187AtAUZy7BYi%2FEZ6SuZcRqtQBdfTIyCHrvec7Mq%2BawYFG7CliBRVf04o7YZx89CMoGrJaKeTsB21rUuFy9w%2BUjZDXMlAnylx9MJ7d4MkGOqUB13QveB2D5C4AlL3bF6NSsWhSdtFFqq7%2B3SAlmZ45qEpdxlP8c3I%2BAjcA8I3lOvuGjZSmUKn%2B%2FNYvbflior%2Fekx433PC97kZKHVKU6%2FSMJXzd4Zp%2F6f5%2FqJl6OMN4BkGQUGFJTJUrBPbEjEZyCDO%2FBvigjTgMTDaDnUEYuDcwLKCLYHcy77b7C5x0Feny%2F2e6%2BpMlndkCtUQVdAw0wHok5tVHl4My&X-Amz-Signature=9af6e480f5fe452c61e92806fb39809f9c8a0b52920b32bf7e4759912e6cd773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

