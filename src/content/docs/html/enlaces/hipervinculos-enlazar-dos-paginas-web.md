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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVQCL3AC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDo0AxpqhodWfDP4yeiNloOWeJseUsW9skd1V9%2BYpJqWAIgVY6djGbpvhBpeKG9ZTm3xQRyH9h2oT7kjvE4%2F%2FLRapUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDWYyXXv7g9Q8yOwPircAx9gEZbn42tD%2BfBxpFmXSHk4lC8ASyp2Bp3bOb5Numj79uAAlsQG2eYckQLLrzHJmTyaZuZwhPG8saTiMaXd%2FOVvYpAdPJtWVxx8lhI7c0TZpr9geccFK89MPW40bFE3iCri97VlPkFsTlkKF627bB%2FiuURZVNZav7tV0isLLlji1Tf%2FUe6Li4Wi7BrFvGxejPSTFDE%2BfQoY0JlTiLacSYvbxIsMUy2pFGi2NzhclGcTG%2B%2Bqcz2cXx92M7XV5CV2jmeMy1irat0VVYZD4wZGKRXVfWHkGh%2BAIxKPNQrF2yyAaJobKj7x6kKVXYgMBscO9jDEMmFEGAUx2PEMdKYH%2FcggWl5QpnoS5nxvyidsVmSpsOw2TdRyU0gPwf0zQSBYrWbem6pfYiQZ67yxxhD4AdnBlS2qHzZZwOrAic%2BAIFz%2FFTUTA5QhB2NNuVfWMeth5siO1y33rjNXQNfyY2IJubOLpSmSwvTRjiMPHaC3%2B7cCq0mhHQOi4q4k7NmBbYghsAc%2BhCeeEr1xZwSVnuTDb%2FmAJjFzWlOmka0GwVvyhT63AdcXKNa65p3P%2FDTCiLKAxHgDUyUeAv4cO2mg8Ac3KML9GINYSkAOWFDbf%2BCNeKyeVo7DHe0lpxJkbD5AMM2FxckGOqUBfvF%2BXtWb%2BBDwoOD4ZxLONCAZCf3bnDWtt50RMF8bC2dVaH%2BTUlKXDfxMwBmszUHTA3JVCLQDP24zQf8%2FyUiMa19wDF7NirWA21l2ZjsIA2p%2F8b2ApkVFSs0dM2F3aErALKvYzOXijPtl5a00GhHMTy1IFtpHvI7kcjFFOk35ATHXFv3po3EL6oJUFzb6ThWAg4F9NKYqpSiXe9c9bhdqE18EPSSt&X-Amz-Signature=f0476d83099c2ac08914da948992c56c0607956bc1aab3cf6fcca5bb7f0335c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

