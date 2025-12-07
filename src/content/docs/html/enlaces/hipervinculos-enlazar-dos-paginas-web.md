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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KV7BSJ6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIhgOtaTzI3XSHJdSLFhKjOcGg8FOOYcgJpfRYEhRdzAiA214xHs%2FAKC99Dtz5s3aZE5Yt5NX8kaO2VYNf%2BjSw4HyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8LpAeVgd0zKFsV59KtwDCloiiKSvHYeDCfz3wQH02WAefhW8HlEt6iG%2F%2Fda%2B4tiB%2FyxH3q8DaT3u6C1wDFWl6kdJt5H5NNg15jFdjuDVooT8yEbDXbO%2FMwcYVddV4DK%2BXRNM3kBTz7Nbskde6ttaTeWRUm0MtEY72mrmEQsmgu0JnR%2Bof%2FucPuQuFbHZ9jcR8Vr%2FS0jhw2YWNEVNa3%2B%2BGIrxL7YQUMQD%2FBRmrpLGpHIJgyfibGeybUMlbYO52TCuX5Wu2y%2FkmJeJ74KcYZj4YVjql3uyp1QKYywUcjbLKG2XD8ZnOwZESuWOoKaQsMbqx9Ni9ojzB2MxRwZJHx9xkcnYzbC0ofk9mepmi0Pnr50ahXnZyLHf6Ow7Y4VgpSnOPjNDQ9UPhKZKYf9sIi0ecUHNljwq4HxG0FQmRTI9gqISehHHqCE8PPWwLXJFdh2%2BMRolhkDkKO%2FSVN17DiZPdya8yVx%2FXwdyP4nVluwsrzwpCPrKfjZffczIyEYur1EVFyVak4py%2BnxFUC%2B8fyx6AOodewSwLtvLsTVqQRPJyzv41z320qVXuH5K5oiRjeEkYrc6mAvlRGOFevDdXcq9kPqlw9nGky42uXmsrJl%2FFejC2xOq4LEI10UkNOwsQvlgBnEZRA%2BC8pT5yZIw8P3SyQY6pgFxVvrKVvUfgIr5MopF4HNKDRRIq0XmkQhWmEULfBrWY54B3CG2qduBntb3Uu5fAFGSeS2tnJL4emkjZASVCgV1h%2B4B9DuH5wM0vLSOPFH0FGdSUxygPqMWb2pfZPVmgLniUZmKllL2BaSoGk58fVWFUtewaG33N2XhaH2lPCKwpjwUdW1yJLh%2FGXSVYvc8t6EbyKk4%2BINfSqr3CmIU5GGwyh0ZJFjw&X-Amz-Signature=344c4bf80d3e304ad277d82400556e91d6ea109cdc569fe523ee4141c7ebd633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

