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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7OCIL46%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T222949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7eGBb5GT75Y2dfPIbTSUH3FwCMxfgz4QF14RK1wLKXwIgUzmnWgsnNEDeaQ%2Bi9eihun8dCSspcrIaDtWmHPKUvKcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEa4ez6dUFrBK1W7GyrcA26tDqSQBC0vGUk1OXn%2B%2FJFYJUAStRRvn1hSuaOXgMd6WrMrqlsr9z9AEE7O%2B7YLo79sA9hyUQgLsuKV9CtsNscPVgQP%2Bg0gtx7gagnN3oh%2FJ24lz%2FQEkHRBIpyFhn2NbErqGUD9dD260SC0cM9tt4s6bNnbzt5kLprJ2wi0dS%2BnJ0VHV%2BO%2BeP3U7pQxoK6Dgvktxw9QAsd9es0fqg9ok4nD2pbQlVhouxcFCh5kYkmUG%2FNlfd2GcK77Vjor2WGnfxwFxnjW2P1KLxDNAuBKNNN7rW3JTfJN6IvW%2BuSJ5klSXAmjdg%2B2OGemuh9dOWKbZfMSZAIzq7z%2FBdj1F4B5Q3klvwkLBn0Gc2dw%2ByEVvQJRi7sJEHbp3uXzy02q01Tq%2BQggQ50vFHKDJ2JQtIgve4P5VlxhE%2BrpDpXF%2Bkto9P15ZE0Ra26ZhFuh1IgOqvtYOX4vfJgIvKmXaaQlDKcQIbP6IpHRJ2kWwwT%2BttMPUP1j5SLCI1FKYPzQk2JxNzfDXa8PAK2ZpsAMFqTVDqC5dGmSNdmKB80lHMeGfjcw8M2oSjscLwc6n9jc0XisfIICY%2FJFZROIFWUJ8taLZKjx4gsnUB45uLj%2BeTAySrNHKbwBIS2YW8U3AcwxkoyKMJeKzckGOqUBHj1pSnRmdNsI07eF667vy25c%2BMgWL9aUtkSqdF4UXvU%2BJNg8ICL6JlHuOh6TAKU4M24omohAq6c3DIz%2BI9isyROTNih1aPcE0CMTEpo35xp7294d%2FmjwcCE05FMlyHFpfNAn%2FfdG%2BpoXpgvaxzbA%2BLaauW6IZqzTqFjALW9%2BQJ%2BvrfcPmtXvSTxxsh3%2FMGjeJzTVqogfZL8yae89rF5I%2Bo9ryP8j&X-Amz-Signature=cf573c8706b314fe4ba48ddc9e8fa20ed5b3039f7adc349a330a0e474e0e24ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

