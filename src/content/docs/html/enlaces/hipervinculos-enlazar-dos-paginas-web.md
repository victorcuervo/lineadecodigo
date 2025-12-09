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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBT5EBDP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBaaWZmkW%2BbQSoqNztccg6SrxWei5BTvtniAKwS49VbAiEAiWGZsAo2jC%2FQouRCQdKildKkURJp467J318qnEQC5D4qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOoULrgrAMo6ngxejyrcA%2BDaXs5i2oweALKy0vOQ5bKNj%2FN0a%2BcjErk6gn4tNIltJDgVqBqD04jL4UFRBipH1BT9TsPsDvX8WglKd6t%2FNUyUnzcYzrZYGZXHPBkl5pOJN4d%2FQ9ydyKmhUbqC5VartNYXwZW7ADzKggYqrBPHHHU9UuKKKScyIm19L1veT3JO6lPV18GIEbBEQmB25zTvdlSV8XO25th3XUQyLqSH1gdGyAaM5Ii8N9NFqicDrsHbKJzTTB4IlulCI%2FqLjkZZ4ZecZU%2BHcnTexI64aZkCwSbjXORAE%2Fn8BkMGCcpj87x55RbaUGv58YhQgn40K1DA6KlP2LQZHM6%2FHOp85tjHlUkmLb%2Fv1zgO0yBLXyXiLTrSlddTeqiSATHOC22Clt3haSP%2BeEMh%2Foh1TLbFrv4P9Z4CpZbGkWst%2FAiwGTxJrZtKYqy3eCkZuHS8fEmy8NO7EvRfqUUEOkWKB%2BFwB3%2F%2Bj4pVY%2Be9wVvBrB4v4RajDNgDCJeUmEqW5RAdcY6TMF51dG6A4oWrw78KumA8t%2BKwPLZm%2FEP8EZ3dgB%2FqNRqbX8OpS0KITSTsYxNsckWz%2B78CimSaRxbUO5zhRy8qiX5MLZmI7NlKTCni6%2Fr70yiYK9sROXzza2tx4YlNbo3CMKHK3skGOqUBREhuEypjlnRmRW6w66jgQZQNVU1W6pV60w%2Bg73TTWAwgJV0tyy%2F0yeHiqioXgk%2BBcdCmQ1qUzSilQU43x%2FyIMBcAKZT7cZUfGxz8wi%2Fvtk7dxiue46VTB0GTLwx%2B8%2FSWBf6ly1SXoB2l00lKjZnHpxZYUSzci1XRF4o3XoYliJCnxSJvll3hq2VJVG88THRX0QbsM6oYaCesk3O3NZo2eMgBGIyC&X-Amz-Signature=f93b674b93217490782418b1d5f3e085014a2044307d8cebd5680b5120e86905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

