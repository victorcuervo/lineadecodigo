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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQNG2ATV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCc4lyjN0whejqgAmAfGRMRpwMGZb70UtNEjhgAPLTjnQIhAM0C2nG05YpaeBVk2tJAiSKs%2BRDGgMyBQHffRhDD7LNGKv8DCD0QABoMNjM3NDIzMTgzODA1IgzbMP6g9UNs%2BQnyq4Aq3ANUTEk8FumQd4mjpwWwzuKcr2yAGaF96ZLwGulBoOPqA5KVpX3PR9sNNDEJMP%2Bsi%2FmdvH4vL54X8YjcVtfV9Xvp4U7u4F8468zTDbaaOuj6cLbSw2tq7CHopPYELSW5FAXnDAMW%2FgmbGBXgDPgyxQOTknbeS%2Bpy0WWxTmnqOk7VIm1Pah%2FIP96NxMbdum9ZJSTGdP3HxpRVfUybRakYeR82YRd6hxnW0VDixQHzv3SoG2UOTcWnzFccaIBzCm%2F6n8bm8PRdiME3jqsDpn7S7JO8aDg88RCCkCDz%2FJPVbAtv8uO5wJYc61fLw4jNCdRk2q%2FaYJ9Szv4Ma0DH0RFQ37d70jsxXOxaSAOFU18vffQg%2Bc%2Bgn5%2FM5ZQq%2Fap4EW0qfoO1RvTkjQp1bPucKczrvaUT%2Bj9KrilGk34bHB3NC7gIYgXD4fI8lCtcRDTC12mPG0RTcZPszGU%2F2pTr0SkxaCdpo8rY8Rv4PyyxfxfrPLcC%2BunE0aT7eUXqLp6oJyvmaCOnBqznDx%2F4usnET%2B0zLO7nac3z0iGyT1ss1yXWoTJw2rotiNLPVRGCeaS36iJRM%2FWrygv3k1gLNkjG1%2Bjsai%2FsHWKuTCrwrdRr40hmdQa4yoDxNKmhKugCew8LDjCvkcTJBjqkAc4D3Mh0OXfeN0CZxgGbg6pNTQDdMFzOuXUWaWPxFSN%2Fmzcb9DD0LZc1DEZgnLQ290ectm4WiB1YkG%2F5lrql8mNrKCt%2FWwOgEBlR%2Bu4b61nwze%2ByHNhQJPaJbm1jnEknOtpaNCizbxSui9aQZjImqMUmwpiB3KNZK0Lp%2FF8SRf5QXKv7Z33sA3yFkX1cpI13NTLZQqCua30lSbVWmqqqz9s1S0YT&X-Amz-Signature=4930561d5a6f17f87d3530c12e62e3e635e993e9d73c03159b054f0822c48130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

