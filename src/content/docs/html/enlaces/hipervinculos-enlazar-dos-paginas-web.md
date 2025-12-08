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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUAGBAKT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDjtTzjrGxB06u9rdsAkwK2OCzB54LYeDKmPIBhVxXdAiEAp80%2BiR5yhbj6TSTS7N9jNvgbjeUSGNo11J3Yo22FV0UqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeUeEre1d8XeL1HtSrcA03eCcnE9KZvr3G3ywDZIVlTsFmamRQXz4DvlKrQARPrH%2FvuKoG%2Bemn5yPAFGIcyklYC6bM42le1HbypxnZGGAH1TMVSvMUTcSXWkHDXQInUNMDBGiE78EtAkbjUX7yiGwBB%2B6fo2ODquZNdEeQtJccHN4a3uOLMlMbj7hkvuqx7NjvfTqTf3%2FKVlMdtqZWa2sCLta1AyjMHaanMfTpVEB778Z7bFhKLsfR4K6w%2Fsd9rchMwTuReNWX1vgTSM0EOqR5c77LF3VVGRHtvoGCEgyt4J5oQIJnl3%2BXpoe3zNK25%2BpF88ccMmKzeZVapcrZKEP0dh3pgpUzHCwAYqfPuWA1NbL2m3ytwrbB7JDSYJvwAoO1kH5uLsxt2L4JmMED%2FXNwfVLJjW5nFMCwoVqINiPqKGluHPXeoHKPXT2RpQyh%2BTr%2BXol%2B2AtHwcq6utubC4UCufR38tO99povPe5k60fIuXOEmxpeCmZuOHHif%2ByJtDoM6o%2BRWJybpwQSXJRX%2F6Fg%2BBHZvMhomvj9KEacOywjDJlzCtpbeSsJ5OBudcJOFImzD8Ojyt0PPqXSl14evJTQ3kyzHVyCLuDKEdApH42HPRRcjjC4C482iLtHLF9B1x2RCU42W0B8Pqb8rMLrk28kGOqUByJtJGjdqeXOwUl%2Bbg1%2BsBOoBVkOfcGkncVOvHWaQsyfKZiZLmqGwCA%2F%2BvQceloGdms3uRCGyOvV2dPoEFXxGg%2FtreaZYl%2BAuXQisbBenRk3NUN9ITLayv3RNcIXXfLSPFlRDYimqmd5KoWFh2Exn3tzqgh6AMDjbDuqp%2Bx3D8NMkHlILAyU68M34z5LnL7vEke%2BZ54gN5e0PupEsCrkPRkTXIMPX&X-Amz-Signature=2e29f69df87d060ed5c8520abb09ced6e5fc1af006d1a27262ab75916ee3f218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

