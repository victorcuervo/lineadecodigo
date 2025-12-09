---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUILKBAI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T181503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYuY8sz4TNHHeQ1ECvlyO%2FoIFHF9xoXhrxUTi2qwmo2wIhAKi%2Bj5WzFPtJyCXfITHJiFWdnlsQvl5Kd0%2FqxoYTxfE5KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B3iLm4goDtPD8EoQq3ANrD%2FDsPpETktbabx%2BCsOB9tAQapiF7rTpgUJwoGse8orvFXt7EOkdc%2B2ULieBgeaQl0wCy1q1EJxXjJUsTuX7K5CyTeBUCLCin69fOpMBXg6RSCqs0MhnZztlrUw6ke9QmLnm72U%2FXfW8uX4VByWAlGthR4DYBDv8%2B8SpureTw1aNuv1kAKf2pmdJ1ucWCgfR3r8dZq%2FXp7nou3v%2BFL29CTwtHniOPyAZphXsucwOBQHRRmDXAHy9vREFDTxw%2BjDRrdFv4SMC2WPxMAvg3RaVQdHDNLF21kZ6ip7n1qQoBkFPUUQ08Do6%2BSzozwVt40pB8raFVkg8gQ1zG0gjJUuxqrS4y0pQF0ndtYa7G%2B%2FnpzOjmk3oj9YfM3YUD1jrFj5%2Bxq0qV7gdkMov%2FCsgcLerY3q9Fg0rkCQQlFnpHtA25%2FWFdPNkWiRKhMlzUxFOb5GbEV7pCfm4z0%2FF5hSQtRan72vwPXxc%2FrnA57JddqMMKCy%2F5HpJnm01t2b5k8udOH1jzNnUZY2c4cqyTmyS3UNoNtwb9vClw6sjz9z9NPvKDi2pR9TdhrTYk8TizYEza9RgCvF8OoeqYDRBvh5RG4ytw31WB4d89LELaQ4mz0pdW8o8b8xVTBJ7ZIMi1KTDlvOHJBjqkAcNRGN00TH6M3EAy8n8yh9XCe6G15wp4VMKGlkBSm8zoxaVYeI8fPfSF0EXungPd9HmGX0YoB1Gp6kUNlzStzyBExQ7rK%2F2%2B0gy4DgWWld%2BbxVVao60JzWNURNHKTzrE2TKGEE4F%2FXfEFX804LZzW2TkHsYKaLklmZ3wJphs9%2F0txXXnwKa5W%2FAYsrqnBYe0A6cgcJmx6eZBmdoivnjiOHRSs3wF&X-Amz-Signature=9deb4a80adf24856a54c8ca5e787ef766aa0a7fe76778675afa0cb1fdce01107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

