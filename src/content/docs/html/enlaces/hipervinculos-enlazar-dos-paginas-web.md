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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7EZ7O6H%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9hzbi2NerDlM3tD1LZk2utn130ZQQN%2BK1BGuW5yizuAiEAxDJsP3Q9oEdri%2FiBqfcWhaKk%2BBzy31gcGh19ngudjy0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBjPLiYb3VaHrfOhAyrcA11UfSiUxCBimBa2iCdokMTQEwbESA3i9KwjT1crLRlbcNL35S9kgz%2FgGQGLM5EG0nUTxFTm9gLHH07pQ%2FwcFw4%2F6s08jCKIcftGn2mCJdqEb1ThvCHcAqy4UiX%2FU4CJaKNaznXNsVFB6P5Fp3LKROmdiwNiX4owWQXAV7buvuxjKU%2Bv57xOZExJlfqdfCw1PkhZEWWaCJWlxsmPyrP%2F6bHCM10f4ozlU8dWDFHvJyHJDFJZMO9BuTlvF%2BmC5K6BB007Hbn3lqmYTvFUtAgFnyAoR93b3C3QDyRnyRDch0iGT5ICO1tenxQz95hKx4tBKA%2BRZYOQYsysS9gAba18%2BFXQ9vv%2FuBLBMB%2BdNfY2psbuSzSB3gYq7CZI6IJn5ADfYsjfhJAfiqzlr6YQbudi1FwBJZxBJWFrCApraFKyQxUtg1DJzlWU%2BdLMoiyBHy0333jtNUtQ%2Bb4%2FnDKGE9TQUQVJfxGbwcX6GKHaf8RJZC3A3jiClsBIzcOEWMQajUkZSjf3uKr2y4G72V%2FfHe%2FVGUd91TT%2FqdmlePM%2B3u%2BIPCbLyjhuRzwiDy4VSBlHmAre0bMXhzNxjs08MhhB0kh8aWj1UF28sAjUiXQcj0d424TbMDQmXMJaUp0kWjW5MOSyyckGOqUBsPci23IssCmeB7D4h8XTa3dSTjhmhW05Iot5TjKSttMpFNyu0W%2FPsOKP6vJUjOb7Szvdvy3q%2B50eQgH9baUWj5sknaVAiCv7137bQqFJJl1UjuD33EoGD8%2Bpf1OruP9wPW0w6NUajMLhb6ijYZ36D0ELpBpy%2BowCpC4unGiRX91KfhJJ9sRdcr6IflwQLNUMhrXa%2BeazoKQgu5xK4ef2zLsdePV4&X-Amz-Signature=9eb7f622e1c7537cac73d1a6f83e853b54708c4856ecf54d2bd3ea84ee82c414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

