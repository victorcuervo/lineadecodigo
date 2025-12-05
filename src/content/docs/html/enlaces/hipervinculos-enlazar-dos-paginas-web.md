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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C5UI6YM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqW0hFFPCWcVeQ0aqiYuVXHs5tROIYMZSdw6AMhNwIiAIgT02KefwumADfSilYz%2F3aZbx8fD1qyR2o9EyXRRZ5mNAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDG%2F28qQHnglF79OLNyrcA7vlk6iMO78CkrW7VJq4jXXBb9cGyzwFHVyJan9d%2BcFJcs6S0UvOuh6qGqfYkazgEuvej7YWt0qGSNkRyjm1742Cuf9KMc8sbT1FC%2BObAZTHLE5K6Ohcgf90bLwos%2BtlUVTlu1FGLDmJ96AcEu53FdEu8DN5hvUUM03UTdYmdFWeWbj%2BEKg26MxGFKri4%2FJ%2F8qjD8Eg1CtpMya%2BX1A%2F6ds1spEtqthxZ0DsXR%2F9LPOiea8ky1NfvVjof2XdXG8LbaqAQc0XNOFq9QVJk%2BcFpEINKW0cK8fACr22DojHpJPJ1eBKFmiRNeBLb7cGXZABVTfLD9SbWgk%2BXYpFPNTBRCpvKmABjGnrXj%2BzZDAQjuXvRlF%2FUnpxYzojtIccRXLOHD%2BW5F6lueq%2B4QdK1khzHHck3Jwo6NHU8ZiFszBH%2BSgsVNJTJqLxG71xoZjWTw0r7E7%2BHBFUHCNvpzgbnYxN8fS7yw%2BiXmlLARmHtqP2%2F13LepZLkUEdlSCV7LU%2FUlL7VslOFXtAYVE7ahJ0a16Ep6xlbnpSb1gC4Lxga%2BrzHWfrW4IIuoFuoNaHroduhYg%2Bab7rG9s%2FlYHcX0H5kun%2FWjR%2Fc0dZoAF9QVEi%2BuWY427t3cbUfu7vJ4muJBXvsMKjeyskGOqUBnKAYtztXnqk8Jlkgm%2BLPlujOKZPcIdYs%2B%2FcVzjfzoTPnLh4CuwnwiWIssberyVTuMHg4Zc1NCMwJ8j1hldOv4xbeeNo4KJFkW7by7gDJf7nltqdTHV1Zl26lMUC2DXUrSaMWFTlUQ%2BGgccaCape7TvYovA2cGTAw0agqdLSzvfSjoOwkGNkt3sgTeg4goIZT8tmZ2SvES9U36AQ3iYbO9Poy5LmW&X-Amz-Signature=ee511617802ffd7a2b669b55df4668fd3573cb2bc03ccd9d77782e7e3a6a9f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

