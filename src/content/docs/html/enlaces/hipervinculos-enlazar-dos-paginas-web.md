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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQPQQ4WW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgt6LwowhkIniO%2B%2FyYT1rzOzX3bfajFjJjpvzXPZn12AiB74BQXB94rlqsVLv%2FM8y9GxFKx7j3YNNYPoLjnff0qkSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMXEPJXFOoV5LI6dMuKtwDAVJgyyXhdr3KrFPxCUB9DwL25U%2BvbdcczteI7s3PYhQav0u15Ypv7GzZJAzCOaSuK6IU1p5evTEFcInIppkrff2pd4lB2aXkFHeimUfuo2mXeAia43MSoElMxpL9nDU7j5BMhH22H6VhlfHVrcg%2FJPX47oPIjQIJQ7aS2ni%2Bj98N6bbSpSbRNmIcsXMd%2BBL5N2%2BAZJeC%2FPK4X3hJ%2BXJf%2BlkDLf7CvaNantfvXHHJUNMAyJocKcB1KIc5yl0G3kz5x5jRysyJ2FIDQxQpTG3RWuJ0wS0k7rAB1ux4fGk%2B%2BYfB0ryZf3kO1jGebud6FjQhDRbfqd8N4VGSqMapBWd9jdDBKueAviN1XBwiHjIHwBRnMBZjDhdGfV%2BijP%2Fj%2BTXgwPYuL63heGJbgaT%2FFLY%2FmdbjVx4%2BsuvcYbqNywRTVJnhbtHUrLTbk6rJPvDFSpxf1rxkTpvJVAQ3vL9%2F8HmAjqHdiTRQY%2BbRWsiVhbfwOEXRgUmrFp9ZXVHYM0%2FMLke1J%2Bsk%2FWnbaEx0kuZFM8USaYLgIrSc5GnAhiHkPYIlKaSBHeTmKQyxZF2YE%2B4HK18j3Gp10pxVGdmPGvvAMWLWgXBAPX5lYHO4yH8rul3aJjnZHN3SBM1q%2BYLW6XgwlozIyQY6pgGsiCwo%2BGNYdXF9fjZPQM5ic4zihobLajV0p%2BZZKKsPHg8iu%2BRV6jmiMeFZJ5w5uM%2BYOFoVXCw11YAdoSXr5WBccQcCIsnR2avIuRBwmqZO2swaiE0lItYO%2Bhc0C66xD2NbjdMwGnbaQ7Y2JCW8Rc6x2mGewVWA3ynbniFvXuhCOJXqe8qGXZbU2tYDHiFKKrLp5Z%2B2CiB9od%2Bxqo%2Fmi%2BWvLOhDbqH2&X-Amz-Signature=816e9e466174cdccbb3c43ff4c32bb756ec2f81311db94c558aaa64d912c800e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

