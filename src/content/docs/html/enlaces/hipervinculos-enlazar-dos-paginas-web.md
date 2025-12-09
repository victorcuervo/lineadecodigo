---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4N33SOF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T165133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPng5QrNjarAtxQuJfPXyiv6M7aEqG2q2x65kiE0S4pAiBoFB4M8rX4f1Lsb1%2BLeweQ%2FoQ3%2FWzSR8GJuRIV7dRa6yqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaXYJ9if6vKMthQacKtwDUoICAhU1%2FeNvpVcSdFB07JiHfI2MMxzPlZTOOlhWIGqqPND5iarkr5%2FlFxEVVonfJA3lIL56eleqHbxUJuf8z6k2rN46j5mumcB%2FnInhKzKYdFE2YhlyPWihMpd2gXQHjLw6aR8%2F9DkXA3KT%2F4UUYcMbK488yAGZSqhqPaYW%2FVw78iCA8g5bfcuFEpqGiU142KTMez6sedstdUWgmhXZIGk1vuYXST0oC%2BD7ufsaXmJPDP7yGtfYwByXnYNzS%2F9NwsmZ%2BQFEFGDXpoq6uWSPpZ56QOwjnHE0XiyHS%2FvGxP9woTIf7qgbcW9UOOAplms0%2Fy7rKqM9Ki0B%2BekBNSB0qO1ZFlZ350S2129%2BHZFjaVKGFLyInBHpwKlp5rDmmQQtTH8Jr6aRAr3T5AVnWpBHoIFiuptkY1irJGJRQ4WmEymP0Kl2g4ByZJlcZsLQoQuLtCdMKY7IAOFAfh4guHKRBQSjEfsqlgc3m263fjwlCaLOhOGuqz%2FKDlc%2Fqt0QwDC69wFFwlCHnVlmv9kF3jHr8MYFnaUX%2BjFde6wgHkeID6tuIMSJ8hjt2mAuA28gLjNwyxD0BnSxhFBaw6ccDRbDqpd%2BRYe6eQbjTLgEFaSfFQNLTDJsoWgs0%2BKkvg4wj5jhyQY6pgFY8E574ycsrsIygzy0o9AKwssz7LGkEzYcCeaPTNkUYuIk7Uq%2FFrG8AEVI5QwcaaMv2RRflhnzHSOeUS%2F9yS54kvWLEwvfiLaBNblgwdpQnVrMsnxDyWRPwE8zloHiJwhwtKyybZsRU5NqbgwFxkABLlzsFSUEsJdduXJb7Y0CwATbNl%2F7s3HR9MDJDrdd5jm7iIcR%2FZs9NtNS%2B1p%2Ft0EkS4vFOkwU&X-Amz-Signature=c333787b6bd5e54c2e1bfd16deb60694bde3278e44448d7831d1a7ccc7405d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

