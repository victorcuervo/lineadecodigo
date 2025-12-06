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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBA3YJ47%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQYOGItQQZPBdPqs5qRRW%2Fapf440eU%2F7gk8mwiI7n5ywIgO3sJs5Wp79Rdp36sQ1RBd0tJRjh39wDpXLAyhgWAF9Aq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCV7c%2FVLh6Q3U0PEQyrcA8pMlVVUdkP5B7FlyLgjakZiXyERdSyf%2FwypJaM%2FadAsW4j9wNiqMuvGGmgabM8FUt788skk%2FfGUUbGz8nTe2QTMQgb31aoS%2BeBAVdsXQ4Gns%2Ba6B0JGyIkFEFbmFDNgdjDUml9G8bBNdX1VkEfe%2B60WS8KvE1STqzpFdxuoFsIicjTpQQGKHE4DSuQubKnxWQWNtdGFzYf2slpVlIhsxsbybwgao5cQnAdQ%2FOMls86LGum7cts1k5fHLX4lr8U9C6zorEoyb%2FfZQX8S%2BN6ehIbx8Th%2FPoNC4Z6nwkZChzug3N%2BttttabQgtLvvEhHC3ebKMhVVsj3IpWbIJEV8OpISz8CBM1BKhRxNRS%2Bq1%2BDt3Mlz%2FZnpt1YwkUGiJH8S1PBbsxZ8o4bUZwJK0oCmRof6ARys4g8yoZ9HHmczsizrFhOCDBSvOWO%2Bxn7F7oborPu%2FXplyAw%2BdYsvBmHJ4%2FC293sgW4q9PGBugrtAv346lJZyYNAcB6qGcWSPymmrbCMG2vNvkhG5%2BqqBUU9FNvchTMoZ8aGdt87NcjBcOzRznVSWdIrOgRXRhmxYXwZybpWpzxYl3zzSUt24NfZJGmx5H9dNFUUIQmnMWV5SaNZWWlGUpgqx%2FQ8lONuFxxMMnDzskGOqUBOmjQK3HhbS%2BjxTHpfGm%2BuTPNJcr0iao96ysXgnAav4KR1zl2vGqHiYvsLZD2C2PZ39GEUBtruJghHBfFeLjtjwk7ymHyr%2FWtUQVnLQSLR79RKxrr4HHB3pEU1VlOYYL2KvlwS4uZEJHfw8RXSm6JekTBUDpkDtpRG0GO5R1lcREYcdA9K%2BJnIoRvCKMM%2FtpSuYmBT%2F4ezhYY8%2FM3MKzUHzsYjiJh&X-Amz-Signature=e04f453075cd7cec936ee34ee2dffe9ac1646e531c8cbdbfea847dfa45f7eb0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

