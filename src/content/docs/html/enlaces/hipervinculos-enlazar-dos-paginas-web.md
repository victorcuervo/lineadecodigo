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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIDBA5L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T143612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwk%2Fisk1LH1h21E3cvA0g18xRhR99div7419uPlgoT4AiAG2oExi7ir87dINcySI9qNDswivs194EcIigI5YeKGgir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMCtqjGFKphs%2FL9KB1KtwDVM%2FT0QuPlcqQDz%2Bf%2FQ1UOrZosxQUWImJ6uogY8DLjNx06WIZDjQGJpk2GePISF73u0xWALBLm8jPz0Lv%2BQasiWpvQaZ5EI4pTCczqQxoVZjPhBDk4sVCsl8RfWell1yPI5qE%2Fdq4US69hRANvN56aWzMAtmgIWzyq7fyXZE1u0vH2dKwnKrC%2BaMVZIwXrIiX7ln1eo3hF%2B5DXLNqNqJplhTezw302CRZukOaVcYydOtdFsGjtGVppSGdp8vaGRUp8DCNyg9tsBagT1FdHcvCj1czz7F07TXY4kCUNn%2Fe7AwpRR5bQo7rGvLeRgwXgJimq7NiJqIjI3aG3J52G03%2Fod%2FJ9MXFmm%2BZYh%2BSrXoHSeiapCge6vekB3cca8uJ2GkA7srEb7sxyZUvkPHe2rwLRayrowPlhi%2FcIgXWMoE7H55dEHZCoWsgdwH6dYUns%2BuES%2F6OOP0SkybqNo8G3IP%2Bb39WIQtRbgwaLl%2B4B1NeGhYIIzF7nNvGk5Vaha290ev9Wc0gQ25bvF3J%2FzTkPSpIkqII0WtyWprhGdxebzevVnHQfCgOjGDj8ZYI00MDgV2yX8COJb%2BC7dPQfNbwyUExHuu5d%2B2BjGi0xmi7FJVNLJ8x4upkf8Hf9x30%2F%2BwwhKfQyQY6pgE1U%2FPxYiJ5OwAQgeQ2%2FiMOM4HwFpG5%2BLzzL6cdF76qD792DHXrhCgvPo0cWrTpCcL4wyyzxchE%2BtYOgvndZl4Ls7s3Iiwc9TXwIA1gbYt28XbDarsKrTHGWKE4JX0JkIkaw5%2FH5%2BFmkTNMW3b%2Bx1UIlfSbgAf4W0E1lTEs0TT8OZukqAVQzf1yXdBWNnaLA3fXhCwBsmJCIrBme1hxAqiv7KFOxsY8&X-Amz-Signature=fc04d9acfbcdc5c1327b29fdde9eb734b6c4a8ac861fc223fd4a81d2437b9b67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

