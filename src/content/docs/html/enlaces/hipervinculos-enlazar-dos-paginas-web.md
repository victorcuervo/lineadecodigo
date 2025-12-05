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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645KGOLFG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAigAG5pleJSAWS8Uu1Hj6Ya8ijQSRRF04yE5OOxV%2Fy1AiAtmW2KL8HX7Lmyws5yjonVzZR0I7neTM0%2BiHtXr0IliSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMWCm4O6tWcOIRs5CtKtwD1ZnJ%2FvaJiCXhKHwQ1%2B%2BGBKzVn%2FfDvGfmgzaVHEdSZ%2BtGxXODwd15l%2FV59A5v0GZTa8qjVEoz9PTRL9hxpwgjZkmKo64cVtLEeTi8kujSW4R9a5qppCCxakPs1%2FGNBzoUSiatmCWtdfXUpEQUYEDZVmzhTNvZmN0RBgc%2BlpXtPBXEuWPHml0nhIupOwYJ4%2BXT%2BWLjCZRiwnMFGHDpMgo2BhmIQC3mvwMlBJ%2FuFz0yYAoCHhz53nukuX97eO2VI7tQmkG3SBK3rojspAAPuN9On9HBUZG4VN05orj8xgrSfnqehCWpWyhmSpwqxEWqTCcpu35GYJQfagFHS0Z6c%2FjTGEm3Tk5VokOMtMPh7rRiK7fAuVJrrLVPqM%2BDRbLqDVZkyGJ%2BXh8YBfT6yhxOdFTihHygAnvYJLuqzSySRrZcpN%2Bw3uan8HCRsAPjpRt60i1lNquliEiLYGaGzLAhuuo53xuSxZ15s64oWq05zdMZI2XtHp4yJmxcp5RcZqo8LajM6mlxzJyuakz40jnyuzF7QWpn4CcvP4dLScgtACDPMS%2FmZ6%2FN6E%2FMojGq2Zb%2FLXBAQKTdMt2S3e3H1c1qjhNjpqf34U3pzfaXTVkpH5neUejPlxVFif9tvJ8X%2BN0w%2FNbKyQY6pgGkSZq1sLT1BWW38M%2FciSJ0U%2B7dyTotKwUwOrJkeacA1wZKU2kmsPT%2FHaW66Aj79SJ28FKDAM7vw7luA8MrpA3vWudqIGsDIA3mAcrdTGCnsMRUDASrJQIY58N2IhIbVyZg56eF5E5D0E4yrYLYcXVV9%2BwjE2hr6AP8XHgvWavnPg6ll7y5gUST7b1EAhBRx5kEX2uqgmy62DruymZ%2FMBdv4JmUV76y&X-Amz-Signature=fae8c4c4318bdfbc1f30583aebbed453b7be53364dfa2441d34765babedce51b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

