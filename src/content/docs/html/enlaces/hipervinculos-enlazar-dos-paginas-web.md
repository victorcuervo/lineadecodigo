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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPD625WC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T165424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoUNCMqFdRIC0Chz09vf2vUv8q1q8YzmMDF1%2BPpg7DDAiEA7gvY9S1RNSCs50ZevSA55pTmWTuXv7zoR6%2BpcyC%2F07EqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjrK5BLOmgxEeOuSyrcA6S%2BwL3WlaLVU%2FgZWdm3y%2FH5SrKUJFsxtnwYozcZzDt36JrBKNz1sdRkKeSIsMIKF0Q0SCIV5rcp%2FRCVf6LpAPjk9211HTbJ2uKJ2Ih1P2wawPY53c1aCmCED92v6k3wwL%2BteyIRWRy9fDI2nUIY3p6%2BEiFAjnuaLXonOsGG677fb7V6nuN9soBAZmClRFEDqPxYyLXEsXUdmfu%2Fl1FhAGOWXAWT1dVEV%2FZjQ7rcmONs3DLpqp4knjOsX3E%2FE%2BTpjs3suVSW9rqFTEFsep7edfYX1zT%2BRGCkAFiVzcddw3ISxgwHZLrxPgFZ96EjNieboxVoVYkZqF8waQhLkV4lPeYxmejE7xAppZkRmNL20FBX%2B8CVigp20MaOsm4cGl1GxeKmlHWH4SwgohntPQn4vHR4NYVwqTSh2ZNNqHvuLj52%2Fn6Ige29n%2BnwwjEviy7shY6Ok8EGISc4s0Kw2G9fNoytXyTgbfuC1Nkf1YnNonXBJTwItY3VL7%2BEYdDkuCtzcQkuWiVlKRwV9OU%2BMMejMixZ8UGcFh9ka9GPwTN4JQxtz3QV66dA5Vncz9HnIWz1Ywn7M97QPHSdjRwra%2F0RNKJ2Rnr4BKD3lS8bmX%2B72Zm7h98PsiffUDF%2FNh3%2BMOqX4ckGOqUBptRAeCZ%2FxQV86ANT1a1vRLrULH%2BMn7BPGacdRn%2FH4znWry0exE5Q3BZocvfTNIYoiXX77UNAi7heaaWh0Kv8p9KRnvfyZbmnAfY8SfRdBKHpN4NrjDTWy6ZQt0q5cuLKnActt0MWgvzBtwXQQI0l%2BRwhQS2248de0HkE2E2UJcN6R7BY88FwrLTAktnHnmjgw%2FLG8B%2F15pz283kKUAJ7vcGCCmv%2F&X-Amz-Signature=f912912ff4c4549419a6901208f6603f11c852e49620e9ec6cc430420707976a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

