---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z3454PI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBh5jc%2BgOR3LkHvauxyoV4hJ6OjW5kHeZQobW%2BMdviwrAiBkF%2FnNbIm4pRFEG3hvRGiiHgHJ1Yg2kAl9QPtAueh2fyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMX%2B3a%2BvUE95jp57jBKtwDnAGxvngaWF9Bj72fzDxE02uFzDei3nguxfj4GLi50M%2BAShSF%2FysINMPd8f60%2FQs6eQWHTB1gPOKspHXLOz8Ju8YmMJHAyILe%2FWujQ4%2Bvq3IjYXTulS%2FxhIdSwsoBK8IzK3q5Ld8QcRdtDl52bqzKUm6ap2vK%2Bncu%2FTz4FRV3b5ectXrIcrNj%2Fi2p4%2Be00bNQu3%2BWE6Ug3%2FGTo2rS3RLLmJwIga34jXHNrfSTDnPYNoHKQWA8ZvNlrhUavxWUkeyudUMphK1DBUUmN9cMCYXwHALovbLsHPt6X84N9AYY8G70pVRqv%2BSyYlvpdbkScrxrAeaeTLWRN5KmDdPQAlAe6bwJWNvps51tGw1Hrq4gP%2FL7gYidRvLzXfjE08VCRIAIOabeGVSc9vt6NRtyc6hK5cD93ZioY0O73lCz2jjUt%2BPProXHyTLveL6A%2Buc60rn%2BNwjwfxpXvWcp0o2XTwWYPdEOwLRNVziLMJBPxL8%2BnUl2CX0qPB3w6dChzetDLOcbS5nt59hl3WxzJW8J219SXt8fgkE4vHUROaw%2FI2Gb%2B4ldRKjQFfd3c89%2BrAf%2FrK4uLAGs0KD3TNCFBwDMpTz0n8fBdq1ODE%2FXT7JODlGt%2FUbapGqZ6onno2lk0kYwxKHGyQY6pgHGVIwhT4YichJEbJfSUNOzvBIv75zBhwLeMhg5%2FTEMVv51W7qLsYBrqh02R2OqJxQSq%2F1xlb6KFjnJtXZYWI2BWQcbOemdpG3w3e7z4XQjAunrpotmh7lr6XVb0PfUC5WAB1M3kttfUzS3UzNlxh15Zdhh0lVIqcZe4A7HdgV8nS8ueMgqDAhESNvRzQwzyuJud1ygLR4GOZDhg094OseMw5RynqF%2F&X-Amz-Signature=e00d271fce9c8faed62b6cc7fe67d11b136e1347c98cc4670d7e86750ebe0c8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

