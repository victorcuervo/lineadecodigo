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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CVIMGVT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T155507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcSvarDjFy6tVBm0mx%2BRXo6zruwFCTf8RPTSRftlp0IAIhAMdVNzVcI6i3884HFvmaz99%2FltSZA1RJb9Gem0za%2FASRKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjoKKyBT%2BIC9YRy2sq3AMbXbkAPmeFEf6R5UVc4mEmN0ErZO1SlG%2FfU7iuXKuKGtn5KwLrF0EIdijDdf25JXDOWJxIUdmUYSO0kuEl5WKSjbsG%2FRTxnsgSORzzc0bYivvCGleKZYQQJDgoUaDugZG2xMAKTmeOk2Aoi5qY8tnja%2BGFQn8Y3Nvz4AZAQYJx%2FO6nDA7p24x18h%2FIAMG%2FWZ3S0MXN4Fqj5cdGIQCKw%2FHgL1EDlxRdE67xkJq6CbpYfQ1P6qW73BggIjWPRx5l4H6uI%2BWwrJ0HKaDoTeihTQykbpPHNdNYuNacxGLshQ%2FLLAdYi18%2Fvs9GlDohU4RizndyWhGtyO3fwjefmOKGTTwGpmARfo0u5jiGUprKG5hE4HS%2FcNH7GlqkUon49elA4E8yMTGSn%2F9XYoKS9WvSEZFA2PF9QrLb1%2FGdHetbt6xhzO0dbipn07QEP9I9gn8iNN%2FowAa2G%2FZOXi%2F%2Bbep2e2rYFetsyqfnAw%2F7PlDlww69DgKhSJVe15BOczhFO7BRfdPrzr6hoWXiGA7ydL7eET%2FpXYSJ0lbT0TkCcC2JmQbKPkYQLLPNliyWZ0ssd3%2BUqdOf56lhNdCmY%2F7kUjhs%2BEWr5kkx6cI89wWb%2FyHcN89L8MXM9Zo%2FE%2FO1LYT8QjDW3ODJBjqkAeDz7qfuhlq%2FmuHpkOAe7GTtcYlmYcft2gEuCn9IMQ9JtJST6evyIfZArutk6ttJQaIcXyqDe5eWXB78ksSFSlA%2FE%2B0n9AUEgLLSEYhaI%2BGoNXy7NaNpezy7VCYQ3RCMCS16t8x5%2Br7pCuzITJuvt%2BTxObflMgcVN7KnXeXuwVk2G5L0pUr6BRmh5CufodkdvOjnMFrRZFIXcH64xj0zbLEXYOwB&X-Amz-Signature=90dffb3e30b4cf64a3679b8ce051f252efe037fcbca640a69d3f5a1adc36e0eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

