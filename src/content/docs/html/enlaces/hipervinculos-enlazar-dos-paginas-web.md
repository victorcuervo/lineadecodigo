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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOUA65RB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChu4K%2BGbtUNuSFyL10lHO2OY3es21hX2H7THdJ4N2amgIgDy37a1EhIsEGbn3UM2t%2B6%2F68fS0JBSdPN4qGj8WT3%2FsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4TdO%2Fu2E3TkSplxSrcA6O99SPmDhqsXXs7qzXjBJ%2BnYgn7SporzMjX86c9Xgud%2BhOXQT9Wk25d1Xddvr0RU4ZkEmkr93xFUFXejhYDcR3SOyFZpfvXeoVpHCVTZQoP9NQS4QbVqUG8MnEusFQKeWGtQ2D%2B5mLlkzogr7DE6sCmTHW1VeOlGwtoS8SvIr9Qs8QU8UKHiqTgeZ%2B3mnwZCfaRly%2Fx7LEbaiKyRPkR51WXb67dKvI0lfwkvq3swvRPWfm5jkcNx%2F%2BKmssljuU4sWq%2B8gGVIIFkdaPhAfmivfBKwWOVfsCjfvsShXJKkxGJRbQ4g7hzOk5iwO1DwTeirY8VOBrdzpo5r%2FNwemEQq5rA60GV94ieB8zPv1E8lrTbi3I%2BUWUDBZb8VR2iL7CQqisV2IYJg5UvhCNeFeq8zgMrRfFTF4SCBp5GnElD6I06GY8i20JYTkIWfbs7aDCF8xy3ixWRcBMj9FB%2Fr%2FXbuDJs1Ps8T63CNrxEUFVopdbxxItFo4cwcFjRFVspfI1tFxDTaH7Xq7kDeWy%2Fb0QwWRllNaKJgj%2FDJHrRzlrzso7s%2FK7PsRQksTcnZ%2BlkjZADZRlIywd%2FNv0eSZqlbftnm5LNQbMLBMc3gnfPfd%2BJCmog2t5bLbDv2rxDEylLMJ7t2ckGOqUB1EU07SPDULhvzsLjSen6YPIZsgJUxtiWYlUjuggpvztj5n0cGsPTefV2mC1pBjxVEsmS08wDFgIvTRwzjFZUh%2BTgcrWE8YquWeDAyimeSGaDwSBrMnpyyz4OQ%2BwqQSIpvEub0TQ%2F4m2E0MVBXsw3QA9aI6kh0qDKLr87WsqEJ2ogEqvpcgfCJC9%2BXYYYdQYg7GQ0aFf7UfrXnc6ZI8lDdYvw5qlr&X-Amz-Signature=6b8c8c1f9cd13557e690146a306224de2348ff61bbf03e964e67e90447bead45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

