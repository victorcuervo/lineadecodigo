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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674BBDCAP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCamiAftj0m08DzVWJ36NO%2BHfe7EjmY1ze07siQryW8jAIhAJzexJF%2B7sgzrU9CYC8Revtimqr7uC4TaEouxjJgzoXxKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2SDODXearvPJVuhMq3AOQ7uME4064ZZSOQgexgDuChf4XFvxP7RkRpsFdMJvrvbeNMxZdrkuwdiws7h4Jj8V3%2BI6FZLdymvsI2LGnsSTmy1rVTUqLjuLI4t692%2BS53DdNdYMMsK89NsgAWnglbknDsa7jh1OqEFGW48%2BaYl%2Fe8dB6thMtyFlhmSz6ui823Fs6jKbgbcYh3fIKiatx4yqAIgW08apgPvLaRYCJUj%2FNI8yQ7ye1w1Hk1fxab5DXnuY39YhGBDbbILXTKkaPvykZ%2BrpQwjlOeJpuUl4ZuMjhnXOy2ZrsZzvQe3ZeIECUo1ORGD4JVQo%2Fn1hbVaGObBztx0E7IO5ocZO7kbfn4tmITiGUOy48bIFbJfqx7muZVqaEgCFzQjOz5OGUpRxibrkZqMpGnzuWRWZvWDzvb8Dhwx5iyL1xPMal7YzllFXuE9h4dJ0r1dwDy5ddOOl79IgjioEeHzMT9GXueg26qXqouopMjvi7BiyLg9yUnzDrT4%2Fv6SsCu9o4iD399fum4CNIq4RSWViZnHSXjqgpbdNcO2B29QyLfahbsT7aBks8a2wRwqABgocG3w52wjtie14sEll2Egks85%2BmiuftwVgyZ9SJRtnm4NzDGeo1wo086RUze23ly5s9wXnr%2FTD27tjJBjqkAf2BczWYs6aqag9QlgFfZmZWHiZydITikUwtJkHTpxSBQpNw491xb56sTnTsjtqGPSUsAQDygZd9m8Eu3Kn16vsdukVFxoQlqZ%2BP0wbWlsXMJsQvYoaQdp%2Fmha4yRJ3OiuJNsqcz67hPByn4W4snTG5RzghNWVHTB9ooxsq8ckQ8TXxy8WXU3XQfg6fw499uLEaDtv1k6NOxeG928WVceKZCdpx%2F&X-Amz-Signature=9a8b256cf9b2851b85c9af9ef1fca4bb58a9a7181ab50f1b1bbb1c75485652fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

