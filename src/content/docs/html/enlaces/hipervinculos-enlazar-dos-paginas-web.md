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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQLQ4427%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiDUklkBDeKcnKR0eJVotneV%2F4sANPQg33Rq3%2FeEAUfgIhAPKj6eW9m40Cyc35jnYbRKzguDCHncK2g3TQjhG8%2F8u7Kv8DCH8QABoMNjM3NDIzMTgzODA1IgzCUhi230J8JDzOLHgq3APNZIkZHhCGtCuq2O%2FSJtutZSiey%2F50M6Es2synfqcB3Ne%2FDPm5xjNnPUO2HX5JiI6jr%2Ble6OTjUr4ohgNZK7XQtG1yqk3QS%2BvllrzdqLy0sAatGEPwWlDIBDdoPglkmpJ7m%2BK4dcLcb%2BJbLWjjgBrOZFAcYNW6TbAhLqNYIYY1vn%2FdpCrZp2kz7y8xRy43MBfNNwv2w0rU%2FaT8RjDcVaLb8VdQZ4ZPiiyXkITb9JTNiaTmXz%2Fzi38YH62Jqj8x9eZNgAJmL8t6dx9OyXLsVn%2FAb5SxVR%2Bjq2jQKbhrW2Fgqz4M3P%2FWQKh1HwpEXFfukDnZevHGp1C%2F%2B8DX3YMNygVO7PCNwoFE0ldLknwIz1gY9u4fPX1zTNyBvruVgpqFiEGkoqCeuTIUiDAQNcgSorqYtbabU7gkyPkcILiibswO373KqWH%2FOfzsD01l%2FhcgzflAhYnv9I4RH5iiOZ1GHzeB7VOjfxN1SDGRMQwg62lZp21nw0ruQ51doBCnTu4s25gzTa9oSxt5NQJ%2F%2FSg6Z0g0UsU0PLVwvl%2Fi32AKgimEyQY6moJCAZ8qXLySpTB4GG6FdSc7BjFb4qTmrNUYsQC0M%2BhCI4zoS7Q5B8ldgT4xRa9X3xWLiKUYeF19%2FTC709LJBjqkAV4DorORLQun%2F9bMRivhsDAayA1a2aWV5YaGW0G4ekeiChBK6Cw%2BaMLD9cFMEe37Zx0AM04Xl7LkOHx1XnPIhw6P%2FPqw49qDL%2BqELacfX4bJAZmyyroX%2FHu5rzQE4ff1TdBR4G%2Fhze1L7P6cRDEq2SXndjwSiPYUSOueoW2KSH1BosDoCbY%2BAhEMBIC6EiTkwweVVPm6DhKu1yj0JFGNJUOWV2IH&X-Amz-Signature=954ecaae4c92b9a5a1ed25d6c2291ae94de4fdb567ae0db558b94387564592ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

