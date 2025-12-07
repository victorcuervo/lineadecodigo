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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRWT5O2R%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI%2Fz5yAuG1v4nqCgInC%2Fj8kw89%2BAE04j%2BPAhIfxsi1XAIgfF97%2Bv%2F8oNYN2N2nxZYWvlV%2BuXZj956mjrpoBImItY4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIfcyxce1qpAWYjPSrcA%2FuZo99cR7EJ2EBGohdXee7gvr0bH4qIcggzjjFVSxD%2BEppqok2f4T3ql%2Fhr98DBpLl9bpdfUxHhL0j71dOyUGdrqvsrQN4P0Uu3IHKifJmUTzIC4oujsHOmBJxQRoUdB3OjiJzBuhdD9j%2B6NZkD50JM%2BG8wlKBPvjtu%2FXP%2FKfHxeFo%2B4ubQoU%2FFFAM76f93GOKzsiigCyo1ymPvp1MCaet%2BNm9pOjrfrXJ0v%2BRTfJZCww5I1fkhQTJ5lNbpPAy3aJpeIrdblOzBzlr%2FBrdQxXRGb%2BTLwSVdt1LdTvNUlVUEL4vwuQsUSAb3Q4q7%2FdPCWoSnssWw%2BqG8J4rz7TmfoYJ3MG2FGkIR1%2FEIev6rV5ryL0oUIn9nQ1MTEdEDN4m2xoL3irPDl6dk1%2FnY3Yk5TCzGJdJBu8NplqzdZNdcDYvYh0ujBcgFw5aM8imY5r4KIMzuiaTGQkTWEcgTfMnuFPSPCppoHB%2BUGzYGMzBCLEeYuLhJx8pb4SYAivATIE0%2BF%2FWYVdsLQlVzxwlLzGRfXEg8oaNUKIJK1R1Lt2u1sSbIFZLJer4vYKNvbTCAWEOcDIcI%2BTHf6Es0FTMidfZvK8%2FZNsq9N%2F1lEGb9kSiOl9VZ7NkBdRIs0yepTDRZMPia1MkGOqUBOZABTMQswShHGR48pfkO%2FszYXMVy1SZQYeiKqvRg%2F6O%2Fp%2Btyqbdk3reYrRqYryQN4%2FR0ZJnqO7TsKRDC%2F5uDZAOn1zxELFv0wdrfO1%2BjfMCOL%2BBZguWawBnAcCwbC%2Fq%2FWXZLPYHg6Ovoen9lQyC9PYXilgjBD2WO4%2F3OUaeopXQxy4LHPYwKvxB1aJsdlNCE2vmU5yIpVeY5V%2FD8rj96UcxtCX1W&X-Amz-Signature=bc3251dd99623c1e9ce48d98dd2f36711cf6d279c8161d12c50ea7cdfe9bce1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

