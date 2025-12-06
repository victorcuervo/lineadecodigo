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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNLLQHF2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7JrpWkSt0ylS8CopShFBDjwn52BgXTJEG0yslGOfh2AIgE0WYeuLtLD7oZqU3WPAx3PFTSEGunHJoOpveVzhxPPsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPx%2B7EBWh5ZgLscGnCrcA1GOwfvqIEW6C0NpHcsXajhW5bY7EVf6eb0YtKsJJZSxljOTmyZ5n4flh2aH9UQLycxfOuh3WFoS6kU1Wcq9mw%2BW3jjAZQy0Wq%2BIEgRdQTDH7oN6v%2FySzPKS0OShenkO7OwbXQ4KfgVDJjCYduJjVYUrjUOnofvxhiQWKJovjwugznGD%2FhWnEmZGq1%2BUUvw%2FmtLg2G47M8oGNEmQUzJe1PLT0eRS1OTdXtvYZjvunvsFR362YlIhbOfclLzzcZRScFv5iO8BSIr32lUcYKvvCnYVkLgHhk471YfFKWxzsatbnQJ%2F8btzJkI6KLgahJYiu8vkpqLOwOoGT2uxJNKtTadtkeZN9K1rP01fSYH9r9YyFcOF8KjeJEwxi%2FtQTzlsAbu5cuAisoawr%2BijCi%2FXpwfgKsEcuhzK%2Ftq1YUsY0G3WidaA43%2Fj294IJdTD37La1cP3Grgew3Kzuq58QjqwM7ZUIeuS6%2BVl5374WqC6JszXVYTgbhLboxR644n0QLrYFvY0vOPijc3bE1ADDP3XWIbqc2a3tewCdGyvu%2FHunGGokhx%2BkqauCydosyA14eacpIkZUJ2xex3RUHksiz9Rzpe5mIAcV6KpXKNcy2M%2Ba0YvR9yj%2B%2BrE2SdOllmHMPam0MkGOqUBuPopn3npfb9CILh43I5vqEEfvyuybarkRYgmrwHNygAXD7F0Nf9yRqnQ5vYZPFmaGU8fkUcplLGt8UC1oWFWA5MNYfafNsuq6n7KimaK7M%2BpqtS8JgqwlTXtiAc1I1lEXf46BOwMPYgfygeUxB2WdN7EWjRqHf0mhrzasNP%2BlrQaoIXnI5SVHLN7eeUqhrS5EJpi4vz73GC6wtzJOiVJl8qtB7UZ&X-Amz-Signature=350c889dbc3a7425eb44a49e11683d931d0eed72731627b05656ed2405ee3385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

