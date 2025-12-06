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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGY3RTNW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEO6MdC0tu9P6ZD761jCNvC%2FlfaH3agnBZ8xzLEx5PQFAiAV1h2Ikm7uYkfHAiu7Oc%2F7r27iT4pdTHVSv6PHPEPlGyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMIs%2FOIgOMHAAI4wh3KtwDUTV0kXoWn1sg9%2BH%2Fetxr1lI4jgYnT84rGbNzmPyrAVTxIaw6fT5yWDXujn84yZPoUacJTVhqgxuJW2gyYm0nchT%2B6TUzF1MxQIWD%2FS6VwOChELvdjEUR1AIeL252XcFmXfI%2BYpDg1mD9JbyG8sDsvp6kxZBZdhP4h5bq9nfq6PgVgFHUxfEAt7y9nk3MJEzRlU7pIJEhDjXI7jx4aD8sAkOxOYIArHrRFw4SjPBD4ur%2Ftj9%2Fbd6nYkQQhNUoMBUqDwCXk9gVN%2FVrAYV579UAIb8eT8jKsjIuoUeTrQZHjmJFkKZBusU8vaClnV27z9ZTWxGXUgoZt9MymNGBYIBVKGmDjLgdDzVjYBFZiLyf5TH57rritWcfsyPixOik%2FxFCT9EjExpwKbglIY9KhQpJon5Ut5DK3BJmL2rufxbGsB0%2Bt4cyGBH%2BA65teJ9HbXbESS7EmdLp4rX2K96Icr3HKMA%2FG1KvdSc9ICqPsxx7Prgea%2B3Hxg9ezXSqGcnUstNbs8pycEmckFrFPmItDqhzn4ZpCAScA%2FUqpIgo%2FML%2Fd1mqqZGZ3dVmB89w%2F8tpLaqIkpM5vE6RbhgLPN5rSA3XLqStdWfcJ6dAeLPrU592sTD4H6HE%2F0J7GyTtqgUw9abQyQY6pgGaVdcf6mJIbAUV%2BruA0U1JUZ%2Fhww4GFIXzO2AMad8sYv7zroWU3wjiB5%2B9f4jaL3%2BoZ%2FvRO4Kdw4bmpYuU74MFozlSREtQt4%2BJ6Ak4PYxYNpjjvZ%2BlFJx4tKsmaPhL13nOVdeHlwoqzFngLVB6Phi%2F0wcWPJ3276z6yBAMlaIJoRu1eZ%2F%2FWcm%2BL1O3FqpaX%2BEfzcD5Sowhrk2AC3CdanvxcL7XoP1L&X-Amz-Signature=69a2226a740061160a6e403826781cc75a98b35c55a6e9854a939e2e53e6957d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

