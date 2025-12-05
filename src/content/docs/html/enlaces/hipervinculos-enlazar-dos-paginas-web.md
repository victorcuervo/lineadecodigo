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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V56QC2ON%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpHpT7gl7BBe59Qhndbtwab7ndsYyIxlv8KY5kyaFHhwIhANplygt0SNA2o8i0YvPCrqHN4jP%2FBhwcSA0HeZRsmXVKKv8DCF4QABoMNjM3NDIzMTgzODA1IgxqlcQIFEc0JjWppJMq3ANshZOiLRCdf%2Fb%2F3vedKxw%2FeFw55gPTVsVxjJd5NGD8ZEiwmTMUcalr1S5KjBv0IjPrsp8w%2F0Nsq0YDiMz3hgrThPh%2F8y64lmnd%2F8xM6uGgBXLf9Jp7HVz5ncli2%2BS2POAGZjvMY%2BUdcFEDv4EGjnMSFpgPWvGJsaNjG3X5LD9NKAed1DiwWi28F8NTELOwr5fFZ%2FtdB%2FkBVu94a0z6ByjVo7gjHYoZkhRPbWm5Y9myWE0imdy9a0bInMeHBW%2BsCIZzJi3zt7NqLXs%2FmUHH7BYN%2B%2BCAySVOt020bjUoVd0tOdXVXpQzsOpx2UqkyIEkSa71KHtvahuKhlr3R0C3dtfODahT8DGUlfCwgXj3n81At%2Fbq7W8wwkv%2B7A36xVSRmksE1MawghZgprzsdlMLDiqm2TTXHIS5SH%2FosOORUgmQ55bqnyQRJAU7n3WDEs2XXirVuf0ChfmsJ7pFk4MsgFAWIu%2FZJpJyuRH2zQtZGBsVYnyirplLFiEOasyocaVA3%2B3%2BUyrB5reUpkgigEYMbI%2FmuFTeiCJCiPCTbYeaYV9X1wLI8rENWGMDOHE7tVGt%2B0jZmnAbv3cGBiNOUHZY9qFk1UjMI5U2N9KZjvvUWK0e3c6l%2Br8DhcEoAvF9IjClscvJBjqkAfFqXOtr0geuEpC1W4n3eriItvqfeF4h3GW47MMARKk%2Bs28oxry0wC08GFEP7CI%2BZE5SuPoL22MD%2FOU%2BntMhU90aNq5D4ESDQwArALt6LSkqolqNxtyF00yFa1EEGTHn3oE339Xe7Jwfozx2thoP0xDVKTT8QXXPJmn8thjkQuaXTWK2E%2FhPpJTkFgYgZLPhd9f9X8ptxJA2ulhm3dxGu%2FDAk7yk&X-Amz-Signature=506b2a167ab2b5ab42bd255a1da493b32ec8763669d1f539d919ae12ccb4071c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

