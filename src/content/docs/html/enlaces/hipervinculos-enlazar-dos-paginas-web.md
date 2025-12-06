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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKWOHW6F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYY4patmvxVRMXGmhmiT63Eu2T3PunZkad3PTyzkEIoAiBoFJU8mY%2FI5STkb29Hjc1mw5oaBKM9x0ITSW6JX2as9yr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM9u1AHP37ws37TlUgKtwD8Vtf7%2B2NYDEtpzIEBM%2B7s3dAJD5zBZViVdyi9QKBy8uLcqQIL8fgmTXj55kZBP0xpQPkz92oNNCvFZY5IvSaBkmdLGSn7546qd3MGb6suYC%2Bv3wP3AoPijDlaD36M%2BLcCySZOAyadGHnSzZrmH3lClzIyzl9YBxVbC4k%2FzYcJd0hyriZAZPuBfKLkya8L3%2BuzPqb7HChkjsgdZKkx3Uyin1a4MZY1L7zPtGpccvlgiOcLx5Te%2BAz0zu8CzGxr5LgVIegAnwKYoIOdrGBS5HoJfOzQXm38GifodEQe56O3EjKHF%2B8HdVfUK6FXUXy4NFJ7wnTr1LRok41kc5oSRNZgYsjUtt7OgGVwAx37gFmpa2zbA7k1c8PJZDvV5XJka6VFozdOmwcw3B82rDpCEBV6kCD6%2BITn4D39LimsDVq7iDWFW08U57KF6FojG02kwRorhIBce%2BQWrGnRogqltd18oFETNhq4zCOBfhGr4o69dJKDNtfLSk7BejIwujOCZWSdk0Y%2FagfyJFRrJ3h9wabalKVjU9puWbwSQExI%2BhPrjeWsd4CoBUvW5cx6P%2BUJ2%2BjnsCNign3p8cOwA%2BlQwuoCbyRhoXr3FhOIWWMdn0WBJlYlN8VUkrP%2B3lvPy0ww57PyQY6pgF%2FrFv5eNBR%2B6lQzYGiyXoHZFLil4QKHPGh1CHNSGKBS5nKFAnniuYQ%2BCJqjJ2mAW1vC5n8EsTrfjBrw71%2Fbqhwl0MM0Jy2wyoSaVNnXdorzZCqaCgg2SQI%2FybSgq5axABm16vteDXtpGFvIT%2BPK86f9j%2B3G5JSuJIWpaZx5E%2FM%2FHlqDycp34Pi%2Bz%2BT8hux%2FtoV9cHykrbBW9xxgsME3IVXZmGjGF7O&X-Amz-Signature=0154e1d7aad2b52ece6b998f7004630b9f1698c0adf0c869a02cfc91b81a6af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

