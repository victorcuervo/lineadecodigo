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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YRKF4WR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T061204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBiuj63bp%2BSFJNQDns3h8TT6VCqMoLwXK8pt%2F2%2Bg0cK2AiApAFZRT8f%2FMqLt3LuATa3AOMoZ%2Fmko27vUTMtN5NgE6CqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjbrBbESOMaIhoWn2KtwDfqYDY40biKmdOUhmCH4hQKuUKwpJIP4M6Znk3propsbdvWKcYyvWsuBqgs8Ph1HxFxzqqp0Neiw7t8SC46N67WQP7xOydTF7XzontM%2FnX%2FItVMOwBbJxWZuTad9byZWsoDVaqWG7hQ%2BGSARIe%2F%2BBWdwel1HXWoslcw9QDpsjkCK6dhSHxGZSj7YLS0an9bmKOVDbZJK0WV5K0IcvM0RyiOf%2BJdcItUhF2B85%2Fc%2BrB4rjcp9mlWrylzTDuqok36E8AOtp1eO1U6WK%2FZrIQpvT0KBycZEiRtDOG7rCLml3KhcGqqfUlZf6ZxGWFKyUnRkIIiQAprqnVYxqWd%2B7cg89LlIWxr7e%2BFcGG3cRI0MfIEPaPghIbNn%2B0J7MZUdJ9%2FpJtE2HNpg92uw73%2BwmO3liQyyHb6MvkQiwy6ERIE5ItMG6RuYsyUvPHcFATuKrfZKDWCa29uxqismpmElu4LfRioH81XR6o5kRDR0t5PaybuR9XEYvFjv38JBY7LinnI20I9IhcbDTkp%2FLcOyhDSn4vLJR9qvAsI1lwNyB7fWB3aA7iVmP7MwzejO5gbsJBLIkWs5dP3%2FSxI%2BU%2BfUhfNOKABJihyJNvXB2HmmGnp%2B2MtVh%2B3oazzvUgsTccZgw45rUyQY6pgEsIPrh%2FJEsU0WlOKQfncHPG2DElpLici55znJiYCDU9yZ%2FsB%2FSAQ1zKo7bGkzhFH8pKUgi%2Bsb0XgXNAAIAIxYrqKxRbIlv%2FAjSgH7nXqPhWJEFbw3cgladHgW6QATaJVM2rQ1VOR%2FKH5SXoW7HrH66qp5XJWjfhMmkWOv%2BdDvdvySYperZEnd5miFgj3aiunVw6%2FVXACUK9y%2FykKyOx0VLhjmAcRoB&X-Amz-Signature=1ef1d19676eca57a9d5e88bc81898a10ed33f77c896719c311d3a9410f1592d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

