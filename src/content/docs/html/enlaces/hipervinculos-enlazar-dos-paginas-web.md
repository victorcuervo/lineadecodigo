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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646BUKA5W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE24eryFS7aX31GWU29VSIper0vgzWiNEl6e7nfBtUqXAiEAx91P%2BRycbCGoddX%2B3uBaNUJK78PvQU9DwhFIbkGXfigqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpGpR0V3QsODsuB%2BSrcAycZ8%2BoaK8WX5GbCi4VceF943zr8xZCbU363X2cf0mJnsbIiCl3%2FXnxT2EcfOJ9yD3FC14uIhYxQhZUj1rlJuVELPBIjC%2BzR42Xj59sY1%2BFIfJUm2wibAQA9iP3Osl6dEoRbLkBq%2BGIFqU3iC6srLZzg8WVQYSggggTumhv7RboCoEwYtm3qP9LXUTzBm%2FgwGn6oYg3dsg7wA92FslxFsJXf4KAl1vsq8DnNORLaiX0cSjmG3S8%2F8cQyJToOP87GQZILqQklxeHmnDuB2GFEw6b5crHhTnDaj7L5vNkP5I5zPkIdHJmjYgvE0jO2Vz5R6W6cU1Q%2BwtidSzY7j%2FMtLHyS%2B0fV7R%2FQhsKLwDvp1NFncHe2uNGYgvmHWSucAhapDVzG1aim37SRvdTbG%2BFpxngEvGnlkz2xPv3f%2BXN%2B8TYlX8ypL0YL6MBqtRyFD9LVK7%2FZJGgIW075SqTKcXuuCVhUWxjK%2BBhC4ohieauCMoTW3s7p8BpHzskyI0SfmynP3JmVDrSvA4WYSq3RZ8jEzGpoUyyabUaK6iVpxGKUpHlo2ZRPQoNNCaiKlRQp4xrvHTVV5FcSqzoqnXg9mX%2BAObnoDUohbD1jeu5OiqLrfBebIm%2BrwkV1JdI3%2Fs9cMMX90skGOqUBtm81DqWpTPtd4J7Ss5uboz%2BDZ9OjCK5JcUP9O7VrWvjQCQmWOKRgVD24lQGjRPIoYVYrOkiIzwDZHe7BJD%2F1LUfbdiepISqWoA5fW8Cak69kD%2Ft%2BfXDefJS%2BpCzVkZvB1k%2B0s6s7FUWnZRB6gdPMPCJKkD3ynASCB2Ww1KbuUmGFiRrDRADXgEgW%2FChLBufCsIjPKuzLiWL7uK36mwhEkgzpR7N6&X-Amz-Signature=cf6a726299b42ba4c7885e1de0ce1245c5602a195f06a6bf4a06bf155ff3576b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

