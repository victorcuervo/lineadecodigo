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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H43BUKO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T185841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlJWyoEjjgblIs7OTH9i9aRK6VQd%2FpCtLu8Ff7LMNKLAiAMecXAQxWVkEV4IjjBY3qfHDXwxQsJ6udARVO0JQuZDyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLN5RGEKMTfcbQi%2FwKtwDqJ0x8aAf22zNA2E35GdFlt95bjiBaNBKwI34NCBu2y8JuC87Kdm5kbO%2Bo0jHxhdVMU2trtvvd6%2BjfQdvtIBp4E5xFT9XCnEaVWJRq22OwFQ%2FEPe%2FCpjwAb%2BHeYT7De6SNDwQKbHwd1Me91CrSEwLAiduy5Wen8kCrLZCf7PKnkyA2jDEllwxypSM09k2ePBOaDqIWNR%2F8AfKh1KoBPKuekCss6kBOPBvz%2B2za%2FLw%2Ff4Gj6j0H8LtkL30JFmLNoTJlv67PSmF%2BIE7Tl0DY477OYXjzongiG8InKhKOHvuAIUM2DpwPKbxiieRXEVEpE17JIYYJCPPuc%2Fhz0K4OiOjp1SkN%2FRjfUL1n1Qfk2CAkldjzof%2FGWlt%2FJRZYA88NkEMvf8rb5zx5V3AOgr25aWtrzzEHJtlKoMeqoxHkzRjSe1AH%2FzcdPod07QgJUs5GF%2B8f5pbgRuqoXFBMZnDfN4j1LW8GoCoHic3WzPgxT9spRr4v617hNypU1DbkQvG00fnGPl7xD615nwmJJrMNnpa6A%2Bwp2PBG6eWgEsMjZllbK9YsLDP4p2R0dNV824IpmtbBUR7xfBiCjHvjoeWaLlY9cSecdrg4gGq%2Ba2EqERrgCR%2F%2FgyT7KWds4Jvos8w4N%2FhyQY6pgHqSHIxHWPSxQaUjpd2Izee0XAhXvZx%2BcYjsAFRFGkC2zDnd25tMml%2FIOzaPWt2OsjsDuFvVffxIz6rLA8blSGASsFAeFnWWJfLxc3BjzpVGJ0%2FNbeAa8l995GaiSckaZpKrqSJenAeC11Aev%2FHyIZCXmf9gIOo33tLUzC6mkFPe7Mm4S5UPMn3YEV9%2F7iGEsrqZ2fee70pQGPjTcEnBSj8OW6xO%2BdE&X-Amz-Signature=5f7b7c595db64731992fcfae19f44d5b8ec33da9b4dc4c6ff04e168fac23364c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

