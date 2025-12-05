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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65AOIEE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLmWi4xkxIB948bLkO2gYyffHEMyNefZ3Txt8UzGBUQgIhAMK3TPwv0g14qLLUAXLtRvcf99O6xMLiUWJeCjDxrLdCKv8DCGAQABoMNjM3NDIzMTgzODA1IgxCiLhX8%2F6k0dtWR%2Bwq3APkt2S7qP5A8hZZwpM%2BAVSK%2FXXw9HDmFLn5G65qan8T%2FviWVI8hF6ptvfCZsESVtOyvpYOMVvcKFtkmVGx6yaNW%2BigLOzXLP3ZX%2BCTqlYRZOTmdwTfQfuAx%2FhaGcaAUFsPKN%2FlBtzIcxFhShbNRLtn4%2B1YM0unwd83%2B%2FdopYo0JHPOZ4qOx2tIVVrCMM5y5gspp5LdPsAI6vBikcTmW0fofpcXFKJNAg70oVKocL%2BagbD0y5FjJlXjriHpXRbdF0rFputYg9dySjUVubeq1W4Vp0KWXyK38xsRKoWhFdYhoTGRJX0N7CtQ5SJhL1yETQyFIOAzxx1JHaBJRZkvkZVNNK8ZoZcX2qnFpjQ1pZhgDiPGmz9reEoMHSts9g4r8pjTTXQ076kTwbaZKh0XnQOwMGygRXfb78s17FXwMxDeElcPUJvL4IQ75tJc4h5GKryz0eOWIJWn8180LDuWoELjDB97JG3qX54PCzyxaQxV56%2FHKD8w%2BTf4BiI02eRDkILx1sV9jHzCuZBK22H4OahxFS83cgSgLxGDgIndE70bHC6XE9DMGe1ast0sZv4DIobreMzQHBNsTBhXegtSiZNOBq9unNY8eKvt6%2FX%2BknjdD9UdPouTW%2FzZbzz%2FnGDDf7MvJBjqkASHvPoKH2AB%2BvFuJymknuH0qt%2B%2FQbf%2BdWj%2BLPEALy8VeG4TUlLcKvcI3C%2B3JAYmwppfmwbDTK%2BbAEG60FI68EOWAUOChAFuU2AaePvwwRLQkPdKuxm7TivmieZLojlQ3noKfBX%2BovHhxXS7iUWdYtLwIX3rPMhrKyUR%2BsUSCXL6GS8gq0ia%2FLWVWdLcgo0TBZUfCNSIIhJbjUe%2FMnpStjAAOqPYn&X-Amz-Signature=30a35f94c9aed18f6ec8e345b6339b84e8c809cf7b4200a4a80c7cbf97eb614b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

