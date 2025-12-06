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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623GHM2LJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9y%2FEWfNY3Ui5oFxbcIjsHpkSO6OF6KGbyRuaMiMWUzAiAbI21%2BlxdtcGRrrBsRVoGUFk0lnC6wE5eDGAjnLWHFBCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM7uj4uMV4MHroetQjKtwDN6EFkx9hFzRWLwRPnFEJDxaQIzyj1obKf4k3WupxMr0XQb16P8zWdqxYwQuZiwq%2FPN5NGkSSlK3n1cpY3sEFQ5FTD7INQjwSw243kSVt8m9%2BaWfeE3uwcPpvibqY7CbmOMxt86MJ7cDQnNwl0dZxGg%2Bvo02EK048k6HNJGOooRNCe7rDSlrwTTUxT0RCH31EY6CivlWFQ7C%2F1yOCprSUHwQfjFfeim%2FqytrcUQJ5e6bb0cK9szmTzf%2FSsN8YliPPpMIUd97MzCTdPtpPkDe3efpyBwLGfFyaY0u%2FJvGyJLkGiHnZpJ7Dg0lZ5hH0MWTOzlAlSC1lD%2BemQvD8ujt5mpTKWN2rS1LvBZCiOv4ezqnnqId%2Fn3N0j9F8dDCKVLHCOn%2F65f5PgO4NKHBatt%2BFNwS2kJy6l3VFlJqP08PvXthRCL0ovjNqdetKoJBd7er2lP8oeZht%2FMkW7el11UVR7YX5Z15V9C4ooZqNnTDcNT797SaQSXpkfGaQpiD9dB%2BWPdme5dMQdDVJUhGPetjLp9mK9mT6bK9v6UjWECvnKFO2hXioM7Bn4b%2Fqa8wG9eNvLkpp2pLg3WgF%2BvrgqiJMzpJotz78tztAsJBcZ4BegnlZRc6NDKBMnjtBZBEwp8bNyQY6pgFONq1q%2FQSM85HVPcosexaNJMPLEkkPxQ5yiXFV7UWg2sJezbNsn%2BfEn0jwHdNyHKATMR%2FdRQfscTLN9rbkiKtkIMFIFXghkaJa%2Fm2j5%2BTQrD6aq35IMGVAZCnnbc1KpKfO4Ama0ER4eDw6Z7CzAiCxn8E2RPMECgV1ZKPkhB%2BQ63AiinwaO8BRjEdwOv338fetcSoNXV%2FpmBm2NRERUE7wnFOQhrMB&X-Amz-Signature=e9684df76f5766f4bd275ec5f8edf2420bccd767157483c4781d40db04df9bf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

