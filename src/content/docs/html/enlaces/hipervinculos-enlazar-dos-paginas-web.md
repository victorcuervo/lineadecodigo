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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7ZJFPLE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqDVIgYxnU04mTWC29nRKZ43JEbGPchNAQ%2BDfEzYiDnAiEAmN0d4rZI54FnGsd4sUi2RLsLXdzebFdcdwi7mZ4tLXQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzEV6fl3quivtyP7CrcA9hy%2FWYGIGG5ssI9tRbNrHQITkoeiBULUnUHeQpLNQvHCQNGKVs0TPqSTIag21zGS7s%2BIFVefEUsWxiU6aotulUTxnAL0ZN4MBIqhh7Kp7iv25NGENdm9gQGGla6lqEr4FMH3PnHfqreref6zjNXYWIS5GlM2nCETMc2FSJUSa7szLy22N01JuJv6OdKR16yU9LpbQxJjT0EfkrtUhCg6fWisu3yClNrxICdNmoo3nefAk0wRY%2Fyp76oxwZpUos%2BSuMNig8Tn4Nf2d2c0lbz4B9ZInoTGb%2FrrxiFHahM8kb0U82K8yrzwws0zlrSpl9Qy5aLLtjW90qbY8iBfkyQAzNc7ERjIGUKKVnUidvI%2FrMvY24r2CCvlSNJFHvGKeDKNqea4wBbCIcKyR4ZcMMxV7%2BTdCaOvg9HG5NMuX4JX1sXWESNmC6Gb773OZhM4O4j8kROQA0TujXdsndF4m9Ou2AbJf55P0U72rNDRBeQ5tf1XZgk2%2F27IU%2FnGz8080nxE63anjydalIZwQY%2FmAVK4TVKCbgCEAb%2F0fDLIKkBfIIVpjo4UxfZbQr5UKg65TH73042G2KpAUwBOgSvZqVRc7TU0nl3WxIyk0qMZxxo4FPbVP%2BZsVuCRal%2BWAQ5MI203MkGOqUBcJZgGj057sBUfzeb9wpNcwA1PpqA7Q4q7ByT%2FI480g%2BS%2BBCIuvdgY4eL%2BxS%2BJPXOpPzw%2BsMTUVOonaKIWzZ0m3VA66%2BXQEGou%2BOgWH7nyAZaciqj8uHmSAmfyM%2BXUWHbQDB3yv22pXAU%2BHces0BW1wxyAWiME8G4uenUwXbv63CsY%2Bil3%2FCPgJyc2qjVzdvRDYhbjBh0vBdCwW7y5F7RVbHd9Kr0&X-Amz-Signature=01b180121c43d5519c3993ddcc84b63e1594ae585bc464734ffe6fd55190a592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

