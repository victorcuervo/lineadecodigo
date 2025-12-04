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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4E3AKYG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGnSBUSH9spczqNcEDj3qCkxKqKGXKBf64vuOzRYtkR1AiBHF4%2FVnIaAeLjkD6SF0j4HdbvCQTgnCi09lG2HiYas9yr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMZmoBYOCBx95qbARSKtwD2rsgCo4LAbrPqpbJ8ZgL8ENmpkVUD3Ztt09mVzObORUDC5ROBcZQRs55h%2FraVduvktjZb%2B%2F5Dp8VkBZSbxP%2FiduEt1hTbE7ZZ%2BWRb7FzrbHrdjlHYy6bJK97g3KQ18RhjCuIYpFSo4QKVpifNUJRmn0SLw4WDgBABoyeOHPvcXloA2T2g2tshF7u9Giw5hqYNmqrYup5CQW%2Bx3rh%2FNORLU%2BN6dMMDl9Tnh0HrwJaHbxC47TrObYOoVlWM29OHbYmJrbchgrEfAy1e7OnOhz%2B%2B7nM1yiNV%2F6yV3tNoObb5IKdViUFUqAn1IRR0VBeaEhmZ3%2B%2ByzmAH4xdRacm70heGAF%2BYP5jksh6VjegaaMIS1Qr2xfC1Wmn3pUGtA7wtt6dzlLToOGJqUlGusZfEhwzy76BFafGojXmXoQziz7P5BBvYv6GxH2NwQeTqggrxy%2BAwupaSZovMfpOvMAlgLQwNyq9lRZOKBb%2FiuhZKk7glTkTU5kfOVXPWrK8nTK7fh7Dvk%2Fzxsio8xzIUnsHXkjPkX5QjvvzMXpWqbvk4rZ%2F9fZHXDRhqT6CedDJ0AT0FNPW%2B1hAQAGqxsYWrgUOQ%2BeNgbCBC%2FRQm%2BBIJ6G5fjce%2BhFVqxceGwbCE2ypHi4whtXDyQY6pgGhG7v0en20hdKAGgy3oSBTyWEgZC0gmnvfsv96nySrNF9zvwztYlhZqWZ1zlsdSX0cDNa%2F25ydqaj%2BvN4qM3OxlkRUtOuW15Okq9RPamcAanmafCW%2BLo88DX6ZcLuAjJEy7WNZA4ZGSfXW%2Fp6T8PFZdnlJuagiyF3zAD8R5NToccWbOpYUTacduuQ%2BzC6xTlgDa23ciz4WaKgJ6ssqdr8xOL1KtrvO&X-Amz-Signature=982e629163b98139b9ed1e1e219d6644cc8b46d5ea258b5ace20aabb26622b2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

