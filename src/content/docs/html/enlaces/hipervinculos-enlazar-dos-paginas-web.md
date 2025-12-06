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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I4TI4TE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXQ4eoei0HiMhNSH2Qm7otdwlIZ9ULn3vtgl9FP0Rx3wIhALu%2FhL2s0dm5I2ilUV7TKijSKqc0ds5FlZfDYr6bZde%2BKv8DCHoQABoMNjM3NDIzMTgzODA1IgyrHgnuVLqtHwpYDiEq3ANAdKqdeNMyWm8YY0Asp4quVZCmwVwbk0TgZvzDK67G3OAcCigCiGzXz9hqY2%2F%2BbpvRsj8Xs1tq0ZrVqJv%2FT02qEq6nGDfigGuDO0q8nKQhPV2pSJbJwxJEO5qLBA65TcXl6pojVxZX8l3HghX6wnSNIsRkQZuSbqCSha1S%2B4Mtv35fZCFUaQG5eCYREjDEsdCl%2B0onUri9x0nm1jZ92Se3AeKe2o005dOAHZsPqeRDUFKOHd7SZZBNL1H%2B%2Bw3SiPTLztc4qX%2F5I2Ot0n3o4p0KBvGzaIpJAW%2FRb0eO1Ar%2BgMG7UQplLF3Tw4vk1DOL0BN2c%2Fax%2BAHsLDxDAbZoiRk%2FOkkDTK7rlEgZWgjAoYusCtr7WowghBYglYHulrFxGz1loE8%2FYH68oOJywoVRqaswjbbCNu6FFsZMbGrkA7Bs5gRK8xTqoUaHmini9DnsfwI5yaCZ0bX00FAp%2F5VdgRqH%2FEHF1IQ9xx1aJmLVs6BYkVAyTNi2aL5gbcDip6enDdM2qqU9Y73rrSEmm2GNbpEfYrCtQ7vxnECZ5dyHJLPMi%2FFP3trL87xQFPt7ghiIx%2BKVNQkz2aoXki6068iIUY9POJBX5rTfY%2BVdRJ%2BK3ddyTPJvPuplCaFy5Tki%2BjCLytHJBjqkAQn2YFxt853JRiWsbsFxPfSnOxGQP%2BS5GphDJZT9z7Ee%2BMe%2FbTH%2FX8r%2BpfJszfBJdPB3fDz9lEyq4MzjBbdBg8XyJIwqh7O5tTTQa8C67wGSj3thSb3I3uA5jRSwWVTEjg3NHdnVvkroprLO8t48O3UGYuBfkTHFxg%2FSXpdezndoK9bs88bqWwSpGaRxcSrTCKZh42oTLUfpH9y%2FZiGliQyF4JP9&X-Amz-Signature=b9f0faa6c74401ee31ec5ed158e4bb7d344714d8b1c3de9f2b80ac1c72fb85f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

