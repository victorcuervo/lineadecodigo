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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVE56IXD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvTtD4Z2JhhyK1ALn7jQVApd8AhsaMrT3lVqlpv0YWoAiEA611xxx%2F4FdCDKVcIdxxaktA0AjDLnGpOwU4209L23QcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHk9yGVPokOPPJaBircAyRgWVfCY1euxDI%2FHODcJ%2FP9Q%2FWNqGuaTLT%2FIPBc891vi5Vmta8zrWoG5HHm6PjLnXkWl%2FAeWFOXtyUJx3t7JR1JUW1URj%2BYTl1F00%2BUki7RDAj4zvLzF%2Fh4pWH639WvqOHOkzzctKu7uUmdoyei2PvIYY64n4PptS5A1hrkmvrW8tyS5MEjZoQj6UGdNgsRhnxFmLxORpwehGW0Y51xovo6hvCBcyudVpOkoTsvBebR0dgyHPZsG7H27q9%2BRAWDlyE1VVpAI7%2FMvU1juGXuF%2B91g8RPN%2Bk83kqAJONcG8JJWAbO0SQaDsAY4BRKvbno%2FgSwj8%2FipA0mEfMbVnPAAJaSiw%2BrV8j26gctdEu282zGQr%2FTOgalJa7C0xHpgc%2BI3Fx3PTICUctrK9fXdTMr4Z77vf7zGB5b%2F9zxTfONjTRNT7YWvARhpL359sNnex%2BKFLUcwmxZfjgRoKJTHck99Xa3UAh4MvWs%2Fs8IUPljVKoGyjMwuSEzLuVM60sVSGl9GURyIzoUfLHejQzsK2Vepz2eFd06ftDauhLR2GgCAS%2FGr%2BbkJpn%2FETzjkFpdDpD%2F4djboLGcw8mCq2t5iPnk8gRtSWRRESzdjnHpJsobS1074XFsvrYDDla9%2FOWJMLqb1MkGOqUBzsdvKVegclP0EDgIymeeff5gOPf3XIQ24yz4VUA0RkgoEoSLjUyCCALpVjl0XDVyX7OYsAMBOs7tY6rhDFstaACviGTgR%2F44z%2F3neBQbop74DrhuRXKCcn4S7YY1b7viQAx0DCZi0YwzQThha7XoSEQmgLql8OA3%2Fp19GepBYwhQaGrBoGoh8V1C3u0PuP89AAZI5YF25erh8IKbfc77iwaJlx1A&X-Amz-Signature=b563dcb943e2544c3de333defb41ada9ec271026617a71e1391c7da57c560a14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

