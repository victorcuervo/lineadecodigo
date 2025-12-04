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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEAL4VYP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDQa5RFjueqH4aoRgyFAT5J6dXYtHBQV0vZ3ngUQDsTAAIhAMZrl2r%2FW40xuZjkn9aNQYs1t2C223UaQp54aaZMs3sSKv8DCD0QABoMNjM3NDIzMTgzODA1Igyn5t9JBouB%2FisIl68q3ANidgJdF4Rx9fM0YBlsctafalQuftcdPCi7rpramqnyf6gPciU%2BkXNBj0XwJV2uMD%2Fga%2B8pT1I6jpHoq%2BNH5xlHQG11o0xs3cRVGw8%2FZCPG7dsYCOA94J%2FGE4d89G6GBi6Tc3KY7Yi4aaBeJfXDer5uoLboo4Kk%2F6kQHYQL3ZVjyy4V9VW0xeTb13cOGAzuc1yaKYHY9WYP3MDOFwYSUWGlq8Ogkb%2FtethvgqN1Nkj94Eyuym1Q9qGH1kX5sB24V4%2Fgj1yU8Lbx5hUwCsHlbs4Jk%2FUnOa5720tik4XdpcKg7jY9EXpvU5EDEmHcedk7MgI2tI%2BNWDvFXetMo5LzCmAweHHkU%2FI3FBenQjB9xtwmVNQAcYSSLHPDqd8LXU66jSjkmT14bjD53r2z7qS9MoGal8%2BML5pKn02gi%2BuXLX1s02MhOOI1wND0C87StEX0ZZOULRL26hhNJyKI2pDHHqnL%2FuBiAkUu3qjbGHJe6%2FNVbtlc5bCbOQS89nKwGFXvA4%2BtrKsuwSp3W0JcOuptmmeQ5UzzKYPloSuvA0xtSjNVuTbzRWHO5oMEybD5y1wDBkQRGj%2BmYRazP9Cu06sMS6I8xxBTUQR6O%2BrQMdF4Xj2D6cDxb5fw8K1HXaI48TCRkMTJBjqkAVLtInkZkM602LBrFrc7gIyJo%2B0e4fWH6K661pmZVhYLxSMvks7y4C86KFEainfZjvUF4mf0WOCHQTJCK1gGtuuwb7T6fhJKwWTn5dBmoGc6ufm0YIDvBGOGIX1IhoTpDwuDAEQ5weMaCo%2B9557xPAtxa85us6N9%2BYWswQbo9D8FuLazqFHMgaafa3%2BLyXz%2FARKzXHODgcgL1UFPAf661%2F%2Bkb6xI&X-Amz-Signature=9db46a9799d19ca48bcd24295f2c27a1dc99aacebd736aa7a3ec25e298160e4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

