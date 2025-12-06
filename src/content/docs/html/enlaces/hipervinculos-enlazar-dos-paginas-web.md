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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQLYIRZI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY8Abv5JVApFsgc8Lpd%2FqsgPxadvlb%2BBc7w7KHHMmgdwIhAKYzVLs1U%2B7NE1RmJaJ6MLA9wNwRyrGqGbv6wt3xu5%2BhKv8DCHIQABoMNjM3NDIzMTgzODA1IgwBwpTGVUcvwJXEJvcq3AMqDQYGC83Fe5NhiV5fWcP15jLvzH69tbrpIWggy2BtMYx%2BYa5FmkzHf00Csk1hZijsJEHph6JjQtmgB2UG2ok0Pr%2BMBKtW3NPfhZO9%2FlKDQJjtMxSdnlpkdTD6t3l5gXyNCVOVW9TknJqYZkFvchmsIirCDxGYwpT5HyLayLAs17UDfdzrKN5nC9W1Zqla1LYcfuBgkXMDKVDGI3Wz43VYyW5ZaEaWuCldRn6EYpHuozEk7Jx0iJUvlY3vZv332mEC5M%2BFmUgqPJZ8mnJ8r%2B1PESaUOhHWOldWCRbeGj%2BjaaS0ICxmBwRFoNZOKLkaqJ3sMQFoiuZ4M6%2FwKYFLA5h7vErjrW0X29PgZLXS62cwnJhBwkGA2BG4ywQUVuAG0%2BU3s0zY4NeLENHY2u7viDc6ioDcaMNfa%2FUKo3J%2B2MW4VrZ%2Fn7%2FA7B%2F06vV77gc7aAa7q0dW96fMtmgMlL8vu%2BtJsZ2qPrIw%2BNU%2FIOkbbr3gvYBoFbZT%2FaknQPAJH48Ew0dAr%2FA5R7KtKj2G7GRDImIB0jorCgugX%2F9fCQktIXZCjrc3KiTBkrIDPWVBkfwb9%2BFIwU9vd1lYU7McknYLQJNZWU87ogsrTXDdleTDbNtJGHTUt99HZLEzOUnbpjC768%2FJBjqkAc6c2X1BOLRbsU6lubXGliFX09uaeKixskoiiHf4xxgAZ1tc4o29pty4slfGZZlnHpPe4SY184Dx6LTR%2BXAUmQO%2FNTcpvGuNknW5y%2FsmfdX7%2BahnOaiMQW1aSp4e6N%2FpU%2FyCJ%2FYmxF6zNYAFtCMsGzIgfS2QBr%2FvvRuAyoWd4vmy%2FXUOxWECqY6o4DZA%2Bu%2FFFv98LIehEY3CpUd7YfMECwi%2Fk6Jv&X-Amz-Signature=6d4e74f9605b9d7376a4ea5a376b1bea02901a35502823576462e9ac8ecf7d44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

