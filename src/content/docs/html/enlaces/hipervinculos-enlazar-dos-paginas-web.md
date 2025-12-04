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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVN77OR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAUqS4xWolbbecPz8cyoTpkadqaJe9FvmRwSYSRybWGhAiEA%2FT%2Fa%2FvOo84DakglK8kPMFl8EAKD4B6XreDJda0L7QrMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOOhq4pv0lgMQ630UCrcA5PPD4eGhIwfAxgcesGtrLmLZmDR7jI92grjgIesDjpgEotKHlnyZy7BWjRnIJUQ%2Fxjwl9lNHEw%2B1X26m0c59Z5eHAqPfPdyResFjqBFPZstrYQ%2FEssfVgEJhlinBtQX%2B1%2FtNMYJzjKgw5eD8W89343gMy4U3GNBCsps%2F1QKmPjACDLu20DHeMr7oS9rmtrhRvxUNd6rlbI%2FKCIQ%2B6WJ67jsmjV5frQCRRKcMCjQwddCbZ77HSWlghzpcPG8kTBXTPaARXfOHTA16qdZ22bpbLjqu00KxUaGiiV6w3aHzNgcjpPQjh%2BVszCmLEz8EhI8X0cM2LIFnXX7JvouGd%2BAF6e6LlKVt51xd8JtqLuevQziySAnrk%2BtnbP9vyjzxV3XSzSCbANjFM0kH0JwmUiBqxKH3T%2BztCRD7M22NuaghxANRLrgMSXFIWsBHGFLgVTdfHy9tEfiTGjFk8Kln3M%2Fzb%2F2GVKasEajbXDd6atEgJ432w7qqbmwdfphNHo1%2Ba99bvID7Gc%2FnQDgrC4EcCK2ZPt2PO84qFJwE2yNzP2ZPfydD%2BA5KZqSTUN%2FYsH4hYcr%2BMY9VxgnBTxU5tgN8HOcp%2B50tVaSFYBGGbjgJ1dzSkxawORTZH8Emhw22z4KMK20w8kGOqUBe%2BWOn2P%2B7VOWnB5mSbqk007GdfOOeZS0x62vwo7tCF6TSNwXcu76Vc4Z%2F1tAnKPjhlAnoV88HcgwxdK2od20fCZ6QdH70PQG1ZVY4UUlhDIMGoBNVkt0ZEJNaOX5PGhlvQbAeU10TVRDjLw9cvKejCyZIJHFC3RxokVGt2dmpggVDk%2Fuv%2BwysKukf0eTb87t54BsGFa%2Bcvj8cgvrPBydct7lLyJ9&X-Amz-Signature=c46e26a6828cff842408de1475a74daa48e78312bf7d49d58adb6ec2e96c9bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

