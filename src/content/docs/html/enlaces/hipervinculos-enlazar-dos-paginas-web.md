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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH2YCF6C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV8bg%2B0h7jKIXDL6g3v1veE3PwQjh%2FxhbzZ%2BEvlnzetQIgHYv%2BaE1aWw0nBBfOG9A4gnbGpjoV7WOmlotyVRvfYsAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtbGSn9GmE4gLe3hCrcAx37Cbcgp%2B4rA%2FMVsRDNgVHtAWxKO9mSOckQu%2FHPnub9%2BN0tM2ZOKg8vCGAHRWUWbITpkU%2F%2FuJ8JFtjtgjqbOKBjhVEKqSUTOiqZZN5iQUHDIOUn26qt1UNUQDCyysKknv%2Fc9uThUCBO3UViEghPz7wbobc%2F52yOCesW8iooIntT1SR%2F02n15jSR2KMPdLTEg9r8dens%2Bw%2B6f0dQJhhjjmgIbvf1IVNk3Eujrhm0bOvgPYrJH6FvGR7f2S5O31%2FKJgiAtsFRSw1q1y3oTgVEDSf9m%2FcM0obnDcX7yIbkQ%2FeS4CQGwSUJeTMuYkFhrEslK7MTMqfFtsPWMNhqSPsWATVkibTI1gcokhDRASUrA%2FecFO7lpAIf2w6yKkCFK11Y5CpW2VZmQKye1DHT3LiURUZ0JkOBNkm%2B5LhLT9Z7UVxpgkoWEDbBQiMiruAjWYf1rPxpHHSaZ9JM3M6HKsknCqv9q5vC4xvBRq5gJljMutH%2FoC9neyGCcztz2dMkoK74mykzsw9gK5xp%2B3%2Be%2FjNw6o8CLDOlq0lqK%2F8t92F91yMligO9ZTM%2FsEGUbqQs4anb%2FxoQOh5qCbFYyBSorlHco2xSMxq0RcRtLsp%2BOxqwvMCVV0d4INniyTGinVoRMN%2BP28kGOqUBM3OP3WR%2FjDoFxC7wWRNmsdHif18K100cp73oJjEI5DxS4thBiQD6c6lEq6b2HyvQl5RNmaivIzsW%2BCl09bN%2FZmMZ788%2BeJjrgoSYJx0oIT6Fd5THIRJQHsw1TN0r%2FdkYlXr4EihRzoAWpqOxqdOx31lS3Sw9%2B9Ksj2%2B1u6oRNRPH5t8uXssgOeh2KDtpBWjdIewzrJ%2FRA2YmJsLv39rwD76AOav0&X-Amz-Signature=a185e67e10520eeaf20b3025e83a13518c020d0ed53e69c3a7ab3c98da723bdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

