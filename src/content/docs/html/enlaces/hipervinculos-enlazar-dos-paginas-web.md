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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466725SC2JB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIGcj0kDtVc764qicFAgDuVjglejevi3Jc7KfXmvka1IcAiEAy2VngLpw4HOZ9hUmQ7zKa6VxiWimJkHqE8XadGTpcKcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPiAPqf4LlIal%2BcRcSrcA5swYiXxy4qVJvHzm8j%2FePenB%2FSAt3zme6MoRO%2FReda8DCOsyWji36cZaICtcSxklJJfHJ%2FKN4%2BRZDsoVhPdULGGAeQXDZVOvTN3CeUdjCkKW1em8H%2BP%2BoHbYVsxRcyi6lnWrXIGueJYDwaSbBv%2BnoRGpLknbv%2FTLT66mAq%2Bysbc5bvYYb3sK5okpC7qFR%2FAUIk7c8uCyiY0xMdEABvUBbqXvqaOpfmv4Kdc4tqgdz7DIGG0cenTSmWbqctTVZiJys7dos2filjxnXhbbqMLF3uUPGB3Rz2eu6V7CRR6P%2F77F1GWINNq2DqdpDMENmfJ9Z%2FlwN%2FwTHIhTAJDLVqGj1hhoEQeOMc9%2Fg3hQbS9c0s7JEkStvYPpBrLjvBA%2F7lxxoNVJ7ETv4YkkGqgoRmhpBkgxLcZsSQC8nVfZVzoyjhHF6ezRB7z4MdIwQM4lehSOFpNHDjQAzH%2F7FWpCOCBcYdSHLjYqj8TCkNsPsoIX3kJBoz0HK6tcoiG8F9wu5soIzN0pJnk%2B6LhJu21erVO42UBkwBhVuw991Ginwsp7rqEVXH1b4HODN%2B35Hm6hcXE5vs85bFiLllWg4lnzyfJEkYInYt7PymmMknu%2Fek4GN1KJYEPlnVQ16dRZwfZMPqQxMkGOqUBhPz8amJVDx8bmJvLTtqbYBTIztTLhsUgUG8BmljrntkhRbXRErRJWlpAX0fD4i45C9EbxqZJ5R9uM3v1izE9AlDp0TeYEvGwO4FG1OZE9k%2FsjDdiUgI4CN6GHq%2F8M%2FA3MblSBBuSGBhSFkKtlZCwCU9SLDRXkR1MDmhwitkTlOmMFntSP9Onu3WPqLaHVSkcazHQgVj4laEG4hdSX3Ci5zL3DFEX&X-Amz-Signature=66127ad635f293749528b694121fd4db9304109377494347f2ebaa0ec5c564be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

