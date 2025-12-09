---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOAY5FUX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T184648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnBC5uZKIdrGh7AVqajfCzqDw2ClvBcGNCK2IZEocHfAiEA3sI2yiwuwRn64IZCk5n%2BQ%2FA9hsInBNVCY4RZ%2BEMO5oUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFVHziPZjSjrafkxyrcA5lKvyenY9RxKbr7F0kX2kSHygnGKo42Z5TyNjHv5p4BBPSp6em%2BZFIRIZlMplQNDX54ogRr4qW%2FDQRaU8%2FrQdyiogRLHFFoudiJUbdXy1NmrW%2F8BgA5KLuR6ceS5FNPJXvjkYcahWuplVaBVrIqGngZwdcX7JpU6CWm%2BVY0954afMi8ITXLtCmL8dgr9GHdSm77ysTpX0etShDI%2F8Vc7TeOFC2iQOhpmfiXDK9Uh%2BNqwPV4cu6Q77Nsin78NC9npsZgA2kPld5bxmU9RgA%2B7TreQcj3z5ATFbnsQa6eguU10lo8ouQsVh7HvzHih3QM7fEvJSckD7MK33N048j1U3VmB4YOVrvDh5myDe%2Fhyc89Cf0soy1xPxTagn5e5yDX00FV%2Bjbv%2FP4%2BBrMjVDfbwi8ftUNWfCM4Q9Gagghhn4hA9Wk%2FMI1mwPGADP6QxXuqLtEfPjcRpk8L6UIAf3EFGpuM0ozsMLx7PErDM99w17sB4HjwjRwUgjLXw9FhGMRwJu95yEvV3GfsFHWLHG7MBfbKVqLwHGMCjoc3%2BzFTt%2BQGvjfSftT5SPgU0rtW7p0QIkK%2F04DjMLdFlLMPHPFgpoU8JHyDSDaLr20bQ7VXJcwoy8BXr8jnLaRJu6pFMOe84ckGOqUByze5GFvIkjt8BTVhfDwdaPH%2FWTGKzG%2BoxBNUW%2F0D1Jdr21j3Pchnd5D5S7qpSfP07N1mYhtR6Mw1DPVknQb6ZT2IgiTxkZLPYZgwViJpko4evK2w%2F%2BZIth8EsppniJBewikNpxQdwgxXdpGmMRePPUicjg%2FHC8LGEUzZ5BRMt89x4knR9coEeM%2FVr3gVpgNTcR2AJvGUzq1rIdWUXV1nf%2F%2FA6FD9&X-Amz-Signature=e8335113a0b601514f78cd07e937ef2ed0435e1a509d23157b69fc46e6c6aba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

