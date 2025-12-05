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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF6A2XI4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLiiAcCLvUOp7XRubeBv16jozYywnKy8H20d07H2fMPAIhANnff6oZOCNQjlwMQSB%2B%2Be2dDbYpYbO8fwb7X9MzpziYKv8DCE8QABoMNjM3NDIzMTgzODA1IgwCc%2F6MVtGLDZ%2Fxlpgq3AO6NtL%2B9GTmFeXUBh5or%2FRq2hnIj9RPucqaJTpbugu74InOQOcTBcVMotf%2B85VMWqiL6gTBO6bPpBgfv5OyqON7gWCxDAHzpGNBGTsmfaYJNNaj2HiwW1jEwGdMIB3he9vyApYGXUXV%2Bsez%2BfVFsSt%2BZa%2B2chFp9hnyq4ejfphel%2F4Wn5%2FM3aC1AVT8%2FHaHnSzgUEfGN6VWIRsuD7wOcUVFiZeGhgv9GswFqXcmo%2BwFnPhSZo8KfzyrANAo4vmX2rzbJPo%2BwtBmIqrWHycdKeXF%2FzjjDvsR7dCztN9HgMQa%2FH6Bph9bNsPvgO3h5GWhSsPzsYpN58woN20oD6dhsG3r8qgi373oLnW0WEb7HQH3OrLM30N2gPulEvmN6Cjqr7rvmb1ZgCLAKzo03oEEo6%2FNg%2B9sWYvST9zE9jgU10imtVqVKnfKIxJ4jO5J%2FxoXs4w9wd2rsmQyi%2Fx5bgkjioWPvqQnGzM9GJZQsRp2nO758NlazKEWRRVrtPuxVsaBhO6zaPLsgPCgscocPbCMw%2F4TF%2FoBscZw8h8%2Fy0WAeY5bcCOd0tiBmf597Lcz8LPqICIh0V1%2BakwaQDVHhdMn0ifmc0p7xJz%2BgGmulxzmLF2jwXF7UUmfrDpJytkDKDCKjMjJBjqkAQZn1JsUMP8lIqZE1Rss3SR6q4z%2B6EVxiK3zyLyQyfRCmI6oikNllvuZMQ05ICmNlRS1EIF%2FmPYT34m16k%2Ft5hMktR5kz5CvcOwq8%2FwKYHTnra1fnstkEn5eTORk8GlMDB7GyDGR3hmQMfBXL2ZzdpdhWQDRNuXtA4jcsT8LK%2B9aUnNaGBJYdRSPhm9rcktP2ttQ%2F5BpZnb8JWO4XaVQ7WEKRDSm&X-Amz-Signature=a89a1946058377176a453b919a46e846cc70c6ee9db53019a5f1faab57fdf8b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

