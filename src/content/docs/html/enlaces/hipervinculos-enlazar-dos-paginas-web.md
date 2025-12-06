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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GEGRSJ4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpWC7lKVFVaizFio4E54diNS5ffacm8SW75osuxP93ZQIhAJZwz%2FJGbZTmptA30v3YdT2uHCqZGxx4WOAjnJKHT31kKv8DCHoQABoMNjM3NDIzMTgzODA1Igy8TI%2BAy4I7SEjWEnEq3AN4i14bZPJGAD8f75MzVWr3Fn5MpRXe3o%2F1SJ1DJfRQ8usiuR7m2sb9ZbZ7%2FvFsO6RIKmEcFBIY98JqN74mG14nMF%2Bmd3c06%2FfReUiHhLWJIEHOzn9EycOzmVj5t4AR8UwZyoqYUIqpcoN4elvyzyqiA9rCbVC2F5m6Xqe%2FG9Yvx6Y7yKNH5uhcWr%2B7AyPV1MtCvvEfsRShQvDacNdDUkbkB65F36xE2P7QY5VjM3tb7R6Sc2pfqweZ0xZDpaPcxFMPVQhENX9p8LQaOHepV82J0LbBjMk9cL4S1fomDbI1E254i5p0HdSqSA0m7GIWnwHKEHT%2Fk0YeyW9aYcAPvDrHxvc5RLUbriJvXhDMTnj8WgcpPdYAAmQUP%2Bw%2FTucrxykkJ%2F7%2B%2F%2FU33KNy80jwfW9Fae2DubxCKzB%2FWqNEpBFcxYD5no2JGHchhwGVlMWy2gs6oq8RzF0NZABA3N8CDMlVjFK7tftu2ZZdci9cxceaWwPxF5Z847nJHynpBXGMpxOt45t1YmuXQjEcG5u2LRSxomivdB8UmXeYxdW71o8gtc%2BhNn0LryW5EqR0511uwVK%2BcL191psUp3cJ3ivu1zf3K91JGZDeHM4ngf41JO5vrsI26sY2j9%2FBHy8PDjCgzdHJBjqkAcvSDLUomsLInsj%2FmjNW4egdyOyG%2FWF6AQ7BBO%2BM7pv%2FbR2eNnH%2BCAtYng9Au3%2FnLLdJ51J5mqpw0JJQqZHmBK0idJi9ZxfFcadfnOrpRQ5W9HdkU%2BL6d4ndiJP%2F0XwBVZrp%2Bunzv7J%2BimRpyrb35rACbE92YDN8UrUM5tJUI%2FXj8zaJi7mjOtvldSSdrj%2FXNoo98uI9I%2FcqzboR3ClXjmGTFODM&X-Amz-Signature=ff1ae0a79669f9bab31cd09bce0643aab536d08d41a8a19383f86d733183d7e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

