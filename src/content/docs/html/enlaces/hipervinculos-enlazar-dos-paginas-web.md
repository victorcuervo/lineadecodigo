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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCT7FLU2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJf%2BtGL%2Bg3Vg9GbzxQ32qmuxIR2kDBXWHgFsV5uTFv9gIgYFV%2FQhHNJ3rM26vdROp81I1h3wBIB2uxv8KoduoZKXgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBiC43HUh%2FUE9W6ZEircA4igPzxcVpzTtxGYCfbfgX805UhpmHW2wN9SINDXbNqdcsoYqKkdX4NuhkjduiuGCRcNnVQLWReUafA6ahJIZbZXjkmCrkEyi0RkzVLTIpIu4uvAgIYlDRtLRtpDgFYmgBLHCMa9OulbFLEpKuIl4EfDPnwPQ3T0Ql2OY78dnRvTqQjU5DkC8bbkbtaz%2BKO4j4SfWXCh0F2JL4BAswucL6NGRsf1IocMOCTpwoOo2s9qSfWfdm%2FxoSDkXbr9Al70RlukvzW2jsMLu9482RmNTcrIcv0t4wJ5%2Ffn5TRWkQ1ltfqO1Kd9%2F4rNUKv850Fc0xWBGjEy52emUmOASXeHHfC9nOARo93DkQQABGHi4qBNOdqmc40JuzQFOkP6lhQtlaIAHjfWhAtinlUkBezexvyJZWPlK5q4T3IO2qg0P6S1kABgM%2Bi%2BJYJW1nOroRekxiPrlO7RrTm8MBAKmSCfgzH8iRiMFtQOfKLydzlp7wKIQBNZxp0a%2BiVSjy1HZbGl4coYJQIDP7minExnqpa76LphpXsqPvr%2F5zjOslCXh7q9PYeJLVOLLFe8HeKHmayKi9Jv6bC6x%2FzmZ1bsaRobbvjr2XTkwhlxXR8bC%2BEAQxnL2%2Fue9fw2KgoUuaPYCMLmvyckGOqUBHG7Kuqoi1iUlUDbAmupbYdUG1mIJJeeKypQnSK%2FE0l%2BcTWQdkwCVgyiDrXTUFLsTj4J9JlvmORXQnNdeTmnaS3Dgt%2FIDD5Qu8%2FEu%2BrIhYWxBmNs2y4wr5UhM9ByeHSxmvwbO2idzT3pVS7RxW3Rfokt%2BnmpYPcwvTg7sITIF2TZMJvEWEgjq%2B6lz%2B667W2rTXZULZX%2BkllL9CIWjPObLx3Gx4SbR&X-Amz-Signature=19b452d382129e6ef9c94b31c42f68c9f2f9aaa53708048c1cf06e1aa1646107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

