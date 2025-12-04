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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNYNEEKU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCeRH6T0fB5QwsXNDojORqzsqdCaTnEjAG9divCjr96YAIhANHojtQAyA%2FJdnMGbhFp16suKFEUSC6%2Fy5v2cJ1QPl0iKv8DCD8QABoMNjM3NDIzMTgzODA1IgyW1Z0xw%2FedZsMFkIwq3APCweQkkm9maEimHOB5mbv%2FaJTnIALKddupvyZj%2FBuZCrDAM%2FIVLu0buixv%2B1uS9EcEpt%2FEsgBQiqI7H02w%2FEw4XSnDVyfUwr76iCbJ7SN8lKSyl%2FIGQnJSNt94GI5SEgYVEvp9jb%2FyEk9FirLPm8qukKvlS7sVCyT4Rz8BDg9sF0txZG0Td83UnyUvxlT4CAZtD0DZWczATShFFLk0XOiaVnuUCrbS3SvKm5rh8p0i%2FVWaRMsngNl7DtfUNSf4hMpIL36fcOnTN7A8J5640yG%2B7lL2oEJfjxNjj3Lkr3JH1ZXjEp2qOBG4ZBw7m5NSTEjIVC7CNDne00svdmukITg7UEYNVzMp7CYobcBjnlyyImhvyrlf8Wh6izG%2BSeU4OqsYcWhn%2B2w0olMRcftI%2BhjT63vlAIw4YhwFyJxAuDn%2FRIro%2Ba9so%2B5%2BHZr%2BJaUecWxwdwEo6Oi8JepHucwCcmE%2BR%2B9E02jv1UnGPfokd9ZiKCHmrGn8FKmprZIKb4ms%2B0dMQMtSnTYWNMR%2FTlnPcY41kxjGAuipoqMEk4nCo7QuKvzcHQTFdt4K33zO13JHvc3o%2Bk82x8Ze2WeXBpFnO9tTCx3uAnOR6lJGBDxCs1P2w4Bt9QMFG4lzKxkp8TC7y8TJBjqkARxhepa8VlRJ1CKCmOa4GUXFzl3rtX2brNNRUcF5ddSWPC2lPVLrZ71WR7TgA1fmTIHDxQLN0RZ0R1T7Z%2FIfwRBkO5LXnKsbXY5MTAYEBK6MGOLeyos9iD0B%2Bt7cSXr9GBpX0KP4OjRl84FQNQH7V6xuoNHv2CeC4kyNlSd1zpXXEqgapy5b1yymMKXP1JPafTCYs5kggxXh8PJE8ZI7n8RxyAZe&X-Amz-Signature=2e81f507aa9d163ec4665ef18e126eeb3926761d1a511426b2ddda6d96b710af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

