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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA6GVFES%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T183929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoyMmWqAHtL9EbnyTfThVc2x%2FEmwGO4l2WyjyV3hN5tgIgJEOg9TiCWh1AdhxFGjZXC%2FGhwunY8gg902me1i5CgYEqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7kKzzC8szw664hxyrcA2zFxmc%2Fksyv51f8gv8U8rFGByb3QthoMc%2Bs7hjX06qmMtlecShv30xvAKVBMb%2FpuPa3Moq3lEieID7iz3KLjIk3Gi8mkS1F3GY2Zw4ihmvIZdgxDrYZdMY%2Fin%2Bucsc0%2B1mdq7Aq14DxAHEpQkWrW2crHgRNsF5R%2BuBDK02z6di%2BLr5YUWaumulXm9Xdwj2iZDmdxzL9%2FFKvg2kve0VrbYxK%2FRqZt5KBaT98zvit%2FCW0pCPK8x0j9wRScwn47%2FqrSZ8qpoiZRLu12QSr4Qn62MOciBNwhG09by%2B9DjaaHdoQ4didmPfe8msMOCjRW39nWG%2B6tL6S6ijhLdoxnlU2NPubjdPxXihJlQyXQptmVvFLKk93iUQjWoupcjqrlHHfwPIJTFrlPwRYz4Ihx24OFr5wVsVVVpErU7OMjS%2B6b5ZnoL0w7tg1g9924pbVTy2jHy04B2PFVBEQI5ICxsuX75uYQk5odYuDbe%2BwfcOJzekDbwg8TuK5XEEmpVl4No4EoQCmrai9RedrBWJqIu%2Few20hKMF0v%2Bp6f5%2FQLUl4kYZKqnrNpZga74pnfPPdl1kZqFwUITRcmhBTXskvzgf43SjpL1wdlC5tKUAPDM9x%2FL9htHPS1c1xmHHArSkjMP2z3MkGOqUB3eIdncJt6STyiWU7M31tQGQ9o9o3OqBD1aaSEMr2YvbpolZcHR6lxG4ZXuz8O%2FYuUr3PPRqZHTFc2m9NVCLXyqhdIiCZaw165I0cphBctqJuURLgDBicRY1xT0hzpkGaFP0iQme4GFHauQAK9DJUmWv%2BYzwAGpqpMZ%2Fkc6xYFSEt%2BToO2lU7GaUx8zkx0T9x0cVe3Cop9aedfTcvhZWKa0Za5QzN&X-Amz-Signature=54786b896380b3f62c6c4e173d7b648e088d422545ede23c44e2d26ea8ca384a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

