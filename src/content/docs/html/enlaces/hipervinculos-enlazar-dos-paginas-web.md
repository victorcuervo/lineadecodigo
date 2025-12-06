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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLT6G565%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLKEiFU0bmHasysk1zB%2F8TjUnGCi85vXiyUvk4VFKeOAiEAhQWlC1NjH718VMvNLrfW%2FFxIVHlrldMY%2Bdu7WWPUtBcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDN0tp0EPtyG2N22bkyrcA%2ByJLjb0z1AzDP3MEgZLrB4JkXlr3tuPLSuWi9aH7Bd8SJRzOQbcgHkwcTTIRrPi6Jc6NW30RljF7oVNtt9WdTW8%2FO9oFp8FuBGlehUJJKvPm80A7aeWe6ADBFqohKzY24SGLOnTQNW%2Fyed1blsgou0VHlNHoLmeiOoqbRXml2GuOqLRWbHGjZxoLjbnlAkCVgvtIkiOivs4IUsYAWfH4yxRI%2BnbHHk637rDdLw9POJS9hMfTIzn2074w8YHqIR%2BnomWKXXgBFyygE5OacRbc8PUJqQmIBESYu87f%2FuNrYb3yzmuB9Py6YM2Q0eO7dZuAradCqXjYijzeiJVScO2b7w2w1FmtmNtfzI8oRcTjpSu3gIA%2F7Kg%2BCvQPT5CpIgNOdZ7%2FSFvTmu4s6nUaWGMnL%2BYNLHzCZFB1VwpDjQ2s%2Fym2KbJp3N2OmAfV7UPMdkbh0%2Frt4dvmbvUOrzK2bAyjMIl2KVMHdD54USmiwqI5d%2B5HmPok4qzqBFulLugcD7QP8uehyr726JaFGfvEXB%2FLNbtNpHu2ThQ38ynSvunF8H6IUbPoFn8Vkcwi2WbzQXmwvqIDirQ1xur4hIpPruNH2FFwA5KN3NM0pnFt5OqpqbBqyw%2B7SgM%2BdfrxDUbMInT0skGOqUBPdUj7tY3uVFkuApvwuJ8kuzpKENF52EP5Hcm7L3qPbUp0ZHg5Bb90B7JLKmzUafgKOI1zPQ7Iy%2F2rg%2F%2F%2B12gF3TUmvF1lp37PCK4iukYwY%2Fptp6%2FoEOBt6dOb7jOkcSWF9TR5D%2FLWJKm%2FHlJ55uoAvBAW%2B8xm9xWUp57SAP4Zt2Kl29lmBpeXpRYMf%2FyJobEfNqQeSU%2FXUXB8NyLNIbMJf3riDxy&X-Amz-Signature=db0700cc19abd1ef27d5f664d5a8bb30f43572efc0baadb6c5c2ea928467465b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

