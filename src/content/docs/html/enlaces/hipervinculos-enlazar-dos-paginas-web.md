---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GKCZW6E%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T171019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFu6lXkqEzTYqP%2BDMSLO1hZH6%2FbuFZFndici61N20PUFAiEAr%2Far3yRMxMEVBWerl2EJgN5Rju1LSN8l1zCVhHLbnvgqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcWpCELcirrp3%2FoTCrcA5MsTEI48klY34G2sr0e%2BRzGlJuKKFEjspqpwjBMA7WAx1tZd0xp%2B2v5pcMajFM%2FWtHHMEMZlr8%2FjZW69ik9DX6lDFExhEAV%2BxkKY16epAOYju9NiQiUrAhYuiUWtaFB08A1ogdIEQCWqaJq1Jkem22FUPsqGSVoPgWMfjB%2Fo2lxJTRgahHtQK3iKWUeG5IQBJM3dPksrpKp2z09f7dvd%2BAZZsfvgRbzQTBRED7%2BPMRQWGbUAS3BKiNqKHa9DAGQvAetWQPGyod9pBsdfOuf1gpfnFZy%2FvyQITuq%2BUEu5m%2BIoOOLhXXWUPLgcgA2IcjT5Bd2tZ1jG3h45ruQkoNhpdJdsdGv%2BPXL%2FamkFdqEARLxjeAOQiqLbGfiffEQQM515JtDbTlLdgS5GeCGMZKUYSPk1bIFD0277S7CViu060R0h9q19j2VHjL7QVklAONC6sGLXhOFNxLSBTBWQjaQDHowfdhn%2Bz1EN9ItpEkpCp71Kgfmb5uoygwo80frLbGVt7F0IRsVM2OwByY%2FxqJp8vUQ8kLRH%2BeHaMYcg95UBGJOYvMBibA1PSdHA%2F0b5jDtlSYatgKNzhqBe7EOFJDq5qWrOwnZlvyMpuoqhTjG7TQeesdVJuEKLiKSOuhBMJ%2BY4ckGOqUBfiCD19PzKGAOOArLPnTzM55Z0uCGczTh7pi8rvNc6XQnwc09h8y3lRkLllR70ujHHB2pPMVkdudq8O8YSKYLnQq4EGYjh17u4VIMx9cuaY%2Bpkow4E%2BunwA8H3nsuM3FobHtJNI3eYKEPb5OiwCKlUjVutrMrJB%2BuS6Kol3Vm8vqQzavIKMMgb3WlWTyFT4Q1KBQVUHEPV0EyVYw2RWASAIkPZY5C&X-Amz-Signature=98ea033fc88e0502d2b69093e9e67112017de559cbb1eafa50ec452d1bb3cb75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

