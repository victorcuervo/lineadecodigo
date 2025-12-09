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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQQYYUXA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLcuJgPzQkH29x0CH748VLchIALPiQukWrBVjUTg8pBAiA5mXam%2FFfhVk0fbK4ae0jNCdQCMvWHHhOnVjvX%2B2usFiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW5emiLGGJSR6dGveKtwDg8DNi6Yw1tGO93bKAos7HnIVckVX84jlO0cm8jdMNgcZELhvIlfxEp5ey08lLFU%2FfO4eA5kYKhyAAgT69LIaNzuV%2B3ZePXW5ZPY6lPeHbcJ%2FiP9dsKxPP236AdLzIJIgZHlUmNlE0gty9%2FilkfBVymsnDTtZ15Kc0uD%2FEBY%2Fj8r9MXgylN7iCuQg4EEoY5lpjaiFllV3IxFyx%2FVo8fpJJo1vlGDNrcAQPBcO5crFQdYkfZuovAkBuPogsuNeOYR3Hr8NQDbXIZL2%2FWVeL5V3Zx5B41G8ugChqPTDTJ2%2F9AKrzSf%2Ff85KySxIque2PXqwuEQk53bKl7EaM7Esy5ScpK%2Bj8IWHMov79f8eMgGYHsIuqlZDv1vHb%2Boea0tiFyl%2Fbi%2FU6DFqLjjF6xawynCK2l6EpM55cfAUbCuhU4VFSF8MVkoTdAAYlHD5M%2BVn6C9BPk6%2FnH0PdrO7ZvaXhGcFMAFa0Adfa9OnRqWCNc%2B4y%2F%2FbeEo1rjZ%2FSK3wztGxzmM61lMPaHvLUEGYDqeEWtwfnhwPWFl6GV1v3N4INVYQKAw2k5WxeYciPbWGJzZQ64s89jzk97lagrifwlb1iRnAzlq2xTDkE5J11rQArdw3BHLdhP42aQsmW2XP9aQwgaTfyQY6pgFUvZh9LllBTvcTD7Fe0OiFQOO%2FlvdSEnjuOX7Q6zfqXvS3pabY25HSeeKmkJAyBb7mZ2o%2Ft34WeoPe3PqRhc5kIG8GM6XVsLzL15634SKLT7GiXqZwJbNMVj5tiFnGQlLu0lIbzM2V5wrBZRY6fzCOIJ8d578I2Y5nr%2BX%2FJownf7EaddRKbsFkMVFePY8n%2BxsVfZMVH3Zdn39gxUafeTXaOvyL8LsM&X-Amz-Signature=0149df2f57209d752c64182d077539cdd96edb9089e895c28e88f3bbf9e6a778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

