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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FUBICMR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrMKLsBrU%2Bb2UO75VH0phSMHbS7l9vvPaRhR0Yr7g5zAiEA1NiXAcM56a0xh3L2HnCnaRSTx3rLRE%2BKAwFelUp%2Bu4cqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJW3bA9EttYiGvpLsyrcA1h2MxugHzj7h91SDjVXJgr%2BnACgvB1qh2uhKRVdYZisqM%2Fa9r%2F1yibQVDu8quXYSf%2F1RXCdZmy33UPkI6FTWO8oo8RnKKMQFF7cX6LO9cYpVaKfxBpIRVJiISG%2Fl7pq4ZcjArIdj9l9a9CmzSvaXIasUQFVZsbHV6%2BWqJTWPRBFtcTHN6zJ%2FZAA0I4HbGCLWCb61rmppUqOEBEqk0WxO0Waz0fdFbGiax2D8vooijyXcOQPgeG3dTxBRJpe06Rlx272wq2x5eOFVTCRs4hh%2F07Klg%2BabuFnJhx90Tk5rEikZO82pt6Tu0HsnLEgu6uct1Sp7qj2D6D%2Bz8sA6uatk5iPYFEcij0AsUASKwprmMiEipC0mYtt1WhmfXGQ9pEhSSkPUt7Zu2cm%2F7lYyeoO0BFbT3hFSOjfuPduTAUOyPMCRZlQ6rsQ%2BkAkF4lJHobuS8CRfEgav%2BJGGK%2FITPKp5lN7a1VReR3K0PB7l1tvgVh7j4EeZn0EYIMuDmoSaDG0vta7BBU9TVzD7O98OxY0%2BYbEtbVOkAUssSuTzSwr5eVYQn35%2FjHhZJXN3eSnTPf8mXOOrHpp3I1Djpavek6VpVp0%2BNONZUW62RRHskjdSZmpR9AmoN0Jr3%2BgWwhNMK6h2MkGOqUBQn4klvyAgP4ietLJx2Kbv%2BePmQp2ah6U217T65O3NYLhBFL1ezAHTMjAqqswE8ueEuhH%2Bq9t7JPQTeBxj0J0im3FtokhsKjwMnjkkdyOJv%2FevdzHuNUaCe0Fv7IoqelJrnoBuBHFlarkMhuZHKu6CN9ZD4FmXL9MpOwNlvHhAgnUtOragGV95a2ZfeRf526q%2BYjK%2Fkmk4p00CCIAwZxmDvP8vcgS&X-Amz-Signature=77111c9fdf29f5ecca5d256ef6beac3f9c87c80d3db885e7b1506d6de8c6c8bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

