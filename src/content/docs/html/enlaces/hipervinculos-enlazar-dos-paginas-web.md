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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HKQQNPD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCxvGYsm5y2x1LjRJ%2BhaDDeAYfXKmsBcH93kb4%2FBZjP7wIhAK2QPNAC3wmHAE0RHlOcvryJMgzbD6%2BcG4kGOhTu%2FxH2Kv8DCEAQABoMNjM3NDIzMTgzODA1IgzkZeF%2BjCOxMfb0E60q3AOmtd0iGIkS6fDmkGX0F2oEhrH%2BwFY8P9%2BCpG%2BMGGdSBpelbT6ut02oCx1JWIEuQoTEtSic5SJTh1pJzSGmDmsv48M1I%2B6j802jDpqOsluZJmQyCvsXYj8iq9KCfOd3fmQmhKArDmLqra6bgCkj0ZWAD7wI7%2FfjcZ4YM0yMBp%2FbZfoS%2FB9zaZOT4Tcx9dl8%2B7BD6sK97aR4nCHpH2PJX1LK1y4F9FIXzyyRCJBQ6oUbk4wyp8P0cwHcPKRGLW6%2BHLAKqsth%2Bil0LuvZNNkQLe2T1D5NnPNw6CfA1t9Bl7OEGfVLgbBCFui8xXD9KqzOQvju4vcsvzloO%2FTyqWOBRM551xThlv3FcqbezVMiPYsRIUzOZ9TVc7O41Q3FHh4%2FCOEUsynRYEuyob6kwW8DMw8%2BxP2YPkdLI1vE6qiUH7dYI8t2CFMpzi2i5ivLSChEeNVmo9n%2FcAIjKkt2tETSoXRcO3qGB6Ryt9FKjNbAA9OSTDhwEnYI%2BhUCQLFBVNm2oZkcQAZHMSbz4fd9d%2FwU0s2ec%2FmZ4h1Zfy5XPzuI0WPj5QIsVVyrOTMymMkq2AWUTsA%2ByU00IHoYMXlFVb0BGMu7FYjoX%2FhTbGgPRQgsYwlZZWbrXo3r30ixSFrvdDCF6cTJBjqkAd5%2B5HcVhgCK4lvSl%2BS4Xx%2BzBT7H%2FD9LEfhM2GCz0%2BVzsiJIQlz5VSm2e0dBUw7c6dpu1q%2BvgNdvxfvywdYxxwI0TGyY%2F7FS39nfDfT1aEnID6rZpliTLcrzSLQW4vGibPl5Y5dnNoeXs0n9DoMfa9XmxY%2B3N7LN7dfkAvQUdhyckO%2Fp%2Bj9IGfkqFH2hbAnvxuLRtiFxLAHIYQ75UdqBgp0rwT%2Fd&X-Amz-Signature=7410aafe742fe714b9997ec9ae10163878a12d4897e5fdffa9ec5f907c4ffe74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

