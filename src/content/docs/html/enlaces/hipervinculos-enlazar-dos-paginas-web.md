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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5HBAJ3I%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjMihBkMKY1k2K3jxlV0TE312EqAgi8MhZIeBNF%2FRepQIgY0R7hOELcP48q%2FAStFsNBQKck%2Blf7NXPEQtdA2c5Zcsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOxUIWqRL5T3QMKzWCrcA2Qctb9piiYDFvugT4hGQb66oHVnTzAp6%2F98bErf8MvZ7Mlgta77xtk1DjZA8EASfuuT39wDCz3RiwjowPmF5cSphfuWwq3mLRgYEpy2ZZ8mGJcdrI7QK1xvgiMxc%2B4Kl2cp1fHHLbWM5ISdKtqifYzha12PpMa%2B7U9ZM2uinSPP%2F7%2FM%2FD1zB4wXZ%2BYXoMU9%2BzeFKXjycv%2B8qO9AHcaLJWsf3rpvbJbbAMZ2hk1U2dlYD%2BrELFa%2F4Di0jBvsp9ZFqHwemHzpJ05Z0CuKMttnn3lSxBYbEtjbFSQLyrmyA9fg%2BN8AsBAO9F4Z4bt0yGiPJUJDLBKsjRvjpa1TJJ2RGaG4CHAGa4dOvgkAHNQesPlJrr3%2BKkSugaiV6YFDCVGY3cN%2FJO%2FEywg76xDDB3%2BFeKdlq95s4AiCBPP1EHy9ZB2eNjvaxUmCOp%2B8FXlzML6PtxkIEbpCelMYB9W%2Bp79js6VG9h31cMw4crV4E7ioLs2HkV%2FxOmuAGAXQCnVLqyroPiVUryzuFsBJuh6hmTaxjBwLpc4gkTGGJaNDdMDRKA51wmUP7d2XGBkM0VMYZGIUuDqUbKycR0jYqnZZ2n2McE4Srb3NtW6dVt0qqqM4S5ZKHr%2BUyJzUpvoA1n6EMJj9zskGOqUBGMeO10tfunMExG%2FEIY%2B2dVlaj2z1vt4Hm6dB48Dz4sW3d%2FDZpV4Y8F4mkiqIOj43mALROaoSs5AGAP2m1Qtq7w4Sfox0jI0mfPXdxMMBvWh%2BKfO6T8pJ%2B4RDVktOOCUwmgS7%2FmN41Q86pHhDojyn3ymqH9ZlBVqp8l%2F4PCFIm79iMZwZb3Ph8E%2B9k2sPVxcPkpqcki%2FAzYkgE1uNE18D1oGZjfQl&X-Amz-Signature=c83403f1e443d238b0c2bd32045b91f2ed56cd9f0e447447ce74c1197468fcd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

