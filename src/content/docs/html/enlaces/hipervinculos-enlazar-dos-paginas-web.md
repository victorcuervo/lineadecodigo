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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT7W3BLR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T021225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmRnsBOhWKRn5RWiv1hJ3CoyWd7OV%2Fn%2BCrZLo8BHikbAIhAMkW5%2FGspl%2FurP9ky7Y0%2BWNNwiDJZKFxKZXWhj%2FUmAkTKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2B%2BX84PhmNqXLi0Osq3AMj%2B2WG0HYL9K1%2BzN5ew6MHm5YtxVyETkqZ2HxeCfR4%2BIdSvNKpCxOnVa5XC5IOtmzH%2B3rkro6PYn%2FBbnURTA82rrcXF2FPNk4ig1jsMFSLJoSEgOWbNltO5zNbTemjs8JyzW52LxEBqE393FfxRKaHqGOVKAzSgYvnJWJCNjNeZZu1hTYMveqZHqi%2BjkDqK5Y9u%2F3VQsGVLXSjzh%2Fwuc20CfXMzdszRh7aEtuXo9XEes6Sz8PTI7Lpij52cUNTM95geWuX8fYEH2i00wQCFe6did1AlI6TBftteM1M0gXHOvB1Muz7P9pNUBkuhrTi%2Fh9NKJGIdy38E2dlnyji0qkYnn6FVSiUhthtP0wYBaKE0z2I6aoZYw8WX4VYSSpOLYJ7J1ImN7OkSGgMO2M67ZGSYKqqfgNnTkFUNLiXAffBUIftg%2F6US97n9cO%2BuJBic7%2Bjez3864TzZJCBsnfojSUGbjTvIWzRdUZA2a8BvNDZ2XjwKJRprcHb3iyGgHrh7WMLDCAfY5NKjnir6FNPF6K9zsTwVrdsiKXT%2FczFfepF3LP71z2DmGovpjLrzM182nAFQASDvizTGbWgwcazHP9rdF7FzLCbQk8wBGjd%2B3NtYh0BJg4l9QvWeg6HrTD96d3JBjqkAUJuxep40%2FKMha6Cy6W64FGJ62bt5wbICcK1ASbBCt%2FQV2xCyx5o1%2F81w%2F7q%2FwLX6Jk1oQBaF7TEwH7BbQ5CaUs9iHu1MbMV%2BQxpDoEKx0ygQjH5%2BPz3P%2FDGHOPhjpIYXywkU%2BUNNdZ0LGjEhSY3Sb8EoNXVwXHycoRwA1tyCjwu2sKAWJ7GUXrmJmhvKICFV35E%2F7iyvkIXpGqfbIcQjknnA%2FEf&X-Amz-Signature=afad1453ac7ee093a55bfb9efa81c7d73426436701a60befd9ecbad47402179c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

