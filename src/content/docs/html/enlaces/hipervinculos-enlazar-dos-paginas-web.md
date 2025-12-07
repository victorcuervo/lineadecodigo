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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TNFPRAM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvdhU5WVql1zARazG%2BT%2FzbPF5QVtxwVgSUB98AfMZGzQIhAIRSlc8i4noJAWX9SZOS23Aev%2FgvkO4tYiaQoHZGs5CTKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwrofg8ubdc1XEoND4q3ANOTNmVu3ZJgqd790m%2FjphHElZ%2BaprQdFpUCM3Ml8tFfLaYAZwl1w%2BzOJgqewtVcn8fOF6pH33raDOjMMS%2BM7Gcxi9xY%2Bu3EJVfkxu2%2B3rOYdrgF0G2%2Fo1RlHJaIr7JO4lb5YzfBJmgP3Ug9aOPm7Ym%2FUSJEaX5wnaI9%2FWzTIjVaw1x4IH55aagfm8HruSjyCuNHm0dqoVMD48Tk%2FEN3EKl4c2KyCAG%2FtTzuDDZOgMbUOEwMDqtl77A4uF8%2BRuos6tOMdQE1RVd9clDjJurVSx5I9dRPIRxlUjDbwuxTU7c%2FR3HLLj67wkQdD5J%2Fky%2FLFdyfXwmIyzU5Z8UY34CE%2FCMC0qt2X%2F8Wtf1%2BskD4abRTrdZw7X5okTPECY0KKeytNUKhn17XQ%2BHENEOBV3gjdDhyaUbW6xuodHibj62wpVzKrnAWRi7qGi4Q1r8l%2Bklgi99nWhyhhehIhToNmltjEUw1V9E5YTdHDtSiY%2FYwnJGibAyLFKCij6pIIeC21jtkOItFtF0atgH7PZbgxDns5gW6VKm7WVaZXe5QM5CKS96ply9R1vyuj6iFVoyW8PQjA%2Fsxr0fd4ffOMW1SOJfY3nXgchNb4ENIGVoXEjaUofTovvoI154O6mb%2F%2F5o%2FTDmttbJBjqkATdoLJea8EzoHcBff%2BWMZ7fSXa%2B2QfmkcwGWhApTOsQXITU2RkSIyYGn6VLGyQBojIs3yr%2Biwt%2B9Lha8H4IRsDnB38hTOHxZWUI42L9r%2BrE%2B%2FahoB1NcRy3a0NntB3A4FvRUqhPCEDYP8p6UB8WWRU%2Bh9NYSF36PwhFRHIvsNsOsS%2BVn%2Fx8ED58gzem%2F5AgCGEpl5nvfOEp5hCWSxyh56qvMjtI%2B&X-Amz-Signature=e2d3aa059d8b4c72a27c4628473735ae9fc275d0a2b7181344c37a99c1ff0f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

