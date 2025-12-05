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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZAO723E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6A1NA%2FXgrIfmcyITJpE3RkXh3Dj%2Bmd%2FZiOsl1J7c3BwIgNLDpaxjiyZQ2nXiFgyfWVL0aQD5mAALyX0hunENoCBoq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDAuuZNPrdGMYvUd28CrcA74%2Fay90bHsDwvXsfrgy9MVhZ9SKGYqKqjFTHYQo7au3MMQ6qFxkYFWH%2F4hXSZ4Chg%2B6nwGICuffRDqXdC%2BGccUq%2F2NEed%2Fusw9ylbatAgbKC9qCHmYJ7rKOSRSPj2PEQcMcX0povWsoy2icZdy98uF77loxkWB7w4dOVwyZF1pvaUXQiVIH0IVoQ0XLgTZAe8WJnTxhjjoERa8aSJff%2FilL0%2Bf%2Fqqc3ut6Q9KPYBwvcUKnOFL9lAHBydnlZpQDCNWGQQwg7BL%2F1oyaKA9KDdU9igUz9xJWITSwWdwnxufJd0ARlbvNRrwYEmncy1%2FReNVcFpusImaeD6DKLNSabC%2FemD1eM32pKRVhfpLDnn%2BYxpG%2FzmqdbbhE6cRVQ0i%2FT2J5UvkJ22gmA0yjODHTAmtE0FO%2F8w7djm6L9Lh%2Flvi1hfgvXWL%2BFBxO6RPQiNzg9A1l6vRuS3G26wOzEypxndFKGW0ulHk468wd9ROH%2FcFbCj6ikq%2F8fAS5Gy7ZayMuGeu%2F32ci4wrx5iewFpKcbPMTs7T1EIZWe0Cj8ZRDrbxBK%2BP4Llyv4A8cxvetV50h4ctf7RQQ%2BWZUYVW1kbg7ELdW0E2a0j40DgJpF0%2FQzNSVKOfC6HppW%2B9HJvW1PMN%2Fsy8kGOqUBPTr9wVKwcAvqH8wxlamwMD81dEKAA1H5J25OaDWPofuPf4CQf9Pt4RvaJDXGbJdDN7roYKT%2Bv91Cvqfsz54nHmM1Sw%2F9omU%2FhIj6p%2FESfqh0gmR8GlTDs8kS8Ff2eoKp%2BOFaanHsOaydCymA8HqIXPn2dbaZ6a8lg8fTnRS%2B4Gub%2FkPkYGQ%2BSwt0RPzA2aIT1rxRmIyc6slCyc82L%2F%2BwVGBJdmvW&X-Amz-Signature=1e2093c08ed16c5cc28a4eea0bc6515f0a1af97be60713325f9158e16074d315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

