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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662INULPYA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFbXk6SRsv5HDDi9ikwzPSj4NY4CwI8%2BaScWZRHGG4pwIhAPbruyuGEN1Et4Yr18tfXDQ9bO4yfWjBKXmusRUnMWJGKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyaduq%2BrZd7S%2B8T0REq3AOBYVMXVT51JUuPoG6S8tdlTvEoCK1PoK2eOdcJIkZRb2x05UAA50Nqgf35QyP4zJX9rRHZlBy7XFPn6kKnHhQKDG0DdJHfBDWYYhaTJsp0Qi5d%2F8YxwwbumtkdpJD8sZVtGd8RNjftixaQoapas7UDLLk1%2BtDNXOv0C6UUIIhPFGAHYE2dtf3QyQTr4k8E8M%2B8JXyom%2FatL9JEdnxxEB0yJGEJJ3wgxxhY0h%2BfJ2Q4xVaX3zVACMHYv144FSH89XF0hRwTCOIlRTjDx6YTKg4E9EY0tg6MWKQQeYc8uYTZb6SxnMVzbH7dSX1atNVkZNXZG3ti7ADD%2FeE6u%2FQ9jW03tcAL7Xnc75hairqiClpMtMONevasoR41LUSRB5Jb9MBSOFgRg%2B8cAogn5R2V1sT64EuILyd5Susb2ujI%2F7SOLnXAoo2i%2BRKAe49d26CRdFVErVnNJJupOE2Dkog7wXRQaQ%2BsfSnkuqHBnviDY0lcKGKDAYOH14wujJ3SZdan8VFw8h5Hx4bGYW%2BUuZ3KQE6IM8Of%2FdF7aJSsCmDXewBzLGRKerla6Xtus6RJka9l3tEjRNiJ8ICe%2FApZcyLPhE2OncyFdjQSeDxrbxNav6%2BdUGwveQFS6N2AqPFbFDD1hNjJBjqkAUcqeN7O83%2FvvkxeZ0stfMno74ixnUWGzoQSDl9EdeiZnNQ5wpX%2BFHrJbczJ5Ahwmc%2F18J3L8Z9qbvDVzaeGKIla2JA7IcY4pLlSehZ2mxB166Tz2rtnv4n2PYuZfBCBcl2oKtcsJOIjs54LO8lCJY%2FYXLoD1PC3kuuMrDVEdjeUThkiMTXdwiM9lTyBk8dcAk9QdW0D2wSqmw8WXvqbFujPM9cY&X-Amz-Signature=c5d57582495cee33a745a57068862ea9df3385aadfef6eaf7cc6d121668a40f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

