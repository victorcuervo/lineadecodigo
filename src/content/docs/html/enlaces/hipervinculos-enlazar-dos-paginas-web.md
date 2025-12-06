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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHSPBEUI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGN74ChBndkbmaV4bgm37Q46aFWcIQkOMsdmc%2BNcrAIXAiEA%2Bm5UHiA9JHEpPv%2B5IcgZPyej1SoHhAmcv0zv67P2nqYq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDFZbAJnRjwYdVs%2FWjircA2LmmN%2BHsYwdz5%2B1AMwzRrOcBSEV6IyG%2BeUUFLk%2FYvGP8I3Vlc8ZlS8EyGrhWle6zOQIVbRRQA1G5ygvwXl9%2Byt6TSvY%2FO9g6FE1PHf6ZjHhWr3p3WCf7Hfvzj8IBDZuBYU6cRgp8GGzOKFnLVOk00REM%2BVyuLtKJQSurPih5uphQ2TADOQxXMpnbNsaZk3SKEeaYUCpYoLtTw8tkEY0BZczAt1L7jCsJHeCUSpGAAgaGC9cbxVnsQQJhYoN%2B9xy3XnwzTNc19Z2xTaYlRd0ClqwQf3E29dyrf0ikrHzYihq%2B%2BPOXQzqLde2Y5e709AoEshh8v9k1f5rMGQjfHdubGG1Is5BhmVc1v2eU1BkiMU7pp0PHbZ2qgoG4If29xNGb0dxOQuMOaHEKtXYK7eUn0X%2Bve0iu9lpK9r8UcnSZtsmC5miF32gB6frvWFglbGRvRNCO8OLVLNAiNh0D0mxT0XEBlbA9EAdyden05MW3nrDION7F6lfaUh4AZorAEzMQM1kjClJjDA0fhhCs43creMNexPF6xDycjctNxJNQVAiBjmK98ZpXDNNJZYAb2%2B65SclMYmnxUBYp8iyVfu4lE5ze%2BH5jvxaPo5TpkHFzmLnSjhEe9xVb3eXCSyeMLvDzskGOqUB8jwfENRqRnbMZo3%2FZfysfDjT4pt9P64Cv6rqi2QYtehmUnA%2FBRjtDiD%2FVXl1TmQY36IOGpo%2B81PkjhNkNapLPe8wM7%2B2JZ9M4jO3fHw9oPne8D6vmkpLKq0%2Bt9FynYnzU%2Be%2BD52fM5C2ar7blKMzPWYsec0kENtwu8yYOeypQ5I5f%2FDZDTUTNuEjtCXhNVHVpJr6ggT%2BvboCESYBuu5Yg0oWv%2Bp4&X-Amz-Signature=b80b7e8401c0699944207237bb362528f8db2aa7e139268e6254e0ea04ee51f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

