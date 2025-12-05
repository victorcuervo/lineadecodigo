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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOM6N4C2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt30CzYblpnKGSwt8J%2BBIoHu35WUFX4bZYeCL4%2B81PiwIgTfICl0oIyH7j1LZ4XjV2OkCvoExy4ASVMENdWKx87zcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDNAxXwmzI9%2FrvMvg5yrcA%2FIXWw7M8cvE7cWmzeXgTrUgZTUixmpmJM8T%2FRCIfiDJYiS6v5wdJjvpO5jeJ%2ByRJE%2F8NQGK04YcnVuqnYeJQKaNUzWhB0JWBVZsEkOLsXkQdDgIx27VBqIXCTdpS7Fpjs1emvFDsneywc5NgMzE5T%2F2c1bKRwI%2Bn2O%2Bl3Q0fGIYfNrAtzKUvLF0gbKzhsBQpYJAHmvVrXlc%2BQiDPJU0X4cXVETsxDXaQg1TbGkqzKn3%2FXncG7nyw7kj5xjLbkPFWOWGPFgsT3WYZZbC6AaLyxi8uvG%2BnoOp8hDedWe643Rno6%2FOxgoLHTqSNMN5tWJoYY1i4hm%2BSZ1gIha%2FAyAJlrOebfuXDE5kcOAzCyoS%2FCOXXfrVNz8tCZDSiW%2F87QK9by%2FHgKC0Vq9%2FcCH%2FVuZms%2FZ%2BISDjbbbsOsiRrjkKPY%2FKX%2BMh%2Bgp6%2FEXrW2Ug2UqHnS%2BVAAY8Ge1lnG4%2FQzemvSXwB7L0g3Ug%2BLB0L94F8hbZlWbJdVmDBleV67JD7DSuh%2FlT596GvLfbz%2B15kkNraquXdzdx52Kg5b0gYGqnk2qPMYtIdw0Kk%2Fa163cDDRBf0V5b4ljjsIlKaU4S5tJtel7xmaZgvx75FvLLfQOwGvuE2OHzeX8NQfgBOjDEMLvty8kGOqUBWAV0R%2FwWCp2c2L2CN4sTPQczJ%2FsUms5brjVmGsktNVqqJ730Q7hhfYsS2mOjt28xI2PMKKPMkjPJnGDBoOO4q%2BzKEYGMc0TVgcTKhpc5jqmssuDleLYMxqDgbXg3OAJMfMqritR4u%2FzJ%2BaZ%2FiJLnf1hZHl9uVIC9F2jZ7M4mQyEjdKvA6PEIhlUccPKyOrBaLEC9e06vS5lURiW2im7u5YUp8%2BUy&X-Amz-Signature=c7f67b5ab7c12914c9ad74c9185c0fb6085976e2941b1fe8c12e89478fc83147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

