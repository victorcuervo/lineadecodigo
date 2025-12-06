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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROOKC6BS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC99sTtTX0cQ%2BxJ2cTOFFue%2FqqEJP54sPF5UzFkEYBC3QIgbIE7TI1hE6WY184BeAZET9gi9M838S91fXv5qa7UcdAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgH8DYEyxrHATK0wCrcA1rpHQ6geMuaWWmCrhgqP9IPXHCTouXg4msyyEGu0FJqXlTDOi9i5pL89gcolipCc%2BR%2BBD1UnT78NDQoFCtdzEOM8bwPvKHI4UkCVb9hlLNDp2lKa93knygqW8%2BQIk7vBBFd4ihUmrjIQJa9LO1CnEGfUDRtPKq%2BKp6QQnk%2F%2BW0qOgI1nOx5Dv%2FIidCqLCkexUWrL2D1jaOBcJAxj9pItW%2BxzA63yokoJXfXDud%2BURS2GyY75z%2Fb6%2BVauRY701nRE0bUKlmqQrUDonVkHprsuDtBh4uk1oH3kuE55zjhetmqZjJNAUk77gwg2wHDCc4l%2F6%2BUvQvg%2BOqnqzgVgJpj45St9evipy%2FJT1xDlhvcvH1YvMZ0ECPGw4LucPSVDDqEobxmE535uHCFaW7abqIxjduK%2B0fjKSZQzjnN3tcPhk3no4v73OXACcey1GGZucFT13uUc84vzKZh451MbExOHbyExKY8ZDPDRGzn2uw0fMxhhiZJa3yZ6mN9yti1lhbVJ6ajIU6w2QGUx8MASXngZMW5miKuH730NzQ%2Bm4k33uv%2FVLkUqUVTG00yByZTmtM0w7EVEAIMlI0rqEIuj20dLpNF7GJJN7EI71aCJnGY6BR%2FoNxQNcZw739rNjpDMNb90skGOqUBjJxqJlQy3QDTyPmRwdT2riHt5hRroPEA5KxbH1ozzRf4doOEktr6kKl3mOQeGMsmszDReSjKuMvtmuk6vkHOuC8pJFwqfHxTap4b20tW9MUI7Tx4m%2BoxpEBIcJyuQSs96bGmVQZFQGDEid5PBZSEI%2FKmlgAvkVDzh%2FKM7T5Np2Q%2B93QY0PlD2RcCfpRj%2BhpEeB7wDFGY8ECZwH2yad2cUSvYUDuG&X-Amz-Signature=8d5e8c236c679a1b78b0d167a44f8d6d50c208a86e13bea96680236c2aaf166e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

