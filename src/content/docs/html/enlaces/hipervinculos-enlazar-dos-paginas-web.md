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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAOMIB23%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCerjXL9Y0oAI8L8%2FbKXs2oQy66ISnUPt7CZHJVUOnDAwIgLHd7N2n0%2B5IKBfr%2B16jIIZ9yW2csdNzDQx4Z5udAJGkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGKwqWhMehtz%2Fxt5aSrcA1kMPBCzdNbhU74dheT7xNC2iFygVpTAiscrdmEQ6xevG1xL6r%2FVWToQY5dngi7Sl5DlN%2B7my2I7eJFTS%2Fuz04boJ3DjUaJSg%2F2BpAjjliNqiCMR234NIqJ%2BpwOK3DOMtjBO%2BW3tiVCfXmy%2FToTH4ZfA2DEWZFbkf69M0YFA4AX%2FYiEz3lHjCWi%2BZUCwExLewiE1%2FoDDZSmU0Wz5bgtRg6rmdK34AVI0TlQRhfeABumOJFmXFWITjyVQg6e7F3RuPWpGCoDziHFQilvCPWKYN2g%2Bi4bLz%2FQjU4hv39O6vdMwCjnu%2BxttybdNeMtrcgmWUDyfipWeb9ONhBApQJlBpvKHdfZH294d%2BSTzdNoFWTu7U3pQsiHh%2FOsWXalwOynOOySdDqpFapT2MLRcNuLY18ZP%2FHm8WyI2h4%2FwoYR%2Bwm5a2VDZQU1glOH4u8HnUDSWx5uWDtBROrQrE88A1%2BBneW%2FxJfRiGFI8ZjQPOhOTfZc3AE%2BwI6tRJGrci93%2FrPoBwZAkcLO2%2BjB8pjnL%2BWEHzOtvIoAcYB4GUKsB15%2BJJDks36%2BaU3d4H2bxKK3ZRS2o%2BYsnP94uK6x6YQSf%2Bi2uFXMJDcaSKNG2Ll%2Ft58bbJypgGMGWzO3kpwbPam7DMKKGxckGOqUBljBNHC0hmZEvEnzXUD0%2F1bxJz4glkjvFrOrNHhC6mDOXgzU2X4FvegBwcHUAL0E2ZPGiJOx4B%2FYW%2Fzik5OD5tDfGOI%2FmdEsX3VwV6%2FGMYudp5yBzcxBfpecfbDmujIg8OnTXOie5kYCU7%2BM7X7rSr%2BuhZerHIh%2BDokiJUakUQRrzVI5omBqePCeQDRWtcn%2FLVbmobrq6uCWF4AMyKJf174U4n7Og&X-Amz-Signature=5229283e56b626493fb723b57f11011fd1c3e4c6b1a8f942971428fb731b4749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

