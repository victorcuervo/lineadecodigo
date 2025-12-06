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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EBFUMTG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjMO%2B8%2FuPfWhQuBGGghXyOnhuw1GBkAO0QPQNJ1xwIoAIgbYYqAGGO3ktjw91QFOPJYVpmrTorL5jPugvmDVSxVj8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDG7gUFEzlgSXuFoeDircAzmrZetfx8i4zo1oEY6E%2FtuEBa6dAcer5eb4vIj01AjEeRP8npYGC2Tq0MET3llmNjlLQRiKONqln4ruxox2BaKJ9dy%2B7jNvFwTSCZjF5%2Bu9IyIqU4i2gEIIt0%2FPAEp2r%2Fk6R%2FLsBU5HBx668a2QiZjMpelzi2oldBf0i4IHVA9n%2Bx%2BvteKa0xbaLJ41vOa4wuKWsrZbZc2eM0puP7OgmlyDaQ8J30slSD%2FuqK%2BjSNHYDpvaIou%2BuNgW2euz8R8YlmnuhaoLUUI%2FtkhEdJvvP7i6S36QWjMb5VbATe%2FbTig4RGyCJDe8qgSAQBzrJEnB3XInKJWYr0nbpw2QiJBLe1240IF5V5nc1wYVWrydyUoDiNAJHCdBAKDGdxdknjVKMAkaChxX8CWSeTmF%2FoAnwDa%2BTovgB7HCUuuiH7%2BxkMJrSy9GbwUw4gdLdU81bIkH8yKK%2F0d205cJKCLo2cKIyd0GRXIPysSMsbpBBrqEyFup0ySxPT9irvQdpb%2BwUJdB5ZIubq4qhUWry4odUiygNUMcv9jvzMGeq5pKpAbq2bhLHnkge%2F%2Bz5UzctXmmJ6ersyFocBiomTR7aOd55gQnkOlsHBTjcNyZ%2BursiaZ4%2B0ISn9LXmYyDilg9lTPwMMi8z8kGOqUB4NwE7SnjGBi5blsXUNsZgZWFzFlIrDkZH5k2wDmwYBuMlPsGvNT6OfuYXC0njo0P2UE14mq0Fb3xPNNy8rGn6e9WNtjjC2JfVacQvHtRZ11CPRKC9Ab7ZfDIehhw35hADgm4wjgonQBxkonOGhEzka2NZkT8Erp9dQDOrD5fH0qNOT6c5h%2BGZSLqTCygcIyS133T19pY%2FgyWD1F5tbyzf13Aamq2&X-Amz-Signature=9f104dbfbda0b621db9d6f4599ff743184d7e257ef248bf5ac6b3fd68a19ffa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

