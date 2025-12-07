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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZF2MJAU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYW0SHwNkkWozD1uNn3HuIAhUYN8SQBqD1JCT%2Fx4qwuAiBXJRde7aoCbVYiC5YOo96DFArsxUyi5sVjSt71ybqTnyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlT4Ul1fGHjBFVHXWKtwDKvR9eXnllusiDwQ0mS1ZUQMRTqatmlhqI%2BlIAC5a8slVmSA27WiYmQl5homXkUawSqxjQ2w7Nq0Ge1Evuwuwi5FNS%2B1%2Fh2bFIB5ZI5tKmB25kXvUK%2FR4VYAfgBy%2F%2FU97btrr%2BTz01b910UrHA8dCPl61%2BEZkDxSnGEdhfguLtKOMXsCA1ma%2F0dO93%2Bnk4%2FWLwC4cVitbiIjxVnjGthdky5OV1MHF2f8TQJGMDfsUbQkogbXfbPb1s6KNjsTQUZVZ9f0VX4sMEfBzUB9Ltihnc2KzCkEGS518cDTSTgLMPbegDjURN3MRZS0QxBIWU%2FVYxA98g55g5ehD1acMOoEMAkfF5BUFpH8adtAVFwkOAPSOgzzYgedkhSkvtj841VSFVm5bev8wxm7RuNPlsQgJfKHbXuwqnpj7tiMbwkRdP88Hh38gQyhwQEZhlufn9JhNp%2Fn2htM6LyVa7az%2FGNvAydl19ZJ6QiukI6dybcJKbzdolTICoDOKiw1NmY8wZgdXAO2Mywg3t%2Bcvvhwukw685XaHwLKqLXx422sPZcH3NOQXwMYGsiuNSRRv5Z8xpKnoHA42qVtkOU9VvTP%2Bf5YbzDTh6Zyq3cvuMK%2B3mZVnwhAFrCCuTmzFmFiyHHswsqjXyQY6pgFdRcTmZgJE2dWL6pwc8zKDOs5E70IE6DLulFp%2FHyL%2FdsPHnUuNIG%2BO6D9UKcZOA%2FbEPnH1eyCdmz15PMfk8esrLYDWpc8xyWfp8cm2fNHcOewFaAqM26HVubdc27kvpIU%2FMFWV90ERTO19kR8WkFzYTgq0XQVWfBoalKhmLkbptC1HpctqE1dwEl6jcHF939DvOJIZDxQsXxR59NV7In3WjU%2FbnplU&X-Amz-Signature=e126a319b23c9464aa3286c761025b4add4b18a54c9124287cf2b79c56eb242f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

