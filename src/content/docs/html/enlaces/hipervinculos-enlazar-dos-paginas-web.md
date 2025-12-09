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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XESWRRQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BBh4TAMTdTy8NQKwzkBuKs2m%2FbyCOJ57cmK2cbJ%2B%2BZwIgegOSSZsL1A0qvE7EAzkCm3WwH32UARFTzqjADyqDMZEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf%2FzjhgU1ZWK8RreircA1bGFj5sc3DRLQD2zd1qiyWAVMzGoaKM56RLWWbCUrZU%2F5uVyU23wMv39iTgxRbjZqail4QEJzrguEE1%2F65tzJPAX4ymbFhBiWK4xVit3juPIy3AGZ0Mo03JjZWI1re169%2BXt49YjyL2QguGtgFB3ixsJPcqj8w2NdBX%2FmdXWTecq0hhY4Whu9nTliZkSgbUtkPj9ZEhOrCgZOm6cWXFmJ92hJrW3wUGRPAoEwn%2BJ9%2FzV3PXHNnNFSYda3bqzFMjUFogpIwv9NqojMJMcQjxFAr7tGmBHnpK83baxK4Qfvt4LSfEEj7KR%2Ba03xvqznZVl7CxNz9064IkyHxSms1BNB53Tt6qjdQRMjK6KzONMxytyipQLrj4DrfY7xFwq6PxEisKfc7kpiOnYvluoAW3SZ6wjiKpzqXNaxO72kisZolH4qa4NboL1ILjYGH1q3owns7UefAekpKTVFiN%2FBRp3clye2UQGJTuYcN6fGve%2BlxwuUqqsG%2B2UBy9NyeuTTTHp0o9MMxXMslH4A%2FZUbQUvXxH0AukJUY6XXqfcfS1u7xlIYhzzkv3Crc4E0F3aVjC3PkEWdXZhmoxIzCYNERLnlUCQ5I1aWMNac%2FWiBfaeT1gY46A8zEPC0SPXZ5bMJjl3skGOqUB9by20mVous7xp9Slv6WDAb0FFOX%2B2KiAAPpBq%2F3HeS9LGKI64MsQJFW3KychSHFr0Hm5zlI4qkSqSzvLDK0wRi7XS%2BxWDD080JkeVAKfxz3DtNBADeyhNpXA4%2FgZ1CdI3rDMC%2BKrMKvMRw3ngVj%2FSKyUiwNxWymA1bhsKXIduK1MGVkIud19qE51nc8iaWsSWAwu%2F9NCeAMDXk9FvRq4JXbXfJ%2Fs&X-Amz-Signature=e5d17c1808bb648df4847c1e41714df0693237422b802ae740938d919a7972f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

