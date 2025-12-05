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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPWYN25U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGPeHKR%2B7Fd8mK%2Fv6ncuBeNd7VGOiTGzZMfIGaKQDAjAIhALsEWlMbrpl910Ql1V9p1xaIb7p3iYHZn0sycbXXMsRIKv8DCFUQABoMNjM3NDIzMTgzODA1IgzWj7FO5thVMJlkIk8q3AMDMehkgH%2F8krE6d1CmpT9XHV22LI4Uq9v4UOzl98SKNeWrGK4K8rpn9tD0XG5o9NgbF04Nmsu1zzz2HLvVb16%2FCCx2eKpHhki1kvUS7SarWZDC2jxgSfLpAvUTC6jGXxI2CKpamP0KRzOCpzSwmi1M3PgSoR6BG8p6HBKNIYvj6gEQK%2FrSMRkbvr0p6TxkTUeU1Cbyg4HBlvcyGKhAVzz%2BaTp0WBmG0Kn%2FW3TI02XtqF6Jlx2c%2BRZRd5zy6gpEnsJBkqFYsMvtohkaA3zlX49CvqOoizP7wS3giqyugVUfe4yWcctbnZO3VOdBEBD50iCEmb2Fnm8nBofM7IOhHHwWZ4434H8Q5aV64wc%2F5KCjJWQLkg7NZRxDHv52bH9nVUhtviAnxpeqPis3%2FoRq%2FkoOt5hmeCR7qhicW95OM5pT9SNq8taba16eKiTxrfcvZWMN291n5Rvm8vLfzipxGcax0ady7cZyJjImBJE6Mx8I2hhIUjQfQIMvyGYwy6RDFakkXfVRwcUd5OKz3byJ8a%2BjJmUvDgdJBXTMls7txtsRLM%2BNghXVnWPSNai0M6nGLjWsDCanfSr237OM9uVMM2FIoLfxP%2Fzhapm0KpLfr3xAD8ULs%2BnIOwG76ICA9DDpqcnJBjqkAcdIwLvKr8NpXd%2BSveLV4l4liT0bGPT90p%2FNDhyY1UaMBcOqeAJJ%2BsTvwLnakzOtLcZCoy02u4AAfwyO2L7YAAMLZ6CdeqzdVqUGiUQjem4jzzryD9mZozHkR0ckfW3hkkJ97umKUsTmxLXyhnOBwKceLHgWwcKRibSlFHVU7Yf%2FqRIaMlWgnE%2Fo0PvZPvI17%2BG4QsW5hRFd9tPxsEQCUaT4A8Ok&X-Amz-Signature=326da039323de094122b94f4b7255ff6c98d95a54bf01d20746bf28d44481744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

