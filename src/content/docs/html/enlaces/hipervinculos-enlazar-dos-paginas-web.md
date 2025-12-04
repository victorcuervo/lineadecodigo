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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P2Q5PWX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdUKrfhbPwioDC5uZr%2BMa3Eo37gdKhJaKY37A%2FL9OUaAiBVU9H1E5ilasVmoH0PrD0ALtmSdUDmPIZbuK4EGYEkpyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMtXHvloe2Q2XvSr60KtwDcK6xP42B8%2FWGa%2BKkKdP3VO7L5fxNasGpuB9t7EjbgL2dZioLAv8nPiZo4XvcP45TvUlK4uphBkk8uEI8XOXRCbVffRrh2HA6F4es2lMGd%2FwtJSTljJ4KdRpa%2Bu9zXejT8KeMbg1x2TBsENu9h1JCucWzaygkvyUlqdyNETR4FVJQRfSBxN6%2BiXumV9quLsVFXbmASmnzGBlnDXqLqNOmEAOUjQjd17XtPs%2BGv2RebEJBlw%2B8H6JgmL%2Fm9YeQi23jzQ7VDfGvhMD%2BC0TS54Fh6VngIYkp3HRtqajJmZ2fWs01DhEKfaa%2BYlxGIMcAgAvAeHdz4gldNYLuXIQA3T0IPDZrTlP7ZoKjQjtUISimrYHZrTIVjYkbBS368PCiuVBttFxgn%2F%2BuPUb59C0o8oirp3Kq8Q1aJ%2FlI%2F0X7jOFGIMItj5w%2F7LCT3fyUWwe5ZzVhufOska6ePz3ktEgJAnC4NIXJpduPePBD%2F9W01dXSHyOWZXeKh5L9ur7ZZ9kp8QfG6oHTjNkx1XwGmqAKLCKsmLisXBJuS5RbKo24L%2BmYqoTCQ5u%2FbaC%2BElEM22e%2F5FUjDd7Kpwn39gRrq1vjnhOWr7gyJB0CepNr4GV3oHf3qfkYCWaFwn%2FnQXtthk0wl4zIyQY6pgHyd3%2BKBsMuaOeo03z7Bp9RIAMEy2q0w1cjp6uiseQyddnAigVWXtKS45DjXZFiGvHQ4Ma1exoMN1cUgsN6%2FgOuyTqgi4bciOzqoHaY9gExaa340kzgi3cUhLAcBT3kLrOosdXJEqVyA65XVrDSTGOLNw2dErMnv2BCbAo%2BHcybXZRmV%2FZUtqQhg7lAfonAqEl%2FQ%2Fh6cWRQuFz6EefIO2vkJBSHOI21&X-Amz-Signature=3b1ddecc41edd0dbabb7c35763c5f127a969f31dc4c22bc86167a39930b61ea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

