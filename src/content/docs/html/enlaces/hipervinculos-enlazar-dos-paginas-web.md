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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QAZYHWJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB48yeieZITpBa332fjZ7fkZEiuYCQb9qLsmqgICF1yQIgXW5a%2F4b2PdOeGqivd1YmG3vonLitAnP8yoFSlnBU6kUqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlY1lbtf8t5OYKe3CrcA0N4MFIVGkZzEwDBiH5yphilV7hRbw%2FOkv4l3DdWc3iu6%2BTVvGETuO1paJm0FqkGy2sK0wG3SnLuAsE8vRHHWUh7uE7SbohKs0cvGW4mrVHQK9a0lEq%2BLfB%2B7Qg1rNQpOukTRoJAVkLS9uY20f24y6r50leneGWuSAOaWvr1Ay2AaIqv69HljvyR19gDHMA%2FT%2F2hXAVFiptn4PeelpIFI0smfoZPOqTPedyh8TzZ9cT79DveL2pFRV124C9cyk804eMMVg29CJupDRY5x71CkySHu7%2FqPH5zpPhueOdf8HVV%2BFpsIZoZzIpPq011MRlWNVI9nSrKEOBpd2nwxBMeRzhJ43hZDcOb3r8r3%2Fh3%2Fj4qBpePSkx5Pgx%2BlWr0e5ow605hjJN2obXhuxTp4v5ljc1g3vgcoi9T7P10SaAh%2FMnZqTWMu4BHPaucl%2BPDy5%2BiBpFucVXK6%2FeWSIdchUAyrqpw4yjXTm%2B1hOzqUFsRBMmDKg2uhBEvzNHNJt8wtgO0nZCLDUtSq3ECCBnqHuyJeUR0UnDBJAqXXavCElLIx%2F%2FTPc8ujM1qsjN1%2BNUjc0syekBIskETVZrZ%2F8LibqGhIWRJyB97Lr9UAxlkLUUchO6hMkr7B5Qc9LqImjbKMLHK3skGOqUBjLcTCLnRD5n0c%2FDxL6V8lAzR4A58EOdig4a%2BkBaPUakOy1XSRvm2iuKjJJcBGm0uLxgA6iVUA%2FJ7igGbLeOnCpZ%2Bu7OzQ1MTEz%2F2G3%2BPYw7Ht6XaGs6I%2BS0A2QqzfpVjuB5hFc5IvNDS%2FOVgpMTEGyVfYi%2BGuHcifkW10f0x2RFny0vK%2BVAkn46FdAhyK3CB%2BzR4hIlemIo4mQlBL3F7NlZMCNkW&X-Amz-Signature=4c082e58f77156cc41dd4ad1afd2636a1f59b2696078e45770b46c289032d7dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

