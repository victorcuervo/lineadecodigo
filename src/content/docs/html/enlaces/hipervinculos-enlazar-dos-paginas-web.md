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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFSWASS2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaWP3Otw4ovi8HGL6AUaSDYvr%2BT1E0O0zL3GRi2H1wgwIhAI3NJCMDXlkqzfhAAhj4XOw5JpwrK2Cl8ttnF3LQTfUTKv8DCFoQABoMNjM3NDIzMTgzODA1IgxVIcQsEqaQkbJxT%2FEq3AMdoVDTdPqHks93L5UegjgvS%2BCv1FLq4q%2FrN9orLlENnPzAb873ESP%2FXDhUAXa2ncZpe2gBIYqN4O%2FwzLx1%2BziPqnKuOVdAd8kSyFCsl0e1Kv0usnXTkHJInnRtFSt5Ka2BcpDyCjB6cww40kb6%2FFpMmQWDdwyv3CHn06%2Bcxq6VPhaCyrax2r6hq9qxEiq9Bv1GIf4SQkCSCzxt9xhvNlSvACzPRiGRTGOzhLzyqCG%2BmMop63ZOb8HvZjdvwflSWkdKjY2YYFk9bCLtfNZqX9BBRcSckxYJk5E2Qt1EOeXx%2FEiDfO%2FAVb8sa%2FnJweRlZLzcmSI3baRI6%2BNVbZB%2BuLhFTgqhhMbsfZpVo%2BO0kuf1ydz1Y5EYe4AVyX6yw3IEWiUc5Qtu23jEoErRbjbAK1XkUm1h554P9tACww5ULXVVs5MxulcZy%2B2nLzzi3nH62bBYybIewCpPy98GC51dA8FVaJNA0noMiSzPILyuf95kydF2EiTE2xz8%2FwG4u9fewjYyLsc8OrtQDjjxXTZTvZ1APUTE%2BQvI%2BIxVPIeEX2goMuatg3Tve%2BKJlnL37nNAO6igHVoBGf5mAyxnBqr6gANR%2FBMoGeeoaUoSQsvTxSxHBi9vqfT5UJGzD945ATDqxsrJBjqkAYG%2BUwcoxh6Rmhdx2e6W%2B3apI6br46upXTESmCNiT7zazY1AxcJU2awS85inzWzGOjyODvRE7kXDWBnMuPyV5AekSz1ckaNDwKLmc%2B9jTbi4fTUuaAlf52IdUgVaDWrqGNtXuMAAm0WcZzzrKdbTG%2FNTXEeykLmMHN1QiDoLfCpKGGmSm%2BVLYJ%2FO9drm6MQvmUncLoryRf8sWolHNEao4vblHzBh&X-Amz-Signature=3ef129afdfad714a037dcc45f75716dbdf22fb7df54b1f7b7828726de6b15bf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

