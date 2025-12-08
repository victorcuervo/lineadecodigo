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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FKLFOWF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp9wPiSEs9Cl1pTxlEmpv8HOFhOjix779dWs6xmDgZ9gIgb5Sx8y0C5OJD5tooC%2Bw6CBO6Dkae6PlFOAuZE61LQOUqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0Sae6lyzIZvV3HLSrcA8qoAwAIjDKHpOKM4DZRjqezRJsVyRK0AOFdr133pve5G31Zt9uLvfy5jv%2Fl7tzZJt6cdoCqtdUVcLnViDuW5UBQv9DmBIAqaHj5WpDwke9ca5WllSsDYOHMqJj1mt7OpZQFmfS3de242DSOGlwd4QNBClzCp8X6BC7w7%2F%2FY6wCEim0K4mXgHepeJPkEWwgV1j%2BbR7pDLxyzBoPrYdRsuYc%2FvCQJz8bCrFlPmAFPl7OSXCjdwv1%2B49Ze3BrVG74o0WBhMn6UrzWtAzQeYzky2MLIJ3b1MllOl155%2FF913EZSdSq83WVA41SIEoAScUhuK5aArvoo3zEaF9QBaf7vaQtXaBStAGq6JYB8mJ1Mw%2BOzoiTeRlNL%2Fmq9zjTA1zw4lQJ3FOHaFzCJB6c3D4t9E%2F5bbks%2BddOZvFvmcpPev9ReAtMD8G%2BBad7ZsDWJYS7dpxGYGeRiC2pX%2F8LcUxk4OWs9oMLEmjNaBXgLsp0Irz8dfXDwpYGtuhfcNBK7hB6xmjWoA8KVsfuNUXr5g3WoVdkdQSmiqqVlgE0s%2BfweK6if0PRgUnRXOwX09kaeHbPwgs374sqSX%2BIk07RdzP6pFcL%2BitHJptx1ezMSwxkWTCN5IVFQ6qvDX4hSQdytMLDu2ckGOqUBWXh%2FrLZ1iB8xauRLAUnas31ib%2B41M%2FgxUgygMGiGKcUulU11yqmrZjyqDO%2FLCIbTvgw66uSSAu23RwSe5JYcLBp7zFbmc1qx7SDuZFQGu1Nlpov%2BX9Y0W%2FwB84KuTjbH9pSbkzF5XBxFMVegiBzRnKpZE0rEYm6e78lmvYUY5aVXI66Zjrl%2BEGobTH6QTmcaZvZFG4xSbHUJlHHASIclJ7Og6sxT&X-Amz-Signature=98587eb0d9bff4c05594269ce605fc696136b42711d3f8bf051232994d845ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

