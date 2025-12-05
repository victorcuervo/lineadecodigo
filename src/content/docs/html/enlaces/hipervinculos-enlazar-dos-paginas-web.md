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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LWSMGIH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl26CKKHPeeBBKGua0%2FGC1dD2QVVJgdm0iAUUhr6To1wIgHljPPdZTAuYtC%2BU4jgnZQdaRDssHyVImxiMF3UiYYccq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJpBUPAaw29BeDjEUSrcA%2FCYaob0oQ5Fi2vjoQ6P86%2FDYRPt%2BfMqN0vurC0VH52FFTw1KXe%2FYpjTrL2bj4WeqCmqSU0Vl%2FOSG1nX%2F4990HkRLC%2FCIR%2F15hhosKKmIxdWuBlQqyqMOAhXFAu4L0MEoNr05rzdijBa0qybTyNSmultAHLjhTRGdxeG4eIuwrofaoFmiKuGNnVSKhwsCq9YtS7OHs6eouBNGYKH80xyqKIKLNB9WWz3WML9uqTi1f%2Fbi7SlOoQbDLr4P1u%2FgUGdKk3P2tiHRHqp0qIhgSMHbSn58Tp3x5Ixd4zs4OHYZAzhaXssMB1QDoOdavtuzdhuaS%2BHF7Ivw7nSbh0jABKtTLvwkdZqPiN0IJoYiXfW5wAZWeUV4ILcGmyXirOjwg857CFCm0lhUcWoUe8SYy6WCdLNCKqMU93Gtr88LXag3eUtjfu0HGfpDP%2FrR2mGbCGTu3YPDfthmQQstFdiQpRlhN8cwDxpC88duzQPngN25uUd0wfkRXvijYTWqgC9AqAWgma%2FVbhvcqOpAJEIpeOcEy3nm7jLWhwjcN91YZ8yUPsGZqDVpBx9e2rSdtpBG%2FctVcSKLzvvzuQWLfueExqbYW9bC1Eq4Srn43BKnKhr9wDcbdy%2FQve3pj2AJ8myMJvVyskGOqUB4u9%2By1mzj86jNmbITDlyjFGSZFx0cfQL0uUzaZv%2FNo%2FMfUdEMhdHSW6C%2BeJTAMYLoYcjxPjwFq5TCuZJJy%2BfhMAHhLnsgW4Yz%2Bd6OJqamUg9YTRcCX1wh6OXDHdETX8VcLiGtiRqF%2FQU8TXXFHxCL7ictpmjiOWHas5BTdj4e4PEC1%2FmQNTZMFrAaVVuKHv3vb0TBfymG6hE%2FuQZU3mUaxsMwDMD&X-Amz-Signature=bb70acd5189889d47012054feb69da2bd92b5ac3c9a0cba4df02c2460ac1c233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

