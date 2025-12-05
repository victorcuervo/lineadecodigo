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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBTIIGMG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtdIfGfWRY23LJn%2Fw0FwhXH0djuV2JltllGMCNq0bSjgIhAIHSFvZofO3pFsSBaoErPecTZJyTVzApzB1LD1kzLIBKKv8DCFUQABoMNjM3NDIzMTgzODA1IgwA%2B%2BRg4dozhJhDFv8q3AMREwvQIO348R2S3B3v9BhQ%2FqJHSdQErhy9cX7H8sehEmH67utpJmB5kBnM5KGOY3o%2B7Zyc2WCCTE6hAtdcl0RtX1n7HNVL4Okp6CZHt8UFuWS8vkJctcNNEycccOioT9htuunrlIcgoJts7%2FzYMhmuzlL7Gw3l6q5X3owtfhOTUkfbCKRYOXHfMzwF3iu5Cikw2NzadomCNS9mgwn6cdv3XMgdvk1IO8WnQ7r%2Fl34myqWQC2Bt4k%2Bk6aCA%2Fg30ZzuJYZfjse6lGKDeu479UZIXD2Lw2QuGAuEUGtQ3JqoEMpRBvaeojlSKqC0UQhm%2BgF7P2Ig7WEsFAi%2F17ohkl7IZUJ7ImSo919udLQ9y%2FOIEa38DONJeieMLtk%2FV5SUp6VKRSK%2Ba%2FGdqBRPpEO1xSOLHUa4NGhOu9qH25WIMNio91y29jMF6B%2BIglW3jEMjDZDGfbaqNtvyDIgQQ3ulwjkAQMOAOOStSMlzSs%2B7K2F9ME7biSaMSUMzh6KJROJRH2l6a71%2FbRsRUBKCZW9O1NbSJhsdnIj6UX56IYXgWlTQu35HvsShiPhJxfnFxdTy5H7Q2al0khUGf7bEKfvhUu4vcDzUxJDYB2cSXx2KD%2BQGHYzmcDZ7IuZ6isyhI%2FjC1sMnJBjqkAed0p%2B%2B81MUiByIDnLl6tILRobDhABDOvpXoZyqMV46UjDar7RaJ3InlC%2Fs%2BAD4PK4dU7A5pVv5CgSW55lzhL1E8oWXLhYjabCqX57jMeToeFo4iKJ9XzCPb1Rvrz%2BAQl2FWOCKQpf%2BcmvbxazDAX657OL7kB2EvQ2h9fWGEB%2BWwSH9NXLDXxCtLK1%2Beu1J3F5n9Yr91jSkhFBFT%2F7PjzxgT3gYl&X-Amz-Signature=8baced2bde88a4a3b5e7bfec7ddc192aa4039f9744298e458f3b4398188d1233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

