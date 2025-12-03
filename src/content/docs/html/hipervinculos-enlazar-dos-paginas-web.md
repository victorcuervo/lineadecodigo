---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ROWCA4A%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDQja1Kv2%2FOcvdrlP%2BXbwssg8DYCgHmD2lV8ZyJfbYU5AIgF0GpislB7dG9YRKNxNK1HfLqJ1VfhIV66dm8T4sEPxoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHsmdeVBPTYQ6iR3bSrcA9Q0BJ8q2fLXNCz9Vdk06RW6YscRdK%2BXU2YcvJoxyzk6kqyWdXzZxuPPlzcM1H9TT8rW6EgiP9LoXFR%2FSvAUcN6KlbBErpE2%2BU0r87lUkCWVRYO8kY3Gck0GAjN%2BlyvGdi%2FRTVygseBKzdfTeK66XerzVbaVauiJFfzE%2Bbh9dkq12Ral%2BAjaQ%2Fh7QSGYUqKTm4AaQvOdIDIg0jIoe4qrXLaauXQcd2y%2BHpi4plB22GySecckSNTbOymlhm%2BPbVIQRZ74Rns%2F39HnM6EXc70dsZnCkNn8Od88q%2F7e9xFXpmMVzHVghVPj%2Bds7chMTSaFauUyaAOwXOfOP6hBlC5H%2B0QdzGoRCs7nPQvQL9YgWPCbVXSqrWllH%2Fzi9qpToHYQJUoSvtOt8zmU5oFxVPZbKMffh%2Fp3JBDROL3APrxtvxY0zyCVFyZySDU7NsGJ7wmz%2FdgA%2Fkkceu9NUlTkVzxRwiAUxkxVdkAImQH3cOs8o8ATQcl6MQI7LM83tWbbqkvlymOfLyf3DNCNpwbUgka9ryf6Hk31SY9oMCEF7bIqDTOvhlwsQ%2FmEJ4oD7ai3Nu%2BpvLUqzoVHQ8vyId%2FrY68%2F49nL6XCevmUE0zvAACamIIbv8pOzGs3l6TtJipMlHMKLcwskGOqUBWpLfNQH2g7lk4ug4YOr38dtnikHBcsoDqHA90KxNePcJf9uV1LZ4N0iSf4vn8qqQMrzmjmwD37KSGiU49%2BD5vDGtQfxijOdsSfIHlO5Njvg%2B9EfudNBSZnD0PCiUjYWw4554Bf0sJmfh3svY8UFMk1uhLT7idbN6zwEr15RFT7%2BvUWtKXQPd8JyH23PWjCkWgQPo82%2F7Uv8pW2CirBLJQxc5ySQ7&X-Amz-Signature=fb3c4645c502d3451a6acaa76f9ae4af8a26085f2e240e44824047d2124fbd4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

