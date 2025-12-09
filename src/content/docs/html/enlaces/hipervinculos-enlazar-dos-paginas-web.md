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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGG73FFB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9Y3CTUOc%2FJ5OSCNVsSpN3Gx6NI7qmb00%2BTZWXLugB0AiEAyn5OYsuVm8%2By7C6sPmr0BqSEYBkSuxGD%2B7HzJVZtdjwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJg9obaxoyVkhYf5ayrcA6fsi%2FOhwo346qwacY6kXy%2BWIx9FS6OvQCSG3gXj15QjH4WN1NTXg1sTKk3ONC8Nkw77V2ptpOr%2FkSD18UdjPBhugbo3YhWB%2BxThBsCYyN78Q4cuB4QE%2Bycg4C%2BEEXd9JQO06rYdSh3Sy7%2F0U0qg4PxjzbL%2BIoaFpvuF0U2b2O%2BjiU3Ubw%2BQjH72VnL09Xq%2BYJrrEQtaUL11VD3N26FadGl2IEidd9wzzZLBNWzHc9JNaBlbAGZVzdy6fLvTUwkOsHbIl7Hg60SLMBrlwm0VwfvhiC83KSee2vU8dM84tYxL6QHEabG%2F8yjos46k91vQT6OsMw3i7SSazcGLTk1vLY2XGV4wG24e4yxP9zSWqnM6e75qepETAyLyb0QChYwBi8wQz8UoKq1NQNUbP%2Fe%2FojO4AROC%2Bxxe%2FBapVbIkQgSUspIQ6oadlRfFpNSSZfz89WAp4qexZYuKi8nIo%2BZxG2ac7%2BMZnlFa1w%2FvaKeKEVR1BJ9uGwatneZMEzDWG%2FKR48GGioK08euGt1fGGsYzj50H9NE1cAzsMPdeyWjlAlM45KaEv25AqkkiGH0HHiptmN3R7UMvXgInBKBtYpQid06hsGHK5M%2BEkHlzvKY5IAUDgU9XmeJ5aIzC3%2FfuMJDE38kGOqUB2g2yPLHeVqwzc1Q4Nn7VVadFM02hnj8IDAxFlyGyOOUyCIFPG5BegqK8zdW1mvc9%2BiQmFgpVDb%2FnDV%2FNWxR%2Fs8w9WGT%2Fn8Zma1XJ2Zat6lgO%2Fz%2BHyg8tdLNVCSCkkoHfFsW84we%2B2OlmHlB2c89H17O0En4Q9ACKME5YSX9C6r1ZVbM%2BosMyPW8WSaptn45HEjfqg8rPodX3QxqCmyVnNkewbQr3&X-Amz-Signature=c92c4f2baf17b440234d38fb8f4332bde94633da682ba20724f3065ee97630b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

