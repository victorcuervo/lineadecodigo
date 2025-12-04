---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667AW7KPG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHP%2B2hIc9Lerl89K1FORRxWBXF7ZIOawgWiCmQw7Vd73AiABwA2qP9Dg83UlgYi2Dff2qAy0CXRrae2GoyyfMIS6byr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMTVmKR1EkP2M%2BWGm4KtwD%2FlNkYmqfP1AlaeHTKiCtK3D1QG1cd7j6eMwXm8sTkODQSQKLRMGGmtRJ8IRSlukyxDjDS5hZfbFw5n5%2BV26G1Auk32tKFVNrAclkG1jd3KuaRxSCgw6JSKyozR0TBGyqZnxFpQHPgop31537n9cjQFUIRwZwFPrUC7aIvoLclswCH4dKuK%2Bxxat%2FWx9o%2FwkyDOqkP%2BM5X6nbThxreG%2FBICC065M2SU9dfjqJHdxv4H%2Fs5p3hibmGeislTJBo8cjiZ3ly0WK%2FqsSnaMPf9sNOl%2B8pIUfole2oEP2K9jDy08G5Bf9GrzX%2FB1pRea%2B6EvMGNABGngRKu7PRvHb9o3TAxJxiGcUaCt7CWzjXFgjmLhPsu5GVAHA8ybz6c5X51a0bdccDY2jrLUDqCDapCeD4GvuRS6XkKD%2FJeNuovDNb%2BBDqWEft7JGGta2JHOgqcH4zbi%2F7dQLSppxPWoK3Go2%2FnwRef3msjJWYHIb9YE1B2l7gLx5VwP2E7skNhshqDt4t5j18i9nJ5EWvHWZKI6dQn7ftWcjxKEaRrpgtqfD1uV5MzFYpQ6KxbXKLkGHX3NdSSq2w7OACCLcsmViyEVHvVnElCFONOp9HIdJQMHOzeLRWYclVvUxuIqJGYhMwh8rFyQY6pgEXmCZaEnfV70UGg9FOCjifaOBmrzVHy9lnHba6CxWVF4c3U%2BpANmfHGHF00UE%2BqMsvKzVGTJPW1pzj0oWVwk1OAr2D%2F5zde4aoVU0BjCqo1VVXrk4llmmlONa8vxkqf%2Bc%2B994b%2Fxc6DQYY%2FIbBRlwQv8kn7xiUFn8UbJRx34k5%2FUgHco3M3LT5zmF15uCyB4Yty8Ntvojh6UWJOL0Cg6pfbtKyXVC6&X-Amz-Signature=82a1a1075af83010ef77f3213c78c935156c7cdb4c3774de41197946177f3912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

