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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJ7WJEN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7Cs%2Bl%2BPRQW1Rlkgj5Y4rg6Y%2Fe9VRHMqAUIfUt768AGwIhAOUQaRZXK4NOxtbv2HqUcp2gylcHNr0oVv8s%2Fl55GycmKv8DCGwQABoMNjM3NDIzMTgzODA1Igxdxlu4X9w4gtNCPjwq3AOwcK%2B81cR%2Bum8sB%2BIzw2mDiGnO6ZaqsySd%2FXtOmci4Uf6zpxY5D%2BTbS7SZq6nu50CMMzVw13AphbWhRQG1UM68hPes%2FU%2B4%2Fw8dFpM452D2f097kBgPQvjBcnYwtidMIeLt3W%2BdsEEgiBGRNrv7%2BACXGreT%2FlkcLg%2FW8ejCHh5LbX2jIzNAYtBfeyDXTQLOkEmguw%2Bv7MYVs%2BVBXOS4kwisX8%2BA7ce0PndvN8Xw1MyfXinsw2SGYaiTi8V%2FyLm6y5HZi0AdDSXXMwNWub2Qt4UhNuuLLi9oHMEtsDJRFVkX010Z9aV2fLphUeI6QQPynTjFybFKl3Ww0GRmnbcyHGXXhktDABEELGhMvd1sx6v9R%2FNuNzKBs5XDlMO%2FgxpqkkIs2rb6EGcJVT5xj2P7zbpJ5WMBOsOq2NqQISmP6Rr2%2BEfWvcJ%2BeTuxaJaAYdP33Xkns76IBXSAJyRYMnbXPwhWYulLT1f0KmKOJjXMqziaFxwjLanPKUkJuScT4OO6urphSjxYWTY%2B72ekIvUIah7ys0IpFfWT25FktyCKYIkdpTiheZhg1UXuCetxPg9EFozZ6IQZuUDSCvw8GFlOnC7EcirZUTebZ5K1Ih2XKl9JqyU1mrzhABrwP9zddzC%2Bw87JBjqkAVXQC0aELFj50rf1ulncwJNnrNvewcH8qd9bILUTHNbmQCv%2Fd4mhZImpGJndzijEtbTsD9HPadkHT24Zfn3MofXITW8O7cViOtdGHaHRJYv7PlLpP%2BkLPZzRgJo22%2FZJl6EfXym9lHSuoxDtP7JzCX%2FMpL7%2FTI0opvelh73vU1knE5eVGWn0TqnPgcTP%2FA0l%2B9Md9efIslvu4tu2fV9DUBhaNSXD&X-Amz-Signature=bb9b1c1c0607a916684c630891aa73ce4f45a6211f031796feaad4533598cf78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

