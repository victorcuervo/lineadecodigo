---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTQTTYDA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHa0oeJAx6RvJ7Ols1wi1lfdCDkPx%2B3f2QK9%2F4a1Pp5VAiBcnU7MpAA2s2VeE%2FuYS86gFkr7nwuGkh6XI7CW9gpG3Cr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMN5X0hsnDCYYx75tZKtwDS8rzZFJjGgkAzDGN5TnVNa8itNTpYR0Or55yleb1fB%2BlbcWshxfGX93wn03dQywfkItzZHk%2BcFzk4EA2Y9%2BG%2FgNoK%2FIMld8w2%2FHE50y5th5U9jzpJtzfJsSfsXVdx%2FjxbfMjBZefu8PX%2BO1pYG4r5lqFy6ZDTVTZu5PoJdohmcfPXbnJVtS78BDIAPmOdOdZl38VpCoDpukkSAcDRFsiKsb9aHQ9M8nGOxh%2F9bhh2G1kL%2BK9ZMLiI27yyiy1l2YQlOa4JoJLRFHDhqXfh3ABzK3Tx1CskhpoNc3UKvwc0JZUNNzoqPNuP2UFH0j6gncv7tgr5XN%2FuQOfjT0BFxAfgytTZsCHY2ks0mqcR8DSUMdebIL4zYkpillyF3xpYptDYTuREGLHPAs%2F%2BSALYQ1cpZcOjgSyQl26vYt3mreaNRNnT0MfGa73Vk2ZS8pMe%2FikfzS3D3k7F15LVxq7dBjipTb1WDWFa%2FuYwD1NZWV%2Fb79XTLVVcg9mp2Laje4kkcDdbEt8vvW8t1cC6teWyrITf9oXFRvJKYjQ90iAHFmykNUmVkWknRECe41a4ur2zsiL7Ook4ICa%2FUposlOK5dBMoBQUJk7XCC1nsNdsxbMa%2B1QdQBeri8aN3ro0FZEwktzGyQY6pgGPqrBFneZzCgB4SbBzPYkoDUxUzH%2BB1UFFon10p4M3xGFZDqaLhKBX7j5oAO6LtVv57sjVVo6ow1gc4phVJLEHZRy06ESxptVQkHs5Gz4Qv9XXguuUVPLNyc4BftsqgtwlMYywzwOJn5BXp4r5Y83eDQTb4nbvbVWSS5LV%2FtVkhSR85OaG9o4CwwdtnwIusJPgx5wBZYV5n2GQj8Kg6feq%2BrpYnLd6&X-Amz-Signature=ac71681e2c96027a881c5d52d1f88c867d92fc55bc4ccf1f13546b4ee5264c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

