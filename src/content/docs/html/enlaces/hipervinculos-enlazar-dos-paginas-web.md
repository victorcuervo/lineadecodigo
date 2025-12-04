---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DTOTJOK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEloZCyLl2VSkiGyIdMsNQYkpx7m7vk%2FilObFA%2BY1B5aAiEAxmW6LrejwgkgXm3zqxicPf15RFL%2FhI73vIy%2FG3OQRfQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNcqDWlKx0fRl9vQZyrcA%2FeR60T8oY049cFeZlnzFI%2BfF9eDXEkngJBTzIo9rKHP7hscptNhxjAh9gtaPEPQjkjpQeIP1lJbdMjhk970g%2BsNSdo%2F8lXRT7KLG3k4KptScfPG6BMK3HeP5DDDUcuPcZRGS5atF5KE4J6Z0enX2pef%2BA1j8MtU%2BZTrBBxLyP82iL%2F9fkCTo0spPWYklzXyUc5WNQ%2B%2BBq6YxH3oRd4xSegNna4b%2BmLr88%2FZvOCaFqorQWLVRxwM0Rz8xGzyTymwc54cawJYkgpKghPJ6ovuNwhGE3MN1LNvYgrh6BxRVZiB4eo592rFSvNh%2BYt%2FpFa4P1jDuEoS%2B59LbtIWXlWJ22RY1c7tLn8en56NDFn7GNUJuLRe5QepHaym4Tsz4Lz%2Fm%2F4FWb4Ydos4z1neNKsuZzd5m%2FFCWhTU6XbfHP3RLQqHuISTbVdFnMFP9v2uitGOsKUvjU752QX0Es0TC%2FhiUu9K4M1ItPaSboEw7R67THTnVS3jiRj1jCsy5j%2FflsVYH3qOYckYd9oJgbmS9OmrKd6AkDFSqN7QbRbYPbrmhbvSnBIm%2F78D%2F%2FKFYe3Uf1f5xhW1lrG%2Bg0uWGjx6%2BjRGfF1o2dMiXMQYW6wRUzGwBIPKoHgpd0DHMOxDTyv1MLKQxMkGOqUBdjHp%2FLXb4E3%2BTpgIgaalgM%2FQ1SeV7bGpJS6Uztn3WaKx3jKAICZDDYQJ5NZlHsgXAsoskr8FwY16uzSZ3kSICd%2Bi4o14KPevSaJUBXxlTNiNABJ0ROS5TCL54Rgwgh1g0TdznGN0cKB%2F33%2BAe2vXdjhT1ddrBdfeZ85%2BsyzDmS9NV6GenvJUcEVYVH70XsdFDkFM7SG1JBFTq5Ll7u0oGqY3FZlX&X-Amz-Signature=1ab3f07093f107a81c3ebaa4fc65fce6ffabcebcdc77fdc84ce5aed90fcfb9fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

