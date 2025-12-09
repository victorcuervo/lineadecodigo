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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAJPU6H%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T173139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5BqtE8QaguCYrYyIxYs%2BdFQTIPuhtKxD9HHo35XVZnwIgEqJ1%2F4qd08y6xrclzrQQCW%2Fbh82BHWDFB070voBqw4oqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCJ1bWCG%2Bq7syLHfircA%2BnPOoBBtSuA%2FksnHlLODOLF6PXHX9BsqyxV6bolO1FKaxD5lG3DA8EXNa%2BBvAD1my7jaCPJ56%2Bpjx2Hy6CvNDiOGzlUil8nd3NI%2FaebrhqWbvaoUux9ad7C471vQhEn3LRJ1NV0EsgjoI%2BQ4qgDZppuDaGi5P8Z%2FUW2%2BffKEWqOfAYbCOOQsQ8OCLDhWOZnC90ssXorJOQigq5nm9w%2FoGyq8M%2BaYa0yMVi3CjCQD6rvXplIWnNzrGBeIF8WaTj2X9nehCWL1o356Ah5LRntV5gQFksqHmWJ5WK%2Fz91mLWipHis%2FUl6srAgKUOBXKdXsNaruIB3sfekig1TtJfJUktJa5B%2FcjHqjdO%2Fo3YUdz%2FYKNWq4crIHYJIOFAwAQogG1dlDyVGE4M8oM5OILGuv%2FN2mYl3T4IeDi3lhZsnQ2%2BAe5Qa6td%2BbjJt1Yi3gnFIhLMGKA1okCP9ldZx6OBcPiuzfyD9eTNH80JgJX%2BuzFXg4%2Fzds%2BUJuItxIVQdYwbYlfOiqSpvzecW8asXbYRylqmOM4g0sabwmRyTEdzE%2B7A4BJGk1tIT6zN5ZcO80bWsSDRmNLDM%2BCaboHztAXc1TsTLNf2fy1%2B%2FfZI1GX4GKAwWhKgYBD2R8gxrWRQElMOuX4ckGOqUBJMnFe1MlLTK%2BPGxV1ZkMEKKggF6g17qdHUOfBRK6ePrRkFTx%2Bjls5NEnHlXUBlYMiasIPhLtvThKeVEMnoPCpzcFFeAVm883lHOlNnHkL7%2F51TWqZwSyfCV5qlJzVzkk5sz2BGoGYrpCW3sls997YzdC1v45R0Tf%2F%2B172dzzVxpbPASQJZrJ3J40BEwBlG4wNnDu6BCJV2ivCbk7VQGRw%2FsEp0GM&X-Amz-Signature=82b94f210f6e469d8c67bf35d063fe69220d5a444008a14c2a17e55abd31b998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

