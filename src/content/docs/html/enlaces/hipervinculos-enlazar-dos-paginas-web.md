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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NSWSY2W%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T161413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe6PsyuaiZB%2BRVAjueFCC7OpMRz9snwDad93z0%2BLmPEwIhAJ7q772nsHg17KbO5VAaXaKIJzKAMoiKazFM6mR1M2p8KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOwWW8nk1yzFY6qlUq3APsV19UVIittQlzRoPrnGSJjSqZx6il6r5cQ9IkG0wTsj38PEJDFvS6vApK4k4cpbn8P2iF%2FEoKHQWvOscLkx7jUwbxbULVSk3Lrz9k4ghd9KlYpkQK0aOCWN654A2ZMBDXRfmog8MRPIFf8zi5GdDQCoCbTlMp94j9im5wwYNRkXSs87lIDzYQTloPv6ERINa7S80h9w%2BnQTV%2B8zWv%2FgXMOC1Rb8D70bWUBTykHx%2BJdy1Qke%2FIeeeIz6v3k5yr8R30WEPOdHycbDESvSrNQIiuQxaNCtrmMC0CSpw%2FKaGnkMavQ%2FwMjxOq4RePbz0NIEds8kIS03Jp4A4TEJnaPMsGrFk%2ByK%2BEYfJOX3985ih6jKPVs9I0ybOGYt6SKkBbAMADiI2U%2BycLpcvBA1F13b4L2T37UrjvdgaqMHDD5cHVGNuHwR76gjz10r5u6Ilu6tdEnc6VZRzOdCeZgZfUb1Lkh0xUF1fB3fUu%2F2wNvpkgtZbTBx4z5HXKYHnRrhRykscefrpAhIOI4t%2Fu76Z%2FMTdZfca7YK6mWqs7POih%2F85bWeBJmMlZCayhSG6IIrh8QPDSj5J7cfdRy0mUXohHKJNsQ59dOvUKo9n4VzBCNpVdRRVfPHafOzdTOI02yjDR3eDJBjqkAQXt4Kj2%2FZ3kP2tlu8MNI8OifQ%2FCOPi6nucBif4LftJmvBXdrH4e6msLVKBE7GC5xpC4c5v0WIb7S1HImwlGzqDkDnXZBRFTTRKtxhThTuB1YIAmiu8ToWu25EvzviXTqAqkztgA7lA09TeosIlMkoqUdVsTgrmCnihOg2DkYz45%2FN4gURju7WOWJ3q1%2FiURoOpVha1%2B1A3%2Fcs3UCbUEaXvwE0jD&X-Amz-Signature=f3785f4f0a28b920e056f2176a651e6034321a69b430a3aca120e92f7f01e64b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

