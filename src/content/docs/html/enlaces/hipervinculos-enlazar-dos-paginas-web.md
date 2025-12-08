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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP7AU6KT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T145639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3s%2BidEIfSD%2BaFgXN6G8J2TF51U3MCQoYibN%2Bp35EB8AiBJs9IcWRmV%2B%2FpAhf2jJhTcv8pArTTUZPkQwoOWmdq%2FhCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhPe%2FczoiHPSbnd2QKtwD8K%2FVK3AJshJKpNukzz7ZHwDerEsnh2w62%2BYOehiAq40F6pwDEIz9nlbrehrjNORMOMeOdHW9rrBeD9Q52%2B53GySgTFhjyA70duafFHiqGE%2FO%2F8Tdcm3tP%2B9UGAHgVba14yxFs8YJELl02RhQQWxUw6OJ2v0ZjD5xkFkdHRD8ITuu1uQrSCMa64ZGAI18D5H1Nj6iUP%2Fjr6Zybn%2FPpkVHYsKoUPxstDL3jOWVw3NnFB4xlIhpdN062gszLxC8yj7nQWrEcHxfKTjna6gXn2cRjwxBup2btdHtKXsN%2FsLMJLZEvbu4JqxjTACpxcA57EYDEXHvjtpW6Y2Pp%2FYFFVECg3IefwTHtwJKUS5WbeogvcJ4YsQILaWkAvGPg87hkfBZW4USfNKE9yhof4Th7ofS7RRruNFfcrP%2F%2Fhi%2BN7jQ7zRo%2FEAXpyQOY286rnYZ0Hb13JYHU3mm%2FBcYEVLzQhYARjl5MsD4fJU9p0GtnkUspndXSO%2BTlEwzGIIZbK5v06lboNiyREsCPtoMiPVVXeNdKIhk5QQCtyF4OgGXS2YQ%2F%2BnBfq6Fe889WrsVg7UF1jgz4%2FXLWZ3KqxgzDstk%2FVym9ankhSsyALjUAflpwJnyldy1%2B55UeU3sxShh8k0w4MPbyQY6pgGM6zfoP6eLjQwhfVdkcMWKcxSThhunLTDsl50SoOj7vDJ5w0ER7WpIxo%2FSofkrabUqrt9oKFfXFguhBNgpNkJDTPoW5e232xj9tcsu3uKKc2huyuPpG%2BN5oZAd1OAIy8yBQBTMCSN9OsYK2NeVXbihc5IS9RYDkh1tgr1pNrCR08Oa38U3Pwwmndpq4nX5vLSNOO203%2BWdZ0FE33Pnk5pEH5Q3fLZ1&X-Amz-Signature=3ee234af8e136e1a245a9da075ffcdf616a10945220b1a3b7703658d48265d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

