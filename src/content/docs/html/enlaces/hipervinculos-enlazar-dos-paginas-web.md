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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEM52O7B%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICarqbVlK65i3Cz%2BubqLCm0RYwwagacucP7BS6IFeMo%2FAiAYlbqpnhbES2kMu4SuHaaSHpnH8BKbcg%2FSurM2%2FLTYtiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq%2F6v73voUjwJ4R36KtwDr1W%2BUeefnWCHwJ5YFTe6CIFQM%2FRFnrRB%2BNDIZCDwwogA1w7DyOmX4UKKbKSAfhJ9NU88i5783Svmzv%2BbMg4W%2BYWCz2MA7YIdO7ZgSHxqKfz7spm1fgxcU9y1yiybmR8UnRL27foEujxohC%2FEzUbBdWQIC%2Bk0mI%2FaSLObRM4yIu3jErasVR1%2BHJk6Ar013z8b%2B%2BDsCfmuY1mxFJtJCi7r9%2Fv5yceDltmz%2Fm8dYGbX1CnD8WLjSg10XxlfVyYEpIchzK8oVpYCo38KJq%2F5%2Frr%2B6b5E%2F%2FZuB5SX5IVALqp2D5AJErxmTtojubhG4RuDoTrbj9v%2BePnhYfQMTWeLqVyWqqh8Sn49rECoetkNGeFFVDqjRojVYRtkWrFr5Zi76GJe1vmIZ%2FmKyP1nVseqsrSRhdRKGR1kdlBoDCBWM9D2XTZqhanabY8k1tspg8VfiyBKT1GUzvj%2FU51PFBy4XiVnr063%2F9iTt8tbwqrXUMnhztiQI7Oadh7K7PfJ9s9ljRXoBWdbpx2JexEdlAQMZqzBgaYHgP60Iindc%2FBRxMcrgSYFdHwgkKtaZ6K8ocCOyNI4QBrR0z%2FY%2BSQqa7JrzP558ZONCJ6%2FqD4Yh6l1Rk23fFuA6y%2BMwe%2BbbxAKcWsw5qHYyQY6pgFT%2FHEvgWPt1mTlF%2FE8yQbKY5QPyNIDGeR2wGJSrUe0IuGQ5mmtWgVTh0UI%2FRMzby9BP4oh2xllaf3zvd86ibE%2BEkiPQ%2FYvRpf%2B9UyMxDd5G%2FoAHetdAd0knqsybCrFATmNAp7SAfdxnS2371YLOMsGlzlKp18r85H3l5N1GsV0EemSb50Pxo4utXKIhE1dULjtAH5VA%2BnCgc2YykgOBtPcaVNfNSr5&X-Amz-Signature=45fb11efe445a717d685dee112adc0d6eaaeeba59d9e52c8b79d80edfed69081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

