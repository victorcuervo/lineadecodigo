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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSVEMMIU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMGMonG2z8mjHkHwiZr2XEBCoXzeHERAMxgnQi1nwKiAiEA9%2FKfX6TIXMv5JTcAQvh6NTPkLK7XLfDYzSzNgxTz26oqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVzwGDJLpZ%2Fqxi5BCrcA41Joh0XhFbjU3Gn3Ch0guL%2FgFMhJLNolDIgnnSUTxWEImvOtlHzIbh7QcfxU%2FBfrgYo6I5JgVIgQdfUALp%2FuhNcIqpYrEnWyv3nONbWMMBNu0YC2JAN4Ddwt7hDQi8z5GhoU7Z77GeBmzsBP4Nerq6XvRKu4hDzLNB1Ae6Cf%2BnkK%2F3m4q4d3Hu29nFJ47RAyZx1qC4glRWlC3AfRKDaNSLTobfAIr8lKIYQyEFYEODUHdiAs6R9howmqJsi2kclVF0acxRqdemURg7agUAJPGyWmtmiy3hQr0z7ZnGDvHG63bCkdhEv06LyseDlenzdcHWigxBn5HzCnhSO1lTpJ6D4PYdjZrgNRMkIlxNv5Qezm5ZWIYwhe4JrURoTfKCJ32J5C%2B1rMPaGyeEHbSJl29M5M8Zk2%2BYOeeBdTawy67WRTX%2Fyh%2BEua4pjogClrUe7LFLF07GA3lKAGPovntHkm9b%2BY5tOXYyOtIcr5ivKB%2BKAsRdwoowEYvJVj9MzaYapMqhcRHDsr5kGWjRBHX5saj7In39Bvvr7%2BZp86888DZPKUo%2FBOndcXQu%2FiGiMYrNeiY%2BYKA5d7mm1K9KO9Emsu1axBFyzpb3MW5N5Ie7uyxlTpB%2BafqF9dvOLGagUMKiU2ckGOqUBN3ZcVbehKzvebjwzLZl8Mz5%2Bo%2FgcqVyMn1rLqAEO9KlAg8HgoLa%2F9xewXwavxefGitcdO%2BeoIlT7ds4AAWXUkylC0DFuG4TbnIiN4ElP6sj4Us1MxrLLpjY%2Ffk2SOeJ2XQCneDce5xyGoHAzZaAOf2NLu918mhhWJb2BcD4hfAkgsyZeH1jxPJAvujbb%2F8mrjiy5pm9GHgnisSoYpTW%2BtZdlchOc&X-Amz-Signature=5b2e611f814895a20f890625f81d73e2eb996856ea0d359c616afcdeaa40d217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

