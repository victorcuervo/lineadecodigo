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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KIWUROA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T114544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy9A7ROJ%2FZgj0jG7HJENzhAfAvbPhUmxb6RAuGia6K%2FAIhALqm1WeFuCASUOyp%2FOIfC7uAf9B0fRBzI7z8iI3vkmFfKv8DCFkQABoMNjM3NDIzMTgzODA1IgyBl%2FPMdjbR1cSD54Uq3AOYPERBfg%2BURBpzkoMJDA9LDR87%2BdAbSTxydxQPBALJF4u5LzB5Ipwr96hhVIhpBWSn5nO%2FYZzSosqtRJXYqa2%2Bf7QJ7iY7sVpoO%2FHB35YjTtD33SYi5MxVd%2BGy96NpfEoEAEmt%2FwzTM5DgLCCs46ZKKra0D3xmlET%2FOy6Gktg8nJUVckFg3%2FfDuWuUbEir0nxKWZ3GjESWtmMljGLcS4tOezW4ZIj5yxWMSTxg0MfDN4g96Qwvv%2BuYxkk8fkclHmDgnhDx4bLXok5nC%2Fg8I%2Bwn%2F84KSuzNhZmzVdBCXmAdlHFdqoJ3ceE1vcBfTKEMw4TeYLZWo3yj3gVX%2BBVVAYALhoZv3EQD2X4qmXhVvRvRTwojhi1OZ5gyPNEBqFpYTBg9ztWNfvoOTv%2FhGh8CUJgYZLTFwuJTP5kDT7%2FX7Q0Czte%2BwQUsm9i9i18CMUAtP%2BTRn4vUMxvUQ39Zn2rvm1Sim%2FzlcLrCBGa956hE0jKj9ybe96%2F0zvD6nj53tAYB6VbQLfQWsfYhXnQZYwXUdvLX3LJSOUTejNSfQ9COgKoVsww2J2cLUbI87YR7NsSnVAvGEn9%2BI2eEdLscfbFUoNAFOgh7%2Bq2es5alHXx4arkQWtMxZx8%2BFdFiPo8VgzCmpcrJBjqkAVqCCdqSpnd%2FIlFlwERX5yHYnftrtEgYcssqIrH9aKKPGT2o%2BpGF6sh%2F4Wq9E8MtHKfYrnpG%2FWMCr3mhPnhvYH2YxlGINUyxGAFpyLkWfm5EKmpXU5t07jhddAQrZ2UMN9jKqxsloyzD2%2B0Trob%2Fjfpdf5N5urKVHzPUyzk2uSFZjjtZZp7tR1LTwz83e9y7plyEoeRAsgcK53QqFguQ7A2%2Fvas0&X-Amz-Signature=32129f9beb9a305c3ec3fee9b506637def4a45108229d0590e69de5df1bcd29d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

