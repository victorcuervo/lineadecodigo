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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSDWVERD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T185048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2Jh95CWac5%2BXLQgWzJgloy0DOzHYpsztp0SvcBVUVSAIhANdq9gM6Wx6sI1K6VkOsjt3zTPCEvKPrPSecRpb0L9SrKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiGooiz47h0G2bkP0q3AMpFMgYETQu4m9muEDCkmn6uQbHHX04U74iDrAKXWWHl5dOrtZTqHwuE5Bw%2FMqJ0OoM%2B7hFljBNOpB4NrwHJFWN0LBIwA979azZyP8KVXTqOFn2qFiSXRRmkmhx1sFISqUFkMVeOb6pxyGUd4P3EHP6UUpEA80xx0qLpyluTlqDvKyc4l79sOwNgOIdqXpFypRsgKqLMA94tccDRKlKogP1Hz1fU6DfhTc1E3WyfXq%2Bq4KXbFbjuER2mKu1bCjUpqlP1I3iLb70rb5KUDRudzgHaWxfgppYhswFQJQ9btL6KHXMFmFT6okX9S%2FwUGByFj1M5JTVkaUtIs3%2B3mW5%2FCGBrlkpxjBxJeE9uSpRBLeige5NFzqeBnhZrHGZBRMa2LgLKMRukfaO1dVlDBw%2F8kJggbFkI5FNRW5hTN9eGAUUQ4NFQx6hjbanF3wu4KCP8eC1JN%2F1bOWrduWBtzDJX2Mii0WGhBqBsifXgBAuI2BThWzgBuT7UbVa1saYHocwMkkEUxy%2BxMyBzWD9H5TVRd1TdbpGs8s45GxzYnyBhkeKDcLH2BZQaHYNYv3Z9nOLV09ZK6Yf4Ay0vHKZDK0diun3O%2FChFY4RwgeZ6bdEKAFZRugWKP%2FnE8%2FdgWdx7TCvveHJBjqkAQkyQO4dZgBpTgSWmPHs1zkDyW6osJJa3SLvpPbIU%2Fh1UI%2BN46nLtOuPlchztls5LQ2NBpfei8tV9NKkcTQFhSst%2F2ro0F0QvNBW%2Bsugkqj%2FLpe7euxHWmjnRMWZ66TK%2BeormsTrXcy4bhKnI3h5b4BUrZeHCnCqZlr1zgRxJUdIiN5YMllVlWsWttxsta1bk7cM%2FAb9TzrNiTob1yxrt4XpFhrx&X-Amz-Signature=68114a5305d9526b4cb02fcf90cfe348d6376ca932d78f008cea35cc8254e055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

