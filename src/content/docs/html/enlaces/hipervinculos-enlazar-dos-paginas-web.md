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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSF63EGQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPSyaWAxrLpAdwnpLztGdJFTT3BsHG5Rdk2RnN4VK%2FzwIge7dI50XwTIIA%2FkxM1Y77nZFLYKceLGfiily1EV4AkvMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGz7TBaGk3t0G7vtgCrcA%2BcrjNrirMJuj8B9I1CeKmDkBjmNT1sN5JLjcn05iNXMuPXMTESwr5oMzM7ew7XVK%2BRiQYNQQS45WQmPP2Dym0n%2FaY8lWBYgfUSpdhOGUaxUvyaEw0UCM74Tx6mmvSsK31jA%2B8aJ5rJ%2BxBCXoawl93OqEQF20CJeaj%2F%2FM7ttZQvlMBT6AqQb4Y2kSiHpeCjquY6SQiO5e60stOmAdLu%2Bw9HnG%2BirzB8CF%2B3p9rHk2jKL3JZ0lBcOtyuLG3oGEgsOHN77UktMTbV2e%2F9TA1GOAnwKl%2Fp4lugb8pNDi8bayHTuAsBiigTdNdnYEK3Zb1AC5FAKTyljUo1pcMvsmWE4g3%2BnG1pGg%2Fossi1dqRV4jqxev9IbI9cEeaVgWxjNelFm4DcvfEBiIOK4Tlu1wV4StWk3ZMEnnxkqSjvLkCfSFOIt72jMYLaAmtryVohqfuRCpM6HVm10q4mn8PKWL9lU%2B01%2B9lfHKTlkvk4Td5lDjBnCTSyooxFW4EmzYoGscnFdAAFxsRp7LiJuqULQQMGxvICxzQi2YV%2B%2FlWubqDHLawDG2nPDnFKfJx95tVhy4IucvEDdiHm1RaY6QF%2Fyh%2BAfPOeBaB4%2FwaEvBx5aYBekxAsP5rY5YGsI0dNINJOuMNmh2MkGOqUB3nBUgvZEp4lwNEQJpNl51gUek7Aw7GNwASt%2FHqzLENXtSye47e0XXSvkM2VQriQUN%2BHkK%2BAxrlEui4XwJwfOnNhPP8rT2K9RE%2BRr5OVlwGG8bbTdMzdCWVLQUE01H9kADU20V8%2F45b%2BHobp8%2FfPvpIwIH4gTQQPuzd%2B%2Bq8S06aNgQjvP04aa8EjoI%2FQA9hRuF0eF6nouVbKRhaRaIaSIs84cuFMr&X-Amz-Signature=aa3674802e21d8f5a4d023faa4d2574d4c9fade1547731b286d30ae85824d39d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

