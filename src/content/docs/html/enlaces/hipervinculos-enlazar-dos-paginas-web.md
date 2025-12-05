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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D6URSUM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPWXwtBZmj47Od2zIrW6QaXMoEITcD7gNVx00%2FjLjdRAiEA4fougvF0Z5pUVQNq9yxnD%2FZpw1wQ3WRwLNwk4B2HP74q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNMiZ8FwAAhjOx5cRyrcAyAwjN%2FbPAswzxIEJdMRAnN6r4nWLvDnd7luSVCFd0C8r3sdN5z0MEp6xIPSZnRqpPKE6SlokBSxPJKqOjpz9B%2BcWINXUBNEw7JOKGuStaQ5al6iiC5qk8uKL8eGBHgvzvi2HWht3VnE4qZBsS4PH7kT5PDFC3pCsjSfjYVnwno7d2Br3V%2BQ2%2FF%2BufyB3GqWcMpk4jCD0Gy46pTQDWgJkl5NLgy7%2BWj60qyFmghlxfwZwmFMEncLlMdrQ1qhtnacLy2Ee%2BRJG03%2Fq%2FkMgA5YPZLWWcGjPHkCkhF%2BM4RzqV1%2Fm%2FT3mYIGGXkvVYMhLlrVFTEiiS%2FcsFRHos8TYYmPro%2F6tDLeL%2Byo1OMACNiMKjSqsQdP9jLrR4TCOluE4blbUsS0v9Rmncb2dxoqOADMLbyVFCOLPDqEwlCeG0dESvHhe2zxzDo0JS0F3uCG4yDHM1BkmUGOZOp2zSfdB5wbr%2FLtJCwgTwdTkcqFL33Gd6p4G3QcUz8KYA6nTl96HCVyEbw6jGRqtzWGbsTujvCYlQebpBsML5T2v%2BlJ%2B9gAnkkRJGB47oR48czZOceTf6BrAIUCF0H%2BZm3yR2EMuMrIYAZ3AoNleMDfaLShTVSMZknimi8jBCDlgtc7wQNZMIDOyskGOqUBR%2FAa%2Fp6olry5Zr8XAr3tOj9f4oOvV78elQaXmw9te2BrP4KzDg0qfcXGa4%2FVnGYrQ78IsR9QfPbSE%2FWG0EOyziYVWZPjeLUXWU76barvUNqZWDuXFEZRTrGNVEdE8aohKxXqijarVfdlcxqpeny0T%2FG60RIp6GBAqvoVpoTmx2rJ7kJfty1es%2F66LRLnJUka1hU%2BCKZXmatqDkuFl03HcVz%2B4tnr&X-Amz-Signature=0fb11d3ebc1150660922049c415c36e1304153fd673c932cc0b0d0f94541df62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

