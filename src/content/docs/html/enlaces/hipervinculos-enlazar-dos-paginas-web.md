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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDP7XSYW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDFuOuiImGOfd6m4djlKYf4O6dHr2rse7IhZRFGGqDWwIhAPl0u3EvtC1W1y431%2BiK7vUzo1hKSX4iWDn6Z6eleQOLKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDm47MoXER742hp3Iq3ANGAJLDU%2BRNsRysLvCWEFvfp2DPV3kZcH7NN%2BfYS1HdJqQCodcDqUZOFLHHZggFqQxJfgLrtyWrOk0syrcumi15NGDGVxTFsN9ETwhXo6JEGYG5qJD7gs668gAj2gdJIPY%2FLDOzg5Mu3jBrw5pTxMSlyRVHbS0I%2FH46fK63aifC7YfspumN%2BoRYpKA4ZUL9jsyEK9vJSV00Gxw4pCTgiDxa0YNW7ODicYQ2JqAtuY4UqV7FMTN7L7hUCCS2svMOdapi7B58wwTXYVe0fB57sabkTzIWofsFf4IIuF1wZVtlTotERs6cFqxuFXRrizeMoNYcCBXh46U6jqCQG4l8Maouqyh00G058QPGU%2FxDhgx71xK2q05f4jI4R%2FLjbK%2Fc%2FnK0HhZjhPiLmDqWJ%2BrQzvMr2WiRnSlvD3DdMQpEEjOBHfJJaa2Xv7DXR%2FSeg4iwOdXhR4om1i6noSbRWIdVm%2BD4aY9DSCbIIIcCTb4Ia%2F8qan25dZan5Gn2W91GI1NA0F3abf%2FZphO%2B8sL5dS2eD7jbmgr4NuiaVMzXT7ZGOnquisRAUN9zyk7IzpnX4JCrQIvFUnARDK4QatRQs1DL45AL1UGlhP0by5KjXTNuIPLfh0TfgIKqJhUh6NtwCDDbntTJBjqkAeskBqRRTq%2FxAddpEgqTDMn%2BggZKxpnI4h0xnuGAS1AZwKvx2sSkh3Fwya%2Bw%2F48vYWzgLmZTW9DaO%2F9MqTBYhHUWV2hORrEYa9YMglmrNnI2C8xcB%2B7GkGeWa0ma4J%2B%2FVlnR2846n6xBIeAre3Z2qD8xSO9z6jSm%2F66uLhKA%2BGCywTvsBgMAUGtEtIDZu2nrtHVCew9nNvADW%2BBBRAch5IExAkT%2B&X-Amz-Signature=f2fd95fcce3df77fb5d27cbc40e9786b98a5f95035880cfefe0b2304c016a3f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

