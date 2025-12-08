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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ2ZPTND%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T081425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcEb5%2FV%2B1U06Hwj5r9Z77D9ue0BF10QYI3jgdsVJkFOAiEAtLsX8kcpB3jq2Nepmt0AddFpdH%2B717Tu5AZdYpdTWt0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6PeT%2FVaNEzwNn4wCrcA6IfO1jLvBkE7wiHj7wULjeLmAyVQmOOwAQHRvgJeieie7m3sJRZ4ed1D9V%2B%2FBt4vnhy%2BIIzxvWH3zWfemdFsL%2FlcSBvh80lbHvGB%2BPcAch4bGfiE3gscFResAzXELScRLEzkTl5ka80YQ3KOZVcd2KCOMXKIbPnn5wTKKBFjI37J4ylz45dTdI8%2BSAZxWfO9kV7dmUm2u%2F%2BKx6mbtFeH0SffGQTspgoxaMoqqEu43h4j0tQcxpLZfixU3vGwe0jOk1v8bPZakfIJt5yE2M2pGWK%2BIB7%2BF5UARrBv8n234gYkYN33n7cMgTKD7%2FciJOq%2FlsNkSYIhZ7WUAHBFIxpy%2F1Ic12wgIAZYUgoagqU6HzXhEnbOE%2BuPh3htyXLVpnhccPsbZg%2Br6YAujwxUNn05an7ICuzAuJxSlnNAlHZiR6L5YxN8lyVX3PttTF%2BIfgstbKuMxsCYy1gSR6PYtgQiFvFT2uTc7O0v6hiCMd7c88OBig%2BgtwcfQ4eNWGMKXBbeHY7n%2Fb0PNCl3qpanZY9%2BJyibrjY5fWiceNlnTkVhCCUeKjAlyaBKDHshb3OvPK7kvchuLISbNhrCXADOjFhR1EWBf0CHlFCnIVhtkCbX0uLN9BSXEpSid%2FfBTTbMJnt2ckGOqUB2FWup9JTwBCxPMiMRJt4YjXbFSCBzzdUWIBbLysKLPGS7wTg0hDQofXbtilTt4bjJ1g2g4qmrkyiQ8UciL%2Fqy35u9K3oIrvvdrrcb8zmQpbwwQ5fdCf%2BBsmVWRz0ZpGBm1%2BYDnlbNRSeTgyEFx%2Bcf%2BCMyJac5s%2FLI4XoRf7ok7c1CUBRFr8FadLREdBxnXedbEPPVC8nMUVcLhRpUewvIHtY%2FJMm&X-Amz-Signature=5e9cd0a2f7bc11a041d68011191a7790e1fd08fd37af50105da1998e27a0cf1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

