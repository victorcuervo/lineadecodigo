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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DXAKN4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDESSQfrCjsczKr9N3Mxr45gLM5R8CFbGS%2FDJ0mO15GyAIgMxyvYDaMgvCjjClpfoh7bvCBjd17x97xuVGu1A%2B6t4kq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPKOn4t3cteru4agjircA666knxNhzzJdGfiJYkNIJTn0RsMtsj3ROx8S%2BbN3i3ymKz1Ez3Vj1%2BmkUmyjCGBAACcnhyVxAQ%2FaCxHnnbg%2Bgy9RPUySYZfjHoxlXuZIiK6sgrmLE9Q1%2FKZEd8YKFeYR4OksK1yaxgyuUy66hyeXrqJsKSBrXzUnbkpYOA0ireF5jkj588p0nIf3bxLpFoB8rs6tLAruuC1nrQZMKg2jhmqrGIlOjqB0c8vICUynUJpUwWpXi5G1j8uoiUHVLP5RiPFYq9xhxtNi1NOO4KGFgTVtOgB4simpeJxQtjYxJ80Ers4ndcU6MgWv%2B6MfPwl32M4Dpsk%2Brrv%2BsUVfucnm8dzRqgLyMF3ZcK3ZFPE16a4Sj890tgHLKyhnMq1kHLbhKOL7T%2BYgtrrzOjZXsBYmMq0ttKP9r0CiNP%2B6kzPRphyG34kWL5jlTCR7NuEG1KiQ1lZ%2B9GEDLGsXzLzWvLD9uogEPI8eeSIDThyJCHOh62KpgEGkx%2FU7xmFILRtIEJoSwMiSjLfUG%2FePQsBfCcXAkvkcbV4MOmGmCKgnfyIZcx7tBX2%2BSFXeNw0QprHltw6zb9Rweari8TDbGD4U6s7JtoAscoI8qVm4VdSCejbbsNd6YLrCkLzsWZRw6oYMK%2F2y8kGOqUBK%2B0nF3IFnRnFNh1yO%2B2NDQ64VrE02B5r6A02O6q9a1C9c2dceW48hGGsCmkLHeW%2FvEp3fQEEAhr3flPVTL23Pk2unwJxLq7npnEwcHYUMooRAY8XVB5nttLXqFgvniVOj0LX%2BYA6nM11K0pUev9x4Jh4ELiKdrIxO6x6pNnwUftKVnYNu5O3QL4HBes%2FPfkcJWU95A0idv8pq1W7Z%2BUVS5XXpEQR&X-Amz-Signature=72b4f13d9ef0b8e6f3cda5d0d68d6f479920cd022ab2f2c3699d838516c9b036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

