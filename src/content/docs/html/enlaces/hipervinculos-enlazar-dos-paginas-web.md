---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGAN2YLR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPY3gPGlKxxLDXjPSM0HaDD0HbWeCqv5KI1qAdFxwEBAiBsmCzjubKfei9eXlq37e37c5JkllgGOd8QzY6ygG4p2ir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM7t8ZUjoeB%2F84Prz1KtwDmJHE4y0faX9Eo9HTEDOfWx7AFkuzVcBdt4L1q4atUcMFvK8fs2khp5DyHef%2BS%2BVZTux4%2BJMgO6yUyNet7yzo6rPU4fxg%2FAaN7yvj0NBfA18JDs9mt5ZZWjHY0p1OnyQRN49h2l7ukHGsijLXDRE8u%2BC%2BesKfpDpx26E3iedQjevbey1TgPqIZrhSZ1kwbqWN5pdSUa6tfT7ImRVGpi3pGvf8%2BIxdR%2Fu6Rp8T5Qw8X6IqWD4%2B9N3Xrk2hutoqsaX%2FK%2FdtbNsJLZyWNk1zMZKIhs%2BUTrFiB7PWnQ63xR%2Bu6u6H2VyZ7%2FBRHi3Pj%2FgXppGAr5%2BpHG8x89lCuOQmCxCiU8ra7i1MCVrMex2d%2FRaqQp1Mu3wx5aEeI%2BIFXLFMVDau8Ii%2BAFUWT9TQAo00KZAHBcJDkn7Cljmjdxn2G8VkbFFy5DQiOTs2fhAaytCKDJsQhPwOYsCBZsxr9pKxlTuI96CpGYweGkXBzyF76koSYw6f55ytBoGDiMRKYwk%2FAbwbz1NmQOjJXlAM8N01524sGhXlS%2BVde6jdxsYtr2yPK32CD14ZeGmzPisXwruOPOv5GrFbu2Ftbg5K0Pmp4QQkrR1sxReDKpBwRd7de%2BbXZcbe3PSUdf3RvmIrn18w39vGyQY6pgHpuq5kyX7MZp6CtBFfp%2BeixxhyPXaFdazviXt%2Byxl8%2Bs3hYx6UH2IvqROCBkpTMMdrJNXZqOb4Wrlsm5Ht8tsjVokNKJruor8OuBf0SL%2BW73aAXelnuv8WdHB1ssCpzORbN85A224q1Uju%2Fvjf%2BUYIv5%2F4uIGEj%2B5q7ft3XhxRVEYCu5yg25ZFUIdS8Vtna9H8%2BFdDbVAg6tRT2qYVblqUmXbU1eJY&X-Amz-Signature=7c4c140e5cf41754c4c402672592cda1cda2fc5671b6928fe9fb7f23b15671bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

