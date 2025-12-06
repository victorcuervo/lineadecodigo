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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIU67II3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHiWIHymlggWQj1ZiZgms08IH3YTH2Lz7Tvn5Bz6mpqrAiEA5VydoLxyPtlNkpAcFnqrfPhV%2BozkMnNLTmnCHMftX2kq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHnwjBq6PClgWEFd7SrcA8RTWnq7WM%2BV3yGEYZqF7Tgot2DHr2skpfS1Nb%2FSyQKfW1hcP65Z1G4remtX4Za7yz1OgIcZ6ny2YgY%2FblP1nDFVG89d217HLklpw3u59fqkC5HtiBga2LlNCI04%2F5wOhHDHuNVu3zzNIgiq6E9hTyaYTzsKSeFIHnvcA0LpxDb3gLC6ixZrAXXdyDmHr7Rv%2FY2344eTxVZCJ07SQbxYhUXRj1itvsZ4og1iC8sXzYLAFF%2BUx2scugK8xP%2FRKI2rhVcvXmW40cwb0Q4zlzVPR9fJLnGOtgbva6fAoeBCT37kdh7fkfXpjpLXZvjSTvNZ5dqqYdg4hjmZPHeLRM8e3IJXWL7OWfiDNzOv0c1%2BjkZpIGmPgb1MS1lJLfWbQ6yJGEQWyYqsjO9FKPnDJwmyG9KlBGu3wb6V2YOkMbdEQ87Fu7oWYC3xFMBq6CWo8djqBoLuljRYP8VYuAGwv9B8BLX%2FTSWXMJZDOguQn1coo70m07zGNskgC2zkKeCRYSrcfJ1Mg7zi2QE%2BkwB1jS%2ByiPbq0A5lUAD0ktncY%2FoTst5CzZ00SFF5vwJI0IMfeB%2Fp9BVwCUZz3ayVdGJFgXYehH6Girjf1kd6qB9%2BqaVBej%2BCV7VFJs33yPWxVxW9MPem0MkGOqUBaZiu07dRyP84MLmr9xX%2B768l%2FlPw4lm8dZI0Rfn%2BdXFOSFBj0UHhBkufZV4njVOM6JX2A8ewuNvgzbx0s5vlluVNSOsz%2FGcxDMON84IYGFr4yuHNocDbXhzf1ud1CF6ml3BhDj%2BV%2Bk65MZcPxtxrNnPXXYV6GUYjpFN33J07CGXoD8rEYujx1q5mxI8Xl1urHo1i58JV0DtUuWJK7qNANmOtUUAL&X-Amz-Signature=3caef1ff1bf5b1efbf83b199605dedf10da30701b6c6c84384237c2fc0434de3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

