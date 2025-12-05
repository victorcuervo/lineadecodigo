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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6V3EJFH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQD%2FwNgUw7L81GnCEaXm36w4yDVGVBDKJAScj8W5P1Kb9wIfTJa5johcOfOmk%2BX4%2Bm5UWBvJ291Vd%2BXP7py4PHxoQCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM1DiTZFsxducMpm%2FcKtwD8pbDOIH1kW0HEpwXSiyY0gxt27jQhdRw1MmlAtjTGUtrV4FXHSB3Gl4rcV6zTdo%2B83DA13EBYch%2Fw1NcUBypLyAXP%2FlswAFafq5enPFTc9HnSmZ5nc5zDgNJQa23LECc7RboI2QrlVlhTxdb7U%2FTbXu8yaJdT9TjqZso%2BQotc2oismmromssmLgLLAJMpsTeP7r1XlH34fWnFH8goQOrCrYfPHexPnghvcNbb%2BbF00O8c%2FvFROC7%2F1ThVGIUt%2BTK2KKczSFVsyhKM%2B3AEFmzmv9NMbP6kDA2hUvwuCC5hEfx%2FEDSq7uOGQUULWRXiTMop%2BRKYsFlAKtvKcD8YSnhIJ2ytXOL%2F2V9NE6n0yef82YTSGWeFawm%2F4mCODnOpBREP%2BBrevvBhfPmC32afXKAfpaw97mJbwN3Lukf5sGV96wDBE43cYZKmjFwIvDlYZvOVen84NvKzTM8rHgk%2FNg2e03mzVqAy98P91qnjoC7APhkzQ18Gsd%2Bbm58U%2FCMyr1fL%2FaAXGA1fTkYe0GFH2GseLFOr81GICbcbfvlZyu5dWn6T34QsgziXts3GrIL%2Fyau7nXjnyc3xRm1cgptrXoZg%2BxBsG6ovCMEls4L1ju0iyLf%2Flllw4sB%2BV9loK4wlYzIyQY6pgGYgBio2WawaleKWBX%2FumIGfWbn9YuEJ%2FpvY2cp2BvfFbe67cyBYVRAcOv5TPgbpLqwpb4pQdgQP7ukCY5%2F8pounFFIIinZk5ledCWlNl8zGQe1Lzjj%2Fqq3SMCJTNu2wobKfmznkqGvYYCWJd407Lq6auk26%2FrqX%2BiZnr%2BbXoQSDzlYjZgM0Mv7lVbdutrtqPMdGeIo%2FlXwnqqO6gx2yT246a0a3isB&X-Amz-Signature=40dd802e5ab88303b1359c05450694259c1d1758c342193d298c7dbae0eeeb19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

