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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EYSBDVY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIAvKr4Xp4IPiNHgXC6XvHCAGjwbtFJ%2Bm6R3U%2Bhh08nlZAiEAjvmyC075KH5qqWzJugYRgnzZjZyJgs%2BUSbdsm%2BIfoNYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDCbhzReSwo12wl93yrcA4%2FP7K2GaFZMqG3NlmatK2SmpmNKay%2F30u3oFZKw%2FLR76ZB9cxF%2FbbOmIKcFr9OxiqjJGcDSLGAlvTfgx%2BTkIAIbFavjt0ZwaHJXeAM9lAIEaohELJV3LlQ1nATA5dg62c4NoB0jDipTj4P9laAO98Vly80ppHpcEdj4PRzsSLwxYqqyqTKn6gS0EzClof3GPDqlMWRe5EWg8NTEv2VpV27G%2Bc%2BUnOFI%2Fe9bS4DGGROtbi8XPAsBo9%2BBUxE6yo3xk3Y9dOSgOhFN2L3TXqTfDOjU85OmREsc3zNTKDbVA5zaf2z16Zkc5H5aw4CWXQc38u52n4oenA84mseV%2F5zeEr7Uop3sqt9JZqtUbVDqKaeI0FVc3zgpVIRUfGdMIwg58oIFLG5HGU7sVCrbMbV9YE9paf%2FJsKu68L%2FOpmrZpkWhl6NjILf9KByO9olPtrX7ETGOKDIth%2FaobG66WmPJrR6OA3yuBe%2BI41tmjvxl1vIPr8cRTb7BIktXd%2FBBdBGmfNJdB4sxQ%2BulkABKVzongnw84MtRNz6vY%2B444O7Dk8I8ZEPIsI1zuMIxY0Qidr7tiJRMSRuPHjbG1YCAy5jvxxAOokv0s7eG1hIDRKPDNw%2FZ40AigYPxnRy6wPAtMMWExskGOqUBxhXWGMQ%2B%2FG4Kn8PB2oq8EDzWowDGkIJOIhXzyH5XIdg7YI8McEoh0avjAb6%2FYOqlJbrI6YzGDQhWQNksUbVnHo%2B49QluOQuw%2FS2LqC6q7aGUwdc5Z6rQn5W8Sz1cUF2VNz4W92sGNbIO4p03OjjW9tKRQ6Jn0V3fPPZy7%2F5Zo57gVI0VfuV%2F57m2WXLLwGS%2FkkXSHkV4VnJ%2BftF3EyyN73r9mMqu&X-Amz-Signature=939158ec1d586e2177e5a1088edcd9cd0ecaf8cc2498a11b32a676babd3ff6a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

