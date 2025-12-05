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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637BGAS4Q%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQI9VOf8dga5fOrUTcklXMMvYhnWogyiesPDN1yfWDowIgUpx8zrc7%2BRFtdkJcu5bfOGw2GLVoSdfTvkh9Tzj%2Bpi4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDH5p9mGi58hSG%2Fs5CrcA9SYkjBIDMOuk0KLmoasCyqsOdsEtdPDkXVr0oAkJgL7FxUR6eGYnja%2FVC%2FapCsnp41hlzQY7hJmOivL1BbdZX55%2BIXab7gw5NJFdcQ6nXcdK9w1EP5UCwPc89C84gAsshVvYDiwwn%2BW0L7T6AecTtg%2Feiv%2FL1%2BtLdUhfl%2BKZYUjqjzdqlNCZfbmJi655PvJVswZBcG7OQ0txeIFpOSFptlKdCpUxVCIUzRYKc0r%2BDirlEocMPElqoA2e%2BR53jcFq9SPjNmb7xJoqBU1k4S31RPLjbrpwT1a0zmAoG6HO%2BA6TkO4RxzNeKC0Dt7nsqeF6xZfrV9E1MkY1ON5YpDPaSxiSLAwZjU90PEB5xJ2jVt%2FnXe1CrMJz0Zch3TS5K5xgT7aZKxKNarnAkkecT2g%2BvduJ7RBgo5ZlkkV1wYUgnLNek6iJxJU8AXOC2OgzoGWMU%2FTBUGFddUF9d8bmDIWpkyFBr%2F9XkCBcxwV758KWHt5N9Mtd7jiI0l3C1UnGAhvZdyDvKolx9ND2TPq0qlH4uNydb7OPG6pZ67wXk7SIe2ktez9jD6Iup%2Fp3CUPx8XFbFpazdriWKLaRnzJQj7aB88cOnDEbO9h77vaWkl3iBaGwCVlaiLAbn%2FRe4FBMPDMyskGOqUBzYLmemxutiGfscedAsMpQyuVYiBvX0oboTIdUeBWj%2BxJsB1O%2FcKgF6VXzyjjWMMkxI8F94shr72rPfDjp0ZAaBo%2BG2CEoK0ySkn%2B7vP7m2DOQ2urA6CPsmv2VGfd%2F8MNtH33kUz64Gqsg1xlHCQdHqGtZwaI3IUXcRgSk86UHMYbUNpuwc0%2FgOYUMYDNKRNFqbCtEEBJdMVGVE4P0NCeZYliwjHI&X-Amz-Signature=989ba7ac1ff85435d6bb946c6bc7b43a6354d3fcb0ae3bdee8b366373c1e1874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

