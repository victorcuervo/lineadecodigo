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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZICWCIHF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKRqkfSeimatwxsgbuMUTLxUGQeDdj71T6ac4BxXxS0QIhAN6HegieWzl9KeWwbHlTbQDxfbmmkfFtpZ6%2BvXlZtPV9KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4W7twme6FopCPpSYq3AMdgYS1XpUTujoMFi8lETJPqYPMS59ws8qV2WTAkXd77L4tOas%2B39QHqy7SvV5dslAJMm3%2BAGAYprpPKPQQLmZ0z2as9D3LtqetE4A35JFFPqZX5BW0fBVa%2Bx6GHGu1G9FW6hhL3iOzij0L6p2Av2lpAaP6A8jKkKun0lD5XsWL0uPh2MxrI0cQQCZeUVILZ3dTQmPVVqUm6UPInlczoYrb0xnZSQYfWHedkIKmwHoNn0uN6kdO0at1KwuhZdcDOC%2FmzrksbHzlP5jLH%2BbVeVaXoiSTAYeRRbTgqk4IKP%2FagBTtWcZAvQSnhFY8TRX1cEEUQOKpdGS2uYgMARre0D0KNTEyrmBG6HGiTXp7wOT7JHembUZbunxxyM3VQAPpYmPg14KNUZk9mFfGl73wAPO9b2s3z6na1hzqyQbtaa%2Ba5bV%2FO8lFn5YqZKMgSJIffQEAvGLp8B16Wn4wygemXYUqKZdoJGpNSb5zhjTC3ZaAiU4JqjiZVzejnEfmPTlfNL0gbRcbOjtmj60fxAm6uWhCGbO34NEY6TAH5h5ekbYr1yfpuF46aPdNXSnCVZEdKxviDp5oUnVDSn35YCMQsc4rcjaEZ4%2FShbgRTjuuMIHMrfhMYtvv6Eh2RYkc6zC45d7JBjqkAQvSQNA%2BVv4XSh6FRu5v%2FF%2BfqhCu3LqyQpGzzeiurx99wkmFHSOBmK3avYxRLvtMFjTIj7mkQFlEeEYVmCbifJCjH%2Bv84pvfp6YasSRoCuL%2BdhMcnKBpsv%2BqRYIKe2rw9Gg3Px8UmiRv06tW%2B4lVDEcqUVrmev70DjYvoXE5oieIlom2873T2zEf2xKU0TWDD0pJzj4yyoM9cCT3%2B9I7PHACV8hq&X-Amz-Signature=cd52f362a73b81d75dcf7517449a987417cde202234c09249c575b4c7213d8e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

