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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEHBFU24%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxws79%2F3JEqvI6xEQzK%2BR5qTQcKs%2BceMeYfihTLNXU6QIhAJ1NY0eaCCBv4CzPuO%2Bq6MdzXjS5mAEte6UJ3p06s4cvKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwW9Gzg8N3Rrydb2dwq3AMHBQrk9ubrbH5hx%2FTp3yMk3QI93476s2leMUJgrx61COKgkAdlI8MFHf49ggc%2BQnQMcBaJMdxIvOlARBPIgFAvL5RrRxRUpqV0i7qwLxLneh4MexxPg12Ym2NMQtEzLLfuTg8vRh1ZNQrQou4Tnh8m%2BAsIkangVS%2FyADrZDbum61iO5h24NL878soGSng9yKsa6zI4FLs1MLfmZOU0MUqs5hCLAzfvE223FirSYUtABOCsvn8HCM9kysYho%2FFiTW5vU3%2BMyFhhA4v9Lti7ZCSX8z6hU6MRbKZgk%2F9HXQjuukUJ0bqwC5dS%2BDRJma4DuF5DT8Z3rgjDT8rhOGE%2FyWSJtr4vzw3WqucnvzxgMXlW2AtnihIRLXbpSWBW6Ls6u97ma5QcdPdmOLEocdKL0hJeNMfCh8vVhXbAjxdib71zMWZmoF2uBN9v2FfOSpcP2abWsfWRwS08QD6aSKW1YEpqI7scvg3IMNFJBaQNlzsoLFXR%2BLmE%2Bw%2FC6eQgpQ%2BjgHfl7aqDCmF4hNlG6OcmfIDJ2Yn6dfR5iRstOvSOYjfc8fxd8%2BBkAiQy5lC4qgmGiQF5fETqrKkHszDos6IHWyiJwpOeEuexv%2BpJvDmMfAMZRBXN8td%2B5X4LNyTouzDo7dnJBjqkAW2AO45EGjZ3JlCeGDGSTs96fmwySwSYgKMjqnqysyA4geWycBkfkkfnkoHbSr9Iex3PLWV9vkB7ozRzqsNNOH26lD8n7OSVsP8syO4iR8AVBJwybNeFIVyS4iS4ABlNbSmncUBh4CWo0AF2nNkwoRP1%2BpXJwDP8IUctcW3kUYT4FMGFBkLxDjgOJtHBvis6Kn5B4%2BSQJzVVIM%2FqROHpWQ%2BPxIuR&X-Amz-Signature=fc3753196b1cb7bdab8d9f612445b48014052f3bfa5644abf8cf9383fed458bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

