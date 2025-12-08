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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VICW5B3A%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC234jtRErbGo5bf4DXOcu8nFa8vMkYY%2BRJKAocCHukWwIhAOb0p1Kg5uHq6Xs%2FxPDgnnweKwuvUPvj8stj4bHRGqeqKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW99RzCXvu9euzKDwq3AOUREd2OKxIXtaqrAitDHitGDp%2FXUAOl%2BtbfnYHWSKfMakOJ%2Bkk4ImcCIxViUTAwAGm8b%2FpvxVwhjolqggm43ElFV6D2bgj%2BJztbF4oXE7LOJoc52bYDkjEA1rysBOKVjFpicwONHpHWEvcjS6tbM1sq1ql2bMt2OyORVTxf%2FO4HYAhSpOxKPucRB25%2Beiu2%2F9DsGE2r33clg6GZO4%2FBQX%2FVeRRH0cUtRCzWdVeLVFgqsIYU54YJjzN%2FUg2fMjolU%2BCYHfGC2lilgWktkjxTkEgaEl57hLrVrjHTxXdZRqAFpnFWwbEiTArqF8Rs51bthhwbuZaG2hEHHkKJmz6wukxe74knOYSzqbTI%2FRpjGj3MJ1Em5vywAR55hzQNGOdl0Lz1xDB3znGPhAk4AH8dut5C0hldltfJug8g1MuxKqTmfHf1H7ESFRgx3eKwvxrEK198b%2F6xycTpL3zFCyQeIudL1%2FobRRLtTCr5JUPnOIwmxPZz5bPzZdJc1E3G1N6Vyb9Tazy3YqwttJPzCLogprdY3kwfeF4pNrPd%2FWm31rCkW3xfcnL2x%2F8Fmf2nghHqbMjPA5xxQmeRQphUhJvVXmUcMWBTCmRanQaXZBMYO4qBGH87lfc5zNjeiDRhjDFgN3JBjqkAT1uw5RF1iLU2QQrF6%2BE0mStltG93DFPeAjWRIQUDydWEOrP%2BXL%2Fpk85iZ2Dq%2FfX8Ua0tJnewkqI1mxh%2F8oxoetLmIRsIvhKwv%2BmIfczDviGP2igt4WyHH8Imb%2FsYm8WgWdinkDtsKrAIqaK3H341QOCXyBMJDTn9QdOM4fxslfp3f%2B%2FKhbS8ZlBhpr8f2SOj%2FSuQ4TKlUnRNyWQ0Nc60X3GvsNn&X-Amz-Signature=413bfa015836b303e401c55440f22de93d7d2b7c7b6f0953c689faae0504b8dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

