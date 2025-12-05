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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUN3SUBI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWkXli94r23Z6aJL6%2BqUrMkkWnIocoVz3o3g%2BCYI7%2BTAIgZtvx1Mh5GC8QTwKUkRekuIdrbdDRgOmISBngXQLvVy8q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLrwjivD2rbZyUeQ%2BCrcA4SZl2001QFYjU95SjIj%2B2Ze%2FqCxcHOmkHcsFBVxakIX38c6OKVw8S3SeceYuV%2Fp2lGE7zvQWmMaYusbO%2FrlUqfoOEbJZ4%2FretqqnZgnlDNB7Zo%2FM6stPAYkHmZkHIVPtaDQ9BS25Y86g8RK9pE4gFoOcFv7egQqbOSn7QnXzv3VWLvUyVtCjraMC%2Fcr%2F4rdWIFyS2MVOESiGh%2FonnwQinn7HVbWmfryqsbu%2BDLF9C20r0QO8doIuPb22F0VhOz65VvTyQyOkPrE8bSGlTCn8umWC5NYGiOoiFiddbFlhfNeK5DAkxmbKo7Zfd1cLqjdDCbLf2dc%2B7gE1PqMU%2Fu4IsT%2BMLWk9TYPt4YQTnz6eSFfJ1OOg8ten6lhmLOEx%2BXAiJP3VTyOqUu%2FOkc6f8jEfN1vKRVnA%2FJNoCDHJd28qfNJ0Tma48OdhMoZqt026RjukaF4KJarmesn%2Brqnpt1KYUyzaYcCzJziI4P07G1Pl0E0H%2FeSjfulFEgcjhPsnCyoDJSFpQJWzl2dbfUX4C%2BGGZPKi7lNccHkqDdrUG2a0qYO413yffeoB0pGLChY4H1xvIIQLB9XaTwFKcBpjI%2FDCnORinop7xq0E8kmrD9D2IBwtNrcZIraNxnMMMqBMKbOyskGOqUBvP4gBpht3cZ9DXNre%2BeINjfU3MYrsy4A1KoJv5cNNPk%2FzkbhEymAlfTtx3mv5%2Bekd%2BnL8SKc5fqIPf4GASuXu7VVfnj7I6T72x8LNzH9qHDqWwISt%2BipHGMnac2KbX7L5nEYDe0%2B4UyE6y%2Bqci6VpIzqekTWgPvNUuQqHVWHmdY2LnTK%2BXBNSX2x5pNd74FeK%2FFYwBz2ef7VZmvT179IcF2iyx10&X-Amz-Signature=d76434745ed95eba83beb5cdff6a5add6f9ab0a33c3f66d12f6f50a85b9ce657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

