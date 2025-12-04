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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634UNBCJH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLRevSKqAQ%2B5CtAdK4KYDD73Hq4od1hsZF8kc7LsZeAAiALNMRQ%2Bvn%2FHPdlgtDLQJccMN372KODKhEmQcg4jb9JFyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMeI1rjx0P4v1YG9SJKtwDPRSbPxPwYy2Ce6uQ7dMhnXX5tTGG5n9w5JWocyq4A6Hf8%2B88%2F0lgX7LV1qjRgfivsIskkdemA1E1tImGurq7xaQoDK09Toj71IOdxlTuS96yLZG6H1FIgafP0DfC4EeQkCpXCPaLLvY9hCYptjKHs7qKyrew2NM4t%2F6YX%2Fdv8m6hOJEHYccxWKc6Imeq0pZHGlPyT4ea4Y7WOd6Q2lrORq5pn4iFJaqtZsGd3guhjE45n2wKjnGQhWigJevzYvxo6q987uEIJpi%2B3Xp4Sog2MK7wnqe5x8FYcaMeDdyoO7sxVgag0od5GNIOnZdRWXeY%2BnLxPMrUaTzClMeM%2Fl2ckAVYK1xzWzf%2BIoUcprB62XgzPFO1pdjMuyOzr7%2FeEUlPqc7wkuhGXUOPhDOCQ64TNuArNKTuOC562TMkdvfeFWn9qebnupZBTNiAtglIAyUT3I43SccY9ocu%2F0gNWNzWBOCWRyeJEgdYvz1x6umPQM%2FXXsAchs%2Fry4zg6qYBd4C2WKYM4Vwv%2BPW4J85QXlXx2NRDelGDbcm5weJNVwpdKre43lbGWgpia6Czq8LEG7iZq2TcJ6%2Bv1%2BIdZOJeP1uj8JXYFbufoy%2FwliU3qIQnkYy37Ga1orx%2BjbIXarwwldzGyQY6pgFkCGAPOcdOD%2FvFMt9guLbOnvhrcGb%2B8vy77fAjXzbXaUXh%2F%2BOsNPdG2w1W4T1Q4AzkqUEqmNTjfWz633by4UkOOaj9bZxqC1xh8r3rCJ7x%2FGQTkNFyd1oHXSBNdNmqZH0tiUjy3dvsDyBO55X9BrOixZDmGIAzx9tgHzM5b9ENRrBF%2B%2Bxk2FEpy4K0AS1AK8ee6GLBLjnFYrs8knnla2R60QVg%2FzDG&X-Amz-Signature=0af2679180793d36545704692ef551f1d1f5b2bbd0e176843e48784b888232d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

