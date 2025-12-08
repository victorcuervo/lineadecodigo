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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOBIOI57%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXqc2ytpqfdKCA8yowzK1beZsHJovnfiwIiRV5bv5pYAiEA3MZUTjb1J%2F%2Fid4%2FLtoIeQk0YE7j5Ci8P4pT52tbnKUQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNN%2BIyr44nB8nkekwyrcAwcnjI4I7TH%2BptWC3AXtceFwRqTPJF7MDSehCWXMeAXERBOkYy%2FUbt0IxxI6cVDQ8SEEVfdiABxIIkxMYz%2FFJWmx6Fsu50bcWk3lf3zHfNiRpwnDLRN%2FC4PDOZEBdMJhZqdYc9OpRr9aHSgwFmUYbhqmjI2nhSVkVjDP015L3CGylmKrewJUrxsxKIeA%2FlmmEaGPB0Bxw1%2F6YvDfag1AqDyEh2jUsda3A7LN%2BDldKtYOug8eSDjG5ozme9inUlvZ1gsCMQ8n8ci9p5lkoWMScvPs4HVB%2FtA39z0P8q3jH3Q%2Ffx7XJdfG2tfute9g9deD36tZtdFGea3cALVLJuJYp1vA672ZEGOxMjYkLwxEOrlzXlMo4TW31ZMzpCJHVR97SNouvIgwp8iWqM98dmAgG6bjWUU1Bp4OZtlLo8Y5SVuL6NMkrVHf%2FJ2bo6KfosGw13vbXVEsrGmakMcqT%2BtxWyUmOnmCY%2B1Y6HtOa7geo7YHtOy%2BTtbRrfvkioj4061l4%2FBDTNK80lqYE%2F4pokwcWQkSbiEDLR8i0ZRamCh2xLrO69LsBrE7KoKKdlVcrHsRbQtnS0iz3cbqX9zRmnnwu7%2F1RNI2wn74X2FlTPfyIDPahU1udVR45W67KynuMPGz2ckGOqUBXqq7WuKNJ5zaunRRmk7ye%2B6l3jANZoFTopJdnwNAOvC80tnMqTOv9t1kXTEjRLcnxnwI6XOD79kt1Yn8x7%2FInUZkJus58vp3198jeU%2BbSCDoMb3HYOQOP%2F4XGMBTsKPaWpgUllydaU073SQwN%2FqK4WEulndtE%2B4zhOhXIVpHRG2g8K4D1%2Fk9PZBXjM2%2FpYhLQ2h4NsciC7aMWJqUyxVOxomsiEoj&X-Amz-Signature=ae5e33f29b6e42dffb9132045593eedfc29efa3abdece39d59aee97923088d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

