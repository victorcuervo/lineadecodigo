---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UROU66HV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC3Jn4hc8qqH6422lE3vCyDQuWnfmF3VZ%2F3zZe1Z0u9UwIgB%2BPiAIomc%2BmNW8Zc0hwDK96aVzjF5RLAwJ4oAGRjbMYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKJBn%2BEJlYdJOa8qQSrcA%2BvL3QuYRPN5RHt8j44%2BCCcf2bEKZGBVF7esL6Rdh%2Bg1zM7wUr2SQxjyuRXC0IfsAf5QQFg8UOYgbD7z%2FNgKy2enYP%2FV2C%2B%2BnfRpFPbcYbEkMueiaJ0qmxjkO5AaiMiF6lKZerAuwZEYuO69M%2BQkQwWHIpdiG0ec2fzXhBp84Sa7qhqpy3clnk5MrVYGypkn3DH1m%2BH0V9mBg19jeNiUdYZSEoWwJE%2FcmsogV3B4iVfGTyUPRi1%2BIJubo2P5QgFqZE90%2FUfYMaWgjbGFwlaSpsfkNNdi06HeCH582Yz%2BiEu%2FdTTYGE6Dtkuu0%2FvZ3KyK3n4iXHWHAile63NeYio4qlsbT5y9ZHoNFvvRDJI3IQiwIdX3EZI2S0oebFJUdmb%2FcHV%2FjqEITfFW9RSeyVnAp6PefOIuALXtyF4uajoQ2w8VIGQHaHto16FxSKRyFVvzvIMiMujXkjeYQbsaIkYBN%2FUyvIwVm15QIs%2FcynkClcMC73K0VDpjQCYmCqiKhNNY7Uc8nSj6O%2FCTKRoY9umkxejYS07mfJ0K%2FMUzt5g7vLE%2FvEwhDyf3tibpBeMIYDXWH4sFj1KLn1EBUE5alStlPN%2BVP6wIGSlXGrsdEgJGNrN3feg%2Fccv2DXfIgLpAMJ29wskGOqUBFce6a6SeBEdX6VeswF080RGMolAW5TeQccMucaoKFDD77UXyxY9Ygn7sEOMqar%2FIKrVoRinNaiVKSgAjAICh0PDUVhU3S3G30uN2aWYDM9%2Bzrg%2FA4qEwNhXQ0JbNO98t0XC3%2FIjJ9rERaEpcYP6odfaBen9qTobvS%2BEiNS9B8hvcQKchcIe%2BdhcjQFzvhEQxp4uJukAj5QbaUVhJ2%2BpQc%2F6g%2BQ8B&X-Amz-Signature=dde5b52c1f4e1625f716e7f51ffc9ed0f5d092ffd6d1d16fdb4b98ede5c72433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

