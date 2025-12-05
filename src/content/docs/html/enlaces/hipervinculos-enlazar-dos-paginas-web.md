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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6OFBJ77%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T041114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu4c%2Fe6v%2B%2FLO4om3cg7gm4VMfE6RGr4pj6As7ud2zvXAIgRK5%2FYtCiEKpuVuso7IcqVNXNBi1xSv3Gth1uDzMGT5Uq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCm4D1Xp1aYKQ0XrEircAxjlKUh7K4u1VHEloJKptyP0DhgXjLrHpDqvZre%2BHPz%2FrJzUUy2PnhwCtDafURMGFQS%2FlTSD9d6qIr3%2FVakzdBMCoCc3AAxyAls6xR%2BJQ5YzKVhOjx5DJaFfz9JV%2BKkTV1EnfaY3WYk8gl10luGey%2F%2FIE8pmfLdk%2BIR05P%2Fa%2FSFw7lXqtz8%2BoYOW3FX5bEPvePsKnizaBPcBkmuOj457ZOLC3xowOD2TM4ESM4JDsptkDUwodgDaEfL0e%2FZXV3vBzUGzjA4MRIAHUv51kEGgytLZ5PDu9P8waebtNvJKLQqBQWLd%2FmYt8Q0XiSje3N1r%2FguBLzMyeKzw%2BNPKo5RgslYCTcI2iMxGZZQ8sxDghQZ14p5fToGBGezfhq67oFepMVFcbtrlNHlqcVxsZQGuvNA%2BxVHgsVKxlblMXWkmS7ELcQtFNsNEQCUw9753xyKjxe6Un6EAZRVZfgHeqcQ0b9ksNH%2B0dScoPwdheTHbYGRB4knzNy7LTIkWIBLGT%2BCv32xK4Flh6B1dX%2FNQkuLDrD0aKHbchRLExyoHBmuj2yLsqaNE8l6KQgCPQL5IKW2G8EglmkejUpVY%2Fbffp0EWxV5muTnYd2bQHhbpRBS%2FxYM4Z6GJ%2BHKpr7Mg4WvFMK2lyckGOqUB8u8U%2FeGN7G7t7LcyHPuTk%2FI48nUbKU3UHe1obunOd8xyrHgOeah8FQiKh%2BvLR0WoCHxmF%2BTEYaZIwxVK3mNYLePm0FyV44lE4S9cZYyrBB%2F1FB%2FFnkt9%2BbdsJC79i%2F4uiNUtsFePhSS8juIBuQnjsU7yIiwwx5Voj2BYYmiiMA2YWbDD4ef%2F9jEG4R4IgKsQ03cqvlaxE5oqLsn30hQs6Oc3mRbk&X-Amz-Signature=92e9e1c25dcd7c371df1e7a5a24b5d8f3fd274e8ad7ef8d1084982d74ff14b25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

