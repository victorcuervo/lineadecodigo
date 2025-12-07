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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2EQP6AP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyld8PXShU5sQCFLElptgawJ9LYX4lEAxW4kbZZsiIUAiBVKzkBaQWFRIHdA98FNYTyh%2B0vzpsEhkSlbFcpJv54RCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNMIwshmljSfdgbb6KtwDkORPCHra%2FmO9KsjQkvGUINLzeT2q5W2C8R%2BYbviwJCaBmU4UCOTOZy8WluwTYHLKsELu88miWS9MilPkJvcp3HGMfBMjPO89%2Bvg6x4dDk0Mxw8XnlGLrxxJ3hNRwdpYHxBIvA7OAFygsq0frTawHLTteTYdPmkqgdoCsgirMPDmnttNNtQxMtm2N70rF%2FbdWRlUO%2FBrOMczcyDzpgC7ACeHtfc%2F%2BHCwjKXrmsotCpJ1kBvOeuvM0hMEb7%2BQBQJZ%2FG2lxsewu7YqkHJ2D7EZWO3j7OTL4k5Jlqlk7MrIWJ%2Bfzfz4BDKenqy5XXWrdDpxXDXAiA9%2F7Hhlfj8F9pHm89y%2B6U9s7x3EZB6wWNIVyA9G1Hagelhw9f8X2lPkpDEk3KQLYywEP5RoK3tUkNbQyjFJM0XqbhHvdM6ZSAqfOwybz0OeQ6cV3mQSujhdNgnqx31VcbH%2FaujqVM0Q9WkbljP0hGwTJ56S1JXbQWzSDDlK50TYZep7NTNbFSrHw894Zv3nO51x9YLYHVrrg5hlENkA%2BpCt3dhe22L3T4GbCopqcvB%2BQFZEy8nwFgHVCAUpGlrJv8%2FKiRJAznEZ2OsemDYC58A0gZlJJyKWnOinGwKIhm%2FntfO6gcl%2B8BgEwipzUyQY6pgFmWdXQnfjNaHgVYgJO56qO%2Fo5begXWhLsoJLG9radvqeFBoUmgKlYslo4B1SKcpJn5NTB2o1WPV1zumwWZ4P%2FHoQW8Br7rhGCnieDCjGlsOfmjbBvU9SIzf4Lr%2BTbgSVO34nsuLim1C9DWPIll7K4ckVsCEADbjxlV%2F0o%2BA4zQ6S8otQS1PJooOZ2rdhvjJLr0XlF1HPR6EAOHbi%2FdioeX9hU78OJf&X-Amz-Signature=ddf086a24c832546d20a0dc963900c9d2128044395465641411e0e97f5327ceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

