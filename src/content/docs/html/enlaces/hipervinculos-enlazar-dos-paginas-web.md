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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T57JJAD7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T173027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVzLuLbGSddgcII8BVPhu0J2%2BvolGG%2BCfSNJJ%2FDf13twIhAMj5wqfhioRIugY5LLXNNUewasJUpVyXyJI9cRAlpuTyKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMWAFoRsKo23gHK2oq3AOtIwz7emKTcFsdag6orYWC0kiYR55ZQVIlYpt9hHlwovbB6oXaEq9t7puKcp%2BKbGJU9%2FdII82ehsTibqY6N%2BpmR34jrr3jOZKGJYAwhXGQbAY2xYQH5TA6ODKnNUjzkEnsyqB18mW0eWgjf%2Fe31USKjHSMBysg3s5RT1yWQQMkbnGawZi3PaxB4SCSO39vDj5MDPfYh9r0Myu8bAy8F8uHrzJa%2BAad5zatT%2Fv3g2DkbNJ53I89HOMxajYmzGQjfyzSe1rC72LX5X2N5%2F0%2B6GHwaHSX0ymLvDv0qfpr3%2BQhe2WggTpwRluHRd4Kwq3%2F1dS9k%2BzFujk73zoQ6Cj%2F4S8BtriNOmTw8cyY1DtkhmMWepLO68964jPPTaXC%2FORwLKYcVmevK11LdX6XjqzDOsG9nhR87GXNtOPR%2FYIQRcCG2pQI2bACDmwlS193S1bQ6PoL0yso3K7GJ%2BoffPI6d2BhaeG0OWittWxRUJsLwKZ787KHqOOJFTS6i4eCok3vSqfkoOv51WwJuAXlLC6Ae9CT1axEucxy3y5JLxHSZfpLone1A3Q3BGIQVDO0yilA0Fi9sUHp3bX9Jj3ipdnr70t1YPe%2B%2FoXvSD2rYpWksnAq7r3rXttS3CtJwkDS4TDmmOHJBjqkAVzrK7TX6%2F2w2YAdUnGNTPPKjChtwqHUgW256LIuqNugHwqEcZ4uxs0FpbR5%2BULeq7y%2FDCac5Qn3rIsLnhubKPs5663ayk%2ByH%2B83PJ6uZCeMDskbjr6NyKvoqwtLGbBfzvIfXsz2YEAwBBjirKU0Lzt7caacr%2B5%2Fqa5%2Bt1KpCCUGo65ghvodVQS%2FboTW9JEqN%2FSHs0EzymjtMdkQOEXAwKgF83Bl&X-Amz-Signature=ca75c5b2448ede773f8c33beb0fe6422ee56afe4d8dc9d069441fdc3cf46d5e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

