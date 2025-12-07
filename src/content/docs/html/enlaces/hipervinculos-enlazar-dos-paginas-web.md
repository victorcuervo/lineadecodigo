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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YQT3FNL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBie8Xpzeb4DCugqcpO1zV1UWG7LuZZjCpZOwMeA5y28AiEAyI7GXfGjmF4HpwMg2YIJQSdeXSDTY%2BpNO6W3daGrf6gqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK15dQquafvnh9w6lSrcA9MQ3Ff3ibvimRtvjm8P%2BSWG0e%2BtzupxrSBim5Z4Bc2i4KEYL3YvJTiiS6I6l3U3f4a48RXvKed9tEeLw8ii4jhK%2BoarR9LKQif5HbY8FQEnoQgFqm6pqfC8KhXOVp9UGS3pZG3DuQbV0OaSPO9XaILqo86F4MqHWGPrY4JNV07BDuHMIhdUqxi%2BTxSt0PlWTE4UcprDOrFbmXYF810vDFV7XyIsZiiY6%2BMfZxtFHv7g3wKrQqpUFR%2Fa7fPruQgvxFjtoOo1jqSMmtNlJp00BelblbWX2%2FvobFv1qj69zXsQPyb5WlY8%2F4NuUeb9GXjj2uSC77Jo3wwnKR7iPfGT%2BESs%2BJ0DKpR3hu8quLQ00uDsbn3gIwXcGEW%2B2dbbvQaiYPQPOGma%2BV%2FCWM6U4TpVXjAJlaxBYeqT1tVssL3lgxiXSwOQw07nhy5CD4IZLPWJicR%2BEPYjwkp%2BzaiId0R9dc2NX0ZpHMgda16R744NBcTbi9y6KXgQG8Vz0Z9PIOuSNEnHDAxA0GWyQUTD8gqVqrOykX2NkFweLR%2FJj8zTWiBTB1%2B3MVImOxEm15fjDomAOPY50NTmN%2FYZrzDyaElpfsZJWxVUYf1OdlKB3LID3p4SeuhbnYxr%2FtR%2FflcfMOuZ1ckGOqUBuQPgLurVn%2FCon9DoBUepWxsnqGwQA7dNQBkXUfO0RscAFGTQ6epAJdLThJPuDt%2BLq3bXWSHaXXH%2BRQz1%2F1Nwwzrgys1%2BSLSr%2Bu0C0t5JX6S%2Bn3%2Fk0xkRwc00LH7Q8r7ZI6OjmTeGAdRztigG3CuNugpSbvKIBSJUBKr%2BiVu1UIGf%2BSY%2FNiHOkDhnP5gMNDZ2dnyuXNHAL1bGp8DtXNUDDtRtbPCr&X-Amz-Signature=11b5a13404866db6c3b4f4c162ad9e9b16233ce2d3346315ca5cba359f668d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

