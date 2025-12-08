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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCACETN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDF5iDCMtNFc0dqWov5GBrlSPhrEQook3SYoeSNHsgQXAiEAnaDhUKKIj23PkH5IgYEAvZiXsHdWjHNq%2FmpqgMuPXZwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKeOj8YWG%2FKHLm7PyrcA9BUvysxbAUHnTjNlAdy29IgV4hrkwbY4vXeMhk6WkPtpTG01fquf7s5hJ1K%2FTFWeNmTDWWxpb%2BkrOz5xglMajaGBvW8XEJAmsNbAdI4BHqClCJTSAUxTmZ3k1azNLn%2BQSApDIiq40QGSfsUlA90RJdH4X2cU7PYsg0SafTDvANqzSRGa%2BL43iv0Dwld9Ajgn4GNgHkrPGkodsHJLfvDbGnB%2FuuEnxN43%2BwoIowZCgWhrktAfJXC7t6rfWwZdCrRZJEawC3CwZ3A5CYKS%2BAEcbQTPWStHp2ybf9MhYrqyOzaz3y4iMvdo5SFmhhUw9u5i2VGR9w3zyTVBA%2FzYT2t8%2BTuG%2BSPZDshp3EyhyKLR0BrAA8i9JA7Xi85ZnX788sI8%2BBEja4BaaYD9h5954oRL7OkcVqjy%2FDZe2YewIrUOLKLT8mtP8gPut%2BP7pBwi%2F5pJ0Q3u7cXrkDzwVXANyQfOV9dGZyYql73ANRctgh61%2BWhLAXrWAiw7uSibVb5z%2BKCk%2BATrSnJpIxUyaySqwJSLDdScPDznouLGh5x%2BPqWuUts7dFetTa2EwhPL8pLxqHi8gOW7qR9xU595o8n5Myu2LxJ2dS7fynbHzabHa5JxWz6zHVeE%2BJTsVAQ9%2FScMKnc3MkGOqUBI0eOJT3rh9CVYbCVCKl3MBVFdD4wi0PrLxzMv2BQ8JEaufrR3%2FKhvUUso%2FszkmVcagmbzySIDJl6CF46BfaiuEn3eYVOvesKXEtpWetByj69ZTechy8ja%2FB9QEXdpNhPMwGfP1piguirBdDBpf%2FS6dtFfhA%2BLLp84O74U7y93Cdkc3i9AparyCMHztiS4uCfl9gUEm%2BbAnwdo%2FojbRNA3OoZQ0mu&X-Amz-Signature=93985e299150bcb5b74da19504b4ca80239ab2f2a01d9ee7148032eee5e7f111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

