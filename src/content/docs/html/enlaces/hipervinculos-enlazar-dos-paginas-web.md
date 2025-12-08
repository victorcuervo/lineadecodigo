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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3GVDQK3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbl6vR6H7R7UYykMLEwEvL7LW3ce%2BwQPeS4nofHUFSXAiEAwSYg8Ydg2UDLt8hUEXPkgt49ynmjWxk4rWXYyxWd%2Bq4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiNdJQR7DmBsGku1ircAwmchAbYk8RR80sT6%2B6qMc2uArmZVytt7hYpXyuHRqFkgVEKDcAV8gBAyfPwAbgGAPyOmGLy17IAgxNT1BSSYIvlAYSW%2FeAhwS42LuhmhUgzIuSGxY8lhETsIkusvGDD4Bfh6jV2Ujx0%2BHdlk19iByDk6h%2Blqzd7WYVfIVyK%2FyM20Liefa3N43o5y6a%2B%2Bxq1YjeSl%2B5eUcpGzAxNh6ZpI6PO2%2BqK14YkpfZphWhqXPCIv4rdslbm%2F%2B1ysOhLINhp9F2Ew%2BTXNR1ivFHVPmz64qIwRM7yYeACuIAX7TjPRyDoYOMaa97CwsRAkR8Kqn5bAlO4DZp%2B39gqoxDFaNMzmberv7x4zvNByACOREfVbuly%2BnYnkU4CRxn908XUCEBhos1SN1BqJ6G00U07Lik%2BBMn2Sfok6%2BEW%2FEyZ125UHHVqWpbRpFpxOuNhpxVG6VQ7go%2Fi9KHOr%2BR8vvhPOBPG7j1KzcVYLDEiUjzKA3vtBTlI3WDyIz63LshREDlgmgWj%2B57GpmZtGA7etlRSsj%2BV2KpDeRyY4%2BaTUuEBtSXDy28SITkFaPMQuPG3L886A2brgCVmzVYaoh8vvbqCYzItu%2BErU5bgHrKRaZv5OlkJmXbxqS9dPs1Xg%2FeceJ4QMOqh2MkGOqUBeJ2doQM%2F82F9UHs80fjPDP9a336Mxw7DxU2r5g9EifA0P3alMOMc%2B%2F%2BevTd9t2NVsFVIpdMnr4zlBnuvcf%2FRb0hIzKUKbDSxARu9GXTR1NL%2BGHwd867BdBwP5G%2B6ykfeRJMEs4wFuoF2FUwFHxgYJGDJSmdPKt3kQGH5r4vuQLVVDOZJ9FWuwB%2FCCcDtC2neSHeb4qJon1opGC1PzkhXVfBznWSs&X-Amz-Signature=260ca3175e77f544718527eeeb0e2bdd234969e19327e8a2fe63c6f67fe4a3a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

