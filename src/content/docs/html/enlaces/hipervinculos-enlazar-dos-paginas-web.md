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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJFIFXOL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9%2FMuk0Ss2Ztpx95NFRXWa8UyxAV2bZmO8QTOYN88O2AiEAkc7RsoySLPLHj%2FHhaZVveMUbiyWdUUryrTnZmZYFJ%2FQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDI5%2FKH6PV%2FIiWP56EircAzUsB0lWw%2FKCkhdIOsCa92%2BXfbZjKxvzYaeELH4YZjllLZ0nbe%2Bzo2%2BWtqPzy01EqjvR%2FehhCddRoyVouyDq3URWZVLapBZiwLb6ZLHPXQQ5ATnuIpbFckfRs8RXoOCXexLnDU0dSd8oHKPmgiqaybgDCZYS16oGbxXl0S7ikeH%2BihGCTF%2FrhombLrnX330%2By6QpRLlp%2FO5R%2FivIPAVjLfkAzcEfyn2l4n9pilpXQxuTpYrvC6nIYoHMUHe7fszYtcw9Nn%2Fp%2FHgFOnQthlrf05EVGQt7z%2B2RuUrpLvZYayO3GxjRWNvLzVvLx8vNAV1jz%2FCNPdGAJqK0D7PashGm6LXdIX3SdjyDxoxT0VBJECDG0pUydGZyHxi3Rl5Jl482dtCjNFbMbI3LgkFMdBfGMfdp8pvKhcg%2Bj87HFrWtKJEMPK2yN9YsYTHyeAKt%2FfDF7Bjks1laX7YNETwgO5luCBo4%2F0tOo3CAcjU6bEDKuIiRPb9eKvg0JmUWmf5%2BmYRhPnsQqZiNwEaoWVc2jfsf%2FK7D9g2cwsIvMJfsvMHNwVf3GrGZxuaTmxUMUUlF6IaZ44Ig3AV61hxK37xCLJQcHvc1Eu7WZwBkwwEdM4fE2qGvlXnKzY2bl0B1e9ooMJfRyskGOqUBZ8t7mtEiNMJ0fkq%2FQ5pbYxO5SuuyAXNrgPKt4IZ5mImT0Xl2XmjtBY%2FRq%2BGfNLqOWK94ekY4Z9bpRIjZ%2BlauclXrOn4oQ6kqY8Z1AUYG7OUlG%2F6Fy34e6Pi3lcDKENrddUdKPOAxViDQRiljLXAxGEUqAlG%2Fm9RZSfomYjl1vs%2BU5kp4hVbqhg52nw1KGe5w7ZYyIgu%2B5ed5U1m086p8SA5dE9HS&X-Amz-Signature=a0484182675e3fbc5c5c9a5d6c98893d779db54ba72f00193c336913ce6d0978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

