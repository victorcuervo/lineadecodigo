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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFV7VWBQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvs3oESMsRQAPpfA1AnqnjZsAVEJrmNvunypcUnXdvbAiEAysS3cvc2ccZxPaZsI1D1onAIOIXw%2FitFli5%2BYis4b5oq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFzbliJwOxf0CVRu%2BSrcAyoBKnL%2BFVsEy1wFUNbi%2BRLlYQA4KRwSN%2B7Z2pvkl1NRX2fZCVV6LgG2L0xG%2BitsZAI96JR5GhITU2OkwtNkCIln7bMQQmDvB7fh6jTGZ%2BokKqTNvfTWjX2HnPQdK7xL0xDA24UAdxmSsoP5BoeM0DQnbOTuM1uS2fmLucA5G3Jz5vKskhsox39fH3zh0qmB%2F3QORb4vctS2nMhbeTwVHYOw4hRk%2FU9iMTGCfSRqhHjbV2b%2BPTZe%2BD3zrv3N9BkrvAn1qMWDq9j42XKVpO6E4emUk%2FSoXnaewFp5AZoiM6aZKsCGotmJdrhTLzy5Sx7trR9H1hYSSy%2B9liy%2BoOHdc%2Ff%2B0bTM5dJeQtkxWkyNlbV8Gk%2BOewNJRnusHWubkUnloKjANf8LJmTNz0dYecykfcZ4EhtifUENvi6szz7qZn%2FpB2YjXo4vScb8ggasIwRvjAPDyYqa3OJ%2BJEhmHYowzBXfhrzFIvUzJx1TXetbuziOAWaNTC8oEBIwo8pqDYmbS70oKrT4atPVMgsn3sWKgjqFpAo2%2Bzq5R64T2wLt1HE7JTTpfEvMosJbbuzl0vqQlAFYSsbxwBUVfyccwt2REVgKcM5fO89F4ikTXmVMrj8U75Eus2CQKakP%2FPltMLeoyckGOqUBkzMzI439BylDHBMdbZF8d8YYBZbq3EnpBEBWMo%2B%2BaehQ4GXcUWduoBntvcyFvWorGYmzl%2FaH90tGCeBaFA6uWAdMPLhdH8AWKow48vR3FF%2BB9Bbrrf%2Bb7wpCQ0S4z8mM05IopUQzlpugmlzdWmpXlOs%2Fp9%2BsPHwJPxXxsgQv%2FkgS13%2Fr06A6TNYizB7fe88R0qM6EOIYUDKoXpiEGddMeQztiNjO&X-Amz-Signature=882a4539f1670fdcb037b28d9b6b7fb49b8e13bc710f112999cb676dc8268da7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

