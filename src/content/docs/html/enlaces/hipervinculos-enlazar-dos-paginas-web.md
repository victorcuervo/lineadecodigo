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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5X4RRPL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDkaVeSX3iRXzxaiNGG%2BeIlsIjaAG6lO4PGSbqAEb5txwIgZBewhOeWm%2FfHlWQLiUJ8OZuOhpY84iJcCbDrsYd2OGIq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDIdmeKgFf%2FkVRQyORSrcA%2BkKUoJVmB8XVc3O74OdzpjEP0fq25eOoKgaT6paSmmmNABPosGVcEpN5Cg7DFw6mlJ%2B0YdR1lxdHg%2FzaS%2BaMzEGn9KIHqIkoFrKjDqIRW3b5Sgkw8PLoyBGZhGRoniozzYXgA698SA%2Fq04QP6I%2F7aQKi44CTUOQ3%2FQQj8x09pse6%2BIsXrbE94NO54Erwa0RGcVKu3GgONDBID0cGGre%2B0fMAVadEddcQg1yOg39AagvzSxckp4gsYm7x2bmZrf1E1MHh5UwvVgd%2BsEAYk67Bv5uvaCu%2Bm6hv%2FS2e3d2AgxyBDQFwBVDt24d7WyV0bApH%2BB5fJxtMKAaAguFEplZAmFkq2D3BPb7E72Ns3xC87vdSV%2FYlbFTWusXrY4YKCAdXADapA4omN2DX6fQH7wE05NUyvh2klkGuEQAmy%2FvuMULfJyG325%2B4lKRXL571CGQ9XcGK81OgcOs7VUhiVnWh%2FSde5EkK7SioamwyWY4adKXEfbKpru0Dc%2FdpbY0kFogvIKtAhBHdZCNy0Fcov99r%2BvX72BAzxZzVyjEaJ18%2BJYIWPtOvE2wzZgOvKGtwFh9W5EAGKmDgmz42af9sJvPv9ZJV3rLpxLJOsx5ljczmzPH9B8T2VCXrRc5HQ2IMMaExskGOqUBbZ2V0WtMk0UxeT%2FrWevfkWZJEY%2FSt9rYF%2FGIVUg01HVmdNS5s1mHDNbAKtcoLKv18mQR1CZ8WQYIWOJexbiH8m4ot3KmUb4X6m6%2BQznmb8xUbaZWVUBwstPErp8LBHHHqISTh%2Fal7iEqTqXYcwszLxvFlT7Ynpx5FLiPvk7DOg91ePBrQ9yGhKLeb%2Bp4vLqwFVUFUAsU00djtbXObslxAhEQI1Km&X-Amz-Signature=35c8ce294bd5c1c86b7061f198957371a4b9d6b4d425c98a3234a04cca9d7ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

