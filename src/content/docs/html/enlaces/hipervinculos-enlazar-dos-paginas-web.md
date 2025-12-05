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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IA7QYVM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASqs39zyte1RzKinW7vQ%2FYbTeExYTLvc7s0SxVqYg9VAiEAj9qcxZWagcSc5ke5HvB36%2Bg1Y0zy4IvCTIPHkKJQeEQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJrPyOX87xUT6JWRNSrcA7wVHp7soChADDLJ2Y539rj7bG9y7Emckf5gKDWMkzTIuKbY5HoA2R7vgvyBDD1xXaseWMqawjTqxHJ7X35um7P9xKtVKLWMmektXL281WTld6m0u8k%2Fnq%2Bf8cGTPLeRZcsz%2BfvVp5dqOy3nX%2BWeu7g7Q%2BXdbfXbMxh%2F6wuImWXh%2BEALTN3cINRCAb93pIcYRxKqyaTfcSDmzVD3fDWAq0hGBETE001Nghr14JEhJ0wKs2NFQ3CMl6wPzIcUttVVwCxYCPcN5tF7ijxgUWpiuP6cOX428Qld2hqIKA7lGYfKHhPYSOR9QU4KtiRXN2NYVgkCKHNiL7jz75s9Ed5EoVAJ4lc9zjdzgdRVHxSsAC31SdOx2KpVO3J%2Fu1reWGBkaJcMp9Lnl%2FZ%2BWedwTzO0ILOLztGug9jsV%2F28fuQRD4aOxtXT3l4hdlo6Vg%2B03K%2Fw5DXpB2dj1Wbi7wLX3lyVJoIcFlqqLlhqXobtb%2BVUDqlbjUT0TbK3ly86IPuChMq6c31S3O8GfSBJIChjfDfdxUM4FzXA1dPTTZvSM%2FTaOaeAx6AMtOJ2wxHjrJXu2uCmNv285rrvxmWC%2ByJbIh2i%2F%2FbcgwfMXHwQ5mHnwf23vPJsVwucHmR4GPJ%2FUsovMOOtyckGOqUBMkbLQ0z3%2F26CbmxCwgaNkFeJrnmgbdrEDNwUmd0SOHmmdBq1jgVdoBRyQUOueqnjgJE77J8dvn4Y3r%2BuYFrd1fFt0cDnm0l%2FfzMGcmqmxq%2Fqtg6SGUHHPvrh%2BxgsGNa%2FjsFQ1gOuE%2Bwv69lz%2BD%2FbtJY4tgRECsBSDeuCPSwnzAicyEDIfqeCjQ14mgI4%2BrPOyG5iRFOWRx0JJ09k9kOqIKVzulOM&X-Amz-Signature=fce8e28ad8723900d12325eb3084e392ee09ee2dc92f00c5976cbd75c150daf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

