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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXD2XQHJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHlJ8v0ar15vHqZJdbOkE%2BzUPj%2FvcEJUoMHL1Ynqk6mAiEA09mUvWLREE4W6R1M%2FsdbECYK0HQpySMQB3gciEcGi9Iq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMhoqlZEQ8%2Fhx5mPiCrcAwsLD%2BjokvtSPYdksvggIER%2Ft61OWLT%2Bo2A2yNlq7%2F6njQavGccWoxCZJYPR62kz52%2B3a76Mg9RTTLMZnHG7pZcd4c98fRUtl45c05XuWsz8jhWibgEQfi1cDS2CUfrru282ebgBYd8B317CnBPtIn2XWrowTIdw6YEDAMgg%2BUj%2F8mzS02FRCR0aKAfxa%2B6YRWYbpqrQC52bPbJT6xvZTAhTSOktfzzOUYA%2FVFrMzDS1s5cxPS3a%2B79CXg485ybX4zMZkoOvMy%2BaAw7PFJhF7D7pt1JHg3DN6o3oEF33%2FV6wZaqSQB%2BxVvkaiFcHB00UHyfelGrabMlWEnRYbRoPvhHgAqYVDa5%2FVfJLNkiKkvtxA%2BFjG1XFgNNbmpdemwsiLB2VdoFh9sAceRgjKn00LpjzlXaE7MFeWZRO14md2Zm9J7LWreZ%2BRQzqg5Pt3uy2r5eIob970EKTEXL5ux8rVv2EblapSJI8mU%2BOe%2BHa%2B%2Bg79Dw96lyksn0VdCJn08kiSsigWBeNjtomYHxIIiJ1nSpCLCXoIYAerhlWtSz%2BMdh6Iqyow9dQFLsGFHrrWT8b8T7QSMzHvjtvwEGlFF7GK3wJa5%2FFe3sWgF22XqnsjmyVWgsrqGgOcqkkVn2bMP6LyMkGOqUBOHaw59qsBcMjAwMAJtafpnmgz%2BsttLpSVg94QMyns2KfMSTpcVc22MhlKKch2ymACw%2B6jAQdYHNvUCkyhTn1CsZeLN2GI567T2Yjgzqrfpi4qs08Qarcd1ACdNlcbJDkD9WJrfCC3QeieZPqolcl9KViVFgfJwhK52Oljfg5TpGstoNobR6Nw8UN5isrMzX%2B2UB6hJrAdMIpWuO9aAVASU9BihBP&X-Amz-Signature=9a58e813e18e968fa4ef403b87693de9673e6201624e3448bcaa3b901479fa8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

