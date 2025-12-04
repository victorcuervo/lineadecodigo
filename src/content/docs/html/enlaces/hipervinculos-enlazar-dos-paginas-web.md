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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUBMKYCW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICFnvJ3UNutur7abAq%2FHi7csMHydbDut%2FCPjiLuQOcTCAiEAgPqWMQXImaZIjBOYkMZ3vNksFSMxZh4ZxkP86JkfGZUq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDJFryHyGqJMY2FkXHSrcA%2BPwRtocJdjPG7BHKxzvNcKgvK%2FwQS7JlTd7UMHJd9Xi%2FEegIiVxPCQmgeTpQsLgN1%2FKLBFGXr0jwKbCfnmi%2B5bldRBT1XFb9UKWOC1b4uEcl%2Bdn%2FpbvzSCEk0X09eAPSSebONi84tOB225d9xll4W8NY6%2FYfWxia9QrcEhJjzWDSOJtBmUR9E3s8pjWS9jiaw6MdJVo27RjlhWABtwRg%2BfPXKYBx1pIdU0S6onuGJ9pXfVVDYUSR1UU79O8phgRDWelXQDU3RGNfF1JacjgtFcqRyD1OAUoJfU%2F3lN1uuuS4EUti67PDW7Qebl3iAPWxeKClh9nDIo%2B3GpxaA%2Bxpn5xrXUrtGv4aL9AVvH9JK13pi0BnNytutlBo5pXJ73%2BTf%2BPWqCFFO9YIsykoOVazzLPqfpyNicqOinbc%2BR3Jb5jaRmbdWoLliRFtJW%2FsAKtWwup25t4Kghs6cp2VzB30E8XzCJ4XC56P44JaoUf80HwEiG%2BFuLbTl768oOolX2jDdyruxg%2Fgkz9aE7Zros9qAmcNYTAt62mrh4yhlJrNzpR1kQnPOBq7oZ7KNYqpV33gW5zc57HW7RjVAijE5tkxqM8wj63OmUxxNH2YmBsKLDTDRAT8Mahf0kthkzpMNOgxskGOqUBMB1KTlRCtYh4REPFDWdhR3vZmCRBBfm105Vl59w6HNqbYElNqwkaXwDn395%2FxVZkg4N9breInZDgW0u1LEbSO3Smtd7WBSUFw8TJLc%2B0w5OyJ%2FW4lEdcCtfs3nOx1oD5eGHdaWYFAeRvHfBlcWBKiJrIZe%2FAO8N6yaJ2PC6TowdPp3e50fyybSmMpAPOQk5JoOZ1uJx2sUNwp%2FlTPAt9GfPzggT%2B&X-Amz-Signature=e06e6ddbc02798cc3e459b2a6799b1b600c1fac698a19dfc941d0a6328692127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

