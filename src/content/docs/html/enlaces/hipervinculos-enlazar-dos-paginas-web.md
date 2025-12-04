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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJ5JCFZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIAWQdv6829X5NPKWHBQT83IMizXbiWzkM%2FmxXx7csJdvAiBV9pKd6RvatCBEauYEr2DOGR0hGN3vvGJ%2F2%2BYfF6yMAyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM3Sc%2BbnwbOZflYX4MKtwD317OFZbGubkjyJq%2FB%2F7cqZ5rdCERXEs87PT8jwRiVtCy%2Bxs1fH%2BaMRUm2h%2Bsmx08BURb%2BbMfBKY1Bh%2FXIXJIoQIP418jaGV%2BXQ9PoPYBC0FXFUjPQ%2F8SPSpI39fZJNRqNZ%2FflGoIatlLFTalwLNckop2cjQO20Gc%2B2b3B8KVs0c%2FELsQU%2Bja16MdKllJUKme3xXQgOrxF9uiddNJBO02hX9bdCMQbwWOmLQqb2AFGz0BVP%2B%2FST8bZzcIpLrF7F9Gcd%2FIEmUgw7rlMqxw%2FPairnmPlnDfmGtue8GGO2ohjRqe15oE4GNcVabT0OuhK1t8JEs2F1lXYp5pJelZEkLoUFL4TOFj3EkLWay5Qrx1PQYNIZbGEEg3mkke3ggXaqOVab6Y0ibAE9TZzZxSMPcjWayDbOBoGWOOrCME163mAJ50hFfxs7e5KBfXcsVay46qW6KIehff%2Bv6ctkQqKYVsI%2Fjj5nztu7dl6qN%2BufrBX2Uj6qnxAe1CqXRkEu9VHAjc8lYfj7fkk6Vd2aOy8oIzj6%2FbxuRtgtQlyYaF3Emtj9vARHi7DQC%2BvMZjgD%2Bggz5g8Co85VaGfv3xz34MfcTjG2lkbVtWvy7uxsvsWWFINkUACQwIBxS3JGHj58wwvr%2FGyQY6pgFoU2pJEa4w9tNKOIhKgQSt%2BdERqdn%2FI6QHMpN06UXO0ZhNnT22zCUNI2Hfk1sFeGRegDfyfwYOsDhcx2fXxzR1jPQzCV36hGU%2BFiGFhkvhWMND%2BSApLUd9yVIS9aZ%2FsKMZNNZM8OUIsve%2BolqM8ViDIN1pajFfqhPSRH6sqTAxHwtT35w1CldTXLK2FHuaRrSgbhjvWaVdkYuiMwega%2B9ACIqgGyiV&X-Amz-Signature=977017b898d7170502bb4c388825f869d3d71b71092cef4ba75061042fd1e982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

