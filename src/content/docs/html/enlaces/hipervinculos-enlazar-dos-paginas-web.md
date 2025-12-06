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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB77H5W5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T171236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwmPKqm8sUKxK9070ApAcmaIEEX64OhmlVSxMLlTataAiEAz2CsPSRMLjuzykoIVFadMOihpbS1qYZS8KG708Pp6wsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEbnlwOtVbCIaiNHWircA%2Fx6po4WuAIvGbdnpEHGnDfhl9f1Vuj%2Bh7p1RTIMSLbmtL4Bt4PKN3YrICwSWzHrwF5WhdX0bkzK6yZ2hdxw7%2Fm1n54Jo1k9WKXjzHD7o2nZBi0OAkN9QylSQu42wXyNYNmVunPgONQIizWt3%2FIM9kl10%2BajLp8%2BjChTq7k1XsFrLJjiEzflRl9Y306mwylusD1sYJjJfL81nvSUPb7GGmIIn9qyXvsPvwHHVvQJXUbA8dvRzMc5f9WTO831l65c40N1na7hdg%2BE0jEWTq13pkSRmloakp8acXEszxIqRuzSARxtEe5Hl7eBrhOAF%2FSE4rdVTYXzWLC1KG1w%2BcYlu7Tf283viPqZwQ5mUBGegpYGBz18hxdpep4v6r6k5Dtp2n1hZyKCJSHTpPT3gl9reZP9EfcvSC3TKfwnO9keHTgn4AASYsfjBlc9OJDTKvta2fSLESWsJr4w4IFXqzeHT0w4AeVf1hd4fzVyxM600C0XRX3K%2FqFQmZf0Tmx%2FnOkKK5gRu7MjNw4s%2B%2BilJeWS1Qz%2FxdLBlQi%2ByggVPOvyg9bQ%2B%2F%2Ftzm2MfTz00JV%2FrfmhycW8c9xHthHxn5kSeU3ycI5xizIBHRPfI%2FFA0%2FmMITDnygzRrj4JkWLrWAfvMMmm0MkGOqUBjjrAKc62YL42z1KOSf2%2BsROHmP%2FxXF5C2kc8%2FmDYaU33inRsORDQIZinKU2QVot7onvscHGjNAHP4BVM4nKBfcvUz0jfIJ7Z8aT3zXEEaX3Pui5zuMB15zZz5%2Fjs2Z3w4%2Fa8MrsujXLl%2FUIqCAZDK%2F%2FAibG8ijPVFJqD6bpO7Ly7PByGc%2FUB%2Fd56A2hYlnbaI8JD6tBIXSRnvnku%2FB3xttBa8VpV&X-Amz-Signature=e3b6b67c4e4b6d23ffdf07a3deb4b0d93c843916c77ad1e93311b13111cf7b87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

