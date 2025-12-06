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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGLCQ5J7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1D0lworQrl7FifFcLM8ixUrbX6dvT61Sa130%2Bf47cewIhAOuXRPQjmzIGxA2cLzYoPRfxb9Ickte%2FVYb%2FlPxWJi3fKv8DCHAQABoMNjM3NDIzMTgzODA1Igw%2FpJVoueNrnPLV%2Bxoq3AOmpOCzNC2i7drxhFqw7keYKXtrwKUpDnuuyD9kzWpgckMY4Er0Fg6DWqytlxEudtPi%2B6Ejmc497T9tew5zwApo1D%2BRtpch5Dau1NV6DYF%2BYoeM7AX2XIFkdpO5BRCJ6nX1lznhmEYfb8P4Aj%2FTXvW0CUNQLH7xo48ck26eoxaKlAkCscyxJsBtqmm4Cj3rTUmc%2FCWcx%2Ba7kDLyr3gOdcHjf6VqyZrlOk4f%2BLLnLt%2FYEpNzksgtTnMNtcnahKbmYBUn2qhBBLP6n7Z9Y4qjKVcDGjHgrkN%2FjK%2BTrrm72BwrwL7XBU%2BwT%2BGsjdJEIwYYn%2Fn20gvWAVMplGgW6IKR3bGHJgIEtp2p7zkoHWUtjQVqlaOm9%2FYcn1G1KD3Y9pP9%2FEaj8C3%2BamsPDaQ0XGwMcoYnJi8La30El36gSb5D0by0UJSX5lafUsenM4LNQrUNvyUU38ZYQ9bDn7zfJtfgE5pHB6rb0ydQrPRiSZAec7ZVerZ2eOUGxQqGYsSoSSBMQ9DK0F3HZsV6AXCm7LRfwoZqbMqCkgrVdEGB0B%2FT6n2jlnHykY%2F37NbZwgliVz7a8OjIzgL7Smref1DHeDhd5mP7uPVHcm2mCiuYnbaumhU7f7o2twD%2FwAhZ5AosQzDgns%2FJBjqkAdhDdTeHBZls4OKTM4yXpWVtefdXXqZkJO2hngPD%2BH0q2VI4NdR%2FD7ktGjVlFtupxAkqUiWqQ0hSB5NDHtg3WeFXt%2F47%2B77UAxdEM8PtzHnNMFofPFroHLt%2Bg7gadOmNdoYZ%2FJl7W3lGZQoIKQgSqfagwhuiysIrV2SL7OaFXCNe%2FEVdRKqTPUY6O4yB455PaVN6zqQHyZojlJWyeaPjxOT3U1W2&X-Amz-Signature=319ed0b8a6c1093cb049788443702567ecd3433007b16522e1b8ef2ccdcc3168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

