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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZKA7TKR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCAQSVdBV%2Fkix5FPe7NhE0t256vqh%2FDpCnsPHTdlqNpOAIhAOAUuyr%2FhfpiLI%2FdcKMBozbd8l%2BAp6funuoLGhd%2BUX72Kv8DCEYQABoMNjM3NDIzMTgzODA1IgzCdvx%2Bf8Rm8oHr6W4q3AOrGmZDWUSTj%2Fhp7Wg337cQ2ym7LN2pmEJGM9GYjojmC%2Bc9EGwGpih3KiyYTTd4mCGRhIs9y5O5svaKqwH6qZ1ladcazNcrfQ%2BYdsdR2KPWPyobfGJ23nsYAbuQTzliaIXMuS%2Fz93D6g6HHEWf%2BSKFQyrOrz3zXTIl8PxXb3MO2CTPHtJmpalx997QOvVOHkkNjW6r3Gi2JIHLVwQWmlF8YdLiA%2FTjo4EOLYGo%2Ffq5U2Dje10HF5Rm0qi3cy5vjUheLzBsIfHZuk2qoFUBZ8kqN%2FyuhPGAqpx0wG%2FHMNk98HxzYDCMzWhiS1gVmbz3kBouEuItwhJEfohK8B2qXNxifB0pIlvjUot0Pz4KIFtkyd4is12QmOHnVYH3tZBiIKM6SyKo91VsRjZuRCOKzIVIQRuNEk1YQZocothmZGildElJt4pCPBDAO%2F8w%2BxzRja1Kubp3byocbZlPsRiY%2FTUgqdRt41jXTCeBIEAvlu96O5W9%2BIpyrvWR3BKq2tgAzT4UZLAQQSunK%2Bip9HyqbDzzkHUlGTCBVIzr1NSvFtWQjHZuItQw2lfGzVd0YO1zDHpoWbOjR%2FJJ6Ih%2BmpLLm0x33%2B9J2wzMmkO8nGBXiqswBPQDBBsf%2BDJvyaNdLhTClhMbJBjqkAU8%2FjJfM%2Bm11M0fgo%2FL0wt309cPLVrtaRP8duFQoRJhG%2Ft3E581tc67YbmyyxmYSZLWHv9PsBZv9z7%2F40JzhhgdueCnMRVw77SlYdn%2BWTaJM%2BckbULjn5o6Dz31iPm3PamM834NQTPEqqYA7dh0YTPfS3VejXHcPvVJBr5elWUJdnlPXF24G%2B3mx5kjWGB8wV8UPSM63E1xEvfiP2yF%2BRFqOe5OS&X-Amz-Signature=1b4eb55b5ea16f8fe68b5056d50b74d589b29a0fbaea3df7ad5fd046fee32afd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

