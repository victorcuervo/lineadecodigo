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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY45XZCG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBorx43bR2BCsLYf9PglFj6w6PbgF2eKhDAkTdkzHkzXAiBV7Gl01lxl5wdfiqINU3jKjLoS%2FxHNoBksrw6mUTsLzyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMgm1ommSMsiuhBLNnKtwDqNSjvBITq7J8fqwtTnJGl7CN5%2BXQrsoByHfpy2KdM%2F%2BWwwRVAv7BgLYZV4ffUJlI%2F6kVARRL%2Bzi7SvXRD%2FXHxiO8VbsaiweP9a8xoH8IapkQbuFcGRet7v9Rr4JUKLIDwc2t0d83ehJ9vI1SY87J9luxe0tm3N4uiT%2FXPqSYH%2BfT6iO%2BSS%2BcxNHdGrVMYjeXUj%2BhDIessi1HrMz6fwHRyps6tTkF4fy9KDVtGydTOO3NgeuPQ85wDMoFy1wGQsjgpnxTKjLw3wTveMFUzxmWB5gRBz1t2r1lnplsW%2ByZBoltr%2BUed22vtew%2FIJsNBWcOt5skrQS2%2BZsVnGxTZ0M98QAIPZqqTtz2xTHx4Zup6hPGZK4uXreMmp3WiFAkPIW69xoQMQRPj4iq7r5clAJBwKy9SRo7qGDm94b57AobH7msT2hUHUTTNLmZYH2ZvJV0efnpWSOAAyHBNqJAZdT5cppwEJPvZZrlsdF5AcSlq2gJJdpM3rwYxYJybF6qqMOSALU6JcL9UQ3x9t2%2BOkojA7KNzB84aSsCL%2FQRnshfPDN7OCLZsOM1DfRV5pJMpsG5ttUg%2B3Rp7JEofwBEZXUBQFj7NPpkHGDqRfaluIK53KtrXjcTnAvb1Waull0wj6fQyQY6pgGh523GS7nAnUy9KSRRm778FmaGLvCA4PZgTzzDVjQL6kcspIamGkKb5MTmb%2F4nRJmY911DXMo8XsmIl51Irl%2F932kPQbotbF1LYJttFKFYMITU8JX5KfdEVChV83XAI8yxjxYf2uSrPOKN7TUMzG64YYXeE3O9yQjLc6rNqZo9zAoemgfZhlyb3nRv%2Fp4UhKh8dW0GYiw060VwxReS7NoNl4vjsXpM&X-Amz-Signature=d5fdb80f7581b96e68afe37a83bebbcb446a54830828cd88e5d135bdb682a491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

