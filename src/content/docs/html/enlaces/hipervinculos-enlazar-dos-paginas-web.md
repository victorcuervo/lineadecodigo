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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKVPD2VU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkqwSmNx43stzLB91ePuKELFqKYbVyCBd39qyl4yY4UAiAZkDuXwKQOEVHliOC7Qabjj0lGu%2FG%2FfqdqcE2Q6AeMsCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMqZSflb7jMpdpGns7KtwDJq5LIvuYDS4qtMts7HUmFVhqFOlP8eLq1WqWpNXjBwF12mGNQJPJSTrvxFFcd075FeOJUIf4FRnSGjPpgjVR3e2z7PYXjXIlG%2Fuz7q%2Bos9RlEBQYT0L9MwDw8i43MMebxDxn3dy%2FR3jKD871NiggoyqyrrqaO6fTZJ5R3GWg05zgR8kG1WZLOrDYTqX%2FVuC5qFDA3QvXi60WeH7Db%2B%2Fa5YqogpSvLsiNUHJkyz0uBWXImFOCShC%2FOmTCnFdhtlaNAn14AsituGB8QAKL%2FviqBe%2FHmLPECyz82icI6280Vrzbk1jxcFdScPAA6fTORIR%2FvM6546%2BUgKRoO6xBITmf5qY%2FygoWpt9uEOddLZHOTvsLXb8%2FrZOPdDUOzWtJ0GCQ9uJP3UStVFmvZYXSUDhSU0WpdoawEjGpzmh275ShPTIb271N7al5ST440aps7%2BSdX6qjUijaa3HZAEgTJIxiAykrWg2ah2Lo%2FvMUxuNdMpT%2BC%2B%2BwFDthMmS6vNQ6cV2CriDsUuyrX6TzI8Z4GPOiySK6Yzz%2BVbx086li3k7m63IcoxuG96gyn25xl22Rs6r4eNTClBtiUOQpnhpldx47oi7V9%2FeM%2Fy1DF3qdLW6Iq45NdSb5CokZDODHsxMw1qbQyQY6pgGqOnufp2PoTB7hxeX1JsoNa9w0FExxsMGn6K52UcHp8uQbofJa2QVCwF15FYJde5FTEzag4cY8AVj5BPmqMsLRc8M%2BVOiuls9ZpugvM1RnBZzSeeLltKx71Lm1xqVoXVP0ouYtYSzgqxg3GWGnZr9n0%2FSR3RftaXg3zmPu1macIcOTxUopqjy%2BJWj5nw6mZs0uYACWC21G2hTAGJ9q2CFXHr5BnIvM&X-Amz-Signature=ba783712b18e47b55707742d788193ecd3104474a85cf62b7c5dcae3f5007f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

