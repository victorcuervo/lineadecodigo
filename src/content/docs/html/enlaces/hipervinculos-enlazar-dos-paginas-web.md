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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A23GBVF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHN0MOUN6G6Zkm2h0VTU4uZBv8vXTG4m%2B2uJkxSNtqFoAiAcD0v%2F%2FpwRGrxYUdHQSo6T3VEOxOdUOAyglpEkQHy6ZyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQzo%2BIWZwCjzF4pqMKtwDOxHByvRCFgj%2FyqBdVM5G8y69RtHEnatfQGPLG4a72ALwnBimBsaDnT4CRhvy4t%2FYwdLC%2BiFpnw5%2BRfdiwox1MNLUaX%2FVz3I5Hu9HBAVEHI%2F%2F4yQMB%2FdBsRKyLwZtaY%2BPFdAG8jen%2Fv9aNJ2k%2FgeEBseG5d%2BNh90%2FDJxE9gD%2BbO%2BDzW%2B7MY%2FSn5AphH7kXxXzgJa8vLF4GoW42qBScwilk0PYKymAD1%2F9O8xueJ4WkqXwbOqrlpRYEw%2Ff%2FEkY73rOcfwe00dQHR9FZznlXAs5LcVZ0R20S72cQgNIW%2B0BfaOh0scL6MFewRGioa1T5i%2BnDbCZLsKVGD9Q6xFW2R%2FzDOF%2FGciu7HOU3syy5glnct0%2FrDyAx571t2rBK2n730%2Be%2FZ8BFSPKk7jBWUzHbaar4eC6oqzHidFEK6e8wmVmoPS6poEuuPHywA%2FcOxqln2qAwpwJYYlyjUZQnV6Z2qhEdm6W8%2Fd%2FpAQdCyL%2BKwopQVOSUg24I%2BWbk%2BUkGhCONS8by5p8Y%2BP%2BJvmOxxMoHXnyy8sUOWUfwQBkHUI5mGwr2YtTfuJn7zSBWeum89UIY0rqrA76Gqkl9ohFdoX0SyvMp5i3pYVBYqfg2NS0wxIFXNsB6yDjKtc7xP0omgUwv73WyQY6pgEzY%2BXHnLuT4ypVGptKNVJWdy9fiNi5tSy4dX%2B8idO4NHhvCW1ZoCKRmv54eW1Xa8j%2BMkpZSMcMcMjDL%2BYiGjOS%2FU129CEyBbQAVZezdIObG8wSZUYXhuwMurUbchVaFkbc3Jvx8Htcj4QNZI6ze3S1G5HMvrVhtJAZyjy9I8zETwLJCMoy4efG0OlMwSusmeLKXU%2FpPvYF999UDUJImh%2FfUMrkQEUU&X-Amz-Signature=f64c228b1f5a044f0d5bb456959e7e37b14bddc8564e5d9dbbebfc9f79315fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

