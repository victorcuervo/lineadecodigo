---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRRY3MIH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIF2MYg26gB1U0N%2BSCoyYLvHAWTgh1PSfgf4r%2FruG2aRNAiAwSt6mEKtZ%2BQEHqklhdAwA0YRaKHcd8Tr18yWCjEAy3yr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMvNIx7B7Cryx6Ue42KtwDN8YCIzvlxrgt143AJECAMnOraO766sEsAUqz1fMiMMICvMopX04XoLIH3m4Gy0NqQTrqyJMwelXHVKCeHYmbfHve%2F4kocqIqOup2GBUhqcXPHongXqw%2BqZPwSaTOURjJVwvhhTAQzyEuxMd4W3YVEoK02PTwRqYLRTfFU0zuxTmAa6xbO105sG4umPYWRSzHRl3%2Fd9njwdQZEW%2FJgGDQSGFbLkBBvdO7mDNCfFs%2BeZ7O7eCkPLszAuMYIJx0jv3nbrES8%2B7A0q5rop3L28AcO1dbmcAsuRcXRTLnryXrmg2BBdvZV21IpzMVrYI%2FJA7rgN89wQDEukThgHTujQO08aqgfkA3i2tjP0QAt57IP6%2F%2FOxbGoZr6m20eQDUULcmetbOqrfSeikorl36du2IoCco8a%2BVb45Lwh9Faqv86jRCErRW28Q2pUDGt4Y27Xnfit4pz9p3yWnmsziaCiXeytEfDQZIr7pFB4jYy0oKdxdklZKXiSTpmnDN55oim%2F0qfvNYy3yL1TpfpTvYSRbM%2F1kC%2BWM8emEJ%2BE%2FMhN6rGBERZLgGHW1dUEONJ9QV4O0vvvv%2F3mhKSvnR6OGanIUi8PDUZTJH3P3lstqM7OMp%2FbAAsnLlyqesljtXpu1swmb3CyQY6pgG0PdslOzPX38I2EWKUOaao5lKDb70d1dR6AX33ACm0UQLzZQC1%2FY645Hb5bpc%2FkCXwy2wmqFTn2y72LdJ%2F%2BXen%2Bxk%2F2lsJQdA1FrdhLzWTcWWqoD630%2BtCnLalvupxFqfA8GwbuCBknkkMJ5yuC2Ix9yH6LO4ufVXphA%2BomhjpE9iSiad5BK4WZb%2BLMONTagYaHSi4wrxEXa5kVpp7%2FHG5QHCrJGl3&X-Amz-Signature=2a24a994b12c8bb7f5f124bbac5b38385f87c87e30faca6164e5c75325723cec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

