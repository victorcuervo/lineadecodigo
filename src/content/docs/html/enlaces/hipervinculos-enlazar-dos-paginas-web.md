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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIPR57C%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCID3x4PJ%2BJ9M8vK7fSohZRj%2Bt8nxRcNlaOATktJbR%2FeumAiEAxcAKG%2Bp7GIb5R3XRu8SuDUrJGFC9KP1b6ipDTI2HCQMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDGFG4OAHJWLW7xeGKyrcA2QqJxfRfMuhAHAwWhY%2FCSzBhDl5HbM1qd97DQPzsBQcmw%2BpcOwCV5VyAQdHe7NM%2FWPMA4oyf7SYnkgxes9tcYwyDtQUxc0Icj%2FdAcUv5z9s3o7W6d74%2BKjOB%2FN8%2BRB4eBQv0iEFNGASd00Z2lMm1IL2CnXf%2FnwMSave%2Fl52dvOEvCijAfvTly4WV64izJrBJ%2FvqFNYzIPpt0z79XjK9spE7eKIbnkz5kOdrgM0G9ABEuZ7zyjZZsXVGwLiHJOzy7VH9hJYT%2FigHPoR6J5BZjbk4%2BkjHhNY8bZs3%2FIs6dmDdGc9MPrAZZLPG3Cviss5ngr2bLmX04zuB13tWvPiR%2FnwKwr2iqGGReAoitrB8%2FNcmDdmjondqtYV%2Be0zwgnwe61fa0p%2Fd6%2F7AylMzZ8EdOc7zVew5ds4YH8q2fDjxVDUd7uRcCZgKM0BGQxT%2B6vPd5dq05m8dOwuz465BXBnQ1oz%2Fbl25ZIpGMZsRwRuDUgQivWYaGu8rwRTMQ61U%2FisKQa1XmqjZawJC%2BQ4zsmwKhjGnhEK5wNib3g7f9SbGiRUjyAA5qtmzZ%2BLVm6k2uFSdL3U1ZEXcCLTdp%2Bu%2FzwoCySQzle8lyTR5%2FMnFCRXQnLhjW9PAmQGqHKGWTOE%2BMJPoxMkGOqUBu6yJdEaaOTyE9o630DCizHUN2wOmvo%2BZVnRV34zsbEOAlxXJBQQjbNbVpeX86JOr8wdH%2F%2FZppV%2FTHYIqz1FuMz%2FLVqfIrBe3KpRV84akJ%2FeSixrbBE2ctbSP9JZFIHdsQmD47Hx5kbXKPZSVIehaoZ9FgwtyEs2va%2BiX4gDi9RA4a5u%2FnrCOXgLddixdx%2BSjFczEz2VeYbjWkL0BweaQJORJt8IC&X-Amz-Signature=a3f3567be391dd4b63747a8b31a5d73cffe417da3d18f7c06252e90964e5c865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

