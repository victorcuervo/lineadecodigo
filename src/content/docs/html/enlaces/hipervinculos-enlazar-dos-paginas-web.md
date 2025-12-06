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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFGJV76C%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcoujJ%2FHpMCzm55QXXbsL8z54ZkEu0ccIonoxkX6p5sAiAFiTkjWsvugf3JuxIw%2BJYIvjUdwTwU766Wkijxp0rEqSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMzXmCBXA50ASqQzyJKtwDvVgnP3DZksZNgJi%2Fl%2FZf%2BM2PASt12mZtUMjwTgioLsLsAZIE5sE%2FFFHkavdqxKnS%2FBGPxkg%2B7k9rUiqV8XCc8l6%2FOEDOxouB94pwx0j0MVhLuUf%2BDbHuZIrM9bXwj7N6i9W2sg9UXpdD6g4fQHocQgcUtiQiyzYmYDejFaLLvBCetdoTO3E%2Fk3ON0AI68gVzMBgTpyyLhHyjR3nMIYMasmUr6cwi0bUog%2FgkWJnTfipYUQwo0s1i2cSvYpUh3fTviDOjB5cCqRRFP3OiAkxqBFXo%2FAjs7zr0sLHED5G8uyeQJvCrKJjsCqjZoZHeewVuSSFa5R0Bw2%2FMEl20yaJmsRIcZBBLDvLTgZrWEMF9qLU%2FPteCMwmrSPfKf6aFw%2BMzPwGMD3cTiMVEv47Z3sMOcdmcXOoCstti33Caev6qAqO9dH5LlH0WdzFPEaGz2P0LybE7PvzEQ%2BxTFUpq7Iwyq0vB3yBKZiyESsEbtPkoQ4qpqz9T4BhK6LLr0DD2o8bmW78xS37dctBdINAg8MCW53McWTTjDFJsDv%2FxvfG57GFitpVjo8xd0NsXxT16%2BNq2L82qSdwnaf9BoIxCFAPW6juCmFsNWwSLzOPFt9IA0Uea9oktICpElb3rrd8wuabQyQY6pgHAxEXoM%2FI3n0bnEVpXRpqUqe8L5dxWiZOQPM%2FBcnVAP4f%2BjmWMl%2Bv5Poyc7%2Fp2fStl3B1LbxYIqISKBdePGKlVnalQYRMalEuAR0T9r9%2BVIHebGBP22B%2Bj94oCpyR5%2FiYaBqjZhiFNboo1miCRuYGXceDS6L9fY%2B9iBPMrL7wLN3fZW3N4e8Cb4y35jYBwucSbaK5dUXGEP5WQCSDXYAl2RNUxFVgn&X-Amz-Signature=a1c20a068797d6fca59865941788bccc15dcb0c67079b599d06d2cd88e208c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

