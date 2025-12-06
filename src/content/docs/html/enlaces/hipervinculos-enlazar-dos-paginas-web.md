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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIZLHLMO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6ucTqoGDYmADKaHoFsCoiHL8lHeVQZN%2Bby%2BOWPu6phAiBY8P96VIcnn85gXvxmXEdbJPWfcbQ1PZpG1C%2Bhm5h98ir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMcxeqpPyR%2F8uiY40JKtwDA%2FtCPP6yDpsSoJZyFdneqiB%2B7co8oi8rcYfnibXEdLGi3A4Mp4JjcBnkKpezSRS1Tl9DKQ9ihXMve7kARYe3yFafIASbhePrm5SGMA3yTlkEPbBneeQhZU%2BnBbNbyjgQXJJnksRuUR93vUJ57gAXtDD4sA8kDzakFA3T5jnioj3ttN%2BC3hT2uk04hB3f5bKYdu2W39zhaBQ545ofAnZvowIgVzSDfTlL2CFcy6SGZ%2FXMoCFwyy4MEXB3bKlfcaDmQ8Rm8XUcnCoV%2Bf922z6uxQgztZi3f92n5S1w4r7uD%2BxQDcVVpFIRjd9edudBvodV37vJECQ2nqcXOw%2Bkb4NxT8EhAxX3GwvJ6zyVQiH2HzLj5owj%2F6lBUIwOEpNhIFx6dk4W1jR6FzfmBx4bnZ5LSKHlvPRKDD6%2FwH9MV84EIC1GqiESMWPgWKyOjMBk49%2BSObgkFl%2BcfRG0mkKocHDhPTGgrvO8WyV25MI%2FzFOxpBKEkgHTQBvz9P67Vbk3oD26zpLZpUOxTTjqcY1NUY2IYdFydes3wmiTz0ymJN%2BWa9pXET6LZWhqGMdvlpypym9e%2FZkAIaaM5MWKuukjqdFxlQDW0EZ19sxgkVpbqHFs648b0BseFI5Ewn%2BxgKswwtPSyQY6pgHSC8T29ea4jF5HLDRRmiwVGTLjS8UcVOkcHbb3hqq3%2B2k6uNBI%2FcA1%2BXSAqZCBOkmSTW%2BMU8cGxouLt8RqWYIVAFp85qJnrS1hVBddUV2e%2Fn9mswbFGJ3JrOS23mekFk8Vu4m4OKFVdapkNGWDzwkPMGR02HhZZn9I1oZDJjLgYsoMUqS4kDk4RC5MPBRVEvCvgheLQOkijy07clYROJvsD%2BYuCWn8&X-Amz-Signature=9f8ac160588faf8afdf7dfba294554d6166be21bc533b4aae382af6e1496947c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

