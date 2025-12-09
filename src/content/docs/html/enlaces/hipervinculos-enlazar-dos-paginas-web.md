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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLYS4TYA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T233458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSB7PLTPKMYnRAliwBDFirsAjCrl3hRKm%2FkVWdUAlwbQIhAKX0QCzIg%2BuRNCru4a47q9FLDBrPKbkbdLlivjNCVpTCKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igytm%2FLNKGDzYFhbPPQq3APcDKM%2BatVi1cFAkW71f5YvmmlVg4jXscCSdXyDiNE3LanKXml2J8RVFyGWjthDVOPqb4uPth4rWljJNhwOo83WemwJ%2FV7dzV6L77TuMJ1HNpw8S6Z4o835rqn2AhfxAsp%2BDtF3UEIlca2MCu9yEagxfxoFaRKs%2Ft7Jc19wpuFo%2F1GuxARA1t6Eo%2BpDSHRtSKhRyPqpxwK3%2BhcMPRzvGED7TiBHDhLDpLn%2BXK375AgGRF2aJoAnG4qfpou0rsrXjvm2pol1mARryhr4QEo4aP1ITRLzz%2FnwuEWibOQp0ZF5K9DlIPmDLlhglP21LJ3zBRke4qnbBbQ3E%2BS9VfwdM4%2FKirma3wpdZzgIiiSGUPvXvX6w%2FPZJwbKQKYQP83aDVLrw9vPfp9xZ16xt4PpxMPlA3zgGwuMpuFGgfXPvcYKb6ojmriiAp%2BWyc9BPmT1yY3VZJ3rAdxiDJdPmPvvprk%2BJjXkL%2BHrFSSGDf3zgu5cH4%2B1PNn9RbF4vcHj9sRc12FKW7KcfHeAieJmfZ%2BLQO3bDsnN1cDGVeF06Tx2LCkwZiH9o0UeYW8nOSTSm6oovrht3Bwt8JcnImmDGpPt8DAHgc7vjDITFS0M1YGfxgGDZFXkJVFRCC8YCphpkMTCGxOLJBjqkAe37rBM27vrqPgNppIkIiwVdXW1jWoul6a8xB%2FpRJA043NT%2BotaUvvcB%2FUhvhl33VyoMEKbv7QyQPTS6VpBYNn%2B%2FpMH7Km1wc8xcbeg6UoSnZrNWbCIQKfkhjQFVqcNZzc2X6tT%2FewP3os%2F34fqbzOI%2Fia%2BH4ngWZsUOSoKGmHLK7hBIaWKgP%2Biey5B1%2F0uTWePs15cFhE7mr%2F%2BtnXpxaRHkyy%2FA&X-Amz-Signature=f419fe5c1fc7ece207a67564036f021e57a7ab5858be2975e4b3fedf968edf22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

