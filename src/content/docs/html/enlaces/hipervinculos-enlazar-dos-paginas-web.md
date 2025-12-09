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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKJHHDK3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqvHtNWTxczL0w1AnpcVHDj9BFMyw6AUQtI6rms7qVuAiAjg2%2FYQM7OliSRMxWxA9FvJaxlaiJhz3bDdvprxP3SdiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM63geTlYFY%2BMe6%2F9cKtwD6v7BKmHN1oGFi4U41ZvbyVkezHWUI8S6Zw5wGDRBMJ58s9iK2ZtGLljtDaU505YubmGnbc4191XOpP8oIRGkQ8ozU%2FELVZD7o7q4aZR%2BHnnK5NaXlooN0ybAu5P7Hmh%2BmT5AMdOIREoRDy233fENkdqgIx4atFHx2eEfIj6uUP6uwUJkTDIGGFbUZElkuZj9srC0dHOWbyx6WVSpF01elNmZZxi0yn8FuU5kQLd3PYPeVuEVefFQ9ocdWlKzom%2BmA6iwOt5Gw0pK6uwUlOMNxVm2TzoDSKKK%2FlyMrWzMHb3YpkVbF8j5Rf2svPJ3syMu5jS15Tq%2BA00tVM1NEnoeRPUQvgr3ImW7E1T5EqCWXKxgHA3j8UkhRA8W1q7Iea9VBGKbbt7CR%2FXDVDSeMJzHgfm3BTyeuS9qBXMgOibOkZdRKfyfuLCmeJSujEAq%2FgpzPST8E1%2BBlx5fsHyBto8J12F4ca1TWk9SiVN88VDFEkp6cE7iLMNpsHy5P5%2BmnWEgovI2eHlo4if0Fe0Sx7TG4hGPMW70JhWw%2FobkTGuQSIPALLt%2FFh2CUayt%2FhHAzIYKlSa%2BGTFSMvbFX%2FZENk6IR6nRm0uteyvM7GNtXS0%2FNR4CMVBwedi4lGdtoJEw0aTfyQY6pgFgNHC9M42vQBpMEK%2BXqlxvy62lPppZt3n9MIXmzB%2F%2F4TMQuoc7CJEOgyERKJ6mSTH2q68dyxYmfT1FwhCHE7NyQwkbowd9vPvJN5UQI8qdWQESdkJTa9gjCcsM0XQZxPhXiwY14p0%2F671DppLNnk6EwUKqxwcq2pMeVIq6EvQFqcY2%2FVlf9VqfcBIgwAUZalXivNKqdl5xpSF8kJbHWUZCA5Dta0KC&X-Amz-Signature=6824ec9d7873b4f9ea84533e4ccbc5a8ff7a4f2bdd037219f51f3796f05430ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

