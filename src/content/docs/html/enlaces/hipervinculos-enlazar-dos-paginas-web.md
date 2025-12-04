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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QPD32EB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC7jnvwlN%2B8oaBaZ8PcGLlikV0EtZqIi9l5zcPC5VCmiQIhAKhgE4Mzy0xWV1NDuUnxeDMsoADzVa0egQ3BN10yZczwKv8DCEEQABoMNjM3NDIzMTgzODA1IgxZgRfb6dVMvOE4C2kq3APHAMp9CFCX9kH%2F7mmXVbdl4r%2FfJvsnEexM%2FlljiweKD8WbrwkoQMkrVOMcW3YAryFkysYcv308XRufQCmTmjH4Nz9rHbwMtEI2zAHKvyymkPqaG9uDFQqlNSBHy9Dbttiko09CH3xxTkT8ZWbJLRWW8QDDtTgl8B%2BZY4ldPjLBau1J54aYUQmfTAx9mc%2FFsLdk7gZZGwaSZXPZp7ITvDb99RV1aeY%2F6ChyZQ4f4dpq6RwjnaC3ijKaQtKLr%2FIptd6J6BMB5EYw8PguOWU9%2Bxi3OopyqW%2B4msrflNyD0CcJqvglzHFzDylXiJLLZwd7d%2B%2Bif8w%2F9SlrwG7p7L8vZaCMpUwVrtfcaPLDbRB9pIWgEIIlOJ2exbBxQ56sH5We5N4%2BrqgqS9Dev%2BZqjj0E8N%2BEWl9XRClqzrB6XtfgGgZuoi5YrNzUWT7NAdoOHGDLAY7%2BlP5jfrJpAWei0ZABNG6tqGQvyE%2FUpkxHZAEIJDMIX6oyMsjuPp13KHgCA%2BntD07TG9PaLETWr%2Fq5t23AwyrhfQ%2B9lEnAem5KiABWoc9KxNtInKz%2B1w%2Byhy5A%2FO4ygYcOE8%2FEon1RGuGPSZHtJKowXoK1axeMsa5BGcb0QtVWekcMm4%2Fs9cJwSM4uADCohsXJBjqkAcAAubpwxQubppyN%2FFg0wU9x6nffjlrgs6nFhLAYoIzdDvYCETADzMZ3%2FQDHsHQgLE8Y8CIUVAOOzuPTfQ3v00rZMvC3x5UvhM7Ut0enTYuGRHp6sfoa8Mb2ZofROe1WmBlNkvQj4e3mzuC1dvqMwtAE8zUbKWSkorKR44zFSg%2FwhUo5zgAZsJJ1LeLk6Eg%2F2%2BbayKtNsxts6PDP560OFowm96oP&X-Amz-Signature=edfd24bd5869145fdb22227311f23a70ae06760d3b16b9c57d5d0fe2005c76c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

