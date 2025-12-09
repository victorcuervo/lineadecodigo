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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKY7HAKY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtgK4AOwD8f9fBujSzfvz3S123%2Bk6mrCL49dGqPAEakAiEAl%2BOOdaLITmgZrbcgmnAC2LKm0dyf5ECWuD9euwd4wZUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPSe3j%2F8xryW08eSyrcAxSVUVzhFpZP8kAyIYddhD%2B7t7PCClkN0pRK264iF%2FOu8ZxTFVFDmEr%2FIFczUw7fQpw%2Bs4SdkOXl310WhV1ePm6lcLqNnSLW6w2cOp%2FrWNhwZLEP%2BB5xx9wPQ8AjWKf%2FtPJGeKbcrhND8nqDNA0W7VSb4YDotDpwGQsSUlNT8HGWAXVALPu4WeHlEoAlcnhZGzIeUslnzGk37%2FNmvmUoSGu2aOKbZFCc5eb22mJQlJyJibB0GTopIphx4gsKwAkI0Owk5FXPh979iEUPD40Rh7PrMBicMYztz919dStrhUNzUOFE0rxosVNGShqFzpc%2F7nPUNxSEOyucVebcLYQm%2FJjyKMW7Pcco8NrFigwTn%2Ba4DMewe9sRUvnkJxVR%2FW%2F5gQCRkmx9dmJArfXSFtfR%2FzClbcmSo%2FjsfYXilyVmQm%2FHzgp5UNEQbgQW5MAoKWYKX0TzFck7Yb4Jp4CZr1oRLBfdrN8c1q9b44qZ%2F5laKqSTokj23Rj2UuwUge1QW8z%2BQQBm9HE4g0mdrtx8GXj842oAUKjONHwtJ%2BJvaA7zakIeiXkJBNQlQhV1XDYSyeg%2FLXEiqBku9vPi0CpkEWLsjG31JOReHt2LxCDOelgSxooYyTI%2FQawTwra5GCIxMMGQ3skGOqUBgjN%2B55z4cY20cmUqODquHpgCtpjqzQ2Ua5dOl%2B82Uogh5yrhHSnUlkOrH3hlGhWUQuNmS%2FZGz5voKmAt0xeQ48%2FEJ0nnO9yJQL7j0k1UjL6hoyCCJuJ4PU48Jf9dmoSkO9sqwf3sBti5zshEEcUk1KcaYIw1Kxakrle%2F2NJkxxKX57zKk7gppciEtVYPi3hp4niSSMtoRKOvmS1LgNtYRsW3qAgH&X-Amz-Signature=51d2974031f6eb6a411f855d180359fa1f18841bc1e9678759216db3adcfc8ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

