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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFIEWCA2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuWn6LEz7tE8gw36T%2FfhcpIZV0N2c%2FE4juUvSSjYHCGgIhAMnxSUmGF0WSvGu4I6KuJccBuy8tGsBZY2xvaM%2Fv6Yf%2BKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWVVXEMkhgvo%2BrYYQq3ANCPubVTDd9d7KVXWavBRezniwkgBpESuCT0MDj6TGy4TpdpG2SGt25FLFvovMOdaG3tNAxlQUVyZDC38FqwNiJMGzqEO21w7BNN9Os5k2Ixmscg8ox6cZwGc4JrrFQ405EQh%2Fkv71L8QzFv5p0OJUjPz1qmRpZtSHQYhNwcwJQeCwhrp66PU%2FUuS0DE06GHDpgj4hCavsWFLshiQiX2m70jR6VwPf2IGG0jlTWG9B7n6Ig4VB11QeUfh45enZ3P0URU%2B48DJyS9tT2TUR0vd3vyvlT3ysSWdCF5sfylDNYI20zI53KrWi9DWWgC7%2FVek31wA9MhTKUaQZ0UlHeZqGk%2FRLgWbMWM0f1BFywfoi0rJ4wcd7JF4jEOOkFehuzkfPq2FUZDCBu5G%2B93JnVH6RvzU2OT5v5xM8GYPUQVIr3adZW4iXLvZuU82Za6R9U7FywnMU0jG1kiAtl%2FL4c%2FaxpRQPvV%2BZsg5wskYH3oaj0sH8lTrlpAyFG1Odd4CevHMcm4BHd6t%2FEVximLCEysqp6IASu2vD29O%2Bp%2BTjVyXL%2BuIEHbyDb%2FkFuYqUcjQ8raRu3zh0BE2pB5M2MDP0m7%2FzsYcAJsmjSFv8vM2cGGRuDuGjv9q%2Bt%2FBikVe3hTDDOodjJBjqkAStPhitPhkO5b50%2Fq2OC3yNZPaBOFBK60syhFKZCbMXT%2FIp%2BUDW47qkKf43NoFVn6J11h4HCtoSHmeZWFqiblx3032MxwEx%2FdBiPY8DtFDY7Ncz9lsECJV1IHHk1CdvS2%2FqvL0dvz6dfdAZaW74vinQnM6CbZKMlKgLUmAOcg6BbFdonlDEWt0Cn3rTXnxlAOd9BcxJeTeO5gYKezegRRfVYmPQF&X-Amz-Signature=721e3697f70aa034ba144d9267950b7162bca3f900ec3e393290282ec5ebb0fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

