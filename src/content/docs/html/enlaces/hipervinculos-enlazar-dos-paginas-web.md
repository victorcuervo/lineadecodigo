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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE6UX5RS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB0%2BZHTbbBCKsAfKc5fUwfupxW%2F3uI7oTZ54IX3EfEPYAiEAnghLfFxv00gAjPxlmaQtPjPBEJVSyVq7zcvWVjjpk3gq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCR%2BNExqMjadlT5m1CrcA8gFiF7ff7Wy0mASnfu18WCgWvCyWIUIdOkQIIXUgJLBinZ0Vtm76xbA0OT8jbFkcoD6Nj9IgFDGTT3fROwLeUwi6HjPTIQm0rgcnxln6qIjG7U5OcTC3WGdE%2BunDJe%2B8S0FVMTkJMkgn0pK07LbALUz6I8RqscaoclAkZ1v6cm%2BjIOiekio40nvoeeoHu05UZ7nhMK3WJ8kkyywihxlS22q0g1xF8uUojFhFFukf0Z0Alk3h%2FuXz77YrMMW4OiKq8DUV3i343f9YEC9whGoreF%2BS22p6Rz679QUCqWTjf8mYp%2FLoq1NMPphrPF98gmWMWsbW3qYJpXYJDhzsmIqJmtvZPXtbdwv0lFwhFm3WF79s8JhBjTZ%2FQZJAtxR%2Fat1g%2FEiBDr6VbyQVVjUp5WFP5wDO1TY9xc0p70ZrkjU2%2BsLa6BI7Fx0%2F%2F2nq%2FMj1IBUpfInzzIETCLqrYypmkv80E%2F1MbM8soRjBiFI59M5dASQ82Dm9MU%2BuXNGrfZDARyCiOheRZ7j8LCuQp7cPFdjQfVmH7CaRkBZHdj5QFdsek0dgxZfjbkC0dBA2zEei3YtyJa60cW%2BAV5hyLwabT%2FLkvRIKZpoNt8PpKE7pm%2BCVxOMdlk260DE9IcZmq%2FZMJqsyckGOqUBvYVvqIprOYD23K2LfULCm%2FhzwWKjNyg%2BQWexThtDM19ODOeINUpR%2FgZDEYek25y8kufnaddHlblzo%2BjIPe8Y5TyqyetWSSrcEcs9psMxHlSkaXk6cR1oEu7%2F%2FzINUdgcXRt4VUKSjxuF3zkgHyLjag0lIN9ghNlLNelWouG4tEvX9iE05nqQ0OYjW6ALHnq7KxQl10SCAZR6Z2wALSoq%2FZcGTnhh&X-Amz-Signature=b362558ef536ec914e4caa7ed667d2d31cb5174893a0ff1ba82cd756632e2049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

