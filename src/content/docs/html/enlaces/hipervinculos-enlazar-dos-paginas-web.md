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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTWDHCTH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUc9B77MD8oJ8kobDeeSA%2Fi%2FeSJNALkqUYcCXZ%2F5P%2FXQIgKgzOkf7YSMnuOdMBBPE8O%2BVMPhSIHmhKA03tQ3B2aRUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGtXo8g9f5KQg8r95ircA1G2SkTELqACwl8Baiqh3XFsc7XEqfNATa9%2FqZoASWWy4%2FvYynDEPzi8BEmFLtl6YLj7TlWm9h9SG74ECXBxdik0c40NJhokfcU%2BRNcJ6g%2F05LyFq85lCbZTk7wg7N%2FeMbH5%2BhpmUMw16l2BDE4E7PmPklrLyyCQbxGSoGY%2FZfVgLJ%2Ba4pb7%2BYmWxHUykL5r6adsFr8ivKGuOC%2FkFB9QeXVgzar4bDvDmlcTH8SnW%2FraLsC5NyZfwOfwIgbaW7Ty4dDGHyUQuQYbCqsaCfRPOhoIk1J%2Be4TiHdoa7oFlzJAzKBDEjhwYupBn0W6lmbwa7VQYmrqNUeoQ46KWcTLVIXX9pWOS6Xm%2Fs%2FJhlrHS50DIIqfvwJWLkg%2FEer1eAi6osR2oF%2Bqahx%2FgbhGHxYYFK8HciU%2BU1R5xhTaWEIxER0zNFL4CzeWYKycuJZ3brArEmhErRYsdrdCoTnPByLFRAn7u%2FcXtroz1CDeSN4WYGzr5gtRp4JsZPiuz%2BF1m7HqATOhqrZO2iPsPrn409ZhbmnhcxrZvQGxdL4fmej2pg9ff3T%2Bu2a7gJRFRDzUFsIyBgEt1A02OOxkq2dbi9%2FeK0ulI3hOqnVy%2BT%2BEJZ7X9Zrt66Z%2FVPB%2B56ZfTABsuMKGMyMkGOqUB5YqjbATXVnZoe7FmrI%2FtcdW3coFpKPRPUgz5tlR7xVyntUetIdlK9uih799adHrpdZ1ocvAfY8yv%2FdIgSXimEk8Ha28RS9Tg8EGKAOa2bN%2FAK%2FqyPxcxWV567RaypnSUWRacZgcH%2F4xKKLzxHsb2FxZG8gMZbf0N3Q9RtbC%2Bvx2RVkhlJStPXFxZ%2B4sBImHmAJKgaNP%2FPSbU0soaY5B38RW0thYL&X-Amz-Signature=a778947db1a352125ebb6e94d51e8d2d13f8d297496d27236fee03ca916eb6dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

