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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMCZD6RB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTY1%2BZp5dC%2BjUAeJupxAo%2FhfUhVZxOLXD3wJLYSTwxGwIgTPwMDEvlauUiZfybUE0OZqvhrxh4%2BSHyYZRhCLEWJz8q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDODfpr32n%2BP5VvUEWCrcA8wf%2B4PFVnNyBjHENTsP7vFN8cl4czYr0iS7wq%2BYvyUZZgnjY2wNR58zAhLBbdAzpIr4lEo4HSbbKpf1Kjq3PxxGKy4HUbWGofvmL3m9gj0XGsylFikOszyMFPduO751yr6h0FuVuyJDWr4T4z6RVFWGVvjRmVrIxynsx%2ByrmWoBivPiutmsKduU8kXGLrYucP22mxdWjSTalSa8avcoeklFDEOEqZCaffnkRdwa9p1rVrMLPrCDmJmDAs2VBpMXhZx%2BtzxWIaXAvCc1Gbs%2FeL5mfuRAEP5GGcO4GbcAttOYHNThwHvaTDIkV5F4gb8DAe4B0u10JpCWUL1CYh6EZ7rNlwEaxAJdRmhETbBs8nJCIsjHeruNfhrTnZuCqUHBEXfzfiIvI3qhOWklmPMR3YlNKKhlbedaY%2BPvUL9X9af%2BBBuWD8qI91sY5L0rUJXkNFk2U5zmffdvRcDjRIBpgVqvNf79jCy6d0hmGCBYaqSzeM7bcjBAm2IvXFKK6rvmjxOSzoWdu9ADxLb%2Bto2NrbO7vG%2FoE2v%2FF67MCBJ%2FqulKByx5DR1D7Lj01RPYxjTX9FeRAj%2BuGT%2F9n4FYxQoR76cRaQKXbZin%2B6%2F5diro9eMWMfPvUjTTGHDwWc7cMJ%2FTyskGOqUBWVyI8wizU1qLGojb3fGng58USjPKkhAFkDArL0RBxIdQReCmDYN2S9Jz4%2Bv8Rpa%2FAs%2FLmBLb9qm5A3suMOydncc%2BWlHl4FqqzJQqjo6bcbh7JbIvPmxPH2jAoeASXoCTKPPxNjeFKW7FJnp%2FJzpgv%2FKD0JoFIIHqWVVXntUeIINOHjTfnX7tIQToH0j5Zb5Ct%2F2AYmmKp%2BQvHchx7KnLMycNMsXZ&X-Amz-Signature=4a7f2f85ba75990ed1b2e60b92f4989371c9f703eed97b42cee98e8d22892e47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

