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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM5XTRDE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T151814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH5K2lqxFN4Q7MFFWA14nWrYCBAihjRZ%2BibFl3T6MfHwIhAPPxLbAzw9H80WAxy0scucaCkIRtyT7ss57EtyL5Bk7GKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzF%2Fv7bgVLE1GO43Iq3AM%2BHQXbW5%2BXwlQNK1kpoq5DFtTusvJetH2iiLvTHlKHuB6KBcIbXPSfPmzO1KwHj6y2vSv2LbSb834kHMkFrrpa%2BgcWROeiaQw3ycpqUPtH2UhKWveqPCoKfDI5a56AxG%2FginT6%2BrWRTpLoH7QJVjNwThd48x4X1ua699Vv5GiP4wbFlEIqjzZ6VN8rFwnkjkiav1i84CYs44RxArE5zFLfkQQ7tSgi4hLfBuS%2F8bGKPQa215CtZADXhrA3SSEfLJm1q26eRwKdJ3wUHU7l3k3orCJCmfcow0HsIhgfjjzUVuwu0XWrivWC7DIVj%2Fe4M6PUAzzst7%2Fk9d9Dlq1rZt5j5TEiUnFXjroQYJrHZHq9HQ40%2FdBsJXVSUNvtGcNMsZmWDWlkSNgzLlLsRr84pHrKs9Lsw4J2VymFaW9fU1OTQd9Qh4U37rHZVP4qquV6UuhOY3DwGdPSKq4Q%2FGViEodldQIi0A6fcOCwbMnP15DuDs0XZB39fune8m6mc96tE2FSSQgZDimXUSurLjWgJ%2FX8uK3oZrPUu3pWPhxG8ODpIhECz9K8xS5LFKnToDzrtACv5EoKLqQaIsk2CKb4pvDqVC0MO4ll%2F7k%2FErtZTraKmyyndi06LnNV9LXIZzC%2B3eDJBjqkAUbRqoNufCw918DkHXQ9ThnYRaL%2FDfvx54Uc7svW1fblRGyfh5Y9Jj9J5GXe105PQR2nwV17%2FSM0EBV7dSQtjzsiw3nQ%2FZmZtEXEPIbRi4Vjdh6wBpK9lQbwf6hyhb6rzwLpocK274moYVyOM7b5hvG2MEtuIMjYOvHPlxvUQqepeTLOdHsnnEpq%2Bm1O64AEqyoV2OVKOyd5zRcVdIUubZp%2FFmLI&X-Amz-Signature=0b991f9148fe1569ffb04d07b07f840244c01307a000ee23956d757b587b861b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

