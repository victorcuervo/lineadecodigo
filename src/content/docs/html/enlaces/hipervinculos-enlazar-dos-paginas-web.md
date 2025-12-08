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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC5R445X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4d9L2EyR91XtTBLNXkKGg%2BmIAQWQuMeCU%2Bl2qJBb3wAiEA6P6FnjXWrU1RSIAZff4xeTVPFDiihC75D4IXUqa%2BmiMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwdPnxhEUusOeEt2ircA5xFUZbHM%2FFbzGW%2BKvghpwosxHQFi5rjkWc0olIcBD93uc6J3%2F9dfmMQiijDMigprWOma1GLBSrMbbJjTCF2LxV39jQRjtb%2FoqVoFVp2lSSAi5kD19w2asPKf4xdT%2BrTF0o%2BCrmvtlTYxNyk1Wu6n750uvzyshbTwijRSi3k2c0f9FW2Xpou9fr98YJ2DVZA3xU67S%2FWQ6HOwhCHrbJ22rVdwmsUA3pHBx5glgW0P%2FIg9panmm%2B2emmS%2BdcUitOQhPxG9ZWorkw7XtIT8TcDxg5SWpfz%2BD2YrsYBzlnD34%2BvsZu1IPvH1Dw6ZrHt4sKNMFoxhTWzZ8dNAEKS%2FO%2FGltGHfp0rSfJJzdHtEwUcZ2Qjoi8PP2mJ3CRP%2FBIYSvTAP9Ptkrv5twMOjBwL8m7xDF1C78fMtCVn4cjyIh0VAWwej3eGuHS8XOVni%2FZBun4U%2FZWA6PDruRLVj4xBo04HXmfXUeWti0hHKGMCaXSrKcDGqbbzy4Eszi4BNkgMek2asFAe2Hp3fMvN2FMyyJARZHYKhBlaM7bbI4G9qGk32Wfet%2FRHcT06L%2FHjikLOxrKemf2yI%2BeMJidkcGzLIgKnKg7GTiOoXLyRd9lM4zn3A%2BnXQ2mK5RgNa4skR95dMKnu2MkGOqUBvSPXpD0wmSnJ%2FKDDsghTlqdE9bQX7RQG2L7pYK5AN2nQCZWGhWFN1UBKjEoxUHcbQt6c7X7xJ17UNoyMm86jh8wZDM0MXkBiC%2Brdq2jvQwm1UugaVCNAT6kQP2sYFlwfGr6T4WxjhxzRn39LNvHioaGhAe%2BhOSK2YTCb1hzim%2BoZsm3auZzy6AEAZp%2BizoXUs%2F99DNVJtbi7EPP2g%2FA5%2FBDjY0Gq&X-Amz-Signature=dc1175dee8443faad52b394b17977fd08b8b7a823172e67ac6e8d2fea5924c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

