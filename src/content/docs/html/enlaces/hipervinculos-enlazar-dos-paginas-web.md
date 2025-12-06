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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MB4MD6L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdCpKC4Dl1A2jfbTE56FEx8jsfuyz91OkoD72fR1zhIQIgcEZqPy5aPUngGmyvY10fsNSdzW2bl6OJcQUzRfFmgdQq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDGkKLujSR8imQCNqvCrcA%2FfU1pYmZgEZO3XxtXpuZ6D9s3wHPuex4GGlFqbOl%2Fto%2FdcTIYUd0bf4V7u80tuiC9fEwRIIVrLVU7sHUhFekuPuw%2FcCGe1mdPFFtCW%2BnlhcK9xYC16VNTLx1jSBuXjz2317S7PJo2NHmJRUoS5izCwBDt7RQsDgtO3MvEDXk8Cuv5u4kTkdWtnMLJYVH5i792me07QTHVRNBqosYlRvcz2b7Zq028MRmP%2Fdh7oTg9jeNuHQH1rcYUtX0LusG9HRObdftSRGHguS%2F1mjvrvfcmHKRS7wVuuVhGDKT8nrDulZZGI4dCSey4%2B1ywdn9kd7dt9GbB57D%2Boxdj%2FLr%2B01uIFe5MDkKWeFUZpm0zYLTiTaEbGBuCX1Wc%2FOLiYOBDhMB1lhLX9ShZ5v0ZzGrLIhzS6RXXnSnZO4%2FgtW%2Ftg4INU%2Bjd5zKZnbZn9UcqR33Wc8he6iaqzdvIQoYM0OerOGG8NvTQswCvpSo4wlOe7%2F3HFB0MgXO35vrJC9AP1W1LJoHeAFbsh%2FIIB4GO%2By%2FKhOhi9y%2BVE7LaGfBPOJ7Ayr5DqZ1B0Z0hYRJ8X%2BqgT8ARCjT6QfE93UI4QgYS39NAnIBzvPdkVWmDIuHpc9eDS8KKdCCp0D1AP7k7gj1PcYMLym0MkGOqUBvd96Summ%2F4P90B9JaFKxEXvh06%2F%2FcVmcNu2e4aweyKf13DuW6FYmipjEnEtBQU%2BXQACIvhSwXGOvD9KcSxxDhsYmHjP%2B8yYWqRLqCxGa58Ssw%2FSEjMr2VsQU1AlgODPjoWL1SfLx5Ktekg83cAHw8z5E9Ace4dsqlYbglYvdS60fyWXdfgvZsYVaessfm%2FkfiZ1CRiFPxdGyo5nn2qxAf2MXvArY&X-Amz-Signature=ce3ada7f78972573a3dc49559d1ad713bf0e6df30cf09ea851ba46fdfd7ccf8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

