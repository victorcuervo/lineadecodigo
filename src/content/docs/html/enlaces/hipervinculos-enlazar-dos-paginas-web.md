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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XUZZVK6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmh7ZKWUB8zicIB9H2r6OqLVn9Lrkb%2FBJPf0FQnKGdVAiApU7F5Jf%2FGeuG3jPFZ4vuP2etzoTpKEkT22XP46sd1FCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMZBi45p4Va7px%2FwdAKtwDBVX6T4atUJdLZZBmtxBLUzmmmLXFRHcgYqNj1NRzZm1fYM%2B9CIHssRz%2FFgb4EVUlYA5T9HHQJl0tYXW75GHpW%2FJxvn5KMvITGfRaadAkLUABtM8SCyy8wVCill5Kp0gk%2BUf6P4LgzL0fwT9r9OHMA80PJb3D39EKQ%2FT03CD1%2B%2FzCb%2FYOmdBRT%2Bn8wAZHTF6ooy3egYxu%2Ff50BG0rFwsSmIpeJBt7rJ71SjylKe9%2BPGbxXF5I8T45yDhtlk%2Fc3teRGoZ4KGoisWJ%2BMi3LEIT1ar3dCwbh0GBSf%2BzDESpvTd8eRQPRkxniwwQklh7YAsVxB3XxwwGyN%2B%2BDTmsbdbgo2eiiq1ORT30MuJ1Ri%2B867%2B5iw4LyIf3vB6A9IA14y1IYVgFxqOEQpmppaSRYyBqsMpvpGhZUUjQzelS7DTrKFoJXJpLt8K%2B%2BQAge2jUrDxkYfsZx9XKboFwHOr4eCcwszCPQoOJ7SefXL1sRUlZTkdf07Obg7Y6YCdingEduTShEpjIc%2BmV24sqW63IrekdEpv1yU6XO4AGcr48VXTd0lT%2BzLpu3KGZeGJD10j4nQ3P9EIJZt6onqIrOxEZyaWW%2Bh%2B%2FYR%2BuAu2nt2274RXEV9xCGNtlGKykZJNrO8fYw1Z7PyQY6pgF7AuGQomKq6%2FjJjlrB%2BEjEGzd12ra7QbJ9YCKpj15GhmSqodcvSnDcm7p%2BpSZmPn3nfbJxnvyuG8%2FnSdhxsBm7SWHEFdnu7rIt0LhvLrvv0VsCo7qa0u6Q9qblQ0eXuFmIwYy1ad6N%2FrkA9wMmG6ys7%2B4k5CsWwcwQloMUDb7plX0ktebgTG%2FR0zDR3%2B61XNPf2LEHR%2FoBog%2BL2DaMBWdko0NJ693z&X-Amz-Signature=717dd8d98eb3b27bf59246faca3a728d39a04d080e18436104e1b1329f3973f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

