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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3XMPWNU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2AWqZX%2F%2BMrRoq5m%2FaSUftvABggp78kOcCqo%2B2UeJCuAiA1CnE8WTqE9WIMvt2iGT4skR0A9MakwfG2NHe8I56ScCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEZv1cgZwC3oY0gD1KtwDsLow7BcndzmO09uobUnqmcIsH0brqBfAFOwQZBzLXHzE7dyOZBk0DvPD%2BJw2lqAVnXoYpH%2FsXWBsBMX9AaeJX4vQHxsUqczEc6eTpWJnLlYSHn%2FPlCNSpBN9WQMOX5AlvnsWsG1vV8o03lR36m6xLDksc6hkReXJwm7h3LIKTOCOfbokaDud%2BAgH9Sh8xBvNbolAuWWx1LgM7rfmqWoEwsaQw7BZJoNW1hHbseVeFEOgySP8T8pIr3%2BXdSfsX4xCWA8TAhl37RxfPgbhuFhv1dmTYA3TCX5B493ZlYl0JmVWK8tEQPZVvachBlbo2DkHCEKyvabISwY3v4QRcS%2BY3qH7TPmvicrNqtcjkeXNecazDMQ4T9jKi9F43%2BfrLTybsnsslKgrQUKXCCGfV0Ed%2BPiCN8WyhZDoyFuoc4iPrlvHgRD5bHKGGl9ta3%2B10Cd%2BcFGQmBXEiRmE%2FAzaC3D8Q4E%2B4hZVvcNsYHb5OTWlT0Ps%2FzqXdWOcGuZf7QBk8C%2BYG37lFZ1PRVF%2B5jOlOWm0XowgevuMuDD3tBqqIL8xOiZWdMj7Uy4nRpPMBvhhl2uIfGq7r9%2BMYPxMccCfMUCm7Guii8tXjfDuV%2FqTZsHKIWSzz9k7zRTxp4%2Fr4YQwx5rVyQY6pgFszk5qt26UcDZgIx%2BrnGWAsLFrR28ErCDnN8hvjeasQjrs9cRRhWgBda%2BnrqKdvXX7QnWSYSLf%2B2RokUWZ2noLfJMG6qQ0aTlot0LIQ8NRmmX%2F7eWqyJfuKzWSHqhrdPJn7tOiCKL5J%2Fs860s26j1lZhL35C3ZfVkFE9eJokmVSFKg6YkNFaXDQObSvYYpNiCm4Yjt6eb35CmISUYe6%2BN87K%2Bjzu8h&X-Amz-Signature=7726a2f90030c09c2ff702f53219914750d83837e662dc0a97c66b04e752ac92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

