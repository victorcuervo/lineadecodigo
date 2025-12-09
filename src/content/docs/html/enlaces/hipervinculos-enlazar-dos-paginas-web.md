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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AC7WNZ3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqrUfqhOKEH9mnZsnsZ4xff%2Be7k9HBFD8%2FDOkCqUKzzAiEA7CBv8pbdN95zoz%2BC8X4mxFpEusFgrAZQ291Rb8v%2FJ7kqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzKQgBoohXWG9pO4ircA5TrOMnjx7jV107%2FMRhUClD9wZEEpCGrqJwjRfVdzunUIH65tETI5tt5CvusHnSZGltd7okxlkp2OICqEJbx63T8Cnq5t0WlY%2BjZRh4oyTwgrSjcvaRIN2r4jKm2NMLIx1TEn%2BsavknBjn8B%2FE1P6qhovy%2BkCSWALgpr2CdglSDmIOmlcBRpcxxPghp3gQcXyzNdA5p4ri2d2pWz4dtiMGoVGWzrxKaJowhS5A17Vs%2FaKu2kvBakNel2NQYtT5JryubMaoiSzXJuXsEQW4hfxMLcytYPQJsQGM5xEINHpDzDeqqE8E7J9MgYYLsh91YgRJVPwA8a5T%2BYfVMoNNG%2B9QYAuvgBWUWhIbWs3ACaPxzGGS01betLnmI%2F1idIs1bfZIDQmlv08Wk75gmALCpv4gmygFA%2BrE8hmcWnquUGaxrTXemgFRMFg8k64q4HWSpVb19b6tds%2FtvlR0zCOveBPlUItrXxLlbc8e9CQjS1dkhWr%2FhkuoMxypXsfwgQIzIPh0butQX2eSV9GE%2FxD%2FULCJSgBWw1YYW1MvVmiR234WW8NgirX2CdgD1HsB1UID0Yy8yKB5tmnKownVbZ7dN6mquxS3ydOgn9kSSEmVPiJwQer5njGu5X1zboK0WeMPnp3ckGOqUBpIyqWMGVpXTCTVvkvJxz7EWttyaGslUcDBRKIjbtiRXPj5rg%2F1f3klvrHq4vzvb66kdxWTq6u75IDuxwUyTV71GxGunQATmOV6sufnTYHYESL8ZReX7%2F1P07mfxIq5j0jkrvdjO22AIVsG9d%2FNrvVtLnqbjjOOdQZ64NXFXhycDnlwe22vG8g0v6M9fBt%2FCtwUVRni7IXNTqtmix2kTBmXqZuNES&X-Amz-Signature=e593444988ebcba5d9686a57f16023bc1ede33831c30590037f1c1142dea4af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

