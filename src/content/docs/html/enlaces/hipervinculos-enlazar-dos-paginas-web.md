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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3SZTJP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeew%2Fpu4OJcu5xdIdeRTgKmAvFx%2Bdv5YuIQrRAmKgrvAiBbwRspfu%2BNy8AkpDKZiIhTS77tNDvZbJdVIvrvmPRuyiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT%2FPtF5i4TBTp077BKtwDXNGwGiCy8f%2FZzvzIiGK4eO74SeRu1xgVmyeDT83XfphABH4iTO7qFqPM4xKBscFpnpG7Za4DCh8d24PmwCPbq6xOOvaNh6W3TfaM0grrHtdSCZuH3u2taDYgqH5KEUKTw2K7ISm63o%2BsiQKH7ztYfCULZ3%2FdtetKyC9wUs59vkEbFfBlZPq3U9odu9aDnFEj7Tze1%2B10buMw9W9lGAznkjMWycWOv9BGIwjhclLOalJJYrzkG3XdxaxOlO7M9rtQ54kFBLKD6PwxHfGY2X2O2vUx9gZcVY70jsNUKsrL0Mf0KrXcScTwVXGA80MkfqhkeLep%2F6B9Vh1Mwy20ezWCzQm00gZm4mw2tKs%2B%2BY60wEzb84mlZeweprQ9OV%2F5g2lk06zmaZFpa4wX1TlMCo1WNr7x2zwLeBnXJp4kaTVHupXfTAPGsP2cwGwwleYwOdJmQGfsQvsmXr6WjMvOfdRv%2FQ3Lwle5AghHug6gBsX%2F73x6ddWA6VGrYkYE7ff5ahh1OCTlAkjeQp9OUqzQwqmuC74l5mL9M7CgpEBmuVPH5LhV%2B3kfbU6Cjvl29U3QO%2FeTdc%2BBNBrZ2RcEzBzaLDcnWmt1H2nfhZUVI3syq8rDvoIkyb2ZEI2hmDm5BIowi4%2FeyQY6pgFVXN9lSl1TmnyMDtbAYczXxaYRJYyHvlQW5hHtDe%2BsDfpvNOR5bY7lfS8c7PRUGR43po56HbLq5iXUam1Cvb28lIvNtAt%2Fp%2FXB76KgDBdVowGpWdZx7xXCDIhAx1UsZz%2BKRv0LT7fKFEfAP6adfNnTrfskdqChFUBDVhPOYP6yFnjPDvkE%2B5CIPc0%2FPjNbsRR1he%2BGvkrL0S957AgSpX5KaMiv8Mam&X-Amz-Signature=da40f77ae668ab5076f7c4ed4f79b74b99b67e1f98039c180d884dd7e31b0613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

