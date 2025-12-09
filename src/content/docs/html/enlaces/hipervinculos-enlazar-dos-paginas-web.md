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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B2UDM3M%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T161910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5LEqGKzDZ6hYONil%2BVyF7OyGNZWsusJfxXSZywihM3AiBlcEob0XPEzhkKGbBm6cWOpnllAf1v1%2FWXzN5PcC7cESqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FLKCsJ%2FOiHje%2B9tIKtwDG5lmH1ehnvvWXJqXp1uwh8kOqTAdeJlEF3I8rmihjtY4YFbRS0fsy%2BFq38OIDUcCW4jxBKuWoX%2FOiyw3Qw4njn6yyTCkkTsz1NguBIrrWtgERzSG%2FRWRnVlAedBNJeWH1cZn2EefzgLcljtdjTSa0bG5MaGXkp5%2Fmxbybr5dMCVOmMucgwXtJzOy6rtPwnpbEX3bia8rqlIP%2FTjiq1EIYOa9Wh5myOu8DDuwSRj54VSpbCUPi9SDF5N7U6UhE5YI3jHPNVUwO1cDI%2FJIWH%2F9YOmdCQKklSrs%2BywkFon5W%2Ft7K8V4GGiN9yThcd2SqyDNsl2HpK8NhyFUyStT45Dt3KI9eG0fVmxLc4uESPgBcQHlQabsg6y4kGWupgLm%2B5DhMmsazs0m7Yj2pKHQocsAY7sKu3pptblolXrBeuyXKCcM42wruzxiJNI1ppu9mTvPpQXBEHAbiuqMoTIGlpY14RPSH8E0BuE13EcjA8zWcGem4cqQlQ97OQpekBC1JBH5m1y1c1AcwH8sAzUS6c1viyEcAmBF0Qi1X8QrY0qbyrwj4zpojtbjLjFBC4w5qAHFqtYWsoqQ%2Fm17Uyn5Lg%2FxKXaj9KtbDsQ7Xz9Hec5k7t2VJRr79xG3u3ypFPAw9ZbhyQY6pgEnA4MM6Xbi5ey6Soc6oUJwZdkLBG93Phfmjli7GPIDZKzkMoinxi1qHdSzlnaOq8%2BuBIjQybmXmEzpBK7%2B2ioRLBl5zASlDHjHeGQg1riolMRk7nOwY0e%2BYfRt7ESbuD3INN2ydeaXPtlZOHEzXa%2FBF3jyce4tIuyYagVCjLzUErLlFjJVitbYyaKA9qLhARmfctdcHaFMI5WubdKAe0uTC97HRD29&X-Amz-Signature=46dc9fdc10489d27a4468160940add65155c2673b7d13b47448c9081dc5dba7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

