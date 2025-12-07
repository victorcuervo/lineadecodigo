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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMZVY5VY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2B7%2B3qwb4I%2FhWLLj%2Fuw2L49tknGg5U5bpVUFbOhzvdAAiAulLjgv0F6MYvWrfLlF42f8E7K1fytb8Z1mNCms65gZiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0nS9r9kAYKpDZ%2FRbKtwD33hFnNa9nMjh9ranZJooY39nPfVrKtJxWvzMOZCWM2tJpnJpTW2JVGPt6rbGhvEqVcGsSXW13qiZyNZz2xcHyzuBBte5opffCuehpFLp2yCtgVw6t40SBAN7rv7xmWCg4mq99cTkoYYqomsQbgYInGzfF2pNv9RuawxWJoEaRYLbMCjUhvW5uC847%2BsjDpH6cZtexc8y%2BZsTKVl%2BAGBcxCegY9J5Zfup1%2FpJlYGv7Ay8Dwygni4%2FYFnaa5Tris5QXX1Ccmwh%2F4zIdt4fuo9YU7EAy87PB2%2FLDE65FnSJEiqAKVfWrUDENp7HR0zsVSRFLGeB4BPzE8EQlWsH6xqaXl%2BWp6hjlf2qdnnzyQKv%2BTiLmmvMNcnLLf5UmpicnBDxCNN%2FYmj8wEfONiSn%2F4IPp8WXOTv356pKPptjuWQseOHTy%2B27xTGtQ78kV%2FJKiskWxKFqK6ml4smbTH0fgxma28%2F53BYxL9azv24gHVgCawmD%2FC%2BhgYMd7gwGLqWZWPVMKhBUihpEp5WHb%2FX7GaZqs3r106D5rHBiPcWxYjFCaV7GAt6PwPp3uMTj6R3Jk8pJgc%2B7r7USP%2FhpoSQWj63Wi%2BkCQk%2BJGt5fY6NULKauoIGB5%2BBpNGgmMWhjmnAwrZnVyQY6pgFJEZ7nJnztR2csyI3JIPPTtrOsJVYBSI2cZxd1NLKzQvlnZbPWZbuFvJ3pbBZ4QUU3dldDWhrZX5vvJ9%2BoQfqurHVnl%2BFZXvDwSoi%2FftpD%2F1TSa7AYSjAUEQbyu4oYAC4JrqVAkw5cPwgxX5eBkyrTmXPeloMlmchubFVmJ743XSFo3xoWvDWUTQOkWZxf6szEGO7Ol%2FxoHzIP21HXS9XRPrgvFIQq&X-Amz-Signature=8976044138fef77f3a7afc0cffe3d82f0143208e9b78b1a3e0f13645ddf2473d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

