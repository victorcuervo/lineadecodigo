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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4VDAN2S%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1WgkJK6dUUf3yRrCu9S%2BerqL%2B%2BfAkODvoEkM7xJRwSAiB%2F7oL7GFtBoaYr0EjOi%2Fw0cLsKOSdr1ta3ZoFaRk4ubSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM27fLCWu6J2dgkHlFKtwDKBJHiHNFZqHxQDaSbs%2Ba5lNIRe%2Fly6Fma%2FMN7%2BqiwWTGXl188xuG9vl0t1J9RSrja2CgEGQJ7ZNoTkmqwKHGN5eTn6eV%2FPjarbGQI42TtSIhOLHvdYN9e74fAKf4kZjL3iJpXpMi6LNSBCROhM0S7hrsEU0SxYHzZ%2ByKWHgBepBwGtNFpHJEGwT5nPMs843ZjM4x12pLYL8DD5mzKrhKwxYPGOw5ks3ZWfl1oXw9WFtzT5tjXUv%2FoPsFVx0%2BGupqdljXlVJ3tt7rHUnyKM6MD%2FoXbQhxVhGu3b%2FPQO%2FwWWwxbWmMlTOV0MeAsaELhpqHq1%2FqRSg5un12IwbDAYJAEj2ZdPcuc5jajioBuPP%2Bd86QvmjzaJl06i5sF0s9P%2ByHc652xJzh3nyobIcIc28DG3XVQ09FE5k928LnkCOo%2F8mWylxJvz1Rg6qCjVgOagEb0Dzw2Px0zw4lUp5ti9Q%2BqxQZv5KgeUFsANh7fazHOIiKikeweYGV%2BlrD1PKvNk4hxNTzmay0eKKWO87wY2r8pZrYr%2FLn9y%2FXMZ9kqsFc%2F1z9dOMHLJHEWzNTF%2FpboZ13GATE6ow5%2F2VnCFcJEUfWCl4ara36z%2F7HhTljKPNlZCSkVqMPlKZcdab%2FmDcw0%2B3ZyQY6pgEhqp2LQj0bwkwfv9QQNeNKhy%2BVM1ZPBvPDDtVA1eaiSyzpKPZ7q%2Bagxn1ItA7ZN2qVofrHHiTIjtDtaq6GIVFAoAw0Mm09HBQySaA3djY%2FuYX2qVEIV9RkiqiDh9qlz622xVvAba%2F5Z1IK%2FM6fpKv4C3wj%2BMHTg7d9SjFQhYi9JUN6GiyvydsXIgXhhZN%2FZNjUQLzYy9wQes%2BE9MjF%2B9ivQLhdZVbA&X-Amz-Signature=bf6440a5ebf7cc387e19632c7afaae642ec73daf0f8499e982817640134cb2c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

