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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJRGGZOK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T081754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpSoAvfbqKK4UYOStI5pVwbulRAGJwOJTv9lepAUHvqAIhAKGq6jRljS%2FA2mXfCYgumqN5%2BBFEpydG7n7%2B8Sjb8kojKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwskrPEuIqT6rsrp4Aq3AM%2FcORLGsewmxC8tBoYbCRkUSpI5i3SpY0b2sXnI4Of1CfCykD0gkD%2BQXrd8NHB2Yt36aJj9H%2FsT70T1SOha9rDMXNEZIa%2FNHzBUBSgb5wZlVynSfqAQguT6iQ98oLOGEEIumtANwaSqr%2F%2Fuf3IbaEfNIvHlg5vdvvGDZfWAUl%2FinIZF6P8KZGVKn0gwk6ZhG%2Fa811OmB8XpNSkzs%2FtQ1U%2BCQJKfTUmOLLdaumPbolyOC9l0Wct3SVEG1qN3CQ%2BOZ8v%2F4GbVBdBfbgGP7PF%2F5IVaIpRqzVNje2qHLFRRFqlVKgLJlgEbC8PiCDMRcg7Pq%2BJtUoQtMHSYhnRpPV%2FHI9uVnJQonit2CUQ5lWHHew4UyjIeaBEkFMU8KR8Qhe3Vvtq9ujHNJUsCfHDBEfBz0p%2FH6Sa%2FMB7TGO%2F9qq%2B7Q5EJiVLp6vRuh8A%2FSJF6Q43xebsX9Ew%2FFX8KSlagr1VRbAuavEcTBqDENTOqI89XI3OOxiKrc7AyheX%2Fr0VBeN6n4CRAuQMKSfQ7FTut2EjSiZc2ZBVxxJrDYt35lr%2FriEDlk7%2BN5pNqxjx6F4vob7RPMAdYE9Kavi3rx%2B1TgXXG3nuybenQw6CWGQpw%2BsdH6DQe7WsE%2FnUcNmSH3G1oDD47dnJBjqkAUhrJ3X2MKORw3T9d0P6RUiwHG9D9vfhX6XWzzssOYXA3GIU72IJg3ef2HDgGwTr7kHU8T%2BkK26ID%2B55cxGjYZzvm5MaB4ijzT7jxZp9HvMxn7dKK28hQiQ1QwZJ870A33LCAfKMiTOjqlXcXks%2BJrrYm5Yu2a0iUWsT%2BuAic4w%2FsM1xdaVVLED8MTN66CBl0UFdtVY%2F48EuCJq%2F7inZw8J5s4ex&X-Amz-Signature=009c9d881189ab846273762d65b1c166932470c76e2914ba5c97da283639e6ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

