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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466372N4NWM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIDU9AQMV7unWE3Es4ZKfNuo%2B2BSpsexg%2F64cSP7cJrj7AiEAjiX%2B0%2FflXz%2FqbqxjA8wf8ptWa01TtGNrPlWtCosCGfkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMorYEgUR9MCMVdheyrcA%2FrTC8DvzJzXDtKPkZwyEPji7nVPPxNnSzi0iZ2c5wVqkV4F%2F1aOF%2BMbeO6YnLIK5Jpb%2B4RNDgU4TsyGk4wj8SnJ8iLHwrGpTX8%2BTVWhFRt%2B%2FvxuTePM6wgij5pm0X4dn1sLmdfAldqMgMdoJG2XbVrMp74aWbD6dgFgV5AjUaJYSF%2Be0LuhNPGE2Nz5uNaiXRPXHW5ean40tJj7Ez117A%2BzmsQfssgEbPPXMLwKiz3IwhOMfAoyvBUmva8AhIPz2fZKLOQDRYY6BEgI1CTohcl38VEuXP19IlNw33Ebr%2Fm4dUqjaGC04v8nHIuNps0kyL%2FbH4mbCr7R%2BOCE8RhsrwatuOw17BdUI8FgCwToLxwJbJjOrQD6fOKXp%2F4GVDNKD4hx8P91j8sR%2BugPQRegjOP6cWZ6SgcEKwMYpjYuA0iTsTyrrZbEgIIv%2Bpomx%2B9vCr4UAoh1b8eBNpg0zCJHdzW88L27FAJul%2B%2F%2F6lCv%2FJxpV%2BNBMLg6ugGFacwh2up7dGp5XHnaBf77p6ZHEDlY9ZgZ%2FSbhFfu%2Fr1OlnfgvufZrb3IV%2BdG7lLu1tEew7BqekjSgrxjSgAVX%2F5VCE8vn9oH6B26oztvjLZEsfG3lWphRtyef303Vv7B2WfymMK%2B%2BxskGOqUBmhFbmBVLso3bzUY24ofJrH5%2FDiF6RegSDJHto7s0ahuoP9%2BR17jk8L%2FSZ8sSt3gW0VcT2Xz3WQ08CasFDh1EHhALDiVxyz0veDJIZjqGDbAJ7CDP%2FBuDGHR7BcCZDOjb%2Fnvcei6eZBym6daHGUPvwLNHFqZykHliDJekJaUeC2S9fgp9mIG9gyG11%2BElaCBUShlbwEAy5D0ITGlS%2BlCAEPXY%2B331&X-Amz-Signature=cc28ed5585afc994203206de15442109deb3da9437781bafc29f393ba890b9d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

