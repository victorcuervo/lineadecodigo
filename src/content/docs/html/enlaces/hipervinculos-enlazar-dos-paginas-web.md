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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASLBZXP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPmvhV7FPz2%2BV4%2BFRJeuOhzthIqpK%2Fkc4ptaovGhv1SAiA4639VTIroyee6tIbY8LuzYzhHIlYsOD9kguRhsQQbdyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3FJp6so6KqphPiXdKtwD%2BXHAY4E8%2FyhQj%2FuGbdklAtmz6E4Y46ygMl17CjhlAoqT1V3y7PhmJNWcDxXKkfigyR3JYUAahKnbuAqIAiRGLHk%2FRV8V1h6wkYUWDR2KuY8PIYruYb0R8HatLPoc1VfgOY2%2BgTKD4rI5i4yfW3jyY1sB7t1CMFSEod9LWoYaa2hjmxsIa0T943DpIKkrDyZprMOTZ30%2BqVSJYUw%2FGVMRKhcaezH%2BNdLkPNFMV5WQWyELWcjZ7H%2BZzp38V6nHaT7FJANNL%2BjnquhCSk2ZDQV1C%2BK6Z9rqfe8mnnR5lcG8uXTEeQaKc7qFJEvymTpYR155S05ylm0QfqI40niNuj%2FHqA6fDVjEVyqNwXfSGGso%2BZHCsKlSPgeE7i8g2FSn9DBwbKCz1ly0qeIF%2BFD4ulkNpY2D0gvod6LdyrvsRAtPGgGq5qOjW7LExkJgiyKRmdod8snw1nwMKB2jz6btvhUyvCso4BsZH0Dv435oIGPsTdEsKP0auSo22ne%2Bv33Q9ktyAc54mKSV72xB9s0xvfgS9JX3Er4WmhY1shIfQ%2F6pLS3m7kMVs9u7tluZC8FBK%2B%2F3C3lEPyuPdYGts%2BnVof6Q2p4mOnYwieCRgn3qB4Zrkq6%2FgVPsmBDirjJAL%2Fgw5KLUyQY6pgElLCQ1%2BTuTnGUIvhW%2Fig8o4RhnidLCNC9W8Hu%2BtojjZFn3HH27HH3Kcvb8aAA4XjBOUgFAM8ul%2FVjof27jvBPy0dNav9cW%2FpDnp%2BQoYJcCQbUN3sQNXRSWDlwenFoh5kKEAPA81T632HDmaIMHXt7rxytjoif4TdzTfvrhCZQXngqNDMJFP2RbFXG6F2npUg%2BWIIfTIAf44DepQEl%2FEWohRSRt7oeL&X-Amz-Signature=aa790b5cc55faa82446218a91df81c92643b3d229faf062c4572ad796b8faea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

