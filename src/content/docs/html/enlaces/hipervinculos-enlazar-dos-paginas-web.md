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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVXG326H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Br%2BjdTxxPtRdmXRBs0zmm%2BpwHsjrM3IsSdkXHyhzsegIhAKGkXBmORlLEvnOjG7IvuBa0dAvjizGpTB8iHvSp%2B8ZcKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySSTHcsbgarwTT3Ssq3ANkuLHYQ0cMhSW03szno8XulrDho9oY49a4BGIxb2S6IxnCbF8xrUrn6m4V%2BbZpY3I0GtqwDY%2BMtwTJF9smxEAyd5or7o%2BGBlAFiPZPv0nsvk0XCoISWUdsSHPMSMsUQwaM2AqflvmIn0KBXPmBKgXsiVBDw7nh9VJXZ5Dle5A9%2BeErXrX42nwdX4VEnj%2FPLtEm%2BhmNMCc2ysdfnSf8paMNNo6r0DcbocZSchpH8pQGn%2B4okJSnv3spwsN5FV6JNru6N0iZa7JCDCM2s9aNJduY7Daqmw8aMct%2BaYTx9jvwYlnvRsaUzWwbfXj6uknoXRlJr%2BRN0%2F873ssXIHhtAlYoDfw93esYN7qRlkMcBAt2SlSG6vLUJe2mE0tZ9Jro354E53IPC%2B1OBpIGFfMtV0wcXRR4uiqVNIhMuuq2yNY2Iq7sTX11KLHHJBKHZX%2FCZ32FZ0m67CZHvlvtsmxVIU4yVt9%2FXGGZGrJe4FxIcWTMtca7HiGfcrYmb%2BPcKRFhheeHg%2BCTHQ6UweJmAY93iTGXvzYlhNtqE9VLcx%2FPEumRiexv0G89Z1lV%2Feb4%2Bee4%2FZ3V79gjxpRC89E8Q0gJHPYjIYDcADPmgMOTpjsBD0uYdhj9wKaV0Rq1m9MDYjDOtNnJBjqkAZytDTnUCEep7eBAePpbOtQtplHzBHIToSmKE5jDmO%2BsHqPjnEVujA1JnOZBpptYtOZ6b3biUqA9Y6gyXP3Xlci3gZUTm%2BqWst5PxWMfhXpw%2FRLuZn1KX39JkSQRMU7q%2Ba36rNfRSFy6fCP66%2BQ73g8VCaq4shh4I%2FA1OqbIgLRTTOBrynXcVOC8APr3LZxxd0fBAeJyxbW75yDqe9Mqru9BCj7Z&X-Amz-Signature=73b48807447d48e2b5c59f87a76428abeb9ab5823377248895359ca2572c0b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

