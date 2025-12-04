---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IWBPRNU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDOzY4VV7NOYpN2ellxZTDxqWLTl8XP2A25Mzy5KVua3gIgNkDblwlDSwhD0NBqMFsnLQhWrphrqmtoKqHpu%2FVHvigq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEIVIA1YDvwiAydA2yrcAz8gHMZPomUcB6ii6dXpH%2FgASHA%2BU56eMlholt4AKAGi0IImiALzNUQKcBi2xN9zSCQihd4Ne6EQpOqj4JdfdI9V8TCqkTrHK96xoatO6i3QEFo%2BnmOYgQzbBG3ZFNrl%2BFay8afpGZw8UGh681oqNvnVN6O%2FnH03yMYCtfiqHNjxf4wUUuQToyi9bn747NnE5feYk0GIpK0PRNJXYD40BT40S4oyIYD5tTDnxf9cObu%2Bgzgpmshv%2F0NNMAUOAzYwQjjgoUf5kF5bt3etFth9sAtNJ09vfAYV%2BJqnFa%2BKbS15NdDyVXoIKWCgOUBMjwqe5H7j75P8A9x1sXw%2B6l%2FvPrPKEQ7ieVvV5aQwHhspDTded%2FZ3erLjdXSeqTxDYNkrjcTpor5rCtbIEglRwmlR9IqH1ZQw895IORovfDC%2FWN06w3M9VL5%2FDppzs96bhEECM8oNdUSXGsY2A7Rj6FnToJLaB9bQfUwPKRKP31y1WIX9JhvCHrNkLQtNtquwS7r52iqwkFhfIG8D%2FxN%2Bwp9Wxb%2FefpCOr8ON%2B%2FCwgUo9GcxmLNnv%2BqwfnOkQ7cLfhUgRLOAOE%2FZX5WWKbHom%2B4tHrDQJISxpn9hKaEky5HJv%2FK0qZWPJdt3lv888dW6MMKGRxMkGOqUBPPbxocOEj0Q6dOobDit0Mi43k2effO9LjiXXBYKuvvwnngOE%2FDLT9PHCaMs%2Fw74Gx%2FG8OWNgaN%2FjMQHryyzY8bqjsUK1KPeoXOmfbUaIsXSorVaRErmepomm0jK%2BytIiBqUEatAGbf0IpS1Dnvr8WV%2FaBcN3YWxv4eiK%2B8ueVjMAUMKm0dqp6%2FrHtNNsPsa5Z6Nfy%2FTnT%2B%2B%2B82ZpDGb6Uq6UOZTT&X-Amz-Signature=ec296ca7f1337defd6d3d9ad0d1a855776c7fd3f975316712f2ac29691abf74b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

