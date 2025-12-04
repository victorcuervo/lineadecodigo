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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYLZUCHF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCF9%2FERX6Zezt8DRZ2GeLPVoNb6TbHMJ5TYi4FhnWzeEQIgQkf5geuNs0qVzaTF4h2tLBsp8hNKTwXnFHzCWXQ6F7Uq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLVxeqvvpUNfuNrrZyrcA%2FJYNBNhEVhu9I5bOeSv0zGQr8623esSmVSf9J5Ech5KMERby6dGYkOnQmMQYtjpApAxHoOpnWGBK2NyGkMv5ev6csgMM3RqhcaeuKgtKEYB0hGegvVcNNxwC4NSrER9EU0RbEzNIJrPz166bfBEJV1X%2FPILQDzLHNlzf6HMCV2uyT5ot%2BVjkFAjAEd%2BA8VOwCfq4ri15hG8Dx1GO5a3VaS52y0XV2E2ECIta0ZIO3t5coinlkWqrMemo0b6Hc%2Bwl5p0jAtoxH6QQxTs6ABTUe%2FaJX72lp69CawQuAk8aceqtBbY0LCpNkNqOYVsNCGb5hFa6SxhcQgspKAFQK%2BXRbpsKlMwTtw0GgGAvvHDdmid2I9k1EpDj0CJJWxRYLwPjhaJNtVS0IWTZ3w4lyQRdfyZNGoZq8PDuQXvPWY9hLMQktjXHwuXllo7ud2DWeikDySvmUJbwmFoAUzFo6N9juEGx5cIYDxjnmozXf%2FbvHdBapyv6IUQ1%2BXAiu8vuL2FpjX9UiMN79RGfxdrbS%2Fjew8NojW5Ct%2B%2BYhx25G7CbOFRH%2FiKCRB7LNfoI1h9%2FOCCHC06jsNaJBDEkO52ofasGi%2Fi3hEjPWAq3qeQEWjFPtHXItnkTJ4BGRrqyJVAMNGQxMkGOqUBh9otWRDaeKjbgpGXBptiuC4jxD4P99rZZILWKr69uMLg84FBMV22pP1xaBALKjIHsJoMC%2FIe2%2FpdnIFawxvcs7kS5iO8Un%2BfxVqOVyQSIju%2BHATUZAq28327DcHrjMUNJVC3nd5aynU6TCldAtYNCUFVJX3xiTsu%2F6ZoCseil59vylXa%2BIXgavdfo8ulkZWURlj5nubfu%2F3NtnmoJgk%2ByhCXFJVO&X-Amz-Signature=fb853658929a2f7ebe5b2b1b75ef7b9d281823e6b701104d93fe1eb45f25c5a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

