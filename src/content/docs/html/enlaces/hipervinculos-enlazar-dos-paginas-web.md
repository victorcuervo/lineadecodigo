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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OVDXFCP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0BUgoxgOkRt%2FOdPC2g1o%2BgxU7wq2JviQjSQax8rW5IAiBtBL8x2%2FaZk1RxfSghlrukMAvDakk5XkAV6jkASdkVUyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMrLTHZTFQvXw8RI5mKtwDNGtppB98OdzhC6MEHVb7JigjtkhorhKglFcxZmWLPhtgfG2mCN4fbjjq%2F5WX%2BVV3qWxsopM%2B325nSmOksOq8LoAX45uz11JfVHvUuxGQbQKjOql4tOKSdFR82lj91CPGZ3H%2Fgi4B4JWPwYL99zggKnM51ppzO%2FjLxJKZYec22WS%2F1J7qECFsEGAb%2BTMO%2BY9XEOIZ7bdu%2BFOCdKTT5F9zP2jISYMcKjQLdLq2OG3rcSYVuqoVJkIMciV61fX2oq13ZBeyDJX4cxyvpS1IIRaul8Z7gObZIfaRFSqMyq9IY4jNSmlLA4LueUaet1EXGqlgNjC6ZP%2Ff6HtBo%2BlVcqoHxHYxyOOrngwfpQ0DyamqE%2FneglZfZaVv28QfqtBYSK97xVSyI1wY8w5%2FBKedj2SSvwFEJa0VZvasrC%2FQX5kSYgQ9KdqFglfASqNibIT6IRS63%2FWy%2Fwr33KX2%2B5VTYcjluju2zg4BFNrgKj0wHRLY9N%2FTwwzkuf08TQ0Mshru0ejOFjO5RP38j%2BC6%2F4MQePlDnmGRhoL6RXn3jTlwD7z08WCsZw6pt82xrweS0iZkb8zMZmiR04HTlA7%2FKaHbeud04L8MZYPUZ812I3xs7QQI0xvkLdCVsI0WsnPauB8wxKbJyQY6pgEbN5gSjaP14rPVIJjTrn7yvJ5RL0OsTNp9VFCAv0PEUqplO8Hq75vE%2Fe7%2BeVBu2JzS%2ByhIlRFlGiX7ElGdpBZhIbrRFxVRcYPtXe5spZxJ4L%2FU61PSiiNJkJI0mzX60odgAoUT7x1RQyw%2FThtNPEevHBRwg1%2F63x6lualc%2Bq%2Fn0iWEU0iKra%2BlCgapedWEbLn07ipX2KYV639G%2B%2Br2EACOB8FncnnN&X-Amz-Signature=e4aff11824249bc9072ec48d34558237b5273568fcfff5f4598750802cfd228c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

