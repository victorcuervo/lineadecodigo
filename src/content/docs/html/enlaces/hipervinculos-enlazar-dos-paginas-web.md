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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4HK62SH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBecZanjv75Oa%2BDKV59hLVKOX6r1izOU%2FoOvzweYy3WJAiEA7LGoGuPF%2FeVG5ZWaN5HhutSM3Ch%2BBus5GFyj%2BnJc4ccqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnl0%2BaLVOOLjN2oMyrcA08wymOdbeqiWMKAEisr6KWb9U50nBmdyd%2ByfMyVNXKnau7BVZb32Tje8bpXqos3duJFh93bJKk%2F430d4uuGXX0ge4hWPGFa2HkitdtZKgPtRDtmUmY8bEka59lp3ZjufWzLIaneM0iNT%2Bih4KVpr2mdrsfPDo4OW5zfFBTaOljp70sH7bIJd79FECy83BbzBn%2Bp8VU5pxEEYNKopOUtmFrPnyz3ycCDrATUGqlvmSvmTiKZ6%2FGwGiWrQkciLZARUmpsDWm5fx%2FbuzaQ4K7yhhzMGeEaPhlA5fQ4b5QpgcRxALe%2BKR1NxLonGfyeBZZsEWBvN4Q7AL3ILmudFPusNJSeH223k3NyAHF6C3S2e9JNl3S%2BJrR5vnuAPMaC%2FApydmQxKdueEE3qvRCAwSjcV0SS68tbV7Dq%2FpegzAKDdwHEhQbEKPryOiMMC3w0VJugfIAoqIM3iuhnMCAaViQA9c04Tp0%2B8F3sI5LCvhAqeRxfrMOmGQup9o6Ag9AIH2cV9QOoOlSgBBcoIAWqQamwDP5TgAH%2BL5vGWX0zpozzpOKtWpJZUgeOPDpSKTKq57S8zSzuKJzR%2BIE4aCNzRmyELJG%2FP8zlcEQLxBtgUfixpW1uSExQ02aQP64mw9VjMPfz2skGOqUBC3oBEjcYxPafce28Q99eLck4JBfJuU4SKqD5GCoThr4pg7%2FSCnggPyKMkcj62GOicODnaOxhY8nkZadlxFLIE6AkleN7wGUpYv8La1oKrh0vl9ojS2Lc5eEpagHuEcPq37QRA1y6GlRTqdksUHC2Tc%2BxflS9bMrFCi9k9bgzo9gZAZbJwpxrftWQuFeuZPX5wiIRh6eh70r9OhburnSxrVVNGCej&X-Amz-Signature=a57ab57df77e0c1458f8da2da1f0cb767195915550dc017ff9352329f492ea81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

