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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JC2M3N6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T222701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvcwOkMoyRNrzs%2BJgP45beexapo683Qh0tMw8QH0eaNQIhAJS0KZXpQr5q43%2BDb6Ofs2TVP%2ByLntHzZWhNy32JIJYQKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMdkgtBhFg%2FDSUIUIq3ANYbkEd7kMIIjeSclX%2BZY9L6KpFbVRvg6L0PcKn4Yz4z3uvLEBTUu8NELlTc%2FsmV2IDDeax%2F8LtrU4GAd9BFiIb96EMnk7oNMIEr4o4HcmBTpotWAIKRBPkMQxIf6Uv9uMddVrvxWtzzUthmxDysf5SFcEYpjgAxVx7mR78mFwsJMDMjWWc1Be2y6Bd%2FwqWkQhphnZh853%2FIXvkIhaP5M0bwSYsrxSMHXE7a97n%2BTok7l%2BpIZg8C9LkXxmZH3NR3Q5iILomOcrqOmdy%2FJyBQ2RfGx212Nd2KMbvGTtgQ24us2JOxDBnbB7JbZjBO0iFY%2FxBJ6DqCzFRFr5KxF%2Bo0%2F4wQyNKj9ajhZjFttbQMBqYIDwYPVKQ3IzkeGNvAi6IdA8lelPevMivkcjJ1AfYA1CoYF1obdT7QePggcYmcMN1hAjLsFFUr4Mj3ogyYRC7cJMZeT%2B3fwnv%2BPnWlmOBbQ0CQAtw5E1DvVIDqgb9NUnNXtKma94bS3lUZzYEz3zsyWC1IeKiqb7UKhYhWamdGdPEs1oFta1Y8jqzE8no4gWYiOrQWwRNqq8dRw8NfVl0IInXkMXQwAGqxja0tkA%2FmXu%2FUG%2B5Jj1we3k1Rz3vNlFHRcXFYi6xR92F1COE6zDwn%2BLJBjqkASrKWb7u0bZDYDynAc2o9LNulIEoiELP7i09LUrU0AU3ZL2uV%2BpoG%2Fy%2Bg%2By9loNZqKB1P%2F0hJAC%2BbBZTV%2FLZY9ojUNc32llnAiwHq7Mx5syO%2FTEeS5RmvZMSSLpKId9g4p%2F4rSuql0CvAqC%2BqStrTDWvgaojTKlYYIVyYdW%2FcIF5YRvzvbmSnO6mufrQ4OESChL6YlXSJ%2BRiJrUUsv9RMf4athO9&X-Amz-Signature=af6e4f7a54c52f2f55afff0ae5bf146e703046d645171f493ebab784b8152e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

