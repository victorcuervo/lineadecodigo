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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZVBK6CE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T112527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJMXRoA7gxk66gAqWVRXRVZbPxGAsyuTbHglebiT2cZwIhAIHfIgT9uOvPwhF7mAl5APFfE%2FSwTU2OfgqnH8ktd30yKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiXvAo%2B6B3twgonIQq3AOR%2FN4Ih4KSizNmbYDIOKsk8MbIdvhE5navc2kEkh8gMaWE9QVUjvfR4xZZEUah88yheacXKS5wH%2BNNMnv3JLWg%2FExaocWzVtDzMKlKfNMIK6dOVX8V1JyRpKQipkoyRdQsXpCY8fsqSVSeTDfgLRggbTFcBsj6GLjQD9eXYv7b90uqQhMT10eaGAkIFkog252csPO0CUnG38Av5VWGcCO%2BHVSZa%2BJFoIpARioHY60NXCigYQnuhRltVvZzNzu36fQWc54ud7%2BBPFNunWH4PklvKbq8BrtkZMQj4k%2B6S9fYtIvjo4ryUEI98CZsD%2BS0vaXP83OtmpO0LxqCeOQThOKnGcmIAWtrsBFESW9O1EdBjO4eynSEi1sUdPKi0%2F7%2BDbeL67KFlmoVcio25kUYesOjSE91%2Bp6%2FKJoqD65kQoP7pN%2FtCAhV%2Fa5zu%2FlefaVPafDjHCend08LEzbJRni5dZ3TZh1mLgRWlUOXx8yhTRrbMG5KjuJIld9jE7QJteUKnje7jHV4PFvaqzMXgAyh%2FHqUipxvMwkstNfJZxyDcXuY09DI1d1brUn%2FY1x31FILAgwBkN0r1wTLpvNb3TOZZ2sLj588VKTWElN0ymiM18ccGn634DT8cBDHXXa6ADDQ7dnJBjqkAVk73Hcxyrc8QeLPc76oH3XGTF%2BbsgDOSxHHBauhMnF4EsIyJ76gPJa18I5AZkJaqEeTmH2LbJ%2F%2Ba3JE1Y1mPAqustYuhSrzo4Tdj8R5m0bSuFpbYrE0u3tLxk2a0qLtV5dN7KY9HahxFt%2Fyqq5XsKDNY8YunV1Qn0mapah6Essm8%2BsnYsGXJ88wOa7B0I%2BdFR2ZOaPee%2Bd9MNt7xTOjjpYzdDld&X-Amz-Signature=a6392ad9e1912f01c3481c2fe965472d38d5338445228704caba86f7e08bf627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

