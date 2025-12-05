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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GA7CAPQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T190615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBb8CVTc4BI3%2B4SgR0IHtZTqRZak1T2UipUf7wdEOuW6AiEAvtzsR1FuRVNglkZOCWdqrASKgWJvmj%2B9R9BX%2Bp1BAqEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLnk69%2F6qwAa%2BwEx3ircA4F%2FnGnlgEUm%2BQA3ktXuHa0rw9HrGy%2Bmn2XpJbs5dSF%2B4id%2BQ%2BRWHKG8LSb8Q9hy6f2eoOKP8X3V0QDJ%2B0FSEP7Obs1Xpw5%2BxeZCELePe7TLhqJJwM1I09QwttwkOFFzv5w4zYBy63ejws268g1lF7vLyi4ZZIPDhQNXe3X%2FqYKO1l9r%2FGLnEqQaGrIQJG87PcweisR1KvBoA4cSrn%2FpEaBNN8eSHidIkUkacjDkLU6raXx%2FVccgCQPT8SsIWctXMH61PM5IZmIZ%2FQ0n6b2dmzl7hT1TZsrx4FCo%2BNPMzNfAe9mwdcAngMENXadhWoZLxogJ7aWx3LYSDzYKyK5x%2BuztwQDifFBmDwrotKy0JEigYh%2BNH8bGkLFUHW0%2BAjwXlQbAQDYEow0mFtNIbaJ%2FhqzDWlK7%2FT7CpgKxxktya3aRpKDCXl6Ff9jnejoWkGt8427gtw3i7Pa8195KwSBMIaxF6tXTXR3H22kwLC%2F2FLJVpyHIdE1LrCKmAWnD6nc5q4SGTm8Z9r081iVBTmyqCnqkgGjFb%2FYcFW2HalBrfOyl1UIEFFJ162dyATlckop%2BwuzXLxJ9CjUxc%2Ff6FJaV%2FEJiELJFHwVvgHJ5y9HaH4seMfeZ6GfeuNvFwvOIMKvzy8kGOqUBmB5r%2FTXBCG4%2FmydqtVSum7kAk2SvYYtmOuuw2dTuU491k%2FsbNA3xdXK5yC8BqokQFCff4lvL7HTCxngANI88XuLjMh0RVxXO1UeA9XeUYmOd4PKPULGjc7mC%2BbNryLjngjC8Ibd5ekL%2FlOZ7NnmGSklEAUIv%2Bb72gJPvWgYOjUbSVY0Q6NgehKB%2FoeXFk5FXNptfP5vACRe9u9IXWrYQUV3UDjyg&X-Amz-Signature=150f182ae20d3a8e8e20a5051d858d68e860c42a4b491c373e52e6a61bc5c424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

