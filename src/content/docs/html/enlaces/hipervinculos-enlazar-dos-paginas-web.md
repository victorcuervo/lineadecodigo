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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGLFKRRA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCixPwCn5RB15C1iL8TyP5l7fHs5eQJlSk0sG%2FGRt%2BXvwIhAM358iltBekEXZTW%2Bv1yK9fww9arshBfw4hZpCZOyiOaKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9N%2FzsEv%2BffWng4osq3AOTDvVDZH0Uxqt8nf52aqc3eQMZ1GkW6aGkmeUvOxLrbvGjvQY4ehf%2FczYqT7yomJ01mXFHyfK0Kwvw0wmiCD1%2BlFcNGwjjsA%2FdCm14e2Lk9OfcYz7zJDOT0zq8o9gW9MssKlHTBRwP5beH1IgKc78ycHEH2Rmu6T3JU3xwosb81Xodc0RwqZt3alvMFenen%2BlvzpO7xkRleO9sgGeDo1BUWooXa9GgemPZOO4eNQtWX20rKQTrR7lKisL8SkEvwmPDQU82hZN0zN0o0nxOb3pWX2DOG8iibqoO6694m3lToHnWyaGgDTwa121AAfsIhm%2Fst3EskFw%2FfIq4a7QI2mr95FRAhiY2aGqvfL%2FaqdBWUp7FcHJAKYTIDwwU807%2FlHZSThys61PvfSsypR%2BvGKhXs8%2Boi8xptRQG8gcLrk%2FAR8jUAhzQM0yWnHTV2kCcnR%2FbI6fPFRCf%2F%2BX3KhnhDHgk8ICA4hfON9zR%2FvI12XI%2FphMUwmN35d12z%2BdVvLiQTOAi%2FniTizZfZgNqpUMTaS6WPiSCWVYzyaFKlWuvbfvQ7KXv1t%2BqXeMmey%2Bm59otKqnYH21S2WtLZBwQsZKGLRqTlxOiZExpFTaaPU%2FNgos2xPVpqoSy1i%2FiWhsCjDCT0dnJBjqkAbiZxazI%2BT1axoutJIF5bufhq%2BOGCgEHptqDLnJzQWbH5JEm0xbupsXWD0uo32Kh0z3QDm8UNWDJe3gVZjP3RgPstiPOFJ2WwyDIfXBn%2BeLfX8u7cidrkf4E81kkulEoOreLYtzFUPtll%2FWrBiKXF%2BBzndvkFnHRYa1alBZaeo4VELXZLpc%2FIyRuGlpsBS70z2CO7Eeu3YCc%2BEr05gzX2lViKK8x&X-Amz-Signature=416e290d2996f095d536d7df960f11936c5ba1e5aad6bc61984cf5fac3dc011c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

