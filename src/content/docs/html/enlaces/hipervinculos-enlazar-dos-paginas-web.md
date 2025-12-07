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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653W36TLN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T131901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3KT88b8DIy0coy6AE1fh40zpelj5FHGU0DuByCB2LhAIhALFDa2s31uwP1oNEth2Rc7LgOhB4mGNGEYKHqv2QwAJVKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrJ55UVesLkkqdKcsq3AMGDZKc1afUZ0gv5IStXbQuzPlz9UfRYoXlPg4IJkLpHJkimhJa9O5I2PFi8obxGpRW5CGXzz%2F27hV3KmYMHW%2FDNkteMfTWP8y21eeEVGhOqChNzTx9bV7t6f74lUvN2k7qVMezMcjn3SYuPJK42LbWK8SXR9jUQJd9Lqc2A8O%2B1DKJNAVYx3KT9oR9rbPL4zqAxpbhPsyuW3NIY6aT3GO33LJGarVWvcTT7BdaoomB%2FQivZB01srGlNqJSbwV9jBiaqeAOVrgJ5WPzRUpzHYmrAmU8OUa9GKWWKReMxCmMt69EO2D5wKPKzEgwefviybOupDEg0YziicJCQ%2FJ5XhkUxfco%2BlPK4Ubm7AQeGX%2FYftdB96y4kQZ96tieKJP%2BHPVN8lni4xba4aLsc%2BZCTHS1PxeR1qIRYFuQ%2F2RjL6AjLNye%2F88AUMW52NHgW%2BDjALtD9DJnfUg3HWx1vKcalnhUuiHcxi3lMlP%2B%2FjHFB2FQea5eoILbus9t6qsL2FnbJCiDirMcyW9B0LcxP%2BxLR5m%2FxNDtoUaquLd%2BPQkMagHULRhysjQIH9IMA3wkPHdtw8tM4TPVCrcfpkO3Uzy59KKCFY8Iuk5R%2B4hGA5p2ZNOd9cx%2BMRvxNp9nJ2fp9DDHmtXJBjqkAXyYprSll447NTq9EarLcOq6FL3eFcxRU41zuVxADm%2BZ4qatesSP7OlRdV%2BVrB%2BZA0uMsk3LUds28k4vhjzI9IG1HopbEQmsuGlYaumAvS13m6ywpeKk%2Fj7yAl%2FH415Xo%2FtrY%2FgYfqozLq0U1NJHUXSswzlYC7n%2FqLPXRoUjD9lG%2FJAymsFp540%2BlnyLd%2Fm2lJ1q2HEIC%2FB4NlKgt7athvEjz8rc&X-Amz-Signature=5ef620acdd8c8b8028b98aead574765072aaca2d9e8d4341055c0bf1163d39c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

