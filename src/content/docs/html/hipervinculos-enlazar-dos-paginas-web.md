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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USL5VL6N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIG4VzTl9N3w9gZUPNpTNQNBRdvlT132QHPvhEuXIXH9RAiEA3f6Q2E99rxA18AIW7eKDKQTC9l4ZeP%2FcWR7WW0n%2F6vYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDC7VO6tY6AX0u8FL7yrcA3D9jja%2BWzjqKnGsZdPhmVQ0ex034zgQ21%2FYvkBj4bKP7v0MRe7CX3WSV2Ao1MoDNA12Tptc32rElLVH5hs%2B2DIi3yfWoidlZtve9%2FDnf0n8Zv3L%2BiyxPqchrB5EVmiKZ7i64NZDnI20e4vI%2BYMNz0hb8bB5HLON3eFCjdsG%2BvHRX0zOoW3NVnQmFrtBUkCMRvTns2Hi%2BWaSjSlWOg%2FP6mRSxwSu4U1u161uQ%2FPAFVI2JqN8%2Bq6lST%2FwQ2FPVnT8Rl6G7B8d9587KBoDu%2FuDKw4NTmLSc0fmBql2SMS6W5%2BJzaCVs%2F4h4hIO%2FzApFYNPAGEvAYW8RCGLecWJZs45%2Bk2ExLfmX7Z0TcMw68gQ6HsERFlPXou0sox8YFLQZVqmkBQa20AkWNvGE51XIhq0BGM81aLu39kBKE54YeBG%2FxNTLI0FZ7dutinl0QyMY10aOVJqsHaTjThou3EvUfSV%2Fg6SFxMNWl2vb5EHzv%2FD%2F1AK0QwkHmOiWblRm5y5CnPMvGpVsPj%2Be6AI5I0NStemeckH%2Fx7m6yaWpVN%2Bs%2Fa1LsBNxqElbLeBO8xOUNRarNX87ggBUwOyVJUNzuQUgcoxT5d38db4lCTxngF8l4ILeulkul11jZUXOU8vIp%2FGMMDcwskGOqUBmCIsLW6FoO%2FBovkFfGizBI0b0677ocr44GTZAJNZ1xyDUADhSnJnicMjdr%2FLy%2B%2Blhbbfmrb7BTrlM9TOLasr5OHmDFr%2FIfGWRCg%2F3NgjaGh3JIyvqTDfxs8b4Xh%2BL85hSLaApKD%2BCuTnoW2ow63w9B%2B3l8NESlWHkKXBaMhbP90GdnobZz3j%2BnwwRz3peYG%2F0xnbEHGk0IIM%2Bq9CmP6aRzjUQDyN&X-Amz-Signature=f5f37a549f79141b304125adc2c1bf54e3364b2a1ce086482082968380d57b67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

