---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNWHSGY5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCS9SrIaodQdZ9gBANfIM%2B7vwcFnrwiQwohPNr%2BRGIi3QIhAIApRUbozJ0t7gFmUiaBIGS2GCR0LNv%2Fxu5V4VpOFEjuKv8DCEgQABoMNjM3NDIzMTgzODA1IgypyAwuu7HJ%2BCFl%2FrQq3AM7wngb%2BHRGd9ZACoAfYRxryXYgF3Q89mFZCHfTUkbs%2Bd1dRIjoMcUXXJsnxeM5H4frTdxmnKHp3OkTRQmNmitNeD89uggmCV4L1EWdgwhez326ws5g3z1eBipCBImKmVvg7iRaZMeQyRCShgIsUx%2BFBb%2Bju8o98HVVgFBPZCIuzgnoJpzj1DMzKh%2BYfDDFQY%2BTWwwaUUPC%2FTRyNnHsOT%2F2Q%2F1O8ynC7yALLrpJxSdrJohoGTvO7IGFndR514xGewMAtn7dyKUjUXZPtOPB7YAKdwP%2FOm58e1o93MgalnY0UKnCzUHS0oBaT1%2FCeCv2icqKR77CM1K7kF92s1%2BHc2G3S6MUpXzNVVA5ChaiLeae3QWJMYOVl6ND0Qt3F0i0%2BfSyqwG7eEgJU8JEC%2B9gvGNjigFYyQBwWEoxLWYysmvO%2F9IXaV8%2FowuSB8EPoMJePbW9CZwncybDq5aIBXaZ9g0w9BJagDvB2TN8YIvuGX4WwaqbQOPCquC6VzzDhYRISU%2BI14761MD%2B6AuVJjpbs1L3RYKIelNiEr9BZVmrj49n6Qf7nHvvmN0kmJKVpzWJOnmt2%2BEl4jbqH7GiFMuPBeKF5PDLBcPZYVHvXOTcIlI89MxHD8MCZN1Cmpyo2jD2vsbJBjqkATeAD3nwSO02FZpTR8g%2BUsg4Ea%2BF8%2B4HwPBlJmv5c5DK3pxXcssFgJUhT8%2Fc%2BztXWmObmgi%2BDFMEu0GnA6Uq5yvCOZ2vt3HPI6bZzKiwqDparL3TOS1SZloI8Vp4cAyCOwLgR0wdiNJ0EFrBySEpeWmhbAObQJz4gjoyQFbM3r9fheuIgs7M0Cs1neh1DfzrHkNlszLrO6gj9yIeXJuqTjjjJIvS&X-Amz-Signature=d77772d38625dea7001c22ab4bfc7bc235042142af31908015ab2b76969ff2ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

