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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672CVKV2X%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD12ZQAdw%2F8gvCJM9aGjOU4GCXhGCvrDTiSoYZVaHLV8AIgRSfN0nhttGuApa0YKdUqibflf%2FD6oTehjCgBDG0detQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJTIPRd1k8P37vvTTircA1%2FuaaFY9Yr%2BQ6TtaSriHkDe9awz2dfRTjZAQVMlWdbM6jIDKhYwlGlBAQawlYp6u4QcQ1ia1ymm%2BsjZ9hAmmv0JcEIxujjjiLK232QZyldAJZy38NHu1HYSRaQlifdlTJZavNezch84PE7uDhh6rqBPoeSy9ReGPvt4VuDO3frpxHwPZvwa28AKmJaCgnoqGJ9cnWt27OGwCF3AaPZxIUUxppMJprSyzPRrB96Kp7FR7Z6CrRMWapL4ZrOQYYjBM19Vf8yt%2F4vgQSPx%2B3elwgfITHe7SRnZi9XKo8f3zsP9bZg8pRTkBF1yTRfy1q7hpDQao%2Bhcjga%2F7T%2BeJLJqK6KBQqFAIIZJ1aDtZI5dRjiSM9IGkUBuaiKhvJvFkNB7jy30PGgb9vZ2Ay5WQL3o1xslidMN8Hocl%2BDWB9cAmNkF9hVCT798S5qsW92wv2JW2N9o49yICRAlYXtEfv34S12eK1sADKuYu00qXoJb8vwI9U7vAg4HzN3XokeWF%2F2c1R%2F%2BoFCBbJWPsndzusa8EGRl%2FrKXOGMPxdDKJPYEoPjuNP9JyBBkuCRC9A1K1QntaiOaryNTy%2FOtWw6MuWtFQuRxKMoAdjfud0YIlNDHRgeNHPxvQGtPlqn2X4V6MJS8z8kGOqUByoy1%2BatMgRcBItOecEkjLCybbSeGtzaxL6YZ%2B5e93G%2B1Q77D%2B6qCHdI7rs7s0btywuRKLniaVkorDu2W%2BoLnB5Zn3YTCj5grX6yGRBC6cnVoRWIhuxPH4qm0bCi2NrLoplngJho%2Fmkigq7TY2reM9%2FAVqkPZ6L7m9civeloP1M2%2B%2B4wztrSUZD6RpV78eRFjpRsQghyi5g0O4OCT6exLe6NjSHD%2B&X-Amz-Signature=002a2d7f12debb51879bb45d798a0a5e5831d991babcf3955a561b753b208fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

