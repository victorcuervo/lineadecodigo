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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3T3EADG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmj%2FjPX8Y5bit6VmKo13m9jezRhXIA5RrY2tHkin6%2BsgIhAI%2BZb8cWikYc8bpYtWWGwxfA2wVKJUwYcSxUymZXJ1j2KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrkpE9i1bV4EDiU0cq3ANsD9KEC4bFDA61tnWLQLADRi0JTesv61H8Tfkri8kY%2FQu2ELjHBjuvJ5usc5FC6teKHbCgjKUoBWpT8fODAQ0U%2BLlVwojzqb47ReEXKceEwDvsO%2FBrW5%2FuJ4%2BKVNmT2DNhYPVL07pXZIC7MoJzHy8X6TfczrPfMhfSeCV3otG%2Fxc6wDzz9yBGAjT8Lm4gRberHQc9NOmQknJJ1ua7bUHLRtrBbvl1e4tsKihE%2B1qRmHIe%2FdY1WO9hI7Ap3AAz4Zujbh5jdO6GSqRMJ4caCSFu24iJK%2BiKBZA%2B3OiFypfSuSRV0cIpnMCRABoNJjjYwgzXFuArYYa0Duk8i7QJM6YkuS34SbnDzKPaZTNYqp0rTObyho9pc9Q7kIMaNI03v%2BEhqvmlnme3ymvUfaaanskizVRzFewHL7HtSDEjZavuai8tiyMKO9wS8rQQXkyfxen0Xe6aXIjibStg9otDGlWxCBMHZtyNOdyQiJWiVlr3rz5lW%2Be6cGEeXXWESMnhHMlRz%2BfVp8PcmfYUDBsi1bA6OXe%2FUBzcE0nvVX3WkyzdvYJQr3nMHutmcCM3i0ug1ccx0IiuZnpejB1RgzpwakLVh6jrWPQR8u7%2FBND13ttRttQcL1f2X2oJcZ9B0gzD1o9TJBjqkAY5JCAu0G1myo0Nl7R19LVSXaYsY7Fq4FrEUMj2gvQc9ZJJuXt0yQ9PtOHOIZWlUJE07usT4yjmIr2A9AFRLWT8kYusiC3Q27vtUnP4pfz9ey01Azcy%2FWBOnGeOPt9Qs5Sj0owktBVtbdXMXZowHUP%2B9Tk93XXz9DEStKAWcovh4bIckUh5K78MVyW3u7%2BbOiwYOGLNdExVV5sX87WFAMsbRsZfC&X-Amz-Signature=848a1113d01e20a184436851d5dd93fa3dc13c258a52f83740674d889097816f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

