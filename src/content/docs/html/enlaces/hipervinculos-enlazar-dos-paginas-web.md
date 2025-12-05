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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUPLLCR4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5UNCjzT6%2Fk%2BM8IXq7dVD5RaCC2NxMLLL%2F%2BtM2c2BHOgIgaKPHEPwN8O9LsdKKCMLOwPHU5EFQBFjDeb4jHnS89Ccq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHWt5lH3Cp8y7EqJ1SrcA6nlWzgmWUoyDAV%2B%2FzR9WIc2thZ0AhXCvK%2FlKp9K7VfwrkNNRVfKbtouA0jfOEJKIX5YeU75Q2HcotL8bbMwt7Izs9tSDqlkdWlmlnQ9H5EDnQeLBOYyK5slhYh8p9BUHP9N85fEYeFN1Eo4h0njX0j%2FKWzM6noTYQH%2BqeF3%2B7z6Nn5ekuA%2FUXSkGCB0DR4j1Ctn%2FslYGRyo4gQJcsFo38K6ns4oAHiNFkIIHJ%2BbEeaE6MJ6X9BJUV8l8%2BplptcCI0jF%2BIp1bDkPJzTJ9KXYKmMXzd0cc%2BN4AvFi6MVuUdtBRo5kVTuUCYb7kMbIpUE4CNkYDxcunaq0ojk0mgq36VK6q85nNVcLBLQnhWAGZ9APxOb4MVSxau0iclSnv5kv2wrZqyT5atHlbzSfYaaTYuN6u3TuIFOUwC%2FPKDJpOaEtjp3NST36nEksF0YAZi8JYZBZhHMmg%2B2MlSRedWB2AJXqcJtywhG%2BuFVFKCyYuVdG%2FXCw7gZ8gnOvAveqB896vVF7onf1CHQ6SuPClxjZ32xBUk27GPxVdig6aEy%2Fyya5mBR5ZLWT4WqhN3jaOjwco8DccSuLWsFHOyYYH%2BmJTrDMXsgoorNEgf9Yv0cYLF%2BgKiC6AYjiZO7AdOH2MLyMyMkGOqUB9kmPh%2F4WZIR%2F06GHQqTKbBvrj7MgkfrH6wHCM7ig2aprMg7RmkQSf1GsW8%2BSjobooarpbKqJfC1ei7NCaP1pC0SOdWIjMatfIhXYMYwT%2FFXY8sDzCrutBVhSki%2BCkFg18eskgOdpXMtx7J%2Bldz123lNMxg%2Bf3B1Be6i67ENVWBsc9FeNsT1TAdtG8A4lPVb4RwFfl6o8gr0I4v4%2FH0aKOqR%2BG8KO&X-Amz-Signature=5f6c13a9e59088912f891892ef15abfd199db31bb19b6c53c0ef3c6097466338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

