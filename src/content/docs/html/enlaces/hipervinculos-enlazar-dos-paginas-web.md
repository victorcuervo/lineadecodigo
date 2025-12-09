---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLNLBWWW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T154748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChOqxLmb%2BtfB4KQj%2FiiSjn7dBlcTER07OtJMb9FodkJAIhALtW4%2Fi1mU%2FeWkEhusFvr9v7sC7O4N6co5DIFaRBl2WrKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCSTdznnP%2B3VBXrEsq3ANqxAXoJozUecC2VP6RGRoAQJg%2BRvZvxjGh%2Fn5tDRlodr4Zpj5F3E9ZwhQVU7NuvlBthVl1nrfwMmVm9lfeOUTuh%2BMLIyBLey%2FNGfabLLZ34%2F1XKFQUOgnEKtnSyo6XHTOWGaWX2K2%2BS6zXDpIXgWUeiH0aA3G3AxXoglWPI7MKciQ5EBodw9btyAsiuBxIBBdPdOKlXjJ3%2FSxSR1Zi55mD%2BhdK8p%2B1XZSwqu35TzvKYbTkRvtEPgxgfmDTlgBK9m7WcSdjp%2BOx9fts0TyZbcYSFXOaSpMWUjm9pP7YNnk90oaUDrb6E063THFFl%2BdGPO6aMCr2w8mM1S0NTtDbKWWiZqk0Tc90t2dUgqYVVFND9hI471LDaSTK0BuDok93ro%2FlNZ5K1m%2BFKDfOdKYJkCt4FAPtRJkBlrDGZYEmLcb4%2BnQMFJIh%2FfIQ0QSSsBJlYWZWwj9JDQtXDoEXXoHdAAkjnWnz7pSQKGonvZKO6EE3R1%2F3O2dFC6va3pzfhKABt7MVpPpKof6Gl%2Bc%2FxIFhpF2uWdwqbwtRX3J7gafGCyNMR46PF%2BhiwL9Kjfx9bEHfsKN2vlv30dG2tVepPYNsC3Lbdm1N0x1EoVbEjYwO1THSakAFJzNMPZ5c2mFcLjDe3eDJBjqkAdiFwI7ILZRgZSVxVNvPaTWU6v9fqwP7oBh7I2GXXgjtrQY9wr2LSwA5Nfew6D%2Bvk%2FhF9tsc47jRFZ2Q5KTn1JYr8e4Sb33UUPELfP4v0DwrYBf8mPgLRXkNr%2FBjqsU%2FseG7%2BzsGF7TYsdiU%2FKYaIy2XMNfwl7JRFJEO370PaF1KXyG0k23MUtB3HV6SfhnZq14Iab%2B1EiXR6d%2Fziq9Gwp8mYrpl&X-Amz-Signature=653e8feac040dfa88d5c23007606406530bf987e2ca88cec3780728a6bf19d63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

