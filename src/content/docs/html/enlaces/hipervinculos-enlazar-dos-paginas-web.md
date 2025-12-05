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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633DW2FN2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmgrhx8VQIShcoNyK28SH2KjE1K3wvDDYf%2FkeXZyFUvAiEAkRE2v0a5cJJSAXNw6uFrCZDg%2BgpTYGy6zFNu2xN73lMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKfq0uXL%2FBdCQZFW6yrcA16x7Fw0g%2BH8Nzo3hZl9X0vBewA4d%2FNQ1LuEzkix5eSod2Pjul3oF7I1eqDU82HG3ZAdzYIapBn%2B83qNEis%2Bx66h8C%2FQx3s2t9I7oBzc4dxPbCyZNHGTDYAsJN2k%2B2R460ndlrlafaSuta0NzLqOLqFSRYZpzxCqwXu0zeYl3NgGRySg5Mdjgte%2B0u9i5ctnJoS%2FZQdnojiK0EgFQV7JENkKd8H0%2FBFMG8VUEfNzKu4IH7HbnULak4jbSuHQ%2BJpWnZXScg2K9hBffeya%2FddVHFHfBN8cuuq6MW5UUOf%2B9q7R4yTTBhI4Eu%2FQkEOZi0j0%2BIUuFGF6JkUJ7ueINoU7v9yBgQkUQIiEE7gCoxgL2GuK2e5xNcyXjX18ivgVGPOBg9DhUcRuTrWQh%2Ftb2ZcuVMQ57fr3ipbnzJLQxnhdg7dQHj2s7d0HF5cDzzfdj0FvQIdKiGSifivEu4%2B21VCglv7xQ26Jx%2BVMeFZLKazMeHQOz3epAi6J%2FZkB7OMjzZqtRbzmMNmNMLjUPrzH3KJ17fRSMCpFc73eoDyAeDsc0mU0DMMBDGHJnjBUW7JSUplIQIEKaGpCwZpEPsp1GFRMo3js%2FDNaMqXHgEp%2BuMgxOPyvOTN8UDslIL%2BY4abnMMX2y8kGOqUBsK9m4VoBY2EgP1K77xghb88uGlMXNRAEasrrKBNDqx%2FLyX5my0bTdibwzsRv3NcDenCF%2F0JCZ3VhduwjtjxPscUiiQE6FXE4rFK5TtxDYwjLnpMyD5tgMXBP2Uxa2gf%2BULfry%2F9GKTw4Lk5TmomCwRa%2BtdnGE2fnPcItusyEIcx356Dti7T7yXPcamVfRbzzQutF4rTx534Cg7IF5HFUklsoqAJ1&X-Amz-Signature=13474168cb3200e6151fa430ac700746bd4ad626354169e59c04fa5be2bbf6bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

