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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466447LDB4Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD%2BoeN%2F7ET89Tc9BFV%2F8tMvEspwP7bwYf6YGYHJu%2BXQegIhAI%2FeTamsc7Hn6vpDOLH8cs%2BIlHfPL54TpPrZvFYXaok6Kv8DCDoQABoMNjM3NDIzMTgzODA1Igza40LHtcAtP4hXgp0q3APHO%2FgCJ93%2FeoxosJ907xhkRiCEHBUwG0MlLQdpRsGM2c2etvgFCDO62FI%2FsaXOZgU%2Fe2hNjF6asfIgfXSxaQpwLKQBXxlsWp0gnBwnUgqJed6kiZfReovd%2FKSNlH%2BjXZsHGf5Spw88xzuFfFWx0l8%2BPOVx07503RgAt%2BEB%2BaNN01lhQxpnV2RAMjfZ48N8ylZxy%2BJBjPdWK8%2FE92qd0rXrI0dvaa8WdTr1J3GUjbURs9RJd4yeJgL0nzJgsv%2FXrSzXqjqs9a%2BdjVmt3KQxqusoHi6TMexb0fhfJF6vxQPlA9gbbtYf50MFtgrdY%2B2A4F6u4lJKyw1Jr0M8pBAmwQWQsgNt6yO5GLeTFR9L%2FY%2Fg7vRgoDzBgU6ofXoyuA8gSltBeYiNtceeZoKUMERTxQdtS1W8QCf7ykk8SoPWAwgO1POx7q7QAhU2fhdoGcTlflN4m%2Fq5W%2BOQd%2BqL2DoFkuVlgxo5RYCXKiySGn3xcxj2qnu1Eora0TecEd0WaFQs49cqiLy2foVs4LrQ%2FLdAtA44EamYGAmaMyjWlx8MwVeFP%2FRAuLJvxKKcijitgHVl%2FSINQ1UobXNv%2Bc2fTNE%2BlHA9%2B4zWRitzAdit86fmqOMSGp3nSQDJSJO44mz2aTD2tMPJBjqkAfW3gEoboHNAUEid0UTaDhf0yKwYUZXuUg7cA%2BIXvDjsQid%2BtDQ3EJ%2B3qW%2BXXnoTnjzrw1YPU8N%2BOt6rJ0C5yeMXyBh1488OlxQYPjxt1fp3c5TPlZJFD%2BIVXSX91R9KoL0KM%2F8FyBa5btqkGiWnDGFsSY2xGLWJEsEUjtsFRJsp87vmjIfJAgnq0idWW%2FygECPBo5mFj3hiuIbSPId61KVqWqaL&X-Amz-Signature=d73348457833047e5bcec03aeed84d3ac2fe982451043177e7a1cfaf7e04ad90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

