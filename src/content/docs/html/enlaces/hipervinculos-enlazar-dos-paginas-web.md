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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5NVOPIS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T183451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BXMfkXiH6IqwN%2BPCqZMCoIIJsY2aNLELoOJKcphES4AiAO6R%2BSkaYyD8rvI2S69aWs0gvDhTHLA8wueUrlta6ASyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWg8utUsLz3epdREtKtwDZncVb0kVoj3rG4ThwU2xUQRkocEF86CrPDx0N8ipCarAHtrSDarDn5MXXAt6G%2BQjujrAeWxwXpJZsIGQmLzHjE6VgtAwUN2JELJFLnksL9bBnEqqfHQHsp6OqnaO6xCSFDKDcOht3d%2B3PddnPiUsLrM96lEoaqS4I4nfcyqwudqLvbKVwd8%2Bb2lNeu62W66j6dY14z99%2F7pEz0BH0oGblrljG%2F9LbL%2BZOws%2BUDjVHPnYXc8ny12Ncm6%2FrS9DF16NwaRyACWJR2UIsF19VppByV%2FSrWjgMpi7nUcfE3joPHZTcwhGbDZxDmC8MRoQrPFi1F47TlqCalpsVnKS%2Bv5y%2F70GkexGyycEDWSjMdXv580sgWNtvGiIhxYcOsSiCCeRHv%2Bd8Da6XpZwS0rOQo4dd9zheYHo7BoxJJkKQyS%2B2sD4h57hRUKmnvtOQOizhY9Q9uXli0zu5PCYtGmcl8t1iL%2Frjwle9%2BYDLFJGJHoCFb3lxuPZL76WFjX9cya%2Buq9a%2B%2FvfovhuWauObUu4eXpa4aeqR5GRoRdAN61EAkmzRqt912409UXbmSw0wsOgzjhb%2BOZd8XirtAbkR%2FGV5H5O1%2BI3Bl0F3%2Fd1vPq3QjjN2nRoVwQgLa3ujGtdBxkwjr3hyQY6pgHcnMmctZKtqAcCjYu5xWr%2F0xXpfzVqrxKZfeb8BmC8mo%2BbkLXVXXGpDlO9rSzZHFTaWTGJbMshQdAyBXzQpoDe%2FqrxaNrMJSDHZTAugGcvGwE%2BzYu6xzaM93JIPzWFVCR5NwGhafvQuOTWDJEIklZoreToxZ0VZOk%2BNx3eZ3J4OL5e8YqilA%2FzkFciwbUds6XbmYX2XIwZ9zeD7zFsqEZ%2FM7aAsK7M&X-Amz-Signature=5445174903c1aff8d68f87ed8f242789992de0f1f9fceede9d4ae46191777053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

