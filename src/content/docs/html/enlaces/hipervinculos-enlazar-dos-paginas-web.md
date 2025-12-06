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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L26QMOU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRe4DTQoiElrjqUVvjEpZTIWTI4HPSMmdSZtcLNVXxbAiBYnJW1kBJvbFd9Q83NHJNBoYPxogU818DbUr1LOIbWkSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMFObIl1L8INK8xYhRKtwD0%2B4QpdSHJwSF61AyBZV1I%2F97ej%2FXFyl6RVtH%2Bxu3GatioK1%2FYT1nUPuuoOaBlv42igAH4uzUZAkzOjFeIPvAKuCSql0jj7qmUJVCs0fnkZgPUqFYMi1B7JQFKiteIuGvPT%2FnoURpQ%2BRTAQOUHRBXZM9YBlgqvaKZ%2BohEA86x6T%2FvkctTU5YDZ4po20eWjhesXfDKNA7LLjruEEB2AYJOdcaW%2BDpzgDfKeiLYzpjSnUJTFE6cUkwjGG%2FI2%2Bgfdp%2B0jpDC9gTzhxh487y1a4RJO2%2BJCnzSJDCmiEY%2Fc%2Fj5%2FvZJxY%2FWrt7O%2B9JryNY8C4NpyaOqYAUI4o4bYeTrsb7jVkZR8TsY%2BHRvQJmb7BxaceG9ciuXZ0J7%2B3u5BmB8ycMCcMpbzfU8poviEFE6K2tKDpNs0ZQk%2BqwMZOzkb2S8nKOePbcGo9xY6JQVIGad4%2BKr0rHd4FOucoC%2FrrVLhFUl0DIoTfHzT6B808cj5B9Sx65PpU8SRh2XM1bLQLIH78TYDQQZFLYXB%2BzpI8UBOg2fgnEqktzCEbYFwGpVb0jrUWEjkoCIk8bGtcrf8EjzvVfEss9gxa8w9ef5cWEr9KWf7YlynYn4Rw1ejuZGhZxumCK%2FH1h9omnncdh5d2YwjsbRyQY6pgEX0n9SxBWeiOZRWJ%2FSd68TwQXYE5N0V8%2ButsPrDWESwbOpiqLxqDI%2FW5izSkQh9snBwemElZSva1%2FJd3oVTC0%2BJcGrBupmaafw61gydi4JxHWNOTLF1M%2FT0tdgWDblslJh%2FLtP3PWJQEkJbApkdhMXi058bdzh9j4o63nmMmdq1JLvDcfLrxxTpQKpKEaF42KFH6Jn4nY24RKSdVIwfsTWmlsL8BjE&X-Amz-Signature=fcbe00f54523a7b326c22db9a83c70a9c2318ca5582ef4512f7822affcded01d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

