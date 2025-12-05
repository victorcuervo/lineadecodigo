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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XRWJ52U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUZgBEe%2BDcXOB20fxyiamXeKjxiyY0MTo7mYu0AZH2aQIhANkFcVjTyrA%2BzfINgA3LiMNyqpcHL1fYI%2F%2FTtWR3qzVuKv8DCFUQABoMNjM3NDIzMTgzODA1IgzjucVQ1FQczQVPoq4q3AMAJ9P6PPj5bofbnqhU8%2Fd%2Fy8QujEVsU2I8qEFIgmY7l2xrZEVKwYO6q%2FA3VoZqJOvMvWANtb7yFJLRqfPGiPqMAOSywDECkjpEUsRJqQbT3Pjg0VLIp2WMSdxMcfZCi8BgACCuxCH7AWKWaqylHKAu7IR2CtBTjjqNdnoKaYuIDNy9tQQNuBj%2ByMspa2qHf1GZDNYLOrUCPgu9RYlreKyRBCUxr%2BCp7Ce252vbAbRLrxqzQBqE3XlvAla2%2FPyNomsbuWvYTOzmrzi5oW6pnYgXdijSauO0uR5nkRXZusQ2iIw0MeLjgpzqihLDPQ%2FbsfnbsT2f1BDd%2FHQtrt4GUi%2BY5p8imN%2Fg%2Bn8kF7QAKJA%2FYr8TN2e5%2F4WmOa51ez07nqC3gre5s8osN8yRz5PvHI%2BK96JjdvdCFzzjCMEpEaLv99L5iS3GwbrlMv59bN4MA4wa6JMIlZiaAwr5QTTLa8WSCD%2Fii0qOLVBRrYrlFE5x04iIQK64cMSY5wasGHS8YYaxcgxqEGIW87PXNMSGlrF5zYy9m%2B4ehHPQOLIvXTKPnDCaIa9GOLcWEdyQbUw5iWdry3Q9VNmW5RbXA2zaJj1at4PZWI2A9ywOFjVvmn%2FU3UTPoYcoHD39jBubeTDWr8nJBjqkAXjdgZ8AObDYhyvbky%2F9f9FwWi2xQM1%2B6c324hJ2Hr4EJ9q9UMTKGn5wqQb4XNZfekkVxzLkBkZnOcFByMvjP%2Ftlww1Rt5cqW5ClHicJUhchAGHpCRNxe0BUhCJqv6GJXEkaVsHZjzDtfuYhD8wX5WVvkiD8LcwhnA1mg30sBxBdz3ng9mU1VQ0Uexbh7qOiC3a2XF7ad%2B%2FnLmxkiUvIGOIvrg9U&X-Amz-Signature=aa88f7c45137a55fabbd0b1fcd5a9543f7fb7d97e72901fb3ac38f435cc91cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

