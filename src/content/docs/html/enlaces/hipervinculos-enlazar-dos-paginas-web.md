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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFT7VCCO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS%2B9gZM8vNWCr4Kg9MM%2B9djfnborSL8xkb4hXWxwhaVwIgRd3R9Uq8yxj%2BygpnT0zlfqRybCXJ30%2FLfT5l6w3wNZsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3hb%2Bu%2FbA1l7OAjVCrcA4Y%2FqK5BM7YuDJ589fEJg4w4hYqfUdS5bF8Ta4T%2BW8%2FWiyineDHuUzFs1roQ7V3ACVjRpFMsxP19T%2B9Bh0VgtG02Mz%2BE0KcdzDkDjt2gaIeoMAieBQ%2BXdlXOsczR%2BX4ixoBgeODFUTa4Od2VxO3ELh5WQvS5xu9plLdcekuAs7d7BJM1CdK%2Fl2WyNR62OZnHeHEGMm5LOyjvv8oSieGBXFKPfJlXYc6080SlzjPIUj2V924l1EoMj4wiH27uPlwKzagYiKFw9ZYFBampyyFLzMB0i9eIInAY3ygk1blijwbOEjvG6M3GTfExpe68cRID57dtz%2BjlGYwJJPal1kdaL289n6GvpUa87qncg%2Btf7jfrUel3S4BqRXO3wtWSz6uaWauu460%2FXjjG3zeYNNZQBP4lGLM5mNcejAFdYGqD0Tg%2FYGr8etWnNPM4qku%2FkkHNSm3F6E3kUg9aGIw%2FAgA%2F0Gk9hRelA3n8BNgmjEt2aJRVEVa5nhtbFDNNdlpQ9M1oQXEuCdNeU0d1F1QYVKyWaozuhTEcnA3Agq0WESUu9%2BTHIacpgQPnPpa3ZIRm1KRmwtT5OxXEmT2i4Tis8Fq5jI7S%2B%2BQ1BPZcwcqEPO6a7l9ChBKo2Qxajg1rAlugMNHH18kGOqUBsBO1Ydi%2B8rJ96jk7%2FSjO4iDqUvz56bZzkLgDF%2FistKFnmBXj4ZFtiDO6WuqBqF8%2FaUBpfn1dgH1dC9L6VvXxN651MijUvb4iu%2BHecZJD4NIwpth9xaqargUuLwOUwud1RXbesvE7FJDZQxNxuUmesabHmgexP%2F8AApH4%2B8U8pQRMdqpfIslYEjk%2BpAmHUcdfDQwuEwixtzZJ9eF7c%2FNKhooThIAF&X-Amz-Signature=23d0990d163dbc0fa0ce1bdb299bd231057785d6822ba9e123d117614d50b589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

