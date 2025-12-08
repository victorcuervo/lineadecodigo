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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WNVIW32%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsdEznqC2y7A5MN79E%2FTrUTTOQ%2FNsyR1XoOQhqMw3A2gIhAMKdg4hS3T0u75IRrHUV7BAYFV4UwyMR0R4SHK6CksjxKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvFIEKAVL5vrvz5WEq3AN8qMHrZPg8LDRYs5Q87brttSsMPBpcFF3%2B9GxBv4ZCWKgzRjUOLpheYvbpxNZGcLiy%2BmY65%2B922SpEXF5rGPM%2B5fYgBdm0Sf3lryz31cUv0pHzJJHZjISYC9Nxd0FXC2k4YV4cWvjyCPoCRz9AO3SBN2vj%2FOgAvhivfTXxm7S9gnSw3IRbF8VfZr7ep3uqyBoYP8cWgwrug06QpWCt57RMfAlkkNSRwSNiFvuugbg36y6MpLmOAeoLpNG1Udz%2FyqSAioMOfwOi%2B13rvLVCxLIyAKccGUL4uNdvYQerrlHER8YKFRXewMNGIPFB2iRtdc4phguCqUGzdiZ8z0x3lpZw4%2F207AoDboK4KgWfsfI%2BEUhEyZfieoer9H3DKIAjVLFwGoZKlbIP0pqXaU4HMb3MK73ZnSeJSFzQUQK%2BD7wHJhuZn%2BLoHGIoBHQ%2BfAoLkihm%2BYiDR%2F6E09UVKyLb4%2FoTfW3OpyvfkJSe6N%2FPqupGVUOjSEDNQmZZTa%2BGaeoawViKPH2NoNPsRnBoVBMGGKMU%2FCxd1ZX3QI4jmy0EnFSpz2sLUgMw8LwWMSNalTzmXFcNgu68V2fXxn%2F3dPln3ltuO7H7SjO%2B7%2Flokn0tiIwLs9O2rnO29THGK63vEjDY7dnJBjqkAZjEgcP1VKDbT5VdJGed4HmQBr5daakeZibrS5WyQU0bYXj28HazwMkLTk%2BYzOYgAxEvGH2m8LkAF%2FXXpY8R9zUd7P242ueITV8gLLdfanCF7FKmgePHygZlMutDVQP6moiubQcnHmNdoSsbHBfCl%2B7HnaVvM5vDtEcBtgO%2FS0LKGrxLxG0D3%2B2EgjsnSEes1KqE8fpKq5dIuKXm9aDHQ5uwa2tN&X-Amz-Signature=c76f37d2b877180b2cd65093a8b4cd2d5a0f53e19b9c81b8f1c15cafe2e094b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

