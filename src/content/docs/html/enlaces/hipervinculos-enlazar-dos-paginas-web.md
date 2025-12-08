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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y2VJZ4Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFWtbTV6eq48QDOUCvdDeymYq2%2BKtGp14t2EIIm2Z03AIgTiB2dlbfq11Q%2F2q2shC32EI7ErzyQxiSjg0dghZOgiwqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRjg1LXb9B0MRVfqCrcAzfF3yh5zYhnMlfISH2fDBpjRbEZDi6LCcHpaWANk%2BpzmfO1lh4HbKcelmwurN%2BqOPF3FTS9Er4yxe1n%2FFNy9gfFQhHm%2BPFmrBkCvMCuD5jIl4EBxspK6kStnF%2BeKS7D%2BAZeChqFGo12vhzfuOV28swq0k%2F1E%2FdDJTbcsYGmpdny9pfB3zKfp8sv%2BZLywvhJ3XLXwU%2F64UoJXp9h19MuhK1RWw9vky0IhpOu3qY%2BOxjoZVUtnnTxHJBjvCOR4ZDuq2vupD0LBCArNkefu7flnf21j8S6ulSRiM2n4GTjegF6OygA5b5ddDBSXcJDB7woqAST7ZNcLhjXnjItuJztGJO%2FbODGhZklRZiYKjOGSoQ5tG8igw7UeJrGnwYqTuC5vYVrXj8vc1vtlnOQDz3iDAN5RZNJK8A9HkGpwv9CmBSWL7bL8S2VAcMIIFn5uGMrs1s0%2FWW1sP6Rw1jIdUrDsF2ldjarWREYfwo%2B8qVGRYJLCa71IBXKWPedukZHttxGJ12WE42kdNhxhEmAwsC31dnDoTfkDZ0EJrlRxJc235k0Y8qfwKD6OZUCnwJYmstldu4Tpo2VooLbPrTrc8YCMEtKG90x9LkAgdbo%2B4B8nxN1%2FyV1D68fleH5uYyRMPX%2F3MkGOqUBDIQlIb3jGAdfStQDCp%2BlbHthLxSAFVvbuihoFSWX%2B3zEkqkyM9UkZNxF9Azc2rhE7DiYgr1FaILrBTXVGGZvcxx90YvmqB14vLnmifx9O%2B6e82YKpJN6qwH7GhpN5cCfcqytQnEuxXrb%2B2YD2veqji9Xa4Manay%2F%2FAQ5oRs8A5U8T1nmOydqbXidMJbQMkAr0IP5THGBBuvDjWOIt8xmfHiVHkbb&X-Amz-Signature=d9956114db59f43b7029eec2400bb62a6fc761a1b2bcd994bd6cb50d882ede38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

