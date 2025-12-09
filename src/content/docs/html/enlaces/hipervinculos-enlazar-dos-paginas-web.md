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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKTJSM7I%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T021747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9gdm7sx95C5%2B%2Ffat1vBJoBBjIRfLN3Fbe7TSmKWjpiAIgbEsrjIXGJN9FMGqoze3jwZUVcVGbUnILK0Xy6ikRsxEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9kQNfVixDg0UlehSrcA%2BL0RL%2B%2BKxK98Ge3qE%2FAognBjkBnMziDfFAWF3%2FOJmqzh%2BZunS6wVXvD1qdMNhpV16p8m52WCL8nHfc2G3ceVmdJgw9cWzbCTRTv%2F3s4i4MOgRr%2Bq9lSMdlITEQqvGEcKoWzQ5fVkT9aRw5UMej4Hu%2FpUT7H5Wq4nRH6pvsUnm4eYWxQ6d7680y5Q53SpRvNFfF1E8TMxOXyT9m25wp0NqXWpqGxCSkjQXwZoIjqDvcV5SKASlotJJ2O6QxmAuMmeyjscJzlx%2BkTOsIr7TCeaHgSMIJlKnCJJHqRmgSft4eZ9tOR%2FaAJ9cApgiZhHuopV4Svm3KQW6S4hjYwntc3eIAMHKJgd%2FJy4vjXKEpxNddhIt3aeR7dK55BuYkHeVsfXCKEqTocqQb3IkifJ4m6QwsYXxjSnDuLA65E8SE6czrKnWoRxfMT7NfWpKHncp1lQ%2B3RUMPYv%2B8ZfDLW%2BYdcmQULwjp2dFh9X2RzV%2F%2FqOSLftmqywUxkRDz8vHLNp%2Fu3ftbLO6e8RhbaNWWZz8t3Jw259p5HJN1yryHnCMA4Z9V%2BF2pCpQ5%2BaPCiaxdn1RqpxLlvltSur5If74rdLk%2FbJGSa0NIpHa8Btmjmzrli3oCVB%2BxiemHchs%2BHX6GNMP%2Fp3ckGOqUBsT0h7R%2FOYSrYdvlHpeEDDTnPBspiTs%2FQVBnFJMgup2Vw9QQgzxpLyASHlLTSocaIRnSnXcKxxzO9yGLNLLChlprjC9ygt9MwJxCyw48mkA3xyk6IRkQQyOFh6Q%2BVny9XViZF3nXAnfqwkkLNSUohp1TFeXLJFG4cWBxPermz%2FAO21uagCdfwV%2B3VZlNROz45wCfWXLm3ynI%2BLpeMIcUOtDOvYZ6L&X-Amz-Signature=861cc7857d571373eb7cf6ce300e2e5ec84261e2a44183456ee439d56ea3a88a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

