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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3D4EEZ3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoXaUEqMyXrIdI2tldgutobEf%2FuodJsOxfjmkabUrqnAiA7dDcUC%2Ba62jO28ZoqIgB6iOY46042wNM%2F35i0%2Bf4eQCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMvcdyX0dLYD%2BTxwwZKtwDZg7Jjdm61JAsvkfgOueTz6xUKuj4FXSPene9r7VBAbdlDgjDcIGwP8uVXxhoZJjW4yXlNq7y3%2BZ09FinQwIBU79nGc8OO6vLRTc1tsUsjnvO7xVxN1JkARHqc5Fw3S%2Bhfet%2BWWJA5R61u0nzCJHum7GGPpbMqFBr%2BKAA7nEzktVwQR527li2m5cdbxVVRqANZUEwAKHHGFXvIT78xhPvvgR%2B4eNdCHsgqsdbCyDy9OBo%2BI3sc118OcAZ9Os879KHo1TMwZGQ2dQFHCsXhEKtV5OP6uk%2FkVnC0IOIqhdEluyLYUfG%2FVn%2BIob3V4UskOKwDyfgW%2FElkeBV3gAGz8Li2jmWior5nvHu0lbmCsf11HQ%2Bm29qUrdwTwnXfPUpyM8v4q5hx8p0hRilM0DaNLeTW8w%2B25JRZMmpO%2F2HzQk3SyTIHvV5mEAOirfY%2FKkqxCEfnuMkG7KoSwxfWv4ZgVSaaNu2aw1z52a5lPyhD3Ve8DuzgI0G2rPmM02ow7%2F4XaARUeKwNpE7akqctKG0PIsvf8Bvp93Jycv%2BJoKIzS4zHn5MysQpR0oHyHBrkBBT%2FMeM8ubb2Bmbf0Grkir1D6w96W5UVL9pUwiW8PbA%2BngDbg2fTEyBiStwRDOaxE4wi6jJyQY6pgETkfiCSSyxlg4DpqEJyNg4hYP2hOSQlK%2BWsJZR0os7%2FW6agQ8BXCry%2BsH9nKFqczsrR1uDLXNAf807USPU3fTOWfZVmebcqvH703zT%2B5zhDW%2F%2F5TnI3qSQ0OkLpxBLEgU6AHmlFRL8fNwANKxyW40wNDv%2BcKcZmZNAJsGykMoqyCtIrsGDXTjLE28wWsMiFezNpLJn3wbQfQCIjyGw9omPkMrBL%2FFg&X-Amz-Signature=dc0da62b652ce991f9fbef428a1949c7dcbbfa7173ccb9a6eef306ec544fdaf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

