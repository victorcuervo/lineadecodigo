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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW7TU7PM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCt1FjH3mLbPgS8FZWPpu90NMWZyuNpWr%2ByE7IKDv1AzwIhAMEBsWf1XAKwSF4C%2F7Pn1MfmEH1QYrsIVaAwAEWqnAMTKv8DCEQQABoMNjM3NDIzMTgzODA1Igxo5maJ3eVpcSZQAZAq3ANlC8xPgJ6Q4vfl3xo7La0zUbV5%2F9QDIRlIYZJpne7tt6nVEl1lrjDR0t2nsgTXl2VbmV5OkB7I8eSeo3zfU9zk4tOGkO12sA65%2FPB98TMbKEVH8h3JDUtuvM3QGcHoZIJBLjmxolgs9D57lOqpPFgaXRt81lu6ky39MTLpeix8f6HvZS1t%2FBH89zVtAWBxHZ4h9BOXJLJexWDPOOxNkIrm0mzt00Ywtc4yxyT0gDno%2BKnsYJKVA4CRuk4yjIPN7UdVsPR2Lkx8KWyRUUo%2BDhLhWNL5XcIA4QuwikZw9WtbUv1WpvQE0PZGLrnndJEqmzdJ9sgXk%2Bke6kEVAid%2FB77tWFZVVTDoyYrCZgYMxdTqZ%2F6SClIr7HNPCK5%2FB4lLkQE%2F60Ks3U8iJS6UiNRkUhJTf90%2FMAhmbsvResLurCyB7hMK4AQrxuIeajSSQKxyHLx6kyMdwlFaBJAN2xpqimu2Uu3LJSHeyFiyhYMgLEX9odro9pUvR0f62h1s2ZT2BPkDb0%2FEM%2FBJDQthitU7Hgus5K7FFyCUQ2UbEL05J54hvlGhwRAcf6K9VuSpadW8SXFgjiQeZAYXFMn4f3NiiUkyr5dkmf%2Fvu7CynVcHLxNyv3W81DTyohx7e1r%2FMjD5ysXJBjqkAco8v%2BEKScLIhjuqZhgyuaT2r1MbbyFNsaukcBj5RRnJI0y19h7FmRuot8zHLXf%2BiJ86OPkKMq8ddlnGrctoIKufTw9fNJzCIu6sIAhZEua2ahz4NvBJyCVJ1Kt3iVe1m0t0lneVzPxLCI79Q6uO9kdkG8ieuG2HB4%2FqoIcZztrFcQ19KxmG0SlaR0oxCxL%2BvuB87yDNp6wyQ9ISDY4TSFZ4qFqF&X-Amz-Signature=7884a979eb1f6b98a1065c3d5af196142a2df970a196bad43fe1701db0e70657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

