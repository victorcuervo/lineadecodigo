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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOYYEWFD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEN%2FmGmJeiyeWD%2FvM6YHMwAe9L9OkW8K9knnLuLUILXRAiEA4RC93CGxxti3ILE7UighE6RvM8Ar2RvYppi1CKlMbbUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPW5ulzJLYtrjQAANyrcA92hyUj5bxVmv3nB0GNwtCZ3pV6Is2O%2FtAvip7fbAE1gdSdtxD8p2NijguVTHobdtAZttajcGja%2FxRTedytwv6%2Bhklusz%2FddOwAAcgr4CQd0uf8zB2bOXykWoCdfJ2cYMXnfrI7Ti3l2a1r4zhs34RTJNUJ47F40hsnxEdoqXbAvwpHla1BGqhkziWR8ZnHa5%2F2KvGd%2Bt1nFCv6XNUKJDLhv4pDi%2Fy4kL6TLxxYKmo%2Bea4v81ZNbCdM3Q8EIIs9YsTVDPkHj19GwANbeT0wHltqaJDrPTUvo34Gah3KXRAuG0Kuwt6PxkkOCnn9ELFlltDZyGzErfUAtSoC2GBMsRWpLhewbfzgiP5aTOEWfwKEbCQ%2F28NFSFUT4cCki149vqBfm5a%2FAelsUoFRGlpiLEEkRpnMscsis9iWPKSRBkjatlQoGDqI0P6UIBVIFJXjqBh%2FcUZpsh54g9qvRNz%2FhGpoi4PAGiJbePKHFcyYLS8b%2F%2Ft1fg8JOD4HTMQqEmP51TJtTcxIy2N6t9Op2TOBEBySdjiPwIxg1wrJkk9s7O0%2FSd5n0sAECbZ7vA5ZN9DDZyX9vfFb9DOi4uMrTxid48ixTfK2Up0pZcfwpQ3G3%2FyAtEe6EFYVHIAkyIeMGMJD%2B0skGOqUBwXzf8i0sKoOKPwk7YKk8l4BszioXS2cS1klpToVSTP9tlvEb%2FtwSMdiZRke7sA8VRDuoSzImaE0asLBnlK0uncPmqXOebQn4UZWPDJpi5Q46qYUY6beC1MGOCLz%2BtzIW7izj7sJ6kqF1%2B9ACsOMjJ0HiJ8X7PbvgPri%2BnmLb69LlVnqfqePLPstK62cIqBPbjLj%2Bp99HHxhsDrUpkLjb80q3jv4W&X-Amz-Signature=2b8b387f65184beefb9cdb232dec3034288fdb592036d24bac90e347c18402a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

