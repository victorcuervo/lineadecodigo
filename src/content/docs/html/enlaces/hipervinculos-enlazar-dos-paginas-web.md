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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7EQUIRR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZAWu%2FpXTSg7p7Ye8TuMIpxxO79Ne3NZgneaDhbh9oEwIhAIHRknr3AUpj%2F1NdF7e%2BuQnWBmsUAp%2BHiG8oNbxfHverKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwph72qOMGL5jFaXngq3ANRKjxr00brDNushm%2FSCGj16mPHeweUXQYtitG0FZvnwtn947vlOUyUYwru5VQAXtJ77tLRfqyfaaEqC8d16alS%2BqyUd2PsXwHwedQADIRnQ2mFcuvl9xVvNNDcEb%2BeyFdja9LJDqsatqqGCIJ3jIZVaZdqTm14RJh9Jlvb%2BW%2BoOcKc5eOy%2F23nQ5G%2FDuvFzMHEUdggHuAbRymM5SuNmPz3umG9J%2BQAgNjWjPItuFWtyLkOY7CODEwRmx3miE3rmPJ2cOQFfnZoDBk5JkGLHIIE%2BBm51OiOqXIkQcnS6vBIOcd8WrjPn7CQdPDed9%2FQ6CpCA4eQFDVL6Wz04XCZ%2BQIozaWKuqrAEw1NTepVwj7rzgavX%2BRjrUC2n1A5j%2FDcgaJo92F7J3NZcE0qyB9cYCMDhLyaFeZNpFGgoMsB5EwNeAthR5qcBF618GMMEqvZ04IwnU5FXvpaHiyqRTVzvJo5LcTEirlvTs5ZEm313Bdi5VmcE7iidmuXw2R1H9taMXuL4FYB0m3Wcry26PLll9Hh2Q3M%2FETAiBFEaZFGfo3pjRvVFKakXcDeFP%2Bs4qV4WDOYa19aV8crmIaFPD9oJ4G96h12wqWdP%2BsCGo1tK1D%2FOuQbHBZX4mdsu2TVaDCI7dnJBjqkAYwr%2B6qkjGe0SpxvH3EugdzUFotjXOHxYB7pHmWyK0BBYeoWYkSK5PLAF8JVw%2BCZWBCGbUYTIBUc45X%2FDtkrs1H%2FLhnC0GWQh6ZaUC2pwUmJhZ1xezoVr1XDZhD7FCX5nlQYoOeoqxC3mea7WoTufK%2BqrEgWTNVN0oJEbCVAxL%2BTSRH%2Fo54v%2BpgXOCrMSDqkBpw7TS5VbgLCENBMNKZuUd%2BhkhI5&X-Amz-Signature=331f2861edd927e3885af69a12de78b09d79742a0a76a8d406bb6df4ce7752f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

