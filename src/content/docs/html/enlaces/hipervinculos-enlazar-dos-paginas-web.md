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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKTOTH6N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEFbdQ3rh8rPMgIxMHy86wm%2Fl5SGztIxIAvt0A8SxiX%2BAiBiuIVYIjOJ8VdK2RhzljRZ2Mk8RGd%2FvwQ6DICh7FgdEyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMtPSAI0Kfr8hiLA6DKtwDAVlAG6umDu8MuB8q54fVbjUJbdTR%2BpmwE8Ek8K453hIiymsNr6gSDGdKvz1NY8WOCSCFe%2F%2FfGG0bfMjoH2e5HcVdPqA4KnhyXnpax2TPbf9zJAPpTMtuq3TQKIJc2dm1FRfK3TYHAm4EESEgZ%2B7VAUW%2FpX0SoLTGoyF82uWQvGAe1Qk6z2BFDIUvFeer7KPPP8sZGBJoMiWTbRyNKnD8%2B548jGl1ISvxR1rhpwx%2BqZpnA6NMYBuN7R20fdwvQqgSOXZJBgQLNZTGU14TaUNmmvEvXLKTxq9NVoL%2Bj4f%2FXuGghA0bLw4bYZzI3zHmMHVQLkSw9Cm1wzp4iTxxwD3sv2eW2pXC9YxpREO7LRpq%2BTPu%2FwWb363MoqQYd%2Buu20tuU9UEsE6onMhi%2FT8f6N5VAZw9EBXDXCuCn0r%2BW5GIprbgKIM%2Fco9bn2Vd8E%2Bj5Z2CBlw6xlQKdtnUzXgU0wB8iY7ts26RmsaXBdpeivjKkd7AGNSXVwvd3Bb8ChPM3wnEBCl3AGbtaVV%2FrkM%2FHfbyq9Jf6HotXabEJBDG864EfAfXxYwyuytfQc%2FvkGYREMJhqKfrhBMuaAW2GlYiSF2U9PYXn7bg5h1wXulRhyaTcex00Bjn%2BydIS7%2BldaYw3tTDyQY6pgFIpbtIOP3k3M%2FZDOOwF95iPnm3oMtcrqSZnuYXzFd26LJOj%2BMx0NBY%2B9MYFiTIi0TyiWqmvgDG9ISyydIdK5%2FWfzNPe%2BSfc5myVjg6K%2F7j3oh8yIHVb%2B93%2FEn5kqRRdxEx2u9UcO82QpXLHBnv%2Bk4fC6f3Sfb7bFNBULA2xROQf5q7qiIOawHUiitrQT2XPVPU6d4m4T8YSleuSGMNpwLBoYm88Clt&X-Amz-Signature=86996bd7d497cbbc99aff4808c144b718e3f6bd3f2840a7a4e4e19de7464c10e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

