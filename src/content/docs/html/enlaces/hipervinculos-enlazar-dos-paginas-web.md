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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ6RF46K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaM%2BEJqiwsZcJvV8Fl3fYYcXSr1iPbVot%2FnXJKDBYQUAiEAxBEj8tdQs%2Fd%2BjxFAGto97kwp%2B4SDGqahaW8RHZ1powMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJS4eAwSIgnXmpyrzCrcA2rsrg0WCfR2fUjlv3yT6eAWE3%2FcklyKGFSzyV%2BmjuxgGfWZfH1S06RJs09w9uXAmB%2FnM%2BftFx11vQr9D0XcDOd%2FideKIfgxmwGegXOGjH29ZjekBc6%2F3DTvUn%2B9a8nvFRI1BZUANeaFmdR0SJVRIiWdVBk5U6ozobWv9rILETZJAqGTNPUua3cw7eQa2UGCFwhWNxKlge9GXJmt7ic9%2F7rYceB%2FeOpsi6aQC4Cjv0MmBROxMzaLfXa3e%2FXQ51Isyt8mATljvJnrAaS3aKePSbJTF%2F1cOsZSAuvxIY98QDURJOYNYKCMCOYyaM%2FFLuIe5wgtlFOn%2ByU4GUzdSINa4PdCVQerR%2BtqKds5UocP6Zp%2BaHZtLbkPvynBgUnwbb%2BmNY455IlvkLs3Wm8u7rr2uQA%2FUT93EBSp9M7rmNBO%2BwvsAoemrMbtQcWh354rDTnkIrINoRt2xBkgEAdQ0%2FnUXOOzWunyYWnHvqehTqV9PuVBlfoWpXwh05AuxZ66IxjdOnA069lA20ATtYdq1%2BJeuCjdW7h36yrWrSGRRiRvKfsqBM1zdqdPslz6MSPLO1cIl28ILPkcLNkIyyKbmFI06NlifSXen2cClrcGGbm4f%2FAUlMj4IEW2ghihdvd6MLOxyckGOqUBr8%2BRGIbkQKj8wF6PKLz5Qb%2FnDy9daOya3QBz5TeIZNrbBgmTI4Tc6TUUpvuRIwzyXKk7jet39qEXo6gLwa7OeTewlqu9lzWrVTEIKJFVsCGEDSVIgIF56Yf3TZ12H3pdrBCCRlw8RFXNJNOrDgzviAA1vMV2Ss2Dw6V9ZzifG3L%2FKjvxH0lYY6g9Bl9KE25DEQzTeSi0dbOXO7ARc1LuGgOV2hnU&X-Amz-Signature=dd3e7cdb5e3e49b7fbcf96ab10e254d6b0453e131d60b4953fb0605d96f31a8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

