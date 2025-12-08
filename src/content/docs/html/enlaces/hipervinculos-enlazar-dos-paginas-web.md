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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS5ULZTF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVOawOywpVqum%2BR6CYLVkGtKqfsNNfEeC%2FlSmkpzQwYAiBWBwHw13PLdqEiX47EK3srQgAwwkjiN88DwVSX8PdHJiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzj9iPpAAQnQyWUhpKtwD6AJ5vnh%2BFENPJ7%2BPc8u11oK70ERyronFk6RIB%2BJ1ydo0SD2B7skkjT%2B8nZA9adU8ZwcRnfkWXAc5ZndIXMuc7C5D8VL6ixjozl4ucL9ofPcTD%2B7jvNXdAFVMSHCp7dUnyYXsTRacVuJSTE0d86mgM3vtA%2Flb4yMVjSUKrHeSdBUkOL00XiqsjtuB%2BTpnREsYTpFzVdBtf5asAnA1hb9HY3cVnkgytvLLFmUndmMgGNQJtSIVh92lDTTh57%2ByMCH8DdDVDVV5NtyT27sAeb1i65IbHu0yaY1pnfc6bFqI%2FzyLgqOURDMgcLiYhyMxJUe0qZ6fxrHXqpv1HqUh0UgYuJutHmpXnpjMnuUDQ0vpbM2co1nWBzQvFjVxOPQUW22E22vvraPU9fWZ8BeIUJkh3NJS7dlF92cGDVXBeHgyQDPww04K3L3dQOz7mWBr5Mx1pNm43kHq6OVcZLHXggmqlJ4U6lVeBhgFjjHCfVdRIvv9HfiBfHTjBk%2FhSIFj1Q%2FIk01otmeR4ApiKT55ZJcovMCMM7wm1HbtQSvtXbCRzOK5bru9Dp3RpTrsesUbSfhYr9DyUfNzeiaD4YDv7RsbhXNXrAytPeqQkeR2t0nMoI4titXNlAsh4Gt8g8UwqbTcyQY6pgEGvvDB3ICYD7qrzwjTL00Q2Wu3bo5F4OK%2Bv65jSW9yTyHFsrKUUF6ztxmnOiHrpavD64O%2FAncTjvI4%2B2c7xwjq0O%2BknyVwnbvl7tGP2LRBVYgFkvtG%2Blyyn77uf0s2oVkNY08ueROPc1c5N%2FLIuYMJZJ1BJYKEkLYR%2BGIzzabWpJW2pB8L9vdjO2iCgd6qKIsYeA8CjWDW2Ef8vSrpd4%2BYW3NzKoSR&X-Amz-Signature=2295d73da7aadc82d24a30c9fa12d498cbd04ad0c6f3aee85964529b2eb7e18e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

