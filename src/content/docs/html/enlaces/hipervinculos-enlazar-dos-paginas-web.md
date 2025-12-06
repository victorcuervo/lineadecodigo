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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGOMV4J3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCAio85QS9YU1olhG3SKrkKfzDNTdMRGL1OuNWIwQDiAiB8E1Td0%2Fh0CazSHIz7%2B6kioCWELBJCdEXJmrGu391Bsir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMJpo5sF2uBrZCbZsVKtwDMIdk8sdSiGfttDgmibtdlQTl1ysS8q%2FZmrabO9Q6A%2Bf7XG%2FNTU5fmHvSM7SgePqfaJaVRadTYOt8VHYIwa02KZZeDS2Vcl5NslvJRdeAi7JcJ75mDzl6TZlpj1EaniUjUIcj9CujkVhPFWC1dWecfA5uqmhbkXLu7eDR6JSKFyidCJOd%2BU0BBh7d5ImPyyMsAc%2FYZZcuoNjKBbB%2B%2Fpow7JGynP0%2FzluHiuyDv61FOcYTUXa2KLFyYjPn8Vn%2BmEX0xLOd5U%2FBI3f%2B1%2FZbs4AiuMGP%2B4EuReB9GxTgHZG%2FTTbz0MeoLj%2BaFXbJdn9a3EFE%2BKmcJge6qQPCqdt%2BIwhTtsbkw3%2BSHJaqMMGBkLfS6iEHkjIGVIEpvSYRsQ%2F%2FXzvVhnprlRA6UuEHRKUw2lzNqT6iz6AJr8FY%2Bgy%2B7ttX%2B4Hp1GDgFv1x7Vc5UfXbAKKBKJPqbFcXaNFZW%2BFjGK%2BasL4Ns8eFmRQqZ6FEW%2BFSR3NTTO3OSUT2rrfVbN5IlZXItFrlIbmRgRzG6F1Eri9iNrElmJfCGRiussQa7InisaNP2X7pIAHfcwtngR4ronYEj8ozZXMfIRBgbwdmz3AJakfNZdB8srZdDJixkyQTXFb7cY1G2G9W5XhZ8JEw8ujNyQY6pgHKCPLn8B894MAyHgw9NEys0KCi3hz6dlIo3PaIuEx0HyKYKMvarbP3zGbb1IVcr84UZpZlXiTmgELUWLG8dh0ngiBvCbt0ugZXRGe5CW23Ohaxd%2BnDhhQv5iGhgS9J9Y%2BzmBd7DEXi9yfK%2Bza44lBJxiwitJejMXFvJOobdSW0CmyJTR8xs4xWanKlK1GS1V6922lZ8tG1oE%2FAOeZ4zivSXqPkvToO&X-Amz-Signature=5c18df74005fccf7d14630997e9400ab6b9bc091e11afdc4a269a9f7d87918cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

