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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVAYMKO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPv1m4MpagDG7%2Be5j0%2Fl2KlF3nxCcujb63XpTjdbsh3AiB4NniXe2ATdw5TCFAuH%2FoTbETK1cds9VCjDSxybyf1JSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM80pqgCLxQouu8PS6KtwDR%2BiKwswUK7Tu62dW4XyoySTPkUXM5juOA%2BU%2F3stpWMMY5%2FMaIrrUQvlfvtwtL%2Bvqe2JTd5skEY4V4jxbB4hHgKr%2B2KdhLd42OQHU3bPedCXIyePpUk7HNczq%2BoOuraESE%2BqlYsPGu00AJajyt%2FgxTkZWXU00%2FiORtI6k3mNO9pjfPxDut51xr1jo%2ByKVAvblHMe5d6TJydvZ92sONfpinhTVRiZ%2Ff%2BP3xUDWSwbGF%2BkELvTaY4X1ljmv2WgPIJJcgQ75KPrgxu7byYhGvRZFgVlPm%2BLkiwl%2FZNypBNDWrgcydkVUCgTzNPDGN0dZEYzpIS0%2F8aky5BQG52a9xHglfe6EAAuKflStJZcHJBJQDzpwnkhFDzK%2B2IWvtRDhbmsz4auyyyMUzNl4vwlXniSQLsjFmWj%2B9%2Ff87B%2FCBnjGAPHPV8sz3NObaJJ0M9wInuMmsB3qFjf4e0RvsLnn7uH7Fi%2FRakiOTtXtcpHLy%2BzLtFKa7muCJkIOIL8G529AsYW%2FnxRjBlxb54xSMJPTUuBEwD%2BC%2BzH%2FCp2k50t8EXo7KjnWn8%2FMZqGczGDoVqxLtBafuAMDfG6o6TIaav95wNYpbKc20hCHAb2qXAk6Mg6ybWQ6WaK2xdF2O0aYMHYwl%2FjLyQY6pgGnsqHqlAYC26tztoJ4X2GjfXfZAEU8J8ha2lq195nJL8eMGp5oC4gQAYXsYW2FTGr99DGVVXIXHyX88xq6UM%2F1b7r7clsgCXl21JapCsT6Q634rf59zaen3g8a%2BItLCKinuoEC6TtgXwGE4vCHEFk8MOaflZriVAoe1MFT3jb5wTxTANYNEqh44P2zsTnLYFakA6fYWWIjsnEHELWq4dHj9OA2dnc3&X-Amz-Signature=a8cb69b986329dd808cefd83d9d89b4aeae0e22909c705accc97a42fe3a91049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

