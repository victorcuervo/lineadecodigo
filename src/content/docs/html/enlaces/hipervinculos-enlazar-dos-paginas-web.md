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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4L2UI6F%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIA205ShiYpfdgmtMF%2BgTxPK4cZzUVlSr24JZS37RzFeKAiBadzS3sTpTnDWRJXdrtlpS%2BQLdoiLEf6orJF68L4ZdWir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMxuLo8M8Errv4GR5WKtwDx2FAonWjBJNUwnlukEljFnPZf%2FLaRuZhQcm23wOcHK5N1LEYN6gOkzWuspwStonrNyZ64JD3EQUKznhjUAUUZMIo6uMGKrCl%2FsoGcDHgr%2FUsWguRkBpeYpuKZaZ8%2FxU6Ib84FnEBr%2Fy4qWZARkB3h0j%2B5l89zldLwfBb4ab5CggYv3vgkIWM699pfLdtBkE%2Blk7xlax7LyAA9Jz9kYcjwHhriZgwp8nBa9AKD1QV5Pg6BdOBPYd5vDbAiyxXJisZmAkYL3DT0IiKpTqUBCLvyXDmtFau8WTlDBuoOFfH0JnBGjGUi6LKcjZlmuJNurR2dC9RvAIvo49gi98VwGomfL5oXdrq6J0r6QtIZzpX3XtHc2BysO%2Fa5B16nor4TPNAuq4WXN1x%2FrcigbUBx6UzYvNfUu5V0J9YbwaXgzaP47ifYE8BoFq%2FQiTQZn28VhUE5Ynr02ckLqas37UkxJSbZJFAHGlTCs9Bp3s53NaVSPVf29TGF5DEdvF%2BDNXLAIhjsGt2MF2nTRrpVO6Ffprtv7HbyfLc0NIgMzs2fscgcGB4CfyyeryOnWasfaIXGEqXNFi45MsIiNyTM%2Br3nNF4LLbzUbMDCDZucMZwQyIOlyhgn0lKbCulBBm3EiUwu6HGyQY6pgEBi1Ar62RJGNU75ubar0bJsTfvgythU3DO%2FN0a3ji8o8iVgw%2FMw07N2pwIEj%2F0ne2af4N4ihzoxyDaBf3so57Sg%2FqKB%2BtHHjnavNdaK6n2y4ABV36eHAvPJOT24nIjCiahvTSj0uhT2ZkAfI7huO8XDo%2Bmx3pb10XAvmEG79F7WnQscha5f7UrecLyhVTHsPuXSGz%2FmwsTeUkZbDAbBUuEaar818P%2B&X-Amz-Signature=b4e89d0edd6e00cdd7777ff60cf31c83313cdd97de9f0e92bf5c3c3efea6ed2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

