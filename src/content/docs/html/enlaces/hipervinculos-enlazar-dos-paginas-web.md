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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IUYY4XA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF17ZQarBS%2FhJF5MV4Kmizz3rBgl2KI4W%2BV7lxujuufAIgOAek8kCHfQYHvJ4HnaGNA3wG5vAtPCvF2SlqKa%2F72Jwq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPVFt6ZQbU0MgWRpACrcA7Rt8hpuSbK7fnAQ0XBh3Gdt9eObg6nOS2vx6JOlA8z5Oji7zgidpaGXx1Vgb5ttHBl%2FxDswzDqOsFQkIPGZFfFabqt40U5CiTrnjLfk6TM%2FiXQCKZRNrw9K5h2TlPWLcOkcUbTR4Kjv6u7ONGs7btczLBb7S2f5IR4uS4LKk5SiNUs56L0zq3WSBEESuFLbkLfAifVggPO4LbmOhevy%2BOCvym6jtPajT7MfEreovgzeCrNFS0y7ZW2ZOOMjBeV1aIoGgpMd81HJyZ6th%2F8fRhFdWB4Gus%2BNyii7ZOgWJfHA6gM%2F7cCcm8dzvJ3SZb31QQshrHAsKOiJcqouk9KzP3ajzSl1Fh8Iw1Ye1F9cxa0X%2BpSsktzJ3j7MjViF36Qvz3tjY%2BPKoZrnTZsoMH%2FDa4%2B4x3ehSFvBTwhSibDGl6%2FHW4XJzWAqP%2BBc2efAlm%2BIUIA0RV4SBH1LTJJltpAhRdgbcbnCPZLKk4An6ERd%2B6gBZBJFbbJl%2BOsy3AMdSnCX%2B5ezgyr5YjElsib%2F%2Fxx4hwNlxq8MyKE8zTaBhX1q1Aqw0aBTJ%2BHWEbY55Hz%2BIYb06ynKmg3tw5AhvE7M1Zy7AkXgk07CCH1bznOmpbf2ON3m%2BUK828rPmxKGkOtmML3vy8kGOqUBwKYGZWsIKKqpgudbsWOoe11kKZ2HjD84SOu30rTSRzJH7nTx3%2F9GV%2B2wo%2FJDb6hmYRiWljR9esUDcCfIX7TPhTDaaStoHD8gNvxPi7bdbrgVWl46nuvVJjsOf%2BwslfgjrK7dy%2FWNLMBYdVMcHgeaylDlz%2Bh1GaO36FhLlvkq4fXBkYBZDvdqdKSA7OlTPqNh9mFYCkeOyBgPrfopulaMhCHN7eo9&X-Amz-Signature=03e43ad4b4bb91692851446cadef06e38db9b58462368d4f9a64356f324a7c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

