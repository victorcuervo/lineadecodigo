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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPLJ4AKR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T114058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFavV2Q6234Z8bk2NVOFSqpvDMSfDOVCVuecFpr1LQstAiAc1GuRNSnP99o49sFknt6WmdPZKcNmT0e2556Ps5G%2BYCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMYxP0oWdYp2wjth4WKtwDL7xT%2BcCmQk0d%2Fv0tR5PcRv5URSBmT6svNyupqqigXtyTCG2vMGkctHrqOFL50h0eqbp53Tif7EAISDMyOUDXR3LNr82iC6SPwcqzDFVTjH00BuJTf1DlHKnXv0RgqUW4PawjP7PJLUzTuquMR%2BIxAICDCrxGJqs9s6IISXczJr55GHYtmtYqC7ZuJ9f5XwEjqBZHOmoxB2arHrmS%2FDpKtqR4PC0Q1fNDgy%2BiU1wrgelYYMPhaO1wLpxp2jUccmlNibZStj%2BfNd%2BSXYT52HoQbLBT095ZOrUUZYjJViP7cfIL9XoSMQ9GXpwWwoJBzmcugxI8ro%2F1ETmd2jVojchnTj1adkPLkmRIY%2FMmIvtbKV6R3B3ovMXTnFOBjCjsVbnwu5rff2cqUdvEV%2B9yitIVJac6akaZGwI7DYzFZpdq%2BXr7%2BD%2Bv39WbrxU3sYxX4SS43fNnW%2Bo7eVRWA3Ek9D4eJO%2B3TTXq6gJBJhNhL3pC0W18ueM%2BBbDD2NmGgqD3%2FhFuSB1byTSz7WZPwT5EoCzZXFR8OZ2gsX7dPpM6MmCAua29dIaKnw0WniGhZ5teW0jIYp372pq1TWwsLViS3vToE3deGaS4LNLva64dTbwmh2tidy7IAsxW%2F7bQx3swvcnKyQY6pgGiBKC9OgNAUFrl5zNCo9HpvOOP0LM5wRBU1qlPhcBqQUePEEVVAvRdIqXKX1621gXJGEj1it12DQbxirHCMh0D3jhbFDhkm7iQAGxpTgc3LtXYQkWXSr9obOfQutx34eJq0TLZYfpLhjZpcYioOwlB7gmG4pRv%2BF7Z4lmkwrgfcnJdVh6UtLeKdw%2BchvD16PTFjGqcGzRCXkcPtfVgG62s2HkoISnG&X-Amz-Signature=8e8d7b8c911d08d09bc0a9d69d75d1d793ce226bd53853152c84c3f0998d2d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

