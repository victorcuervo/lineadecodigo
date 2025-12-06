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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AK66ATB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqS%2FnQLOgRXqLH9i2axQbb8FTpkAyoHeYWWc97Xkt%2B0gIgd2ohe7iKYCGy8LYuVHAfedlSLEIKjMpjGWnquO0kkpEq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDK4d1Zzv4IZrnp5HNCrcA8nJALJLp%2Fat7mbHbfbqDaJzeUGeEem19ZZUTrunliso%2FhkVFs6ZCe6Q7%2BDcUtn%2FdqYxLVOfiEmhJXfQt08KLZKxlxjbNtUkpIVDjfO11QiiSBEgXULmdQQ3H%2FSPs1XmsP9BfjQvv%2Bu5VFw9VQASn8SJPxAHmDmswDc9S8IUKT5KntNZkezfdi4mhIvBOWzYkvcxGEB3fj8O5cHTZB8I1iyeQhpBXscGY0LTOus2vjMCk9HXokEdZFifithgX1IlhMQbWVylTUbUl5i%2FJ6NGTySQM0peiP7TL1%2FNSn%2F8cOhQcs084sdeu3sKHvdinnkneCltdm0wPPfsga83EmgT2sjrG0uoh9hSIGr3tQVE%2Fqku5TeJZkNEWOcBpJ7tFddG9GCcIwfz8Pjcy6mCWNjVNQmFmE4DJpQ11BaqGDO3QaGzQnXQRe2ns5PtHXR01ZcQuBl5FdhyKSUN8x7eREsXZZlOmUMSdaKw9Na7KcMkniQafUfW6Pk5GVCaMkNWA5KQ%2FyznH%2FqHFooOzsHju3zU0iZbTmhdsgVYm%2BxBpLUN1hIuigOf1RPM87fjeAuQMSol29OPa9lHdIwdJ4Dwn4smDR9R8gHVfXlMR74dh3mD%2FbpaPSRsou8rPDD8PqbSMKr9zskGOqUBJphftHvXu2BTGU92Dhs6wxIlvtdOd6w0OZuzgMqxwce5Eo5%2Fn%2FVNgIh0cef%2FOT7TGWlMJZwEf4Mkv5IYxTJKmyr0GfHED%2FNwYufVawu7SZm4TNur500J19VAnRoAfXfIIIyaa2AFb%2F4vUxpFyzZgsulXLRkVSKWuK0XTcDl2DGNHbyirdCoRrI1YBsjcnuozbca%2BmfagOMpIP7CbAv4diQ9%2F%2Bbjp&X-Amz-Signature=20f712ad4a22e9b054a28c173744ace45ac88b505a97b5d1d4f3182921902b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

