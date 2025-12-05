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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAI56Z3S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrQ5Fe20nE7ybla1iYRoGoVb0GLboCjaWD8qvrKz3BAAIhAPb6jCfsGnfXITOICFRiGGQTC9T1F4FaphdEcSsZxWc%2BKv8DCE8QABoMNjM3NDIzMTgzODA1IgxjeOsG34jKDT49OKoq3APrJtDHWz5gnu5ih6UT0yW9lyHgmofL2XiZJnG1mTlWpmAVDqepQcLiB7cJf7CNugcom6rOO3%2FTDDnnWOb9zksXo5CUJaD4eiPkauihA1BmP2WKDJaqaC10q%2F%2FMh7usbTv%2F2f5MPYJG4ZmkRV%2FcYUUSLzVkdKR0YJY1YxfteHdiUDtB%2BAcis%2F3Kyn%2FQ6%2FkwpPf2Kh7Ua5hucU0Etc9NAwyGL1oti8LhGXr36mXMQJF8AmzEUq4FfDhNJYPO2Yg99vGB6fafOuc4ctNiwv6P2Vp2%2FWU3zaBGzPKxmId3Famx4%2F0G1bqKa52%2F4Xhc1cCHovf%2FjsCkmcUHV%2BEZKsHLAjPbr%2BUzB%2Bxk%2BltANewJp0xh3XU9R%2FVS9%2BPPTHE63skVCJVh3iE1R5iS8GdLJs77rvMGtWuJrXnEXFxUZHLClPvXU59ZoejUNK00voxiuXHEYdb36eDAQPdAaQdaEnfMJWZzBcBNnNoAov2nJDfEHWqqUPKxhWBGKoURf%2B82VMM42L5M6F4NT8Irjue%2Fq3zXespMXlcrLx8td15EmEiuLR2o6BVpnU%2BPqc1ffcGRiQCmJA6%2FYgz%2FNSARyVBeGovP%2BloXdU3ms2vFL5otOPDbVnBBDBuxbwFCyEuDezPR2DDyjMjJBjqkAQauglmfAo%2Bqjf8bHZ9n%2FE2ngNzfabYSl%2B3cMUXLnJ9xUaIbJf%2Bh0zCpR2R9F20mH4FfDNHmwuFcrUSuS%2BgH0n9EMNMYP2mCkmnvnxYwYyMnE%2BQPxUKU1cD6KRkZOxp5jSE6XEhFmlqKCar7HIqKNXTINfaTpmFeAkJHRf2V01U%2BvVzEh00rJsY6l4f3wvdRyYV4EXMUdisfZ2zFmvo84yL13mQG&X-Amz-Signature=3b3b6857dfe7bb7a674ca38d65b3f4db343ec91d5b4032efa556b15b28702512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

