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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIKE25VK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyJHjGWxtYNruf%2FtWWWfaYZtZE94encTENto0gCjkwewIgRIYCY8a3p92ZDOcqygcNA87hWotK5pXVo5tsf1h2I6kqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6Wap7tTf6VxysDXircAzqdO3cCYWXKsJROD%2B9Q1Vp%2BE37vAVu9Lc2yEXAjKrbELY%2BzBZP1AkXyqr2hD83hbg%2F4kBnt9VpNWwMzsvbwr%2BuvxlZNr1I5s%2F%2FsmMpEgx3LmoIWy2ioQMzlXbVDuJLAuLo8rEKkTIv7nl8pb%2BLro1aXOvQ0sdRN7fTmrPi9RLiWHjhPCu42AU58mTmjrZMSeqI8lwGbPkUsflSjROTY81CnQXNmL8yotJHBP6j8cBHw7uRzEdiLEVLiS4O65ftstJH6DOkhp1AP0HR5oMqwYIXB2Ht6s9f304e0gc8UqQjAjIwGV%2FmrIBN4%2BVsyikF1HTzBdu94gbgBfBqBnfp3WUpehCV44uFuWao6PMZLfVcLWABdtfKsyzj4e2tizxcgbQn6awrokbUnGO5zSFNy8jJbucaz4ty49j6UuJPXe2sK9FO6oB5ZQGGGHDs9%2Bk78gdqJFKDNKyeWiZBJ24R8JyS2%2FozrEVj4ZPEDbrLGOyZQYZZrjXczLF2cghU9ThS4rvPqsb%2BS6qGlMZCg0N7fJJhfdlsNZZ8yi6RwNfS%2BlV7AuYankNyLHAb8ikwbLwRM4ZLw0oMaiUAxYyQUsi%2Fuxo3qXFWXJY1NlbLGCVTyGxpwfh0HzEyn5OhKJ20%2BML6a1ckGOqUBdS30DnYoJu24xAckCo5CjmdEpPAIB2hMwufr90SVOtlSGqAt8%2BVczeVKIG6K2XWv6n6dUyJ0Za7GZrcSDiz0uyJx6M7Ba4jE3wIv%2F8WpCc%2F0X2JpdVPefDpL3O97iuM7MGmSYImgXI7NQamE61lBilW7br864YH6xHrwmS2M3nBs5ZnLh0ohfwLkWZj6DuHhrbAJSo91KlFddgvnG7RlO307cTVP&X-Amz-Signature=d7070976468db99b84146eae3d523eb6b47101971f4e288275fc9b1443c6eaf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

