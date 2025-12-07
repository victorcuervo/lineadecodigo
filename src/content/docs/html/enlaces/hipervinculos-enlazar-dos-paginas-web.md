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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5REQ4MG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T025857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMoVlsMzRD6eZn%2B0HNi%2FCxpgDbIVpt2Xib4p0obQHjqAIhAO4qZA8qeaSlFGOK9AFa8gJ1GyMWPZn6HdPjqR%2Brkjw6KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL21RZ1wyZppNFSicq3AP9M64KI6f05enabIHGz9U%2FlUp79%2BbTl7jLng9SgNOC3PiN%2BOerGUWOmofLxsChubEDf4BoZ96j0RBXWIg57i7Cpy6tkNVgDUBCMUnkqHxJ7aUPsEKvs7LOs6c5X46%2F8pVaxnzmL3k%2Fx%2FXjuaRzT2lDoC1CHw%2FhnB5FK%2FbaaEYvSijIPbVethG0s3gzM2P98b3jO8T2LhJ%2BiNPuo7en81EwhEGf7MFa%2FoALDsyT0Y4dnfrS8le8YNudBNWEs%2FsmGtsd7PqKC64T5sto7IxA%2FciVNGwTx0%2BUilz2jY1sZwu03CQ3HTK9y4hN9JzGaJzrP1BlbbYCaofQKJdT3%2BHklXMKLTfOkuadZQTJMVb7DFeYS06lxEfy5qkXWUxsCDk51AvTl16OneqEMp1XgXXdeDUGNHubvv2Q5YaCsNiqqyj5DzeUEdrTjVPSsLVCwkD7C78I0nUHl9d0eF3oUV%2FpfVs%2Bz%2FjHMFE1nNfscm7aJXI1%2BUo4kgc%2F4Qn5f8yG6X%2F%2BMfk7rmMrm3mGNubXi29CI7cIK8AuHMXaIcH6MGPsHFSnPE4E5ggibhpWoAjEQ1VN3EeO%2B6x7xSzh7kqpKYu%2FPJmSsa%2FJgStiqanwH5x1HdJcIBTOQztQtgw9PF8P%2FjCF%2FdLJBjqkAfUvg1sASuOvmJgmeoJaAxlZ761xR%2FyR%2BQ0dlclNovLHJY9AR8PXv04Hzv%2FakyLf26PzBwiVT%2BGijtyeYP71k0ZusJ%2BM7kZTgePHMRFWkitNzaDYuBDjZQD5Fhhqr5EFgQxXNGMX9xVb0Pltbye7Ej3GFEAprtA%2FQ2QMf714kSK2jse2tlzneJxe1Pjw1eYz6i4ojU4PtXHyZM4E79tNQ3uW4uUd&X-Amz-Signature=b572e61b9921be197e4be154ead5f58f058894091fb7e067d1113aa2b1608df5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

