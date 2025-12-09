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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKIYOQB2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T162325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC67nWC1Vie1vuhtrRRLqQpeRB8GOP8gjx0VgvUBlhSmAIgfN6526Nl3OFjG5CToQ27Fhf9DbNtIEIpVRjLEOno2zsqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH85gG6g60L2v3erDSrcAwNsvj0vEwi41uJtWCoBtEwzccIkt%2B7pYVa2fBBN6saLfNLbxfn9lFCRpgrtd4jMiZRrkcLnpajNbdVLZqOeeKtF8qUFs11sJF8XtY7Sw60GVhchF59bhkdOpLULihwgjnScUGiCYZRz2mOWWwKzrRGxKm3Bnyv%2BYjpu5LyJAErpxV9b%2B%2FbTsOBbU8RGwrEu8t9Pmrvom1fju3CLnBNi5jlkGlWpPR%2F8jqS8TVrogr4m2t7SH9vx1D7OOYq96wls3k1sioGVoFSkkpwaMVgs2ZdJjVPxiKw4ID5UIgS4C6dmhbWG6faCWHUFVfEJZNmtCSFKD0qZCpYFwQwVGU5dhTx8bo6xDtBfjh85tIV5CLDIZmldH9gTkq8Ko7%2FqauKf3T%2B2AHXfsxq2Crx%2FvBnZk1BraRTRZLNA58GYv2BpZ1swYB1EID5JE8QCNPJh1cAL%2Fdgko96yxbISWrIai0aiMEWvzKjCb2q3i6KyIWbD8xKjJuVHnGm7InUJiJ8VaNOW4qjX5KWfkPmFt5ODsX5HpSsWGs%2FiBUI6IlKxuS20L1f0AZ0OxuHCCRxmv5BP740czWQS9nBW8JveyOFrSDCs3XsOX1q4l%2Bpse15Uj%2BE3HbNCDkw1SgW%2Bb2iLn6qQMKGY4ckGOqUB4OqRLNVwte31OmZw2A6WLWIBNuk0XYbd51s2TPCnV%2Fa44VMvAjz5gzmUqTAFRkY2jq1HW2IjrT86xFdw3pSEdjt0SSYx8aSot4E48V3BjEouyfn9KRXJwGSZ8NCn4E3zN%2FN1P1oZg%2FxIxTP5CoisWyoZUifuf0dWRVFZGfQtFV4VmJY2JAAuVXXJATuoxlBd4NZs69AA4EBMrG3gDzM%2BYisZ2UFC&X-Amz-Signature=235065c036edf8270d7347534352f5c06c55ccf685959b0bba16216caea73856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

