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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKUGSWO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCezGBW7zFi%2BfTHmXmOL1hWT7o%2FjRGtsMZ%2FiypRS0qZKgIgDkLzuZqFjwLguuswFCiJLBaFJwOkQ4g%2BDs6oo9OL6J0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfCl6S2dajsaZ3syyrcA1chm1fAoh3lXX9rPhWq70V0ccqxpfOzODImX%2FmDxh1OsUeTo7O3SmystPSw70rjpiUPkdrkJfCC1LgLDnYGFQ3tnBO1kdgXTaCg0zFKbdLFAgccValE%2FG126tUQkjhwTCu1Iaz%2BpunaTSb1agcqdXG4lwSD3fvxcZKepAZO91kEn6zXXsj%2FyZ8JKaDN1go5kz1i%2BmzXhbyYOmL%2BV99U1dqzvT5Vu0Ge5SsvL6QtIZ1YV16NZYLLLHeINmXVnhtfiRwhwYCDsvGVuHB0A%2B7xsl85h6dgV61h2beEw0sU9Ft0Iw0Q%2F79vlPebz%2BYuMCH2rONJTYO152rir6thdDXFGGmRFERbltIby2FvslpYrXHRwDn5nxTPsjLPQ%2F76TjItc0gnWWWbAgV8Z8Q462R2neJhR5110YFY%2B5%2BnFuZ6N85dIVag9tOpQ2Vstob506wyrJnNanaD3yiz5ChovW6zDVBNyMA7SlkozG6b7VpSKq9eLvvsE15%2FV6wGZEZ8nsb3A4GKLeIT6reI3IO5SUJzvF1wXOCwLf0TuPi5gqL1tvKxUNl8bRy0n68%2BqMQn%2BH2oD05n9s7Sya4BLjtY%2BiSyek9ktYU8cZBpXxRjGBdag9SPH3fieJMgPChln2USMIDd3MkGOqUBfn8k6eXuagbbQGgwOh5%2FXbF5JD5pnRr9WvVXPqywGJrojsBn2hNyFkvIIE3I9ZvpIXtpadjq8bTLNKRSlb%2FqFSYg8NDKrsEI1V1170KIhPDu5XXlTOBiJKTUp9sGbyoiYm%2FBh5Sp%2F9DJ73DWNrfwuMofJ9VM8ofEdrKid39r3HrjB5%2BidNVex%2FaQzyPT0Bn4aKmBr%2B0wsKYOa%2FBWRIXSPg%2BMpESt&X-Amz-Signature=16fecf31342c09b37d7ce603de18231c19a29a635ee54dc322781d92cdd44967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

