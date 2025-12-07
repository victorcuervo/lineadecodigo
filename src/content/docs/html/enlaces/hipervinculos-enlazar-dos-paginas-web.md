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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OW7LYIA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlc8ACIbQtFpAOQ02%2FzDfp66lZffgdPSSoqjGHh%2BIazAiEAkcHG12E8gCBuN60K4JZwo%2B746lRVThE0TmlqCpkihFEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlNEqhhL796yJODJircA4zx4qpWID06wee3NlAc3AmlplRgSNWh722DRPE2uCdvV1KCWmYeE7thH%2BW6qfcmCiZRuDvou8jU4TS9HTp8MLSVuRGJyw9lHoKol7itON7k5eJAWTjqwmaaJG5MU94ieBY%2B4ODY%2BamNCiqhG5rp0%2BglA2ghqIlmYQSh0cyfdaeFbY1%2Fladh4i%2FRbITc2THp9zwST6r%2BkWUCPguLS73mWws8lraCNvz0tOBJvrU%2Ff%2FO2PYRxT%2BESSO66p6SnFLh4d9%2Boj5WtHlZT3GhWa5ypK2dwVOOLHHVY0ZRC7eElsXuyu7i5euWckAbjDPPlEptsHR7q4kx9t7JTb%2FKLvrOU7lbVSpkCYNlQXwc3kHKJFj96EHkptSuQv2Ak3JBcyoRGlGcVEPjfGicK9mvowqXZOa7wS0uSGdJI2arI%2FmKVwlzH92echnvXEXxG%2F3goSq9ViZzTVtwohkDGxY8pIwezcGPqR7%2BUm57YOT2UDe9EZ88edAVLqLx1XZAd9QYBN5sji6tth5bfezbBU2YETEDo0e24eKkm3CRSyiKj9igIV59IRMQVpDO6g2%2BGSNq5uojCC3vf60rgrk0RpJEb4GmEbElgFae26%2Bhbjuzj590Smuz2raastNDMHz4b4X8eMPTH18kGOqUBwQ9ALu2UUyVWBo4u3wRzPr%2FnY8pzeMHt33MzcRHYk34lI2zIbovzwWqw3waTjZnWsw7eSKgfSRSyl1dGVufsXEzfHuDSWXMEl5mijIuG%2Bp1QJskhoOAr3FSVUTv7%2FW7O87dOtKv3QXpgls3Ew6cDYxtL8ZsflMQTPDZeIvFPE7JS%2ByP%2B1zZVTRmvYwMgG1mnS7UG9rYV11KKqMnb16EDl%2BMwhonp&X-Amz-Signature=859c1949f4a7e278e5c97a443c1e9334863f07121b3f1ba02aec2771b30145f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

