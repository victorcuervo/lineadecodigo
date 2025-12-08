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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRWVNVEP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt%2Fl3jnBvK%2ByxWAts7Vl7GRIpEE7pMhfWarTRHnWnoMAiAEf%2B9OC1N%2FhVcM%2BT9kWmGedKDp0Rsz8%2FNFx9TygGAOICqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSGQI3tsPmhULOPoSKtwDHAG6YdS1msNszen1ZSZJakC8qPPjTVSOIK%2FXC0jUAcbHKp0UQOjQYxdEoFzaCvY7%2F8zq6XEqLYYhOVmgAxOqZSqytjrknO1u9DMPAOCTmBbJQAusyQEd4ajlXoBw0jTJ1O%2B%2B5Ee13KCMPS1l%2BkY7Z07UxF2RYd4LGyNhkWzHGpRtg9AdA%2FRO4X1rt7nrmrpV1IGNu3g4frntc0KJFUt73dUMd%2F0hZ0wFPxQdW7gyc7KkRanKeYm6cp%2BSOGAle2PA%2Bx%2FPSOH4%2FqVAh3pmBACqaZ3L2I5RYZGtYDtsUAxHaRunlYl76qK99tsOFFunpfwEvSXz%2FFA2N%2FqzZCoRYQLvtVatlRRn63zdjSSkAu%2BGFDhPS%2FQyvbq8x62kuD3dTwro8RNyXwmo3bTaJZJnoqqaq4fY1Og5MfSSoBDPnXdc%2BatpElzdazSpbcMFfe6uKorApdL5YQP3i43joqWf5I3ZmWtPtx9OVhvDqkWwhcv8n2tjQhlO8AJhaJhioMmW09qco5zKVzzyso78WJazEYjf9p5s%2FGNFoxbWp0JFCPyLiHhGAGBlpfQk9AD5iy4MyqiA6MhrcfBtoEtxURxkjm13EEOZzmsZLfeQZBxHJPNL%2Fcqud0sRkjXTstKfOSswo9DZyQY6pgEeQsk7tfDn9oiPiqngGESLtypg0fZ%2Fkte1TWZR2M6yrTaIXBfWksxtdESeI5ajx6%2Ffxt6aRw2k2vZlVgP1Vn47ji07yBsmgA8cHVoTQIQk2CPxStKv8Znf8zOeB7NOC1ewrigvFwPmRAvkG6dqaxz2lf97ae5iVRtusOEJvhc1NkD%2FXxL4sc7iiGdGgG7KbXkzmkc85SXgaLaJncShCsu4%2F5oPIbpf&X-Amz-Signature=12e5c5c5927049352017333ef546cace03b42ca5f183a703592b30fa44c007d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

