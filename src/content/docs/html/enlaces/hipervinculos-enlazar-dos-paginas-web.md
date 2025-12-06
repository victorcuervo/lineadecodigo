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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNHKF2KB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDl7l01Ly80T5vJK0mX%2B6MNc7Iq1jAalthRx7Z3ZMCekAiEA7r5iiRah7Cs%2BpEOBMhDhEOUQ%2BfJfaftISLnjBkf20ocq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMesqMxRQfPq9LHktCrcA2Z4na2SJ%2F8SuZDTJaanigCLwe0THNiqjT8DQdRhdR7qDjWD7y0npDNYTRM%2FHgvgLB3KocfTZRl9F4FCchUrshspG8op%2Fx0UW3U6RlBwRuSWjM7CpbDEU8fWhkynwNPSNss7nedpvtuVLEJf8DWtCwEa6l7JbigsvVstcD2FswE0Kb%2BUrLtmQNScGv%2B1j88N0yq3tPSTAnrXLLx5yFinH0T3bcMGpshxmHBpDe2tmdStOxqKm%2FghMp%2BAw9u5jEgH1RVPtQXxFcSGmJLIXbTjny%2FICXl91h3W9kL5iEdA6UpRxbdIv%2BrUbZqKWe57lrTW75zBJTU%2FrxYJx5ljl%2FoXOCPBc27p4XYPoEZGldmNyVC4dKAyNRiJCbcJFrwnXCqPpa4ud75hLsgNSulCjq4uETWK%2BoNnnEXzWNlU%2Fx7uwpXDm98mIrCRvJeXU58GuajnTOin%2F2RIBZ%2FTqNYKcwRP7HeEFfSfr2kHoQiZqn5vCqBAAxRhM2GtXiiJij7S5%2Bb2nMlfItp8535EQnhOi3ia60AoyvEwrlTxWEp6cdWcL0mGB90KWfRtsqdsT8T4k%2BoLKktQKlocY1SLC%2FzGL23s%2B0JsRZtsUHPL50JuJRM%2FzPrf7hCj0NNW0nHgg2oDMIr9zskGOqUB4%2F%2BdXoaYjOTzoV0EAT0%2BWAZUdccIeAbHaMe0qh1va%2F9kuLFBRuKrSuc9XO79piKNdfvvb95AMx8o2YJLhcKIuneb9XipSeMt%2FW5B9Po7ozJUyUSuc9URz7nTUMcL%2Bo5OjtfmX%2BcnLKuzRlCm1tRxZ3%2BJogV6%2FzpQWrFbvBmdthAHFqB9743CiQ4sBn1KATXcgzDOslkZf9cr0XTk%2FErQvu6oZzoN&X-Amz-Signature=fbd38e2d38db62ac19128482255f0cb6a8fc6c0160ca356a6fef90ac88ae3c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

