---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQUVAAPQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T231837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCVa4Z62zP0C1kze5EbGRWeI6hYerUlZiUNrqBZ0TYcAiEAq9zHx5tks0jnnpLj8PArQLH2o0KV93wxP7q%2FFS72nKAqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHTnX%2FodQtH3ReIUircA%2FrL0%2BDK%2FmaKciV6nNwydNCfR1yU9%2FrMqvIC8naXtjITv0eBGJvMLF4uF9WwJoYqVatetLo%2BEzTvInlYboSsH%2FkOs6xvRmL4DmCXNxZRuAwyeea9cRU4nJ8dkr11%2FHtz%2BNstQzOVi9sMwCh%2BCV5MMz4%2FEkNZwfeyk0uSvnbD%2FL2R5A4qDqFBscIbmBrDFG%2Bl2xxy4CJ322FDQotFBsjuedHborqXOXVbEtYNdDMnfd7H37q0zNMOfUb33Mi%2Fii8WpcbAKEwxjx0mnOwArBIObBEz1VzhGYxeRoxZCPRPHavOp%2B2sgtWWn08bbZSW%2BJWRayqNcZNBQrooF%2FQGgzCMKVOAtnegtZRKampeda57er16nGWqvSQh%2F%2FwwOOt93%2Bw%2FJDMl49NviDIqJlTJvHIp9hBbaKuftRd%2FMb0sual%2Fgj2ZjOUQsU57Eefr0GWtvxdTUdzIX6GJhJ1FRmPMyzxQ4EF0u3fWwN1EyN63ioDXfhm1hp3ht%2BaZAQpir8TW2W26%2FT5qU7aVkyqv32poeu4vsfS%2FDvkaJH9fLmY831bseIc7r6Ty4wckDalnxh%2FWzP6yKVv9i4ZbEuK6eR9bKPUQpncwr%2BVf86XLcyFXXxErXZV112nhLKyNPYLuSK7BMJXE4skGOqUBwSPM%2FCEuZa74ulw9Srm1RNKuwZWNalXQ8LtnTz2lS23r85svVrFI6%2BbJAWeFhYeEqDCDtQCm%2FngWLUjzyD4YgwHuJ74C%2Fxslcc0dD22KfUHwQJXMSU1sTe5oW7jG1D%2FnqmZ8eZCy2EP9q5%2BQ1IA8A91swvIwOCIIx6u1B6VE2%2BZU05hEuDsWIbyQ1K4pznmM%2B9UethoLvylPpbYp2QSljTO%2BUP9j&X-Amz-Signature=de151b29cdd8ff8ec598f515a486b593e785234ab2aee5a9c44f44c05b039695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

