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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZUVBNT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIG0MoRyWb5nr%2BndpV3N%2F312%2FucRfNQ14kg2Jhxopj6AiEAlSRzTvy3hL1Kr3Rrlkxr8ZGntQUTuqnxHEJ8vaNfqTYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONZ7LdHKfNwA1ybACrcA8dHsfbxA1n%2FXEJJEO77TGr0ciP1dSLObbeJxwtWuDdhgGYNnNhbsbVtobchXAQ30EfWBfgq8Mkmbtn%2BPQWhrOd1SfVZQUDRJsInuPyHpR5Mk1iBY%2FvzLcqZsBVLQEGjQgAHsZid4LvAC3%2BaRBXdQUR7J%2F2xEXM5ssZRO9dqC3bC2fZ2mUOCE%2FjJz2oAmCiSLAfMn2TameV%2BA8f7c2zpRMh8%2B9WYh59sfH78xYjBrSprKcpTWOJ3mBrSql9pr%2BUCKcm%2BV9sNT67gdE9tWu6rFaFTQGIErJfBwyREHCkJBgBSykd2YVk0ffV8ofQwwGlUuzPxBY7ORqIymKX4HPOvtCVtyPmEOr0qkfKLS%2BTMNYBWqI1RSBJAdyj1I6g4%2BeAMVRw4cX4vPD1LZZI4Z68U6dP7YrI8uOKrho2HCPviLG7SHYUppaJR%2BMsgL%2BCSiw6B6ZbaXH2C1A07eNOxLQjhAiDUKWh7YEDupXAp2cNhk7Ecj2ENQyYVcEGXeQj0sTbFJ7MySu74PIicIddyAOQleHqWoaefhC0GcykF1Sgx%2BBndhedIywSzCvVT1JylPrOJoX0324fiB9hDjA57MOF%2BSrcGFmZhP2y8ouU92E7ILvFkqpHmi7OQ4ixTqOQgMODt2ckGOqUB0hMJv2MM5u4Ytu0NH%2FUVoPwvkyj%2Fcvjc%2FdyXpR3nDvCMs%2FW1v6gZNcrBtLTOrgTXHbCkWgu%2FTjyGa5sebX3StGVDO0XihFAXwOxgkfQPHzPXNTruCDWqMWvemiwq3kCPNQPJa5zjD1pTP62geqK0slE8dCdkOuLXcqgZwr%2BIkV2vVVJTI9KBwJHEJuBl1aWq%2FU3V4qAZ%2BafHQ6Jcz8oqzRfu1v%2BR&X-Amz-Signature=dab8d97f1686262d84f1ee826dbf8c3293aec20672dbee0971fe047828627a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

