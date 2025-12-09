---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UECTSXM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T174907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ7ZcZyEPAH8JN2sHdUgn4FNDBtjG7P%2FS%2F0WxitFqCyQIhAPZXswZvujWa1mFugVYuLQ2o2RW3fpe1UOiE5fUGe1wcKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMmD9TeUh9wywBqy4q3APgNfYcU09Ppw7hxf1K%2FMmE4aubnS7kh1usgLNBgJbh177F%2FFSHTNpGbli%2BGC2qEwIVDoZgylVmxoVGEFMF1PDEGYlTgWl3EAmnie4Oy9Q4kun26b0ZFAiwjYj5lWVpnaUBiZBFgJRW%2BWGfskCIvB6GYZy891wJ35vJB1ApGH11AAo5kjrtCk%2B6YA8Ep0K2XKfCpFeQk7YStCSvfz%2BH8laLKNyyjKOcej6TtpS3rPv8AUGt6fD2n69GXddDGV2gEQsYO78w20RyVDwEO8bS3bq8pbE7BLf8bUd5YI0ICJJKlxm8netsPmyKoMAOhphOtayST8WF8s6%2F1MkJes0rSerWAgzsGecP%2FKr4H0m56LaU2Hs394pOSBWWJnBtfLqJkaGEkp7Rqo6lhUzZWs77VV75miozZcQUMPrnmxmt6Uwo0931UVHpZ9M6LD1%2FSYmdS0Kd%2FEBgaGksRiSAjckNkIrNek6R%2Fv1q31tUX9UqF%2B7F0aE86qhBDb6GGsmLR3OiBs2eHgdhMXnZVujW1tBN3mm483sYywnmsx08zZ5E5hIo5tOEFzGo%2BwN0mStjnx%2BiXmUNEE5EgeaBbBAsvq5cnGn0km4lGyxKj%2BgBcs5gcf5cLWxyrqtn6CBy8gfwKzChveHJBjqkAXlgoYrhJboD4ViNFDkqm04ZiIn%2BqUI4xMP%2BuxYRm9Y8RCdLnxi5zuYUZHQ5kYL3RD0ifONSPFuKd1JL3gL3%2BxsXMBoNsAMD2fMpJ69omgDkI%2B6ivcWkQE8Efw2TOKKDyIVF%2F%2B72hSlTKqxBxCozlbiImpagGA%2BUctME0SiqwSuPRJ7P6QVuUgufRQXP7C%2FRTMJh7wsAt3Qk3pfVb2KJxTnajRm0&X-Amz-Signature=9fc896beddc4700451ac3b76db37927661a890347bd8779d98c7774341086687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

