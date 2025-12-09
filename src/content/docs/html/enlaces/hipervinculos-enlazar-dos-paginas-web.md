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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UAMJCFQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T162214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaapPgwsAc9yaR9wl9sL7JbxGKm6gNoYP19oYJ1qDe9AiEA4bdXWkP6t4xuL%2FWcx9ltVuA4zF3i5bugDik7DFEavE4qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONCAk6aoPWHLpAd%2ByrcA6D1FpYvvRBN5hOtv3lVSXKXHxqwByjXsgY33VL%2FcT0U3PaMNE1kaxGhA4%2FpiYgmRYFnSwXqFooR6nmm7eU%2Bya1jjHfGCWtvJp1S%2BNXoyk%2BW39BmoXzhGu5ZAR7kLjXbpP2j00vECF43JAqcnnA%2Fi68UKBjubm%2BCoDmOtkXT1GGiz0evZb%2BoprQF35kbQ5psm1Hmm9afTw75CbohELUb7FokirypqYfewu7fBntk34eGf8QEcgKIWXyihT015mzIZbABlEa%2FDZBT%2FlOYkFRPTpxFR50AEitZt4Uu%2FFf84eeDPDuo12P5BSP%2B0%2FjpmOzLBHnG7l%2BV4uqh4VPEf41RiYgJ3FJl%2BWYSIXDqrOFIkVI22dzaYPWdlRq6lJfNcwc%2BUEC%2F4TzXALR25zCeolQMeCNUo1FXw72L3o2ngs7EuiLaPQchSTFUX8UixPZz0Z0Q4%2FRj2pY8UteVx0GretAWfwQ6U5f3Cvc2DCn8YbpPA7YMvkLMmjooXmFyXkkhhspF9ebrhdMD0D9gVy9Hf%2FOACNoX1Xlgj2OsBUgzFEBfn2U0FbQ8arTHmIapxCYLN56hXPK%2BdXnmrxjbldRa9ebj70Un54r9SNbl70IfLbWEzecxi22Vw4B6EZoufV7qMITd4MkGOqUBo%2BhyXT2H8qoltMBrGaUd7MzOmVtOvSnM2wFxk62IZ0hjx7iyGcGjf8KadG2Cjj27Jq1uKSsfK7Bn5l%2Fg9NXfrd%2FhUThsv7Zv1e2uJzwhZBEiMbRYfc27VnxiS%2FPavx8hf7qevTyDt7aHOP9bVFXUB4CdSHEO%2FL6xwhdPpMQ9UBMsBT4f%2F6LJ38IPIFC%2B6VYZFRCi1vm29vofPNcTURsvhv0mMaKP&X-Amz-Signature=c86aa4f3bde12ac8c622279e10bb1e479ddc1ffd47a2ddf90661b01db22c46b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

