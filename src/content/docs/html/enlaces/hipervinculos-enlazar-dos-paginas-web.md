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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHZMNWO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3O3FcYisvpHvbiHy%2F4eGxVbMOtx8Ns6Uudtz1%2B%2BPu7wIgal2ux1XmKiQU%2FWTm8HyYRUpJU8mTDpenCUuqd2bfSu8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAq9igVgEywIKGQG7SrcA1q31X49s0cI2it%2BY%2Fpi%2BDmk33MORZo1Ievl0DJrtwtd2KUmFNjWsJ64GqTKwDtZaXlUIdt7CmxH%2BuRz6yXUIO%2FEPqejRcrGU2TBSCekKU9U%2FqH9Ef8iF%2Bi9EFI5td17bwwr0Kw3n5AJY3EAS8zO%2F0AfrdfEuDbjyt26il%2Bqe8MaKVBfeYky%2Ffvw17bFpiZcpHH%2FhQthAunFyXCJbkutCMPcQsFFB1gJxEPLa07ZlL96fA%2FgbSuliJIuIRih%2F6nDo4vDfd1LJ044e1ekw2XVO9veaaOoaVPmm9OTGcsO7JpsVRycIZ0%2BQhIEM%2FbV6BbPHLw%2BpX45mDIJJ%2B1%2FlfgzC5k42ZU5pFTdciF%2FXu8fH1EKtrVS2edqUAC1grErFPx2F60J9il9XHn9gVZ%2B99zA93blYLyLppls9jx8feew9KSmOqpeohH9JdoRUL0yVxeOv36Z8AVeU5YKPYdig5ZJyht9RDqwMfcZJ%2BcCtjkopTMHvL8vbPeSMYwL8GyLeubU7T10Sdfkv%2BGSkwko2oPzJzO3k%2BXfe8VqEPPyxDutxN6ocl73K3JAN3D%2F2pePqEYsnc3aEEUutwz7AO63t0ltnAFV1oW2ZCmlz3bRN8q7uALN8hhev099yebYOSjSMNG81skGOqUBpsG9vcBR5kqw7HqHVzJo8QcKbieQ5WFjNqpK12JROoLDPREY4SpkywATZG11sbNC%2FCD8JpKXjPXRsm50%2BJeq9t%2FSF%2FTcDuxtB6dBuXcilHpkI%2FFD4QgwZns4SyDkal6Zn3RvT0CFw28YVtPcxIszqDGawduGHsWdNG3yMYxhp5s5U%2FQECbPXHoapOJIj5h4JEIJw9wvW1JbapHYGGFvBO4J2pxQo&X-Amz-Signature=1fdfd85e9011f5aab677b5713a120e50988edbb51c3b8f43a273d2d21bcbdaf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

