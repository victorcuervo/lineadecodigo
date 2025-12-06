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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSFNXBUB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHIHS2gOu23Lxuu1kQxDsSdMCl0Gw1Jgj%2BjqkVFegUqgIgckYt2bhdZ7RGn85hIrBXMyDJLokMQlC4KKnSVbIVDYUq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDHMpUoYoIhB82WB04SrcA4bx3jOrZjQlsvnjjMm%2F1mZ7LpQ%2BoyFRUJtiS8HMGSMbgixb3XmffMLMQMv%2Bf%2FR%2FOZVCH6Cbl8Ho8ayk5vQl8rDF1DK55qraj6%2F3%2FloKYbt6oV6xV%2Bm10uqp8o6WSdKXBgXfsYWeB%2BJ8lpU9z0i4wJi6BKgmLypdzMQW2N%2BtTR6cddH9QhmNKWxE9hcG%2F%2FhEhIV8Jx97qi7Ff2Cxq0O0FUS2Ithkn9G6ky37na8GxXl84DGKtQ0jyK65pLfzGGXjnB6NFLmFoaXHhpybcPYM0%2FdKuV9pNGTLbeEHX7B3wqbc2m766kFMToLQsYLWV1vaFsWvGNTLYeOlC9q8%2FOgBireiyXnSlol9grrjrvihlPEYrOioJIr7T3nuSKpfv0ieM2RzeBtN6Jen5Us%2F7OYuh9UCTj14gwsXhF3c9%2FR14L4PN4%2BaeVfZcWeBbTsvy9xSNnRTvKpQR0XaVXqEcaugRqHZtsKLtZ0WsdshNLFIZMNI%2BbZtsMyqgq%2FFeolBCS2nvHCdWOoG1F%2BZcu3TuKOLP9vopFN14c8F11QWlcJs42Vcem5uQ8jHZi5e7O6eTI4NWE9geu75ZQ%2Bo0xeG5wSW3UhLIwPs03pWcON5VcVTzfc%2BdnXeNjBFC3Zh%2FPw3MPL8zskGOqUBGuDLmpouqCvrQtalUTPFlLy5ceTKVbvc5XISChL7uTCS8IuD7EbL%2BWTaBTYMlrezIR6BxtA3eVWYtWTRmFogtqIHGeumChKOcmazU4qe3HghBEUgHzDTngkuO3zi%2F0kUguHcOAuA2x8rJ83EIHaVexnPbCdbtCqYOBSQxMkWMNc8qIFm20NJPDO6w1DxnhTN2xbCCpH5O5OZMLQa3Cv9TE%2Bj4HYl&X-Amz-Signature=4559e0cf21bef5720482cb3539a46b20e499298175ca2a1d19f0a8943f18a0a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

