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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZJCAZNA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbrKYuNNpr1wJDD6DTOkSq3a9d0%2B5D2mHN5PyRUGalwAiAolQc0PJY9g%2BnrejSa%2BhJ85daXAcG6KAUPYCLp%2FVCzkir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMLTx1QEC9fbE80mmvKtwDI1t45FbUJFfV4i3I8foC5ublh0FLODA%2BVEpqpelrVdBHnAfZSj0PRVmd%2BciMxMaVuDcx6L7njbvlEIrFEWT4A3IRtWZmJf5xke11lxg%2BzzDxYeMdk1NrdI0aZCmvOTEzc4aHYcNqzYWnwiwFDy7QP%2Bx28JGQGeNsHPpaB3Pe1AZBL7nsiouEjcZK2sSzB2HkBjSJMdLjiwJged8FmpiSakUU3cxXjRJF7Uyz%2F1Ebc7y4nfpkREVKkcfl3SWNoV2sbwwVHgjCwmommT%2FnMCofVI6P0T0M%2FqA5518kaeHaKWNXxhoG3vZ8mkjATdxXFvFHUhKf6g7Bm7JfV7xxFSS3g8%2Ba4yb%2FnOAUGHH%2FWVCVzLfPXbDPZdVoE5GMLQOhRhe546oaInZKcA9%2FqgweIliTQAiyVHNgqVO5o4pH3lyLYZmepQQYRtsN5Sw39NH613YTj0x2uqKVdcAHi%2F7aT9hsJEjMtrrriDoVU6iZifoK4Vl2kZQEgoJgMf%2FOjlvm6kWcHiLyBGbWI0HRvDjT3Eh2mBqY2FEvGcpqkFKFrmtnnh5htd2fxx1AwIafkeVpA84W1yMGjQ4bWIo0%2BpWxvdOg9bb0BJXazwkSiCf9iBmRm%2B%2BJ5eXAqUEArAJz8Q8wvKvJyQY6pgHQH6IaeK7%2FjMllov3dZBI6TcA3pEXBJCHn1J1gvK1Qc8OeqM8dKKak6IDzgiIpKJjjZCX41Y2QIJTgk87YvK6GChTLHQZqJX1MNEe1uG0xSsvmkbtjThJOhMZvnWfMH%2FgBJ0Skmxrwj1A7tztvlU%2BFIxwMWeDUAZpm%2F0q2ghTIqacpufFPQqRqVxiS3EWuGp%2FkDVkCdtsKnNgIn6LFq8IJjn7v3xou&X-Amz-Signature=7a7c849d52770e8d203e721574696e0da7029a6de3a3365b068d6cebf1882067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

