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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z3Z7VRJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T171054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUDo8bBoEtfpSUhdcDgbmG8C8XVps%2B%2FnFabhyW3%2BRFkgIhAJ7uMMtdTM%2Butjjf35F9pD2XPAZoz2aPuEHyH2%2FsSuRFKv8DCHUQABoMNjM3NDIzMTgzODA1IgxKvwLQQSUtl91eKgEq3APktcfOSxHowmqZ39YBHiyZ4G3F6vxY360pe%2FPJ2eOWdA1WFGnBBS1bzDTwK9LA5S60dEfTCct4fAnAH0S1Lwc56BtRVSlACF2UqWnh056dzE4jQSwojNaRLAP1JB9vHMFKRxtUGHTT7w7TossSfCP4APxASaI0PHFGQGF1H%2FAAM76CFS8HJ6JDuFQSeFAziSRUJIBa35q5hUc5Np2htV8%2BLS%2BVNEpPkzOE9oQTR2ueXwXtVN4v6i%2Bc3iihEp6NknpvgfufC%2BdIjkX%2BAke%2B%2FUTETkDqgI72HY2D7%2FKMinOmpoY2AhUcJQUam93ldLnKKRbZdCM%2FQOFcEgtwvtCwcxlK8MnHPmWOBG5mC66L6GTuyXoQJ8QVQk%2B2GVhz5GcdrVnvciVesdpd47TrqXF7Nk7zQZmnGA9rjy%2Bte2qyX3xbd5oI7ZgTCG%2FQ%2BFJXKJrPbLd1texbI0cUv55MF9TztoAZLTjTLPHl8noYwN6WBsl7liPrWXZQEiMbevP30yGoI%2Fi764qbmFSS5n7W0dMS%2FdZMOVM0IKowglMzNPt%2BZLXkvBi1x6b2ERIyV9Ki1iDrBTZC15PjJHITeE37UvUIsp%2BqnDtWx6kimMmavahLvHkN8lXbDIxBdtBLN6hkcTD%2FptDJBjqkASSiVHH3vZUlBMdA1EvjkO9hb2c1Qak0bziAPAdLj28F677vSxgDYTnYuP3ay0qh2eLUYPNfwsxSw7XL7nuU50CVdpRW3CflFm8ZS4HvJSlKM7gjYkG8BR8De%2F88LeEG15YJwLp0mzPt78tkEjklzXKHhHFqqttEjYGqY4NcEv3lTDNq5Ji72tmh6WeUNTvwACcyfR9TbLX8dxlvlq6Z1MMfzSP6&X-Amz-Signature=6c7ecbc5e09aa9470a3d091ddd1dbaaef5976e7ae61b25452a1b08a3f9daf92a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

