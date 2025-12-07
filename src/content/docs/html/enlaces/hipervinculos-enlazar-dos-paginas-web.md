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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627LUWCU3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgWYV%2FhBhQ3hBDVkw7HDjGftns%2Fnw8KRPy%2FEY5hisLBwIgGBF2xHeaodRVyuC0yLWVkrerm1cW%2BPkdE6Iox48v%2F6IqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfauZl3a%2BJbvPpg1CrcA4cR1pFK%2F1ZTQHvTyzXWv0efHjIIhu6Fwkr4oJSkh4TxLExqumqTmUzhn1CsD%2FcFYwnKel9h3XaX52OpYgirmT2Sjyttn%2B1pMtFFdb7P20uKO2DJxYD9uOy%2FrjYsdnTCIYNK8F1lejvC2T1TqObBbHEcBSEEftI5jW%2Ft12Bnh2HGhRTBgn%2BX5JKhTngMYZQoBnLjebSfSJF6f5X%2FlMijcLaecxD8cD%2BF4xqcrVq6400lG2fb9dDgTb7hRldUupocMfUZitjCyUApzP5kTG0EKn2wWRmeKWyN7kDHaUB1zZv5YfH%2BsRqP3e%2FO5BL54QfUATaMcWMEmCzmggp0%2FIdBh4dz7%2Ba1cmQvou3%2FUL3T%2FIzyZGTkfLUJS%2B2ow59ofobzu%2BvO4kcqb99p%2FDgJ8vitZHvzAJtnFqEkHJR9IrVpwcb8k%2FVcBvDqkkUjgiZ88GuS3IUGBrVwryGBo0xLeAo4eVFN4w9Ab6IAuFIMk88kVGK1wLKyL4%2FOpju4GD14SQWjWwra1Oj00iaEaeHu%2FkE%2F1jHbXVEdc7Dzxjq6hJLNGut7sqRcWyBjWEHXXHVNfpZFHIs0cKDX08QFXNJu6SjUYMl%2BvrHCq2DDyrmue9a8I4AGpys4HTl0BQ59pBxpMPTH18kGOqUBPx1fMFecej42JLN0k4giOumYVSvqKA4bgqFia%2FXeIixPdu6kE69GKVz0lXKRzEQJVN6zlCWRHe1TTEHP%2B%2FSXsKCSwr69EwF8qb%2FnyulpERd66VsnZP%2BVBXwLve7ZCAmiwx4uFeNAtdiA22a6uP49Sp%2BdH6MUKqZGGZsXwfuKTFTQF1eDyUYAmCnVXeNrnqfl6oHYGBjBJ%2B8uEDZAn0Ph3FJOdkCU&X-Amz-Signature=fbc9804d8614f76b6d3f2922dbee13432d11a0588c8abc402fdf7be585c9f100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

