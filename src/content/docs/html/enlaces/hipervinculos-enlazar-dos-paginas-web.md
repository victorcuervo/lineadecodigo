---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTXVWVNP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFw%2FfDYO%2FEkE1kf%2FhTvlBJprCDvXUHGBvkE2dBhk7hqNAiB26Vv2T4ETdCT0usRNHYUerdiGnHZvsaSBUwqy8WfYbSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMRR2gPAPMTlH28qxXKtwDN53h%2F1Stj7k0oIk4bBMVC34ETBMMKYdEu8Rzas1uwf1BiFAlUDH3f85UTLvQq9Og9iOm4UPxIlRHrGGQP7ugehR3nwrSVipVb2afNDzlmn4HQC%2BD0sL3uP7yg%2F0aAPYHCmDIHoN2pI1M%2Fcd475KE%2FDCLtD4yUyJO%2BR0072h4lT2NzS2Gwq44qIKFp06EcW1%2BNT1yJeIZwFLwwP6uQ4yIaVomI8ChyUUjw9tbB37JusBe83fwaCS8NQS6hB1V8C37f2iwei4RNepmfSjHNGOrn2uOtFGp%2Fp5UeDuN5NEUSrh7bC9uop9350F%2FhOPHadqVLQbM%2BeJDJ8XkE%2BlcPGkl%2F2J6U7IMXfxoUHmO%2BUgCTWKY9riHgMoL0tGItxjOpPhK%2F7wukY9ZfKdD8pPMC%2Bw7w0KuO2hIGPTZJYd%2BupDHpzdQe5y57w09%2BMAk6w0zNY62Xw%2BxwEw%2FRltjp%2FRKgYSnPIfaPBI2kyGzkCke1m9qnqPE8WGDjoS5HXEi1CJzGVcBGJa%2Bh2ulFEUfoug3ufUrPLXeBZCmqPevd8KHvi1slEE3Pn0lJGmhDuewlMxA7I9HYL0Q401msOFsbp%2Fv2LJliDLXILaSPo5uZIgcd1ss52Yd69eO45f69EHzkU4wz9vGyQY6pgHS4yWFy0Y17khYXnhuo5nsNMiMTiD4iDNTpXMqa7n3Fmudw51VxfpZNSzk%2FnQywuGxbOFgh0U7lKZLRGJ7Som%2B4zkNLuGH4B2w2eXfsOAM6FNu3NKjzDi5XlG4nHSLlkyDaQo3met%2BcxNMp0SO0r2ShgTm2AlxEoTJZmyXn8gcF0tZUikPpTJAZ30LuZKF14nQpZsf%2BindJXTOI7ZQGnnFx27ke7CB&X-Amz-Signature=d1a633b8738850a7e8fff44fc7a005940c21b1047f2bc8eec39775cb98b1fd9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

