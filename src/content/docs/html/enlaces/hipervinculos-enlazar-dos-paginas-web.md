---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHDP36N3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDtfCA4IxvyCHonfO8k2bCDPdgpebm0vYdSycnutfQbZQIhAMizy0xBpvZU8m%2FvMlvV0vIBy5m4mfNJfExs5P%2BMZCo1Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxMJnd8a0mTl6Gu%2BB0q3ANkFwj4ueFepVGggOQuOwdXIx1HvGzaHeyVgu07kX6N6K%2F6m41eQk7SSDM8a8T8K0Ubuyun0UrAgvuykBsrMlYRVuDWKno2rAiTq2YOXN8bRdXHlJd%2FX4iVPmjnmnh3zc1USbG9GyxtoEUzz7s74V5Wpeh2vs75LrBLFVrZegf3EmhthyQxHG9f99QOWLR4%2FOQKMnolM4GkYN4e2nA1rnDpbM325e12cMcwpQzyi3HnKOzmYOhV1CzUmrVn1IY7EAvol9vHq8AjrNDDK7GoGPt3j61kV0fhKrMiuruXhZf2%2FnLjgQpzKKV2wapxPMGWPrI0PN4acDkUUTDpOPl0C9YE8be5c10bxgL48%2BxkMXFVTIjWLVqWxPmNxya%2BgDLMwknwbd9QqgdPuNYp4n083FRsqwquCyG6BUViCDBDRePfR3bwx66e4yQRMCzo71veAg2z2%2FWlixUzlH28Ro6%2BPQBXECNlAw879kWq898pHjIiC%2Fzlov17c7KZsWsPC%2BgpWMMFxFgu2xzSD4%2BoDjCQ%2BP54nYrxcIRA4MAOYv6lPwYkICb92ZC58bOAxJOjCHq4B5UEBhvXcNY3bAgEvBsIpEV3qgc1bW5HKnrdQuK1nxP5yhs0uv4XwcuULBMmCzDX58TJBjqkAVHcBGySkkdHXfrCz90IBkVnlFcLeSuf1zLzLC6B%2BlwiFSHzWfzgUr5P53wWgCBwwtZBCUm9VnGZlRy9%2Fpn9pt1BCHlova%2BZWhAGch8JXYgt%2By1BK2n5eE7CU%2BXnFzXVKrSfqTI3nECtR6i1SwAuivWAJPZoXtY%2BtL%2FmVktxBwxmtFB7v8nP5IXwVfrBvz%2FnNuGfN7tAqE6VSVOw25aN4U5ZnBel&X-Amz-Signature=f4b68dc198f80a6445546fadcd6d32c25140261d898f86fb69bc381efd4379f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

