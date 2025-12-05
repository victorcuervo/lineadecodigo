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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BAOKTWY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCItcyRK1Tsrq%2BbeuWzTgKqVARbQszhmJ7gl9munH%2Bp2gIgFohQZbpY1Uwn0SOEtvg5a2b%2FFEmFEjgcznEgJmlLQwMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFEdHm%2BSH0iPFCwcoyrcA%2BvyfVbA3D908gSRG6zSlBEdepzJJJAIRX3SRL0Ip2tUp3nKdbwI%2FwFKLn8hLhgeZtB2qGxlGjohBgBEt1epkExoIng%2FDsPuQkaS4Ce5tCDFxASIaf%2F2VxhV0QK4jQZCYLCwnfFVuPPpTwLt4ffnyqeATkh1TZ9S%2FZJ6xJbNO8GZAIK21JbVISkAUdO%2Bm0%2BClQoqur3aJecSG746WYPxEVIFtmL41YXpcEokXWZAHr2jT0IHyH9TvAao31DUqgeH3UC%2BYdLFfOWoTcI%2Fgs7pGbogOhuFEB7TbngCuW9urbx%2FNqipzUn891RGN2mXWshZ21v%2FT8%2FSKOfEzm1geRh%2FlIzpz%2FsiCc8bGl2G8ExcYaEAU2fss%2Ffn1a1tLR541C9C9%2BHcfeLH4UyBDHR%2Bw7fQ0921KqIHX7K483w9ruuovDAtizBejhrZEA0i3DY8Z6ATGarPY0wTxy0OlojAen3ii3ezOx6Qry4HFWMYh4bZwiRPtZNNublYY%2FcGth3HUnJxAMtw4II9knosw5ufsRRlkTmVjF84UuiWcmsvVI52kOv81vX00SvA7LiS7OxGtT6EbQTtRcPSbMBLqBI%2BU7FxjuppbNfDyFf%2FKPyMKpKkP1N29e1TVGQ5DAmLpHZIMPCMyMkGOqUBe2Lfch0jwQAhj65ApytZzRu1iUyIYiblJWyMADGTyG9XMXpa5smoqQblO6G3pOFSPSvnYQdAfy0r81nYPy5Pum7dkJHtSzYo9SG7iSmZJXsj3jQy%2FnQA%2FjvREf7F4qKzD667%2Ba18xQPtLvE4R3PPee7Yi2hlI8Nbl5cGx%2FDYTfdauTQMyYXpbIQE3LI7F3nHHPKORBVOXBaaqwtzQCeDnylXpOKA&X-Amz-Signature=0eadb118b7b16ca461f137e5d2e6ced455f87abc290a937f3265cd9c9df89c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

