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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQA4FXJZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEUrcpkZxrUD8a1a4ESIGT3F6wGvp0rF3XhVhCsh4F2AiAoXkhOfp%2BhIvXMpb5c8StU%2FrxqzZwDYFN78Z0aHONvkyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMDhfr1GlYtEqrY9JPKtwDU8S6ZaqWMkutguCcNJn3ne4a%2Bq60u6J6rlQmdEtgOnN8IIebXQDlPL3QQXFEWf22xPvzlJH1hq%2BQ%2FdhWYwvo2d83ZmvaymugjSHcZ5p%2FoZEKiZoUZaP8ADx2SVWr15XDRpDz%2BwNdeJ0fq3NXw8Tz5wJYgu8XsgkTq2YSRUBddiIN4lzHSxM3n86czHO6lJvx7KIERhvAvsdhgwdOUiSfyqjSxGT%2BS9OfqK%2FfPs8JnBXAajnqgyqGNsCLOXECbc%2BTl6HQyZD1QozAgbxBAzmmwIGwegTASnRSmn3QNKyPD4%2BJ8DphKAlSacHRqq3iJ9AORQJx8bCpM0bzZ3MwE5I3NLzgNWjWhyLsdG8eCfTJ413sTDQXppbjIK1XbVEmj5yzE7qp8Xx9w2JsuN997cQs18axB0HwWjFkC5yqxS%2FiqwgB%2B0LXm2rNfEw1rr02p0djV6qx4VQ%2F6MTV6McCTTuqE4gJ9ldNaiedEmGCQECx6dIfKYOc8DOQwY1T%2F%2FOHgKd0LREUYVVmxGjqALm%2Fl6WLSre%2FK%2BtwyjwNOlwciXgco5AVYcwljeY6EZA3HlnU95nNbaTMaas2tjnsMEfBJGvACIQRyAKBOaYxQwQ1A0NJa%2Bta7U6S556c9ecc%2BrEw8YbSyQY6pgFeDw242u1Gc3n6MmpsmpNu2rpgt7Z%2FMTOYWZkB9YakvBFVuPKxf2Yl%2BbeBdwKO4%2FJkykswshqguU%2FnhUi0O292pczn8nlJqPYYSe2bam39C4rtPD5MFyD%2BAul%2BeLlz8JhT2WcAnRiwFR%2BUv9kDPTfMsHwNCD9EtMR%2B%2BY6VLHcxGF7WJHYO5Sy028QK4YybTUrF8vh6sUgx%2BRFk%2F81MJq8eVswflP3o&X-Amz-Signature=874fc17cb00edff4c58c263465a82dcb6d030ba7091e7cef9ff69f2e9f3d2c5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

