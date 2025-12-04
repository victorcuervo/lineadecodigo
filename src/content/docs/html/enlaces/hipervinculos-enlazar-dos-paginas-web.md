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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THEH5YVU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDuj2sJyvdtpAHG7PZu4JUTjS8SkRUKfUz71u9SR4gTJAiAUgd1XAsdj%2FeDpFotf3P2YWv2NR6Q9Ai9v8yrHdPbXZCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMLvsNL6VfUyXUDyKkKtwDHyiA94vAKziCv6s2H3ddsvIatKgNmYmevOvXOnTs1%2FyFWeVTrX7HNXIoszfIqHdmr3cKbEDMk85RaETFmtUUhdxvoAnfN3gxEKEBLlG6U3lH9CQkQgE7Hcv1exrjOzi0%2F%2Fh0km0PMeIk3UriVzpYLfUN5eBYAKErrpRbc8C0oi7b3MHBzzFPkfB4iGyShegHpBqjDFFEb4diM1Pg112XrLTJvab26W3%2Fpfc30aK8FGnTlgLhUgDF7DIEeO4VH90o%2FqlTP60aIOeppnWhO8eNAhCnVAO6h2%2F4zpJEjXP%2Fri%2BCwKzy9%2FiLGKps%2FvSEsXURGC4Djgl7St0gRb9Fj29mlddRZFXvUpaIQ5J7Jk2eweewjhmW2ApPsC6e7jUcG1wg6dpFpQGZYkuxPAaHpY0%2BV0V%2FK4P84jCkpxQn70m%2FXDqvZvXa%2FIWqmP4nl3fGCefQj2dLhook%2BS5lbh6s%2Bq1T4tluqsZ11l2jsjDCtLwRBxljMwAP72sbGSuMmMYwi0BVRNFSCuuVngBQGPHBjX25nNNvqvXICR%2B2GTm0996hq5AnZXbj162ykqxEGhNvNkNvZ7FcrRCaw0xuRTYxh%2BSdzy%2FWwQ4Rzf7Wzo75TP5iiwsjRwKQFeTf%2FetPV%2Fcw9%2BbFyQY6pgFH1KtqfCp%2FQ5tlNM27Df%2F%2B1HCH1zEs1hKN%2BTO9u1%2FRUpnQ78YjpttJqBl6LvwrqrHTvT0Z6HrdnYK7%2BFvzClJK4nh0QGk5plrXK1NT%2FnwylBr33k7Vv%2Fuppn3dc%2F6CNAIsDSPM0OlscXwNRSVBu9iDTbucEcuYpfP5JCwdEHHAyw08g9j1577sWllUSZ9Y%2F3fwQ9eeA35siaPjMFppRzCD%2FtMPcxY%2F&X-Amz-Signature=4fc90632b7604d908f441e953dbfe09358b95b4e9e0a3a97bd5282e6be400a98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

