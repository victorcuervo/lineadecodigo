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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2TG6O6D%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7Lqm%2BbkjYmDHwUroVM7nGBpOOkUessGGVkbGtm6GIFwIhAIDqiiUzd0%2Bc%2F9Zu1drua2jM5%2F1PaJGlkjJQRMpTq85aKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxobWkG9c1AjTtp5skq3APueqK3o0funRgxyiEsFC1HN2sOa6ZwUnRMZh%2Bn%2FAwFlrOd3JiZJfbtFREa3RnAQGVexHmvNkmppI0i0Y2JO7NPeir1iXYKQyGwOtCvjePkbdrLSWDv3b5y%2FP9FoULEeSeyxCxFKgerraVXTajPJHi6RJvPaMDXBbyNvSxlqc%2F8FZpQkS6DPNhnwEIZi54WQEiRn153KNUlXYJEUVyltghVu9q5hhpoXWnX9UlHBioFZ0Z32trm%2BqnI9Qiw8yxj7MYX5uLWoneB94P%2BxdcyD8X1MzBoctxnDzaoAqZdkFZyoP87lzOZ%2BmRq3AAkS5gmKiKBKpiG4UYhZsqkJDC%2BxJ2DiFCX1c7GqYWUy6z23EXMgVGEVS%2FjcPskn4ULggNAQBpEO0L2grImfzH7Y8ZlttyUUAvQgUU8%2F2Twzaah7Uop5kPCmYQA6fIPBCupIgznt5znUn53Neuo3JR8yCYhw%2BpaPIxTwNvvw5N4owz%2ByNTjr9Z7KuWRqeJlpYlHonCX7dvw%2FsZtvjH9Kgl31wjSoGVmnfSmeFZT9LvckcviHzS3DesXRqgc0Ui38y4iYTzzeujq%2B2PyUw5oX3a3EhYHtqkb5us7x3IycY2aDozzcWucEg8fFHAcmsOMr31HKDDtqNfJBjqkAVEssW3j64W%2Be0ZNDjwRa0NSNhF5VWD1CxcO6Liqkdx2OZ2cslToxoIuPv5LIvNzfODgXeqYw5NwFYNLT8NgbG88H4bTKO8ggYWS7tuWN8cpeTdf07FDjh2h9UYs1yBJbGtFWgC%2BZ%2F0iRiforE02yhAB%2FPSu6kKUtQq%2BSFFzml6cQGWkGytV6tkGkJwdmMXjEASCeZJ9S3SQz8VviZYusc7Urmlk&X-Amz-Signature=bc6fc753fdaac6e02969dde6d527cdfc0be8d3b7df39ffea9afa8c010e7a968b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

