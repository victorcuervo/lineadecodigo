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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZVI7QU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T205307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGLsnM%2BDZBW95LDajJbj9oSTn6k7ZMM%2BVNnbbyFJoHfAiAOmx1q%2Bs5oYE40L4Vvgnd5uSr%2FNTTSO02jdGprn6072iqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8yOHoPQIfKqfDpSAKtwDGydndXsZnu6t59TYBL5uobvBx6AZb8qbPkwdjloH6NoRfPJBCTNLOxrEeYmkvbKZOsNt0C7zqbyg1Yd1sUnYIMPbauMb2s8KvsT5tEaWOEqtFkL1bxGbrBcJXOEsjAUXn6O6Vpt74zNV%2BZFYBTw6shDYpPKmVyx5MSbKeCIi6y9tY18sjSXX7HRqhs0F%2BBJyJSrtUZU0PMo%2FRXDrnFs5y1PcVCITCi%2FlTEYAR%2BI6VEGULNGfeZvtVEEydaxnLTn6aE3xR8UQQsDpQYK3ER4xIsgTVYS9GAHbZtF7hT92DBDjhxjAj8bWluud9zBatW%2FHWxovleM1UZJ4E19V%2FXxWd1cXxH7oOqA%2BfHliNvXBR8XxfLLr4n7evLQsJ50NpX8klQ9rZLQAb4r3aRC%2F31UhaM3ojZlvxVTAInFVoyknmWuDQd29nmTd3B358VF%2FdQPYM447ZlXI45zXGj2rv1Ke96BJlnn7h05EDaCr8vSqnvJo5uzRC6q1xX2mr6ZuDly3IZS8jvhvls70mVN0iSSQRCp1wjw6B6crzrqIGilUg1nkN87Jsr5I9fH0QJTMdCfQaa8Xuhpd8l39mQIafZCsqqTS0536oXR6gxBj9E%2BnAIJ3Zz1XC9VCMBw%2Bhyswiv%2FhyQY6pgEzdhklTcR8a4PYBzZENb4V9ezuN1ePzDmlzcQdP4wOUprPcetbepgpdpq%2FoPdyrcsHwl67pH8o1NpY%2Bd1jnKKe6fKdt%2Bg0spGxRvm6b1Mup9fdlFB%2FlNnPgYvGVmupEddl%2B%2BFhUMfZwrtP5x%2BNvmfcM%2FOsq51QTm7w9Gl%2FkXcBpfKU744HgV1SAir7LHbsM1ElJm%2F5NAFmexNOgwvLqSdiWLc8%2FuqJ&X-Amz-Signature=66a1d7880722f6e697d04ff612400ce9177a436503c3da5478b8cd21957b6671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

