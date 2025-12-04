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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVFAI4OJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCyKCB32QGVL8GHuVZ%2FTcjhIiyMuK7%2BUCucSS3t1BbqqAIgEx6BMnwX5xgyiSR8o1j9pelhB8AtAO0R6uo2c2vcj0Iq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDANyZqCzLWV7xFbDXircA%2FteJvXoby6VQvVSCUIgmWd7KMC3yRmQQgIVzxPgufGKyx79dPxnO9yko9HfJYj6k2oyT8vcwlWw9iHGOmw2GS7u7C%2BN8BcA%2FK69GAaYvYwAJFpdofbNBd6isxWDrSUSlze%2BTc3P84CMqZHhe%2BocQsdfQkd2C2VqlabaOiEsVo13SLs96dXZV4fHVHdE5ujxf8hJ%2FcmlFmYU1ox5pUFpLQ34Ns1W7Zndyz6c7zwTroRiHS7G6mYfLJUoptEZYv%2BAkT8HI8QrQENCxohCeIG03CLVCLBzcXsohsLek2Y%2BF%2FlYrWVs5WJV5aGswtUQkT9h9c5hEde2iI6%2FOJLAuB08zfgCt7g9InU4El6RwUUnke0Dfk3WpmXbopB3OtenRaEhA9xL4p33Cl8xQBElCqB6hNIk8VFUQr3NOj4dhev63%2FHBvWkPb2Y2bC1k%2BeEtklCz6KAsaPn4cXsqKuxR4iUN%2BYfZvka3FN5WLQ7RZbBBsDiJkMkEJi1KGDJZyPnHZjt%2FtJgWAUFwQxAMcWmF53qAl3hjqYEl4STh13hQZ%2BCdn7Ccf1z%2FxcBtNvUUb2UIXWMNqZYxNt%2BVla4d8t8%2F%2BHGABe6Wmm69KSLHsxIc7NFouOU7txI6v%2FIpTO7AMUq%2BMKChxskGOqUBzACEV17FHRHOvjL8piUZsE8e28ladolYsrZLDupgR9yJy9cgjbcou%2B4OVkaHk4kuu%2FmISAYaxYMfHWlUhFuvt%2FMWZLqIkbbf8VtkuLNhUs7kqZUdiJticVPWxUdh32o%2BFj0ZH7JSenhoYO2ELqcJTKooDvrwU%2BxCyBcfwPlLv9b%2BPsMfK1KBkH2lwwkYMg4NeGDepfXEgQT8XlYjs%2BK%2BFJiwP1aa&X-Amz-Signature=9bcf7a8de5971b0d28d092289ca0eede3d67237966b31ab645000386738117df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

