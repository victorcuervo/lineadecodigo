---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EW5V6HC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T152030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKB235mQ%2BEMS0w7RdNPj7clT24rH4NGcbqJ5PRnq6byAiEAj%2FuBrSn7bKtX5z7wabLtD%2F0AHzEfl8gMQq9uwq3%2FggwqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7qHj3A2gidIpyrdyrcA%2BslweBcIXe137oXAqemuXk7aiZ7OxstdIV3SK%2BBx4Z%2FP%2F3OnP9hA%2BXnuM61MQWSkVFAj60xTvDRzwklW%2F23xTtujtRlUu2xxIXAnLV7zU6wdLDu1D7HPmm4zOgJpemDqm6Wpxr1LMt5gCaZeWZqhXJgTDxzPPft14MaZI9rnOvdSQm5QUFjkyU36CCUCtNn%2FusMmm7FhTQxQ7xpxFUKfM%2FfBMf5JU%2FUA%2FQyO4xvbzneFwqJOHh26t0NKKsJZwv4zxZ%2F22wBpk4zPsuILhAEIt6KJl3sHXUdMvF%2BcK%2FQDkTrl%2B4%2BhL2Bhsq064tDsvAEnLaBWtUDJUxvLv0SJQB18uqGrPTsKwp3pI3oCEcwlgXGnnTtfJybd6s3FpLSlk11ZMn2zSmwNOQ047deRaPeamaga9p0q2mTTxo4tOTHlM5ZuUqC61ZzSfoUEx0iR8MdcPBpLE7KYFhXoIA4NsV0OiuU1hCrcPFagWXG3QvY3bNAznbf8bbGcj2v6JUKeaiHQGLMROZPQTVTKZJqN21twcV2WyknUZUpy%2Ft%2BU2MY%2F2ol4qhS1yA%2F%2FEGjJv0rElGC4fzOCCsJM5rZMjAo9fkc0FCwQpBfVPRgrEJzOgAz11gY6sNeMINtVq9lZQGxMOHd4MkGOqUBUmZTNbhia3DcV61KXyZ5pXKtHPZZt8mYWkDq%2Bw34QsKkHTmvJngfz8UQEWuy5IrcLfaZy%2FNHtDom6Rhr4SK3WCu%2FwNOD0nHh%2FMQKXmPxrsgQ0fZw5ZJU%2F%2FtmjFPReCFKOKw73XGclK%2FBEQWAP3nxdnk1cRxUIci3qWe%2Fy5ww%2BBpUo%2Bk7Ni7qs9oFsFZz7mYZpAc%2FcohMmo6n4%2FiVN0n84H3w62Nv&X-Amz-Signature=dda31193cd2be99a60a4a479289903f5cfcbff5b39afd1027db85892657632cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

