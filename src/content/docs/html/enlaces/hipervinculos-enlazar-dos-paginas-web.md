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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3BPMXJH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIEkER6YghZOt8pMTIXaIzZUm2PwaabXDEzjwDFPGf3JPAiBYkC84PoYzCUajUv8YQATxgf6rcrsx%2BsuJIzLBjHhAPyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMpU4eMrMVj%2FvN0G0WKtwDBeLTaD56qy8i5t1mNG8zbCw3Df%2BLvIf0MpQe6YIayHl2Qeb%2FEX%2BvGNCTo%2B4BMKWqa06iqmHevCi4iCTUF3ANymSrae5O7v9M%2FbKQzZ0s9Oljh2z0z6zBIRNIFpG30vSQXcXi38pcXjgPtEsU2LkqF4AThxiIAvoKZeyWzC0PJVKJw%2Fy8KbVREv1P1GG5ye8APNh0n9GRkBRmvoJ7MIcw%2FLN2LguwPg8kkUDBL6Nv59DS93s7PYTp3NUDLE8rt8xGfG3bitgx76IU3kpjbGLZVGx%2FGIBsWnLLXG7LLT0mBLMtLqHRcaOQcyGN1WQCbjG8HxDfTzasoCPcAh2nZ1gxdEh%2FLxTCGUfGsCpwp2OZwfGAfdBOsCA18IeCG3ZFuBtCMi00pdLxkBplF8%2B5UEknFX9HKvP%2FVjdqocWEPzojntY%2F5zHGMHTOtQbmnZFLvkUtGIOa2MQCbEOMIubMuESWjJRVLbAy9iBevKSBGND6brTRUW66Uri52Gnvodg9mtDJ56Os%2BDh5tcNqT%2Bf8ZVUkM8efwJLzc2e8Yiol7xhYOnDYGyXlltMdUkWrAGwv1c1CyLoFBMSVo1S7bK6GrlGA9xx3Ip8rb%2B1TeUr1nOsQAMqTBFxF7%2FEkzbJ3w5AwspXDyQY6pgEY8BVH7%2FK2zqmbHDl%2B5AaLL2wcv9QNbhjF9iBDTqp%2BrIcDsjX0HWAOU1TW%2FEb3CQes8OPFGKhpJo4BZnL%2F%2FK1Q2kvmy1iBDljkftUhenKkn%2BLk%2BhNrtuxpiz5ZXi8CQKVRmZbAhB2BxPKw%2Fv1mSr0jtM0HHpLCLqensWAv3aqyz3TbavYmPYMZFxMYNw5xqTQzxx2hMIX1Fmrr%2Bw1BtbXczwCUhJxa&X-Amz-Signature=5b6fa8eff33a8eb3be319789e69141a5716db3ae9ab3a3080b1e8beac19cec15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

