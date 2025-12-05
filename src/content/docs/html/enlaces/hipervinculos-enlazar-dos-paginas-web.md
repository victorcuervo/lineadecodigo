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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IWR42DU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWgHMQgCIX9s7CSizA3MufyCVxVB7Yz8RJlqJ6%2FeP%2BvAiALW0lGkvW9L8P9YDztKuMzmc4phKz9afU1TkgzRdK4CCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMPIUBJ9tldqJ0RqoJKtwDxzPZrNe5qQGbubBJ9kwJshxhXnlIQzqxzMs7GPUNbn7XxzGGxET1S22C19tUrpKemT5khP3WNs%2F3Di%2FYsD8BofiCSUem8LM7%2BQOyxA1j0cRlR8Hl54qn8j%2B6u9W8N%2BmD3f11Ye%2BpmCkUXzFn4s6xFiYkHbkepU39AGTql%2BO5wkBLucVUbq%2FCf7%2FwG7pwiUW%2B7tInzK68LIEmu0bUE%2Fi0c2LPl8sqqPhCevWOMqWAQzRA6k8aTbgRw7KwYPJ2L5JouQr1Ljeuc%2BsUut6Gj762fxR1JyVnTFvUB%2B0Ng3UZbfxQqCrvKdRFduTwqMeRz2XArR3NJPn%2F79NXTGbEfXi7N9sJwhTFwoNO77gMV7ONwuRsj7EeeiN4XbMlzEmwkID17YdUxQQSe6laILEqBp3iI%2BwDtGRwt0CN9v5RGnivgn%2BO0pQO11WgDC%2Fd3AmgNaRZyWOgEhWBZ3gd%2FEpaXZnm659oj1X2MOPjoxiYU3l9rvSCEAnVB8sxxTJ0VJSpZy%2F28IgF1MdOOZGxohkHVVQSrYDekRFvAZSEJl0WRgFq0kdlxsfkA9Mqrs3BGd6djybs22KSOJHIjjr%2Bb4C12tBht6E9KOg7pStt4ecOR%2Bdj9J1qVCS6dfdjGECqoXIw5KnJyQY6pgGmy1n%2F8Kkfk4Mo7e5y%2B8Rm2z0et%2B%2FYuA3t0u0ndteFjc8J34Ly04ZpJVWKnvvPPA0p9HKRIrL%2FPQG5cTPa6HyG61MZsKJCRiAYU%2BqrCMm9A%2BX5XWrtXm5QAIHoJ67%2FMia909Z14ioiUzi7OzAJ2FDVCL6xtdv0VCOa6Vwd34iQgybFHij7Elb4nsdic6Wwt%2BlllWZBM7%2BDApppaIJbZygsd4gBkPXS&X-Amz-Signature=236d209094ba6a0a07f3133a11a9e1bb0e14259df31c4dcda3c51f13c2db3b98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

