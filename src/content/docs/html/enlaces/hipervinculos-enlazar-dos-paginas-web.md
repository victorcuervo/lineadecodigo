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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQFJTCGF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUz%2BTbcbgmnI4HsfkddqZQDbkeQDXv9ffHrN5rryoTrAiAL10PIHNSNfJhs7st9OfDokdSxAHv4%2FrQBw5xqIFjwPiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd3Xfh%2B5v21JCZfRTKtwDSys8rDTX5CxyryTz5vJUOJoaWRWkONjwElc933kVuQFKftJmyotqyQoQKkoZ99ci%2FPf%2B4i3e%2BuEnxwCccjA545I9hMKbQsYJy7SCwe4f0TmWTrAZ%2FhjgTX1SgcnfkK%2FXkFX2GuLjJs29L%2BbKi%2FZPpFIyVGtCxw8ExeaktrUNQt3CieNpsYLLt1P6nWPd2UQH0wkPepnp8III6Da93hlyhqVSkSwIwcT5VwCA%2F4vKV%2BqMIoYRSkGLZG22m3BJzVOfUaYyadUaeToufq1Czr7fo0Yan4%2FKoOsr5%2F6uoCVQ%2FpOJzMAxjx5APc16euVKI3DrtJqYF52REdgR6K9Lv5hHbWCzu65BowNZY8LmX21NgUc2aLO3ADNMZVcjyBlyFVhYlI3uGtZ8jfnbGx%2FfJoqcEvymiyGqO2wEy2eAmUm%2BuZOBoc2q7naRS0o9PE%2BdXsjh3BsQwy4KFj1FBIfz3Pg3qhg5lpRntoecLRm5F3JB1EWz6%2BsaRCO3poORwHRsTR0O9OEIZfK1zVW7qt1QS8nvur7XUMUZbIupjS%2FikRrEkoxLEib%2FrlWB8V3UIkRPvJ06eTKDdymx2JxU1xv6pX%2FrfMI7JYn7HRnE4q7LbOqB7K%2BuVA1MaFJ1IUQxGmQw7sbXyQY6pgGKSxXFnewLgcWJddiMMPPs5GPUBUNOI6UTkb6XwyzIZcB3IerfoSLIv2QcgOg5k76JbNXqfe8GzuYm%2FqWEnE06YYsoipQKGJu1XE4T4CRrqNbEync5lpnaVMKIrgFHnZnXKkmmAGa7WvsVKuRTyeNlviqIUsesrbCdRUlqak87wjjDblnzajG9rOvGn%2Bxfdi65TK1jW13gQgCjMr07DImGFKf%2BMtoZ&X-Amz-Signature=bfc2ca142ccb817151210cb7c0e9fa663f5098bb3879c8d83f56794a572f60b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

