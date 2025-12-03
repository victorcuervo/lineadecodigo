---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TM4GX2F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCICCPPq4A%2Fms2LPF5ixfOHQXC3kDToPubMEB5rZDtchx6AiEA0KJIyCWRc2IIeAsfRqa8BREHlKYwWO8H4s471yzh7UIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIyBaSjgeLG5r16QeCrcAwV3Vzx0m3ZWNJR%2BI1xUSGr7kfsFQNKcOGrXe11Imz6NlpNKXrepeoEEmZyG0%2BFwYerw94X2RaDNMSfcFYTIUhhXtT2wpqvFk4y7ezrzkMcMYwiL%2FehsVJbAdcZhbsuycSH66rA97dV7GbFmaAx34BZlf%2BtuEb%2FPT1mITb0r%2BODvvhpTH68p1aDc0uWDy8yxbiIz0W2jxn%2F6yqQIQElOy7O5A7SWDr3DYdr6L%2BKE6XS93GfrPNu%2BH7dahkkXtmTDCfp60LbWiVWGfLJ4xjDRzEE245CLABOEcalQZdRQ2ycBX1%2FKwaAldv1dfgHKwJG3ZJh%2F3Hn72acswXShnfr2Sff5Lhjtz3QbV0S0kQpyei2iWJeJlfaThrU2CorEs%2BXI6fzk4CWOFfsyS5OZWGf2P2dfKms78lVSzhKAPYmfoNHSj1misRD90le75kN3yfJPbsI%2FDGdk5xcR0kCjw3n2SUfgmArrmu75dA%2BtD7w31Y66pFYqrFeHB5hl1ZXWAyKN5RHoktUNY0vGyVkFfcofDAolFcspcma3uD6pXTQqa7TP8QwXBZtGHlkahhT3zBy%2B2xrLl0C%2FbzKNkEMFnD6lTz%2FIQX%2Fsf77KQhq0HbqVdCC7WqSQXX0r12QNIfdMMI3cwskGOqUBwLg7DKKhBKBCTKiZDbXATxKEYXWyU%2Fuoui4v0TWdcqvPU90cS6XCRSkDPcXLf5pdxxLbyUAKxFmSX4KI0%2FIRMv97S59NVndNAr%2F4K21tMlSQJYrCVDWJAblrC7VZ9N7%2Fj4FsQERBa8vgslbyi2V9X9NeARh91UwgkIeB%2F02ZcXzP2OxNW%2F3Rehf08UAYWjH90LYAstzIoE8jI69Bzw8fmUjcoJYH&X-Amz-Signature=cbb59620a51f15f93dd711a29c368b3df7db7d93fc9c4d90706ef95c3798b322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

