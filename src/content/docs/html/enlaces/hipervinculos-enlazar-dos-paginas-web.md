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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVRJOUFX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T194252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCegSonjKIHlBmcLgyC2yAfn6ogN%2FmauOofHQ0n0xd0hgIgR1vD5JulWMfH7%2FHrjJOVDp7bZbZt7DoNbWZAM8MmNKoqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJr3vCHfL%2FSvh68jOyrcAz7E4w7bDxnp53ye64HVZuMSn98g9ZIRLH5u7bEyXIcLo7RaUFgWR%2FKneCHLvEOK6JXDnvJr43ftDRnG5YhOw2r%2F8Zv0YVvbz%2F5jqD6MRINjw9ebkhqtj6HL1kw6F7A2ug5vP38P%2BtH0ek%2Fyvz9OOmnt%2BNv1YWBS2OJ93YF%2Fisjm2FbSVHVp2xtl8LkoIoJuSPHK7h75q1wE9vsLf8Z7IqmTKkZ%2Fy432xj6wBWuQ7fPx%2FS%2FXV7afUqogNVxaO2nwLompxMLQWgNwO1jTcI%2Bi5IjCEl%2BKZ8iZWD8Uh0FtLOAdPAztaJbhRIcFXamwgvLKvCzwUGulCAXDeNuBVgNm%2BmYKR8YdgAckChCK3m66xqk0rWTdOY88ZV5SproxhrxvFl3dPmKmJ7DRMORJbQA%2FQlkoFdXtbPXfRQ0D8jrbNz5H8vNRh8pyiR9zFPMB44SGdRhrWNTvzSSXr9SopFHnjVh4U%2F4tibTT5xaEp9G180ikZ825tFOXCEn%2BKsVlIXKg%2BgaLS33iAO0qONE36zTp%2FUQ3dRmGDvMxOAKYawVymvzo6TapmEYlqOLdbgcV5NCcgbnlnECI41EPi6ZkJn3wk%2FhF4aNuQhfhUaYXTQzZOA%2Br6lbqilSib2scqkH5MIXf4ckGOqUBgfBiIRYCCAK6A7M99IImCXK1Q5FOrQQvYyhqTzxy7GfZHtbtf43ez5hIyp7D9RivCeK%2Bks25zU6OPWIiC66rpTAcLLYCHuL0mvYNLnYyA2IPGQuCSjfoTbxjVvhfox7aa26Mn0%2BBFqZ2UkOSRgwHHnB%2Ftmfk2I6Y6VoFnwb4ftYir8jx7OLc9lszBoVIf4hNW%2F2N%2FkH9KYZ0eYSuJsDwR7DZMzsr&X-Amz-Signature=9a0fcc72ffb7809e575174171012a69e0849d65217723f668d6808ab49e6b578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

