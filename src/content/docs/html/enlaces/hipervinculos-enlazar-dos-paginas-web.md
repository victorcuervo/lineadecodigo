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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSP3R7W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8YPPz%2B4%2BQdJsNu7UhTkZLzn5k%2B0sau5E11vsQPrsVpgIgcJ99gWn3HttNrr3S1luBZgOXEhydYyqqs4noTz8gm2Uq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOL2M5GBYdJrKdRbSyrcA7gXlisQ5ClyDsiWt35XIn1BtY%2FykCO9mL2qXDUibvKkw%2F1PZHjz9WgQ2UCxysGAoFFrGsDypqTw8K8eba%2FhOerSYMAqMEY7Wy6Js77a4Efs0QOyoRUjp%2FoxQgKYMkLbO0Sc1aiNWzzXaOMlq14Tjf96bpwnAvxBZhhxeAU2TQ0K8GnHvmgEaheMEIgxg0O4zw7VF3pms3CehERKUxZ86ab7C%2FZ79vE6DMDno9NEE9bcdyzbYmDhuNr0DYIz5Tv17Giv57t1NAQqhiFo2wCaH9srskWhTU3n9AnjfT4OVjev%2Ff02t9eYh%2FHaop034Eo%2FfCu8u90lcvjHCnQRFQHbqTMRUVYE%2BvlQUbl3oRcir2b4wemzU9oZEy0O4wmXQkhxfMmRwyp%2FgQk%2ByzhNelpTuwF2CWPTdo9JKsif87qk0yPs0WqWS%2FiVXBm6yIgUFie7dSecAYI59s2mG0HEnQYBhdFxwmLzkOB0xqzGjr%2BGAt5wbHKHcddsrdFvUL5YvROe4H9Tgfb80rUyow1qwS1dXy0xfmaUQN%2BQzzrA81j57JpLOXSpJKqYKynmKxALXjLpLkXptWMKKTUa8AiU9blKpUtTP0NWzWLC0Lxu%2Fbtf%2FRACSryyqyoO2ZS5kyFtMPSLyMkGOqUBfpP4b6SIVfDsbs6tQIHJQCIdJTWrfMkgPHqzHKd%2Fe1ANxwhpGN0XV12gHf7aiAxGdPS0hTwgLgHsGHtV7njwLKLb20W8lp9BKCmb6oxt%2FcCDybu%2Fy2ITEPXPAAeW8XNvG6f472Fk5Yg%2BsIrKdQTg0lI4cJEYEtveyat0JV79b9sJw3haiw2ylh3SpMauiklbvIfpm%2BgSJjGA3dSlIC71jg0V1jcW&X-Amz-Signature=6dbddddb70379ee00b21d1c302ad0550a1ebb7394921643ae15be9518eecb420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

