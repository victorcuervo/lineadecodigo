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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFG3NO25%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb465GPb4CVTlHwytXGXeXjwXFyxSX05NZkjQa9izJFQIhAOFnyNajz9YlPy3MbYU%2FV%2BvRfKtTRL6%2FYk2QUw1myBarKv8DCH8QABoMNjM3NDIzMTgzODA1IgzHV9kgU%2BNLjMHqcIMq3AMSmtgjastiW%2BBeqXb8jJ5gSXDJvoEPGPEfaLOibr2sjBS4%2B7aKSi89tY7W4uDVy%2FFoLbVj0aNhjoNnBdRLVi7IetpYsJX4LQGBkDfsrmy9k4qKiqYooU5QjrcisQa3nRdUi4EBcqZzej1Dsx2w1OsxWy4SVcLEiXfGkcRNfVTSjiALEPuALFAro6hMOclI9SDzxFiNtAw7k8jty%2Fke8IWDOpdJkJ6vPSRLKjGj7LQLhs%2BMXiVFzzM8ws2SjhdbUuR9SW5Pba59nLVSbfJaADASsLiYkLxubWaUuDGpIlTGdytWfLkZNwk%2BNrFoOjd1iDygu5liiL9xKX03v4zj%2FUaCegM46pKpce7PRKypZpKJWvB6CN7lv4SpIsBRBosRCLYjCbX%2BCeJ2YXrm7%2Fr0tsroodqs%2BpIdPSJDdAtBVDK%2Bq1i8tPSjbgziykM9i%2BFHcmeP%2B69l7LzMs3gLkhaa%2BXqpxAQPcZu149hYrhRdzMN4P%2FWt04EQsa70IDhT7Ag3ADGFtqPodRplWjVtPHyOlvGPMTrzapEkUIA0FSXMqROilsWEgAWKG4fE3s4zZuYs1zoMZ7AHapjuYIWm6YBix1YokoE9iqwIO4KBsOfntvS%2FTrY5UkS8fK5vPTxYXTCq1NLJBjqkAYuSffp5IO9Rp1ymgreXzeCxaSQUxZ5rVfM8dHmgZtDCf5X28aIdmIAnmnActfLJJCEObHEX%2F0ZURRRUf5rKwtcnePObtYx7%2B4QvZyeejGCk%2B2WtXHkqkEpNPkHVeSLuGMn7MqufgRA%2FD9jm5LhPNX65PQisf1isIh1NA9nsCaSgDxdWb8%2B2iWgBF1K%2F4hxaFvu%2BKqipamBt2%2BmLhG30oCDqKtka&X-Amz-Signature=812c4622b84763434280ee5371858d02efde95ca7b159ddc173ec8fe0e56c46c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

