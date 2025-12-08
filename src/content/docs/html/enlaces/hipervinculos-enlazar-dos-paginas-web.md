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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMTJLDDW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T112217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvGwj4OCTEiomOtgda1CKc46K6cWzTkTMYZ926XA4iQQIgRETV6jjEFyzi7N0xMWiI5PWQaj5wY2ZT1D%2BUMPDd%2BR8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLhvZ8PjZXVLdxLeircA0jMUnIbrdai%2Bwg2h8xfrkCOGFsFPVBVBZUNNg33%2BbMRzN39i0gW72cDui5XsPKoep5H%2FkH5rTWyoEzTCn39Z9z3lNg%2BdzoZNOfac1WXWNVjHCc27UmkTGBNK6nIJbr9jq%2F5jH39S0Sa9pdBkXp5rJeH8HoBVY%2FwA7Fl%2FpAv4ZnZNLJBMO1f%2F4RCJGu4TFdusi71Qf6DD4IKZiasq640XedhmxIigFwnAxRtQTVugNa3AUy7Ag4x8vuFJTGGNCmIlobg0Dkuq88zG6nt84wUAMvL6Vuw0exqAo9zEXi%2FnoqtsumgTZr8XCNPOTOhhZeh12XJQAphp8G4de%2FwDQd3IE8iGCjxVmGP8ZrOqz%2B2hodM75Eg%2FDgxU4UlmgyrRNOgXt6RvTCJfDWON8p2sfO7ORGJN6nY8mYlEPofol4mecIvdjzIzyxVO2Brw3l7bjTMW4D6UTuI0tfIZpxf5XjgTuaj7qKpp3fsQPFXhEpvcHGGaFnFk0vqEFCYGsWrQkRGfw9ed%2BZ%2BJ6qxRrrw2az3T3LHg%2FCCLe0uneJpNJ9UgDlphaG3K8Q4cVxgZadPaVqSqMr4LZM%2B09ZGq2urslKXp6tYW%2BCvZ7UuDVAghS0dPNeaV0SmSjbsD7gEy%2FuJMIPt2ckGOqUB4Zt29sFBg4rP%2BiK%2F6lKWv4ZG2xPh%2Bo%2BzIxO4px0MGbvRTs5ZCki6BNdwSoli1zPSbASlgKDXowayVx9lxOxWGjmhYmcviT4Cj0a%2FANdDGEba0CJkRZTM%2FySVgJDiZTDIVKLHqEDDTXvDHEuBGrnBqrrywn63C4dDrsCkGG7Cjep5DDGyUclQtmBbahhgVB7uEJNbE%2Bu7FvEoEmvrrvoEXBhy303Q&X-Amz-Signature=2cf2273f9dcefe4b64e6a88bed0779e417402f7d1b0feaa2fba066753bd60156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

