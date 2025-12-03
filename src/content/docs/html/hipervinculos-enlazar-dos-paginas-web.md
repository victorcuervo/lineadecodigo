---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ7EZXNO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICF6l33PeUqdQU3VGH%2B5WsX0scuSS8we3wLweEMMl%2BHUAiEArF8Iv1S2zzijetx7jmGJu8FmkP3vj6JHjw7%2FFqT33q8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJ7Y%2Bn9LPAeupJCVGSrcAzXe9WaWzhgMI2AckK2n5DKPek1R%2Fn0eIi2DvDM7UmKrZ786BU1JwBy87d%2FtyakP1D4P9htKjDUr3wH%2Fj80beS7M0HqZZjU7a%2FkoTC4057716K7Utc2rUTplP2SyDJN0hc0H6%2FU%2FVCns3WBwqjYrMS5Zu5IJiRrgC1GZy%2BcBxJmbbSxJCoiRh3mJx3m4vHTymGaeKh1J57zKK6Qce7cjeVWxLZMXFnaveU2Re4rpl9yXhsdKDMLkEEb%2FJIdFoPBQcK2IZc6sjMogkbq9nvJSqy9oeHg1hG%2BlGN9cmQCq8sGZzDNYHaukNtIGLYolYpQvSWFRXCeMoJQpPFqOGkzkhiKoVznoM7MZ2sF6QwwdNVx0BGbADYxojxYOwxOa3rhbcudsU99rT3aqJHFyiuS9NBoECDRj%2FS4lil0tp4s7ZX1ZWUaK8qRU3HfnUOK8%2BduVju1iRJ1FWSP85gHklvFpHRwEqIVOQ81uU4bir5IIyVgzwt%2FN7UXE2VXTIE0ExYlzHWRNphwcvo9IgPBRscdFtAucI15riAtcmXIM6Vu78rgpp4lFPy6CIt7H%2BjLetsBdslFjbBXbSqvCVLGJ6DbmO2H6mejqb%2BTILntdZ6IaMT%2FKscdEieBNceG1j9OdMLSRwskGOqUB2UMjpedjlQlhFjyBvEXqX8IQfTtZl8M1WhsGxFk5cFEc%2FsPepmqDIK6yPYCRfXMCCQt4lCqYP90kb4EsbbuNZZcaEMTsV1j77SPO5MUZh2Hx0WiRiTmrt%2F%2BL61vRtZrSmGxMyjgsno%2Fu0bi3A9FWBgAjyNkyuKKlEk%2BfSlZVBdceQE1uCyI8j7TYVQ0%2FLT8aQCGbq76njeGL3ZcEbDArjNbP2nOl&X-Amz-Signature=5a68deb80fa990fd1ae26244c7f821194e3e63de9c49b505ac8f967c50a8e049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

