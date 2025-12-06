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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5BT74ST%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2ByO2nA9JXH3jXSydLZfPVxBS1kv50ksqWw0ieMMLqGgIgJ4BRkVpml0E9FtQ3o7ap7jyfGHhmy0jy%2F7OXRsMuw7Mq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDD8fcvYKEJVlWF80IyrcA0qWW8yCMfNJC2iUJgc15pUi%2B9cv%2BiPE7Xdl4SrTAyh4ReH2HRSVtUVxRQ5vEPtm3bbvMhjdUoMd1O6jfz2GZ2BQT45HvKULB8Vb7iwy9QfzmAjPMe7jVO6dJxmKgiiIhoYgvykW4OH0xwwXsbV0WTgkjbC4hIlQ681ZDn9bzLhgGkaKfcpj6b8Qb1%2BPASyw7%2FJGQ1W8s3%2F8o3m4kg1ZKC%2BJjR%2BiUoSpg29TpCXpMVEnrZricZLjk2Ctf3FCTqrUeEfOnNocy7di14Ob7DGtCpNc06t4a8u15oV5VfkcJLZ0dWpXOKHVwBT0vKyQhzeaxWvpgAktHuv3DDwWxKsKudTTM0PcaMCH%2BUTruas3qInItG5lYGd1MzhFP5MEFz8cNDCOIA6iOqYFP45m3ij0RDuzDtGEhrWAOUfHS24qhCBB5TyjDkO3PrVgEz5UNE%2BzTkCB03QlJtNRQoen8Cbf6HCR1dzO14LqVEdcr1ZOD1KJo3XMwVyE0trgyU937Bs8WhczEle8N8e6hiyKZBr3A%2Fz45grE%2Bhvz6mQaorJl01m2CjB3JQevfYLWvlVeeLc4GXRntZA0B1A8dHYzSaaL4v1SHAUXScG6ftvZQMAo3vUvybVaPO9p0ihRfshgMLDezskGOqUBYvSJ3W%2FQueYuxQFQblFAa4gRoNGbqMJvKdud1G2mZXr%2BpeurzHJ0gNhYS7yHTOreP8D48RApJ7iJdPDUX%2BGd4hcyg3hJIk3XG0Y7RSuSUArwA3F3SKA3lSPKww%2BLkRp02SJm1XPF%2BLf8mJwSCyvg37AmzuuCRV9l34R2TE%2BpeHz92qaguvv0mg5NrC14q6TVqxNh1lMo%2BAyO%2BJ3oHbCRmxoTm7QC&X-Amz-Signature=3897a7f77dd50afbe6a6c16edbff13d9f77f40fb574b23b09fb100cd2d2a821b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

