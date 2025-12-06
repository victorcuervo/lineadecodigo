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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKPK6KQA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDb8JsPtAz6fhziQdZu%2FuTFH2Sr6SVBC8WSE4gSMBCK%2FAiEAmNVWijTceslkDLiKWxZoXGXEiL8L4z4lYsxNh9bSX34q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFO%2F%2FNN13ymHq0GNHCrcA%2F%2BT4UKJdhuf3st0c%2BwSPhNWA1onepgB3ilLqYYRJwYsgmVx342gyiH1xxBlMukpOIJtbRb1QCpD7sW1vehuXktJnaqWm05odMaqDq%2B6Z6FPyu1b%2Bp%2BHvbFPRoOZkpIUlcGonr6AjMUfJiM%2Bt66RmWxIZWZdMAyUJzCHmCHfiUJUcfqBxYCM0cGxuXz6XSnxgaPFmhBSKpDD71yB3O0O0sx24y9q27jklA6gHNHH4MCa99GuBn%2BidtVh%2FMReIuctEJNOUrOc3Hm%2FbJpXepBPXt%2FSLZSZiQWc1U6o0WdTJS0zce3e9u2s5diHjauBHeqL%2FXY0beT1OOahhkKFwsHSxLjb1CvzDZgC0JO4rlJhtSFtBZL4bj8doGJFTg9qwTGTevT4JF4m9MXAj357ZQN%2BK6PglHhX%2FFaFYMJadC1fI%2FrSiW%2F4kWt%2BpUUm8tbpS7gzsbNydgOkkTvfvBn%2BcHdU1N1E5jjm7il3yzsicFSPtPlRCctTkkgWzuybiBiiS10wHeqGfCJvnYlGJzKS5zYxAndYrLhz6v7gPGUrKApyq64KPYNOOrczflNDEqELoz5ySQibeOrAUN3WRL1zf6DGYbaBZFQJgDK%2BYGic1i8j8bT4K1%2BIcsTNOfmE0Y00MOXB0ckGOqUBoOO1EzBV2MFVNyMmKh9Senyrb3hqCQTABkKu9cKY3j6oL1RBnWO3M6d2ZeWdr3t9VmJPIDreIvXOJXoObzAS8O6PKUUDdkmPXWnBf%2Bqio8DWxILEkD6J00DuTbuCfa4cvEqdGqnD3o%2BhUC1FCeibqU3c1gAjQ9XnCxbiG3gJ0CqiUpbqy%2FD1ipvFGAZbsLrpZ5hH8pRyhxf38r3FQQQ4V47CkAUI&X-Amz-Signature=8ccc943eb7d4d37ba969262139fd69ed4d4d0108db3dfe6d2671f0f11ed602e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

