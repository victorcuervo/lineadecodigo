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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDVN3GHD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFN9eCoeesNH7kn%2BsjvV4Trx29uIrNNuHl19WyVY0yKgIgdD%2FzorNX6LQwS8XQAmQvu9awAE2dEKKR97sDPn0J%2FvIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEopEaP2oMNEAGG8RircA2%2B0yZ5Oy8hksA6Q1ESHPUImMYTSGBhal7oXI3PiILjWZ8Dsr7wD73bF8ln3hjKujYGjZakoN8GPE%2BLe5cw75i9Du6c%2F3sPMoaEW0HA69h66N2OrO6WZ3peGL1fz0B67qR6X5vAG4e43U%2Be3LDG6vOtAWLqVfbx3SUCTnaWnO4uIqbXMgJywHFtTSM%2BShxv1PEaNwk0pDMyeNMZ9WSOF15CRZeZPRLImzCSaqEoVnU1W1pLk9IDCcM5su7As8oMdad%2FVtsZwFDw4effKSgDJY%2B8I0ePV7i5TsNJc0%2BS2n4idyt1C0ia56Gtp9pqjjbEjMXnOuacV3ytrN8NKbBx3qBOwKSAAhGA8uxAUqywOMsqMK2rNHOWd0y%2FFbmhFIvUz%2BS2VmIhnrz2CmCPMTf%2B41NkqSr%2F0Lko7j%2FnvrjB36xz6s70Gf068vEM1CwAWym92LaaNMnWgPeQmNmlgMlugur5U4SRFJgXAYt5EsUqBX9C1tpYVXSIdtnDErvLC7WS1BtPcLUP%2F5m5BFAkVPojAEWRknnO%2BOHyFWq3q3UxiI2qoMLFe0VaEAyP3698LzFhnwtfNm1a5%2FUpkPDf36RSdr9pEQAXC8bQVPsa6%2FxiW%2FvKr4GmZteIqfW4DtQhXMLez3MkGOqUBMlLA7BXkci6yxUWWiy6qzMQZq33cg1qpEflGgLnwFRCzKViD0fCUlgCZY9JcQOu4oZM3DTymzd9DgL6Cm%2FYktcwXH3SAJuR5yO8q7j%2F1vvztCw9AhOdvhp3waz8CM%2FLdcQQIQ6DPicNPd5Q8ZwAY3YYKDefpNIGD160qNHFpyHIgGa0AuJ6qQTwlZ78%2BykqVjh3izRQU11iZtg2bRisYRIg6Eq%2FE&X-Amz-Signature=7edffb00af7ceb53570413da077d3f6461d309b5bcdfb79d5f8c1a5c790edb2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

