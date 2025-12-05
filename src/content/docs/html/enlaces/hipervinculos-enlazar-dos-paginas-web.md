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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHLSVDN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDElL%2F1cBSTUucLoTZdGN0dHt8IHsQuN7ahn7i41fRm0wIhALCFhvSaatuUxJX3v9F3YPEN%2B2RogV9%2BMXInUZrW6sHlKv8DCGEQABoMNjM3NDIzMTgzODA1Igx6oGcIJcV0JcrXNS4q3APaUAwgKFfiXsrfzJFClFO4MLns2sUHN9pIRTbMBRCshVk%2BGaZVmGQKcfynuwtgORe%2Bsh5kZ%2F5g8EViVT7g28dakPmpn7bYyN2ukL0iDHFoqC12tG432PWVPN8xSp80O3aTTzahTNTNVQPKs29j31SQR6sglIcKSOzml%2B0WciQGS04aPiQ30Dj6Jfj%2FMo%2B0dysleWpGBhQHu5evogGNWhYo85oiy2jyJ7Id%2FsHoJGQExyDaVXBGwNAD%2FWgy3SktDvyZd%2F46OVYwjkUnFtPZShbF4A%2F0tJtW2t0i222WPJw1hPZCkm5Nii%2BAFdnFYYy%2BPq1PwQw0%2Fo3U3FtUuqyJ2p16GSoS5e0Nnhc1dWrZcA%2FqS6xWqANQB8e%2BT5BcjQ5jpq%2BiPxiARBThDvvvCZBAtX58QJVlF0M8f41oXAZb5pYb1pN5tvI9sG%2F5mPw8ZrPXCXA6m9zuPhwNmE728kX958zD5zCHR0EgzMMauqR8o75mc%2FNlG%2BBZAfQzyjRDkVDxTv5S%2B2ZFN2%2BOmylbKOTS%2FyXiYuabzLy1fdEM60sroyIzFOGyXzQ09TJXC2N8DV%2FAO7gEshSHBzYpZlzdMCAkgpX4KOFFkpedm1yPDipZDKscPRbrLQSAfQEsRDwm9jDx%2FMvJBjqkAew6MgGyW1Z6TQgtvmQLng8asKpNMXZpf8U90s8mOdzXlskVgPfDvVCHM1N8NfcpedwhOdp1J467aFG5aW7YrYdw%2FvlmxVvwnLW%2BG3llDZhBS3naJzIYdK%2Bk%2Fd%2FWhpZCaYqn%2BtiM3B2YtlgJLaCjbQ8a69S49Dl%2FMRRBjjnCoUl%2BQMf954CwXb2WGCoQn8WT6DBB%2BQvWe%2B8qVPDRTYGJtWyHjm%2Fw&X-Amz-Signature=4239a5e405527ff47aa4f48b4f25833916f9d9063b9cc022ac42b8b7382694a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

