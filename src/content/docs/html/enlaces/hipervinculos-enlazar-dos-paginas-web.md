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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2OPGTQD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHJzotaOCrEa8UaVsxV9r24kFODZbsYYs5TDarqoY6TjAiEA3OOsIsOnEQKZ%2Bdaegui%2FK7DeYektfjYJ%2FbJxoyjG6Owq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDutupaeAhrEWZCtaircAw%2Fom2YHxeWJWsaStl0sStssTO2MsIW%2BSPx3Ba%2BdnZuZjb%2FDOYeOsPJlXA2rM%2FZUX1032L5fED1vmoNrk3vnGqxzxCGGlgomIK22pfd74nq9CwUCRkgh7mUt3B2b3JsD99X17tSXDNo%2BXgaKs9a2hnRLOA9RtWo28k4eKRwGBS51r2bLZqrWw1ss3ncfEkCV4mtoufGUAjtxjU9S2C%2BjhSNI44rz6wdasAKf9HpY%2BfAkSmGw6Ry%2BbJKkr4AjNR%2BijGlGeVuVQB2iaSh5DbucsFHvqDjGnGyCLjzjVz5rg4jBGXk6XdaHWTM%2BzfOQ8E%2BVSRxy7zMfPwOG7aj8jWGWgyIISfj63TjIa17gKhsMqNgSaGu27UlW%2FLnLsPpReQ2uW21D%2FjeJ8K5DConxWLz1K8NrgVw%2BkV%2FkWT0RxUeAm%2B7ltGLYAAxw3AGswcpH%2BLVTf3Iiwu7PgMOQ4KMx4hYu8bngT3WrNH5B6Mk%2F%2FhdfW4slVUK7RibTFV3Ruk4hPtN%2FIhMQ0FONG%2BlACGdB20RDMDV9tyRbkIyi9YiZbNEkNYMCwQwA05XyX6dZ1fgRG0k%2BVhv1yHhcE07h%2B09Mc7BImSBtVD1N7naYL7rfAl9XGQyAfB%2F8oDqkDI%2F6ApmYMNyHxckGOqUB4yip6%2Br1eobubQbri%2BVykXlWO0nrerSTqFKIlRE4sxmekWVW33SJWG2wWwCnJYJvSWcJFXm55QH%2BjggT0D7NC8IFPi9Xd%2BnsQqii%2FayqFDmCKidGjLsAKe1rAxoISgWyYe%2F6YjoqRHPGT5RejRYhwYXHAqQas4vfjVYBAVujJfOCM%2BuItGyjozp5p5nTmxUXxE0Pa1SmhmHazUrRGcvibyobcvvv&X-Amz-Signature=dc8093192021c21566ddee20ff2cf6130dcb27056838584516186bf871cb2468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

