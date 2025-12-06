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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMP3AMN3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0HNn0EKHCE5z9C8RltKcvr7cDFaqXIUWW3s6dURdT%2BAiEA2QY0P0mMyvsi5VTdK9A4B7UmzrdGXhDpAzfNJoMkknAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBa2CufMVC8sQGkHhyrcA73v76HeIb1nYo%2BCnjrudjlNR6NaeNlLX1o3VDHM53FB5Dz9F2xKdZSDn5CK%2B8M3Xw6L5xTkZshnewf9oToinr5t%2FmpLZGNT3e5LzDn1pd7JgtW6jFUn5pv%2Ffg1u81Xr3EVmvFN1LL08npRMzinOq8zxlZdLXpfuEbL%2BTHPGQXIdXp%2FX6ib3RuTTA%2FUHvrTNajmx7QdevevqRoFBi3%2FhkJ4tf3Lt5O5cQe%2B7KuNCxZgjHe%2BLMvYH%2BFnHnKRi8Ctcxc5JBnNNCqoFIR%2FDUh73WQu8%2BsiLcRYPmgx0lWDkcgX%2FEQJCYp%2BQlJJE9QwtNCHTkB%2FGdFNN%2FN0sVJ%2BYJfZSHSj9ppmcMovcn%2Fk4fWCP62Uybsv7%2BVziCIhFLNiWnOnLw1hCi%2F%2BzyCCAMWCyIGetatFj9lyDndYYzowS6lEwuyNzOkxxqnHWjm%2BTBF8%2FCp7%2FP1Mh15KWlsesJbgrjMzdvr2D3zYEv0cHLiT5Kukvn4gbzS%2FjY1BwavbzlnPHVN%2Fnp5enfOnu90LgVxEq1GkHc%2FxeTxfeMM7iLPgBIIzxhyzIcltebuGHm44iH%2Bn3ogC5nVyFs7zd57I1zFnOCuWFQeBloIoysTnKfXVCIGkE1C1xOiXdlq731CiQDMrPMM%2Bm0MkGOqUBnBgkD%2FxSz1i7fuVeISzVQC6cXmRCqO3heTBwTapKNt24TdXerC6MhrlcTRpEF8nK55DHPWgDaObLHm3N2iGKwpr1L3DBBO6HJeMfyZS8IrfnoZYCISMJBLydcEaIzzWg9iQeS%2BQyio%2Bo%2FRQ%2BQmUMKE7ZwoP5jwpfnTSHbgH%2BX12SvvV%2BoHdlvaJZEwEA5PYa%2B4wkYeFtzv5y4b3wUBk%2BS23l9KlU&X-Amz-Signature=b4782d9f153ee0ebfb97d86af316e42026c0a6a2a61a6864ff4256392bb061e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

