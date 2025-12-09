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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FT4ZXM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T223105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4e%2FLprgEIXAdjRbpnDQ8JPl1hpMXluYCQw5WGZE%2BWsAiEAodokM6viesdjRoiF4DX%2Fjq1UqTX3hUH%2FSZIFPOPQlOMqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGaAa9GdlimMq1lASrcA2FQuU2cLiuvE0nIG6EAJOHauVQxs9ZHFmupsi0yxAN6EAADWXTZ5l%2FktKqohfqcWsrEagWviIX4oVA%2FkMsoMC2rHbPP3YZLNzLiFQCcOotLwK8krJyi5CG%2BMBwWeuVC2bg15wCGVUOieC6034K%2FsL5cMkqwvkqMpr%2FU%2F1fXok2LHgD5soImGz4o63j6JpMtB8XgoNcm0PG%2BuQy8vzFiOrQoUo6xwd8Q4c5M8ZloBMCjM4AN2J%2BqRsWqjv00Hh%2BQrhcN3JeBdJaixaHjL32MlSUZ4qMe5YR8OtjWeMp7waO0sd%2By%2FNx%2B97uzfZA6W9nKWuCZZOWEW9nly6r7qycRFyZ5k9CDK0oRcG83wdjQAYJGDHQYitZAOL50Lkfl%2Fk7MVY3jOg59utNS0D84tMOao8upqQ5L7M%2FM8ZdEj4bgCyk4CzKSqbwLIJEAIep9fgWYwoWs9n1cJ4vPP%2Bau2cVsHdd1CCDO8e2rge%2FStDuSm3KpH14bJbdDAdJLSizM9WJmVv45c4XkMYJ4B8D4ZCxiwY%2B%2F1SQbgditcsIsKTFsTM23dy8YFAw9i3Y%2BwvWmP5hc9ggh%2FpJRG1pgFknJHDtlsOEkPkMo1GLR%2BUEdjZDi7l4UGpWaFD91k49V%2F3%2BkMNbD4skGOqUBGiqWT5TwEVm%2FCWPCdl6k0RYyu6WNrzJynlXyrMoOKU0MvGXh26q1KEPZPjSnQqYF8lBZXZrrEoWOlIMgMAfvc3xReE16FQfBWeo%2B5xAqo3W1KVhD1EBuToHG4PhoUzvfE%2BkaOTsTzsONhX%2FC9HJHrufBqwZEsyRpdA7%2FBvTK8FNAIgdnSTSa%2BOBARAVjFMinB3BbFkMUgG5%2FlIYJQqV4UwkDg0qT&X-Amz-Signature=a5b0eff59cfe902376f1be534660921131521426e570d9e09bc326409f64f92a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

