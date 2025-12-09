---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FHN3DKQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T182641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqt1DF5pCr23spMg5I%2BMScPg902oB6aAzWY%2BJp8E0JTAIgZzB3pNE%2FQbSIVlGcd%2F9sy308cYMfqcDqU1aIbwXwlNwqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHP4U%2Bv%2FLehP1Jm7hSrcA9731PiqHHE4%2BDw43K1TfWMAPmLaseZGREJGIHtNJ3KsNeG92CZbNSqqIFhEfGpXtPZSSFRaJs4DaYG8aHTEcRa6shhe2kKF9Xh4vcaKwFx%2FlFzQuzYjLP5x%2FoPl%2BCTKtJdKdEmdXv5mL74JOsN3bK%2BFll9c64gquUfE2XyRY%2FoT4ARiibQk%2BhIRnnIxCLMlahtqb2saFHUXAbWA9a%2BSynlRVxKl5%2B36SqtznD63thbw3cjUKXmJq5ub%2BA4J0w%2BgqYNaSWevBC6Z%2B0vfueHJOiuKZKX0WK9z5zviRLQEl9PTgCuE01yofWJxcUBETcwk8i2BIX4HUnwHKKm7GiAhfhqj4AuD7Lo0YliDLEKEEa6ykv8QvN44OAdE8%2BZOqBZA2F3jFw3HTMTMlpHadOoCWTYs5xqNMcRVuvu%2FhpQGd%2FTigZ%2FczSH8jiUm6gn9LBP7EmK5aGvEVIXZNFfeSW5JlxcM3SbmMZEkfCz%2FudCtIuOo7XX%2BaedmqIKZJj5cdmop%2BEH62Zn2%2Bqka1dkSuJz%2BIdsx%2BHl4JNQc0wNjjdveGZT3wSJwBb%2BENb5bwkl3lBZPQEMImyk%2FVPgxDNMgIFdm26vJDRZwsS4SxnaNplmlHExmIlq25ed1NuWIKOH0MI694ckGOqUByFf4YY1kc3%2B1nXysszh9C0NkELan4g10P4odeqagojeSkR2WlJgQUlEQByi25Z%2BsM55u1XdDN7x5OlVSyua%2BsYlilA4cIrS7GtEYhDPXVGJOK8QY3amquC3M4mPa%2BJ60ZYMqgAXqY6vtdRU1sbGVwYLYN2XTJj%2FqOLWyGlStQQ8Y9RGJQpuuZtWeDFq6ITfwRk%2FtECPdFsBM7JuDFWSYdTJU2dQ4&X-Amz-Signature=ddee1e75f59f7ebef5a347fa51e5e7e0584259504803cb3c780c466f3dae8462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

