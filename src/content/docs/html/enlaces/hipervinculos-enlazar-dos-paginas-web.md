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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFS33UN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpVOnI2tHJsLRVOGTZWuAUVzt400DWa34HOQX3Lcyy6AiBReZPc1EYI82r6R0PhdHjN4ghqrhgM17B50Omvg7jkfiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZOlk7qlP32x1%2BBukKtwDMbwzrx2530LxTXpbjHnsQRi2d8sTIhD9GDxLcbFqMuQztdPzMwIkcXHkMHkLI2so7rfOwRDtr0bk7LLfG73wYbLjOw2e72WF2k7TpP%2FwdPcuuNRHbGHxQFdyOZMf53Kr7Wm%2FCUyYrAVcg10UvshA4hXol7KUok%2FUzcobcbdLisjcEkKt6gekhhsCwNIiPZhr0pe7Nz85QnC7NGixX7lhmL1lrm1bBlQEaJwDIIPxvMWvhvLPWN94n5rsLuEDzlh9bsBzXhRUrVhSsch5mrnZeANZ%2ByQmZyEGpPrfGqBqGRxJpZOXEuPNKv7VqjmZBACiYeVtrfhS3uoLDR%2BbMyDU0HJBrepPRc%2FB22HzrEdzjSgVZhxh5H6dB%2BFpqOjHvgHrI8%2BlQvRGD%2FqlUIyRgfJA6h6WcPx70SChxX2Q%2FFC1whJ3f3Y1g3cPY9kEuu%2FucEaaYWxIf91hp%2B46HCruQKHnGRCfBrGfIISvSsv3%2FCtY%2F5ovJLKBxAckiQaljrcrrgUzvUXGYDA8pbLulBJtxXuE1G6ZUovKWGrprbiZjjobNJAfqezAOtB8Vo2hmBjZU6JdeI%2Bi80tYmKUlXZZzwANxTWiB0GXBSg7OoQjIJzZ%2FgQ%2F6i%2BuvQQo4bkEXAjQwhqLdyQY6pgF%2B9LDXg2C8KhUBCxFpto%2FimIvDM%2FtH7zF5WzOSttUcnCw3%2FB6VSJohik64zUQZYlZAI3mcT14gyeQd%2FUD6o3AiVOfSw5tc4oq7CpwGpYXkAycKsArwfOVP4Re4db9HrZPyVsPlfWpNrKepkErowu6PgEYQFFQ0CZMvg6BYh5USWfJQKmZAYlgl%2F5baoYg2p%2BHEwv3sxzrNkEk6SqLuyP%2FwHRj2EKT%2F&X-Amz-Signature=eaa0a891320efd81041e93e4712c6263c06f8bd6e99acbd601a3b803254c6518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

