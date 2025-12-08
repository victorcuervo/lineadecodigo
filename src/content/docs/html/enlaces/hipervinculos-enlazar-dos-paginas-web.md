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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQKAXAQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC33kZG0T5nZymDAvh6%2FUxXKHwAILQDTqmfg2hp673ZfgIgAUemq6Wzjl7xXjslwy3K6hpasLItMWevUm5VYrIbB1IqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEEuVLozAm%2F21n74ircA6m7sCFdKJH%2FAUJtl5wmcYhhdga7IGaG3e2yLERTBPvKsXjLKuhPndxFk0IyWZvBKNkeDrF06CFUqq%2B67qqnBVFjwblAFmDH2UX%2FAtCli4fF3tBOHuiOA1CpkE2d3D9krc4Se%2BEncp%2BWQsjWFXZTqAqy4TUuzFsmIGrtJRzkr6C3wNXsM6UMvoyC657UTcUQaHOcF%2BitEnQ1n0qiNcPDMqRHSE5SutbF6SaSCEjJNXcDqPYFoE1Tn91f0OQMzPfMfbuS%2FXBuJB0X2N27hMmRGOvyGjH5ixf0VnfdA9WdTw0EIkBMfPFWbAv9ImmMuaRaJV1EquGYjbgrvJvnmWOELfVc9dYDDk8C5DMyEFBzXXHMO2noIrKLBbCLvOd6dR8YwaE0nXcb9S67FDCS%2BlOuqPY3YWW%2FDcSHo98incttVJmCk4vGPZlPJ3CZz9gSb4E4bEHztJ1r5rcNsHM6M9jjpMs7WOLzgOFXgrSbZHz9Uq5sffK5bq8aCWIlK%2BNRl7bAZQoRtLvkErGFzw%2FDx%2B%2By1%2F3oi4ifU3KIiC7im%2BDEdXCJQBIO%2F8G6E3a7gdn7XOO5rh4Ca953iIx4bEXl8Kvb9lV2mf%2FU9ZZ%2BcZ2rdC3kywRoMJHbMmeVOy1DifLlML6Q28kGOqUB%2Bt9ZRq1jdjgEevE%2Bdry7NAxY5LKX0O1f3TzQd7xTA96dmnAzWF2xzvCu4lLduKzWZfXoutXVfs6AiDrJqfieDi5I%2FDZTZq2T2yxQmu3G4ZzDDKIQQJWmn%2BxSibkliaw1hpRSLQKve1nbtWtgssWwoo8722Rl4ARC%2FVff%2FHqDP9iG888XCiB%2Fre6kgZ9%2B%2BBCewWNwE3mBeg0FXRJmEy80OVuookYH&X-Amz-Signature=006b39a26e2250ddac3269a263203589b8a20dda0ea4ffe188d38951b18e9fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

