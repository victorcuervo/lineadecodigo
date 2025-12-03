---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2GFSX54%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCID6MYeHgvYtw68kYfZ%2Btp7NGJ1rufmsTunElPM53fI5XAiBENgHrjVz5Bowx3QLuEOlVswvdtRHdYOvl%2BcUQ23C64Sr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM2QREiMvHv4Jij1gRKtwDERSVF1u40tuf48WJStjLm7Hfv6dxzCKx%2B6pMkfjYdSmYXYs2luKDUOkcvtv9OTfVZOy517pLjLq42w4s5QlLsz6EdP8mYAUMaYHR18n6Mm5inoq%2Ff77hrC4fJ2jPyeHbX9fc4XY0uiRxXYEP40mxiQevyXkYtNZNqJ4eyYWKi54T26rG%2FAqfA09KreHBwHKqxt3gogjfXuz%2BVtX%2F71kfvXzqCDR4V1F07yOWV8vT9PlrGH4IooWcSjvV73pJjBQL9rj8kU%2BJUMyFtz4aChCZVKuk%2F7do0BWbU7PILafOuONwUQpUqY4if4g3pIzqCofkleeJnHm9fM1gSYS2Is%2FOUS0ZaQXGcuQAGtzxEk1hleWAx%2BGClkapNaTOcnxi5ZRI38onJ64IXmme%2FH0qe0I5iefYXrQa8XpdpQq9n2ZiewMbTNxMPWjsevxoE4oRWPHCfJ5jMFlslQKMzAbkKmBT%2F3H2cG0FT5SoNbO9zMBy%2BAV8cXQNigt9lAeHn%2F15Rbk4oPQqOIikoILpvgCIYjR6K148y2qELswGzSjj4OlAOZzJxkpCTrrmgJ9%2FJ1ZB%2F%2Fm2ojr1qxUSa0T3nwAkNbt3wb8QQZseCP3vFoC01u9Ge4E7lOUXazB3YmPZV%2B4wjtzCyQY6pgGj9tKjdmbYwimelwctm7AU71V9pUMZHYAZIvYKPs62knbFlPRBFtHixEIEk24TsVr6ihkupLLllXbjm4Z8fX5I0AkU%2BddroRMou7XfoWZLxdxv8oAPmtrfhqTnZR1c2oT6ISADVPvdAYAHVUdYwbKVuay3JY4SQFD703dKxOs9ab7jPaHYptr9%2BFIA7O2HMME35QonptZeaJy5veDfVjV0Kepmdduh&X-Amz-Signature=2b80a28a5edbb77e471699acfb58c1746ba7be4510135e3415fbea651905e744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

