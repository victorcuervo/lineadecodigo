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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V73WYKKT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T164038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfkysnPV1oH9HqzaV6GoZHM4D72zlCgGTSVA%2BmIxwT%2FgIhAKJ%2BTHsr7i1xB%2B5JSmIgdhirgpB1yVihLaHnE8KBd08SKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPilslfYxMQ0ReM7gq3AMAOlsxJG46qfZVR8YbnW48aCl9uPzKQL0AaocQT4LBgz78VCT2mpHViYjYdlh10nS%2BgU2n73vB3Zb7GmoYb7wn7uLhkra3aWztuES%2FYXMrzMU8qomqgDqwevIHOuLEgZHbK%2B3jE869tx305f6v3Vvd6PW2C5Y2hNOU4%2FAwbVrA9YEovYchcs%2FpJgfoAoFdZPyfKIrKkN1Y1B3I0FRHFhpFLQq2eVBtTxF4YiEBfOMNzROurTWlZGO3aA4SQjlBLtVUQF7N7q2RvwflE7JCTxAMYRExBk4J5e7Op1lTEG1WD3KLV9WUId2grdjxHK3r32ENXpt7HEWR3j88QHdSBJjjEoj97XnShxNQLPAbmLqTBU%2BtuSxley2kFP0GvcnWG5wMKTxSdPPFoGVjXt2Vb4I8kq%2F2atzgblLUeKB4DXOmX3VFvhsHT22rLaZtNjmz1LV3SDCrlY%2ByO%2F6u6P67MStWkFwk9lQIxh7iV%2FsZ%2BX4A0FMXXPSq8qBoIZd6O4JgA7r5Dz%2F79N5DYpzODgQ5uGA5iYY3ReTfNmidytWWvJtoW3KLelrqYh1NQ08txJSPaBfs40ZCs34v4CA4OdiscP0thEYJgMECIeGCCaItIN8s2ackJkt%2FHAElKpAU%2FjDrl%2BHJBjqkAXePU9CQdFWe%2FBM5TJraenDSiMzT2ISYG%2FqkKbKBPecqTSKiC4PS2dK8k5ATU2RJGP8vPRZz7lgzIy2gv1m8aFa3oIcy%2BgCaPBvcbF02G9Pd3SQXOosRiHfwrwymQAzvzSFCa8S04IV2Coflb0OJt%2B1i1bYHapiIZ7u%2FMlbklfPpsxr4uQGjgx%2F7AitoWXv%2BKnIECBYJNCXVMEfus5pbM51N2Egu&X-Amz-Signature=9aacd3bb6db20ac7a75d02b6353f49188f45b54e3fe98c110e8d833737559c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

