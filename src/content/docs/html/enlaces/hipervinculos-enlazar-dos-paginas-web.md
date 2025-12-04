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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXQBAUYK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCu%2FSdz0Ue%2FF9QrYM5QLP2jeFksOh98T%2FgRXwSVXN2K3gIgeERBWJT2GMJAzsFj9SZDv4p4WCgIffecLRs6H0wlGhwq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDG%2BrougMky%2B2c7W0zyrcA%2B77P1naTwH%2FDEmZ2sMciiJZazsu4CQR%2BAeDD18jSuJF4ie0O5sU6ZskogxC66wtoqXZiyWiF0S9%2FaG2GLyV8JVbMNOGr165JbabLglJZQjd7n5QcWQCw%2FVAPmXBn%2FUcTczk%2FbUKPhuX%2B2YEw1mG0UFiU41a7AFThOfgU%2BYEOejty273dd%2B0K5cSotZ0NvNBJGzH30jQJ37LGsdC8LJ%2B40RUXd%2BlqXL05IZgPEJiUTkDixC7gG82pSe72tB17lQS9tqdVlyHM0%2B5GcCp%2Bx7ju%2FG1XJZkZmrD0pxYw7o4%2FjKEjBg9IiPbMAfgS9fMrGcq1wyWh8tA4KrPh4%2FSRdNxxaIkPHSBTfjRwUoP9rBvoHqlCVbuQXL0KnAjxzM92YcFaBxsVI0jq%2FERxlWqp3uzdDImCncCTe4vs%2FiNDIdRxJI2XL%2FRdErm7J%2BBa1KEpsdv10jGGRhQEqMjDEzlOk7Zwo5KsHvzy4DJen4eMj1TEbKPS99M2YVbF3u6n2KGWCTjrA5qxLrVa4Q9AYhn6e4MFF3eifj3CK5ZtnkTS6O%2FagfqLJl60FNs3jPxLCUhyADdX3Xb8SRL9YfF12yRYa4VHAM6xsg8ZfA7Ow2IDB4tBM%2FF9PFapowdbkOniPHRMK%2FmxckGOqUB1CC%2BlwfQVLHVj8Yw6lzN%2Bsxjk%2FvnK%2BbFK2ykOSu3mDR1obEygnadtl55p8s2yHWfDyFh7KXLNs2UKgbaTuTRCriL6b9oYk59bdwDqyit%2FOgi%2B4xyxAdAmPPR9PIQjTBt8O5Qvg0LEn%2BoVZ2qD9Icf8SNIhDPLloZQfbmSN3SGU70M3%2BR9AyWx0Jhbls8lV1GYmjD6Jqo0G6ENp%2FEaaQAtQkZp1Es&X-Amz-Signature=fe3f361c8a51183e8fa3236cc13d41e46f3cfcb4b91eb702c59dd2a9369ce83a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

