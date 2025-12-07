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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRARAZC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqiHJa0zmlYGkn8MItnCGQ5koM2a7dNpbLUb9jrCwBbAiEArnCzEY6jsblS6E8jFRtq8J1hT2P%2BF7rdZB3kr44nqUwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAErX7KVbT3fXz9QuSrcA0K89i1K8Eo%2FDcCM8Plhlv1Fr3JNzWmn9EoGhbZb%2Fax%2FO7I%2F%2FLpFPLbCoMRGjR%2BUHzK3M0DXBRr7O1NSU6fVoj%2BULLpUMjrWfXeSavmCDh6hXtEQxHctHcHtgWDlIya1MSR0vti%2BIfqWnsngHVihiQRYc46WCtvKQv1r8OTzj0cBsmS7btRgsPbBnJYkQhNf8FLy2z7fmJrSn6Kq7kZ4tkvG%2BoB6SlZJ66lshgmmr58vgw9Tn2%2F21Ob3YjZn4mihtwz6psq3CgKAJBwTGBXEe2o6qJCpVwIab0IKIAq%2Fw5In1bWKsYqUcaiHPgJHG9idR9iZPdyezTEzGoNdlcFdX5o570lcCdxYH5%2FsqqgHWEOtJZt2jigc8QV%2Brxseb%2BCd%2F7EnSntNhDqZRfKaTKHjYrUYelEGiJkiAJ5DS8u2w6KpGJmx%2BD30S6wQjpaq4yQHGb4%2BQ4vH3BBPTuwhqRIaSZlnmSWLNYki8acX4YkqijO6HPWDosCWpgsnaeE4PKQOeIcJapmLkiXNUDXFDxg%2FZF2pfFTgMSGR%2FjAD6ykcVGrpZTU%2FDcb4lja%2BkPMxc9Wk1mPnyanieDJceiTGEZoPTKr0I9NdWbUZ3robm6P%2FvYMXPcZLRobVfgbbJasNMNT90skGOqUBanIcW0XOarwWUexK%2FkPq53Mwrv%2FxWGeIeWQMrF3ggp7Rnf22kV4sWEpaAjXNkRq3jYG0n%2BTOE%2BrRzb3La8yspn%2FHKo8AFr8tIaGMLeHLrvqej8FfeeGCSbz37G2%2FIfxa8UbQW7w1eIvIrJYhOPb0P6IFS9w6F5HDlGHyzmtMtdkPvOpceMcqwb0OnmGLP%2F96VuArXy9vE4slpkbae%2F3AxPKj2puw&X-Amz-Signature=29475f28a5100a95636f3e70c243ae5e77fdd1c90eb989af90426b72e1d96943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

