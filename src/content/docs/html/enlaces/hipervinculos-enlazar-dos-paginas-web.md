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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLU7AOOJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T235125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPujVGDCBcnyEy4Lv56TH58Wb%2BioVpoz1GpX7ltgDKvAIhALXt5U9E8qiDKc0XvN1t%2BovXzxyxEr67LZVRncv0LEJVKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypZpy65Bh2UnVGBQAq3APDPmROlEhiDsO%2BeBh2i4GhD2vT3gKjuhbZ%2F%2Bj9owwmlDEKW557rNmoRYnvIx63u0C4FJQU95TfHxxgdfmEMdWEF8YLHNydCyqAaJSzj%2FX5fv%2BBoe%2FRzvSx8FGpsD3LfRcPku8LfXG%2BOfYA8FcocxWfHbaY9reJJ6kO5SnG05xH3hdvgnn8zO0Efz6%2FFuoL%2FTbLUaRC1Vz9hzVnoy%2BNKbWEyUnLI%2B%2Fi1JKMlwdy1D1y02L1TKLLPsIQFxHFbph9jOzM7XUMVCWu3FCsgY%2FJ08LqflOUiKScAn%2FjADdK5ZXIWmoHdBDkSEvnLjCieFwe6UcZHQIs1lqbu4aBv4UDeBmFljP1WC7MvpFTSc5sfRASj4V7WieZwcw%2FuPM3qNlTr9i3vwuWPbYeCY%2FlzfUHJLCN6xpZKmIBsAuAotxxC8y7ASkq39s%2BaRZgU3OdjJTiLeXcZGE%2F%2BqMvftBFEkQeXhLxDEOndf%2FqOt85qcQdgdefXswQ7FcvySNORamDldtaqCfy1XCnSRMEUlEtRZaqYLltmLcSSzoaytDw7og6A%2F5iuJl14GrFi3DaLU%2FJ2tLAe6JEEuxvlKr8XHvvsXqBbSKVoI7tU8wIznYdjxHq4yDHEesenHAN1SvB4c89wjCQyeLJBjqkARYVEXG49hw2yqtAbxeGE5PFGlAfGdmTrHuC2miIp8%2FlecWnsMly5sGuJjIxoP7myDlc9C1jQpuslFJGkbcslMNUpz%2BLwI%2FyGsiRrFfrIrTLFmqFIs0%2FqEgPrF8TEQHA1Z%2Ffa6kjDbSuGfnVdf48Sfk1DgnHkLfKDob5quJz8febkbIXAtndTbUSRG0SLADmXI35uvJGzmjtrLLlJwor6V1JFcyj&X-Amz-Signature=9addec9a0c67dca2411178d37575e5572eb30251691452ed1cf78c827da9d564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

