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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466577A55HS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEf7ufnAz3FTuzbedB%2FqIlgY3iOeEkL%2F3OmDhT%2FkQcBlAiEAgdMyowXNPXU0vbbUY2X5%2FHV4TadrxX36BBpkTT7b%2B%2B4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhhT%2BQ0FtElL16F6ircA%2BaA5YGO%2FU8ho5E%2FZggEzAkcx6XsA97re7KZPIN8Y6GiRuiDxYGeBbOigyEDKxRjgj5pFEHWzdO6bowLp53sLzS1bgZLSh3QdVJXT8IxyAE0XRGu7xSBoWsbFdPbcrzomqstPicduJmRT6w7Dzua9RCdoi%2FBlm5JJszdiZNNFzxoRAYSDDslc2e7WgGC2l4AxGjH79O07%2BM52XAJcj1kgjdVMrUZS6aSZdy85P65W1KqZI%2Fmwa%2BT62jRKSG1M6TfeIsJwQYgQtzBs%2BUYpai395Sgnxw48AX7qyqaZBMjj0%2FMB3q7evOear4p4rddcvX6N0gUpD3R7xidDQEvHY8naT6iEMLrQn5yaWYFJbJ1IaTPHXwTUD2D%2BKk7tQwkpggWPsEYddp14QHMhSALen2zJ451JQGYl31ql39D%2F06PozBgT5Al3htaMCpeTAK%2F6Yxqwbib1maiQQo4DFU5hx5t1pg1v0MADDArm9GFbGqDl%2FDzF%2BmyiPoJoU1R9ciLhncSHbhBP%2F3StpR73XwhZuSwU6FQZ5HJhsN2xtAoTIjRq4Ix13MwvXFug%2B36roRudhMtlfgwPa2a6T8RX%2FtZqB7BEADEv0XVxeExCnEaysJQaj%2F%2BSovcZZBAptvAdzSDMKOa1ckGOqUBKg0hp3whZgGVACGH327EWAUKpALZ86M1m1Z9M8SGwMIu%2FcdwU5fdIDmOLHKeGBoKiLefZefy42GzxhVR76o8jh1kfMTMaDdhcBF8DsyZSDUE3SGwChphIq3DxVOtepw6wpvHE46oPKtpQy3oR0l%2Bmw6a3oTU3VSrQMmqGx3YeLIl1Y4qFX7Iu1wDr08HT17PxifsYS3GXSwSKs6gT2O%2BB8K%2BewS%2F&X-Amz-Signature=24940013dc6517283e37d6e19d6e30709189e72191ad6632b64f5d10d2bc4144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

