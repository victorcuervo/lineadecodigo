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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNAQSH4U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T124648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvAE69Ytzmod0cYh4bDOuc21x1fRJX8BPTDtr1q4sSvwIhALBe16%2FkNEFYRgLX%2FxqzfU5InBpDxrBndvrJWD%2BAUvj3KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRXni8%2F8JPZ318zFAq3AOqX9eBt6spZRv9LLsWNo0mTMXoJ9G%2BlT8zvBHTaPUbe2d%2Bifeto15%2Fn6C23YNpFuntqE9XxZSZMmCS2RmY%2FlI%2BlDkeAGOO9gkon9nbIGlLwCtSfw14s7YGpm8hSUIJ%2F4v9%2FEp1Vn8hWlsX6gAC5%2FA8Y8OvXo%2BeABfQ1BephBd5BlxWqoXnr2kaIv9cX33Ng%2Fb77UKmYPbtXptKkl9oL6UVYJjACmW77zjYiFfwNd5sFcDq3VZrGw42sRVtMoagVygXAxWXkqMnuWu%2FvBKE3Ebk40r%2BEq72JjOpCwtMOheKVuYL6NXJ0Z0s0BJ9%2FZXn6lKA1TUKlkQiZYkCMNkmlIdk0MjmimT%2BL0SsUUBV5WIYO7oi3Cvmx%2BSw0thxcLX8zPNzXv8YPQHhyl09aQAd5VgfopLw8p3n3AaP5Dkp3RXkN3TEEEOUHEOnENGH37XQbPhTtO%2FGNVKHojueqSB%2Fr5BwsUuFDmn2qb2SUtgZCebsQDIVJnEZU5x4HPJT8PtYYT%2BHy4jru1dS6d0rr%2BbypxvU8VWIHg2A3W04jIFm2Dds0DpmDcc60rCgUvHqDbNtoX9SbWEQGd4Nf2dwRsmbf3n1boeyK5FooJVozAy3TzpnnoTn6rZ4LjsShnWz8TCWmtXJBjqkAdaUBH8cdQdK%2FTQXBlZCyJJBcsVZB9I21f17MZ9F5Qi0UQyFRt1LcAOyIinF9nAXB6p%2BqCUI65Dr5nqHznfpRQuDkjwGLFg8HqvamrC8aa7GRtwqkuq%2F825qxVSBKPkoAW58UkCJy1WyeKCKem8W4V5lFZFuGPiLcV%2Fx9bb57oAOlx7EkWs8WM6tj5Y%2BMa1OsN3Y7mlw1P1Xowq25ytWo8Fv9uFq&X-Amz-Signature=468b523ce9845aa89ee5abd45cc03b72fb651e6165e98d8d835c82715c7da70a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

