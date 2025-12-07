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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7YTHUPW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUhhMCag%2FBA1rmSKAPT0x4kHYG00DPB%2FvCHM6mROqLFAiA%2F7uLUoBO%2FekHJxrHFMYfoPt78mFE1NN6C99Z3VsNzjSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBNqHRO7UI5Y3R7YGKtwD5WJx1hmaInNQhNYJV3D79tLrLnOKQzxFqbznkJzShcElSXeGIR%2BTJeSEnoNIYfFgiGhiNhaynBoHKRJSxVPGyJ1aDrzjJwfVicsKJoDXsZjm2qJCk3yUU4C3QYDEA7x5VfERTxAQt2ZWwSLbC09K7w2yQ3EtV3gBz3UmImKs17iegXK5c9tdLMDJ0DHZYLUUa%2B4SJ%2FcwDeY04B7yP%2Bgu6g7EWPklYs1sElbkq85T2uCpGOO6R%2B0pU6WkcSun4hj%2F3cncK2dIqEKBwoqYiOjTqcqEkpHXZAqGZXb6CvIdpP%2FGLaUraL6YrMIAUrOj2snHXCBjDKMBFp6eCoXqiNtvmi6e%2BGyV3WURtAegIGUhAJA5KCechtSpcAlma1eg3I7SQyk5Spafhm9jwVKzUkpRW67NiftS9EG4mZoqKSsKDjoTZms1nrA1k3Q9pZ8ayt%2FU4mFhTPFuOjv2PuLRRJaq7IlzVblECdr%2B9ZwfzPcLcM%2BiaatG8f7uMvCZgEhewaSitZyu%2BAzLSijm1aMbw7eoTvz%2F6fN4wPh1wXWBdE%2BXOhyxelI51FacXQVziF1y6bYg2gwohVpfwqGrQ4ZlhN%2FjVs%2FRjcAM3QpIjKwbLjtPDKVCbFQ4ZYZC%2BE2fRQ8wgf7SyQY6pgGFz1UL%2FfLJqP%2FHBsbJCGlD8DDAT%2FfVa3GsEYzXg7pJAmMPgLk7%2Bhl714DNEf8rbBj%2FD%2FYurDmZFV%2F9e3dQgavY6TNAh3GpXSBk2taP2Dr15lUUFJv55Ql4PT27orca5vSDvyDDMO8uUYicspMHZO2eJoebf4WLRzz1VMRkhBD%2BzsoRdFcLGocd5isx%2Fo30UgZ4SnNhRLOC8U3gZ%2FV2J42uEayEQdkG&X-Amz-Signature=ec244652ce3745066bdd3e1a2c438211622789671e6056e4e056fb6152622c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

