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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NGBOEYD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLNvv7JiWw2v3mIf2eabAK6r7jBsm92YOODg9ZjsxyHwIgGyliYA8wig2%2BqQSyfIf%2FZst8rZBoNmcFn7ZVcG6O4bAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWyKpiuUMmqnDYmjyrcAwMBnJg0WZSY41ngOH1uUjTU07A%2FLykcfCuNfa%2BQMx8oqwt5Kzx%2FRYzh3tEBOsHrIbCBvAvHoktj%2BnA2yxKsOmmK2lkabWiLMW2IiRBiqfRbNGf%2F60otzAJy5UqzKt7CTYkVJ60y1Vy3oTPkglBD5YgWN3zReHMcJuKt5WeGfOeyui6Bsqbx6I8ilTpr6kV5tkksJu%2Bs6hrZIODSuByuu%2F6xTycSXnW81uqFLF9PzVa0c6MqCmjyWJ%2BBxHsSSn5UgeeYHNAPldrindL81CWgpb4nbsUaMD%2FSKo24C1P%2F8Fns0DQrQ21YN5UZL5x77VeBit9Lmx%2BvJv%2FHjKJv%2FU2pA0rDV39PqhhYtC%2FJk7g3w809TqctaVyJgUGWrqQUV5cJAfnCAjiJwAxowcqItipwkSP%2BAbHMj%2B1%2FFV5X7nys%2BVInCTJxZ4riFRjgTXzhXDaWTGbSw9LkArVxMYSDdvzy8s9VZ0gjTIsE9APMCPTVlCYSqc0034FBx%2FR4HfCOTppuHdxAViQmHyWCJ%2FnEg8%2FJGyKIXj9x0PF553Alc8ys2o%2BVjaxYQ2W99gOSyutCzLpkbh9LDLcQrAWWjsWM3Toc486ZiL4v94lRfQDTtfrugTTVaDUd6wVtrLzhBlxCMLma1ckGOqUBPvh6j%2B1%2BR4wCBUeSEXYUrMOsXSG3VB5vq53tmwUHcK5CG%2FO%2FOIRbwzw3eDDCJfmTVZFFfNpP9ZcB9%2B3GqWaHi%2BKwUiUYg6HeOGI8dx7q6l0vU7d%2FGrUAIgsg2nQevsKKSY0LcbtXFo9g5JnMQ%2FdA4THuIF4WnKe%2B%2B%2BJeop62qFI77iWQn7vNxv5CChFVyLEBRe%2BATPMevWFe61bzoKh337e5QJ%2Fm&X-Amz-Signature=26eed0e07b4a0e8ec82b39f35152d66b3e3980d8b4cce8c81832d80374b90cd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

