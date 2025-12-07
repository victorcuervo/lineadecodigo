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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFRDGCC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T103706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDiK37oSX49mRbERMoG7SxAYINJO9pHn%2BEZkbgI3Sv0QIgEKxkR0EZbJg5VFye1RzorcaYIIa6LMjBCOfeS9bo%2Bo0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjG1vsq2mRzbw0Q0CrcAwx1BtXpWW5YHwp3uvjBBd0GSPeex2WJrmixIE8MtKyH3KRx9JWuaqFqvDPpprah%2BVBzm%2BwAuLmN4ftxVBkcnpRfvMDCCHMPC5krmSHYxGQneBK3FVv1N9vRVTugt8NSSKOWpDAbruzF%2FH2RaG4ARTXAOw1wv667EgbFI1AyoOg7%2BPOxmPV7k1MY%2B9M6iLGkafCLbWUp99%2FGj353Lmwn3MPVzLDDFbRLyf4zlKNHp9ADGSBUPgGDSlNtah4mDyIQBz4zOqE4zOwGknQreDQjN1V6d6Z5m7qxOUrJzZtQKHhmVcwDu2pdYTH68f6XtZrM7hDzSfHHIoju24qMzfJdfeo0k1qoci%2FHaxV4sW1f6mroVifrL2SALCpAkdQYtVz1OG61KmEzp0TuLrfBQKWGsZs4rUUGk4%2BHuXO7hUfzHhctelEpXHB0w%2FBe6QMcSW1hmKf7MWV%2F47vAmcC6g%2FjX5fqMahhXDZ0exsWNph0dPouCauth%2Bpsrs%2FGO%2F73dgfFp8r51KzXtMM6s4p0Hx16iTI8O6%2FCwHah2KrItsvcH%2BC%2BjMKGRT1EZUZKiNZJt0UTdZ2wB22O75%2F0IqyVAPN7Ixb2EhjPlmsZleZbn833geJKq3N%2FblowPfIHbbX%2F1MMaa1ckGOqUBMrvJROamGzsJkkkOf7mk8FkK8BljWFsiaPob8XNky5Lu9YjV%2BXZWdtcrBwkNwbpt2dWDeEh9lS0dR7IAlfjKD%2BHCtlbW7M%2BIW0CV4ShYYA3kPn4gDcPZXg5kINNz%2B2z2WJSpDRZ9FUH5hnd5VkTIVrPRL5KlRhOLRVYvnzBYlCAK3CZ%2BAgo2pjUKjJoyzVpwJhhbIrSGsc7fVPAc8cjHeep1gSGN&X-Amz-Signature=8660be52cd1bfdcd142d02d9fdea78a1c933f29983b8d41469b3110dcbb10cd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

