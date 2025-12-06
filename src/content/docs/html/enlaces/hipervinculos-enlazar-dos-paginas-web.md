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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DOTQXGY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvEiV6JS1KiBTzRcuzE5ZJSgenIQXU%2FVaSQ9b6TSbx6AiAIOZ7%2FIQp8fmHLNB47diVi%2B9udzOJ3%2FC4gdf0d3fLFsyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMgTRiPZ5cOPquno5AKtwDss4CAigCEOOGZLdtAaiSH54Ek2sSS4odFHdZaHH3UBpceBepzuGjduLB2G4NfSMiHB1BM1CznZNwF45UoWWSmhDWmPTVYx0uUBaQH9Ay8rk3j8W%2B6o2%2Fmd7KTShkL9yRpFU%2FjzQLSBWZkFvuqmffxkwoKpX2wa%2Bar4aYKcau78SftvL%2F8BngXxkWNiIKdqLAhJTl5iqv6QYur%2B%2BDlMgCyC1Z83dr%2FOOwKzzQP6SnxJstdoM9C%2BU3%2Fbygf9AqnCQLipSfYfnO6Jn3wzeRoJxXD6s6faMu0t6IvDA58uyKiZ0U09ocdk3i2BCeUh55A8U%2BxhYrCExIhpBqUSveio8XuReOhbYXMa%2BAss6MclXXMpUh8%2FXhNLpwMOV7aLmE5rmx61X%2FbIRvzIbkHTe2iRHrFTIS6zWkG%2BZgJs5724mETHj3v1t%2FPs5oTHZ%2B1%2Ff8I8roTPx2%2BSGzmQduJZinb9zUsBLu3BINA8vtZDDG5x5sBQNHV%2BXO%2BoUujzt0TnxkK4A0crOdES3g5YMhtD2BKW7OLvNUbvwAzz49A9HEp9s%2Fz0guIqqmcbYSE1fvFUEZEf9g1mIO%2BYIPYOOmcGeWDqfrnnBw8W%2Bz2hAT7PjvB9Kp7UFRjXgNMzWmWvdLnj8wibzPyQY6pgHYsq8wsHXNM3WYpM9qxl%2BBabMysCG9gsROvFfp0D4hZ7lnWdnS5PYS7eSil3jf53QAPG0w6TZdmTe6igwE2GjAqGlMg%2Bx%2B1c9Vzq4i06AHcqYZzQpNIUBTrSTLHI5LSyn8JrqEolkmhLZkh8kZVvKuPidR7mZ%2BeJXix%2B8OkdRiklAj4PKApcZ9XQJVokKBJKTbV48iLHh8aoxDm%2BSPwqkDugaKF0b2&X-Amz-Signature=69d594ee0bd59415cdf65387566bacd59271ab690857acab7395ff6dafb5bb98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

