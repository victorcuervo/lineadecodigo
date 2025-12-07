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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO6UNOJ5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXzJ%2FcfoXzNGY8A%2BuBEHamtIspPZgWeHpQUWnBv8zPrAiEAxMex0Cfhc9bIbHgLcCa9xgMSZ15D0NcsYPxnXAwiWvAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIVa5rBnDLq5efb0ircAwB0B7D3nHalAPcCBwaDiypF3Uba6fZ3VfK6EoRuLczh3izj6DVgIjC%2FqYgzBJHWvmc7R7BzXUowwc5xQBXCDRJ9ZxLy7Tja3B6FC%2Foo40hu8nGTTFVw%2FvQx28FB3CwefRKKad0lHIED8pGT252JMHr0M6Yxi%2BafJAra%2B5rero4JmQFDu89k9kYWjTlXe4C8qEGJUCj0BD3ozZedl%2BjJ5qQyi9ouzWptZBvO5hDCIBHxb9JZwx0wAD0zVqkMYPeI5D1Iih6PKpSFewgRH5fAvhS4ERAYWlj55EKQ9o5HEJkYkMEBA1I4cuDWvvNsS12axNxf8RWGVmxhC4jLx52882HsEQHBf7yIpQICBuNecPLS%2BIixZA2F8aYXBBUX6%2Bl2C4kKunsIPEV51%2BAeKQHJ%2Fhc1zmmCNEz7b0MEOcStR0mnPzwwpKlvj42Pb%2F4XIUeL%2Bnbx2Cl1lM48YW1ABtJJK2%2FHlmr8iR7qj98gVjzAjUgED8d9Ob5ELkhw4I%2FEItdc6RxTeY9cgP%2Bzj6n%2F0RYkx1kjpMKeumWne0ku9Ct8woItHf%2FvHdY8eG519g%2Fmsl%2BRAm6DNkmoTntvqYxlPgo1xKIkTVFjmzJNdu8n6jMO3zr5Dz3N%2B6m%2FRtE2KSBjMLSa1ckGOqUB50mlHd0%2FlUu3uQOjptaugWEK8%2BdZ7jd%2BREzrXzZNq%2FtD0CVEhIwmCAmx54OASa3vZ3Uk5Lu84qKarcYukuuoysc7S0FNA0fA3WrU79vdJi8o7i9KpuethJwW7gUPxyP32w6B%2BjqV6kpvNeZB8ffB9XBKTQ2onjtGtVSnHh%2FIYTLC0JVLGEG3Icln0TCTH5i9Zb%2F9UQi9lxSYwMjBHpWurErr5%2B9n&X-Amz-Signature=fdfb0de8595af8a7582120ae994b196a5ef6af8ce17bd50fd1b6879d079a929f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

