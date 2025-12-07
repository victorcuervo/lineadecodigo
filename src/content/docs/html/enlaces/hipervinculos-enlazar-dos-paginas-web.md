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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNMHVZJR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDT9qBt6D8d8gvuuMSKVh6epUZh1QvtA7gOoOnQsB1t9AiEAx18QWIIxICJEkUES4MYUsxt15xmpkSUxraFp6mxW%2Bg8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOm8YKtTOHFwfYmQhCrcA1LH5InzrLuX5S3mM0UOFOt3sVXsbIAhTDEc9UN6%2FP1n8ezgGnpM%2F7X8KJdSQ95xuqRmlp6U5ByCmE63KVKu2JEs9HlwRkuj25WHPoxhMbFdzPH%2F%2FdEUcm1jB6uGgaTqyd6uFca9ELc%2FrCFh9XB5jqWr7ZjrfSUuTunGuoFW15Txa3geqG4mRDMN4jg4scUG8DbjlgrQUWLelGc8sXt7EHkO0ifx2%2Frxrm%2F4JYFgD%2BUdW3q%2FwGuWRzxTvwnd8ZKvYfmQjZyxvgWijfXP%2FxMPiLpF81e0iCjtrKkfVKcTJyttVnb1uHgo%2BeKkR2o3wz%2FA2K0LsgN6H7YXz7XoT5HRyKTqTUnt09eDT2b23QVxKdu%2BMF3KQsuqC21G5PI9Am%2FfEUFN%2BsghfETLfheDPoLRKnNbUu6t8rnvF1a3oiJwDZGrgePWHpYx8ElW8x0hv%2FA7kLoWT64DnTO8U7oxEa8kPJTXjPoYB0K%2FOdDPcTM%2FKlo4IaDQmdM6JKD88AxkLNlWSItwDc%2FowkUcS0vapm9unNwL9B9PwVhLq4dpFNCSTyRXIJHeog4QnO%2B18F0Sw5FHL8vK3E8KbzPvv9Xm74KPqX%2BrVwDrxCQe8DkaxXQonZD8AKN9DbwopjySUVYnMPG61skGOqUBzBqe6pbp6J9xnr41jME95GCaOfWYurSmLhoPhP7Tv6HWHdXcHSkaopg3n5Uc5qb8gpSSFiJ%2BZxdYmoP1tR2kVsADx3PQrGzuLMjwTgdpCuElZfSi6qvltZI5ifi9s0lkZq8hTcCb9k%2Bp0YKDCupHXEOeG1lX2FzUizF3LxnAutlZrizLxJeQTA3g04OkNKsz8va%2BOlFFDLAugE2vVCO%2FMlv%2Bm8bT&X-Amz-Signature=d95eb7a05344ff738ec760d81d02b0f86018f7f0979f06164b71fb666e32f10a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

