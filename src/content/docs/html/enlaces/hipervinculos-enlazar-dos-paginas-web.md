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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WUFA2M7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPETxdV0Uq769cN7mZNyoOdyWT7zut3uVmPmJ8bpj1bQIgZ4g1pYWQ%2FSVzhbm30ASYsSwRoisptN0uat0uPoyq8GEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDlpGzVEQVvy6iMxNircA5JvB1j6zL3z7PYdzYBGMlSxM8MH8XHcqM3qUOXKZa%2F8EPoW7A2dwOkIU%2BnJeM3CxkyjW%2B1v9IKKkOY1GvMNmxZIQrqdNF3fmUla9M8A%2FtpVuMVRAX4pAO%2BvID4dwzHMANdYvru2JRlN7zuYqfm7nFFdwIj1EM0tinSHWa5EeClFWIdAnVelCVgQtPguRt%2FrmC09JWqC%2Fzehjz4SJk6MWH9S4kcvrTc3EnhLu3aL6aiJXwPH%2BnZEMmotc0hhXZLXo1KA7rV7ZyHfFKFedQ6fWf5WwVktDLXQ5kI0MggONcxH9w%2FB9tV8AO2SBdZq3qk%2BGamdlq%2BuzelHuhmu4lgJyWToH05nsPlqPbenPdMyXGnrpf1IEv2%2FmPfcZFlSIyFu3IwbcjR6vpVZ4BsgrnJcRfKK0E25L4aT51RgttbnWOF1%2Fft9YV0286e5TLR5QffQY%2Fz1JwA36FzyriVnCwoTz%2BdFY6sal5N1UpapClXbdKKBOVuFLSzutsTSydb9E7elmvDPZtQEBY3a5tIenuBnb7UN3ocwLeqlzKS9eLkdDlxXF9zg8abj4j3C461Mnhu4rOvdz5UwDU9E7OIIed%2BUPE6WG2aFBt6Wz01ve9fl%2FbvaPir%2BBTtrTUG%2BnMNvMNGnzskGOqUBb16d4P2yPcQWUiVAyZy%2FisSSSb%2Fmq%2B758ME77PZyndZGf6ahQDTgvWVR7tvkfFO25Q%2FuzpgrzMiP0ItYFuMmxnTK2x3qjf9NqV9ahEWD3spuB7hnkg8z2Uynz14ohSNs3fvxlaCD3A5%2FUj8U0uOoUAdmHGJZO1EIgwTawC7MqhJ%2B5nlAx70pIjLPFEgH5nXrAwHAq4gZhLWJWVeIZ1E0jUwzfJSq&X-Amz-Signature=338b29b9e9b60da815f7bf931c228e46e8d410275a59a5e52b3be1c1e4473b87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

