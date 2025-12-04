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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3H6IVBK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCimSWE28GBR%2Bjw%2By0hXKrwEuNtyDSfthwMRJQNoLXEJgIgAlhRBA8E4Tu207vb%2BoSOzi1L1%2B9oMI2j3aFdDWEBpKEq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDK%2BHeIVa01f5%2BImKfircA72CtyggvVKXyv6BcvaxZJB8qnhqckrCpVTqhDU9LsGo2wRMLkwaHAd43CCov4pSidqSAnTf10JbKj1HFWAxyNSrcDsV3%2F8ug8NmXwxeAmlr%2Fs8AomC9mkbBsN%2BLdpzIO71s3QhIn8VaJcRrMt6a4cBVkkhTS95Vse1Rw6V3iH1ptI7AeSC6gzS8xhBZWJHb5aOpB6DJgDtJh97ZE7m4%2FxdqFgKA5Sbe%2BG218NVVATImTKCyO6oZzWNQRb0xmvscwl9yFGLU%2FCVjOe4ujgOw578WD8CaCqFRpbp%2F2x87gBWdPBCly30ScAwU5qPJXaeEGj0RYFsT5gX2Qwk4md1W1o7Jxsmh7aMY%2F4oknCL6yZqUeFndJr2hk%2FDA7%2FFO%2BW1pWsWHFdMpKm8xAiythY7BOs%2FsTjY%2FryURemWZUHNmYQenNkOXF5nNQB1TLC8ZwGKKMGc2GCab4G%2BfRj8tAaKDBjbC8Um9IFhId0%2BaN2K1LKm7dk8zE%2F8Gna2GJ0CvUWhap8VvghR8hAcgRpNbYgE%2FBW9ksgmoV2Ej87IoVgbqfw8jSonoPq2VSOTinw7%2B9iyZzJ%2FUg6%2BH4WlQ9pq73HOg6PDA3wMYY2pOPFx1v5wR11ad1Xz47052znRWegYrMOHyw8kGOqUBTvepQE4cYyakMiTIosfv36Ky8ZAsRiYig3ilAlS%2FmnlDf2r6B4tlP86f%2BxmMa%2Ftcn6QoX417q%2FjOIvkxjv%2FpR3DLrgLCmF5C8n1yBQn9U3w6aGsbL2yengkS2XdK4AvkOHtO7MQatd24L2FaQDOiSUrkAlHqiSaAK7y4vFSRaXHWScVEtVeQdEjgifSV6JFlSPcoOWGgVoFNC59SxSgxPCA3IiaS&X-Amz-Signature=a05e9d214806c59b4b2e45190a160b4596d7ff0a23dbd647d65adc479d57c031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

