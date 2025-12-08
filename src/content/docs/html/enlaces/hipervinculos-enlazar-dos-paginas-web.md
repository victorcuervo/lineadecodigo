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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCMYA5KC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSYdGWU4XCxe1mAmNt7YxbU0JMRL476tQqM%2FeRqFUGwwIgcJfzWYY91KAcfgIrC8vJWH3UNKqoTNJikV9onBWBe3EqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5NwUG45qe3XQOLBircA%2F65gygPgjaQOTHqyFzMnaUUHpYqkj4k5Yg5T%2FR2gVv7hi4hGJAd%2B5i5jqzAnj3XRPo0GkwxuH%2FFL4NOm%2FDc4i5FMkaatEK0LA0oLH1ZQGRuO1b3I%2FvBohSc6G%2BGt9YwIqwQUcfjN7gqljqt4Cl8HT2Pd6Bkk92jSShO5xzqurbbKlCxNtF6UM4SXOd5aGDz48mkdAaGjufXUJJv%2BngsX%2B5t1UJ39PzWoxvgt%2BqXoGu5xM0Gv5tnvyvcjez3Gz8%2FUBRaS02klnP%2B6mB%2BoAda26zI3UPytlp1NJR71qrvSLBEK4Q6f5GzWUYbRcpqI2q1xXDtEAfwXDjU5WlXKV2lzKZzxqg6qncF0izhPba%2BFVEV2SxspIfVMIoWPfxe8cszaY0xfwCx4IdsFIc8Ea0z6lD0%2BB9uFR3Uxi13AhPpatDELXcTBITvHBtsIqBhhqR39UoMxeZwDFWfvUVTDF0cIfeOfLyO3tnIMLmtokVh19VjB6FbkPqVXEzQMXkd0uY396ZVia43qGwnvN4SW0bXSXsGmhQVldmy9Hhz1Kou9kBv9oSc8QzBdaqOwHwtxGhsOVBJdOmgYijhcvX48zCEoD2bFvKJ2zKg%2FKdwuTO28kjlQQO2gE3CizDPL4VTMMfB28kGOqUB%2FjRnG76wiUhwuHU1Pl81VxvGaGL%2F3yt0jOM9H3i8vr2t5umGKHE%2F44Ep8qMOMQPSooIFbiOD7uh%2B%2FTBrcmefQmq0EUMSmnG4URSGZMj98DhDn%2FnqdAblQjvMT1tmeBDl%2B5%2BuhD0I9ex9XCwYmrmZVanpMtP4SJuJItgeExgVrLAbXMUF9jYMHv3pIP%2BrwOtZb0Ml4j7NgyqDFuiSrO3VH0Pu1Pux&X-Amz-Signature=aac300f3e3ae5b4c5655cd914d3a57a661bf3ee7466040097bdf0853372c80ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

