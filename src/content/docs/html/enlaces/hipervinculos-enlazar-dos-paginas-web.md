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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS6JM2X4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T201823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAlsToUBHQ9Lt2tk7wZLbuBJNIifsEtukkdpG4aKcLFAiEAqJGdKyTw4eoFmgDeITUOpeLNglfMzqHb%2BLVcuPHzdaYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9xskpBs%2B%2BWtUIPTyrcA2T0CCqzaNTcnfaNVcJ%2FhHBc6WpGJRD30OsCKHeAtPa%2FsXc2cVrBed%2BAuBE0H%2BFe5Jg8NzjkEy1yV2Xn07AxtixWMnoIww3o9Sw1H%2FSc%2BwD5U%2Fgbk8gOO5c6fS5aaQW7qVdQneRaqHe8iGxT25M3C3QfzEyaC3VrV0AayPYgT1POiWTuBXT8G18il7nLo4gx9zfgIQm8kkehSEkFBc4ql%2BeoGK7ByX32R5JaLQMtHJOXE18Qm3ZkmexZih%2FzTgvKzWJb1OvAr9ngbuMyjbFKtbfFtExmpaX5vT9NJC%2B4VqzDv%2BwTMfp%2FNYZvBoDBpeEeDM76IuV3gG6g%2FzLX54%2FUeq1X%2BG0FZNMRDeNG2BHZMyIx5SQBqy5DUZHxdf7l3yVAUaxwh4tzZOKNYEYl2vnck301xsEycHIwD4mW0M64iDJwEDM36A5qahrCOMvazafC8y8DMw5CClxut2GSBb5TK6qllO%2BvboerVecv%2Fp7rL9hktMAum8bnRoCDcYXhygE07EqNDS1zafVjvf%2BXGFaa0U5jsXxS%2BKbOd6lsI4sWhRkR7DBK97HxHMmgg%2BuU3bIZwGkJ9JtmBHU%2FllLt823NgVYnAMYwUbBvXEHB3rlQywuv63EKTaK8DVpn0DA2MOb%2B4ckGOqUBVR3Nyg%2ByCZ1M22Yt2hgzPQUpkJQkJ5BtHHc8vIWkyHdsB5FytTHwUAestHImaYeSYhnF%2B4rXy%2BfLt7WSLJuGrvz4fMAx80sPPMu7QpuN0qHLq8BVIjkkmaTN8H%2FfzVCY3wQmmBzcEp4GonTlF46vfBn0fvWZarPpyoP3Oi6jBT7Jhc2aOgOUCqRD8qkZBcU7xGGnL2ffgmLqSupOu4buyitVS5%2FB&X-Amz-Signature=72fdccaa3e34e3b3b55de801a608891c88207d414b4a0fe283ea2eca4124cf68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

