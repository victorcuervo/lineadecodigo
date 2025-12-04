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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VAC6GRE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDiPy2DLDhnpG3NZO4XQ6uz%2BwlpkBpPqcQ5DgqJvIZYOgIhAKl7b4hEDYICOK%2FuQaHl51IRKZEn%2FSO79r40KOevor2LKv8DCEcQABoMNjM3NDIzMTgzODA1Igw36K8Tuvo1suYc%2BQoq3AMmO4v%2FsvXojbOf2enja8OnilpHwYEqwG4Mz8mnBZPCEovdTRhD%2B864%2Flenhv%2F9WCx9jUXT0h%2F2pGBY%2FRx9oH%2FRlzvUHT08YOVB14Tx1Xs5e4cUEwNFOtA525f7ZdWWhJ4P2mNxQy%2B2DvNVY9DO4E2Ji6KJQIjkV6kzTWafE5sjn8YYtjUgmIQ27MxphPE2RJVqznJUpfxDKOekCSK6LtqrSRZdcbaJU9ygy7LfHei6pZ3JXQroLxuJmbGS4QplF20TORHwHq9j%2FNnvZkxVqsjLboYXz1OHCPFgXUC1sk%2B4vS6smfmpSxublMx989PBYnMkeLaeuL%2BrQ%2FS8ItcD7adCA0hQOrByjfl5SjBtpH%2Fv1x9eLXczf0lGICtdF0OrKBne2aKoBYPe7Afn8cweU%2F15oDDt6J4sro6MbqqNHlHBNNMoVvAmovtxShEL0xQMQQ4RCc57Y0DVHxfv83ZnBMiEf9A3rdVHbzdrj%2FUs6PCJkzm59kLuQLFn7KJqUBrJ%2F6lE7giiFUtgkii8xjL0%2BGnSTNEvNX%2Fm%2FvwU6y24tiFekHx6fvdy12svLLpDkpUFBa5o%2F841KeXNHnjjaQJc6%2Fc0eugjPUMJynG9wx6ct8JHk1%2BqBgwN6%2Ber3kWKnTCSocbJBjqkAfTa0jNiv0SHo54WgV4boxVsD1h0bMFtNMkyswHklJETbhbJkGfB1JQBKxzPG5MPFw4Wq3khYuKmPTKkeT%2FXsedJVwPAD3gssg6Fl965OeWNCbKmozmpRRl98Xe5mdtsnY5KwiAJNFLcuL9PFE6yNlPRjosNndnahJT3JTcG1Dp21Dbg%2BrpWYUqqUy1UHhuRyHUtupQPaMO7LI5CIlT169%2FbIMKg&X-Amz-Signature=f7f6a433df18d61a590a799b1bc93f991d4cd211463e85df603df69d7e0320d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

