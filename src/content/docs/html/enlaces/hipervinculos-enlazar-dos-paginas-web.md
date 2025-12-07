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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5VTF4JU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHwqASON4%2BpnLT0uBJ61GS2uN2Kba%2B7NNYm%2B2ryZLaGkCIDUZ99HqCeumaqE4ZYsi6MG4Dy1BBPy81u88a8OnZ8D8KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMZ6zZ5m6zGMb0rGIq3AOEuCEJ12YpTISbXIRU6Gmq8Cpch9aUVzJ%2FxZU4nza2BYMMuIPe9JbcmtwrEHXOYBRNcrdxWu6nIUzMaS6wGrF%2BvbqBPtwnBs3snYDwy5Bq8sofe7BbsiXo3LUIf%2Fao%2Fmhwp%2BtV8I0CFXHDjvjjIlecggeYg59WIoUejk%2FXxQCicuMunOgFbNQKURrpgZh3QSA5FgaABoEZLSVoRMtcejZWHjFH%2BVwSfcrnlIyHvmtrji5zDoUDVxZNX6zU8MVR%2BQDrTBGCY0DZiyGElSlrdKkvjFCeMoOc5%2FB7fWZUtM1sNNXixy7SIjsXMSWAzEbQTGr%2B5QuIvfG95hL8L4sdrPfoYRNhZuUXbvnFtqKwihHxVJSuPdi9wt3NdVsrA74q8GR8NeuhQpVp8OKgJXBcrmcLGViPJhvLCuOJhaYYU6yAwtfa76DnhZtA6VJ72r2meszxMDjVCVQ7n%2FLejEUlWFEq%2BRSUe1sRGeXQFpALBjT1NapGJxHGi0mWUpARuk%2FCh2qGwBQFl59BrT11J7qSlVSH3hkYmLpdSrS6%2Bie0iu0fFqbxFtjHcnuPhGDCddpniTcA7CbLx2TcW8op5pSTLxZtNWOkBnaqEsp9oyDDWSa9N0sUTnmpETvvmhasazCKqdfJBjqnAbKOBufTYAX5fuXW28BIZr20Y%2BWSC9gzWb5PIRgCxaDLf4e4RdpHnkFsoEsZg4Mt1Y9JLrOql3knTOLGhFYHoUzaP%2BuubC3udKiUYdwc6zYOrFMnzCZlKIDCqy8exaJ%2BifZjZlkofit3ZEnchr024apemakxWm6zT27JO91TYVAQoY6s6AWwJ8i1m0sYb7ZW4rOqcvBFNN%2FGLjFK1EC1TVf0GWqBWYLZ&X-Amz-Signature=338c34c0477e0f622829c4cff0c29e56d0306be5ef7a7d5e28827604b9bd17e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

