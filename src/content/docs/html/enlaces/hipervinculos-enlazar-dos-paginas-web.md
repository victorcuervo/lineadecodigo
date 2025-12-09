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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHWETPB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBshjFTID2fI%2B4ixTOatDytL5InCNZvVilq5E%2FvoaOvyAiAQ2h7pNy%2FLdXWFKJQkt99y8uJTLhUU7ktRcDw6JGtKdCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQM1K8nNMGeX%2BZ9OWKtwDFOIpSL2U6KNUyFcFLQ1XytqRfaD48Y%2BWoBBXk8DFa2oTP6s%2FN5X1NLY7J%2BIm6kAW7j4bcn5JPnF%2BcS7Yt6DQ1Ys4dUkiC4hbSR6HheNgO%2Fp%2BN0mZXmPZulNoTLrbAoeSva4zZHKe0Oca2SW%2BnZ90MlqRNiHJOPCfuNBYdGwaf2nHVumnX2Ig6qQhlMqBzINAtqpKz7%2BeGuqJ2IktkyIhOfGJNx0HMy8%2BliHue8F4fNAhXBpipobbf%2FkhJ%2FXirpNR3XriQvTeWkGa3iOJzMePjlmlpYr9UZAvAwjNQuWfukO%2B4jWGSGpyAqOKHKoXWbiC8Q6baK7t1aXsmKupktN0rhxNvT8zE9DYTvAEytGr3rDJhbFv%2B5F6lot6UwM%2BV%2FSdDgXhgMU2T71NSd9dLkbBZRcW9XwYZFW1jE3I2kGjX2oxZvVg4FQ9VJH6a6juBHTvllk5e6giP7QcvVAVRQIW%2FrLjZ6DMF2JwetqbBEES5MnJxRuqL8M1wnmVjUP1c%2Bz7UVU1r0xcYhPoVYDv8%2FsUcCGo9w4Exs%2Br82tW%2BXfWbSDDpMmsvRhtwqNkTCVIDT0BEHdvZMw%2Fo0hm6rXB1fIbchan8TB7TZN6AFRL1a3jbhihXolWn7M54l%2FKYXkw1MneyQY6pgHUWfrp5gsqSMOtaLrB%2FP6Aupx4qCExculI4JybHRZzeN1gX6LnAn4EhzpOH1YQAGm1WMZs340XE5sV%2Bo1OgaDiWNp2oVcCX0p4WVpvaoOSW%2FOIi%2Bfrdt%2BAitAzD4%2Fs0HmtuIBn9TEXywO9NGOAI6OBk7Re%2BYRuR1Og45M%2FnqyTgCB0ffg4LsLRhCRbxGtvREmBCn8j5jh8SN9nGtdm1YFmhP0KT3Ra&X-Amz-Signature=711a6e24cc04a882f1800f93343e5fe27e186ff7976a69b60ec79b3bde26d3af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

