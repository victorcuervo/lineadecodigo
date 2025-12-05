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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPRXMHR7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbD6WwxSZzPElbpS6kzBjTjympKwCATQD5ZTCHOBk7tAiAgXBh3nqn70MCOX4P%2B5d2qIVNo%2FtM1B2R9Ekq7RAj0WSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM3uj4H0yuSitbqvGqKtwDY4sk2Knd%2By%2FkbvRbE7%2BYcICqKbwdFRxrv4u9HUCT9XXH%2FQoFixf89jmtu6MAu9ynbLF9KtBt0wxh2hCT9G0WTKgkdUXaCaGRcZDD359y7aLCwlri%2FkPIohDz5XPE6syRirQDT3NxfQh6hatrHQ3DpSBcpuK8JtMBHRxhblg0vxMPdk91MGUuURS00GRZlP1a%2BJ98J4o6Up034bvne1a9jzhHcA9rYijlZELsiRnI%2FKU3RylNtiWJ%2BTColYQJ0M1v2Wy09F7f3f%2FFE%2FvuI4oxUk5T7mrSd%2BZKbejzlbJfvw8H3BFdRai3647qoUKLVl%2FgEElC0EkNbsrzTFBVJny3E0zolW2fM6GuGMjACrrdXNZT0VFUdlLVXgSc89UEriht9bd9cmEtEWcHIMstB6T02Aqp6kJSEJKjWklqaZZhcBtDeg0gDhsGCBAw7GlIeHzGVkHDUJE6r%2BgKc4o7fMQ94t2xrysdYKqsIDbJrn1cpl1Las0LehFIFx0ZjEPmZtowwwEqZ2wGjJrZYX5ysjAyScj9MYPWAws3FcjSQKe0kuMKwhueFGHeFLnNJaX7U9%2BUr4PZtP7IAThIYrebNoGtljGz7hWXlZtigRjLG4chq7gbrGGuExp4V6mz3gkwjfDLyQY6pgEbDMnROnHR82wq1EQiOgeiIpkfTSbSdgJowizxymR8yN4D4ZZSASdTvBsS4NCtK8UlwoDPpCtsn3HwH%2BcObFBR2FEIyLUkGzSASe2v%2BBBOuQEF13W8%2Blp3nuA8kCdnSHK7Ot09gi%2B3a9ak4Y3%2FiujX1%2FUTu%2FVI3zTgiQ84WHC08QEBaOoA8Hdl5VNCpTBcwxHuuKzDkX2NAzjlmdaw5gDMWcwyNK3h&X-Amz-Signature=98d765128182b541a58ec0c55fd05694cdda99e45e97feee225141d05e37a0bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

