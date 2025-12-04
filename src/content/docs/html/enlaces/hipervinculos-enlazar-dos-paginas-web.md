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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGCG4YKQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrFIIvoG%2FNbsMQpz6Gf77bV30JjxlW1y%2FCoNmIzcx%2B1AiEAup%2Bi1d9uY%2Br5uMkKfNoO6ExG7wc0YXAL%2BNrfKC6OACIq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDOuoMVX1Drw%2BcdsdACrcA7BXeZTK5slOMFfXsRzmgIqFOYZrUXNAUplQj5TBCms2NnATj43hGjpgLWbWYVQpOsGKidDcmDttfb3xBfjGQ4A%2FBqkwht%2BEO08BYi1Ww%2BNT8sZxJ%2FWvq8qdgni74uu2cl%2FeApUIliAwiaaKh37Ir74ZfZuD0Pj75mPO7pkLxRKRxa30ti2nrwg3TE0DyUCnV5E8qtyjuUHWZlj01BrT8MAaxuo7FVc56PA8Qb0DN5zfdf7iDEGdBnbwKzeN%2BMhuBFi1WoxFbEaRE35UdOrOM0kK0t0u5QV14M%2BfvqNBV4k%2BBltaBZ3SSVqVNdPiOgSHQeGlAGWEOFO2pDqDtV3h8eLXDiTL2l5uEHk42OeUXJV%2Fi1LfQn%2Ft1hCUOTtnKUkpPzOvJ1K83e3%2FTJPzeQW%2FO%2FYy9wF%2BPcXaMREVuyp%2B0mPZzCARBDFVhrYF1KGF16bbqYCpy68UDC%2F8NCsJq7QBSQoWml7QYNT%2Fmp%2B2pQTSeDTkOyd5Oc7LltA9fI4AoDgauJD4%2B52svwCzqjlIKr%2Fe7s736weZDIGQiVTfkIfxuQcMzOz72Mvfqef3KHPGrgmQtAqmMrhApFIsJrHW%2BJiY74afJ3o1iTPsn3UQLf3l6pNp1Fh8NGqx%2BosJRgE5MMLcxskGOqUBgGSveVAzd0qGk46aTBsIq4qZELUunMRkPRrN6ZhOzXWjoXwQhKdQxRgzATVz17sQfFEtiXGRE0NQZIyS6KpGgXOWttg8kVXmbIATcMElN04enHCQ8duGdAZT0uuNkqbvlRP%2F9T9wKonX0KB6DACAqRwpCo3DifN%2Bbr0qjKmGnrXZi%2F3jet%2FgtlYr3neyzcbebTI57q2V9UNC4cAGCQKBHUmSRq02&X-Amz-Signature=d96c64973972b6c51c847ae5f2d6bfdb0a755f764d825d1666a9e79480d2e3f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

