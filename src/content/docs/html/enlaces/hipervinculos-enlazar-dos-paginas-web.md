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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFRFGW5O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDsq%2FFRCxLSZ9xvVMa9OckCCdLiByx%2FsRlFzuMtGFychAIgftTPRiHaFOVkx1Oq2v18PHxy51acI2vO3OfMfYOHOGIq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOKSQWuXOHeKUWAHMCrcA0oXJpksKqQq6SaJ8LS8RpmF95iQIKIjQJsgKHVZ2hFXzHr6aZ9qpmVzX5JPYM12Z5Ucjmokf39sT4Lv54NnIMmqTgh57OwytclAcifjSt4pXn6Xck772Jn15Zopvz3ywNFyUQTfmstPuVUgUF0OZ1kp58MkUBHRRd48UydPkBeanUf%2Bru2sANXtUufjuxWTFbaPBIZ0VJ7uyIn1R13n4KoL6YZEvmbtRQIN6LPt%2FWg0V6KtlouJFyDyyqM6VBRD49b5OJu3Ixz9II9wGwTpJgR9xe2YdYIxLmXbNI%2BsHRjz7soMookGbW2pvZNpgmNw3J15%2F%2Fb%2BbckxUuE4piUUFJhi5iRrVs9U3MAYnuMw5QkwkDyw2X8XK90ZQph2gCnkvPc1BXKCyXNGUnpx4J%2BjloNO2sfi8sHxds8PQU9Ao6dn%2FM5f77Me%2BFa94u3HJoDuGoZrVnbKE9kcVPIvMpySobEqiRiajxbi3t3tNIawsKnyRlAkjAImGCWCvqY%2B8DwyKs8qlYi5EQBBbVEwNFCoIDdFOQNFEQBnQh6g6wo01dsO0gewnxhe9FV06jmNTikSbodUuhYbolSMO9S8vrdxuvfrnv73ldfNa%2FlKPIpZdjeN9iOfEnEiR7Klkvt0MIKhxskGOqUBwUXBbU%2BFAgrMpfNNMZrl69gVraI9grInwrxtYfuc6FSgt2FVLKwpquE%2BUQnvR%2BTwLnvrUsCsF4u0NwtqnB1KGyRmPly0AR2xl9v%2FiZVCh%2BQPlQ52jy0mfo5hEeqPLFR438ALcPhM1Oqf1cYFNabVCq1Gj0iZ6BL7sHxQZ7qzljum%2FZSkAfsTLlFAQbweXgs%2B8YVA1TYafILYlzaLitGhOkm%2BcICJ&X-Amz-Signature=16e688e7eca05d9838c9801a5435b036b4e4aa08521b94713a83b157616c547a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

