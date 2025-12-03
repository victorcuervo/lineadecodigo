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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS2AHO46%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIHdWstf6%2B7M6%2BQRWhSIBfcwbC1nNMl4%2F68xOukaXv9cUAiBqadfNo4Y8uXLnOIe3BjgVreO478DCnqCTAnbdn1fadSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMkVh9O0IpDHbPV8d9KtwDl9Em1BdGVO1w%2Bi4wyxQvT8DpQzsMaE7o22vOi1OTXn4kJ5n9eWVC7P2tOV6%2BEXR%2BlIOVk3%2F2U2wDoLo7WnEjFI%2FpenKry%2FSVyL4kLxTKV8PklVPp91z7sQBHSPomNmxhlo3OjSlDobfBAnruiXrE1%2BZ3NBfmug6vJpos%2FdvPiImwR%2FR34XUENwd2s88K0cHZdoO6QtGKTLzlgWsjWqDKTQnjZO1QiJUhUDKZdLNqAKXLaYO9GKWygbI3o6%2FHPxrAn7i0Lj3z98%2BBjxeAu3B77NfQNT%2FK2XUw8Ev7iMI2qK6OWYNviz4MNKw2Cj0Wp6crcBEqNFTEGWuevzfFOQNvTDKd%2F2Ob9Ewcqo8lpuxJPDdz0m6wJr8A6pteIYKr1sYY6lzTUGeNkUWLGOnUnO9MsqA9LJUsc%2FdpKk1VKAcC15mhJ8cGIxZa4gKF%2BdbzWNA99MmQN61t7vJe5Nwnxm3NZHReLBDyS5qz3AqCLZESQv4ORED8vUzVt3q%2BRbqF8lblhokt8OswbBIQ7%2BNrbSuazlJIHIYQCQfkjkLiyvDaU2YZVZY1RY6D9PlmXP00j%2BpNthvRs2yCqahzbTBlp7qce8MhOwi5OH3qbKzogcC2HiryhfbxJxoiV5qEEBgwzfjCyQY6pgGE0hBqb%2Fp2xG0B88ziBRRooGmW01MzA32JDsOVEJ0mNkWjTdoecNSOBsiSMzJDkND1EackCyfXCY9MUHI%2Bo8wYFGmOYJZqlXz5V3%2FPkXkkQ7pgwoJdhTKtjyK%2B53BWU0QJ6rONjD7XJt8PicfPGUglgm4%2FJP9xYD1YiB6dp%2B7fJKOEjdre65HwMdfxYpa8XPR8W8Up1ipyAm6qmkEjtzaFEP6CXuca&X-Amz-Signature=5f7b0cbe86eb4b5496bfb021f19424f527ccb69a7f143bf4e5e8770cc7b47774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

