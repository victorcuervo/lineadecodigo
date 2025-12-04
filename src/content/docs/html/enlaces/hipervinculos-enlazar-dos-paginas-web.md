---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKLV3LPR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIFQ06kemLud8Hly58MWQ6ZSMlY1WMHZc%2BOL60HQnFR75AiAUUEwWcEDv3dmst2TYQcjN3Fgnj9zVygWH95uhWPpxDCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMzsAYnKOQwNmKcSwHKtwDzkgxszoY86EJ7r7owDC4yQlWEwfLX21BmpOTay9wYcyAOxnqzgXNy2FKSshLt0S2ek9tmMRwULb0IRohxMkZzEI8ZwU1j%2FTRmjcvYrBK%2FZ%2Bc3sxUG%2FKldyMVdeq03FcI8Lp35OnUWDwzm8AR8ZTLo6ux2fBgyKBwcohWurNQOCDPAgmgcXS1GA7AlOJCELarYyxvUcwg0zHU4G59P2Ycv3DLsI40HcepSLnX%2BCCV2HARNxR772OIQUWs6SmbasO5I4wIwcC1kBPtRJa51HFIlecdWkfiEwhI9OhJZx%2B2ft6zQbq3KmXVOLhrblnADSnFkQZG0HQy%2BAlXxgK1aCLGm8p%2FMz%2F%2BSd4L0x%2FkWH6ePbyor6eOHSOXOB%2FCtwZLKWLWMNMNxdjYlM2%2FQYQi%2FPolfXJDae7rqqDBbg%2BLX3t9eBkBh9SRRE5kMayHQQgdvYUoihUONxs0bJMgeV%2FJUZNKS1Hsm%2BoU4vKV6tkovHJ8PHvoVPvC9Ekl8FKeEnLdRbHjYWvdCa%2F8w5e1Msynw3Hb9zAvHbzoQOdFS3aFDOuFT%2FvNFgHbdx24k6U3RP1tTj5fS4arrFUKRNLUMH%2BRZa5VdGZlnVlH1Rbi1ON54k9KU%2BDWvqpjU24YiqU%2BCy8w%2BYPGyQY6pgF%2BaJltduwpiTYSBG87dM%2F%2Bq8IDUkAtCjz60I5VX503xSThEGflLY%2Fg5o6ncaPwd26oMIC05mNuX%2BRVGnpfsFq80O7dlxp4Ke7X4imrNaWzdOw1sFcEA6JZJSKi%2F%2B5xjXqMIprrbzsw%2BYnciBITt6KApTbiiqQjhF8RW5%2Fb7k6%2FpbLAYUHP%2BgmcJruPe55SyjpreEFFHYFKKv%2Bt0mS%2Bk1BmfvQkiPRh&X-Amz-Signature=0dffef11d1a91adc3c87f0ffe2c45a56cae989cc5e91afa55fab29ef3787464b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

