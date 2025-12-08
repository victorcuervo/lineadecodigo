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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XFAV6GB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChzQkWIaJqDCyzh8vkO3U0YOoYlZy4LqzyhcvNgXq6fQIhAPWl7tcFu4i21IT%2BxrIV2BkoNglmLyAkgxArCqQpODuHKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiYqsm8Owyaci8k0sq3APsS0ZzmBdnnz5X3vIDoyAv6uRnzv3fJdVVAlhO8Osrwq%2Bi1qK25Ph871QNcuobQPleSO2wfE0plOmEH4tFoo5gGwFRxelLKViMB83bi1fZxpn%2B8XOOtfDOYLE7KBQMge0UQKX%2FbsPJ%2FeKJbxwSpCrXVi7BIOVm5F6jxe37LzYGhA7MBiX7vNRiZ1vynIU1t3LFEHUDk30n3dect6pm5tFr3FMGTR3jw%2FXQnvRKroVjayHT0L3LWSg78DoDbSLGeXdpe2tCc3xl6zEkYSavgaKH9Cp0OkUFI3dxfa9CjL1jPWViUlEZBgih6NZK2gAP8y%2FleGgGuB7c%2Bni7ZTrox9RgvVJGzh1Re%2B3jFG5MvuXTBxEBz6y6XoVk5L4D9RBRQzCAS3sX5i6MNzoDjlNmOvaRCG9g1udMhVWjQMncmQVAlkOkTFAG1%2Fimor%2FNTyhUplH3ZIXWJxJO%2BlmwFFYpLihUltGgeSkKll7RdKz9RGjK2tciRqAPoucs4T5uFClfYl1tH6vl0o3JvRxUNoMkbr7aldjKCV1jRcPmym1xBlenS%2BcIt8%2FPY3jh7G2cpxuIDaLtkBpY%2BvaRIELJ040i6pB99f7adRpGgXXRhIgszCJa8m2ueMh2hAlHNt%2BnRjD9%2F9zJBjqkAb%2B2PonnMa3pM7gWeFMpAzO3wVyEVoHUB2KEYXbshAAWO%2BZQ3a9TmDaY09HVCm%2FWw6hlNNBoVq2%2BPq6QsHH7QQK43WY1dmioF8JrdDh1OBbCVnwVuxrgQ6eopkoxaedsK3oIaQGyAKh3me8Mt2BIx466I2%2FZu5sEk72646gszrofLkDbDb%2BtRb99DtePTz6Un%2BtQI2zJ0ATuo5GhpGDjPxke5QKz&X-Amz-Signature=58ac4433a9af33a44660dab3ddea0d396425a4e4e93350148baae7c7625a27f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

