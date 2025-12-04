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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD57H4MM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCxEHd%2Fu06LyY2MzqIK8RcgDXFYnl3VmsiECKgdyFJPPAIhAJjHPXde1loUVdqRq2TidQLetQeI782dJ%2Fq25guI2PIPKv8DCDwQABoMNjM3NDIzMTgzODA1Igy52WHdQ8W2H8G%2F%2Floq3AOF8XlkSwH2T4YFJjqMHayg2e1PP2dHB6jz4AEkYaw%2FNGqmS2R05fnf9ytVDgbTR7AwRYsNME6ZlkORCZB76tKV88ME34pe0xhSinXZGhAeoNMaY%2B%2BqwmVriSRGrD7Lw9YeqHKqJOByGyoN%2BKQVTarZByj84ocLum8gCtzEvc1AzyzlNoGI%2BZ0zcKRVvtFGvOqQWJF0RpleuimFzMjrhU%2FrShQ4dB%2FMzXAqaCMNaJQBHLGf9fMoq4c1CwjdcFbY2j725R4ErSJjpdyqEWpwx%2F%2FaSyoQofXOUlh9DaK2M04HDQDPgcSXYf5jae77Ha97jMxo56pzpS8EkRtYOp2sp0rjNY42Gkk9BOf%2BiYUra%2BO9EaT5OxTviMb9tPuD86Ig4kVuLoXF98SOk2OqQ5Gc%2BwWUZW3xonPprqY9xRep5U6%2Fj0OTjhypw5LpcKAQi3f%2B1tXxcL0OElXc2mH71oD489mFrWJtzJZTsmvYCyjHOYAy2BnyEV7i2GGtRHc9pOuaux4sW3biS%2Fdtu48uy%2FIIXrkFhgpaB8c0HIc5WBuIabeuxAjL9bZ8v2OEoX2HyI46G2jLWok4vEQxsuvW0DQpb88vF%2Fsf6TuAwp2lud%2FRoJe1lekG8SjQ7auwiwkVkTCp88PJBjqkAYwZGfzsDDfSLg3DWRaRJCj0leCVnsvMx3szGflaBaoPi96RRMQuE%2BppJaG2vQSjDJ87s2KDG1SJz9qlBdp%2BdBzwS4AmQUjoCSGH0QDK1IV2CAIc3khcul75kYo771YGLe6K3eaGl5Jc1RV6D3U7gvPeP02MbwUPA2vEf5WgfgZLWNGnWWmgco9oS9kv6QdJa8pBBhV4GVP%2BaiOWdy55X82i53ER&X-Amz-Signature=6ff15109887d6bd4e257cff95447243b82ab90072b6a9cbf1baaf91bd113d8bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

