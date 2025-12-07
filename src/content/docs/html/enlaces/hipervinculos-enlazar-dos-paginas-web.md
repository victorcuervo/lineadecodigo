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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYHIYBLG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkfDg17AgGK%2BUGxVZHZ0grX91Q1l1hKq%2Fc29uEx%2FhKbAiAOFmzBVRXDu4ZH%2FZfg%2B855xCoeSgJH9tYAK%2FN2HV1UbiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5eTlSN6JgEBE3pT4KtwDSiah9VpyKUWLOF2qZ89JEGIfTTMCqKkfIH0YqRKRHMjd%2BSS1r7odosO5mqQTVEwOMbSF3szQSV1ULFHns8oTuXjtWPda80bwIM7ZweolvkMq75sayEQ1zvm%2BtjUDLZytUGUs%2BseLdYtJfdg9dKWBcEMq5%2BaIcemrU%2FyaSxvv9c80WFjnstRRwV9ZSQu3H5fKOOYipa4D60cPMPHVUKNOvHap8Votfx2PXhb2nkjdzTYqMyNmq3sy5rT6jaPW0eVHFh%2Ftzw27GD38R%2FiCbdfeuUKh6%2Ffhn9JtkOWLsSuCUjnGLWlO2%2BR1PCJzUdC9ck%2Bg7WKeKPi%2FwFxOBOlv0qELpcAN1r2k3N0WlygneV4RNNKyzsgMZ%2BgsGnkCWFu8Y8N4O%2Baedofxb6kV4UOwtDia0y%2F5l3RrbD0oURJ6PidRk8sk%2BcReWuYUDR9QjBMZ0TKWWIhlGsBNEoOEJP0zmMxrJAd3T%2FLhZBda6YAFJVraFSaZgnbTGNoqbUEHPZv4g%2B5G5mU5%2F3vFHLp1MqzBEWfuSjMjpWpCxsFHQ6PDY6%2FvR%2Fva5SYD%2FIU6oUUqC8pv6sQIUWfLY1q0xUWzMz5on4hc%2FWxRbUJYlNfMNXqb7M2LpxL8NAZG6%2BgpwzrSxccwypnVyQY6pgGKYB489AlvQiDqJ99pi%2Be%2BDNS7aG%2FGw8alGUNUIQwG%2FYTn1Nowog6EPG%2B6S2jmi%2FmFGQ7HBRvnAc6REnTiA7sgqSIVA0odk5%2BIlTfP5VKZK3dJhj4%2BRRYKOL0pW7xV5FZU1j9lXmYt5P%2BDFQd0SVFffDxH2Mv6hVpBI9XHo4LkX36Q4NDny75HKY%2BiJHAuiEmp%2FD4kljsAe42kPhRdjJEpd%2F20lEzx&X-Amz-Signature=f47fe188a835accee626f99ccea74c88e311d7ae9a4959ea0b05d15a7ea74855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

