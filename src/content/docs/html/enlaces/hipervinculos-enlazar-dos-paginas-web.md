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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQKW7LKY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCtVFa88bAlPbif%2FpG5oyhi8qONZV5d5%2B0pFo0E9iRkUQIhAOa3gFpUyWMy%2BCyOiZlr4leGEWOT4l81%2BpUo5VPDSIQcKv8DCDkQABoMNjM3NDIzMTgzODA1IgwnA6tsqAO%2FelJcF90q3AM3IrHSiXw41MaulYUQ7Nlsu8kqppGDNX5W8UKGPHaOsJmMT1GjVR1lRfNeNBbRS7M9YVupM%2BJckN3Nb91WNWNyPTj432i4A7uOv8KwmGzHo%2FdUyXi946PqwU8rni7EEumS%2Fcs%2BnZ4Nt4Fv2njyCf9uzBgqeMeL%2FlbudzZBie9YlyfiuBcWQsia%2BhwJL6amYfAbjHPYAWuNsUelJoOKQ4gLMGmYp3vvNegHoBpBmpzzjtUdSbCtdz%2BYYctnlqgCNgWnCTsN6lZXmO9HoM%2BnZgttPtPkRVpcDfkfsk1EwlosL%2FEcsegE4VVIW4ZDS4NPcEXwrrf25GYv6bIfiubcrj6INdJ3u5R3kl%2FO0jtrJx71ONIKXvjrVrVIMZ5mYmL%2BYv5%2BvJkwE423aPqwXaNst4Nnpa4ZBJyWnNmglM2iyaJbYxU2O37FlMDMLsmUG%2FGbeSdRsCWls9SYRKpTizfX5hX2PttRKm7hw1mLCI%2BeGNerClYonPiUP2%2FsH6IsNSqLHbyxnSorvcpMRLvNLMRzP2r9UgiNPrtoxzNFkaipomDMrTVLtHf1f3ViZVL9Zg70nklgo4BAjDCQDiftbKstkvTfVBO7QnUO9oUAS0KCGs00jDZP8CgZwx%2F5cTlRSTColcPJBjqkARGD6afsHzx%2FvcmQmf9DjabiPkOW3D2VJMObML1tRaTPPO6yMrKtbYWYMv8cRWc3aUjHujRyGa0%2FxfqhXDhFTIOGmpvgzxBJr%2B2TaV8BNm2Pbq5sUh5obOvQ6YJsThYSAJmGVa4gf6a%2FLW2zCWJT%2BJ0mjzuHBz2h%2FIf%2BBOAYFf7pAik4tbSVYEFxTqOweDxx1tlUuF2SefiOGufIKDXC1VdIgt3b&X-Amz-Signature=5ad9c6f76e21f2d4d6e144fbd3e9f7239f37bcf750f7ef0e0e34bd9dfdabf5b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

