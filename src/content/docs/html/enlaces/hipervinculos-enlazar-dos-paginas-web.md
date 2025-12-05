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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WTMGFDL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC05boIUKFUiZb4dkS6JuQC1XZ3EGrOYmCvP1ACBorIWQIhAJfqLGPbCyktR1jFN7FPPCNx5YwPJEXz2rUVp4d1fwKpKv8DCFsQABoMNjM3NDIzMTgzODA1Igw%2FqQVvclWi%2BjWd%2FuQq3AMFt5UvhUNb6%2F43oCx9km7uBSzOB%2BU%2BlqYeFkW%2B%2BKRNHnambcF2amihMwyCHfaDAgXpfZTX1zQZ2CHM1noRIEXFRRJTSFD61ZyygRGglJJ5rVyjMfXhbE7na6HJ0WkX4aOe%2BlvR9VxuQgXMD766RrGlDXXrJjdW2GshVlmApVDl0Is3QD2j4GycTngb6kYhEIlZqcK%2BAKsWaraYbAfZSG8gexyhBqwFl6jKlkIUK%2BJSuAhqSfTe%2BbqncIgiK1WVHEqJMrEcYElKFnTARu5nRdjberHl6esM9h%2BZ885UQ2CMs7u4RkYfT0pwfHG70bCngT2J8pnXljQK6nCDD7CQNBRV1bkhMa0fyBk2%2BZhwUFs%2FCOgM2gr5cTXgHehkU4Yx4dML4seMeM9LlxIhmUJq5fybWxVNowsgyObutYH5pcuMIJxI%2F3mihyDDNlMuAvZg3QknXpeSCNSj1ck2Tt6vpew0zjM5qWYHyy2vkdXZAo%2FXKvUDQ%2F87dY9B7q7ptbIPJQpsvvZvcGlnK7Rga4gavtk5hOLXAs6DCSeuWlf3NTzqef01Pm7m9tHbwXq43D4HDdUbI6znzMLRp1gGxXFnPPBPOb6JMLDZKCaHWgh9psi42vHu06HzfkGhDG63CTChz8rJBjqkAUtU2cfBO1W%2Bxf2ErpCUxjuDDewxvC9qZuCAN38fuEeluxtCKrwTS9wXNn%2FakKoSM6PbbgxzorvxO1UlGqQU2JXkjW7yElWtsJNTnmeNMXjJilyQVDfl0jsKrgKA5%2BGQ8ilLZXq9FU757BLekerQqOipHdDjQ3OgVKs4Lzi5vRYJ2SPOIEcKUuQLUjPPVBj6u6kfU02Mv7i9USiPwu%2FRpw6GcgvL&X-Amz-Signature=19ebb3f68c4404a6219fae57a436f5625c247185a1682f815a663d15a0fa364f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

