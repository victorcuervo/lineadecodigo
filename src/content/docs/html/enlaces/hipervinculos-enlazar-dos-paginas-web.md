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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW6MI3AX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaRLmF1Pf1PRXpxenq2d6rLU860zS%2BcJ4jW5EG8hgW4AiAKi2HJe1qqvewJPOuj%2F81I%2F6c2%2F%2BMBbDrA%2BhTLsjIQQyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK6IMS%2FeUWPcUHlLBKtwDd2WKRtkE5%2FkjRhh%2BAQqjd%2FnpAcDyhP6hKVeBs6lBVdG4GHTB2NfFpqr%2FPQIPh6Mo%2FgknEJOXKgvUU1lhkI0Ju4LhSUOjzNIN0vaK4EaD5IkuvqjTz%2BB%2F7pKj1aJGpI%2B7h%2B%2BtF9cMeeEF1fG9bxsLaWQF2rSS5Jm4UFJxETmw%2FiorXjOdZ08LsB%2BeovQrFE1fDNM44y04OOkQoEauwYMEp3LRs3ljKLtZrkZepi%2B8xRmMnNeggvrRvqtwFqhxOToMeQ4ELiWtnVeuiA1yzF4Yz6R%2FtqWZIUBa7C3E4zB2M8sFBeAfZes8n%2F752C9uuqJU3DT0S3MjnhJP1QTkikcAci6LKlSRw%2Fq%2Bu%2FyNCuZlx1Qnr7Tg5AwGLwygHoWhRqZ766qB2z4viBAcp9HEqSR49XT6HvDK9X2aKlV3urzBCKFmuMX9Olj2qt6G49aDPY3Fcn19hHCdwvyQQ3L50YblitIwMP5Qo2L72KEyVKoovRmL7wsmTPbwXeceB2vU7K%2FXY8icxx0nVzUQkvmJtk4VuXi48X8dJx3NKXL5Ka%2BrsQFxHtJCnZk7HgC8ZlW%2BSanuQOXbr7phsF%2FsQJiQS0xyrajMEPVp9YJy9fZaNYr5ubvGkd6ywgHQD1TYXvsw%2FsLdyQY6pgEsjt5Lu63kyIsDr%2BsP9tuMUruaULkIetfp71pvJiF8o5lMZiySOhHLYXpbngj4NBRcrjjmQJY%2FFSB8rTgSK7ymsjVc8MJICFqJwJWsXwap6QfGD7OYXWZJeeLcdX32i%2FYBXtFnsXJM8fu6OHk93P32RVDG%2BoUPAQglxlokwM4wwC1O6KTtY6YaCey2JAhe8GSQEIhwsRrNEWoU06QQfQvB9UxSp19N&X-Amz-Signature=a3a29226df22a24a55cd856fe52d7850b41d6166b46309524559971a8f451423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

