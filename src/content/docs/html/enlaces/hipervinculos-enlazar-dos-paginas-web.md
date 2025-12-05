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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UH32JYY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKfd7H2cAHvRZjuX4Ldi71eUsd2Lo9xwSF5GgyzAdW6AiEA3BVHbDhRrfRkY7vX6x6%2FS3t7PXKJ2LJOfUPXkgkMInoq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJ2AZ85zeZYs0g0hXyrcA9wO6q666K9zne0SiSFVUmdnzWjbt2ck7Cdv1mRMO45wc1c7WcB0oBKWBXXiF5a5KLKBuwpt0YyxdPCk7rj2fYOFnRzQaLHH129PC0kynbfBzqQeKJEkbXa6gHGv1cD6Qg9IH94B2CzG03P2A1730zxBVQziB%2F1tsLDg%2FEq5h%2B55m1ixXxMCM8oWOGOrLB%2FNrG83L8C9IVTtbDt%2BmLDlOFMjrO8ZO4GUXDfToqXr2UrvIbYKBRRMYiSAIn8t3hXXg2I3Vygt3is%2FnHWFCtP9tEjfojo9IlFwtLZVHMFfQc7TQthJyXhRSaK%2BPU308FjhX1xMz%2BnVWkvWiwhsf7dBsbf2PYYoV2EU8D3bb8sHwWEfQWzg9D2y0YUvQbUYMwfmzjDamGKrcXTERFQe1YeNh3EC%2BsVqiiuFB2Y3JN8sOo8w1SG%2FlwzuD28RK2tIUaW6doFE8OmVKmgaLTdikDXPXSZJ8ketzadMQff5XmsCA%2FFBQyG769JtDdtjOPWjJ%2BUKHNCe40m0Sr6cw4hc8lJWBrA2ScCLWmjpDYBmwKSoCAVo%2BXNV1ilRa7hAJ3ZPHOWTVtm6gE67xRBIBf3OuKVJqDWahXhlSEki%2Fc%2FnXS1nQPWtasfu3DEPwZ1OebY1MKHsy8kGOqUBXxSH2gLGO7hDY6aBzEnp0q8XmzhEGFZ9v0Wtk9Sm%2B9XOKEY1Ma%2BH1RAYoEBvBDZbWLuGYRxzdCzexf11wfZpU6o5YxrtNNmmBRGzfQebXmkAetGB%2FsRxvnjW1534FaDx2BElVAHnV6Q97YA9D4P3rPkYy8WWT1uV7BZ6onVzECevoQsJVZPa96SpWqUmzPK8iK0%2FggQtRau66NP6al7difDpsLcS&X-Amz-Signature=3ed95fcc09db218702e89093d45a6d926440441f8686bda448a28a2d8d09f764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

