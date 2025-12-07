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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GDNGSV2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrpIzcaSodoIXeDVOO0RkKHyXvN4F%2BJp8FiAb3EJqUJwIhAJQcPQB6PzUrjplciK8zZqlVYPTnrnLjVropfo0kHszpKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMInilg5yezbYkzvoq3APMfBd2ZsOY0%2F3ap4hHQJ3M%2FN4jtm0tlHVFUl6kYdPrYGmTFWe7jikZwJUsFqdDOCggKt9JT2d8VWN5juELTXWXk0fa4kiQctWQrxfhMKVIrFWphM5E9gqI17U8n98RHS3HBHHr5fD9wPTxZZAOoUd3BF0GBlmWuh6JKEN2HcURsVMjz2FaZziltkqRacw209KlcT6HGX4PhcdCHZ2Xt%2Bub33vraXb5YliVSapUAU4KwUh1%2BbO8tn4tHUJ8BNKdv9zxCB6TUCwan%2Bz0YBV7L6Hp%2BFc5Mx5OZpLxLDiWmeM1IKr75kF9aOl%2BYVLKCxpLlOo09oS0RGkoCyyfT7%2BqtR5uCm7Cfkah9FTyUonjqTuxMXh7cx%2FLetynuWz7ZHMWYE3yGB801ACwalJvNVomT9k%2BcZLQPnOVrlEqf8p%2FVRZ4fqZlhpg3o3ZmB8DKaBIeB7CYnVglAlcFpBVTtQWjw4Hkhb%2FuwYbGt6uzkoX1rGhP7BL7M4UW8leotpDej2rCqYqwetHpRnmlCuFTqcOsgNhnnOcSnzsH9k0cw2avuondiETL0KmUq7%2F5%2B%2F%2BfYYt5DFHEA7OMWX%2Bf3QmO2QmCtAIUDZyHEEp3cnWTZibSMkASRYEGgp%2BnTkBzEDgMsDDd%2FdLJBjqkARNZsyvTEe6MexB2F2IA%2FQfLeTV5Bs1zYspU3oC5roIAS2rCNagLGmne3DiDDT%2F7RoKCmBSDYt1T6CEe%2Bx8eo8%2B15onv2bllJC89gAOGTi%2FhIucNLNxy3gJXtJTp2JQ37vyfCc3WsHiqxIs4BmDczb8CuUuXJVv2t37swWJ0Vhk9AJpno3YD4C4qwkPmAAOP%2FCxdN6GcWFMUBLVxn%2F2HZ%2FB5qvfN&X-Amz-Signature=5d2b8967776df35a4c3e9e277c4784e3803b980ce827e60a8dd461a837e58fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

