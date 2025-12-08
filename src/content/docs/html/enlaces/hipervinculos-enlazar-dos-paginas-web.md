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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGQYSTU6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqetiq9XG87pjTHLzqbqDEstzvfoicjSP%2BxfPC4wVWHAIgbdIEju4Az3D%2Fxj%2B6QvlsV434Auoz440PvLmgRNGKhioqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRwNe5IVTukv1npPyrcA8AIQrBor857pAxOYMh6YJEi2W9h3iDNzxweYOqOgfWWXt8NQObeAqDdPWhYFM%2BX48h5weFHY%2B0yzthlyRHr415HP1hA%2FM8fwYxPkMu5kaBWkHmV7o8m86fZXOi92F%2B5%2FRxPcrsh5Ggc5rnxw0Uidr66zZ9FB9OYsRCXnwZiFynyij6QHfTWKZudkO4nfOFuUldAnU%2BWIruuCCUamzMBoFtfHoCncX63dp0MnUwNVNVz9s0ImaDSyIcsPqXe3dm3RtSamblLzTy9u05nZIVFMNxjrMkEjmBkFKuBMEg7L650hknnFlqLrV81b0NNxNR1ZU%2FIgCxNADXtNfE2oNfeBoyAcTTGpqR9HpeqFP85G8UIjVuO3yW%2FJTnigUhGG7enYl%2FCVCTBERIfrzjslv%2BHmXR4qGUUkVN2hUjlPunINPxNHDr8N37Nn%2BA5JlqOqq4DyZdEmBiAE6mINumeKhPE6P3APVwzASUbQMkY52hHjUV37i3mT5r3p0J%2FN%2BzLVPEma%2FvOZg0%2Fi6WkR56z0%2B1OAfToz3b9dkLICZzVfwUfLhMIByK2bY4tj4f3xzvC8KCDXDG0kk1T0GOi%2BKOWvAwI8mBs3PZCioVGJXTJGNyzUuIUTNQCcGQNJTllYeMhMLDu2ckGOqUBc4698%2Bzo%2BTSBQusW1olJglwbm6x2PD6iwvZZuVvhTplb4ogaDEQbuelUEe0DS4d7aBXFLg%2BjSy3Ky%2BJqdkBF5bumQbfqPstEyVwjOTqHsWKxlbvFKDRBPdVOfEAZbpfU16EPqINDZsz%2Ba4CuaeR1eHhiwzuQdtDy2bqaKKfVlkQM1DYzzJFA%2B2ahyAJE5RQZFbcCO3ozwOQqsfRzjJi5wlHpArjk&X-Amz-Signature=91f53ef2f1ab45ebce4b9365b5c69102d512ff5d86429e4fa1646ef2040f333c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

