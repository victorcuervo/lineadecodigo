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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMCFIMMK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5mEQwGnPFVE4wx00cWjjCNjp4IA0FwCsjkRfNzIfzKAiEAxCxrqZL3trWRgUzQK%2BADsnoJLC44yoSUBZyv8IBWIhAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKFcMIkLKIR2rR1GkyrcA%2BtIKITfcW6WnUaBJzGjaew%2F9qF6CopdFkDdCjK0C9pCBsMFgIb61d9LGq2xetAQWFBOnaFnjb9i%2B8fOdOLDBLs65Dtm8xKdV%2B%2BaXU3NKs%2BQ5c51iMjaAV7d3arXHONn6MfMPmfEMpMLrqvnA2uWllwt5p2NNlJG2aPzYzwL%2BQOpngLwEkemCqvwErBXpo8y4g2bOpJuTRLkNQsuNyh62UeCTQEbmr%2FYmFDfwcKwBXRRbL9whbubbYY46E7AytmDeaa7ymCZ4%2BM%2F33FgqdGw4x21vjdc1Ju2Dvt%2Bvkbdm2PLbB%2FJm5WZaleAIsuZ0IwTWSaYn5HILXg5oKF6PuF4S4CYEPsa1%2F6yWwYOy1mr8kCXawIJPR6wTtkZlEjO326Jp5x5CmHcsVx%2B7MSKrcpOh1xbgiUc0deQanpTymeGhseaQr%2FhYC2XHOXwiItKJBu30oS2%2B30h7rZnHLAVubIt5xuKznf8Mii9x7GePNKLzDCsnmESN9Jn7b7AZIfS9LY8JN8o7WV14pNfVtcqgTJzXLCwhNlMXb7FXYinZUeXTOqFSHUoNI5YX%2FWPsEfJ5cWvHGUinPiK8ZmKX4PklcFC8qze%2FNKgXs5PXSbEmCMYAPwX5TBiFZO1ZhystWrxMOW8z8kGOqUBwJ13v%2FDpzk2TcHuJYL2B7svw7V%2B7rlvQj2Sko1ahcNr%2F19%2BDmba2EiISQfmnbnrxs4R3h4RgVronCYv8d3V9%2BIzMKvCyDZO3eOsUx4uZ85yI%2B6tAe1JS1RZLyxpjnEQnAUzqLem2G2vLAnkf1gk3Ohq4o9RKnexYdGp8%2FCKGUW41cEAy%2FW4llWBt5fMI0uQ4W9B9Rhcfxb3V4Y6i8wzHwVLBM5aj&X-Amz-Signature=3c0c5c3957fca7e4ca48c92abcf3f911924ead4e961612df07f977a52446b224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

