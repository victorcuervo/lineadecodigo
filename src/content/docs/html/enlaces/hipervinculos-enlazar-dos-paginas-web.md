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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX7MO7ME%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHkg62wm48e2jyMl3O0k%2FGIavkvnBRmN%2BCB8iA39WP5qAiEAj1A0EGVacYKHJjvkWNFNvts%2FD57znM9qkovq26fNpXwq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDCljxH6wMk0tByOYCrcA12iDJzva2%2BRtUwf4vXSnyft8G1%2F7Liuq2adC3Z41Z6EqVBDYdmPZ2WTfSvTSJL0G4gZaNzPq6KD0lt%2FQgjD47QWccTTv83aRZ0yNLEPtg%2FxWmGbWudQ%2FCGTrzobEZYSPKxRQKYvx2emOs17wGfxJCufZ%2B2xpl0%2BbTddieLLm6SPJfmCC3fOGWxtXbDKNK6QormhMblYY78YiqlWkLWSNwXOdhJw2E7%2BbXDXjAroDrghPS5XPLOwduc9zSC9S%2BdxD7MsqD9DWZsAd8eg5xPbW0QEMfxA0Ug4qo0mRbKV9IS%2FomZTdmvEl4q3vWn0v3jKyu3p6WTyIxPjb1uCzP161VbLnC%2FOQ8KegBSUI%2BRWCuEXHOTmICMzdQFGZ1hDKXwNxAhxcLBQOAN%2F%2Bx%2BvTZXSV0cOWZEDI6aj3Yk5cwW1eOC1Z2p1XzKa6bhA5W3AyzK0j%2FJHxahLIjY1zC76HDAL4VUzX64hlNZt63MU9spwgtLs7Y0r3TDYV2t5vHx2%2Bzw995%2BRAz0uPF5%2F9fucnCKE2jDrM1NaG3ENd3q4sgL%2BMMM%2BwV2Adh7ORMCLzjoiAEtWYEipGcUK4fnx5RRWr3TdgzHGHPUaoEvu3iMVlFUSEJkRmXXiTAeQrXW3%2FRZKMPLTw8kGOqUBgmNBCUZ7O2D1CPhoiLxbMSTaGtYhgNboakNN9O%2BqoHXKJJ5v87YeyaBysBs9YbqmVbpkVm9Rs0irx1H%2FhiBFO6PtzFk99fzB6WT7od4u6TY4YXrpIUl1NS1nHsxPJH5yGqR9b48jOgrdf4fqyU%2BPrDrSd%2BhP49IgwFbvnl1ny%2FfDSkL7j5ns%2Fm51hGinFAghkwn0uaOelzw7w5aLhIcKs3lQgPS4&X-Amz-Signature=bcdf0e74dc319d170caf84c59fa279676b0c53aa2e04a3fba461843834f40481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

