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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4KWEISW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T201746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdirR179wXmjd9yxJRbDn3saeogCaXCYL1t7Q%2FWW7c%2BQIgfhV%2FIY33HTDkXWMZaUZcBfhBfUe55VLgzWq2xV773a8qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBth66XgAFEepNPIryrcA5fHdFu%2BZaWN6FmYHvnA%2B3wQU%2FjGEc3YQJPVUfLU%2FVoMK5KRqRygQhFVTECDUm1QCHUYTSTGH28kZvhqTGNuw3QQpU6vP1RZTVKGjJJoxnQRD1tYxYs6FRVHjO4uAkdjIOraXBkbfKLZCLJRtdZWklpwO17dVPnovXjfB31WAyeoHjSdokCuZqzsDk0sacPazcCzXQPYzFSIjX%2FKWW9ynd2lSTRpON4GKKIQTPpycCvn5v%2BqYvWh1iuEcLK%2FY4ab2JF845GJCxk5bRU164rAojatsqcC28V2fmfM19mZmnjNItclCKXoNXtdNVODz9WvvHPuVyoAn%2BROh5%2F0mL39cadLEnr2va18yAcl8TxZhTJezQRmp0scvVzDwhdFwVaIwkP%2Fm8EAGzwjymLUCRZfsmPFVl7rOijBIesV3hHm%2BGy7Gjn3VwIplma3N%2Bd%2Bp22s%2B8WPseLYmgWstIUOqRn8mtSmv2SD8NAUqrQDG4AGiuv9DP8NTS3nosT1vK%2FH%2FmY89WavKqdC2s%2FIogp2EWDDOiTIcB4I0bkk2p0YQPkulHBgG67gVEcNUfej3hbmhAqXIn822fA8m1FLx7gR6Ty2CQTv%2F%2B6jVZt52tm1qm3gz4Xh%2FWP30UCzTNG3B37%2FMMDc3MkGOqUBJ1wJZll72Xs3j%2FUPl7uxZtVt8IFp64YX4TcWZsEsWW2DAjwlZ6rURSFpso3vlyowTT23xciNir4pWRG6EbcSUFFP3QvsEHO98nuxo1FuEZZSqdUaszk01ZLbJOFC5prZk7%2FC7e7CRwUxy%2Fw9jCK4mz8h%2FHfme4XsNAn%2BBox%2FgRyK0gGVZhXhZ7uVSuUP0VEn9P4oRgb6oJg0B8IH3cEVTshAAUDf&X-Amz-Signature=fe516f488d49ee04511c3dc0535db99bc69d713831fad65002f5da75fadb5f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

