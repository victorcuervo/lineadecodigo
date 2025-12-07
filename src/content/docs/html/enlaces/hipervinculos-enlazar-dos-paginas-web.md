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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5WF5TD4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1OZL%2B5sTj7xPaKgEwv1vEtpKvwN2SdsRuwdo250hmPgIgVWiE%2FtOohVIpWLvbS90fnrStMxmGxdy2RysqFmdmajUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7F3YUcknHJxWREJCrcA9WIcF6LfrelOtOTk%2BNBdtYvDt37ULZAivI0GyUEMYSXUsSt8QXSeILbwDKL9S5zJ8VRq5Xt4tOfHWnN7CmA4mFZg96JmDsugCIiHKWMBUK64kdL4CL4431VNX7lyNtCzN7o3dO8b2AHe7SaaXdRl5M%2FL83fcQUzNelo%2FwD2gRRDiIw9bau0A0WHc201A8qqbDfWCknYDQY2jL33oFTfmLyuuucZDg1n%2FT1JDSJ3q6%2Br%2BMivIhYYA9bAzWz4uPM8QQX9Yuw%2FQXLiRmF7tulOsmiYvrYHSF2BTKhEtucfe72h4wjr6lD9c5Uss3fYXx%2F1jKyYHXk7U3UDLQTn3jhJ3p8ShZAUyaTEyNtW1vN0RLVupvJNSbRjKDzArCqltmHnM%2B1%2B4d7vR6G0M6J7hQ5lmgO1hXjqQF%2B5m6ZdcNYocUKekQqbrz91Mlq6FUzTLsgTlIEpzV0Mvkb1fo%2F9i7j%2BeuWLXarpFC6XJHwA9tvYc5S3%2BkIlFwNJWSRaEUqQSNtFVEYSFdDu8gLu9WRgMdbF9nWCPAaaBve%2BzWWz4aG07HITY6pzN1pxsIaxIPQeVayDVukv1%2FGczivjVjGGHPFqIMlU3bSJFMsT%2F7SH3FhmCUrXmzmkj91KaI9Gn6ExMOr90skGOqUBPQhxPQXNkEvkRtdxhPbvL6xcBJrqgugItc4EYog8ZLUvZwrmCHx1MX8VQXlLrSv9WldL0Y%2BLQZqjpAI%2B9Qip%2FGrnzcpXkPmH669IAkGaevaX6YtiNJnOSewX2Fup7bqywaOrTy58NBJrKy7YmTqP3sYVFV5T3WEID3PS4FTs%2B1S7nChjNFusoCmn6OuZUXDhxFTK%2BPv7y4xJZpwGWgp%2Fhv6paP9k&X-Amz-Signature=ecd8eb8a07ed3c49c8d21eeec630b785cc219bb18b1694083bca6bd4b81664b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

