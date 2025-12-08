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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H6RFXWR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzyWbnN%2FV7A%2BonCH%2FY8Bq0ZTOqaA2Qs0KOHufTAQc9KAIgZ1cFSChwvnTbQBU6%2FdXsfWSgWAZGpvo2IlJsPeTY21gqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSNIf1Rbl3SkjAS1yrcA9Gi1pxPG%2BVggUYwJlAXqduY2rrqADtU9de1%2B5pY8sAU0bMU%2B4pkuRb3qySUTRprZtzZ3CQaptqVz7v4zS4IeZ2TgHtWfJjn9bh5vM5yqOGsdKPmyE3PMIfRiLo%2BouuiFPoE5mPZlCV%2F%2FyDtD7kVv9FaRFxFmokWACKVNtosp%2BR4Du0CDSTCPj1NbYgrvJfT%2BbhHeYgwUt0B1ZA7iDWUtmi%2BgSppvDzEscNZ%2Fofa2ky9iWq4hY%2BFhYmno2MupCeuul%2BysMvR0Kk%2FAbBwMSbKlyWnA7SfOC7w7GYPwhyINMJEksDVy8PvcEJUq6dz9UiwVVlVqHH7dUvvjvF4NodMuGwmeZj71ORGrAjTU%2BU6Gi31yR1Elv6BospLGekJ0rjlAn9JNGL4geYsF1iOhIPDGC5W576Vm%2BIZO%2BR40HjqelC5IyRRzegVn4QS5v%2FtZQrP%2FtFAqEEbAob1RKks%2FI5bIlSutrwPJf6J9RbLfdkZrvhfK0IwlZyneE45Yod0NtexKKVKsZySGeD%2FyCmnLfNbAPcVe%2FdFIfd5WH9Vk1qNHtoSrtwKS4r20OokU41HpbnkBrXA4Qg7GuPoZqSajKCUeRn9lGkXxl%2Bjq%2BFFJSktLDiF5DL2GXfTVTotSYNSMPDz2skGOqUBStUNSoVAovwcpMLmAIUu%2Bpv%2B1%2FSNitmkb5VsLN6DG%2BbGEsV9MjwsWIJpP8eP4u5oLzKB70Dt2hHL%2B5MuxSuLXN6UZkVTr23wsSsVznfmxt2GzmDQvVi5jSmPsyodUCRzQ0R%2FbTe14YJypcr%2FVwd6cBq0MWWluh1313Ele89QhLgIW6GzDYcozkLwC6nju9n9TfETK9MERJrQPgsErAgTx4UPht0B&X-Amz-Signature=ae8509e34b89bcebb9221406aafb16f5b7d889ae1fcc71160be1d13744eeb473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

