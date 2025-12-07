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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBODQMAV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T183512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsw9hj1OMAgRe%2BrtuDapZdgPCsDEeUn8QR1Y%2FUAykWJgIhAIK7rUk6V%2BEJtoHMtNOE7ctCiMP%2FKc9oolHJVwQvxjP%2BKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhzaEEPwhDp91JY58q3APCeBeqeqmtWciMI4V5WEsbGRdRgWiyl1IN22iLeiBDR%2BrNV9k5SPyYmajL645h6s%2FRkBIWM5ij89M8Th6GnQklL3uhLijaQVOaP5cnuHHiTDhFbFXwctrZOKHG4F%2BYmtdgcgi1wf97dFyLgIv5s00UEPKGUOKYMpU7q%2Bg0EQ1qEqBjTV09%2BkvFjYM9Gbp9n9YJKireL72amzopOWNCFo9Vu05urEFAGydaKbmC7I5KDj8QuTLv9GIbDa8QvIlDsnQ6y0S93ar0A83y60yuWVVx1nx83GZRX8LPMRZgK7tUhq2ijxH7KJMLH75dXH7LSe%2FUgL8C%2FYxX7Q73XmycFJXsNUuv%2BmVHT%2FGGzBuuvwJWkRs8VKJ3P26PsjhzDLWJ4ujgP5vR6SVHevrXFXz%2BpI0LBjEB433W2bA15KRQ0CF5ABoOMPdJ2lTOoeOU%2Bg0cCl9hWWVwbjNn5tRDUUSYm%2FakHmttX%2F1ECypgMcBk7J7eMA0sH8KRxPFPBb90M1f16FCMDUJQaGOghZj3SF0WPgWwJv3s%2FWZ5vUKfWYnxJyblL6NPk%2FgwOIxx9XqxsCC8GLz7aOIr4ZJNYAShometIUJ8qQxrPQ4xYGUK7JxzhA1wrEwFJDqUbkRJiMDjKzDuvdbJBjqkAfeFK1HM6V%2FpUGhDNwnzt5EpR3EgNRGP68OtbviyBdXTUgcS4FYALqIjBeZKX%2BpyKCfh8f33fS8Rnn813zmMzNZDP4HoSYIkbSW2g6ZlezEYKod6z%2BI72u9wfdhjleDNEIUL%2Fc612L6TYmUCx7PdxJZg6V%2Bhn9n4zQAnFfQ9QpkYpPIg4SPh1Z7dQAUxHtPLiGnQAtBgyzhWdH%2Bmes7mafhwURr0&X-Amz-Signature=ed5d4bc9313103b935285777c2e545550cd972f06c062506d732b800fbe8b45f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

