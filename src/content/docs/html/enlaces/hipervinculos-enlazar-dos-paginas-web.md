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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCUFQCZO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9TXxBj28WlG%2FTLPF00M0N5iG%2BfV0hMYh7o4ib%2Bjy0zAiB7fF5fBuKCr7RQbniB0u%2FpcYcVzs7dJC198ma12fUdRyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMMdSGNIC32fAZtZd5KtwDaFjI3S24MSXubJNEG7BFL77qUxmBdEUZigwx16CqiKovFUl0k2jN44ITDnmnUXzKWoQT%2BkOBxsuy7i61jM5MU5Q4H4l5aqEwNzcQz3YYp2EJJLCDJfZ8Go0nWm0wSzgTZKKVg2vOfEdpLInvEHUlKNShtMRGq8i6G%2BLLSwRkTMvV8YrQaqDrqtAqMfi2cJ%2Fco06A2rNP%2B6vc9Rxx0pB%2FF4mwJd5MDWWfmnzrCzFgQt9AZ8O9NcFrLxVrjq3GwMfm7fogAZv%2FQpsQmmZQhKU2Jgwifq%2FA3ysdSeAn6ZiF1%2FGmsE56Q3VKCfqdSr1PvVvZ9AI5Ix8UGIy6N9Y0bAYTUh0EMwIfNJNDTVwBaQmAcBoHQwTTllz%2BgFBTQYQKNa7zxAj%2FJOGgZ9TabJoLSftJ8DIJA6iZ5KQdCm0u0clXcYzVFhci17e0arDA6%2FUBP8CZViuYznEmNp98buXb9JPHH%2BykbFm6lLV6jKiV8QyxsOI3IC0VPuSbEVmnvZam5K8YG%2F5xe8MIUADlPK%2B%2F556BdVk2N9g2cA3raP0FpIR7UI5lRanAEuzhIkviL1VtlRQBTDP8pzhN3XQyO50kLQLsE3uZ4tjRWhNSeP8k4bOBRNf4wk%2BdhFBtpQjDQR8w5MnRyQY6pgGzgAph9xQIQYZ918xy4%2B6mGIt77yqZSPCx4fHjR7%2BIjBr6RMxsA8pqF22nXM8UCMx0hJwYF9sBbphXk5LU3lG3FmSgS19m602ULnBle8zCYpE9zvnnwZ2pjGsZMPkU6Lfl30Y9cXgsa%2Bp0461tS31WJW0o3LuLKlVYlD8Zva%2B5IE51a3fuUIJKSlXeBho%2FfYBEPOLCPOzbTayNf50UnLX5Kg5BpbPt&X-Amz-Signature=1d62f2e29d5cc773565c1988e001b9c23b105330bcf3a6ae0aafd8a12a0036c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

