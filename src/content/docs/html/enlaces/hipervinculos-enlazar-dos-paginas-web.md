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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674AUI4ZE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOnk0nOkzhKmm8L%2FLR1wOF6353QYEb3bZhh3DINiKVfQIgZwWGLlw7%2FgpQMmsCZSjGqWHZ5zzsbYGpaxHAbg%2BCCLgqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJyaJYWya7xCGpJICrcA6seElRT4un65ccq383LYxna2DLVIcFg3HC%2BK1REyW7NEvKl%2BpDRNAkVSivrmFPF5eLKyUDpp9bM0uB1aYs1I8u%2F0kx6vokor1EvRXse8tYT1jYhuDFgoCtkYiVYswEpQpNUkWepum2%2BFvzEIIjlk%2BtnZ%2B3htTiTxKjVKx8d2M7qv84He0UCdmnZ0nw%2BU7EuNP3A9THx55iuBLC42A39UO46GfiMPuKjkoN77ag4mKiqzkBqaZHZbeVpN9TUnv8pMd5xoTl9ZIJTZ%2FZmJxYtQZMyelii7dYr%2F5C1Y9JnfTWH2C7Y8Da9IxbsY%2FcPOa8irYd4estT6EcDjtUi3WsNwWJlVe8Au8Ga7aOKKF%2BryaR%2BJXjN%2BgXXlhY7JXT6BGb7YM1F%2FDUTcQAYYtYTsID9GAcoSwJTG5nwHyB%2FxluSvu6rB31YNluOjot%2FDOzOqkTe4y2YLLDFLYE3Lq%2F684kLh65LA9YHFtVdT3u11NF0yqDBQKCDDU7PFfh4UpJmWCznFBML0BJOf8oKq31c9X2H3l2aacopUAmHFJZbgQjUMZev9dB80CZAIOexwt3fdAE1wy3FRg58H9uRaFLJUuXckPllYIHMoTzxWPwdYcEHiTAaeskPQIE%2F0dSDznO4MO671skGOqUBXOReRgklhHuTpzPilPndGhKKd9GWuPatX8S7v6ru4NyyiSF376rEmOKyYHkB4bGASzxbXl4Ukzr25IxrqP%2B0pn7vk7mKC8LMGbPMlKUTi0jbfKGda15%2BPnAaRrmKJWr7cnMBxA08u8CF%2FoE3ID%2BycgVUA8Gf%2FPFhDyqw7aj1qrt4wPnQCod%2Byxq0KwN5GzmjIarDU6x3hs5sdK%2FlRrOfa0%2B%2BHPhl&X-Amz-Signature=67599c61d4ecf9406f4181b43fd403e0e077244e55c0f0144876362162a637ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

