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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7QXQ6I%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJU80fEGR1PsJicmhCXYxlI00xQswIHDBtPRcshVT5CwIhAMsgM2NpJaaF0oIs9DDFZ7KnsCNrWwKBl9JBdBkxE5%2FEKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAy%2BHAISlZM726p%2BUq3ANJjYy1eUi%2BUvlaCvU3cKm67LXaNrf7zCQhaJ0POt277X2gZQ5%2F0Tj6ijY11vjL95TkriMxGxgYBbON0OrE7xN%2BNawXEDrhuoEfp4Y68Y0%2FUKyg6XVimY6XXUqDJqS2ydbUbNiI3Z3gSmUUIAgVSPCMDGByzWfqIkYO9r0k24ULFmhVNkWiYCdya7oCbiTh2Whtwf0TfARcDVk%2B6amobmVUvLD92xg6pSBsGVkqnUtI4HbpWeZ5EuCFxjzop1CqOB4zK%2BEDvcvvrs12AiVcc8obuwlZZlK%2F2FwGnqGytW6oAvWD3cYBKfUBd72Fio8eDgr8uypSBWVVfXI3lniXh5lsmLTyI7lMMQ5MEOcl71CayC%2FESZrEezOPeSo61mprSiJEZ04TLu8WKrsR0QjTavQjZgzIImRFolxX7k9joT3a2Vg%2FI73pWf5lSYtoz8a6qgPgCTOWEV52VWL5BWKoyrMbCdCf7JxMWHRjST6knwd%2F7MNg43bJ7tmJgfCxgYHrXb6XRjyY7yDqMFPhlDTBHRPHnh%2BiU3IRxWVY54brCGqF06DiU5fxjweOBgTjS4rmgrYL%2BMLtlK4PDRtvddjBgHrhVeZoZKFapzpue88D1vzIKZP603QewQeazfi5xzCkrt7JBjqkATqS4EUVIq%2F2n4XpB%2FLc5Ta9zjY7qu2p9Mt9rc5K%2F9DNlynMB%2BvhH403CYZLoK9%2Fm675MUT6dY9Y6KnfLiItQlBV6RiloqJuHtaOltDYEq3RrSzclOlrJZqcIJbN0wLU%2FCWuJNGQrLLPQKr5Pa10ejgZVR3yHBKJ2exFFKethinJ5USNL3DGAUWidKKDkgEQvlVJWumYD7kxF1uxXirS2TpB2P1E&X-Amz-Signature=b7e1e7b1c0def90774a74cf796f19bf058f13be145eb4dfeaef41533f5398b6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

