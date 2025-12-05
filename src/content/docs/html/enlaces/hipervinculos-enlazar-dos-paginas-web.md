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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3QL4PP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLecL7neI9z14Y7tvAgk3En%2FrX%2BQX6DoDlgR7ZSQfqRAIhAKRFngRtEntoX33h%2BIksxoGxn5zauwc7LLqN7pdgzFfJKv8DCE8QABoMNjM3NDIzMTgzODA1Igy82o1D783tTb8h2loq3APEARzDybBwmE1ne3wqZbKoNhi4TPulIvCqnk5A9935vFeBOM5jb9kIXrHx7W3u3vJoSUWxdL4jq3wfNZqv8Tugr%2BeYEyHFBp%2FDSJ%2Bade7YfwecM4pmLd%2FiZ1zENs24U3%2F48WfF2gtB6B6MN6WLDNYb5FeJgFc%2Fpfr55d6uZ1Mutcxu%2FCOad7IR9SWhut98ck4RzRp34Pim2ozIwAoTiRxwZccTRl0OM5k037fvCtucMZSVIZ3mOk7HWiJR5bn2fxdOUjoMuSrUA85IkY78m1u9t1NxMFlWMDWSQtqMX%2BQR0i2c100g1Y3JwEiACWUDWH6GCOaZywBqh5uRMjLpHPwu%2FqxG4m0b1fmU4dIFuSY2zrH8xsaH0b0qxSLCDuo%2FAWvThBAd5NJsmkOvD85KthvHsI6gC9iJBAIos8IOagfxOuEhTgshtHEsgl%2BAC65alQj1s3FwPID%2BOJCiKBWbR8S9kRygx%2B6SL3u%2BD22G1vs44PIeotmnW%2Bjpk9AkVih95xo0TMeb06DcZI8c2AX8Nc%2FGCD4jHX3%2BzQCz%2B9BvByt9JKcD1XMZ%2BxVWexoslHvCLvaEBT3rGqiZiGRU%2Fl5yQViZrHQObjenlPBZ78Nv93%2FVf6CADQnkFZ8bNmvgkTDDjMjJBjqkAWjf7nHgNMMs44pPhHx%2FAmvVI%2Bmc22NQz7Zh0y0J6KI7s3%2BYFAyEMgjmJ0nq%2ByfNuI%2FowUAiof8VuNuHkL97ybyNu9Q%2FmsENcV3iySrkY4Bh%2BTt42ooqJ%2FC5dqp9xuk7lVc%2FYEBlErIlkhuHMFhENtLwXm8TYmk%2FbFuFwnHIKz%2BC3u1eFLWIf9VK%2FyhPzfvdEMLuzkrDuj6YpMOF4%2Fglfah5%2FdI4&X-Amz-Signature=89ecebb3f698b32471a34b1a2e8ff505a0e95e597245d586d3ca9fc7dce8b3df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

