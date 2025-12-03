---
title: Hipervinculos: enlazar dos páginas web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWBFUY4Z%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDGSJhw61fUlThfFuU1dOLdulQxG3UH0kxNcyg4%2FgjgzwIhAKcMM9%2B8TgBc71T%2FjEhjaRdwMRVtfhIh7aa1vywsKKDTKv8DCDcQABoMNjM3NDIzMTgzODA1Igw6E8dFXZIDYnfK49oq3APjCsiCuBpM73Hsfh8nAlJTlkWSPG2aavuK8CBi%2FICYzu20j5eqCUtXp1e79ggxSON2c73usN9sx8xs5TNSXeEtHDqPnncVNpZIdEOd7Qik3HxY19TVlRbJHkLW4q54P1z6Nq8SYUEm1dMlTdLfxxlomcvLN8jNQkT4D81j7gdaBxbieHrMxxdXzf1osJQolEfYCYthnNGqgks7JiFQEHRdpJysYE%2FLnUkEekt8aMrS3k6g7zP80BE6j91CYsHrboitkRE9FwbcKBboHFs9etHjNaV%2BPwa0GM%2FJ8cqYzwomAhGIRcO573%2F2S%2FUVS%2BYWpuuI6mlPHacW8FmsulmJ8ocObHEzRPuvxAmfAMKl68vKwOmbBjnZI41NFi9zcecJL4kmqDB%2BSlZpFBzzocmboqCG3HAUcZMmaG%2BgNFQu%2BK87uau7t%2Fp85no1%2FAnbBe5d%2ByKg2u33bPpRtewcblLMqmyZcbD1RbqBdrjbZCZNt63UBNqwVUag5%2FqLNfkfs3I78PE4%2FXHfgP1MzNZKM4sULOobl5%2BgRVfOzQIyXbyCf676EcUaBMzls3fkuOhA%2FPkEBjc9uTMWvOJwQuPgbItpbcZ1zMe%2Fi8n7SO6GW3UKMiWbg4A2BxoXCH%2Fg7xCC8jCQ3cLJBjqkAfOp2cAFmfinfQTdqXhSFo497wlOJK2pQsabcc4v3qsqfubUax3Ns%2FUQ%2FrjuT0hLExy1Fn4tVNkoXnmu1ngCjyFqMCR9qbUAP7TQncIcVe5F%2BGeR91PyGD%2F5JKzoWLIgTU470ub7SDfMhk%2F2EEtBGyVIfkBfLVIw529TOwjS5UzXZMzMgDuY0W%2B7vYVZ%2BApaLteA2irsUeKz6YvKLHHiu9gjbxaR&X-Amz-Signature=a8fcb3620431b068629b04b8e0f34cf3ae692a3f62a473093fea7fee5396afd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

