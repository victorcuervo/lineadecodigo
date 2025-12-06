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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAPLNJLG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPZk0evwAUluhnhvZGYul3H8zqqpQJs3pawiq8Nf609gIgaPGLZCYsqCR2ivt45ILQDCz2aThX9%2BZ1HPSKykdY%2BKgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHnH7%2FD7JXS75N%2FrjyrcA1lvettqIL4bmS%2FoCohNYJw7QPL0Xy7cHs3gb8cphFppDr1dJcPnJrJxTQrdcCm1lV9OLS2kwbYeN3zHncmlwJyFzI6wnlSxuRAgAFIdZfyI3Y4YoDKARHKa19IoDu0eoq9%2F27IUnR%2BW0nlYVXr%2BopDCyXwN811%2BuFze%2BKJ8iMZGAEf5w836e1ob9ElCD5NwEFFr6Bsepr9iq%2BoLSkpzDxi18qtVbYTlk3%2B%2FcrxcELYRTkOkyjmT7bXUQ00fPv%2Fni%2Fzhs1jZ7GgQflasiJo57nou9qKV1JcHc36ZMnu8IDVELzhhLLk9T0BvzD1ck3IZHTEVaYtJi%2FoVCJoNa%2FCFpFMUinBtzrulT6O%2FtE%2FJWHlmx%2BK7psuJgFMt6y%2BWYxoZu6AU3EaJ3kSlPbEGHVzP3unotvrw5%2BZytLXbKGvRNXc%2F%2FXustLy4hwBQ3Z9aVAIAeSglKbblABlvYj8Eb8oCbRGQfwJZwRnqEeDGnT4iJ6KsEMsjcGH2iRNN%2F6330bQJ%2BI%2F2kqEsuu6wxOg%2FotUI%2FeZpug3sFotEcDmZntfQRZj8it1cW9zgHQcwmEu3vgOZhUlx6q85k5hTpd271IibEWCMZ2wDKF2%2FLHOj9btDZXrNe1%2BSNklazyo539PaMIfrz8kGOqUB22B4yTiMEumg8DHUDdZGl%2FisyfQDjh7ZisjpgBfiOC5iKWtYWNMLfaV8mtpuXOxVtgWv2oeudbUjJDpGTnViC8Pws7Ufei4NP6pe4w4rnREMn%2Fvg5wSY9T73Eof%2BFlLrwMnXqKVCKZ48B82DlYaZba4ADVmMZkaZwUL3IS%2B9woUFCmP1I%2BoGN9nTljpaD4X%2F6NnW0BKKS%2F8AFhRJ91SEozcsrl7U&X-Amz-Signature=159599bc57198365614079837c9e5bc6d8209661845c27a2d67a31c746bc2f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

