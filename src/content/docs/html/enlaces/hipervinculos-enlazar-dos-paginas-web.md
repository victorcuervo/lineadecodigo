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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPURSYVF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIHJQOhUloBzeutXLUqBq%2F14droMgg7exvfQbCz4zGs9YAiATj31uwUHnvAQXtBy0ZR8CGMPfkTfs5A0p2j7Y2iFLKSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMuFloFTyHwFDdLtXmKtwDzfcAhshHHr6He4zwRe2H7k7GeC8ijO9F8wkrRs8Z0m6vmn8dbSApGhJ%2Bahxu8wB%2FJ0CB6BoNjqZ03rtnyUw67CImgP9bk%2Fe68YcXh%2BnPEkqpWmEKxsyPD%2FgHNtlc9c%2FP3%2F99lkgwjS16RnjdkjbumO4PORh%2BdfNu8ZDakeW8w5Sre1UlDP8ufqTNNRcXP9qXDLe7N11wOTKtiAXwb0r%2FfZuEpBtmvICw3w5veeZrMbzXM5D0aSRjTs7nJCwL%2FozlJBQiTwiiGpB2MRKx%2BiksBEM9kzvtr%2FLRKAw6kaolIGJClD7F%2FtqRO8T%2BE1GULh%2FtQ0kF0RpZpKQbWkO4mMOLTlhFOlT6Qm0O20IhrU%2Bjh7xP51%2F8jcSmqNgLAU8AMREd2ndOE1ERNaP1uqEkBOYhFlzzkx3udZNKJIjbZYnSInHZg%2FMteSHPTmd%2Bcop44q8BQDOWvbVWmnALZhDo5HEYXCowAeYumPstp4KH82zyOnZxkjAYygaXO7%2FBi0tTeLATidTwv8Qb%2B1sRcQZblblXQZKSBkxJJ2lG1BvOX%2BFD2r47SYx3WAxKDOr8Se0vWYNHW8IoQjkmzC7%2BkAruKQXzug3XW8r96ly4i%2BwT8uVJwydt5tODFXJX1XRPVUUwmufFyQY6pgG%2BAgUfd3MYqJEVYivCxedf5tjRER0QO0a4vA3MHd%2BHLAdxHrHhbJI3jxBrpjyC4wvRdTGz5jAaHk5m59uQ5n3Vl7dYbWM0vLn%2BfFXdkSNzTvsXaNsL4fo7NPqgWkcj0cld4Gb59CNktiWreOmRv4zY4ZxQknhmzIPNTbU%2FBSGagtwTdQt0M6WKjZsnofSl4Lk3QjGdybkttB2o%2B73ZODchRm0V08Z5&X-Amz-Signature=106fc6b0a1747dd4cc07cd2966c303134c9059c0d9e37c35a52c9997f0fa0dc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

