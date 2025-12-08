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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVQJMRQ6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID71WT%2FI%2F%2B663w8VTSSkAha2AX3jMXGOXEZmQplLAiVlAiEA5srwSWDcCNOi2nyzy6s79MwZqGTJ4QnME7D%2B0RhV594qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmdDlIuEX6DW3WLMyrcA%2FNbaYRkgMwgL9uPVbzaO27z85gqPUrQQl519jOGJGbolV0Ala3LTvzLlsH5Mi66HKQ8QZPMRST0CUNca685FnWgcy%2FdqHrrqLkGTYDlbAkb%2BYWd2GY8k%2B3qx4nfG%2BxNGjWYzr64bGzVQEi6q6Z%2BvcsTR8SkPNQYJYVxFI07qlXNMy%2BA%2BHMYoew00zF%2BA2x8c31RqOcC4%2FoAgRtVA5KmQ1AZU6YKwvQxsqg1DAOHwFUYfiVhFcAgE1cPXRT83mzcXeYbeILYZkbaSjy7v7IpTh3Wom4OCDRRTIFzSNL4H0d6AOxuoCUw6%2FhDlIzPWmyp2mZcPK%2FJm5kBAU%2BxEddYH%2Bkv8Vy5xHsWAAcqqYKc7rK6gsBNBkzqlszhveagmsg6lMxnCfjyP3UpCE6XIeGt4Bjhl8EZs2RVMsUC%2BWQAlU1dmCTMAHSi7FrYsUcJKvzS9kDR1KBGOl5u79FHBMKk2a6VDcgpWzFMBbisdz%2Fm%2F174ygKGAC2It8nsd9KK4gYRtby%2FkQVRcYqfy8vjbec4Y3icKK4fnXjAY8jxxELYL5tjJUnbZmiH36F1boMM%2FlJL%2BkqoM39BaeiV9GdonIlDep5119nnTkzikCvPUxo4mDyndV8occn9T7E9JNDAMNGh3ckGOqUBvHiP5sNBc2qQHKHkLgUYvVuwMyCJkuxcjZG9X2OQiKZaZPzJSutCENwqf0RdNvRmh5ufiKTVBJONaj7L256BFfBBhmEGtKEKs9D7bLrhSlJeo4kaLqSmjEdzoBBVVAyK5rtP6Cz7%2B3v44bZk%2BRfB%2B4HXomPZXoXxLdKhD9vBEFCedg%2BXNC2GEvUkcq%2B5N9l0R5JUZ06lkRxajhY%2BpwS9cMWlFn6%2B&X-Amz-Signature=b7cba6c6814aa68aed0fc4efcdd0f547de5cc270c29e5bee59ef61194d619957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

