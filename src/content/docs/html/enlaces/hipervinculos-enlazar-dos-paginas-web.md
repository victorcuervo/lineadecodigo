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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E44P2KZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDt%2BcIXTDQgjR2OWrKbd7upHNZgnfMnnXmc%2BFHnUIgYywIhANZhf%2BRapLJjciSXqNu%2B%2F9VkRI%2F7Wj4HHV3Jrs8UxsLDKv8DCD0QABoMNjM3NDIzMTgzODA1IgzpDAtkr%2FXV81KEbdQq3AMCydrS%2FeKZ2r3xA09xUl2hXnU7Ns4QAIWoV6C%2BLDYE%2FXAYkJdY4bsdTvClT1vBgcucEi%2FZ6ntu2UAHpNqX5%2FgeAy8fNQrWXSd5DvfOkf1E%2BHXbbWHK80JUaadHaTWgPjN4w4cuxB0v1i48NBp49VGdPQVAUYsM%2FNc%2FKh11SC%2Fmd4Y3sxenTbS01PDFLzxH8J77gFdLHPxw1yy3LsSwgPvgZVP4KsF36dHlu3Z4j4dhBSVXPKIzI92D%2Fkvs2M3%2F8qcXu3iJBkohfbzBpV0uvjlClNAfGZsWiLaKiQck9zQF9pzLEZEVDxHVVVfQ5HDuPCTqaMK5JLZgo7jU8SEasaIEdaA47hr4K0XLtSQCga6%2FcwztDeiP91jVx4s1qae5tosiS%2FOmB6rh%2BoN5dgGpCUhCjZCpjARz7F6FXMQqRAGbTNfE4%2BPbzREI5qtXDpEBCGsYSmVd8JSatymJ9OPaOMSe2bEKsJV%2BzNkR6zGRrqAWGznrFSpRDdt50oyax4anOxUF0xTFs6amWav14CmnxmJ0lZayEUZAUFqkeQruA4YYuUpKd6qHdOHm9Lar3UbERM1JzYuPRIXuAvMVAaRtlPg4181pvJyZM9JyrGlDG01tnDUA3WkEeLebcr6MBDCXkcTJBjqkAUC1nRd%2BP34VQ3cq9%2Br0Aasa4fynsumYDF0I0jkU4odFH6kiKDnTePJ5ChLhgcIj4PiIOLRNaSDGpUe6%2F4%2FRcvxEep4SfuEIwHmQ7qLBssZxTgTQaQuIsXuaAzLTSZkF63yl2Kh98MkPqofj7yegpnAk7mWNM0rAjv6p3oPv9s1O1IivN8ZlNbdDpJY4ZZmlrpsrHxzjMao9sEqwHFQphFkfcTrO&X-Amz-Signature=6acc0a4674bbc668f932db4d392fcc7659581eae9c2289888276e1f629c2a78a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

