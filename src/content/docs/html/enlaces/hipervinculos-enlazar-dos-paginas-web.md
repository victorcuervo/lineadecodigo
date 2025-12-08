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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH63QOXJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAoiYfRKM%2BMxjdionepFBXuRw3q3Nny6aV4n2OBIvOa3AiEAhiay3C%2F1VC3SaWHYBalQ4daCnN9vQogRIt7sCxJEaLUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FYtaDm5m%2F%2B20gIWCrcA2ErqQy2zm97Yvwf8cM8JiOmOUGdx0Zto7dpp9WFDQ7n%2FSuaHvDD76ffurbkY99phF580xyKaPMBWWx70pe%2BLGadEq02GykutnNcmkL%2FA%2B84GH%2F8zg29k8iWOk37JKZyofwMzjS3PLwOXhZWLLyEm%2FyC60AlRKXjkCiNIBHa%2BwGe7vJXDefmndY1LXyGkMqV7lWih%2BzWh73ULZiYUiZQih14yNu%2BCVuKjxJ8P%2BZKr7miMHNq%2BOurFZoihayEXblfdI2FZCMBAAoowigqjpkGN0zDmjgRid%2Fg2aQqURRmCG0B4DKA918LJT2uEjVV3EIv5J9CkonM%2FOrKJ3IqqXObI%2BTq3dfedolQyEYyN9KV7Sb7qPjSfLMGUiAcOnusDn75KXqAmrD0AfvJENhmjbB8YqimPoRXxaszywmWua9JXWHBppCSt5cZpNDeN40hjvoSpTAccDzaFnrjYRkXMg%2F5hIPzLSJwdwJ%2BkEWTKKRsFkBxDTNLP82tYawpR6LXjCu%2FExjltlPJjYDUjpf%2FJ9F%2BQOjFUel2OBn7UclhWnndexs4ISfDXCRc%2B0YkcXDHSnoHxMlLTravjZ0TCv0atnZRf9FZggCcTD3cxD0fbyyTNLR8%2FkUWAk4Klvf5XThkMP%2BU2ckGOqUBKJS1M5RV8jShe2Ucl7rmQAatc%2Bya48CGo7ns9jkPMAj9SJzxXr34F9LKElObQ%2FYn3jLk40MiEq2zmjoGeGMvt%2FHulsJBF4AleQ2gysVCeWKMI0qjzdEFO7UdcDlvSnd1W1CDygOVCM5hy0qcc2aj86Q03ldfXKdZlsgERMZ8elY5tKvWLp%2FcUpo%2Fgd0LR4W6bJMcTQQX%2FtkeibehOVhdzlaPes4X&X-Amz-Signature=fd9bfeb927af96894e6a2a57b394336084e028bb4ecda7d9c1927c1511264e91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

