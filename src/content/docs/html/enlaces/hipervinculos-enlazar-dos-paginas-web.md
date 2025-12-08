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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXDX4J2X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDublp8l8QOh0Yyj1uVqfXIEY9XiWK9wq3eGhq92s9XywIgV8wc2ywVACDCiCaznbJjrMDRwJS%2FIeT4%2BPh2v522xYMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNP0taRouogRCaCZLircAxg6vciZVYD3kjnlk1YjI%2Ff4SoRVva8AJ58dcoDeD6LgIQWqwPWiLHBDcpCO%2FasgVhok%2BOG6p%2FuhcMw8exKyQCD0GliIABr7aLsmXy6748ODKLf5nWzi%2Fgu18xEsJCc8vYn3mXRjisWJq6KU%2Bx7zSS5SZGvGxKTl4bkqWrW11CbdVgryPZehBQfPS9tsunTR5lRTUWW3h%2F8HRvVN5Dk4DS563Hrl7HhIkhEkN8lkwJzHs6zmPkTQr0eoDjGeSKArj1bT5jpOh%2FC%2BOzd%2BiCz1U1VjRjgedYhKDP5yB7dGOlJaqnEn%2Fi41rSAvbzuPE6aeQsx%2FYiNzyUM95LMem%2B1Sxy%2FuXSQpbn6DM0TmBgKH3HPhsAeMIJFKSu%2Bfjsqf3z4nh%2BlUeeW77kEUC5zWaC%2BuBDksj2QrSyskj7pZ8zKe82vvan6Slc9e3%2F7tGgl5%2Fi0AmrVwNom3zy17y5bDwtD9s3ty9HVCOb7monVAMclvsTDAfxBvR%2BItWzEFB%2B8qsO4KrQf8xJO0RetkQPFOL%2FCa2Wwp%2FG0jXpdwdU%2B3BM0X2FgFguhPLBTOx%2BSJu1e%2FQbB0EcgjE5fZxDc2XHsXbT8L7uUe06CFj2PsG46EktXMbbJvpKw9zqP3CPwDezZ8MLHQ2ckGOqUBwtxPg277%2FjFeHgBc8iuVv46sL3264CJQj%2F9tFAz8XRfvIqAHbGobbSODWFC485DwxwC%2FZQqgiPYWU6whrZYoahhKsiad4ECIxy6Dtsm%2BuMZR4vpJamB6AfohZQd6xR1IJQvitbqsdfFPSQgWiKr4reMGXyfv22GYN6qw%2Fjr7p7k%2BkRJU%2Flkx2gqVeBEjFTMPb4iNqLjqaWMZ2Oe%2F8rWRPeAdJrCl&X-Amz-Signature=576522bfe9721676e8ff05620b5778709155c15aed1e334e872ca410b706f3fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

