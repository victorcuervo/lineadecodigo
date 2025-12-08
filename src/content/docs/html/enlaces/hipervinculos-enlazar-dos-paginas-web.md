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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5JJFFLS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCIS7HGKlnzfHgfLzy9UaSFRclGoK%2BW7ehowLjqmSJLwIhAM477exNCSkEwd5Gd1Eh4firQHKTtw9z7sSosedsJnOEKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcBmr1e%2FF57VOIUXsq3APKxQ9UdSzAlc4a0TuZvzT8RTg%2BR1jucpvpRzwRmRBkuol5qA3bx%2Bf%2F6ewHIG1qFG5XwjLltbBZNdoG8yW7Xnvv%2FiwVPFjg3%2FJO9HyWkLF1j2I1DBqd%2Bn1eeNoO0H4QpuMqEkrHK%2FQUi4YL%2FLY65Wl%2FKTvuVchr8DKVAJ8f7R4ObrUx%2B6sLlnkz10Vw9Zs2eQNJkfeVYFSCiPMhJ8D1vGpkCCZv4bJlkhjq%2FUKgQHeDzXrcvKr2tsGk9gJ%2F4Gcy9YrEkEJLUo%2BkJpfqWnHGuXClwTHxLeklWc4wM7kL043OD%2FOhTq6yMGLJOzpXTCep%2FDvFE2xGd%2BY8fQJhQtbciO9iKWBD6oaoXe5fyd%2FrBGhUbotKqQLCLJYiw7oX%2FDshDIeUvqukiYTXIf5TqjtR5P3I3YAMiSf%2BugB%2FAXjivic31%2BQUVYmElJifU%2BQ99d17HxCVXC76swJPIG2pkVIWOw4Y2pZflPgnmqE76qJkeyRS2G65G6owf811z2dvuFVu3aqZ4UoibLasyGixcn9DwgG7NDble5KnInim86fOzWLC6NJ2i2Vsuiz5sHiKkfEyNkNztHWf5MTXOSsJMw5gmhYHOnlPzQ0MM5fJCYcyDU36OKzyWJoipfoVOm8gVjCEtNnJBjqkAa07zabODPwYAg54YjbmMu7bmDqYhTPohI%2BWV11p9IDWRyKk13ZXL1IZ1ieeiXAwMXhr5pv4uTM4MKVHVCNEifb%2B5E%2B62ZN%2FAA74NsCaZDAb7WHV%2BKKjd41oK21CVFfN0IFbtlS8OB9vSISzG4u6YQGPMrwUSBXsfcknq7eJ0huZakoX6b71I0xTwRE5EXg9jdxVbCOxFAuEGr3ltLG5%2BMsJyUhI&X-Amz-Signature=0e92350200e0b9d4d30690282265c15e2e73281caf27d8d3f52c2dff7144c98d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

