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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X76O5ORO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtXf0q7t9k6400yI9ytL%2FK754ZRYpJfG9PQrgKhPj7bwIhAMDXq8myuzg3eiObSN7EnVWizwjy%2FJQvB3%2BfIOUXTr06KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQq%2FxmysWQfqXFd50q3ANCumjKDTbUSt7IZwZqBB3scAdFHoWWfMQUD91UZYwoAlqhBEkf6S1OkMBJ9KPJaQgU99Duv0OSIWYtOGd1sIzoNI6DmYwKkVOVBvBdzYc9CHZo5Bmk3R2NA86LPYgRUwV7RH0wbGwo30OKBiYLwGiDL5%2BTVliDeIrYlg66nzLgCL4rpSgHkmd3hsvtNVPuWEp7YRNGxZon%2BMvE9Sex%2BbpoB10E%2FkWfvOj%2B2p3dw1ewA3jaz4unttQWkNZvhuOPKkZvxLiz%2Fi2VkpSbRHgzc7EiTQa2tDlbZ2%2FIr3XhAHx%2FLg2TXaEvwnVaXg9cf2c1g14aWEx7ERHBXAZsm97nTkNIQ1KCTBPKkmY3I%2B5Ig5FLsuAf7vUENDYgASgYWz7HOeNzOzpDFh1VtlBvmfZD7Q2P1igFYxO9ngsYoWKbmggszINKIXR2u7W2obHj0o3C2Tpm1msGTO6CGaE%2BPd7BD%2BOmwb0tsYfSWaUPlu9J6ZNQG7gyHpJj6bHymhF0BS8LYjzWPOnJ9Z0L1K361ddGcRDfkCg7RTSRjSqBkb4VS9KMlWiW2dKPK8z5%2F4zsNAryKxK3s2w%2FpiWLd7xcfZiz8YNEhYZ3TJt6Rp1J67BPImlnnpfzhkfby6%2BYEeJUGDC47tnJBjqkAbKMhB5hlxaXFuXSucqo7F1ywXiFbPSn8lYeIyXFliUoybqrMj2QeDf2dSQdGY5WMEDaOdrP1CLLym7d%2F3g5AwP2CJpRgWoEHTSDuRW7PsVb18lEg2xwUCgxDZm7aBMKv1J2DsIqqaFq%2B2UDLyQKwzuolaykrveZUZ79njNUXrgj0S9GVmPeFtJAklUPeE0n%2FLqQAJA7JUt1t9%2FNAWMVCZi4k%2F%2FH&X-Amz-Signature=92737296bab02d4008f1d36b0ee2ea147c89022f37c470de7221e4d9b6b69e13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

