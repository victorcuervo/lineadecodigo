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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE7NN2HE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWjT5TjVzBnIHCug6N%2BgN53Uop0qY3mB7YKZwVoH4urAiB5mF3v7iui7VoSNqzkjeyaMkHidSVHAgHOVgMgEC8DkyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsbp%2B0V0M%2BoQuMGboKtwDC2j8SV32F%2Bcr%2FBVrlbohFrUCe35lIjFfqxhowcRi7dUYGxMFXX2oUj%2B64Togc4GX4lXv4NEd%2F8MhcCRIo8xzXvIlA7oMrxHtHiWVMp40T4mXkUr997EizdOuwhZ679BbpWZbwyrJvGvl%2Bej6t9w0jCSILNypNwhu1dJ9%2FEVwuDElfb6rocB5NLNnZJOIP1h4X5cd4N6zpsLEVTyOI6uSigDZDOWpvoMTbrHHywT5O6Z0vZ7Z0C5tbUTjJFDnXQaNTE5PO8VJHzQ6GY23NwCppWUDHnB%2FJeggkWReRO5KI18U%2Bz9hparXAvjgNbwn5ptp3RxBiu1Nx%2FuL7%2Fi6QS3y0VeCTdAhmxoY0SJs3sdZjbDsny3xH8rA65YPRucGjq6XGn7vLJw5MICzHj9kD5l2raAyf16lD1zgpu0EVXxZer33m%2BQBSMGpVJUK6p80SlaC0rTo7o2IUoiUdT1NAvG4HqXvRYxo7thrtNwuEtP81C%2BVQNh1AKGFt5%2Fotfv5qvte8hQK1sN9JBQ6DeV5fl%2Bl59u9922aMs%2Fwn%2FwiNTSHG851BWuUNa3ZNG8AF%2B7UEL24%2BE9EXRVgYU%2FqkhDW2gXZUjCF25SA9Z1vvPlk7LCMbnwOmVB8umRZ9uuv%2BbswlZrVyQY6pgHnct5puyBtGg%2BeDH0mLI1PM0%2BUjoh9zWjVX6BSx7nzXeB8ob7IluyzZY6UHcavbWDpacd52BDMS08%2FgvBtUYPDfEHmTIW7%2F7CWqhOr1NJEV0V4ncuB1Ww8IEZ3EKdrEqtcDHGCCC89noOhyAmfHbSSnqgIvbDULlbCi2Z%2BGUgHkwTMfrjh4ZxnEQo4uNI9FHteYSdIVeqvQye0cJnbAf%2BtviNg9wJQ&X-Amz-Signature=cd6e5124675d9d522b731ff2c2e3e1d91239a073590229ef2a371dedd73462ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

