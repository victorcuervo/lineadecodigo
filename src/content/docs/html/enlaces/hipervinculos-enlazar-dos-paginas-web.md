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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKKNLDHA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2Fb8grzpU7%2BmHrx9ktd4uKjvNUwy21a%2FfhaO5U8%2FOnOAiEAtVjchDh7Jhe8zyMipI1NJarcEZ%2BjDgaTKYb1bYyo7KkqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyNVA799e4lgfQaOircA0RADYYzR8wIMnshobmMHX3Bxg4JSbL1PEsmnEOu8d42plZsTd1lquVDqmB5XZN7B4YkmcvpsdMdy0Wk9bUm9k%2B4q4nJwltSR%2Fdg9jANq9b2sfhzwpL0WYdNia%2BncLKRd7XJP3zs0gmiAJavdRwLpxHvM7eLhvEfoka%2FSA1eZ1LlZXeDTywJb%2B3W5%2BaZH5kwe1Mn1uPttJcY%2F03KNmtwT8nWlzppvVi6HLSILW3muyFLHnBgwqGC%2FhkzP33rA2AnFue9NsmkGdvbNGUhoGVQXOKdkjgpkIpwC9%2F10EZjse9IjwL2vRaOlztd5mKgDOZVSsc49ljtZwlcn4%2Bvey4qAgrq0651BBIpuDEnTXA%2FTdY%2FJXuhRqywht1PFaNMeEvaq%2BeKUXWlsU%2F9e9QtkBKita6mavn0mcysJca6e%2FYW%2F0ah5S9aBL%2BelWIxmOvoZuYESHQabKmvSaOeEgL%2BdFu8qiHXzoAlK7A4WG2dW3DK3Qokp7%2F%2F3drJQtuKa%2Fx03H9uJQIPWDIGzGLWy1S5zGFCEpPdc8Ugh3Mn%2Bs9hBf5CrgX%2FaCdTca7%2BdMxkf0wKZb%2FWZp6DYg5t5%2FNBpRcdh6RXh7ZgD2j3DmC%2FH9BWZxQxnC188EcZT2CUWzcj%2B%2FHqMJOi3ckGOqUB0lBGBoE8SjTOChW4Km%2BNWIxjpUpNELcz179jpbCZWHakr3KTW3Qx0gTxaC7BPsWv%2FsiqkP%2FuQQ5vRHN%2FbFgrApYHVJ2kq3Sz%2BnxM8IXQ4F4ech1Xba%2FsgHTmQJhaM2mc34B88SzNspyXhp1BYolWbCAQnJoIWv2%2FTeaoXimrBGZISnX6jW%2FhIlUkaF0HdDFt0VBQ%2FIvxq2NlkXstBnB3y1W6yUV9&X-Amz-Signature=4fd1e95a6a304c93e86f693464f192d903f1ea69fe6ee54666789c261405e841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

