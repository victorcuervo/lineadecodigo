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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WMQGEB4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcBudftHGNt62dtv05Yqu9ZjmGnUQEUaeB3s8lNWRTzAiByASiqzANT4NUFmbO1W9I%2B3V499UzGe%2BqVwfqw1QICGSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO2g%2FIz2OfCw6RSVYKtwDHohZsnDCzYQyIswC3Z%2FieUIeHqpU3%2Bc4bVEQiYtGl11zGNUKZM%2F4tJN3Oljxg86tau6QGMFlmg2fp2LRkDjnyOXYMnx5iwanGzaLPMfGTEwdFigCfLtIghu2vGw%2BjlK9gJJCPBbkWBpmPCYAZSJAkMtP%2FGyLG8a85EH1IVHYhVspAOfSWVfTevYKxt6KByb0iqnaa7MdYqmXbd%2BW9Sy7NB8yWm2nbqickWyNi%2FBj4IyX%2FoqBb%2FlQy5QwSRdWS8Ci7iSIEHKAiDqbU7CjnKDXxFx4Hpwd7HI3iCUYw2DFyZmSCoqnYCklazuKEDaYvrEpiYDmiuTjSajLBoE9ZP%2FMvXEbiYUvUAkcF%2FX1u6XgCvo26DKdzgeyRTBD8gvaZes3B4%2FimaTANUFBB%2BmgQEGmbIZMIGZWdLC2%2BK4FE207AfPcTJL%2FMgcHBSqIShy%2BRoy2Y7rgcqth0IwLjSoEg3LQxdXPeYOGZ0TEZOE2TKFN5nBUh6fSpW62Vc8bLHBeWZsCNnpn%2B3Dk7ZQMnSeTY7Cx5dw5V5utcHQ1Cetwf%2B3BCWIMvkZ%2FIKUqgt90y6LGYE1gkG7L%2B6zacFde%2BcR3iPnvIuazwez8%2F9HBQ%2BTLBNimhVh48P0LWRmZ%2BMmsMDkwmv3SyQY6pgHIosdd7%2BAjiRKnvlNUoslkx7cbMWuCYK8tYvDBd%2Bzc%2F%2FhJClcvDNRlJe7APSESf6W1yKq4NHfvZ8R8Xvczaw6Lnys%2BFuZW%2FE9cgfymWz3D65mLYkuJgS8A1it%2F%2F0uzh7Y8jyAssnlJnhDFIZCm8QugxxbqoQ28ODHiJLY2PIdK%2B4d1yWqQu51gal2xFvOsMHc6BwZ5JiPRt20CwcRWKKUlZSpTvPxz&X-Amz-Signature=7051ef4e8e0fbeb37eaad1430634bac121a755df17bf48d488ed70d07f36bbac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

