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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6W3ELFI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2FBipbDd8dEQZfpHDLtf%2FyYj3sL0EVL2LIgaR8aMO4AiEA4tFc7SUPvR9Gm7lGphqOkwLEJ5jTKjt3DkfGiIIqnqwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuNOfCID9MEj9lwuircA3yPktlp%2BV8%2FeRB5nqJJECA5pIdGf2deB6sDibTmcHMcOvnzAcglEBdaasMMtUeuZo7FVofrNd0h5UtlPGn1Wo8xKduK6REQCRCkNeoLLZsG9rqt6pIj8DxF7Bx1DmLhdZ5%2BWflzmluEJqqQ3YmmCrGUZviBDGs5mTuVtnlvVimINiH7o9faGFRuQ4SFInEueUr9iMOid4yDGnQgNiiIY%2FQKVN%2FwS4pmK64n%2FCqR0Kac4KhBuaM5vnq287dF6mVTFlfxNQ2Jb%2FI248OfRyvryUTZ9CBfK%2FvBfl3jX4dq7wN4wSv2CDZHW4olWJeT4vWuSzvvyCTJMTLger7WyC9VvCEBTCTh79eQeXW0avcx085rQDLFZ4oElGb6mlkzySvsvqeXy5sHMmUcogUvGi3YmjBoFSi0hbeML5DX94I9iNCzSBBTCjzW1cbBSdRBRNgBb%2FxZrFv%2F5zqf43O38b%2FIGMLkxod0b1VtDyC5BmPq1tVk2nSNwAkGAAxaUgiBNiysp7167OxBfPGqfBhVPB1qMbS7DG8hbY%2F%2Fh%2FYC27oGFYSub9dsZdfQc75I7mnfUSkewztm2cNsGYrTsB%2Fz64Cj4PT1yrJ6ec1zzKXGfA3WiJoR61nJ4sigf7nEgQgdMNPl3skGOqUBRgTdRfNUBzjqCpSupljIrb1ljGxe4lJ2H%2BldubmIuSBX3WnbMb0lGYNmSYEg7cb20DQPZjXCWIaZXb%2FtJO5j4Nqru07v1SrLvqoFpPzZvAEm%2B7ZqwecXcaByVOgNnsimXY4%2BPjcQmLoakE%2F87Nx2fgZHN%2FDoGJEsSxiyMPguVklCiSPVvkozRaFAdqbqP7Xn4nOk9Pjg83ZnAbcuHCZAPQWZ5%2FZZ&X-Amz-Signature=65e3d88b563bc3c5bcf0b2c01af1d68b7cc810a144299396d6dffd1db81fbed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

