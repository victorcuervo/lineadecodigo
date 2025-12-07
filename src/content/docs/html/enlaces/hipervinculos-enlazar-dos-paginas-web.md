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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WW7KIF5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA20q0X%2FAm7hWnFMDwaVqjkPBzVxajEOr%2BoBLf5o94LQIgOPzmzBMvhULsND83skrZPpEdRBvENSNjIJUZZreWUxEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1OMZi%2Bfal37s%2BgcyrcA%2FBnlROP1n4sTb630Z%2BHbPtMgzT9bTyZyViujKFeiW%2BRfDCYJjVueaeGdS7VuzHYYLoAv01Sh%2Bk2eTQzH6TGQLbo%2FiO5d4zS5uNGgs74oequxI8CfoTSbK130zXnwmJO1YbEqc7evJyL52nR5KVJaldWmp3O3gcwJcaW%2FZlo7BILHK0alhinappHKuGwEL4FyYI67gHz1C9p1MvscuwTjaQ2MYwEX4qmjQqBX9U5L3BUpZk%2F9NnhUGk%2FV%2BrboGNv8zWVffDl8VDx9PwpUzkm7S116VW98RgIuF9sSDScWzQagV8txA%2Fs6Gcqw24hdNzKF6FSs8aXGLKBxyNPLsfmtDaDzjzdtAjt1vM8klyjZNk6xcSKebcWQ2GzlFCJcea9uCvTOzl5XwlZ%2BvXRZsAcNJGKZJmf3o87QdqvSjPrCe6g9k%2B%2F5jI8tSLi9rz4in1AfuKDw7hIk%2BnU6PwzwhmdRu0viijRo4TIOxaCOC67lT%2BcI%2FOO%2F6WB%2FVuIr%2FXh97OqJCvIGqEAayZbfKgnL102xPW973aEONZ4%2B4v74a1GFIRTJLAURMtDCdKflL0TizNyTo6OL3cmGXBdd5inQw6zczgtCiyvsOwWFcHezDwlfgZtFbmSVFm%2FE4yRx2hzML2F2MkGOqUBvLQAvnUPaUI%2FvfUCIX9EIHZPStVwgZ%2F58bgfccEh0aqcvUtVeoCmk4CM0vbP%2B1AH%2BKzMBFl%2FzSZWKgqu5wmUahsjUZVj%2B4kVpud92NKrfKX9gtWvVkULkF2eOpOsKlWC53GngN5bnBySsuBOYNr3bQm%2BNyxxvIgvb3x8CLvSr2s%2F3X67E6t%2BWm%2BrwD%2F0%2Ff3VWd%2FOnrw5ycbExWDeW2pAQLrVdjqm&X-Amz-Signature=54e98a5d1cf1a7e3570357e2b612c1fa35b52295cc80744c115d132fee6d5c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

