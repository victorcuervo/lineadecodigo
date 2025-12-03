---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626JTLNSP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIHO%2BQtyPIYcd5awBjGAieFgIj%2BIefotUncO8OtrmqAoIAiBx5G58sS3cdyJAUdjFCKG%2F86UP2bxJPU1w8J36UGJxjyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMZ7pbPdf3xTZEfWb5KtwDaasc5jWiU13G1E3Qha7ec3R3EFoZ3N91ElF%2FiwGqpPUZASmDQ%2F848QE6FQlQBByz%2F9X4NmmqzAmrAW1bhkHiqgVIqhPcTHJTVqpFTerxUCzJA%2B%2B1uyXW0yUk4CyavVOfqN2ovNe3hEkVehjAx%2FGlwZvYh7RQB3rVYFQwQ0wtp35sxBEp%2FiCdkwS1Hd%2Bzshodq4YB2vKzRkAijaljq8ViuAwY45XJjSKSnzam7xTt4zbuelQRclfvBGvV213o%2FK2a5U8r%2FYjJmUJjghA3G6I6DNNeml7CQcB5t3XjvVbA2JtWwjFsroxjmrdCezC1ixIkX%2BCDezbFZyRWdBaQgAZ%2B5ST9sPxiHlmX4uEwF8iZEq%2Fe%2FcBCl%2FHc6AU1EMFdJtlO2Y80GPjbgK5JSJVzO4u1y%2Bx%2B9D6Oe5OA8qMZKwH1dCe4GokaITuNIbYsSYVu1na0Stf2FL5H%2BWO6KExyUuY2EUsESiJglF4WcGQQaPg5OTcP8VT1tJ0WMy6LwBOwXqh1PE%2FIWXbjQ%2Bx65w52VowrazAfsnH9cg9VwWZOU93rkwZVOMq3hDtddxg6Vun1KfBLfFE6K0CFUz7aCC5NOvx1q5JVpvt%2BU1U0fVDWUr55tz7PyN%2BNlqHXHv68lx8w5L3CyQY6pgHGn7nOusCbqfdbeIjlSCHreZ%2FJwLoj%2Bcpx8hMsOIjxGqhmjGEnJkwyorQmesvunA%2FCOx2ym4zWIhkxoOqnW9HHQgkB7ho7r%2F5aHcoAauaoheIUrGIGjXPUVZUZrrkP8egFd2GuMy96PLFyGiiQELjpNsBIfx7%2BWts%2FXV9WKFmuisiDg0RUx3neMO79iGBglpaZy6QOz6vc5DgPrrlsI%2BZCqrk4Cbid&X-Amz-Signature=9f02a607b2b875c1b099e37675b0625a27dee2c2441605dface5111941ceeaed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

