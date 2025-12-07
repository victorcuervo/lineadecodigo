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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFLP6SHB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVuvKugZ8p%2Fgz3zwmG0uqGQBvwuMRLEldC2sZ31lMnEQIgAQuwTrHUXQ97ZGja00ERLj9qjtOLGfSZrgn%2BxoBr5zgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0xkny4S61si96IzyrcA8JLsESTEL%2B6MWl7pdMHhLxwEHElqei8KT2OvLTl%2FS7TlPiFDGMQugVoX5N1Mjy0bblSWfK9iesM%2FsyC%2BA2g1o1ktrueci3lj9K9w0nEzSb6JBNDxPUqx5cqTa5vwp4VRc6myGJ6Gpj2C%2BOuZBvyvz2OAtqbVgkopT5R2IOq29z7Qsn9HbF%2Bq1N5yQtrA6xITN490YkK%2FkJ2pe%2FjUN%2B5p%2BDr%2FsGPORh7nw61s1p%2FRyG04yPuR7gZIWg%2Fnqy%2Bz9i%2Be5HJV92aB3oIh5%2BrkFtvnlDktqQek0WO2jFlAVpZCXGw%2BV1P169rbD6V%2FIEqLpy%2BiliuZhX463ZZ8dFe5ia8cmQZP8iSZ5kmawpIgumv5O9meqPilCq84VNUM33Sgf9fYLlkUQFQczeFzf5tKJS1XJjRf9Es0JUaJRvlWTyM%2F6WgFqYkFdlARP%2BR%2BBphH9OX5spSX%2Biy5IKLY5qOI4ZtnBCscWlY%2BkeIaFY5Yjyj0VRZFk1y7ZIy77tfqtAXc%2BZy1KepIzjreG8ELhh1%2BpYdrlPH41hr7PrzAoMuKa1kv10gZDwIwo8EPWBCx7rTau7d2GHU6FWe7T5xn0MS5rpV0KdolMHrHEEiiIgCP9hzxPbugxJXf03QajBCDZPgMMuZ1ckGOqUBeRyIGCmpcr6I6mWVKDFeeBsd6C7mGgmCoTQQ7A%2Fjst1%2BCX3mSpFi3Pcdxjamqf3YC4fRzPxCIyXJsw6%2B2oWPd%2B%2B6KxUS%2B%2BUmne2TWHrjys8hm5%2FldgFA88%2F7bi92ul2tXuXSXk39kksrf%2FVrb4B33dyGZe029Mv1mV%2FaHguwpfVXOKlHk5vb21LkQRZwMIiuvfsE2IbOI%2BIwpVnyZhiAvXssZabd&X-Amz-Signature=c5cd9b3252e84c4be1e6e66901a51c305d27d57576a6a5d6be31d04c4059c735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

