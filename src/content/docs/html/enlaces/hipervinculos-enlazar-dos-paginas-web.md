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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIZZVLRE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe5zfpnzzpxHo4bcfgDl7F63oK%2F7RHIclKNNBZPhO7ZAiB8mFVGUfv73ehusvJT5iDTAmZSV0gU%2BOVhzI3Ty4HXgCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMhhbAkN98%2FFxwOzRWKtwDakGRJHM8tmh5Go84dB2ftdhTVGlCzyZLT%2Fo9L4BeBi9xKjS2ZVQSPpzW2paGwLiB18EBlZ0%2BEE81lDCZVfBTIhHce7SMD2mjTOFv0SJ7d6PcY4o%2BsVwUoNh7CEy72aOieR8WGV5m8djdj8Ogq2HMa%2F0GmxAQxwWDiCTuV33hr30YCVDyLe0xP0kttR8v8v476hwS%2FRbdN5HydNFsFknSopkkxb4OJYRitdPpmyrYye6QsNWgmHr%2FmFHah7I21MAY5bNB5hJ4ICJ0ns0lou%2F%2F5ssLZHsr8kWyKqhlE%2BYcleN1J3rCrExB%2BqWSFo%2FQMH4EuY1ydtbboOkfwuZGCyGjNt2hctWoHy1XH44%2FmgdXL0YgQfHGuOB9K11Epij56hXhu4DY%2FqechGsYqFXi7h7ROlDfRb2fr2MSD07VLBSd%2Bs3DZsTBcwPjrV7BRm6yxuZid4Jy%2B8lqc861kRQvQZyRR46r8xXsIpN24dKTkKQPTvwWP4iG0C0T%2B%2FngnqlpaeWrFtNVxb9swTbYk1i5H0fda4sYI9ffmyoY4kEEAFWE1VtDSnu57g3I5veIGjh4ZYiaPg%2FexxJtHbzTSzstpB4nqJYWxPpbHiBNBazDUeZOS%2Br7SEn70CMcCb71gwEw6sbKyQY6pgHDA2XUG1sdJA8vfTyjgRde31l7dLNY9oh9xY5kzhh%2FsyxZGVF5LiXZFvOaqRqAGptWXopMkomMX4cOOGN3EFWNQO7iUQ%2F%2BbAnqr%2BnDL4s%2BM2Dkd02HPga3Br80Bhqgbu6hFTEBQEKAH4U4t1XWHfjLyxCfK8TYca4dAskQ0x1UFAWtNFWtPOXNKhaQ1yuGmYVqvKSnIlROBBfcK48uScQKiepuatxt&X-Amz-Signature=1f2c3fd506d527856cefd0b491ef5049ab609fbcb6e35da9bef755c536832cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

