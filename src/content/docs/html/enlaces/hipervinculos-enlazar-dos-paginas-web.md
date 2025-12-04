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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMWPIH5M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCikksKsOxC4TDKMnr5l6oGvpMTfVKdXXcav%2FHzN7XqQQIgM5pCm3ONV6nyI8JTAqPdhkRcP%2FhbIRwhObRMYlr3PZgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDJFM1muLIO7MCdPauyrcAxvLUa4XbXmzM1b3nufUwIAQh1JbJ1FnhpEd1s7jzxoVi1SN7we%2FixU7dNBxT6hYQyT2MlyOA2GtZu%2F2Q3BNkaBiLzDvnRXK7N5Ycz73HTuWtenIRYQ5HK425qDXjf3tIA066wQNTjw05wTNb49nR820I0F77%2F97Q30PFa50tgIwhNE9b2R2TppzLbGbVnCxvulqUVMwQ%2BpnRtfi6bv6JbXhBX7YSODtHxSYGGsaTiCgcPpyob3XSNeTXjQnL%2BY5yop37nm0yp7jEIMmVYc6vggkAEQ5Tw8cofm6ilpdYwT%2FkOFzrTG3IBbmpIo5i602Giy4Rjmh0N53TvN5gVoxyTnoYuh%2F0aiDNTDTQwun7MNNzkDAt7dQOKLj%2FgizOw4S4ttqJ%2B5UnecHV49j7w%2BgUL%2BtNfx7ruWrWk%2FidF5LkEB52tsLbGTiHEjNrrtJrBbHlNTQxbX1F9GgncA4UFRY%2BuTUrqWpxoxlUbO3q1pokHTYuILmGmwU%2BDqnQFT5cnOTf%2F5hiftPs0CMTZNevqHsXk0a6aiTRCWIruLDxQoW79o%2F8z2Gfw4xw8L%2F4uvqQACCElJ7b0BZ6aqpC2lgxPHu6LMejLkUE%2B5PnzleEkt3TTohABZOD9WhjIPL43SHMKmQxMkGOqUBvVJvH1ZfkwI5C1YSnj74rOEYTmAL6y5Jx52B67%2B9auGbP0jpQ54fcOGLBdZksd2F3ro8cINvjyfvxI6nXKtyFxypSTXOzpHvdSW8YgK9hZhCyOa878BFh5rPl9iTS92dkHykj0KGQhbGwsytl70GpEMWhk97NyakTRri5AZ2xfU3j%2B9CoQXcbTmH03i6qEE1mrkgsnK7zZ%2BsVa%2BMFtm2rQ7cIH0i&X-Amz-Signature=e3ead82850eb630ee97554d4070e29debbdc0078aa5f5c13dc7d3413902381db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

