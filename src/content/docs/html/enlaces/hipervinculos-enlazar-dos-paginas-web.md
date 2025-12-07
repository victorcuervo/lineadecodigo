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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFLAAG44%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB3SqVMFLSE2Uisx%2FSvdwbC%2BoC0EPh9BuHrH3dm8qXwwIhAO4XEd%2FgrPf6dLsDd1mJvQ3B%2FwKbHl0mueQjzBuI0THnKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2F6sV51Q7KVt8QIVgq3ANEwzQsY7DNp%2Fx%2FJuyOHHAZMZdyO%2BhLjjUudtcHofmFryCMsnL8LLSJdwnh5TqbHiN9MdOygnVJBvO%2BtgjCGV%2FLMuyZlg0am31iXQnEmyyGZusJqT5KgbBa0qWvGinXDjajZEkwNJymjSf14t3PWxG0mxVdNAwOgSEjF4Yz0GMMCwZvEg37wArqCPCu1I3wfop17%2FqY1dSb5lM3ylhabSjXqMeZUYbMbPMwgskbN2cRowea88cN6bU%2BfXj1vEG36kSa0GEyjIy6aZtip30K%2BDhizOZYRySmyM8ccMTQy84lOUbeBYbgi5H244cXFVBrEOg59WRXildCET4hF8SP8optKz0sKfZiaRGEoCEFIxY%2F9c7ADShwdPEbfE6W8jMLJevvoX7Ks%2F%2FpDy64msWeoc6GUorLm0VeMEvP6h387v3iBim8Q4emXhjhT%2FEr68U9Dd60OO0btf6EscjIwKxErUud8gEVFWro3gwV8IfPjTIf%2BLCfYe3fDtnkJ6XbkbDNkevjCSMFEyEIvJPjrizBG7L8hLXUo4ehu9JvlmmPyCpD4Eo0cuisLyiwAVHCwxpWm%2B%2FJ7LJKVqK4ZrUkOt%2FGLe6ReeSDOJm5hsc4LdysA5HFFrIQkOEf%2BbvqjEvSNTDT%2FdLJBjqkAZMS7mVDP%2FuXI%2FMYcsxUT1l6Eyd%2BhrkozBhGBYs%2B5%2Blnx3t9SzeKp%2BHvCifvfBofDsGRtHVObqzHMCGlHF0SEvudY8lNdB3blkN3MZqKbNEHMGSqNGjnRx21R%2FrN79S7b8GIVkI1YNWUtYq5KAQ7qgsLjKyjDmDgaOpPCKRiBAsyKEYJdRO0jvJZXop3J0G5R%2BIoXaS64qT5PcJ%2F3io08qFwvQaT&X-Amz-Signature=07a26f6c4e4085b97e9421151541ba8ba584940b0b0c79f006994ad84457ea1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

