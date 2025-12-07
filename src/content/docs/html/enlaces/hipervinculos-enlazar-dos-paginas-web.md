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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR5A2SCR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICczx3BAQbasgOnK7cpIr4N%2FD3J%2FKpVVUPvFyFEhIZKGAiAci7Zx6e3URMLi2tZm0vc0COnwmW0Dv9LB9agY22IoQSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1UJ46LqSmzrUmCGUKtwDHuMsGrSvmdpkbUbQHv72nWWnJF%2BtuGP6JhzzQjeb5vep55I7XSQZhy5k%2FxDTyLdH6KDRHQ31tJNNhDfl80kXjMCykNJXMJW1gj%2B%2FdeAV0HojArdMx1fEYp98CDQE%2FxwLeUOr067p%2F7rCw%2FhBCF3tynfbSgT8aJ%2Bj6c8IdBUsfCbvrggrr2JRhy5pek7%2F8KS7opNdOjk3qsWewRdst378dV7POufo0xBTYPuCYb8Emp0WV%2Fu%2Foq%2FDFwAo2AhXnauCPM8YuwGFr%2FSmL8C4okWxVb03OHRTOAB82M70zd8N6xV6vi%2B5kCqcvzoTeL26LXm6AdGNUvicPRFdvrdg0fCrz6note%2FXayKhb9psd%2B8%2FQPZg0Sx%2ByT5vRok9rVMNz90cupOw5Q5C2QkAd3Mu92CdDViDwKaHKS9qEH07PW235TDqu05gCFXOWjb24E1FT3L%2BsDjEp35Rk%2BkY2Gjv%2FuUjgTyqcc6kj%2FzvG99QXQPYiA%2FaB0gEWi9YYd3p%2FXwsl9xjE9MpEJh8TJYAL4kGHslk9T50CIJx4x%2FWzCWJ1U4wbDNYAp82SqD34EsqiSC4gHZ6oJypK4gtrMp646NVxETb4yGRcoQQywiwjmUt2jn6BY2S%2FRXRuqvs%2FGA4NdQw4aHYyQY6pgGKwC0cdr1zjiCGMnE65HABmtiaEYrar76NOQpkuZ8Nge%2FOhwRXi%2B%2BRU7L3%2FrmjDNUrBRkg4s7yo%2BNZwFsv%2FvlRo%2Bb%2BLsnz%2FWM0Rqamg%2FJmkncjb2ff5m9TxooF3kKrhjf22Aj%2B95SlwD3RlAZfC%2BNSokxSGe%2Bfe%2Bc4n7O%2F29f%2BYJhi%2BzNHDC3JklhSAFg8v3tzqHYsYkp%2FMk4KYZW7VjuCakG%2F%2Bvqm&X-Amz-Signature=2cd759c61ee15ec70e39ef71925736c1304ef6b648a0881c228b75f17de8f33b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

