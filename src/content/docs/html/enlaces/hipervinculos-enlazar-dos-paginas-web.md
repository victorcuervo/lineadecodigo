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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JMM6IAC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGu2216GnsUdtWkFcZPCAYAv%2B7bqW57kOWEarTyDa98gIhAKnQrlbJNOKwVjRcgQKnzPUNYaeSLrG0nJEfWrg6wOQzKv8DCG0QABoMNjM3NDIzMTgzODA1IgyN9EMaWyBGblJfuFUq3ANcYbnYNGaypnQdNc8i5RPMMK491%2B1A7WeapTeE%2FVF7AkVtxFdRacLN%2FHDeTXlKd8RZsyPfslqLD4775sTst89NbbYDnWoMtR4jMI7PIzPG5%2BNmw3AYJZbkr%2FHRdYL1bZ0PgaBLxeckgfSjPyeer4wzoC9LR7Yyic0me5%2Fh0B4Ty9h9dlOKmgMHUfUYj1OeFdPvShfpeStlrMsKoM4AKHBittPghPJTgxui295S9%2BXuxKtGQqKgN5irEBHwb3891FsgM4avwJ1%2ByUEj%2F3iyIahuuqEHb2JgfIYD7HfRgwqHc55cFZaFubJYFXEPS9SqTpqxGZ2oAYcppGqz2WRgOCNo9M%2Fl2OKkwcUna9zLXSIDh8m4YzgmkoCmyJ8N9Y178WhkPdRgUEFC3LMDGHS186MBf3qjWLpVtIzQHfvcLzm1X1boxTvgb3CLe0i0C084X0cBJpQJYMz%2FoxR1Fw1EpYOQyLfVNhU7IfWJwLQJxbQbirlfhs3D3sLqlb%2BW2jBknRvck%2Bi8JfOuCcmqtJx2BIJwgJucJMTSYvTe70OpHbbEHCEGrPAnNn0wC4VR%2FTqEIdwttgHiecC%2FJVpjV1BIvc66pgqvmB5VvkyW9UmHFbzoX9QRs4YGUXTSD5Nb%2BTCk3s7JBjqkAXhNvAGkdVodnfeiufwQRUQtwfPuX%2Fg3GG3tJL7aV0bP3NFn3qSJsbEbYpSMQFzquN2YQVlmfrPVQ5MlizpzcIIMN4fZKuHovVCRNflzk2s7XXLQOTwkbOi4EYMNwKHeVm%2FVTID8qBrdal4b%2B9PFqL8U1Lf12ptg6P9EjYJxWCLHaRq3pBdPr6vR7jY16ZRJ9JA2474AZHM9MsiqBRTSYoLeWfjT&X-Amz-Signature=91eabdae9339362be75ca9f83d99715035df44e12b9fc976da350520f865df68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

