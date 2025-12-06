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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHOZO3CO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCZiAn6VgR99vmTNR3%2BJewq%2Bi%2B7VRsGMJKMxsWbYsBXAIhAPhBxBWMawc%2FTFDL4o6GWFs3ytUb7scMNYObAWN6rfUfKv8DCG8QABoMNjM3NDIzMTgzODA1IgxSZCbv7sEGuaCS3z4q3AM6Hxzx1b9vZD8R53bixv0lfy0qvkaXNgW9Iqq6WAg6IiIcJCGqOx1CeTjHHB5CcmycOr%2BO1i1skSE%2FJ3JpncHnfnlpiHNlHrGE%2BKvxeL9tYJYWp4AWAtCuDPwBvOxTCCz0xV2B6%2BqK5WyhjCtxNAQb9u1TAYr%2FY2EvHWIdkDSAcneavcPOul6E2rw7QjqVOpaIw5%2Fgy3Nu%2BT9B85lMlUENpToIa0aJyBXY7VjjkW7uucRNWzmkaU8UdMvVJD8711mfX6J%2FwqL14zQJ3cMFYyTrz%2FgG0%2B8f3P4yGy4Zfq%2Foa4HNcYfpAB3Lr8rYKYn7FSEVYPvuBoblRmHPW5E6giSiMxqm6bGntXXC76Kc7Tz8tnMBxUzJLUN23sNunb5cLV%2BWV8oYG179fnG7gY1ji8fCgQcsv3peYG8Xzhc8IrGsDUMnxfTAWOzSalVlj1EE7Gb8Hg9ewDSZXXTyF9SLmrz%2BojHqJ0aCm2yFrc5VlwSHkzQ2%2BDfvabB8rGFd5au1laCBQmpl2JGsYSW%2BaoL9Fj3BFTHeeeh4ID8%2FLu2Kzb3ss9ToJRu%2BNpU2BNPCL35v0zOGUpGVrg6hKm0%2Bp7GMzR1yQpCcGmzDnCNIbjBj4kNkfEZHiY6vuusyQg0S4TDw%2Fc7JBjqkAQSfKn2RsyzgNlzAjFhYBbLoUHUo2B9dkKQt%2BcRE2xI7yOdg6%2FJC9hvCiVjCyPPBWS5pL7Eu4bM58Mu0H%2BeCMp1pdmKI8apeEBwppBxhMTJzG2rvR3UUkxLxPbwKjBYU9KcadsF%2FTGzT1jS%2FBjlBOEAiS7hb9XIr%2Bna0%2FOJ6Z7hygE37GdU84Ja0SVZA%2F1gSm4rvd2IIuM98ILs5BvH5CHYq8RSi&X-Amz-Signature=dce63776a50753718b52a93ac3fd92bd74002d2fb4fdef0ade3d54c7b2f9376d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

