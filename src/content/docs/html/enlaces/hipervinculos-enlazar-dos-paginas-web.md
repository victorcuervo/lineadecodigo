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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G4HSION%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDHOKHu7G%2FsV6XHmJQqOonfUR8t7XHoSBA3p4ASzbluAiEA3QaB5ryq%2FM%2FleMR1LDI0HKXzUNgNVNY19sIj3QtXm8gq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMQ13IZkcZ%2FkorUXYyrcA3eokRhXTyuDXco8Zl6W%2FwEKh2wJHaII%2FtwqmZ3qjcXrm32OV%2BOIiWeMV0hXlfHdsOOm5pQqsSVKywW9vsgolXB7qE15nIsjTtSRyNPWbfGQb6aMj9XksvT29GpEIMixqI2OyKVKpR81LLMF%2FgDPuA0oaHzSFdMPhS%2BkblTgvU%2BEJcPh98vlTtzieAcUaaRpyBB8wnI8QY6LqUBG9XbEqudqaQaB90VPnY7ZXH6yf%2FiuDC%2F0U6kEbqvcVxjr%2FyZWezEIhPrFYGfHks%2BsIYM8il5%2F8VEKBYCuxrhF03mWAqnZ%2BXIrkIMrbIL58qS6UPrPKinffhn6Ii5xtjgYEJrH%2BdmGqhBlJtr3Yk3xP2iRpkjpTCBe7XlGoj%2B9kDIx4W6WWd1X1%2BjDUumoYkGG0P3rKei2HJ7wmXd8AZwiMr%2FiXO6GVVszR%2BuW89u6yKh2VG9mOujyilkPVlijkWDETUi2j%2Ffifnw6Yaed5q%2BnCwD477if5oPlrhokqkxMvbd6NIhSvMT45xGcj%2BxDJj3o4j7sKOCPIVcmd9Pycd7yUZVTqpWTsN0rhDA01oWoint9xg%2FdPNDrDj91JjW9OEiic9DyhTseTHa1iZ4LLi3ed96jl36BRAWFxsY6TGP2fUBjMMrezskGOqUBSCwdqLonVsiTYt2R2a47LFPxzZgOqzm9fYyBDERC9aFws9CFiIPXscx%2FDggKXc1FjK7EA8GVIpOA3XSUVj6z7AFMoEVviOBUiXesuWIAde8%2FQgQrDWS1YEkFdRCw%2B4Enwnn8k9qL7baA9dJ9NzJL%2FG3VN%2BK9E3l%2BUwf%2Bj4%2BUdgCbySCWlutmNl%2FCbxBM%2BypDDvtpetNdgmgRjU5CA1VVK%2FqaQS2z&X-Amz-Signature=503ac3bf791b2071e0818e06d31ef3a75421fe3157b82a9a99eaa6e551471a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

