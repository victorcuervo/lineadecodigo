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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6IZTOM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T153114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUkGTATWGd%2FdarqZcTaJegzRmZvoZnEAhAC7xiwHQn%2BAiA43uCck9oi3xpRyKPY%2FVRk1O%2Fi7CbQuHDb%2BbnC11iF2yqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVTBqtN314uVED25sKtwDWXgMPo8utgpBrVAr1U26iImvWHWg3An34tbGV5BkMHA%2BdVTAiuKzLQF2CYAZXOMMaFM%2BqdkgKgpQQrN9ufLvU9OTjaEe%2BfrJTVnNg1uwiVHw2NLYlohik%2BbGOIg4x7f8ixGMRkF54309MqjgimLdSv5Upnl1BLZM%2FSwr3NV3lEn%2FzsboW3HKmHayK%2FMdUFdW5b6hEqm4G2uQNH9Ih%2BofalYPElgh7y8%2FaNUE8xYxO7XbTTj49okhkGR4rg%2BawRlyp083ofioSqhqukh3GRcWJbddOTQXTNXCXB%2B9CkrBWlmUnh5JYhbQ%2FE40gA3%2Bu5Ff8b3s78OcvBfXpo6oSK6AprZpwAIy0D6P4BvrBmzYX0IzE7GvuZgFwcBSie96YmW1P0zaYiMjMlDNGIuKrj5w4Gl82tyjzH%2BJYBwMVejmC2AIcXGt9BaDu4pAQpjYv3fMkpufDveC9iV4aLnYNjiQisIbQRZqh%2B9ipDh5lbuoUJSzeTO6dckSdTPHA41hlepZVLJZ3t%2FxF%2BlUPoNr9udxynEmg68bMDt0wYXLv6zJlHOuDZVfBVDC1XDaDG9D4J0WuwxvsFjZRqYPD%2Fo%2BVALz4Op6CRp8JHLOOqmJom7dc7FBzUwPpIZlQopPjPsw%2Bd3gyQY6pgF0VBKCOsmJSFT48ENJp%2B3MyZGbMLFW4BSg525%2B2mJktF0f9qDAlJxw%2BVQQn%2Fk8oCc0HE9pKJGtp%2FG4mfS1JNrkTCSyK47oonykexmN7SO8vwA%2BCvF%2BD1rPghAp1sh0FqsqKvmz5%2Fu8OIikvXwAEE4HroB%2FzRpObWvseZFQRUQQmPeVsPP6cWDuB0%2FdBklu49Iq%2FHdTZPFw6Gn%2FXOvir0pO4Q5BB%2B4P&X-Amz-Signature=611600ef655232172dd2b6dca67dde0ad0888db861074e47181911368a1e0c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

