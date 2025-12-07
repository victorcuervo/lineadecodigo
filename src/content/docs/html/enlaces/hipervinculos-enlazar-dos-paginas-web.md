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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVA2F3PU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T145647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgERGQpOobmOczeaLuom2Cn77RBOhoFttrqIx3m2j%2FYQIgOoZHepEEiNKev39oBXDro%2BsI7rMw0O1v%2B9fdCNq%2BA3MqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7dZ9WVP7MNUHg9lSrcA4O%2Bg%2BZ%2FpHvl88qnM8WCxjHJxJrw%2F6B37MVX6MlU4%2FRLz27qwhiO1IfiEOuVw%2FL%2F6NU9XpzqYsyKLxJl6X%2FrWJrsgJQSywDSw100h%2FOROzaq8uPrV6AngLAbaSQqyw1KlTj7YCEjw6EGYb1Z96FC2NITb9jgpA83c9VxETZvA51%2BGm85cPen7JBqZAaecQe3D2DP%2Bk6O5hqu19ZeMDAK4nnr193V%2Fu5VvwfKNmx5idnRqx5nDcAxqPtxVUAdOtY%2BAklL7e6C9v31lkTmwvYIoYzKOot8OSOrKVaPJ44aDboU9yPXJAIKhjptwkaTWseaTtenG4dN8fQK1F5FuL00fgvmWPEifZqk3BnsWZRB%2FjqBosWbmWiqk94AjQbW%2BtJlMCC6BYe7NVU2oI1%2FfCCr%2F733wDC9zu1gYR7cPaS7AJqVa3cxuqWAEoC7%2F09XYLNx%2B%2FWQH0VlZq7OA7oNv9nfYm%2Fgp6ok2ldKzdl%2BYYFC1q8CEegufZW3NyFXMCsGJyloMk8sV50WelFZo56z%2BzK9c%2FQFtAeuDGLBflESI74DPCHza8sJePx8MRKYouc%2FPzoODPVHtj0Uh46ZP9FFwwnnUod1g8lRWNckeBfWnL27oNERK3yGitVD70wk%2Bn8xMKSZ1ckGOqUBovTlGtanYX61z7v4VtEs2v9QW4%2FHYpwTToJrMzOdi6wf4mies0TigBrO76yiyz6mu5WnzMYvtVaJuNN6OjCEqOmCaPYU7VZh6fig2aOhUaqlSfI3fYN4fzwmz%2BFVmaMJwqEpCq9pR4vc247BM6It9Bn3rm0ncx4h%2F6M5H6h%2FE7OgOPpMU8ANB1ZmhsfeI2pGT91b1Tx%2BvAQF18hEgk33Oi6TrZ6h&X-Amz-Signature=ce75f3b0e023e4837d764ce4bbcd7c07097ccc9cac98c7812952f076c0c1a224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

