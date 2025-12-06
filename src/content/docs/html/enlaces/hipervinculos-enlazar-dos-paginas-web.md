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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466754IM67H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPfZ%2F%2BlnHSBQWxhmwu3EHX5toC1pec7NTMbz22KgfLaAiEA4vWkNX0qJEsWEZzudA30f5VYUOVduEeX22MTRB83U2Yq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPVyb8lJ7vskORsz5yrcAw5T5%2BruOBW%2BLzI8Kznzghp%2Bs2L9Cr630j%2BL3kb8eO3Tsj8U%2BtpQQ%2FSG9IBIGMGK8AWr8CQmG1QxmW3ooFS%2FJfNO8zu7RfCCHiiwQsM664GazbZsbNpVSWKgpMNaH3ZMiie0lNNozRZj%2BLWu%2FR4A%2Fnp4JieyuQQI8iY9Hp8OdoP0VwgxXBXe4J%2BNF1pIZi%2FWCiF%2FUdf5ZN66nypH8ACrcvJthGq7DlAfMSi6vXYYjk%2BWrBdYci81MKAVPFF8IVEzgTN1La3x3GNlovvN23u3C1GOraC%2FK8mrFQj0%2Fjt%2FbdNkaO9nH%2FNCxeb7xuBe%2BdwzLxpIOAeE3K9u49RdHhRQD2JdA1rR%2FfUgRy9HffYHLq1OvKylTW%2Fp7Lix6WFmbpGChYJ%2FmLvx4b1oRp2PFKO0Y583CF0Ib3exkNZxXXVMkGucCkP7jq86xQ4YRTRtP4KIxFVZZYWca%2FWEB8RuhHY8If9ME0SI5BLghIQfLeURVV9RzCuK%2BY8dCVbEf1o5hUjr%2FO0uDKAqo1WXG2k8U8j0EEtRGbV9yz8D77WkiG%2F%2F2vjseIuw9g6fRKjihyQnpB4sjC5NaB02BT%2B6GSXXneYtDykXljKhS%2F64Z4bB2Vd%2Fdugp%2FyBXJLn2MEGJ%2FtV1MN%2FdzskGOqUBy6QSkkQIjzR1tDlc9viC4odoqlLQGWgqxqVlWqDhQO0rVQDUl2uNKIVfdSlBS%2F62m3Mw8dCvGz5a17kdW5RtxRN4QKBIHew5l61Rnsp2K137o3CaFU3GhBkRQ2FoKrNsVGchxYd9YCFa54FVo%2BkZVgJapcASfvas5Fw3aCIswNPrgDpbgxQJS2XgLxvnQAaGn8JykRgdd7t5QhqQKKmxZSITLaNY&X-Amz-Signature=b280036ccdd98033bc327cc35dcc8265bdd9b658a36984a53eca38b266edffc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

