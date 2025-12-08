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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHFBSFNJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T161409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxAc4SY2Z4RiWhaPRSYbWdJlcCLXRTwVXxUiG2Xc4rNAiBcTZUvh%2FAKgfGaLmxSF3xmyOPzVgyDezU4cT6obGUGdCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNSXJwTOEID7WowTfKtwD53XiHhlO3Il7iIVO8WD0AG4NghI%2B6%2FGet6sV7KeEhr4gpXjf8PhcgGQFDT%2FAqjJR9sgB4tEVMxPc2I5CZxsMdzmyhglUvs%2BD%2BEuxL6wPrABeG8D%2FctSJmX%2FAYRIR65nTQW1ZaRJUbG3ydzF5ZJPEwdn6pvidatSV82nWCJOYk9SGbqPDFdXjaDmF4nKDwnu%2Be2EeZp57IH8t%2BMA3q7XIewal1IlaJY3%2Fsyk%2BRU6d%2F7Ek8GT%2B1YpoJJSadCI4H0xtXACfRuZ1NYIk7kR9OiqDHM1FV3BmcO5No6VRO3hLV792Lv3HD7gQ62G4qwgBP%2BQom%2Bk4QgJK6wAiBsCZAS1%2BNZkuetXE1gxPFCYEei9oQdSQn3Mehf3RLNCO3GLASpdQMLbrS7XPir7wadL2ccXQ3QrlFTztRyhKChv92cVRrbZ4Iv56wF584M8vmnN%2BiEka7V5lfuWwqTZwejnBcvLOkb2PTaxUzcy70NuysK6vD6oXx7opXwusU25%2BeqqvPREbkSHLY3TOoVLwRQnbmGnOWv4%2F99k2QimcPPZlIw5vkME4CvEu3RtU2dbRsAIQJ%2FG3o0POvlUv%2BOjmzVi63mhu1FRcuajOKs%2BTM1VWjjAC%2B%2F6Ri7Gkyzn2pn5eh4ow7uTbyQY6pgGeE0uocYPuyTHOZEcUENNkIe2bWEHUcroRsd3T8Y87g2X7GXUbXDKZOjK68jWtgWvj%2F1C4IuIp%2FGEKsDMA1TGNC4s3wmhCyGPKdl8JFo9GNRBkqkso09QNUorrTX4DK7MpQX0m%2FSmhtxaQDECtfRCLL1qLua946%2BQ0rznHEaXPn0qHh8E%2BrzLwRREt6AAZA%2BXFyde8OfQk1E3tuexpg71kEaVr9hNX&X-Amz-Signature=5c2d5b351abed12d33538c02e08f0ece6739fbcaa2b7d958d920d8f713b5cc5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

