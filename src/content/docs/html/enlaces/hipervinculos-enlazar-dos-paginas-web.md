---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZADSDGDV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCidlhayZAXlXGGSbSKNJTl7thdaRuMKR9kbXTuMbxLLwIgHhfyeVxpMxpu7BnanE3uEcGWER6vgdp3BDVcVbWx9vgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBdV%2B%2FoPBoklLEFbhyrcA2HCnqYAO0%2FEpCZwnTHtHqETpuP78YjwXqt6eE5Ki6bZ97cf5v6bDJ6cQVzVz9Ew2Uv%2F0kqFOCIbek7ol6kExv8oan3%2BxczRuNVJ1H7NvCrqSk7h0k4ORIgUMwHjLDywooj7XU6bv0JMhMvunW53oFR8bEVx2bW4K%2Fo2Wsg9ptPWBCVuygqOGGICic%2ByrVTIOxvtFhtyQsk0t%2FrhWYjtF1hrrHote0u1iW4jJgDFW1y9vOaFl90YMbCWh54ASfcWZvbFG6Retd%2FCyduHFvJFXrtJpD%2BU3%2BYRCV0R973ffjj56qpudJOdTTfO%2BhkCcBCcsEWGmvZGspVbDa4t6aimyrgukZ1GxvtY5mCnAih6oVoRBv1%2BHGjCQD%2FCKuJpezVgeyalughc7D0R5w94NVQmU9jS%2F%2FSM0rVZB7woeMuZj6gDGGNLv%2BvPXNY1IfdceWilsirdVgdi3v8WOEoNvUbpSuaHHvn5o9q30CTePK2TeckOzE3YItHpys8aJo%2B6jjEGmiVFs3KLUEFbfmno7ngFmGWV5YePXFgs6T%2Fbe5MmtDfEZNWk7mWXBJhvSDH9hj%2FzcGKeb%2BJTvb2zhKFbeqgKY6b8J39gaDX%2FxPDiXJpN%2BFGIP8x8gcnCOKjWvpVaMOCHxckGOqUBegY4DqMkCUMRNGjWoVBErbt4Zrz80MhjaETH2ZmHGyF2ImXMN%2FEYwoLqYRvBjTK28KYcugarUx4cUagebCryCA2auTEj2Rx4S8uagB%2BEG2Vjf8iXEl3S7INPjpw0jP9ewEJMu6zAotJAWE9Eiw6xozOgd5mXAbuiqoCayeLDPiPt%2FR4dFpLgiIG1bHDtUDnxEuCpHZ6TSeK5Gf6SGD4e1Lmp%2Bnd2&X-Amz-Signature=db760fe37fdfeb6a4440ee63deef523d34271bd66478b855b526c05b4a66c94a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

