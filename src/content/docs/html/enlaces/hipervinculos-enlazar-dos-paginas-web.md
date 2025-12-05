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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DDWJ4U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpuGZiW1WW0B6LkPVWNc2MX3h3zqvGiDrciHDUtA92aQIhANMjiFhuNk9VSRMzSGBDz9OLFQ8KU7XEAXxBm7poiKewKv8DCGAQABoMNjM3NDIzMTgzODA1IgyoZgEv5FPty2cRhOwq3AMfN7C8cD6embQhI0RUxgVgDXOfvPAO%2BnL3cpYafOHSEecd80tpP0Xqa2PU2m9LjNOBHyRLeyLMNSGG3w4P3yGMW6VH%2B6Q9lpSL606U1011QLBK9CDLJn%2Fj%2BrJzN3Gumb7%2FQl5FwgrGBT%2BaPFBFAkisaOsMuhIu0EkI%2B4LM%2FWa9HutX4am88XR5ONaJFRnRoPrAvp%2Bqpdpuw3WfKqGHzDWhl4IAHitXXztmO46SvsgQ1%2F3PmRT4JXO8uFGGWRPN4Y7oEX82ug%2FXIW4Z64W%2BpDRLWB0Z8EDsolUAT9ojriqngtscVtzSqhg6bufIkHYC8dSl9cp1cRip2NbNJiffIZJmSFDklUHnQ1j9rz%2FbMWxjSYqw%2FySdUCdkTz2O3u%2FG9xK%2BjNEi20XWmH5Hg7IxFVCaQ5FYv%2Fqmfg%2FTlJ3mh4pbq3ybnXQ5GS%2BXWrxyb6WM78Dwa%2B418Y9nf9%2BWlkSogk%2Bs8KkGCBvQhA%2FNAwevw0BEa3gdKXIFMyKioYsqrb5JcGWn35aB4W0XXk%2Fbbu0BevrmgljGs4ftgWDBrzy5YvSzn9JYexsEROGHoo7Euyg%2BodSFMd9VYWTDr1qcM87lz6QX2acX7nA1IROGJJrqAmsDMEtslOv5hlLzwjlp9zCq3svJBjqkAb1M0f5qRuFiJRofPf0UgGS0mvu%2BnxnYqvaV1mBC2KjjoTAGSU5eV5cLLHnlh%2BYiK72pwtt6gnvME1dGohKIKHTt053t3UpUZiftvo6TX5fIONTxenu2Iwr34Iy96vQAdsoo6R3rQdWprWtqrtrmeoiUXdM866E7xv2uW3xJ%2F%2Bh6SrzoQRRWYgQ1w1zLKfvDJsmi5dMXc68mnjzyR2X%2B04wcuc%2Bo&X-Amz-Signature=dd864064ceb3e5dc82bb53bfd9bec28a5162c1ae5f2d055b83a977321c34a536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

