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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN2LGOOY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBkauHn%2FHJxxjYYQ1ZpcV%2BkHiQESMCeyVjHJP82fBseDAiEA11K1hWGuOhkpZ6zfWl0woKxhKg0AdTOCHr8L%2BwP97Igq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDI3tSMFaRtfn7S78pCrcAyBX6ry4fwaAZ8N0LMsVTKJuxFQFW%2F2e1UvGLARuihJ7ZE%2FGRtqLxecZIJfPh5bTtWBU1LgzFwsyWTXJU3gIJAPgvGmhPTdde%2FUQFioKwO3vB9eUNusFKdUWSts%2Fd5I92NGhogRQCZlSabNDT2LiIbp4K9lC%2FiJjMGIQqygof3GcIvuJYKuMuZ0908KjN6RsnP9l9FqQAHUyNflZyafJbNqHJh904SAVZ9wOrtfPu7NAj2DEoQZy8mXc4iX%2B3fTdg5Vz0wDH%2Bva8yUhcVHnlPjROWDPOntRCrrlsk3NJhrvcg3s3K5aCnkqRUZmo0R%2BCKhxzkBuWFEdVIC1fSRPN2w62YpUhWSiri2fcaflW%2BKtiL2Ov94j3x%2FCD04scnBmf%2Be9lDTKL8gzbFwNkyVUhviKqIxNSI1%2Ft5v5QcjMqjQuACKYeb8dcYvTcCFaflptUyxmwrG%2BkRZP%2BKGRrKvrySdVLJtS3XGNB74JXbc%2BzOEKMYewvA5ZE4hw0cweyjI%2F1gXUEyhbNqLeTlgyBWdcFL6YqVcNPu6XdWrA4YpWsg3A6Cn%2BoPXK1gEQ4J71bjragFWFv4VGK1jl9u7OFvDK9E2c%2FkCTM1yzOOckvkFAe3jSTgsi7zz4seWUNztUfMOfJxckGOqUB5ooehjlMkYrL4yFffDvz%2BZAMtdYBJAywf8HAEWv5RBEN9RoPG%2FQg4uWzWpSEVrCOrDdmGLnq1bbD3fhUF2PLcqI3nfbqTvCACLwZOeVjAbTLP1jUNUAcVshhBHHq6rwb%2BQFfd5qIN%2Fcpa4gEXIs3uUfNH%2BjHW7V6%2BOvyqgTklT3iD3Ej72nzq8XvQ4AjMxVSMviG2Phu7jyrxxBPW9icjUyJVmSL&X-Amz-Signature=fee511b64f9c3ccd934bbc820718350cb186404a813cbc24b1b28aa8401174a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

