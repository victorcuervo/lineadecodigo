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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE2IP46E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTYZBceb2AkX7RyIzlKDIGfB7Z5o1tsBhXNJBVopzn0gIhAIXBiDpN8PBetOkc2BWeyWq%2BQBGp9UtxpohJBT1QIYTDKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzM3QU%2FLyeKcv0osxcq3AMSJKLzGBp4HPiW3RbB2wCMrShA6OBSzBDVged46EIfXrxmBVwWc3XnLzRrO06DLZSvOstCxci%2FiEJdg2%2BO8UYdEstunx%2FnxZ%2FYxmUlxcTtejE3pVb4sCpl0GbIIcMvO8B9%2BnX2sXqA1WpBM2CyhDyqanHU7ekzjup%2FuSsObqSeT4AwL60sRg58kWOOV2ePO%2BmTkaeeiVlgOkWODetdNI%2F2Yu8Ffr9OdkI1fAFjD6e8XoEoyh1VP5emGBvKE25Aj9KyQKW0sFIb%2FUKT2zdecshHM7KzFVsqs39QDP8IDvKGqugzP5f1zZ%2BR5br2wZ3Ko%2FmutZKVFnGjju%2F%2F3N4Xlyf8unXp5IbxmzGzzbGY21EAPgRnHVaorzjls5nRnmO0OnjJxO87uFG7xUNRH2YB1z3g4eXgDOgnbwFy321EwSIj7HQ1ack5ScHUv1WJeSlAojLDe%2BWrIyzF191kvGl%2BJG7rt7Q%2BgufangODbRNMS0YLi7wPT8skjpV4uC7TrLEW5Wm2Z%2BCz10PRD0EJBRP9L3qdV264hdVNZfx0rWfrHT0hvAPtgsFz8edTQjIIle1tOsFDDz%2BY3fO4vtyo%2BRbfIhjKShtlOisCvWJq4elE%2B6HLTKAXq5ExV22hoSJgMzC3ot3JBjqkAcaJC8efyMwfCBp0yb5GsaGTMhWhcHe%2FCvWeUQlF5aPn8IFCFuIQVfeEZhjMRBOKavJD%2FD4AHYGJIPwdZBu46O1BFd7U99JZqV12UebBYcrj8M%2FojvZEayOhZis4YcC6nU4SgExS%2FyIQseKC1JwhPsDbdshIYaEDFSpccu1F66LDzuIN6w81%2F%2F%2FDqoy5cMvlGkXGJTBIZnf89DXVMhGoWLvFapFx&X-Amz-Signature=1a3506b03ab0710a39a977de60e4af525468ba870c4d3fac994a2e514207ca2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

