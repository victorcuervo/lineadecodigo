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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVHTFQR2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIH5%2B0j24vSn3WtBYjXq4znNrlKpbFEAfBR5bll5IUW3tAiEA6yvJg9c%2FEpADixOOKNzlJWL4wChEm3411MNjz3JCqN4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCsmnXuqC7eQsNldHircA%2FXRKJvJ%2Fx1CjJCM4GcLfE3GEBQE7DeyFaOW7PGFiuqJ9gWmS4%2B%2F%2B%2FcvXa%2BhLX51e6efOdvVeEjPXl%2F6jnPwLnpXpdJMqbGNtzwFcHow9HaVq4GIdIL%2Bpi8H3YbsEpsvkrIjtpf0mzZWebPIGyKWdLDOkaR8tnln48WTM8HhjviE%2BABDVHDlZSuLenAn3bGsNKcj71RxJE2uIS7ShRJAKYqYH5wmC8bdwT%2FtYO3Lw5UzXdWJ8E6j8TSkl3N4JewO8fAQvOajIgxGaaua3%2BIxrTLAyJjw1E52OH85G91HCam2rvVOss4eros9HaYn%2BsUifmLZ0FHvKtzjRRVQ8Qq%2BatOrBJLBmkJXqbdDfu0Y2oR0hXLPjQhugT%2ByrLPAD4GJ9Jf3JEg%2BkDUkcMOXjjJ%2BvF92FYdEpgmnXHy3UAHqNCorbNzanwvPTHe37Qnq%2FDHBXUAx%2FKv%2BK%2BsGVNyIBM5ynhQRaz1KH%2BYOoCzJZcjPLUFw1PDfWXaJFNK3YBlmDp%2F2LqLyC9slWRs9y87eG7%2BD%2BBBXpJMnWXpGfZCtiK7Rb1Z6DoxQnSHGTdHXqOaSE4tkxgkIoQAedx2ll6CUIY8zdZE3jkxwB0mhk1%2F%2FlSnotuUufWh9o6SuvIgLZ83yMIvLxMkGOqUBsdb0wIHMw3dNChnsn1ora3Svv6RXNM6hHcKfsYP7hbD75Z57wKXBuS078p5i9ndou8va%2Ff3D4NPlx4dqOVWQ0922CFsM42H9oVVGanQ7OogY3aJkWgdTbUD%2FyFdbLy6i%2BFeFsBcogmiZmE5MN9KrxaIYp8WZwW7BBC%2BGCAumX75vzToIrpDYV9EwtxZ20Havl7O5gllAV%2BCu6SkBMJNpo0xVIMkp&X-Amz-Signature=be1bc84d827b7b11e1c374f11ba1a518e0b27d09df26e24490bbc1772ee2f087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

