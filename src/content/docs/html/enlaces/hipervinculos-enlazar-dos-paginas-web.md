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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YBP7UBL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T193636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9XidOmu7I6OEH7p2KZMVhXOSwETXWn8l2iKfNuvXHiwIgbHR4fsNwEpcqfOuL6Gg9lIMmjt3RtlBC%2BeW8qt2oin0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILjl3m2MP5V0g%2BqFyrcA8X7YGwLUYk6oulHnSf5MeLI5s6%2Bnwd3BMpo5y%2BVtZ0XpiNerRJ8RZ3n0webRDuvIzOa3Xt3J7mep7ba3iZ8MjbvFsd0xJZ6StU6NC3SIeAIRCo9TaXucJAczmH1Q9VIwDrnD8RJsEDEjvrKC%2BfHDddJtc9Yv6Acd7Nob3pHW8PV7ZHIW8UnxZ6aWpMEwhljLav%2B4j%2BhbVgwsuEjixCPMFx7zZFHH12TPQVTsstPTCowMj6bWwYenZ7PuT9JPD5lSggiGc6ZH48f2S4bBSgwt62ywdQYROENZdBIl85NneWFHmL%2FYa21HJyo7SBjmGTzHsHHC%2Fnn6FehnQbxtChCljFaCov%2BL9a%2ByL%2B7Vrfih3twFRL0ndvq8kA4Ji1bSgL444I%2Bkd69iwS8DgSKubqTCvPPK3ln6%2FQx3YFllRQsSLGd%2Ffc1xKdfOepXP5shdrsO31CfsLteZ5Cg0Q51JTFGnMOw4%2F5K%2BdHbkIuvTzfxn6jA4lufVWRx7V9UWst1HYr3kdVT4I25KsTVFKRLzc5MftzZSHT5mnukD9mFP4zjam4xT%2B2mj%2Fwr9ovuBvKahi%2Brp2yVRXAFv4UFBF88oOEyfAEPHyvNSvakKN%2Fw0n%2B4TZ3J46QOYPhtQx3iZ5sOMM%2Fe4ckGOqUBkPfbaySmK4ANhq%2F2cjl46ntzVxNPrWPiCDd1krehJUsGL8g3WTLJKI52Ue3R5WyhVP3hBEjpw08ZD6XKPN7RD75bZO1wuJbBIqFMyeBrdvgit0Ofy02jWj6qbAp3l2GXd47ry2wvi%2FZJ1FZwzjz8vk13zXrVIDojFxu32q1HV9WwLU7cjhtIBXu6a3NKUjGBqXzBhVC7cyOTqAJf0pVn7BTwPf9H&X-Amz-Signature=7bde6a648b85e7309c1db160d254a7d90d81e86c3df47cbd54896c2eb057abc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

