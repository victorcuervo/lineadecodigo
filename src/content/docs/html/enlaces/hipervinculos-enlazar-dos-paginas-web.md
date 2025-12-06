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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJJZUS4Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx5ifhLTWneDSr%2FzK2dblhmc%2FThKZ%2FcfrUJmOC%2B50sLQIgNcx6FE5YAJVCUYmjONlsU51jK5N16I5M4ziH0d%2FYOw4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKfuwaDNraFwWtKkeircA4dy42FtGRoqKUyaGp3siqud1dWPJfNW2arX9UVimns6JYIxodRkp3t5vYHjje%2FvC91KfO3XHk3MOtSUFmqU4%2B6P%2BarLNWB8NFQcDhtc8lKRov9oDJ0X4p4wRUZJ0wcEBDzXh1eXOlo6qXRPlf7zuohbohBzAsYwI%2FNDkJpBQkXHC5ksnpEIXfaS7GyxWsuQ1IlkuNyx%2FBNmRhv8t7eouhxcdDuyEAEwKbTdU4JRm9xUYG%2B82ftCDwqFGNeM8ZZ1RMwXzMhe1Y5qwkIppL29r8AKjDR%2BCeBBsk7gJR9XDYqh2ugNSmG6Ov7u%2FoXuJnmDL0JkVGNMGbtjV9ULSo4QJ1Qc3D55mkuG1RvyCGOGRp9N6uZFT3cJ5nZ%2B9he4px6sm0ALwKr9bsJ%2FMZcjrP%2FS9enNN9FQgo%2FHoiA8xv%2FYrZqdmsXXbt4rz9yaaAwAfEAelHM9W06zUvV1AmrlGud1QPaHa2Xyyp02MRog6XFyR3Lvg6JbLEzWH1yrtNLJRGO68E89OK5iQyHhXl5CCpH0m7ksxsI6dDK5Ens9sL3qzSQY717xgpm4LWTRsFzeDg7jKdNmxXxTi%2Fhpq3FfyalliuLnATSjLDZQtTHD0%2F06mS5DPnn0iENQ7NfY46qiMPWm0MkGOqUBgjFhc5ON1u24PGjcUIoWdKw5pvB3WgbVk7HU259PjmpHXw7%2Bo6upyUpl0h0Bgd6SfWEzrz7whHACeITrs4JEdShGrx1EYtog2RmZhwpWmkdjgJGgDV%2FqZRFQFPmkrIkf0VM4sRmrxHZMtNHqnaCgtyQ%2FiLMyMiFGv6NI%2FJpCYe0lDPUNbg1WgEnl90t9sIddowURxM%2BSU8I7H7lUekgLw9KQTMO%2B&X-Amz-Signature=0abc47688acffd2f363e000605af921c5db83d6a6d16d11ee91aee8f67fb7ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

