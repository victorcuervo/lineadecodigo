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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C7ZRNUW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJIeTEpmPhQJcT1OBPXaRMPOwuMMpFdrm3PLUFDlIRFAIhAKeKb%2BvdHg82INGAXXhjQVmRcGPZBNUDYggFINgnsl1NKv8DCHUQABoMNjM3NDIzMTgzODA1Igyu1ZrUEIrERNM6GhIq3AODKRJBWve2%2F%2B0dKucPc5AwKquZc7hxq6JMFmoBIV1LHUTJgvDIEhlgL0UZ%2B34bgQ0zhPaJLHdkr2mM9MsodKmr3h%2BDPoB%2BBwMGjwPRc6ioQb0Tu7Vw6Gy85QAmisH9b9dhDo0KwS1oruvoHSuMaA3LZVo%2BH0%2FEncrn67KcBjA%2F7iYLOEhYBvbbyYsU5ZnUqsN3cXS1fi5EQwntlIz4zRoFKnT41%2ByIzPQZig%2BNe7fQ%2Bsf8kKvTolegA0OkKSPvCqwUaq2tV9Td3Sa58Iax%2FbS8Q8f%2FCmxVxbWKL9K1dO5uAZYJOu7oG7xkN5YBBx5J%2BMscd5q33aIJFmVucSB6u0y4pvIOn7namItgCG9v5c4Eqrq0%2BB40EiryueGNVv1GkMM0RCyqVlfgGJDNz2uH97zjmc0fd88Sv6GdFMuzAXe2cY%2B0OEt4joZTny0FAmWLOW%2Fqj8SiLRaoS1IqkekLMO16XWm4gXI5AAzTbnszxkqbbW2zDkfPWYy7RAuvEbSvg28AeM0eoFAAWPE%2BwDvylS60wjlTjaTq6SYbHeHmgHMaDC7nJC73YjVUSCH0mAVBihAS6VSukOPgIyv3E4cewRXaD7k14Z66K86VUmg2UBaE0isN2PhIWIh2s0ox2TDiptDJBjqkASIg5zfQJIZc3i5bf3SET1pb%2BFA9Wz%2F3VGPDtpTaJw31%2BdJXU24bMV4E6l6HHE0qIUKG%2FSIshkqmtM2qHtitBxOwf%2Bhb%2Fry7ljnyJ2eL6x8rhCCB3mkD8pKuwL8K%2BQG1us%2BR%2BAd%2Bmtu2BSawxyl0LVnCo8riU4V0ItqoGuEqyVWTYuTZNZ7QyazLlOghjA4KyH4cFzGjRMJCI1SzqZsJJHFAegVb&X-Amz-Signature=7730861e79ce74074e24875ea955b33df55020ca7de80afa96e0bba779aac355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

