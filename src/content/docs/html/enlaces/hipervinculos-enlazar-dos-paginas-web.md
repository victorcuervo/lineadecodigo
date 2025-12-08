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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AAMRLJ5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV612sM8dGDCtCPknT6HrpvzvLJqcOuDHbhD07RhD05QIhANCocuiw0%2BtkUG8gyU5mJBRb%2BIadSh8GU%2B9yiy%2BSqlY8KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCgSiTEi7xKjyjnX0q3AOU4MFCdW5KE5VnMebdSJSTEn67cpWfvuklyjrykIlLPD6%2FbJT%2BTl8OUNBwiE2qnyf%2Bab9tc%2BSQ6z%2BqbZvI6Xfut0UYexz5n7fGENfIiwAMy2AJjW%2BJtMVg5hTY81CdMh%2BvjVssJ0AWfmFEvukc9ymIoRlzrfWNqr7HLkVVzhei4RRyGBCwDa9vx%2FI%2BxNQtLrUxes0jeU%2Fo9DwgWp3pGTnFbbKFdhnjqpzmrKUAIb%2FDu%2Bd51XQ7iYLcE%2FFv2h%2B4BHQYhP9mlVEJ%2B07QGfKaQDtgS2%2FUQJtd3YLDb4NpxCZi7Ot8%2FfQiIYrDRHoo7PWkyifKWCP3miDgVKbmMOUW9fZg4QP6xX%2FgvSyQtsy3ziWb6gWGxm0e7fzXqsj92h63amEVYZ2TzYKtNfYVQZfx9Un07rpKG5mewEX4%2FYyrDZPbBjyKvznevzEt8KABlx0eWkV1aMKw2OC%2FAzu8OzC9yZp7fArn%2FRIJJYbnLIL7O6ilaIf47AYGw8RhrkpH8gjl%2BgfNSVuNynlv9G6YrxWD2ZHCXg7Ht0FhGABAGk1eayMskOut2g%2BL%2FSan6hwe3pGez6VYBwjhgxANJB5FVg%2B24L04RxtN9D9OxXzyOgOrhn8gx%2BBCkWlvgenixCIzFDCHh9zJBjqkAcX9szRsYatDcYgnnHlP0pHVHGquhRWJPqqS3FbMPZM0ZAPm%2FTrg%2Fsem2tREZ%2FtUz7pV7WPkXOvIMcFSEEZGK2T6eUVds1FyLKgFGPezmbkO0lzenAUZdmDRMMMEGPiX6wbt3biFjSCGLwBNyYzA5RDsCHGPNyHuhgz2EPrj1czSz0ycEFO9F9h6C1cKFN6X26sAd3VkVfpjkj4d484Q028Axb%2Bn&X-Amz-Signature=7e6c2395713ea074268c797a15862f84d7784f2f191b84ad191037f279c39ed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

