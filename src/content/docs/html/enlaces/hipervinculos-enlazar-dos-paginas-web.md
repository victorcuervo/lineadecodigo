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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B6J3BSK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T214145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmG9USS6yguK0ALAbu0f3hjA9yAbtAAZTQVaarpPqlNAiAPhpyarol9eX431Yq1Wbe%2BlS8UUZf4VML%2FbCanHhbyGCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbvOvxxRweF6H1QESKtwDQaK%2B2Bhpi0slSBvg7UwC6zQo4Zzkl1NORi7RGOkHmcIEuDDHdB1pJdsULwsiitC21R20eDFQN3b%2B%2FoDrZ%2F4VTDRirL3sVMIIgJELADzC4t2Thkp7TP0Mk3apk7hksglJpZAUuRpJ3iARZrne7Gr4S1f3N395rrjseIs8bFr%2F%2BT1RXpOOsQHM%2FtVFKdZfTMUO2hrOZeJ%2BqfrzqNCxeXC%2F%2BG73%2FNd50aPa6QhPO9Tn13LnHCtyxF96It6M939cnrx9P5Q9vRlm%2Fabo6zSPToT6ilaVin9zSwtumIJw3%2BtunU0kRHt43HHOfykKb053L%2FYukgNED2QiaTvS8SXHs9YYRtI8xiUs3Xk28SvOx56iUueoNhizgmjAP8KPPJZU55CKi8qXDYdVaTvn7HVcvwZFugZlQ9%2Fs5et3udPtNRuis1jID%2BC2Gs%2FictHdnnVo2zRWS%2B9ejCALHHVAdHw9jN%2BQ%2B8qznopNCz0tw37De9Q2i%2FRkk93hZ%2Fskx3Txf5rzdIQW%2BchEvJZ%2FUj38pnhkawQU7Hyy7oLSrWHp4BH3xPn4EHRnbb%2B8oB%2FSJ%2BTjf8F1%2BGfaOXgDylL4xaRQRIiJ0zihDmwI38HWGZwzoBjQIdgICPmgZNimyOrliLkED4Ew3p%2FiyQY6pgGLFcNKAnA0ndHXrzB0X0Zs2gm1wBIYqwhtMid8mpI5EHRfjhBjeuESs9eEAehFoz25HW3KQEqG7zqwIZxiKr63VBPKwa0XsV%2BmtJxaj%2BuJz1eB9jakHxJqreG%2BduIhr00662VEN3hfuC9QddcrvzBeqv00ADDhKEtMocZVsA5zP%2BtmdtLN0sUBoGbzer3O656DiHD1Z%2F74TXE53FBcov1WUHWj0tjJ&X-Amz-Signature=42cd182ebab5b0889f8c43e48ef8befbb0147b7f6191b18d292ae2758e5f2097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

