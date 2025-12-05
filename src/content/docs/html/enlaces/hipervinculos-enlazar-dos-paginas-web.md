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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TJUDFQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnDHZaZAG1ETW7zs3cJFRwjhxGLUHcMRki3g072WlpxAIgK78Gb7Z4pE%2BJi7L1%2FydRhMqbilcW%2B2nCtJNOF2YcISgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDH6RKOqOdDGTjGbB9ircA4%2BfHR7ntEys8wfxn%2BO5Z4q47%2FzOm1xdm%2Bll0IhMicawmX98gPumMcIEbl6VoyFIMtYPVv0jpICo9xr5j2N7Tg%2F%2FAvKVMROU9NXQpCumIarkeYj41Ad2ybVtiKSaLIX%2FummypaK1CVzyj%2F4rngPbvQdHMw%2FSDZMGcQONwtX6tRgNsaBtan9vs%2Bm6JXdEVZMKNzb23UHPnjmIj2vIm%2BEMiDPdq3dbOdZsPSeH6dAKnLmBEmBR9kRvoa7BRDI9t5qKxPCpj%2FhUOODjBwn7vEWLzes8uo2GSj%2B5WVGGoyh72pSuKd2ReQBeaCghzQo4At81K%2FIsRV9qhSvOrcwHjbi1racbkTBYRTgLOyqCE9%2BkcNFFu%2BEgS1i1wODNZv1okNI6bQxQS%2FdcsHo9ItgH3NspT4CBTjFE1GZC9oxxuoMHkimQLxckehBFG0osYjH9WL%2FcqJdqwTf9Q6%2FHGkmno20U53Oel9d0vwO8WRCJat0m2o2MGnj126%2FfNlZD5SitYmkS25h3qzyJPpKriuu%2F9flPgW%2BbJ3tJvoPWsCLWv5Vi0hlKKMLIe%2Fb9grC0fYtfmMVNadatDURHhioCiegsMvGPpE02%2B0NFxsVRinHRCw3bq22rg6uyXgeES5MzzbP4MO2oyskGOqUBj48ttkTU7%2Fj71Q1Mr4SofkvURfUghwvWARzWe9R2DWIy%2BoAAXn2P6hoh6sBwGBTTZRZHzI6vxSWgSNjrAnOErrOToFy3zxyNyL4TVK8yK4ymAY7%2B9MbtvmvROT0vaOIH4Gy0C4jSFWlhhfNMkUAsgMmnPpA3O%2FH%2F8fR0G4EQ6X5p3Y%2FgegDcvpjsuWNxHYES9nDvjlSg0YRoaNbHwYxkxbFsrbvE&X-Amz-Signature=b94d14efe9dc096aca60750fb6cd28f31bea410b0229f9ea1973d96ea9f29886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

