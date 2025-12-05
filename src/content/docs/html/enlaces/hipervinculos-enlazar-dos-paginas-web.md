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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z2OPDTQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEB%2BxCm%2BZkC%2Brp9qAj%2Btzsjy9WHg11YrNOJWVAEo6wbVAiEAjUpTXVK6FhIheyJG68Lvkq%2Bs0orcbpERnFXk%2FcCpbiAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEYGQhSkAQROiQT9JCrcA1V3J%2BhMHvPNJ3Wwx15Ui%2Bhzl3tAopizMs%2FuOm61lBWeUVgkJZa1cBOS7abC5mFMPY%2BTT8fnYw0O2KVsKm8EMNaR6FjZrB0hAuIIzbgEfA%2BFgq4I8h3CA3RZerENI2iHtqSL%2F1oD1iSK7QuQluaFGoD0K%2BMupGR6i824vf7wmzT1BTtim0gj7xrn6N3xNY8MPs5EQWgsGh1sTRp3jg%2BR1J37aHF4ta8ZmrToIsFntIUciNYR%2F9Cz4eJ0UJDmK9eZmwQ4UzfYku2qeiTLG2ae47JbFMAECunbCptnRZhxHCfn0xf82eTYmYgAFYbtQMMssrxScgV2N2Di%2FP0Xs%2BpOozicMnsuzXcdZj99C6jOhA1Yhs%2B5NsK6i6%2FDrHaGVZ%2BRRi9%2F8aNxV5qz1ECbJsVTrzU1wE98Oxg068v8AnBE2xsSt7pUOAKb5jStSloSFafyYPul30kYp1d6OYC8NfL8J5Q45UOW7DPgSf1%2FlScmC3Wbb4SeZSHWq92uyHN8xAviyPbi2Y4uige%2B8JivTTsBMVStZaj1K4sqO1DSMWDz9OqImU5SEmhGHVWt%2FIqmpHcXiQdn%2BPGVP%2BgiCKnIpqq1POunqQsfHzgFlsM1k%2Fn84L3O1E6KXy4ozJC8TjErMNjKyskGOqUBTu6a6kgaKf8JNzFCCirYj%2BniBHMnhhX52239bIwox%2F63GBg0W%2ByT2CRnpiQEC82%2Bq4Thzd4btrL33%2FfH1FG9R59Av3O1j9uq9%2BQ7VcqoZpwUDYfdNoLjDr%2FA1bUYbgNvjCfWPX%2FKTNBZOxioUMeMyDb%2BykiQQBFIe2NYNeTUQ9Jr6GzfPzg6URpVQ3K6hOz51cvJqUKWRX419e6qoYsJV7%2BEudpI&X-Amz-Signature=d70cd9a942cd7e249a12a700bb43015369111838ab97dbe2c35d5c4323417a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

