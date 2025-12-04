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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTORJKRU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGMKQmZWKhKh20KkPjU3%2BHKt0qGd5NxoU6bj3Eu2dsxfAiApnxbaoCmc1fdHWnjIFY8OiVxxfU%2B0FZnkB%2Ft7%2Bdpj7Sr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMUgzYeJEPpRffzR7NKtwD1oA3h7n4pmAjh6jD5p%2FUx9RTD9uU%2FMH4Bl9OJ9fjnfkgQeH0K2hOMHEPzRNGoNP2SZuR6kn301kVLKfrh8XsDtp9Y6eeN9e2QN7Yrl%2F4%2ByZ1D07VR%2F5gx4RhOxd6ksbPoq2mE5%2Bx3ZhoGXfmlMiwGXZ6u2KQelfOS7v5PJ%2F9X3sRla3MrZt1ihRXU8n6PbXb0Jfmo5R8qvNi9PhDd8EEth3bBdkpjQFAa0N%2FAMsIyfIbibnU2jtduHZl%2FhsUANZx2f3LIoGcZ0FiWuKplHeFolraAht0Gjs1HVXd5pnOAuf0vflB1OVXC4jh2Ua%2BL2NhEkJc3TNNAPGUvSkidUuWYZ1XkYNJEbTGNOaPsSgFU0lfzR%2Froh2Xz%2B3MDVgpxum%2FOaGi9TNrpqkPH7LVeuDmprw1d5Q2SMhUEgD6s%2BZBGoD4T1JyJe28i8pBDZLdZf%2FIF7LtkSScSjqUwgMA%2BZ2Zbl36fMEEJkDRqG5pDbtJSGIQM7j0Pcm96n3J%2F%2Fnj%2B27F6zpg1S8vQdwBHSURR%2BQHLlWf2pZsJBXE6o0kNN2fVBpO5Y47Zv2wSadjXoFWUlLCwKV1DpTVhr9%2Bfy8ZJq2%2B8gt2BYqychch97kvgETpSpWKt6ia%2FRkYvHKhmTUw9aHGyQY6pgGrpoGBQC7J2loFMx3HniYt3uk8kpEhhdEETMz7%2BqteQodQVskWb%2B63fX7We%2B1iqN0XEJNasKt884HTJc46epqx2t4tgtBiNmPmlwXwKssp%2FHjtXUKBQYGYarn3z7HQEOG2Q%2F5KBnt2OGPbFTLTtkzdMFSDdTe%2Fa9vgDzGupQoIqAvb86ODukXU%2FMX3U19Mu6u%2B2UGLtaebQs%2ByAtjg7oB9XpGiWJcf&X-Amz-Signature=e341e0bcef3674456e92948edb4cb559fd446318d2fd62f5ce5ddb85835341ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

