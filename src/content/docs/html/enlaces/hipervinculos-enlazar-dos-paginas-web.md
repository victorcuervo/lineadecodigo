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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD3S3ZKY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T182051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvLC8v2cp6BdGvO5cdLJaO93azLTUSIHHM%2FkqrHZ8wEAiEAhLwtlfVo0a0YPyWlRNSnBZXYKG4N916sHXIaaMF%2Bph4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBX4L2FYlNKBVrWxSrcA615sat62u2uZw3rUrykwfZFPmAznkLiunM83UNI0NcdtbUi8kW9ofK%2Fr%2BMAbXM3Pe5xaP%2BTj%2FQMBoYFbr9N5L3SUEqJlnPBhYlW9Usjbc65CThkUEdxwo%2BKxHOCmIZkvISHsmepFY2Nt7wpBhp9W7phznkEZql0tiSSsVW5Ro4znvJWSV3IxbWA4%2FCvM1mBNMBagFr7FzSDLk9nbx5CMyy2FD8zGCzKWxpP6qGwgQUl1kBYVKJbV2cnCaUJqneoKr3DET1SZV%2FNekF%2FAHR7MbuN5vbz3XL94Xlk0pvW9fLfxE%2FqpKfC0CQRDoXJPbLVe%2FyKTQWQHpA32e9qCVMixZ4lYeG4SRCfg%2FB%2BlzmfYcQ3YryIZK9xLkjs%2FkRZpFpk6AkAmfsySGHpdYO30xVBeJJWfuQqgtBgIhpzxz%2BicDM5tr9J7xfCL0q7yM4lr79Lq9QnHlk7mPMa%2Fn%2Fkg5N8t2jmVZyYuN96i3JhXJGuWZ%2Fx3WejHpFaFfFomjGlgBVNcUqJ5mwfkKjXqXbNHW7BHu%2FHIrQ%2BchDry6naB4KJxabXyFxOC8Jtc4OIDBbPYeCiH%2BzmO%2B%2BfaV3Z5OnWjzuKzFYwCnX7zPOYOUq%2Fv9pixYx9boKnr6dpc%2BCEzhosMIG84ckGOqUBy3gO3Hbp9Sqd9rm0Ll7qVhdfbrA3h5N3vDG7HExcg0x7GLxD%2FMFhUGoU8I%2FrURuFkfSfzxOq8LrjFvnxO9seLrU2Z0lwVar09tdgJtn7aO0WC%2FxZB5o1oeERi%2FhYO1D7KCnCLNFQM25T2w%2Fs4K5QOfCtDhuxxnlZTe0Sr6NEm14qXk5N6QVZsG6OIaLINmLSKkOlZdNNqAum29zyUiu03KZtgUbh&X-Amz-Signature=f92cb05c99b674a543e02da6e511376c46dbde5e6f397bb93a13a1bde3f1c4d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

