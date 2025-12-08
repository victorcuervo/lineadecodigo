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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XMXF7Y2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5TaLIHFBjPDKvFtLrVCW0RU%2BBfiD%2FGSZ1I%2FdYfZ41EAIgCLLFyAOEQt23b0RNvAB4ggkzxSxDn8dIN%2Fp%2BjnVwQZcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOjOX7TExgHhvhUuircA%2FYi7%2BQA890y1qfzBVtkKrQRuWpbKXkcUi3fTwiK0br1jefuRppHunmV%2BHDZVEPLAUGl0jQyeWIw2qs2WaJM5iCJWCEptuHU9BNnUD9%2Bu2lFb0z5Gd6MP8gOPzi3p0fxv7xge67jLs%2B33UOkKHiJjfydc9m5AOE4xQn53P5ekA1lojmRwFRLDUllFVIlHoJ02z4e8PQqvR8mU3njNX10crOYbd7TziMVeV%2FYwiqpm%2BZY3m0%2B4Do1p%2BvHtEXYuklyg8aFGGR1Jdm0jK0sh9H57YUDA8Y5iz2D1Q6OgYGvAdfi3Ft1FM07LfzDf3xWm8%2FtdfFL6lJenHua89h9gYTb%2Fx1ZuoQJW25J0yvtxWgSHMXyTL%2F5Xs0eJGP%2BJz5KP%2BfH5zJAClkVrKwSD4aLz9bh59H0%2BuJUj7HDbU9krWx0W3ugF6WScPh%2BrMDlP6WeP7BPwlW630d8tyzPXlTWyWoOQ1ylP%2BFCbKF9tKZ9BIc0LbrXELxRleycb8T0QpodAoW9zUMxwJXFyp0gk8QjJfaVQw952zTbtlEib3wMyGxs9ejYTdU8Nm8b8GOVe%2BEoqumbVCz4zcLT04E14RozIdpAzr9kLHAfVSYxlG%2F53o98CcDBYzqStKSiel2FtjKFMNGH3MkGOqUBl8sZEbdqS3SYFrwZ6pmdkNQ%2BZGhCZrap%2FReST6286FVfVIavQ%2BpAHeps6PLxUiDISDnd5h0OscuMXXiGcWBmuP6EAuL4tiOnxPurtTf6LYothxUacl%2BuqT3iGSQ20UD7xIgrlfYvtmNoAHvCN3mPaYbeSg9QNyO8%2FZUtpJ0NNnKJ3FwLyiuXUhRN%2F%2FVLl5dBod%2BUH3dmu2A7zhO6dk34TmJT66hO&X-Amz-Signature=e0f2bbd829b29a1e0898c0d0d33ef1ba3f13bba7f8465290642be28dbc8d483a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

