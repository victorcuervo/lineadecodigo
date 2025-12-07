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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676IGPRU2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSvJHnlYJTGFHYfyj%2B0a%2FOfputqfUlHtHjhsl8g4sJRAiEAsmVDgshQcN15fXDllaqMiVCZeK%2B4hPbt4YT3wAG6N2IqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7zUiIDa%2FarRS7rKSrcA5w27kZWH5H9kXTfO0VrYzSTL5hAF77%2Fx2y0Fo8aXnS0DS765BxSbGSjyLwLS%2Fr2VCo8jLhCvNFNPj2z2dIjxs13pT5TQh%2Fo3R%2F6e6xk5tPYmTit17RuPxCN8aTW4e7%2B%2FgH3R48VwPbXDRt7S5Mc%2FIf7%2BOykk3J7pyHA95alQOMuK5NbUyWlQ0Oc9nXbwBDsEyWLHFq8wvrEP4gvc5%2FDQW%2FZ%2Fl8%2FaLQkRDNmXotBqS0sU8JpOteNpdLvDZ%2FQSx%2BqxQAxMq%2ByrWkrULPhC75egxQn%2Bnw6h35rXQ2Khs3qaz6Y7NCo8KTVU9%2Ftq%2FfcWwziM9m2Zec9baFoo6%2F6vtqBfrhlzaOs4M9s0S59nfMocYBBKBXik0FG7VrOEMxAi9BxoakHNfWRD1JbJjP9DpC6oxljJz8tEsQ6gMOEDHhn3kYMkcJLoTv7dD9x47fphI0OKRKrj96KpgMB483xQmFzzPAKS50LWxnoh4QQNHO%2FJQFbuWH8Z49nF9ZmHvwp6dveyd2IVtECs8i38h%2BbgBgoU9YTOFMuuYmh%2FQa%2FAUJEyWLU0%2BWYzj5QeJ1ZrlaUEoem1vALo6aA2leaZDk4e2RmFZum8oUH5CiJvF5CdNBgseP0lFLSkKLmd6I%2BO68GMOyE2MkGOqUBQ%2BlZSCdm%2B7%2FhPnOJ3K8TB7sLDFCZ9bcQgqMN4lOGNJzfJZaLz0uu9o0Vy%2B%2B0e8w0Ax0iOQNVZAIkALwGP%2F54tBQViIq7lKb18r0eUQwLyHdjJnOFf5IAkT2sQPZN2LBkwrSDkBHnl8fGhZfj7mb8sId2Wz1N7djxsiKy%2F7GWhGMnAYWSpKSvM1aUs5ChuDMYMtt13sV1no5y8pn6kSNzqo6P8xO6&X-Amz-Signature=be19e40420797a65bcc933424bd73ae050068777eac8dc7ec84d103cb5266ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

