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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V4NNYRB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw8l7w1ojwx9y6kAwdZGVt5OOkD3MclCRyZLhaoAc7kwIhAM1VRzi%2BtmzNSRH8JhcBJwW0ZupGGhWAeq7Zn8%2BgKfvTKv8DCHUQABoMNjM3NDIzMTgzODA1IgydF6jI3aRgGAI1vdkq3ANrmT9Seqysfq9SZbWoAP78oHVZ0kDSuKdG3jEO0GRW7vglC%2BnJVvuT4a6b8Xvq%2BUlc8XpxhXxxElRBNERuCLCFYOAhEHhiWJzoWP3bQebBS%2BD8K6D4ZXaRpoGHbvoUkFesKCRa0YMqLtWlF5yGA%2FUqWxXLm5buFrSsBXIf7hbKhLV7ZEmPobLTkjWpNew73nCYpnUg9uoSWqZO3Qc2DA53hA4zevHTEqtFv%2B0br2UpJgB3uaFj%2F6ntL%2BGkL0MKIxmCF6zdEEuJqnbYC1Qj0gcCrsRZtu3y9MTeRfG8vzZ0fLLjYSYIAsVAua18oXRgWhSyBjlFkFhHS6NJeQQ8wczpLytNCM9HGozZJIy%2F3r950MWt9uWWdT9UyFnpvrbCVnI8aQfrX4%2FyzJ%2FX80D6VpYbYmK9zg%2ByrpOmfBdSyk%2FbhWN28XiOZxsEnBdpOoVOVdmtE15WPjfs5P71qZldOdmRab5xYmYSdyHdaUTlfOEmLMyTzUDHdE7IkntqitDczcdjk3ODcWMlFDBAgrPEHfCy1L82X8%2BH5Q%2BwD3ch8ntAnx%2BKWvyFy1%2BSSrvZ38bG7P6uwWFyhOWIK9VntYWNetQw5zw%2BNPql9XJzAyyBJs5qILko10ybkOcHG%2BjJYjDPptDJBjqkAbyihbwcEJVM%2BPfOTLKuKFf8d3rUDwJC%2BgCMmDd50noP6fpekKiEsk68wX%2B479lac7P5Yep2ouAUi1xHBgZdnd3JIIXcuW8Q01fmCRb7IDzGrcTG168ED679pYcLuM2OkgK7DNmH38JqMU1jv%2FzVkGJuu3w6bk0Gi1Hpv3RehEc6DIb0TcoHtwBOxc%2BmMDdeNUQiyjc5bPWtqEZadwmrnLIx0lzm&X-Amz-Signature=cc514c1e56574ec69c3197375ee9159577eb2b4287fb57d59176f616f96ec7e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

