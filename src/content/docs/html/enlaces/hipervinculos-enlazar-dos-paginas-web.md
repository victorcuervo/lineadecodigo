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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR2IMQYD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T182857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrwyym7duGRiApBdFJoS298qxWTQat9VVYyemZmpL7ggIgOZjOQ7vdTgVKIjaYtzD%2Ba7xym1oxYqUTsIeriwYV1FMqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6qG1upOzZ2tz7VzSrcA3GBV9dsWJNrFb89IFgeL%2BcrLIlhKuD2m04zJiQxJpvm8M43KYaJMxzQmfLFG1MFiXQHUCP9f65lbDOVvfG1tmJpdYdiLaQmh7pjrWjNUEvKj%2BjFGIf92sTC5BfUrUL9pj0V77IsjVCuUGy2um51d1xSm6GdHA9S%2FHHbDlHv3RMaHIUFtqXjnwcN5XhCWmdRjCGBYk7TUDWIgmyYgU%2Bt0hp2FyEc6zbs3kjPHx7LzpDc%2FKJA5qGM3XQKKyWKUOEPfh%2Fh8%2FTbk9ZOVwUnbmfAVjI2top3XDOzDtPWJs2JaWQxlzX6svVVKr09Q1gaz06idxqCoFJO1aeYjq3%2FqepLCFCWfEohGsYHemeUOSnlNoowGjcJzEPJzW1aeKLgLMxn%2Bo%2B9bqNRM4VyFRIn1YiQ1LsfAswphNRzyobzPLCT1acIE9CpFRDJTn1A6CUMiNIQB4pjtLY8sHu92gh7dhUMXKQRcLTERc0atFDxHSjDspiRzLxRvfX1S2U5pOGSNQ3%2FQkO8jo3b9aqQRQlOeCw2sIydJ6cwmVE2qHKyxamUt4rTnmhVoEH4AVJoPW7zHHLg5KYP9FqXPu0ZrxKON%2FffLkiDjtIA7CBaZaL1W7fwDkutOhqLmreJkM1BrjLsMOS84ckGOqUB%2FJjf5gUsPZPd8Qz0%2BvhwGFqlHD1djFHp0H8ZbscaRgpMIsjGh4sRRt%2Bu2tC8mk3yg3SdK64KiAxD%2FEcdJ5kxKlKNcrtfMR%2BL3zS%2BnxG8w5EnaHZwBdSqTRqQJ1OqQJHVsfm4qhwdFjUH2BuAF4YPlsoKGUPLh0bUCEIj2IRZlSXHRuK6PQ7wUj5Rhwkb%2FoPpKusY%2BnoHv5KleIe4Eg6ChPpU%2FLXc&X-Amz-Signature=c8f86ca21ade9bf734751e2cb9c1affa2cc3bd8565b95955c7c01f811b65ca84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

