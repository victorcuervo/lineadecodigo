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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQ6BWIP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC2LoDcBqQb7vZ3fy9rC%2Fyx8dJts9ahBgEIblo0MPrXgIgA2YczK0MzAEfpkYje4t4LZTpSzjbQvdf9O4uSs8ba84qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBX0r0dPItybGrmuLCrcAyFahCZ8XY186BHkICPekSab%2FoTpn%2BgQNy0yMa%2Ba84ND1SNH60xgZKZwznfyUVEp6grrJyDkGtnw6Ob4f8AcUvhy%2FY%2F4%2FMsEfTnUIq4Xw8lCPjrkFg6WWyO4Oov%2Fl2hreK5jmwokoR79IXuQOQ8LbeA6lmN1dqrjmdgFg%2BN3gbVEbnEv3eLa%2Bzo13FQ0kPwEp2rjmcH1bUltkwE4Om4JueeE%2BamsUrH0KUWA2SdWPAE2hFfTaIn5YVoB053Mlbf7GkMkfvZrQmos0YCIp%2F2si4aTJUIBmH0APTDiHgomefhGDk2x%2FO%2Fh8d4CJQGFlvzVVkW8ugYETc1FFDwWlQkBP7qxf3Pg8Iu9mPILthAvsPyEtv%2BrykyFZzZHrKvMFE53Fux2J6skK9AyUjWZSWn6Hxo7jO3wdoaeA5btUDEmqwQe8MtsriXjZw8CkfUWrVQmIwfPnyZVPIzgmKnY41icKlLo%2BHCD7tUbhA4MWiwb6OhxmUcOhsugoMNBnBiPAJ5bNjnRuTUmzpV0zLyxDvKL%2FUrPPc32c0f33xjkH6qFxrTlCee%2FPQvAvfwyxCKK9MlGTj4obqJ%2BQNuyqWgcux4d1aAwpqgqp8uZNEDtNBO8om%2B68vEsKkyQ5hebgZVYMPXc3MkGOqUB4Us5wqPiixxIu6%2BKdu2PCjBcuIbbmqs9awtCnWmkCt6nSjqDHC0tByhKkLYOwtoBrCqlmai27HCduQqemRzldf0J9E6F%2BrneLkmLe29T4N8uwyoHQle6fdsP%2F8Ax%2FGNn8ivPsSbDKKvgffYOb32lEAgxRncHltJIW0n9XGmo7Y5DOlL%2FMk7vXG7Nnv83AXK6wV3zrRzOO%2BH9lSZKlokmZsS16phC&X-Amz-Signature=62fcb0004386e49309a483646ea36e665e653c407461c0bff3e58acdd1274928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

