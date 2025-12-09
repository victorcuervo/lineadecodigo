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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A7HUUWS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B1W6PecETcJ2am%2FbHt7I0fGS9T2D1In6G5jVayLO3kwIgILjvwhvjv4ZI2cRZxARivzj6y74hLYJewlI9npLRORwqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMseq3fM8vkdbCq0uSrcAzNyKoja5PQXmLtiN3YFEjNIkXQiHVaz4iSF%2FmQndazj4xF%2BZNA6Lon%2B5wxjkOxNFgcrng45F2L%2F2%2FW68hN9oRdurpNmG%2BMSWYHvJnkZEnK63ZqXemUT9Amg2E56jq33gaaiy8K23YP9AEs5JzIxxzaBB4D1GJt8ELU3K0qS7oYI3Crf55GgCSgnuOcAOz1wfiwt66%2FMffk9bJP91vCyneYb3C1HM1Nm77iu%2BQe2%2B2vNDDYDPfpp23jHX3v3puBhansw%2FNH4nAF2kOFb5GZdnSRkMaMgPaOhJwgaSUr1VJkd9zgJR3Rjc9lNEPw3mLz0jlPKp0%2FZvkp1eGx7KtXVNc2t29DuZ35bUXYXKxE4j0Rdu5ugRV0wD55zwIVCty8Zt5cNlOAsBGuepZmHf%2FYybJuLdPxtIABzeycu8zvCpE29w5HRA%2BWNLQp4LoA00KXdtjovd85SIXM5doKuyDjCVJV5qMiqpcufqz0H98y79RVIVlWrMYBl0t9q4nRL3dpyqye9dsLDXJ6eMTxcIojC3xFRnxn9FuIMOanTSqU2yUMXKtJk%2FvB5R5y2bWhxpJI7cSFlllwQuHWWiQFR4Uy%2FH%2BqE3NNRkCMzwP2pidURi6ouytUj5Hb%2Bh3B2QXSxMKLK3skGOqUBLAwMg6iZNro%2BECSH4IQnrxq%2F1EoPGCFaCuz3Oh8uiEyD83%2FlUrJANJ5m%2BLLWhaI7%2FObCJW%2BOmSqo1HYIfIbhCEsD%2FqTl2eBnsq3rkwBTV%2Fe08ATyN8WuhSSSF9dEMg3koA0Ktw5WDk6jCsSeV5PbAOXcc0i9Iq8eJxDGAzz6IWE43osNm3XkPed5nDB4RB%2F2ULmqUOEzj%2Fde0rQrnwpJAqDzgnXQ&X-Amz-Signature=9e4ee687e09d042cb4d88f9fd4e7537670c6ae48bcc72ef255dee951302cb288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

