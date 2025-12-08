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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RZUARM5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T000338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApvNMDIbn%2B7FenjqNNvRrFePV0Wetp3zBG3%2FoRH9ur2AiEAknkx9hN84FonAbFxDTxr4iA2PBfMAFQ04G1gJWIWFyUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWFLhCVvg0kbvzoqCrcA1EUwtVnCOQi4dTWKJgOMU4PYr%2FozOcpI27jqVtDsysNnawzwe1QiTunbcs7nP4DAYm5sf1l3J%2Fty%2BK3aFmcn%2FaLeo90s3Yj5XqN3LOAsLVaJdudselQKO6jcaEcDuxRBe3Yo89q7VDb9CfUZPykmTU7Cj%2ByrUi%2FBkJi1v95snC7%2F1WJguZMbx2pSiBJ3NaYGoDCIra7zUD%2F2KBbcJssmw8DkoPigRcEvkkYXIY1%2B4T3zU1kx58fU6rCLvsAS20a4BqeUpYMlHGKMXfFdiymdjlkqtKvTki9cIqekRD1Vc5l9UknW0Ff33bKDokGAjrRdV56M69xBvfIqFJf15GYI86sV6fNBzC0EE9TxXpZ2WSjFOnvbhSkq%2Bayo4zevAH3HRemOtiivrv0T%2BJ1g8EfFHXXRgegs%2BsIdPz8xfdMaa8HVAspnxh32eR2x4HNDFTDgaX5K5jNRXfnoMVh3FOu7%2B%2Fha6X3Nm%2BaeUDLUhlf31vpOrOmmCf3mCO1TTO1%2FCDQdgKj6razxiuPC%2BVn4%2BvubEutIZux1QoE7H172ukCwNJqALWFG94LD4xFS8Qpy6EMLhMf9LGp%2F9m2n7TA0IhB%2FJwn%2FqezosQSqRx9bJNzUR6I3nOVQ7c96Lez5dLqMMyh2MkGOqUB9yF%2FBlo1GNHcyNDV1IoMLZ3ZdVZAcYLAEv0yrQF5L%2FCJhbzv4EO8fDOWWwBIfO%2B50ikxzmUWvApaXMTDKZw33bHb31GmmAJXNar0G5z9XbaZMR%2B7v93xtMBuuUOsf99xkPGL4qCK7NcVaEyjJLrbMzRNYZPnG764OTl2FUnWrWY8F5gui6ZEr050r96QRmaq4mYBbZUaOy%2B9Ek0FWugVGZ23eEr6&X-Amz-Signature=bcc67e98a11b53f49c8f00fec228cb54c99c7a4c54e9c5458eae715f19730de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

