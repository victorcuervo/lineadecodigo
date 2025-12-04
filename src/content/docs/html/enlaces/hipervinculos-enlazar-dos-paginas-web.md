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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R67SCZO3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIHws6ILGlKwsUEWgGB%2FK%2Bxc6zFOM2hhdvdWb2OwPrJ6hAiAcrA%2FMvHPS4CLz1%2Fb6xqhW%2B708CEe%2BaCaBbLqA9veFSyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMb86l%2FIogZolIszwiKtwDbOuNDk6RSlg39Sxke78StCLKH4ZG71ecaM%2FEgNtqXikx2B020Tn5BfZDvFnO4LcW2670AJn3ufYhETNqDQzIGqSVc0Y6xfY%2Bv4jlTpHPWbAdfoBMA2BDyy%2BTmJdxrrXNVWB6labI4n2eFA7x65ovUhFiP5cLjZgMHkzPEO%2BifzBP7%2FOzV1OAefEli3H5c%2BWKx2SEyhhnOyBHSS0NKMGyoQYxskJNdt1zHwvBV5%2BVdovPSjovEN%2FnqNtJIgCAdpCFMWXZgx3f2YYhh%2F73t8ny0loJYG9U7k6ayFT%2FRHHzXxyehgvJB%2FRIWE7LbXcBgpnH8jIGemsSvO24w3a%2FHjxQMs%2BC5uGGLpL49anOy%2Bj88g%2BV3lYqECLoHTnYHqpJGCtivM96mISsdC0iYmSyDqQBPcNLeUC6j6zqtYyHBz3qRilszJOZeBGs0tZbtsoni2%2B6E3X8W8AvJTI2q1ZD09R%2BJrQtLNeVmWQ7G1hNoj4%2FoHtcek5TmAQc%2FjBLZCWTTgefaVsEtK%2FEuvVBS3ndsEtdQl68Uz9OiXq6Age8BzyUjdK32E6os%2B%2F5dPlnLxLTQx1PksDKOYEcjst64PSzwVn9OY1tz3w8ulemBZLM49yxDuZGTZzDJVtWrECNExYw4YPGyQY6pgFccOZMqHOyzjSKO5AhQY2FnMcSK4Twl0mGVk4vxPwFwMt7wNu%2BHr%2FdKHUi3OFyk130OmKJPjSpD40YrImA%2BGHwFCh6TVxxnTUWSdGI6fi0lQlasX4iqB%2Bq8LeO3Ag37jVv%2FuoybGzQLX87gVmdKYgiCQ4wmD9K0EH4Hk1xY4EmtBvCrjhVL%2FlZdvNKtZO0egRXAq4cXH1a9vr3MRab40F30eLrLHqH&X-Amz-Signature=e7ba46f6189422b1dde70a16c1cfd66536aeda2c37e22957738901ea15eaa8f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

