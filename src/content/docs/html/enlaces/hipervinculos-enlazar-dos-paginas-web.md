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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT3S3KKZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx3DMIQwnZmCfN3CtvRgPF8ad9uavTUA95G9Oc2F4rjwIhAPNHAzQXubcfqBpmGP5Yb7kjbeAgMsM7J7%2FSxiVumy7MKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyzkd0nmb97%2FsxgKqoq3APvrCDOnC8N1Jvg4HRvCLFmXSMe3JUtk7HeJlORKCZmmjCEtui7uwoHucMSkJvbRVLpfcGPgETDJsVfDRSJuaf4tOfxLWcqIVobsiTYv2UkBocRmgDipYdDVJX8NXNsbjsLhLT3sIH6LRxom5nPHeZzUShZLc98jDCzvI%2BJbTSjGdRiuxLLFM4N8gD%2BI0xQ3hQ7qhILCSJJrLMF6wc8KpyahEaB2z9O6atpCbou2NYJMUCeLmwUlSZREYTCSxOyNguH64l9Q9Y2ivSeKF5qkDnifFPwiMhhElH1Oab9rn%2BPWmPHfflLAfumYI7PqKYopjX%2FLKe%2FlDUxRdrqR2ryRl6cE1uokH4JkwPGHS0ZMF%2F0mk%2FHYzBKRocb%2FjTgy37rMyjd5NmhW4C%2B%2BuI3jV0RxXLuknmi9GsWRdcqZ0TolVLLcV1f1EpbY%2BcjZBpOlnxUp2G43salp6k3b%2B7iJLY9r1TfiIx7WrbrQDjiKpMLIGeWTZxyh9fsf9%2Fsd7aYRfB3v3Gwci%2FIXjZA3ml83gj%2BeVIHPs7YDwxhC%2FQNhsvn4WrpNSUfjjCwzrgUq4Cn3sDvfienqoy2PJk4CkGfBYj4pTcdZpC6Y%2FOoZ7oPVJlEqE1kmTBGg0VoI09ZH6YBGDCJw93JBjqkAclIX4LpJ9Sw4hNEcP8C%2BodHcUZRdVw1PuN7IxsENd4whuRO91kDW0kKru2FATnNgnXWVbQ2ZlUX8%2B%2F1Oo2Y2HUK5%2FeMHHYsrJJSsuR7xRTF7f9XmJ0E7ie6CTMNLIs2K%2BoH7Wd%2BGSGHvQd9cFz%2B2HH%2BId4ENi9Jyl1s1rZruSKPTPXHEdUvcGhXDJveviGR7ehT%2B%2BVCmxLlt6Nt6emio79%2BUFRO&X-Amz-Signature=0165179aa78f8eb67cb42ddcecdf9615fa0a90b2f6269e4aa96376cc48af086f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

