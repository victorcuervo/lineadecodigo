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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDN5C4PI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrOsNJWNojTbdhwv7DiatklSO3Iab7O2F%2BBcXkei%2BtOwIgQiMhf11N8Kvms2n89Nva6IoMFfLpHnd51qMGUx6AkFIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8248rrK%2BnTq2KkmyrcAyl3UGPGQhKDNme%2BH79%2BlkGkXHEmFF7PNlZUFK3vWA86R5KUKQXfgSrFa8kv%2FVS8OpLfTRSUF2lrIlcBtiG8Uz0seeUr2vVf6oxvu6o1qifRfcH4pnNilAlM4wXd1sx7emvkui3BqseAZsbuDjlqI81NgiNKN3wO5%2FG2QUZaWNzBg5p9fQDolIVoYiEu5PTO50wsN5H39msDJU5lQZ4Z%2FGKXvuCoHoPOU7kWAIjkCNfglRSJO%2B%2FYKH2wUJct7ONDZRoJ2%2BYBGty6usJjwv7P%2FQGaLKYEETgDSBCTPbPGaNHOz6AFf8I6eLmYCL4mjncawdkuXWQNLMzjmS75iCWGIr1rXiiu1A4fOhg959rERL8ac2CDORIqPMUXVxcGAaWsw4Hx1UnDJK3LZsdqYEbWasivnboVLKXO5BljkvdOxN83wEJ9H%2BAnD1fpkH4lPnivkIQJ9xfA8oO9wkRd4XbWzdjh6dV%2FFN8xYpXObEc%2BYjLCmk5HY9oND5dJkupEjiHJfAn%2BEroIsxDdtYP%2FoUNVI5msYacjdlaWPZHWU2QH2tji99RVymyd3A6AujyLHEUBNNBrGz8Ii%2BTDPbXsDJE4da7Q2AQnUMfsTqGuZb3ZX3vQx%2FkX2WxLPwmmc4B%2BMO%2BU2ckGOqUBQIgPmbGrjHpf%2BpARPybq8Y0ufIzGW7fzyw8UDPpg6bwk3exWog0nWq80BfiGrCineNeuHoFdZmQfiruqWaoRFNz5i3HnOZ9deSPE6lfyJfxyDBOM29O%2FHPyqtqnsalJBjiqdiROFw3JctBYh3NBqx%2Flv6JRRuFn4LJrUzfCv8mawRbobrvhdy9w2YzpLQHpu3dFWDHESHeksjkc%2Bm00Pa8tw8P8M&X-Amz-Signature=e6a225b4691dfb08914dcde702cb2648a123698bf71c1883132cf6440cd49e21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

