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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672NJKJ4L%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T090555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrd%2FumKaGaFTTAXDjPvRLli%2FxkY3o5n8IBHLcAswy%2BcAiEAoMMrAEhAxN8twZP%2B7ABwnZ7rJwFqjqTY40O2NI4LmS8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUoZy90wgE1C7TsFyrcA5Kwv5V4Cl6uEd2W3a%2FdB9APNlMkBWRefS%2BnyCAai7LXNfTfntVjkD2X4%2FGz6g%2FTRgeekztltmZzyY7jKdFi5eBiYtz7N41hkQfipGQ4MLTHcUJfIK%2FkqIL89IF99lHYQCl575EUg5xbaPWZwsn6Fso0JPTv9u6iV5QKbWw937m63L%2FIpjr%2FuSa1ddzdBiCBCHX9hnVZJaEMJdIx%2BYycdRC6O4SGeBVVMUXy2F8hqMq2HzM%2F3KuH4X2O0erWtJ6UGr25U9wWP94u63zjbaEAE7cMAUM92ktglPlNIsMKqgLSTfZxNcrOZJYsDkhGYJdgqqKydeUadxGjzH8DfCj%2BTzexn%2FttO%2B69oDb%2F71v3RQU00jwj3OSIYeUtLBEmyvOq1Owz6c%2FLQbojNbfKYVRXXDFFJgrsxRolbxEhr1iyZVndj1yT5d5lyrozYuH%2FkuOKwPMoMFQ6CIQQ12NuoDsZefCrijReP9GdUsNRYX4ukNDhnIvBHs4tRT1nMGur3sasG4ntriGEl1J7gVMpWGX6%2BUcOCxLgwzkJaL7UZeyfbwt%2BQzyVoR%2FDcVRN1xFCrPdo8LdaY%2BTfPCIy99UJ6dviqXoumozsMYquSjF79AY7jEi1F6QLRlVoBflNz1G5MMqY1MkGOqUBpeXD9rbS0oqeqARzZKplpidsjhDELH48mLWPis0q0JqaH7EqWKJCVXRJlV7Kp9vQ1rcrqttsnMfUASEglPnNAq6S3yyUvfrIyL3UORVPPkXswHbyfAUki%2FzNLfa1c1CigvThS%2BLecgGKqF4IcNxkpULBLx2KFPFUQXGCAHWiuLHfhn57SSb%2FpktUBXy3qndl%2BaBn65Z8EmaMg4p8btHCx6lsil6Q&X-Amz-Signature=0aa3e5eae69291703e214bd5aa5201381f21cc18d844cfde59c804a75316a0bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

