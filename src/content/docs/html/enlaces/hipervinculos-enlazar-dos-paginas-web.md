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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYVI2R6V%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T155431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0ROtSHXQrx4452bqEKaOfQImETazkqwmjcAIrkljQhAIhALREyJpkYy0Pv3PvtMmCfJG9Q0IjRyy7bI5yeNeR2G9AKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9dHB%2FfwJPuEVM04oq3ANJXpEEhZOZBWDdOiT8ZMDCk91bib4M9Btk3dWCRzjpymYT5aBdatEh0e%2Fv3larDOBuexLqBt4Mf1cAgHdY1wvvfD%2Bm0OOU1676Gew4X0thw1TX0IYlD6C6dyYuwA38iRrP%2FSx589ayRbwk0rSAdiXW803oOcNkGocLrCAaIUxOyZAh0ZmmQGE8XKicEGuv5bre4OD5rrQUnXRwrAfn5n5faGyFNW7TI0r4CCicuM%2BJAnpETcmCX%2Bcwn%2BT2YIMPfNU6cLChgqOF8NIhdaihkrMviCGq5IodNcp41i6XdiU%2F75%2BMtjiq40S6kEUbmE55eT%2FdeiY%2BuCxOx14Yy29LxSdqvCeDSaM9OJ%2Fbl0HYt6UdJgvfSBzqW87c8zkhYtUos30ciquS8BpN%2B0qwuR6IjqQeBUMnyfrSdPmdnTodpAbQ3EB2HwBR%2BbmpEmcwCqBpAT6vG5p%2FhqTEuq3ORXQJ4iEH9k8rQIBwrkIy3XkaeOnLxqVbzLGWfkVnKSadFP62xaXT9XsU0bsH7AJrYui3JrpcK%2FXOJHSnuyHFLnHTVw%2Fmaipsyyih8E7pqwSrvYS%2Bd%2FYwY1hmeT2oZMAcY6l6TmounSlTe8W2djZ38Dg48ywrzjIKaRekGgkpo3lGnzD%2F3ODJBjqkAQNH5nzbPRqEuVW81CVVQXcNTzFNTih8NVKXKoqqRosa7AFuMTRJLfzmiCYAnEtWtphulcXVS7FhJKFa9YdYX6o7BDOfMjeWUqacYBk7iKrugTtyIEwmYpCPaJnd9TDH0B9ZLHoeN8j0VSP5%2Fs3ReDQhOustTDo94pRxX81Pb4tq%2BrC0tFixt5Sg7b4RKvCDPrTVEPgBnYWkUQsCID4HZW7UNJuV&X-Amz-Signature=e8f7dcc7a56b29d9d81ca13cb5706187b032657b26d30a06ce13bda96c09e81c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

