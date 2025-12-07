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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXPNLKO3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T113408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDj8UNEQ%2B7wsuFHKvLVfyFJPM14vyvQ9HS91yvvuSoRVAiEA4IaAlpEzGBtY0Ewfb1fje1mWmK7aB5U97qvbwl%2BMeWcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjo3JiA%2FB%2FlGgGoAyrcAwup22gXED9V7MYcgKSqserMz0GB3RsTXdEIxdOCYj1XYFLs5PIhhQ%2BG4AX9yfiOjzK7C4cDIL1biksCqf%2BPL5%2B%2BqJel3fjDEf%2BPAo%2Fy0UEHTGRq2SErK8pjoOjdBE1JH7jOWBqhQRRBJ13Mu0GmbR7asbvxtLk7Zdx0AMrnPYSjLVVriN2xEjC81mDTNz5Qe4%2FIgwBNneb8mapfTRvNIaQ%2BN%2F3nRjxQju0uyE3VgR718PLmagjBhGKgf8OMq4oWdVBpRANR9bJGVDqj9TJQMzeIXHVLjPbtNrd0u4d%2BB%2F4Uj7E6BgMFFb0wFsXvZyNfxyx9TwkeQ87MGOOiXJEnXX3wTjVIagPG68FvX5y%2FC%2B1upn1hkFnbTPzZnyMehnJsNksvql1oDQ5fKh37lNsbZqkry8yVyQCaeibNBzoUJqCuH1i3HCo2dfNxjijMavRXw88xN%2FCiIcyJu62CCN1ef5AaOcWLbQ9ezQpSHRZnw0qxLvJ9k9jdVC3zjH54y1b5P9pHLhgpm1R4Kkkn4DxsFK%2BB%2FRM48HH9rn8E0C4Vg7qQp23cK5kt3%2FvgSmDgmro3zpaUtWlVKg8XwIuWGGpmg27fnH2F40MRWMrOA5Ou9huXVzAjWM%2FblayQO4h7MOua1ckGOqUBKL5k9cOJRGMXZqsQYDy3MDR3OTzRaCujKjMokK0NpbvUp3qrf5Hyy1LKyyZJp3l90EWP6yC5wuPwUmUBzLvCZIjzI2NrMwraVt0rpplkZLqPzvLFTevJu9WQkkjwEphKrLERNLpTxaapOWqKB2ebHHIAZE2fu%2FZ%2BmkwnLRmiMMakqlMMfp%2FBIZnbLtXDzgWfEiVuZXfe6dsbPpIifuboWHabHFT6&X-Amz-Signature=e358cbd66d02fca828682a4b2f1cfe523d14f5d156a9729bcb11935f06c43b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

