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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZZREW4Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDL2sMFDReuAOZ62OxfI0c7fVe0RgAd%2BIMSKTvuA0Lb%2FAiAZufCaDY2u7DmJUtvfrPh4HKeegVagTQcI5DrlXBCooir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM0ZU2HJCaCQsPAyrUKtwDW1YPwdfAqpV8CR%2Bsc5TLUZcZOrioxJ7hr9klBJ4LAILCZX0fDBG4gDyLgsF1Vzl6A5uPmZw5zUcmlgD9csdA1IQn7VHRwAPFjjqQtGgyt3jjYeYOh360Z%2BA1hAyPB0bcl7qYS5HmEKSptmaozUU4MEdJ%2F2RT255e9M5m68gOYHPIoJV4KqY52WEx1CALd014WFtfvyV7tKR%2BcRpzkyN1UTTrohI5FRmwyKvmqQY7ugHTXuwtAU4gzPkd7cbqWZssImp%2BinVnt1TaOF7qqbjw%2BW1y0eWGWr%2FMCjDTBAhAI74DM%2BPjp%2BB0o5lMW9HzBZ%2Flw7HVJc0TUvyYLTbS4cTXVyyPe3QF9TUALRxnIK1gsjwYqyhspY%2F%2Fub6jPzbbyNS1bo43jlexukAbbyY81uh%2B4RJ87LVgQaLqktJ%2B5ut5YNtwmxbukoNAaFZxx6Vf7yb5%2FdDSkrhB0%2Bq4Jf0rYv2B3i3klzC%2Be48Gava27FmF%2BZc2U4N%2B16Y2QK2xhfQDA5YAjoPsAq%2Bo7q4GqkKWtyZ3Lio0npc61L1Fh4FGxBHRFokRbO2CI%2B9ppvdZt%2BcC0DKtoR6ft5L%2B8fMS12q7LmDAWLT7fg67Bw2txTGJTcKtVIqQfoqzi3co7Ax%2BJN0w0IzIyQY6pgEJZl4%2FeosnRfgBoV39IF0FzwhZgvoNXFYEv0AYQRMKYsJEpTaZ%2FrBgXW7qAbUd8Emrm56yVJUucheiUY%2Fx1%2FsCkTCMcRhBkX8zA3GKM0YItDVNrKMHros49L2jrjEjgkakeMYRflhIwb1hvoiLW%2Fa7r0X7DaSlE8Q5KNCxgS1gnycjYN5mas5IZlEpYufZH1C%2BK%2B8KlLe32nEEJFSg14%2FQiJWJafAQ&X-Amz-Signature=add92ea90e71473c4e7d1f69e1fe7e0eaffb6366799dd7b95a2b262d843ce61c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

