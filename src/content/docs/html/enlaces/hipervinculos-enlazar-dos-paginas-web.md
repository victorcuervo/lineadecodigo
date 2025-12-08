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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656U7Y5YN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECJ0zXS9p8AKt9fhDnK839pZL0KNI6atUGrlCCtUZrYAiEAirzA%2Fb2X%2Fw3K8naEPcmXvnKL6PRBUrdB0V6q%2BlzxKakqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKhqNxkSm4kkMxoRSrcA2noda9e2FBzQjGh5arHJdllb9k40QlbxpIKshd8TGqL7wOIUeDgLzTM1ZSDpYI%2FWHkIqYonhfDtjJLzssDdSPtV7q83v9axdzHx%2BTk9nSmWSlgH%2BMyQX9NlVEFlwbjR4F2fQDdgbwh%2BqyMdDLAJ3aOqc79BZs1yX1sSGd8C2m83Hn9%2BNkgguL8lXGoJoW2cmiCDEtZsLqPBP0Wv1%2FLsRcuC2HAhjfn1egfBawUczzZw5nZrziwwKQF%2BHz1m9MZ79QhQzK9NjUHI695e3VRAZEfmmJjuVLigyvfuUCJUyLf9XwNhxJUCAmFrgpPrecvPEkEAODft0AaDs5dtkHYDHTgXHyyfMMuKNb9yC7V9%2FD4SikliugvzoEyb%2BMu2Qbei%2FQQ2KkwrNfUXh2RXuSUJe9yaHrp9YKe9csszvVaSErwEqFVp%2B48fK33RHEGe1xD8V6OxDYIXP1NmcAORAXuESyzK2DjjnPbRQ3NJS4W3CPH%2BxmtAhhz2oK215RAhbffAJbvkvHw443BbYRhW1J5rV0jyIoc54LGdv5pw0ba%2B00iJKurlpR9GC%2FXX2Kf3642YGuS4546y6QEjpATrISyB00Kyz%2Fx4KdtvG3lIXriLUPiYVqYDN90MzucY3jCUMOrQ2MkGOqUBKgUG3Tu3n%2BNOpHFvk3RpbjGskAlPbF3li0KKrnxBvFaR9CwRxm4psd%2FeDrk%2Bruzn%2F775g0m09k%2Fu%2Fj216N0uSCaTmW7phZo0shCxHeEm4nz2gw5Fm6MJ1MonqDr%2Bsxvxz8Y%2F5bgpWxFXSlYBN%2BNQLqbl7%2FU%2Flz76qQdH1kHXqrjvJrk%2FXsHPleGGvW4TNj5u8fR7RFc%2BH%2BXGaRcMHUqFlB14q1vv&X-Amz-Signature=611b200a0ae8cfcd26e32f0e57a1b87a5b308540a1406de07628478909db52e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

