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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMG2EBYK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmlvIK7jq7IEw405%2BsmolE64aMqi0H5Hbrjjf6CvZzggIgatCr%2B%2BL1cMtEmZ6PsHoNUr9c6ZsPzGALe2HCW%2Fs7V0Yq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPkl8SbS2hVIY7H1ayrcAyeHy9GWxYDcmE9f4bT39VDEpTTPfKftGen7G9v1wZMhLTn%2FVzRzAUD5fBwc3yAiTSTURo7%2Bb809vImi%2BIbFYgjJmMkBvwH%2FQVmYJ54vFGFtuwcJqbAZNfpLg%2FfijhPmAA1zQuRMNN1jAJZxrfxhITa2xPmJtb%2FwvKApf6eS5JlSOU%2FXl6213W1%2BT7zzd%2BELfR8C2ZoZHgTFHSKS%2BCffvDl%2FBz98z0k7l6RTMIUr9Uz2u7YeO9Q2xz4NP9FrWAMjSmUqd5rhvnhC%2BWOWc1Dhsba8Om7fBpMwWuXai6%2B6kJNnENnmRU1BUayiE%2F6AqZoVwd%2FuGP4XyJ4RF5uPa0T3usytqIe4D8nNoCW7KikT5g%2Bpxm5MLZy0eVjgbz%2BvdOm%2FzQM5mBdcfw%2F5scc8iFfTXh4XSrLnCq4JzK7G1FPE1VMnmJU16gnTx0hV0JEvur8lLNfxNRNlCyYiRAUL9wnX16Tk2IVMgJr4sz9ClItI5Mhs35tA8Xj7uWsAV7sMgGHEWuUjw2Mj0DsL7N1VAehaXfh4Q143MC1D8ifAi0RRKYLTKOdw5xLEoTaNwVLKLMo3old9EfB10bvTDnpv%2BaUkAj2arziKHKzqXqTr7qw4j4ByyjPeWe1BZ4OWsW%2BfMJLT0skGOqUBktz39B%2FPLtS2quW3R91%2BQzhALU6cblgpac5Axpbpjh26vUr0o4OVsZF9jDzoYC5cJJQgs%2BPL0vDbSuF5B5iXDdas1kOlnnMGjIrUp%2B67Bx0r03%2BCOLfzj825yE6pWNKOKkNnP3izPXHTEGnQ33SBUU4qq7Ro%2FlxalURHCbdkptRYq9rBSYoE55tkJXcL2zc0vjHmHZUcUbVdiXXHy8xEZntmUXsk&X-Amz-Signature=9527fdd88aa80fef1c392b94240c3c52f57e99e75d859a26d5bca4f5c8037ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

