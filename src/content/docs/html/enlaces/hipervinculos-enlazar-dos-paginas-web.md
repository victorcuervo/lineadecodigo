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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FRC7OAQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T191240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxqGPB6t8pyGy3D%2FU%2BI%2FAMEaN3%2FX25neLEgAX9fBt0LAiEA5Ef8dE%2FN9wXyV%2BZtO%2FuHaGkmdKC9eFFSEZTjaSkFJQAqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArzgNe5g0TWIIDaKSrcA1fp0augmVp35fRNUkYN4OuzPFu55waszmd4ZHFRUOCzI5JGbtr6zcrFNdTL9LzMdzjkv92JMW4NCRAxY0Zi0pwNxLg54%2B6VVehQwn5wMkB1SVwgfUATx6%2FM%2FyF3HbPZ7ZqcNLeVpAQbSgALFB1q8Bc5VIO4xomqq9a1VbEWCBzxjQb8SuBVyKWtIg19OQkzTP3P40lHDeIVEv4voOF%2BW%2B5MtYLquPa7zg64meMeJsaLHWlfDK84emcdzKCPk9F9Rd7fLpZcxHRzk4TfVdsMyhTtpt%2FR7StAigdINtdQpaQIyU%2BynxFBaJoe2r%2FNkgAfqY0FdVlxMrOHUSxvU8aOeuapN5X3az%2BCHl4DaUZkSLPvae2bDC5A16%2Bg7v4eJlWb7YZAaAmKfDt%2FZRJ94EuY%2B%2FyrDfUts4d9bqNEh%2BrrwpvVHo%2Fai1xmf35J0hu6uIODPxDWSjyORiZJhwR%2FfyyzCu4lgYJADytrzQIHkUHg0FmUWX%2BKxoYPooZLzXyWKif0%2Fg4l4Qdm%2BMQdKGJuwDeFK0phMvzuVUn5oUGqL1dAMk7zofBguvoBlVLz%2B%2BLwstnKs%2B0s7TGEc7G8yD9YLl9365eN4gdHivokGqfNdMQH%2BPbh9ttX9n%2BlqA%2FQ6vKJMLLf4ckGOqUB%2FGoPlnJEezCZI30%2FpX34Dly5z7YZbt0gbYhOdLIPIWR%2BBklUIhvmUzh71n4p30I4AloLyhlP1sC1IqdVKTLxPaTnzG%2BSoAl%2FsjMlnCE6Oj0HyAaQA1c24cuhlesMm5Fv77gbAnayugImEAXcwUO7nbI7niw8ETLNqL7PWxzjdPIYDQHS1%2FyUp4%2FHlSaV2D40i%2FNCMOGLq2Og8MJhoh7u8hKtUAyv&X-Amz-Signature=11427a575b49df2091807634e3d9ae84eb671550c8d2265d6557c032a75e576b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

