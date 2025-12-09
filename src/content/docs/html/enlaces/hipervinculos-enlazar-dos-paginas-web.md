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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFMGBJL6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T233054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrx6QCsGF7AsioMgcKpa3cdk9%2FA7Yv44DiBI8vYMb5OgIhANHp%2FMuNO4WlkTRwIh%2B4Q6MRmv7QKOLdc8MXKMxbvALDKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMVx9%2BW8b22WCaa4Mq3AMaHYbUW6v5uFgnZxrbLGqRwJFXfe%2Bq%2B9vsI1NXzAKO0EtUCkzoTYOKJPIRmvuMpG8WA4%2F3kpLMrXZYWAwBzywByNP8VmpB75JviMCzMgxfkWkkKOZYLW3mvS8Yehm32vPW%2FL2tuA4sNrTMxvK0V2%2B5RlMekh0zW0OZn%2FZy09Sf6TZPgSjnjkyoZFYLQIbOjIVRBvz34GDXsvZha6Rl8Mn2jmw2dKWgYEjW7jaInIpJJFFNuXS%2FftvHgIJeM69fOno7zVmV06ZxtsKD0INNgs89aMw%2Fb6v37TQHBZNsdhXAT%2F0yf8%2F48RNyYwe9iVcqMw2TL3fCEntPfhprNyR%2BX1avi6XsqAYu0AYxsKDwjoGNTEdy0V5cGRqdwzDy5qz3bQlRU%2BqVw9rmZHbOQ5cVLe1L8Ah%2BUTnWTa93l4EvG5baqMrhNsyuQRnZRHcc9%2F%2FvhvLXRQk2t6dsYt364xoH1Qf90qDGzbrWb%2Brhrnll8i1cKI6qlYtnho%2FNwlyz3ENMfX8ABnJd4zlMoIierZAcOYSZRoV9cDm8ezlvTIyJw6q9XMJJfaptiU316%2FMAb0USTf4XqpVt7dF0ttwFogamNQrrZCroTYQEhFgRHUO4uxzH8Qj8ppgIy4az5%2BgKbDCKw%2BLJBjqkAXpvV5tnGxYsVx096j9S51Kj2XqzzViYq9SXWO%2F95VzmbsbHVw0U24hi2qrhPzNnCVfN2qhx0b9CUxqtkIWv5xdzAj%2Fv4ugnFJ2rPjSZIHd%2BQ88QUPeHClHJT50Svv2dhYDz%2FdqgeQjaUpmXnJHShJIBka73H5lomzM9fNPBId9pLg4XCaEbHnPaU3msD%2BhX6DkfNeugBqY1mA2lvndbJkTSTodd&X-Amz-Signature=af5277f044be120409db6572ead8515d41f18bfa02f1a175c0a8af6e20947cf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

