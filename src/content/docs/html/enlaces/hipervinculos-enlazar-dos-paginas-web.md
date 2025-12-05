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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDG5CGGD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDyEECvyIACTkhVm%2F78bV7z0J86bGX1V5C2pqRAS%2BbA0AiBt%2BE4qyaA9YKkdo4xL%2BYpPvEyOpRTiNqFx86yDxKoDPSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMHwb2N%2FEDEJ25Go1PKtwDjtV%2BN0uVk%2FRrgCoHFGIVpKYcwo4qffjFh3whh0CwCuWBQZEYBXR4uuJgbIvnI24QgXpc4GBWU2p1s%2FbI%2BO%2BbkgaWjFGVMDZb%2BioyMNWCplhtzBI%2B1V3EGK%2FV5ax1f4Wb1JqR2aAJZ0iHyHuy7PTD2w6HEvOoqSlsI2GzxaQDZabsenqssNEnjqjU3zxqBKbiagtsmdw%2FzPLy8kpvp9ptE%2FORqzuxs%2FwtCiIkH2nfp6fi5A5kleHm3mXt3K2AsehpLin0WdK9i%2B%2Bp69CH1C%2BxTHfK0XwKGYqTx1t8cGu6a9CqGRDuxeZtcP80NWz7uKlR4nFG2uwtDPt%2B8n8WUA3TjhC1X4FwW5kw7nha04ALpOnQtj6MmKYRb%2BcKPXJCXgEGFWAOtUxsTun8X3QNm3NKJ%2FIhKWuNYAremEjpIf7dHY1T4ZsUJr425XjeoBZY%2BBYFq4PlWNUsiBBvBCo12dHlBq0YON7NTzKaukuqSOruujpyuwtIx7KMj1ucc0Qb7Gyfxs%2F3at%2FXxbTa50DJuGv9pakFd%2FPuVsCamtNfsA7DTrqu4nrZV3pkkJSCELl%2Fb5ng7hwi4qGKp4Awo8R2JMCmYG4G0W6j9S%2FHj2EgVup%2BmzGIq%2Fou%2FK%2F9CgDckW4wqJHNyQY6pgHXIQ%2FSkSg%2FFt4N606ijoBslCF%2Ba2crORZmL7lUk%2FZvfyZh1vJWCgjwnmlWflhAyEo5PBW0xqXurc2ZQQGRYc31rCvVfUZ7tjZ3qDWT6CkSy8BNX%2FLT0deCSbIoVHmUUCnDl7%2FAKDE1glMQjhxThHxJft5hFVeF26QqmQp8oRFf0PqWVM%2FUPRogC5wso768J0Ml2lXAjfB58oz0uTLrqleV8IOYqf3R&X-Amz-Signature=216cec4d628d73cfa433b6ac8e34e29952845d7856779d67a0b2e64b1b58ace1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

