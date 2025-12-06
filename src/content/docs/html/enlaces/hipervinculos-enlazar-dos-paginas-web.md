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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVGPVFQ3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkwjtfJGFpTZB%2BcvWmUDRhdy08Psr9hVtgptO%2FW0%2FvBAiBlT8qKpoGYHo%2FHFUa0svMvhJi0trjePg38bO84%2FokwpCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMTpwEL4uAblXI3DSSKtwDaJBfzl%2ByDfdYXaREyyhhRj%2Fb%2FY61sVNNhXJndyQk8J%2FTeyQEdEiGlZiNnXE59GLVxJT5OwJq%2Fd6BU025shVYGjoE2dCnIsmaaUN9SJJgEpIgMAwEmFgv%2BFYHXkkCeMA%2BUZm2JKHzj6zP2PjRm7beOgbQmZKA42jBE3Tam4j7FkmqcYv7kzkVnf8VPnGcb3LZZdEDuP6L4GhDaj4Vl4tUx0vf6NT0hQ6qn%2B4YZEfXdsaagcimoxPhbLo1Ug0s%2F8yhScJtMhO1PRrrAW%2BpaqcF3Nx%2BD9jlo69d2%2FD4uhvkfxoPxwqPvyNJJcAtUUtQlvHhsOilFEARJDJTKT73E9mf5m%2BjPJO%2BDccWAaRk2ahtcvfo1q1rHUVjmB6oQAr9GpjX8prMB221U93af82BFjTnKIQf%2FqqqYOQ5sWJ4fEZUbxzz7w4rN8sH3ppP1eLA9Ta9N9DOdU5EXZXNJNtKgX8glPnE77SpxCPjmtpOvJCJkvOzHGiBV8v19P9ksdmBQgueRobQjmU5nC34%2B0sLP648ACwHsUtk2w2HFnfbKyGvkMm2dU9upa4eGFGyx6B2PSXkFsK%2BdPZ0O2zH51%2FZ3BHPjljFXNyQ5mtop8Gj1yWu82Phd6eYQcW1Lj645cswsMnRyQY6pgHWuFWZFNJcNNDJeqjFhPVNZgryxpz%2FvgQb5COti%2FgoXDQX6%2BoyP%2FmdP4I58jsA4wyZJX9ewVlZwU%2BSMXbotEg4RLkoz8D8ItsCjALx%2BXcKBaxtQq3Bh2JYowsEkUHUTocRUyGjT7q9rpbTohasi1JiCQ%2BpOSOzZcx63zhB0ZDcQYhymwK4Szm5kg15fHb6AxYE5NAY3y369EqXyCMASMcSLSOBou8P&X-Amz-Signature=1f3319ed97b49e2da82446fc8fd4b9bf56c0b4f451c0e749b79bd72a654c4bb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

