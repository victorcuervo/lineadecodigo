---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UWJQFSX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDTUN74JPr7rO2QP58jNWKMA%2FdpdQQEhnFqRrWVzsp5rQIgGemnBeEsyTUSPmaRJUZ5qqQy0yc5IBlfvlUBTVTLWWwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLy0%2BW6djU%2BEHQr8LSrcAzF2Db%2BCGyA4DmtXc1dfYJdLzh82sKHBE6AaO0ruFUKcidwZ4V5rhaRcrpIAy8lmKZSYpsitjCLQ5BVAo8ow2SCW67cM2VBtbt1Jw14J%2FvbDoWSPY1Pvb6g3w1diji3yHM5YYbfC%2Fxr4XSYfX9xsN7mqvtlkvwNBOnKQOJXuPZ64ccNx73WAThkgMUescdAIIeHBGV2aiOzSeoHrkfSiDpEfmbjzNa6RbS9DOEF5X60dLK%2FgTwWku97TLeuKFw%2FHvCEqYXLWcVzUjjEcVRfEpE4sa0CJjg4jZPLtfwlLktYWQ9OSgkvepDM6%2BqKIDWNa8s%2BBfcgk42tab3vbOOAu%2Fw63i5%2BM0CwAItpzInJsYYghgCOeIjzOgICYWA3pyErM6V4msThMTy7DmmKNXsl%2BUrUxrZAorPnX3IJeC0KidxrJfnN%2BrfA0ZX9o4e5Ro4f8PIhOmIAnD76E4hyGGjjQqUk0X%2FVsprxSf3fWXG42dNbpxGCf7WIQFLbl4JxMAHImN%2BhMIDfw1ifstffipjWUXSL146%2Fc5xz4Si5INPLz5vohKIBYqqZNvLy4%2BMpvU%2BbRfyYCl51%2FM%2FVwzag7Nh2gE5TS0FU3OliHlj4nxanjGZ0fhV%2FLrfmmRJjVQ2hLMKzdwskGOqUBZcJXT4H6xzPuCzXEXuq3rzcib2x0oh8DDt45f5dv1r7wQ3BZhl5f3M0FKQzIOjTroEoPA%2F57HrluM2sHurbOv8cLC3rjidQ3JCqoXMvjk0%2F5NKF8E%2F1LMqs8swYlIv4KJdIr9ltFkss2mLWVuZGXcCBHnRtmiONQ8%2FxEinZ2oTrDtIYv%2BLp752nQ896BhB7gzVWXSqfCa1A0EbFVjE0Wxr%2BFEGLy&X-Amz-Signature=07bc2cd80e37de0bcf8d2e4edd5dccf52c1977a07bcfb1f3ef70fd7231c4e0df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

