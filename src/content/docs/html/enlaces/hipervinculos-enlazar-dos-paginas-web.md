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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJY6NJXK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq2XDETpyyu4aBbDsdB%2BkohPc9XFYckASFm0vxqlq%2FqwIhAP%2BylwleskZ1mLNQiS7e1f34uncV2HQ%2FzI9Ql9RTE1uiKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BxJ7Ti4oTTnbJLOQq3AO028GwVib0XVOoYdhg0VuYEOSl%2BDT8Im8G5MugsitZRa01lDdco07JV1w7f16DCpGe6tcuo1gtcnbxUh3cVAZU5%2FMLrluskYLhainTWO%2F5rtXG8OfsHi2rdhq8%2F93tKPXi7EnCWLmngzddVJCRlrKjxLK25wTEBhkQLPEuvvkNNNxzY9kWXSdbCQEhk%2B1%2BSFuskLNfE3yC4XKOHyRyR0hslGGLZNMbRhkO5vE%2B%2Fb7OxnQZdq0i0e03XpNf5HPLeQCPWsAbdAhAUqYPO5OQXbRG4keoBGBWNzyGKljGXguOKSAH7CKy3otq1y%2B3G5MlS1Uq69tf9b5QtgPl3QnD%2BReJsyH2r%2B5wED1oJcnNzrh7c0GCfXM%2Fkr%2F7HpNCVKz8OgqdFCe0mF2nKCSlyj2vn%2F0byNHWTTXmWEdKNH1C9ntPKw5wNy%2F8KzVMxOcr4WC%2FMTRVmusdSj78WXWAeVTmqZqNLxE7OVaw6bVnwGQkI4oQagTaMI1GtWU4qTSKJ0UKhQv04jkcIkfj03DtJfpBxL60QaMqmNPjXfS6szSa0mftEqptacbrxNHGsOyyaYfJM4IkfVHCqexdlzAKwOD2C9vAWMO5ezOjArdxM0hAyz%2BB%2BCcq4tsZ5%2FYaLqFr2jCzo9TJBjqkAYaSgNwA%2BDrmQo6sBodkhwyo4w%2Bx4kqUXSw%2B5RtOavG4PZO%2BWT8MwtQHf%2FSNpFViItZRV2wPzzkevtVJ0uszE9kwzgcovjxtrKt653o%2FBStrLQ3QRQDA8p5zaxttNyzT3Q9OZX7Lza%2BvARGR5WGbBsAvFYRWMKEUsme17Bh7tGGV1HGh1LsQUM2y5z6tHB5VjobHpNtlq262WlmHd268v04FP0RG&X-Amz-Signature=a8a72e05331ae07e20ac0676f393974e5629d786cde285cae44d654681e49217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

