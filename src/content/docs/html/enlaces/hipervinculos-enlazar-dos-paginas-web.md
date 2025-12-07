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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB5U3FWF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDleg5S98exdKlaSOqGr9Fa5Jc1dWN90TXw0IlThaiFIAIhAPuT8yf56JqcDvcU0XxNCKEKuw4c0Z5s35UPZFtjQF8JKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCZsB9Yvb4ivAQvq0q3AP%2FC4yjcFtKk4SsrcHe%2Fruqx468yesnGotBIv6AF86xcpfyKMBhxMxgDLmt%2B2H%2Bjc3YdcQZnQ6XRybmhakHyF02y%2FM3%2FuGMckgaE0CAMD7oRMv25TJh8G%2FZlF9Fh%2FdLlpQSF%2F3vJRFN5By2bhbYgO603dxG3DRopcFJ4pLwaQQ72lhRq85pWkXR4YJN%2F5fZICPNpfUdPC9P3deiMtGZfNr8N6uQvh6NL9rboqGIhXcphNCaG5Q9fFDKh%2FHmnCqhnxM8rT8qm48Sr7%2Bnmcvtg4z3tu5ve1NvhUcz8a59pmxp%2B99HXfiQgEOpNv0IxTJlNtZVCuEaf14tvPda%2BC9XIbD0S4QseL6yuemDdlYw7NfE0H1WmnuCP%2FC90wpHvAtiqj82pw%2BSEr0oVKEH3WTKJslcSsvElM6M2HaIho3F%2FfhUqGMhH9Jolng%2FuCcY%2B3PgkNnV9Hg8QrL82Z5t1jnt3EyagVjtzxdSPG3KhUykBIpWJ1tzArXoReW7yVaplwxEQZOgkA0p9XgX6ZbWut11WWKBpQdm%2Bf8vfFLIhJhDfkfwem%2B4QYybEg2M%2BdXal7i8tpmBizYwp%2FikMLAeSV%2BHVjHf8Cpon6%2B9vAA7xqLo6W5QE3Pcu6Qqr3zCGljisDDGvdbJBjqkAed%2F61Ml8%2FzOrmQn%2BvKV%2BgDvGOTgp6Rky6t1irT25g0W3eMz328No%2B46cScsG1V%2B8stnS8UtENY0veQEZzmb1aS54GkBh7BWM0GVeXQ8QEDWhqNfVsVHjSELAsN1u9b5i8XzoixFCgZuG1cFmFRtYMPB6JU9pRZsLbgi2iRiWyqJjbHUrQPCfP%2FMnQS6MTcJUjQ8AFSQMlSdrTsmIXVQ6Es%2FCfmL&X-Amz-Signature=aef5c8f8fe9f259fb26c2c8fec8e63d4254207b43db8b8a08947be061e5981b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

