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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2GI6N6I%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhqySDQzZrOR9h4quCGweQsIxTKipkW2S6ztiv4Jyt0gIhAP5MpEDBJqpb5Qgm9hDmEjmTJhEw1TQV%2BKYm09%2FSXmUqKv8DCFUQABoMNjM3NDIzMTgzODA1IgwtMsribvW2Artg0Ckq3APrloLPTl69NzZOj2oAY4BSl%2FtVrC%2Bp4J0ALhzJfJnio%2FyW9%2Fs236hTZ2o7kDYxqigC1eZXcBeb9OaV%2FU2zZbEb0EME76ljzZLkD0CI2HRucKXQrcNEKRnwXwGBusmCSK5xpKSorb7c%2BgEXvuJ6u%2B0SVr9yIEdJpR7%2FKsv9Y1Qs%2B1HonTcbNyAd9QfHKjYP%2FIcLKq9tMmUH5BYaCBDH4PrhwTXccIV94GvGVP4v%2BhM7lMt7j8X5s4AfjqWWGikykufOqlzLMlJt7o5cBVHGIaKOiGYaCQWDqYCOz9KWhdvu%2Fm2TJ0hqvSEcEp7dL1vljxy4ZlUDsil8fxIeEdrXwY4llC5OTqI5xrvybsCfzucpLXd91IoAPcsbgMifzYTLLu9HteHcCpnTj3SGTqtCo24dn8QL9SiLsetIE28BeEIUXGLZBRwB5MM%2BbN35oPu4831VRI%2B0S9X7W1P3yVWUBKgKQS5A%2F7eNVi3vUIRuuwxlqQjhlBi0EBDdboJ%2FAKdsY%2FAp8HR1V1pAeQtUZ2oOsQKFORnNNE4vsUQM0nUHVhiGMZKOKILPjjw64f3y2l26zzhqSMou%2F5DxPj5OgTwedDofi7CTeVTglUOKXBXywEJ5U%2B4Au%2FRDoKzOFfJmizDUssnJBjqkAcqfkCjs8w4%2FtnWiA8MQ1FcwoRXyGFr89jTkLdWcjIg1fBCJPy59hMY8Fuyb7kCJ5Oe0fSNH9BMaVaqK6SFrbrZQEyZkz0wgRWSVXHxJT59QKH9NeYSS8tSZ6TLEsSHL48OT29P%2FgLqeSmH57uO%2B2T1I4JzLwn9Ts44dgj5SuNIUdM6DHvV8iY8m0Mf5GAk%2BLRgtklCganaAz%2FjxTRsTZJioeCcj&X-Amz-Signature=8b1e1429c1fdc9d42cc220b8def763b9d98f3099b1e814152f4eaffc51317456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

