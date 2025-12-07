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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWKHPHB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqP3h4IRRvWFgUcJS%2B04JYAbuHtUPiGFkEbyuwvdpZUgIhAN6juFaN13I00UcOHbDHXe6BZnpNruuSncJwU5GjgfUXKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzftAmoxb%2FsmA5oMB4q3ANliYcpL20bNKHf8qRuf8O9WtTYEkTVj%2BDROWaW0pY%2ByQ86dQ1L58wHEQ9GJmWoQB0lLqmifr01FJcC1AwAcTePWvYQ5%2FnYbOaAyEeQiy%2FimZFg0TbBaVOIXZYPo2HRji0osmXOgwLxnMQ4oGEmendgzKC9vd6baWYyAtIMEm8mo9VjmKJjhRiVv%2BF0ySzNztw1AxUHYKRij0JPfNThHEOXvJE%2FZuY1nTCr8q4f2z343g9oqFwedv88r%2F6cnBt7mi1S%2BIr7EXF9X6LrWew%2Bt0Ivd%2FtaAix53qrR9Ie6r2wOw21y2Ao5J0bhXUKmUjEM2MOlpsdc8j%2BxIrW2gBnrka6WgBS5DPOV48xxJFn4%2BaLVQMHcvTZz5HXUDc%2FYD0lWMTrYaMROOtuhDTb%2FOl6wtfCHE0EjAws1w9Laz2zciGtOC6o8JvawgjogclK3IhLA7kpT7sEAjskUYC4wjdt2nCJmm33CajqBtAQhVCHaS8zMsXDksFp3kyCyOf5FrdBX3RJS%2F7Tb7XDN9C07jaqv%2FLIS43UB2VX0BlYZpnKJc2cUULuBKIKhAcuEZiw67xXM0KvJYwYJMFuz2d6xcFTjjaxOKqg6473Zgy0bQ5Y3tLaHOp4aKCqxxyBbXS18XTDy%2FdLJBjqkAca1NqyI%2B3SG5sJlW1ZhsoMhcRtn0FrRstZcB9uvY4cpmx6Ob3bmwQFnYAQDByYYE42l7cQdg0XCNV6xFUvi0fWq2q%2FYPWtj5%2BAmyps0KQwgen2EgXGp79vEAerSQbkf%2BwpRpFCjp5kmhW8GpleldYXD3qpFX3423IePecVLjg7dv8SyuAa6Xy2Jh85KNdcgbByy3wa3PIG5wrcS2Kge3cNipy8W&X-Amz-Signature=5f3c37bc11479a8f4b12124b22e0612578d42add2c5a995a3b992ba9beae51f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

