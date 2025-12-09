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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NEIPZA5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T172314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpIhJn5JXoOd%2FTTDRxlwdTQpRQC6A0XYmhagByIo0NYgIhAMS6h4v4WE7eDQZIT9say30euXZEdK7KdrE8%2BM39FKDtKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2xyeM8u9N7MrnMdYq3AN696lbvvcgu5e8EjkOh4AoXuIBju%2FhtPUUNJE2bRMhATNV6VBCnQdx3u1ea82CuMzJOUWHTyUw0UqY%2FqvS0sKvxLR5xh7qP1amW%2FtK7XywDmOp9Q616bqoSUSLBgZZ3ELdbGsBjRDIC7Q1Re0LpKLS4EugBBy2RdZKaDxcIHdXG35XMwKXO%2BXmjXjT2tEmJci04qIg%2BL6RdHAYyRFIj903CBOUxZcmLY9d%2Bf3hKg5Z9HqIpCIgKzIjZLE%2BZGC1chneFQZ4R8ihrMmJKKGMDkzZ2xeQse3tB99f9AGhNrJNBjJC51f4FuPEOjZMkhnXbAw5iPdJChl7cOy9LaGDd3qRvZXqkAbTf%2F684dn1889wE0keS2wg7jyxQgVaR1yEvK8oKkBZersh2YnBUwnN40w6H4MXGAj17p1rs7oCfisrixVTpiMu74d30GsfDnhlMGiYymj5%2FUs%2BXj65lkDfJinSUSEjXgdmTlaVXBi9WLzgMArgspGk04XdV8GkWBCh9fPHnwR%2BaixmU6%2Fz9qN%2FyyZhO1CfShOrLK4lx2cEjwKD60Sdd8KqiRfhKzHzmgQrJ15S9UfPangy62FGgIqk4sNg8iDHxyUgE5qZvTTBKStgniTkrfREFs0gtX4hczCEl%2BHJBjqkAVLQb6nbtoeRMs9A%2F63vwSYRVxlm4rrzNS53Y%2BOu8Pr0iiOJLIpZsY33BYrLqlAdRltPqhif6mflwQVvH6tylgmgGUm%2BiabnEmO%2Fh6Tq6%2B%2FgoTgocJbqRlRMILKYxHSA%2FA73I%2BVmFuNwjzeT12aKztTNlqoPzwAAyZ85BY%2BV6Tkil3TPx%2Fe%2FMqNG59lSjqu%2BK%2BE6SigSH4J1I%2FdsLTwemdeHZPpL&X-Amz-Signature=bd1b321b5a0a5c911692d552867c5268838add05e98ef65a351eae4303f9d285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

