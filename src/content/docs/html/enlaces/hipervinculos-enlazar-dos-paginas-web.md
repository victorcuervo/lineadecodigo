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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5PDGLEN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCCYWlFe1Ho7%2FhDZAPBFSnBHeMFihzjeZ7SOejTHpJmSQIhAINu7pm%2B4ltdCzJ9pN21txwuXome0OWu4fLH6pYakj7OKv8DCEgQABoMNjM3NDIzMTgzODA1IgyxACMZVjW6j9O5a0Mq3ANOSsj6wEmX%2Btc36cYGiI8LuMu8WsZY%2B0YtOLk6jEV8tLrvwHerqoNTH3l3jxXhfLtA7gW2Mi6m6kVJjebw1SgIW55GkZpTLfD1hzgNQN8Vc6%2Bn2c10JYZp2d3VruJMDbSOF4L8NM1I4ZYlDgVLTr3QJqrgEKAvdI0JLEsBNUQRFS%2BewWxo3JQNkMdvuIJkKkREOokxPAf91%2Bn6QeXIEZ9%2BpcrK%2BODXGq0%2FKuzUQn2%2FCefqhjgrBZNnLTnbhkc1k%2FakjIxVgbk6BD%2FEDhhdZDJ6dCHiKuLTlJf1uGgEtObPbrYAXsWcgNCYh5I5vdm6pgbqLeCAbbcyexaF%2Fxjpm%2BjPPGzuFCsVUkEKsZrMRVsQChsQjF5EvEPDqK0LzN4mJuIYw2lGKhhGhetjIo2R74mwE1NBcAykr0SwUNpCnTCB8dFscE0djy2VKC%2Frx0iBIFNaVyHlKPbH8mhjZqVHdt0y3EV5ElO34Y%2FA6xHKo8bYRXBZl0fU4prV2U5tjTAqXfPFBDlLcMzEuaR50sQ1i5EdIZFllVJPpDwIFqeKWk8kObqqyAK6g6KguzJOUBaCkWMH2r2Arh%2FQb7jXuqiC%2BcJvtVYAYNGJ3kEGa%2BAKve8txTcgwMSJp418oDSC%2FDDdvsbJBjqkAVnHe%2B%2F9rCqFd%2BKMK9o5OIhgQfdmShob4%2FW4EH0y3FFBzE7NUI8C%2BpaSBlumHwFg%2BcYuNaMqF9DOj2KN4bkT10U8v0DjpVEfoOSgOXH%2FVp5qmz6gpdJxca1PRC%2FnFbTtuuvKc0B7TSbkw%2BCQmD0GGDVuOe9VDRCnCbR1u%2FalqiFDnN%2BJBr%2B2kEXClxlyn%2BVqmHOPz07sLyRlq%2FZqm35A1yURWdZ%2B&X-Amz-Signature=772c98f00b489d865066152b76e75c2fd318d0583e4ed789c45207ec4456963a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

