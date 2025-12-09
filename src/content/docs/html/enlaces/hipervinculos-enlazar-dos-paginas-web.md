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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMYK62XJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2k6H%2FgnCMpQJFAwndQN%2F6t2YKHjBtlIvZ5fRrgiI46AiAwt39beBYLEZR4nLfbPkeBs5%2B%2Bk1oj9GHakv%2FgyYOLpyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUA4QqYD%2BRXdsZRWQKtwDIS60ac81DBDZTD02P7kKj8s2iHl8%2FA9SGqvf6eaB2dxOU9PXLD%2Bc1oZPRyRvhaFT7Zh9ptkyUXXnxDeS2yqKq06F6XKPSDG%2FSNBOnUb4Q9O6doLcIOuJLJgH%2BKpb%2FL0mX7a4U1seWiT0PVs56KZk%2BotaBhuKSVlozuOigh4Wrvun4F17G4QtEnFwjLne3NaiyzDUA8EvLjtac38vVT8uKFHeCDpxewYSGyk2oWpw0MvbqD%2B8YvZOZT8ys7jFkM0kcPTy%2BJaY8XUaOJZIAJtLQlWD7KkJ4Xdwf%2FbvpxBfWIRw8%2FtYrAggV5A4XtYp%2FYyXTFyOKp7LHu1ALsl8OYvivZcIFzYjOQ0mTdVgC8nkh0BGCRzuJ0okOPPWpmomeoYfyppDaBGcxBq4s%2Brvn%2B1NlPnlrnuJEZJO2wtfNfDJpUFPQTSGe%2BDCs9EKwJJ7rn7uZfoqaB7FnNzIi%2BnsCQNOxrpDPJBjYrvn%2BhgwhRNqtEF1j%2FmsX9tOxhYo%2Bcv%2But%2FTXVZ5c%2FgxkZVl8a2O5xXFMVzcM4LeVfFYCddOrumrZy3z2o4EnfgVXQi0y3pl%2FHOo4pz9McKP%2F3zExs2E40sn4gNJDR14u%2F6JARJjh34wsn6jNKC1Y%2F%2Fua%2FtIuAUwh8PdyQY6pgEn5ZuC2uMOVlKijp0I5bxs3u19%2BGjolmLAm5Wz1OjElhbeBZmgTK7w8W6Yv03SU8Q3YEoSkye2CL0ZP0%2BAdmrre6pXFlFmwSNsWdkgflnFXiTKShjCvmjRsGWK%2BxgChqsMulfmKWymJmW2CI%2BMDMkElGXudaPg6GUVMNe30Mc0Q0X7nQLurD5s2zYxEEag5DULtxohYaNtVwiuHfsfofGgMFan5qnm&X-Amz-Signature=b9f0db93ef40a41c1f6ba49a28e0222c1d6427cf8146f7ff39e9622add1b65db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

