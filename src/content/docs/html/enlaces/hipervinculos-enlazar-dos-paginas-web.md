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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFVNXXKW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T183221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBBy4f8dJNk2mV4rcnbfyYM3QQ43o9%2FQGtpiPRZX6VgAIgM5aMIHSfr%2BQnTMVocnJJaqYfbqimlAr9Vz%2FBm9nvLDMqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbH2M2IpTv3Td7fvSrcA9gT%2BLOqKPSBwydKBMe%2FDcNKxXudHOU%2FRblu6GLmd9TWeRZIx4Tw9QSCbzKlEnDJg1dsXkSABniWXYtq1i6RL%2BZMGGkyoHjDGOf2BA5bW2PDIBN2y9R5s%2BElm9SVcCGce0wEBTAEpEP1%2BI%2Bfug%2B1h00I3g48f1YlasDl70%2FEbGQwApqUwy8YDUHGhbgW0m41z2GjsMc3fVLw5fw9ZbDmSPAEeZXnlFV8Az5nrFOP9s1KrVO9XQG4DVuJRiM4potdodyLh9H306H29UnZfmot2t%2F3qRnVwWIgVIo7Vz5wNtZlWbt7JgZZYdgJYTEC5RaD7zv6bqicn0jq5i6BxAdd6eecPeXLeB%2FXlJMHAdM4mVSeZMRmb9WrRARD7Xj9zaEjtbRh9pm67dIxc%2Fr9IqTn99fakfl%2FEyLPK9EahoKf9zxBjGR79Y6mH6UWTRz9QCzDVT4bznfA%2BqPoOLyz7o38y1bLxedUeG9E3EtOyUJSS2GD4M4xYW%2FgIYg5eWYmlJZQoLdD0CJYVSDhITETu1qxALLyj5CSJfSsC6y7MBY4bFKiSKOTMCjn%2FXEQ5Xe1KvOiyTLPnW60PgObokjokz0xykuj6nCA4S8jhoCBW80DxfmBUUmSOJFhtCm8YCTgMOa84ckGOqUBF4JEb%2BjCmQ5WOrU03%2F08k%2B7jI%2FOoj0FcB4Oinh5XJSOccTnIjbXQHzo2nfbqsJnyVojTOFzdso%2Fh1GsNVOUwNoxJGm%2BGRdpW6BfpU4FGxI6vZ%2FUpehWVPUlUHJEHObAJmxQqUzeR%2F3C0KKGO54CfPANHNW4%2B7K1%2B9nhfIlAnIPvgAstym1zX9f6T4yD3gcHup%2B30vPxqdquHSPDBdrxJVJJ18CK4&X-Amz-Signature=86204a458689a7f0c6cb523d15dc2083ab334ca4169afb92497c65ad702c0c44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

