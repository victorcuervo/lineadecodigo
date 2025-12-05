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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE3N3JKV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHiRBC05yyn3mCygsfk%2Fz1CCovYWoH5HfR%2FcYwewcLUlAiEA2Gi%2Bue0G0pY1Fr5eO0893fVBP%2BN%2FeDB%2FXFNXN4Hwl1sq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDAQdSJOtAnnlRlkTmircA3OykNr75J%2BV2vlSQ1%2BYuHShrGgdSGXPV9Yapistm6MY4VaDhYM7X7zQaEiCDSK%2F4hmkE8Kccew%2B%2F1Z1ZEW8pZjGQOm5ACfyTgwUy8vHaVc8BJn6ifWL%2FwRLQEi5gNtYkVEsVHgyO32Y78PmG%2FOYRMIs6ZYi61cWqRBOXstCFZ%2BJsPJrSbZpEYBtXMypaaRNkliXvgGc14bk9Ee8QBRm8llku8Dzc82sZln8pNqefNSku8MtOhFPvDObajWC%2FT1ixps%2FoD1VmTZeJsNEF3rUl9uww11tZVcj7VT40%2FslMm3KsLoUXkSoH%2FPYETbn6tUF46zWNySVjHLEof5A8ntnqmreYJTTMfqW%2Fmng0lmzcy6hayaODNWN7omm4dpECE0crKkdXWg%2F%2F8FsyOLktS6ISlIg8qLmVAF%2Bu%2FD4%2B9CyRbhrSS8cSvZ1ppj63u6GTjFB9L42VatDICJPwO2IJqxfL6PKSq5YNZaGHBYwefyatFRGPz6NPVpucVuY%2B8a%2FN6RHC45y6vi80eLtrtS5iG7RLQ0lahRSYKSQP08CqlqSbjRT%2BQiOOhY1%2BO6wxQ7XAKzF3H1J1%2BiwzCzLvncA5ngOYlKAo9YhiG7zhrjLJs70xtZKwSAH8vavXmdbawuSMKDjy8kGOqUBNeDdn6YFNpgpRo%2FzSx7kk794wXxBr7bKvkU5i2L9MnvQOUK8liItbZXDZlztMbqt4rjvU%2Fsyqm3hAE8YWQemRG2s4Zv%2FvUDpG301fskoZL47ItlMgsQBsMjaiIxsrI6M%2BWwqVNri0KVY%2BEfLwgZIVcdJkMx12pGZPyeNQMBVIUuvNnhh2P7C292eiDue6sMSO3D%2FZycvAxZvYbQl%2FhzbQIvj2HhB&X-Amz-Signature=479e876de4073096e6dbd93514c09fb83ec662d0cb11039b8964180b8b71561f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

