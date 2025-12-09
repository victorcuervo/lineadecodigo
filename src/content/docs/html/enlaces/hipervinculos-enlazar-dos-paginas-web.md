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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DTNQZRP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T224905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDZyuQljAW8NvZu3IG87c%2FM1ZHr24deIJ3fzwqwZIJ7AiBGh2AXbvKLgS9tMMRhfT7hOrV9bZeU7feCDx97V%2BZikyqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMttPlzN5Mo0Pj110nKtwD8rEL03t0Zw5%2FfcD9r3ioqjhh78Zl%2BGc1xUNcqpYX38QSPLz27NkQAMmogAipXyboDTV%2Bm5zL%2B27wUR75pjLHYD2b%2FF%2BpVyrV5fuymxO1rS%2Froejc71eqPazXv9HN09lsDUHHIx6O5buyO2u0O20QMdpGeiW5gtHbN8okOrEgMKsrGLH0XEFDcdtXJyV2gU%2BGFeicoxC9XPwOfuzEcN4sHKjJIsFCsRFo516oKFJT%2B71IXXUhLToopraJ8A14tp8LugDAK7AUbVNQhnOVV7y9uItRsf%2FXQ59o1UBk7BXV%2BDsHpc1eLERDwsHfixjm76KN86VlDWM1SDG7YUfqYij%2F1HlOZxVzg9eFRp%2BOee5B5z6jOqUDzBhgdwZuPLigDKhcuD2atc07u6QTOeiVu7Rw6eAJpNdN28bIfyuuVJ6bDlp7Hj%2FBGBslM2GKk7s1eT2U%2BCoFpVAK9R2OwM4XvdUzKWmgYOJcC%2Fnbkvw%2BZIM%2Bfi0HfRYEdP4AACAoK%2FaR4itNe%2Bo9WAhG5tseQE0szLkvH2VTkfaUmJp7N7gQdXou0QBli5mSmdQT00sPNPvZ5MngQU9kSv%2B2bHmPgJC30lF%2FuFVKYeq4wU42WzLTHPIsAhsN3jsP73Ku4TTN5G0w6MPiyQY6pgFZACUsAjk8YzXtwI966Bu%2BnpMly1g1ZNP5q0C9L%2F5UGV6AihxKawnKeIMgcXeA6wxefZK%2BUnvsDsxZWeJj7RVa2GKa2MRWXXPY2bD9hUEV%2FadYKwxNmJ47iW95IDEv60KKcZ7i1%2BDYrm4z%2FrfsnEdaApJod68TnM5S7VefsxS8qWSwxGBnNuJiIu10y%2Fevy5%2FOr%2Bqihxa4Fl%2FZ1Xkk9vDeixv6lnt8&X-Amz-Signature=6f87aa14b7e6609e999b17a9082b7c9987610aa2b42e61f4f630c609d72ca9d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

