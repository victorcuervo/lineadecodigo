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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HWG5BFW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIC03GQqdKl9sHXa7xp0t3nKRnZtNOMXuWej56%2BEOv86KAiAoprgGi5DJJm2%2BNdymZBbXH2zemw9t1MrOsYlNLoh0nir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMkWfU2GBtWkwNqLVtKtwD6PVKpqBumUfj0sWcDBKiVTvuAehyttxUt8IlPzP3LP2Zv9tzTjxW4xvAU7XmYzmxwN3J5iWHcY3%2BRDuZPb3dh0wtdpqF2HtnnPJg7RPP6OaugdSYwCdHiWFnhEUnIeVZiNn0xZVU%2Bkk7qYhwYGS7vnGciBnvqLFsh3qHU0T18gwuSXY9eDKB5KS7KhRvQatwicWjCpp4Gt2Y%2FleMRXHVNnIaqnyljnehXA5HXavKeT8uT%2B0EaS4T%2FloJJXEBCVoi0jz0xTeUYna7DLVlPL7DQ5d4w1uZnz4dwAmXKj2Sxh2LA0Y6AMm5PzW8rtKOxV1CGmbWaADrs1KrAKbbd5IpyD34WMGr81hiAa1Dty7anDjcwCtHULnnMyt2wTxusYtG2DB0nL60pInQ4J%2BEL0DU6B%2FCcEo01z5pFGj%2FA0jnxxGpbjSuQmPdf7Bh2pEHQK4Fn7hnixDYB%2B9Ec5H4fiD6FDgg%2FL4k8lLLUI8r5Mw5jheZU2zrQzRdVL%2BL8wO%2FMtmkIzRMbbEQ8T4odl9GGj2gqp8ZeHwahrnorOsYGhieBwGo2BO7IRpYNSuTAVeMF9L5Z6H1%2BK05xHGOYpveKDx4R5pOnfYKIQhIW29oSMRuPVaQtrTzy%2FlRvFFCJpgw%2FtPDyQY6pgEpgyceVRb1m95w%2F9k6ue8JT9dHJZ0rSlnLVSRhFLwJyhfzwAWmX0LHdeadN%2FEQNUyBWLtdytjclRouMR8KlyDNXsDxclKEScvbKMsZk5jBYIt2qPCCodeG1ushSpCCmkTBQP7lYf%2BnuspQdiBkEc6727mWUpIXn7oJg4rpj7qc6suQc5i5H28ZfE4T3Fz1GPl0XrI3izeuEeuTMCkckn2zx4IvkYuA&X-Amz-Signature=5a01245ac35607db8287a5dc8ee656a3275c84cf9c118299921a0db93d88a2c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

