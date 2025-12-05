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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXKZZIY4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj85yxC%2BXno1B3w8ZvMxKdnQn%2FY%2FpdFOsZrzMevIthVwIhAMdqVgEb8SLZNX03Ub35GfspbkB0mOS7hjwsEe1LLSnLKv8DCGEQABoMNjM3NDIzMTgzODA1IgySJBdad9WJ3I8UmvQq3ANQZ9wac98iEDtrt9ScIMq1mbny7GPZC%2B%2BVMwe8klbd9cVC9LsPoO92ZfG4DHhCkN2TMsbMgAuqNYdT%2BMlPLmg5w%2FX8QirXPKxl8OdfK%2BVQdUrSteWzL%2F%2F2y1YLgpMM1%2B1wEpwxV7dRSQ5n88xpjj2q1bNXhd5yJbkqPGKbojs20csNpJt55OLmdPWPbRlCBHg1JqpN0ZAyoENIPi2gu82DAGa0qhQY577Xj%2Fmof8vxQE%2FhEQkXs2WlAEq%2Fe5tV4p8tCDCh0jmpbqit%2BiRHa3crfMPrsXuNchMg8%2BGbVb7FZJeWa13ehf0DsSreBN%2Fj4fd6cnEwn0GoZYqV1yPD3IJn07IodsB5i2n3jB5a01AsHRzw2s7RN7RrWIC1t%2BiL9T416gxfVyGXhsyS2rLSpFWimbKbi8k6%2BPtAknXPPkrY65AgPN5DG2fI7pr3uDMENYaGPLsN8ALyQViLsM3k415WRap4dD5zPP7p57OWrr4wfhsJAKlAlu3jzu%2B1ifTUqlQm%2BwP5%2BmjX1hisIPi33X%2FQh9rAGqeMot8MLXa0tjxszl43LXREYWRTbX5nuKQnWuZEPUMV6vrFN%2FaCM48ohAfLrYIkI2QwbwCPKXYMHr3L9osXdJ0L91oFsIcCODDv%2FMvJBjqkAY%2FCO85Z9STa4wuhVJOPSZwZUi17LkSXomS5tU3%2Bhvl2HHO4HctvDnBEi6IR6NDw%2BSMH%2B2Ci%2BaZ0tSW4suvmtU0r61OG7ZeOSDkQ4Le2SbtKxmPIqetMRxdAXaAUxIKTviPM9PspamqOIX%2FA90%2FfXmWX9feyuw8xNSe3Sb0rWFQVuIIihqoZ%2BQEeUd7THoidn7FnWDcgNmfEe%2FkoJxYhKQn6jcFb&X-Amz-Signature=3b7eae451286f3d0251647dba8ba994162f52079a9b9df12366f2a142676d8a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

