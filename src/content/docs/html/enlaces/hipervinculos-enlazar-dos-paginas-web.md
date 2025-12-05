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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWIOVJ6H%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUpGIuOoljHvJ118Me0WgmADDsWb9oXEhf%2BL8v1VbA%2FgIhAKvaFbpjibFSE9wkqC4ijiJRDa70ZZl0P8saOdC13QSSKv8DCE8QABoMNjM3NDIzMTgzODA1IgwnusWdFCsKmUUF738q3AMpnVehYI8A6SC9NLMF8ahdZqcV22hISEQ66bszGRKgtSl2hA6PaPInyn%2BVf3%2F0qwoe6Oi%2F97Eh2gXBj%2FbHWdyrcq2%2Fo8A0W3zavoPqKkBQZkCIek6TWjkV2TcY2c3LYPsneUF%2FEWl26ixbxbR%2B7IacLqd7cWvIXyN7RVIPFvTldI7j0yN3S0ZJz%2B%2FS0NuHi3tVLg8bOey1S4W9QgSoyIuY8i9kxIwX%2BMQoA8xc8lzDtkwu99fsbxgzPLwArq21Cajm5omyhIZTWxt2IRHkQAqMLAa2bF%2F7aCRWESlkiqIReCIcf2eC0iqhAfSRehnh95BrxCv3ZZLY4Wzep2Xn%2B7IeWXPj9hs7pwJM93z89x22jxWqlq0opCJCSIajTsNryJ8aYQ%2BbfDh91V8YF3Rb7aRfrfLIZLFEA6xyfBARD0sU0fsj7fFjV0eDLe%2FTFBL%2Bs36HP5tO8ggVwBsMCvRkWEr1P9p%2Bl%2FjUJubCwV18mkwTGyQypfHQV76%2Fhe1wpPfAkzEJvYpFwDGGQTWgAIBbT7C2wJsWRFKkWaerkD8Tf9zoF2Ey2O5twQTbShoMmT711pn6tx9xsCsP4a48VKIbXZo3QBQUHwZBXHwPu%2F9XptsZosOBF71%2BpDsv3MlZ9zC9jMjJBjqkAdiCVbuC6F6qMues0Th4HhF1mfaDnyOIhMWyiV6BCE3Wx4w4FJ3%2FD6nNDoFlEPgu4RdRv2LB1kQ32hqNsO%2FkTbFABrhUn%2FGAs9BVSuKabHASTFudhi4AJfQVAHQRYYPDrON7BZLgj6ks%2BpftCLtbeqYDgr2BzOOXeytEUch%2BqawbKEEdrN2L4lmdSTtrA0npUwoRNihh6K0uXo%2F99e3EJFo9P71X&X-Amz-Signature=8affdc919c1efac8f1f7ee90ec5f5047dfd2eea11fb9f19b94fd6af352a103af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

