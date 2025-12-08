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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ7R6FHI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPQDgxbWw2WsXzWBvPYuLOF5mSg5CLxw%2FXc%2BeCKPIDSwIgA%2FNvxzBKhPepP8fGz0yco4wPIdROinbTNiGv7DKiQ3IqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSBSNjWLQuLT5EZHyrcA9omoaujauUQPwI%2B0PO4Xv83u8%2FEhhXp05jOs0GZ7E4Cx2wzTlTG6jXPPKR3riPqNFyLhcDu9waCa%2Fwp2%2B0r10FMWF%2ByHSjDhXToXFrO1VOZIKef5ftB0u7cpvePXabEYfFxKOIzYguNpWixqfPYndwaNrqkkKVTaWNQPTVrszIRW0goFqZJbkqHpCqBIk5tbKBBmZivFJnt41c5LqgChkhQFZr9w3p4WI5RJeBCcmv126es53PBPJYFQCZgeWQquOQD4Fz9CY4RdO%2FOl4p6Eis4UWzV2veYaCzz7MlrbinIy0Z6UQjwfS5ija5nuWbqr2VenA1OZkBz2LvtWc9GyXiexW%2F6gm%2FtKvaBrVSwTs6yaCa6IVnrwENghCOP5Txl0%2FFdYTRw1HFL9YFbScy3EhggQjO%2BrNjlsn%2F3HHm0tkPpT4A2gcEb4ED0%2F30qKe2oPp7w2IDgPewfMKfHfZrMax%2FOmS3M1zcuPvRSD9pvUxVIUV4ez7D%2FK0EVPIEZUl2Q39ECNahcf%2BQ%2F6BJWw9ArfJYs3pVLnGr3IwPjsdK22QFyPceZqobhLppIARTuoPx6Fogq7JAumSYb7zzNvBVKe7AnmILDNXawjn2t1Mfajgbc4W%2FP8eeMTZKxG12JMKjc3MkGOqUB2cgZ30vGvPAYuNfons47ieueFp3FYdEVGYlhk5eeAPFAvYldI4iGY%2BB50IgYcmT%2FeLTGs2qQ7DzlQJUL4yi7Ovsct6d5Eo5uIxIxXABMQu8kKvKwsHp2XenVGYed0EK2ac7J3fKBbucEQT1eAkrFy4qb6jczE4eYDSoSeRNBQ4iOWOY4%2Fz9x3qEcxN%2F8Xz7KErIGhd0GgfmuTLaUs0jsa3W4QJKR&X-Amz-Signature=c56aa01e2d48e3b66f12bc29982f09134df0aafcc425add8070cce92dbf83f28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

