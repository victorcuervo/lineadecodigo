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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWVFZ2FA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIF0twBW0oYD0Z9dAXcetpZF1lE3V4DmAQoeUJvkRHz3XAiEAh%2FZHqWDxmAj%2B10ipNhz%2B9porkyT9sFp5RRVoRKDlwTsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHFAJwW8YLqONG0C8yrcA%2BTcCLqPuNWx8YzB7it7uLFpaWDAPCXLYVhw2g8kSrSyltcjkQI0%2FrAtFwKwPOAMjVCogBgdRlF%2FbhnAMLohP3b6ztoNPRb5cnoq%2Fj%2F35mW8Rmxp2owfDM2uI%2F3hDydGSU37KmnzGD6DwzNJmqBdmWAagEu9heaXzwbFenFUZPKQj4NthswzjCd6Bk%2Fyitkwgjg3RBXVRHhtSPCs%2F1%2BIN1nNi1WJUot%2Bxeag%2FRvIc1NHp8gPNm9rdSMxyagPBWCE3tfceobK%2FuY08JREq9ufbj77yJHw7HVsNWZbfJz4AdVTmRpuVrvZ7LYWG9DNtMGf7FUcj5YwPgnTcYLSTBpcdVNrFkAuXotgO6cQoHlCA9dDNXhgBa5ojUlsM891g4v0YLnwMEFNmvPtDiKufWHUZm%2Fo7feabJkFK2sf1fQji5DWOwsw428meSbFJDluEvMWfjRXfkbslb6r%2BiNVqccyUWqzdf%2BrnDULWJvHc%2FuphPdiT%2BUQ8nQwV5EUYyEmaqzJrwEnqVcC9jUn8E8686MWbTn3hAjpioiYQPs9%2BdpME1q8cZTrjDezwk2Kd62xQvzY0fMRU%2B%2BUimD%2F8bH7KNEirRX1YA%2BD7M43nY46NGFeUDKXVt8icKuBBYtx3iYCMI2RxMkGOqUBGlxOC6wQaI14pigTikH5g8qKLn7zd2Cu082NExRorD2dLJ4r3PGCt5ul3GD2NjpUOFxOKZUDzyXwzm%2FH0aFFXlJld%2FBs4HmfUwQinDka73SDUy1hs6HN1%2BYE4qFdlfTB2thw9dVDmBt%2FTF7mxcDqmrV6ro85qBQqTFqhArlFMwpKKeZ%2BKtdS8XnqChXbMNXR6kLRuXSgWqEcK4XwjwQJ4oc5q0If&X-Amz-Signature=e855665acfb142b12f3f9172c502202c69a38bacfcd8fc93a6470e81f25fe075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

