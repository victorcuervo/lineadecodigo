---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKP4GZS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T205352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjlgHYNGRK9bRYcVCaA71gR5vmZt4K88ckxDhKC4uh4AiB%2BxJf8GXqBjZf1I1RqP1gw6Egj9znLXnhDewakNKn1nSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNmcen3JnCuOLzHKkKtwDKRr7yMXKYUWESFSe0SpihMIQNMjGQBUTq84u2SixZpTbl6RTnYeqW16D778WpExHlqw6Fn1m7%2B6zJQpffjzV1rxY0beQqSY5zaqjYyah4WhcMhVhG1fup4T15Zr2wrlExtHfSY3GcmIxb2QK4cJAzkTr%2BhUXGs7GD5pbb0xMPaJk4qZZaM%2FwsNXDbxqkEXUWljPpCxVfdetoNXnxStKzDXLighGppTE7c1bKUzsGXJQ9jnvoF9TQ7aZiGfpIpb05rsvFS8OXSKiYaP0eHsKTFwhanzaPYYXbA%2FBVQ2nGVxd2a6JKyJUCmvIBwWfAN2t1NxJc0NgQeHnFq3lnlU8XGJ8nhuje3B8NGkENLjLSsEBhIwLvS0lIgabNqddb0%2BLMWaaJXbEfVFn02LQxKgpn6t9Ksn9XlEWjhGcC3L2Nd4ylD7peOrUZVXeWF5jf77oSE1jpvNT%2FM7VTyzUz%2FTjjCahifRDnNYtAhJhuMAg31OLqyZ3vbwCGggnJoCf7BVIYReUDOkBL8xYe0BbfQrrsfr4Aggq3jjO6maKnoWPKIe8EGxyxHHPR7XgchN3sTSnmkN7aN%2FMzvafuphztT9MiAfQ7h%2FpFjX5Sgd4f70jQsrcNnlDX6OkRJNL2DOAwk%2F%2FhyQY6pgHC99HZ1er5PbMfr4pLNkieC79M3QWUzHIi8Mphgy%2B6zBRKUt74EvNJuM1xa8QqeSA5orlqdU8XX74%2Fcbzu16xZ8UD5wIkZgMtiTHQB%2Bl0DmrcNVp4e4EZkwlDK3dGWmgzXfDuVUZQuZcUKmVQC6Bp0WY845MiAeNZNh%2FRiBxxwRVNdNwzcP3FBZ5JID37JAxOPy01LsLPWqq4%2FEFNtIzhWQANpdXOj&X-Amz-Signature=601997248e589128966664741926289412775a4130fd8643613874b7dabd5276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

