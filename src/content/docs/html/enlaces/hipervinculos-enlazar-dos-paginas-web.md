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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5EMDYNL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T101641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3ZcLizovLOdFNu4x%2BP%2FCag%2BWNglbUxAULrPl95jAVJQIgHxvqlhPQ3W%2FNYV4s%2BLpDrXX3y%2B5hlwRuLJ6mibmwbQ8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBqLTn%2F2hC3l7KXImSrcAzYJEJpzPuTfZD32q3vEGJz0rToYlF3LkynRLlto0a6lpyRGxgG1%2FWYVgW3DTl%2BWr2DUrVtEJnfgTMrGXgDgaE9H%2BrdmGgjfg9qP13Ert67v75bB71b3m3tTd5VtzHUSIjGWVwk6LHLbo0OvEKNfxvmcB%2FaoJ%2BJ%2F9LCNsUFnLJB22404k5JYZaqwymgrWuQWgmca8GQcraAdyn3Of4ILku32zywhooc27RGHieve7brpOH9ttZmxR9LZho6%2FrgYyI2jMbBYN9FFvTUqtRIqTuchJ5IM7tIkeVCsHwExALKT2aKwCPDo0nTmD3MNeBSmb3qz1fbX61NrKUnjO43dHrWS5NFbHLaw0B21J2BReD%2BICKG4nbP98JaTuPnKmira5tu0KX79aE2iaYYlanZmkU%2FRFRaUJEcmfs%2BcnvtMJNHi6rDtOmwG7YX41MNbSUQYFSbbFx5zmeG4V0nel6%2BL5xhqbWzM2SUysNSMj26eqLvQtKdj1IY%2FgZ7SPVQo9D6I%2B7CwW72PfF0Ig9Zk7PCWeRBqvxwSXy7HmgbYyY4ye%2BmjP9KK1KS4x9eFeajSq7GnL4viuXNhyujUVsG68XTfJceTNFoG0bqunS2XbCdCLDUUDG0B5fjAQ5k7fgre3MM%2BZ1ckGOqUB257q3CSr6KTT3lu5DI5aCAeKH0JYpynrmdD770TWpIO6Lr4uuO0CiPI4wGoO3wDJjMXhZuJYZmJXZ5uCcxyF9m3ubi8KLtYhk8XGXmWaQhwTPca%2FraxjvSQ%2BkMH5YVaonKUnC4yGd8GI9kIAl%2B5G0Gx9J3ht2HFam7LYBkHVvoNtfnj4HeLWhSm7sjxfplEhZPIJnIyuLT9g%2Bdn4%2BkP74lIp9OwH&X-Amz-Signature=1a63c4909fab23c92542f4c5ec724ed9fc1cbeb2cceb0ae632d51893a4f1d5d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

