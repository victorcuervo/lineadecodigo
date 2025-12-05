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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADURWDR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSKcP2uwYK%2F7LPmM1eIqWKhEGzK8uOtkM9XZoOK8hJyAiEAxTviD5DsZ8KwjB7%2Bg3xf0HTzwinGUYPClGWI8m4YwwUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEQcpJMBhI48ChSK2ircAwp2VDXM40eBkiB6ftAr9RKJ33Hl0irNfa6YipDARyvwawhpbSgqbFvSkDAd6%2F1Fngn8TPtuKaUkEcnXI8gKeCBpVYqQjNJaNBLOAW9bDuFq3m%2BoLTPPbvl80TkQyP0J5R%2BESnTgLustWSt3CryzSwRJYdnUvUcn4nSIPA974g5RqKkOvv%2FgBKarRi3AtHu6U%2Fe02jvLUZzYK0xZqEMWj80jNrWxO7En%2FEmDioO5UMaZuoxqgCvL6gQsASRRgnSjLk7Hkjl4LMKcHn%2BHwRDdBEHOu2WfOM9IjSbTttBeQnyzpiQeR08hLom5GO%2B6BqnAXRLIE7V%2FMZaSgz%2FZpgc3UwSZFa1aK2gLygcNf0DJmQIftQCDMh1%2BYvC5WBgHaFO%2BMQGyZSjwSsWne9%2Fo8iDmaRLulA1xmcousIy7gStArNGRFOC3pjuSR%2BX%2BUa3bqP1KafXCO1OINLGIVdOuraMSqhM0iWtm5VOwJqMcGYzN%2FJBVzg1lmGmEsjKVODtou3f7VIPxUInnfT8raYkpAJtB8371c4XBgGhWfkwjLoncSAs6zO6rKxN8%2BYNKyPucKkLb3jJ%2Fol5ViKybi0pKSzNb3%2FH4x2LTWS9K%2BrpseNduVUqAUQosBJg0ihx6FWKmMKeuyckGOqUB%2FdITUheyxNzaYfW0fqjWq10ElLMkzhPMthNP9DBTMFUBrS7oWNZ0Y8N7D1PC%2F8ibzqI0U9H5OLQ0JDadBKTWw8g2Z572EuoZfFYczio5HPRkTIWfCM%2FQbuwnqraokZn6ZdPEYZxoTo5dvQdHUgeKVIiUXRMrkXtMI7KN2ht1ZZpUgEGtbZPmSQ7axCSbGio08i42eL9VJUKnI%2BAy5fdwU9GQshld&X-Amz-Signature=9eeadf27d1faf87baa79b9e8ac08a3a2fbd7ab363349f0a116ba76224eeb2816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

