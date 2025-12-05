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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BBLQ75T%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk1TmWQYg9B8KcWbUixr%2FwLKTL3UyZwrMCFp10dmBBmgIgIcRdvmhut7qr3P4Yy72iYH5Q3im3i8iL8iaBR42l2R0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCcfDRiXOrd%2BEqCZBSrcA9XuSjBQ1J6vlwhnojUuy2i%2FHWXL6Q%2FnZ7cJlvnbwzOMBMgGBXxQdxWapDeQZqCpGCD1fQZV7i887BOHotdnWKcn9s7KKxvtz5P46ITYoGDbKDi7CJP4d9bq0M6KwSnkOeQ%2FqpABjYDBfg4B%2BPdvlCqvAPOVaHvXpROB6ELR5xUYHq8r1He5PPxcx41DT41nUJxAPwBxOary7UxToWILZlmVYhfY%2Fq7WjPDiELT4q%2BZri2hE4U8qPX2gJHqxfSMQMOtWsAzw%2B%2FrnMk2wPItOhvGVj9174Z77OPjVPccHU2f2wifGCytzMuh%2FsRFRVlsqow6d%2BdIHqIfmLu7XZN8mhXciXe%2FP2m%2FZDDrlwX3DbeUyMNeYEqCuv1mtyH64M5ZUiJxhYOtfToAvd7wEUegfMd%2B9%2BshbaJLajfdMqW%2BP5VtuGfl0keq6OVs%2FfhXkXqtJepAW%2FFpvu3u9%2BNmUneijGcRzoZbmpGYh%2BPprbvOjdzXGUx9gn33qJelfIssENhh5%2FmKWvlgwDMuIRpjDU27ZJGpptfVWI5gHnTKHmE2SwjZXARqClTpxEGYOralx5C%2BsasYmKVBqjHsDHdstG2qSiXb0pxShUt09cF5sqDuFAVphHkOCHwbyX2OoAKx2MISMyMkGOqUB6hjFzYjAAMakjW%2FNDShK33VHLeRJCAtSCasOigczifky9MNMwIkvh6MmNGHt92xluddzYgisrdxmM5PoyklTjS9bh4rTKF%2F2LO9zxKY4Z3xaNlaTiRMEvTECZk0F7c%2Flu%2B%2BWXtj76eCII8SyCwTBVox4PYmXNgMj3LiZEpBJapG85hhdyvMeEF79Uj%2B9FzJw1Q9ZIPXogeRj5K2FoIX3xLQB5YwD&X-Amz-Signature=1a7e3b7750ab50add1ef47a2137471d26600f2306de9bebc5713d64cd8ac5607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

