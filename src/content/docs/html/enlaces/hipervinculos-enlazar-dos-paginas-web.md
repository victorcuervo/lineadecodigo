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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NJ6KQCU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T143016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdxXrPcjE4fKEzFBGT8PzS%2BBw5srG4oPdSXKejL%2FGnGAiBuxuznwgRM39IMqw2ANdnXk0VLy4LwcI0p%2B5%2Fa0pEGsCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMGr%2FRn69zqpCsNJB6KtwDHV5ws6wYD8CeQRgHwH9STnprBcBIPpiUBAICLAFr3xxP7pf5KvRrBW1iAXZfKvXDdUwCD46pcyR55SC5bDK0HcEiEZZSbO%2FxfJLQ%2BX%2BIgjwgR%2FZMg2R55j%2BYoUaGW7y2C5wVFpCn9ciA6Rk2sYo1WsKbwOHbXdu6Jysv4YePKga8hwNmT9zGwbcsDf%2BPAyBXfeodx49pG%2Bhx4w8d8%2FpRSts0MA22dQ6BfiQiGdwiWBFpQKR5wa3FZTfE65ECP%2BwyeJonGP5mtR7qJdY63WUjpt%2BE7uQmIujGY%2BO%2B216%2Fjl1VNmJtYnUMNeiZsrYVfBVNIbomQMS0nXb4G%2BWWVOgvPCasZE591X4K66T8kTdKQdsFzcLjTD9XEU1RleCgn76dpSBJbIE8j4QHfhLYXs%2F394HM2zhj8%2Feu62YkwLBnfqlUZkptaXkUtFc9kLftTAc9FMaxvf4maY18bFnI%2FuoSUtXbZmCRgZgjWozKq9gWhJArlfmdBJslOV77R6%2FUwExWIMvuT8ZVQ8l1GrYyZsXmSPCrUqXiMFjW0bbSNvs0UA6YCG%2Fb6oNNXi28C5UPOcUUebguItnAFk4SUMfxYcmZh7JeoKhj3yZWhukhM379pCQTkLfAqXJFVceh4bUwisvKyQY6pgGrHOx11i3JtIi4NNPQn76eIDUi9fTzfOHMWnpt%2BHA3JkvB35tWkvvA1vcmkoyC9wrI7T6LyX%2FlZUAbV2boRMHRAOegivp6XQagyFPXcTYe4YwreuYi3Un7ZZ9SyQ%2F4oHngWnH287%2FmZP0H2%2FivLN%2Bl5im3xbkK5kpbOg9yNRO28ufeeq9YmHe1sz3Xv3tIa%2FngO1NvFGJskdUpvxv%2Bp3uBVAOJ%2BDiK&X-Amz-Signature=93808fc85cf36090d338b766b616a75acc25978f31980ea9587034d793d30ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

