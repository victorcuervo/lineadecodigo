---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6X5GDV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T234141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJgLrnUf5XO9Fp0OFSrwvbuRqDiAyExjZKyXycP%2BpRXwIgIf8yMjRjJ7xfnAl%2FyZVKdBi8tW8QDMlo%2BLLKR42bHggqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdUOorNLKMdoQx22SrcA3id5ykDab4T9PH16QRcTc28n%2FHSFnlMmZakzkq5lwfFgkXvZOu09ET7goDROn6NSL%2Bvk%2FhFnw736zOAJYkFO7sbpZ%2FvtGdu3oKRfXzKogwSdyIQh5REhBm9uAqe%2BEB36%2Ba0ItFuG7ScqlhAIoNBNcjR3uDjBMsp1jxPk7kEuwtwGXzlC9zGr6C4%2BfkBeI17FQFaWeGn6YLfqLzmNTnxBiBlNJI38lZaT372%2FwJIB%2F6pO0OcL7ypvf9t3ew3654TRWTUI9%2Fgxbs9MGV%2FReY35ogQrURME%2Bo0OIjWoF8fttQai%2BQY7s5EMp6F%2FGSXE8Hu%2BBRgwkQrC9rgDlXKvhETyo8Rt9AEr8gX97%2B0Dl211DFX9HK6Lf8D%2FzJYxAThufetaebK%2BRvmE6v9%2FBtoAz8z5uAyLIDwh35Tx3VYYvYIZ%2FX7Gg8wF0Fe9%2F4whZn4GhljAjWmGVw%2By0gZODG5menai6kUZyPl0A%2B2bROSsqOAiVgLhDXyrgStPK7vvrcuT9B2hcvKP1Ri4ku0rm2SpO1SEJ9HVWzG0QWwnWk2W4sVpWoQlwu7IIHc71Ad5jxOW9aKI0TgZwYRV6rJIAz4d1UyODj6ZlvBx9K%2FDtDCU%2FqBPpVa6qz97oLuvte2j6L6MLnE4skGOqUBzFBHUw6VDmSvSgM%2F2zvyAeqf4Ri8%2FT%2BRBXCgqAEQg3Cznjjd9vtE2dGMNlBOEiC0P027B7yrMBiEZNbPL0LcrUvvTJiWgbRvHNFim7n%2BlDgCVfl17UQpyGKhkb%2FfMeTeE7hp4pOuBmFhTZtfr35Ha29xYAFKMYQXMb8d%2FpyEZaTPUXdgK3tsPZjPaGyc1H0Ga7U%2BDEwhPxTT0wDE8hJa3ZmwuLZB&X-Amz-Signature=df7d2e4fee382ecb28713cba003d55c4eec8a13164cb138d9e539c72c51231cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

