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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3CRO5K7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClyXhzvNFHuF5CNcuUv6uqPokWc0gMJkN%2FVxaiPPIVtQIgKnuw7367Y1xE3TLMLguki5Lp3kIH6jn5irvBdeZSwAgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDC0xDbrn58NSahptoircA%2BtxFkLUAqEu3uafslrTnFdmtzWwq3iA43sQTIwukFAntt3Ygn%2FtIdL3BnruGR1Di0MlozhFxW%2FSUzCQVe9R%2F4FS9k9FhA1CZfB4qEbdxa456QNic8x1duSpYqSfHa5P9k9AyA%2BOlwj03SrGXrZyjtexHjLw%2F7%2B7zXSm8OEdEjKhKsZ306CrsH1DHuhaJLKek8sXk7RMFmR3%2BvrmSumQScnB0hCPJnfpHEMqrGJPvV7yqcJQmyemIq12Tm4Zbn5MaF4BTQPnKWooRotoGelu3lo0bvawVA38won9nSpz4q3jALnVkKhLH6iTxS12sKye89zKoDa5qiOFjhoFax3tOEyb%2B0lczxc3EcuEMtSkWawO4tEaZvN2x8OTWAQg47wIrFed1fDZg58h87eIzbtV4vhWPGetOCk271%2FXkziKPw3LK7E1ga7KisVz6SyNxG47O6aD2B7XrngDc1x%2BEPBl1Oc7YQRxKmfjIHyeZa7ZHkjZl5aKxasnem5Q4ezIpOUT3WpJcJfzPAhWToNlgUsET8DtTqckoM9tPhyUdr639F56F5jhtWq9duQJZ4tlhE513hl8FeG586OXsYGbQZL1HRjiZumw1bZbzWo0trcXu27TRa5DNgTNUhLpCUQWMMWm0MkGOqUBaXH2IB3VG1kiy%2Bt6EShZLWRTJ8TXzkrOmB6R5xNU7bKoOxwyxvrAzXmd6KElhebphGsQqQ%2BItNyDprd7z%2FZtYw3YbWgo69xA6gq%2FitlEXRMr1cgaLAQIyxQ6zK7NPqWCe524nXmnE9JUPvNHtoMEhXRtUMlz3SV5jOmRq8CdivsDCZCDKLeHgpPDkWj92HUw2c%2F6KfKp0tL8BPis%2FAv340QducYd&X-Amz-Signature=ff6490bbf6fae7ea43487c6666a20b64c3cf0d7a2c3fe8173d0be56ce0226e91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

