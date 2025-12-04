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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P72P5KT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCL4iQpBjEDcrNTToOfffG7JjUNfGY8K6Q%2BzZlz%2F%2FP0lAIhAOzCZSH16%2BkJEZ3snlz9iocP1lGaGs4aEnaIqUo1eOJfKv8DCDkQABoMNjM3NDIzMTgzODA1Igz8EiVzlIEJQUKrbLEq3AOE%2Bh1DjMqCWi186ZdSO%2FWkw02VAvNfKmywtG7CA%2FRXV%2FH79Cj5inV09nSTjcNVTWeSmTXHl27P2RZO9UBduMkedz%2B%2F3lh2ziOUy3O8Dg1zdSW27AR0aCqmYiBA9sEHiOOgMTm%2F9GiClz8P6b4n%2Frk1YlhGos%2B4BxTFafw0ztepeefLwRsGLIpck9GMMjGemJ0zYkdb6OjzVOX%2FMnu1uqsqiUx4QlE%2FfRweU5A5IleI9jD5dI96I2omqwauAqo%2B%2FbLC1W2K9H5UWCfVdrbHKB63TbUsfvW0CQwweYCwBO0uf8hyDagd1HGrwnMG15bCBYh9q37gYT%2BTKhPK1MoL13ULYco2capjnv0TfpJFFerl4cUyQfzB6PA8uHT5pxoIy4lF1jR4BVpcW3HvwCCtNt42IZHXtj3QFYEzvkXh%2BzI9XaHli1ETOXcJ1htNAf4eIIF5HqqpX5XepZQngFDURSbXirPjxPqQ8JhxlFAicKE8z8GjkWFSekkSKaR4QOVdBNmh%2BijxVhQ50T%2FfIeB3o94mnl1wFOkTjOAoWpjv1BDOF%2Bhh%2Flqzf4UQCTQXwajc1Q5Udatv7wKhI5OWjdnOSBBmGuMW3xneM4Qu7eOz1ZAIdZusXfoS7puqmaMZSjD3lMPJBjqkAaSBbs4rS2ANoBlacFSCXQysZ1zOndMXikBmtu97uTH%2FBPbMQLOx1mufGmlsLJS3Ie7tjiIzFdrmmxFHQ76YUIqIj0j0soJy1Y%2FRQBa%2B5hyz%2BQ9kdrj%2FMm3jPsboOo4sM%2FSsI1mMX1ANVczJkCInirIHQDOM%2BHIL%2FeZC%2FAaA6GfZk3RorR5H5D8L2jJexX%2FJsPIePLFtUxbQ1g3arhfz7lLNGPIF&X-Amz-Signature=ea463816af9dfdf390b6d35403d00699da3629ac62c67930ad2145e208c16bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

