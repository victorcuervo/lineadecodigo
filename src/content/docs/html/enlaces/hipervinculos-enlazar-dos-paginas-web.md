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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDV4O4YW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFM2sdN3aD80xwsR6J2cfXN1PupzvnwlWYALrYEZxsdiAiEAop2V%2Fh07NigMmnxlOI8WfiCGcyRoFo%2BZBkEcaXUahDYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDF6v48cU2hg0nZMuUSrcA71hmZsbf1KiwidDKVMZiX0UsUsUWBYecjG6jdywdv6DqzoaTysp8lVt2qJ%2FOeaqrAV%2BzTKD3ByF5ADp8ixJ%2F4yATAu2pfJdpojpDI7FnE3PiK6ek2vzkA1IqSMZrllsdFTATNLlbp7TOPlkVpqdKb%2BMdnu5x%2BZOtRcvr5RadVJCA1FVN8GvC2WF0UyaXObkMteMuAmk7ENVqpCqmvBDL%2BNPJNue7%2BloonHoWqQ92BKIQE7sXu8pd5XHhrUXLU5e3hVJ9hA7QQjB9LDtpq%2BxMDjuUPogWj5NDdSio4y0Q%2BxInCnJ0tGmTFrMEdHC2sAWJaUbOMuoCMYsUWqy0pzYktAv6HHI4uZV8Ays2i4cT71j3A7jmdGUswUSq37sruLgat7HruEZdRYjCVtud2JwycpkqsK6QNs%2BFfzRqaY0KYUdTt%2F%2Fa64JdnAhnO8hhBc5yvaCCYY08HdV%2FbsyAGmqFbiZRpl3mjDAMmYJH1RgkUaWz9TnaaMTFPVFaAvKZmXoWy%2BRtUDDXpjwzxkpdI2uNFCNlU5%2BGrvBFm4ESlT4w2eZwAgDwzn7a%2BYWtmjY0D5bFDAAwsJ78CLH2oJGMG7dfXvVabhSm5qOg9eSqhw1s14n%2FrYfl%2FTp%2FEyne0GaMJusyckGOqUBb9AvGpJudZ7XxG3DqwDFwqKXo40q6R9nLPOvt7F%2Fqv%2BTQv2BCjsqVkiS00uaGf%2By%2FNpkU5YDud1xYufDRznJaALChKmyn8e4l5Z15VSWo5zVqiuKPZCNactlcgild%2FhQvZElqzRmkZRGY5Ol75lCL8uMh4ArqgcowxKkcvZQ6yBQAb5VAoGu95JLwzdWOtutQnC4t8vsl3VsFJ4eo4NXANrHND7G&X-Amz-Signature=20c066fe1508a156f002d18455572e361bc4945526a87f2836be6c1742f04b1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

