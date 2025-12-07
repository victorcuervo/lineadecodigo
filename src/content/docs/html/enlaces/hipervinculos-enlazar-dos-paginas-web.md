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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY2C4X4S%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbVBgfutxcK3Ue4DhRg2yET%2BTC1bUHEPw7yJnFkxvJsAiAS2nno2EgqDlLc7U0QsPAvgh%2FXaOFxO%2FNPvzV9esy6PiqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd%2BjcFKvLHDPqo4tRKtwDA0HxALIMYk8XnLZ5Da9P8dreJP4ZP9S3Uh2FghLwrAjzrPNBIE74xDRv0GMEiuQwEmJowvDbXBlA0DyFM9ChkQpyNgJ3fhcaRvQ5tIhFGWw7xg6Pp6tBmBdYTVZQAIvP6s2q1qV8IPHkmrrILsPzBuMD4qNSXVFvILjybNpctLoRtgO6rUUTea4%2FOpWZ3RRBfkODkniOspMnf5sd69Yc%2BrAkSgkUpDwvs4wU3QtGnHktFjgLVf%2BVkMLB8577fXjAkwC%2B2SlGTFld%2Fbb8SYqX3LF6UF6GjF0RKP9M%2B9zy6Q9FX8gChp%2BHzPPYD36FfwjwOPxk9tu1xCB0bXlDlFS26zjAmhA4H%2FH2UHnHkwATSNBxYC5sAqteGTScfobmGO6gcY0LShJWPoMv7QV7N90wggsIBfBVIhpqGHucSxf7BvxaUuHLrffcJzU30tqQTUyn7wsfRPrVLzz6jX2PP%2F1Gugsfl%2BL%2F6aA34IbRhawhqwZxlvLhb1UYk5kR6cM1egQ8taKhZVdgwRXmZQUB7TYYQW%2BcEMiUcrGX%2BM9jhRJycKCuLkjtWeGQ8QY1bWrh8IqeHeMrMZklAIO9TwbygVIWHHW3evVxdtEFe1cSzuIUcotQzFXxhNBKCF2RRhkw9YTYyQY6pgGlbx%2Fx%2BHYjjXnGuk8N2ANZU9B3FmDq2rBqTdV%2B%2Fp94b8YzQH8sHMHn4kYoTJfKAVAbrFH9Kw2ASeD19Tvs5eErBAF%2FRJEdQUe%2BeRcKc8lJ3kOYNAMpEIZYY%2F6VFe4Bd2HDTaSt206GZZJKZ3PkhxtF3lQFyLT7A%2F0%2BgHID3PGd%2BTxHlVOai0kyXpD2e7koWbyqq%2BXirEAGuXpZSrQ%2BGSwtvpSnF6Ep&X-Amz-Signature=146b536935d00cfcd1f1ac639c1dd319f607c948174991aff6c6e49922628a5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

