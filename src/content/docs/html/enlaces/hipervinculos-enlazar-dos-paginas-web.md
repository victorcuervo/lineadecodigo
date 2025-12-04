---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWDJ3PL5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQC2yAqktLd5jXeDX20lbuPW2tHo4QHyLjqsSo45Xix8QQIhAKVe4%2Fhwb3XqmbVVlxtCN7qLgQzXQr6j6gx7c3ijZ2RhKv8DCEAQABoMNjM3NDIzMTgzODA1IgwzexocWFJhG9L9gYAq3AOQA6oStPHRt4oT9ZpVwL2fq6LGEAd3XBBJnvXdhMfGps67OLyFmMkhyv4hxDI9yOJikkeHTd4FUbCUO2KzaEdPQ0VlJoCe0VQTgkWsqe9s7hEZm0Z0arBK7FP8QuivrQdL1pWp4I6dR15wQI3R77nHbKrgz7s5wE0S3voo4l9GdKXoBuv61vNUgm1VWIuwY5raEnKGZLxPN8g68TQ7ZzqUDNavxXH88GqB0Ddif3YTvS%2BpW%2BPtNfCZ2zZIFmFFImtOlOJ0jxxrvicO%2BvqGGxAOuCDmESqa5w6paTjDm%2BPaDnnPOc6gq29h9z%2BPooIY2xqh1CbDhU0W3Ddm60bxRQCDR3amphafKDWeusilt6DizL%2By%2BCVB07%2F9TqnhTNRIMG6flhz2uaFkvNtlUGXNlVav6%2FQvOiZj8jmKKSXCmnoX27a52uAQwpfLLmZsjTtU2UrJ4amfZaijlXP7Xn8wmb%2B%2BZxFOxxS0iWGKrWW0bHDLCfnFzxbFoA46MVbWSwmbNPdS%2BQhOagug8CuDxaSc4Ndg3OnPA43EC6VRpSS6s0EDUCDavMbq%2FnTOzIN5yznk8UyQNDP5XkZrUAyrpN5qnLHzvFVkXcaDzLNCq8w9rbTUCvIL4GEBgy8ZPppL3jDw6MTJBjqkAXgAtkb9sc5%2Bv87JC6BiyjgcReebuESmRD3anehiB%2FhUD2sobukSG05z5ZHp0O57MqixKAGYfhP9hm5mqLaV213YR3v17PYIFRMKdPQQLyZgpISdVDCyasCZp5Lt78kOvUUt5ZRvv8VG79aJN2pMiiJnrfi7M%2B5HwVs9PZeknC1E59ZXrkZraHTcTg%2Bx2Ca5gjhuptyaaUyqNUVOuZAWGr0iNnAH&X-Amz-Signature=02fadcc774b9e6f3fdc190858e3c3a88da06699df62ca772b39b3bd8a37af45f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

