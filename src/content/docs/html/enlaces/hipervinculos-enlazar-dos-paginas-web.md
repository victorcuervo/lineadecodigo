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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS7PYHRF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD25KW1%2BWK8iuJwBaBDcEkCqNIh68PTpzr%2Fd1xvmzRjAIgWJTCgNFXihhZ0a4LR98g8hYl6iCM1Q64umS8SPE6uwcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDI%2BibPinnQNOWjZh3CrcAyd5kzTzcsbYpu8DIdAUR9sgieN1HwZJzH3oscko8EG6qjmBBy2qOGhjPVdeqvhHhkYIpT1E4eFEhtLTrudf%2B09Vy7q441rY7%2BMq3qJxPmbYAA%2F4BRjOU2qtashweREd9nyraEd7Ity%2BT8%2FP6q1E1l0im2w9naJwBtsyQp8pBC%2BYC9D%2BT4dm6yA711QRcIJ3DwXn9cT%2FJNJdOusvNwUVqdviOOJNfNK4qtLPCWoxLdmN06JhSv%2FtQsCnq%2BhvThYD5oI9hm42ZB%2BmhnJiHgtMw2bsWBkSEDzMV9CljfKPlfGJkVQe6hc9ouAr5kX%2BBO%2FUFaexuKk3LD2S%2Bz8cQQvIduqqcc0OuEI8x720TpsPoojk4gaygSTxZacNjDmhxCQE6D9Dou1VU3hHyixTMsPDOD8OptaKOcZ%2F0rWVHJ8BA1LfufyVDeEVTi01a9uCpSO3EEZQDMfiWs%2BaGu7yj4yG5pPxuu4eAlyWjPpjKrqhnXPX6j4KordwA%2BYN2ltA%2FEkCGZ3befjotxZzMwKfFgYHRQFLjYNkGJrCJ0GLaDJpGgn4i2yrMbxBGNo7t%2FxROlfI%2FkWflnxYVeE2dmTHE6X3Go%2FDNxUUij7%2BrL3SvBkGCey72c%2BCL3qvwRdb%2BYxuML3JyskGOqUBgN2WPp%2FQT%2BW4MqbIK%2FpKgoP%2BSqz1hLi%2FdeSijs0M4GZj%2BsVEzyD63Rwo%2FCtGhoY4L6aiE78mRelSErqCrMvaH5Gkqb1u%2BevPOcD2Du7f6dejxDRWhnpowK0Fwbp46hFMuuQn%2FwCbELmHLGzfuTcpwqkQnSs%2BZ%2BHhGZpsoNwWuOcsnvRqjnXucTZVWPPkU3iHQrLu0C2NMY4NPPB5uVY%2F5hMzWZt7&X-Amz-Signature=7d908258f816e4201102d35312205c097e3782596bf9fceaa3d287811643033f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

