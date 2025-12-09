---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SAWMA4J%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T234818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMFdSBEyhRNA8fEzrRdprL6mlzLpIqMQdIXQW9MjS5ugIhAK3oZvwY7QpHdsGS2QhXm2SxInhy27YxGX7bmcP4jDVEKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxeZSWMxL%2FJm%2Ff6y4q3ANN6ZIIcLMlna8v4EsChc6cOU1sUxeptA8vrgW2qcQLx3xGEdmg6Pewh00xLt%2BKKIiERZs%2FZPeTUNybNJoVjL8CPObgLW5PmHCy0AQMDkDSI2JqcD%2FvUNVtQk4l6u2zjOAInIUcxkCyX8k3209E5OeX9TkFQol98FdP59WiNRbrr0GCrJa%2FeNL0WGktjsi5%2FqFCfnI3mt%2BvC3gJpAZh4iz0%2B%2FIpdnCTGTBiGxkU2Ut7Z5Ujz74iGIslQhwAhonO2L8vSqd%2FEK0zN8nAZDWMp2Okn6Xs9LVicSgjfA8tTOPZkOdG52wJL5O47RdAGEcGlqQQ1FtGVW8ALi0EAabH27wBMIY%2FSvGNQGMgf7CPrgHGCtnoPef05falSmxgWbhDCpsbQxb98LwEGaulyPjFzelRjqV6N9PXjHuOoMvkud4rWwNZrO5tHA70jInFOHsXXFDImzNV4YLxaNn15VI5g30r30NQ6aiu%2BjAKaSvD0THz2g8LlUvSxhkPL9UVD%2Fxb01kBSPQ7GB6ACuyk9x%2BNDqY2SDQdSGkaAiJn%2BQTnZV7Y3RrQlG2A34Vhg6Doql%2Bc3ISOGuI9OosNb2mDDfuLPrUz%2FZs4MqA6jg5lgIW7pmdNdgCazLF8shMLclSWQjCmxOLJBjqkAfceaxOLeMlJQ5YNe1EtWPiMksg2crzOwFmC799QlChVLrrh1O%2FHWLeOKpKV3i5UuK5f9EB2qtKAX9WidGiKewlv%2Be7tO2u%2FCHEV8htnGod4Y%2FQC3FtLmdtA7CkQYFGGUYomqU27PBR0CI9KgXcptfqcHFLARPNjXbTQ4dBQmqIuUlTzt1sDGTaHHeuc%2B8jbSnt223NEz9ob8xiCwPxJ1CFMEEI1&X-Amz-Signature=314518da8fd9fe7cf590d5feb79b9865091fa43d4f0bb1ff1dc245d5c90c2cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

