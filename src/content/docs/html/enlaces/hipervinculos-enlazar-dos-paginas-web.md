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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSABVAI2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T061105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUdvY1S7E4nHJyOc1szFmpyNu%2Bnxd6sWIjw45M3J8M2gIhAN6gOW60tWcF%2FhZkJu5KWNX5JflOJkDsrsW6JWfaW9ZhKv8DCFUQABoMNjM3NDIzMTgzODA1Igxu99AWXHilgkyrZUgq3AMTatRota8hFX7SlrE2FZbCTPhtIQ99UrvitpAVzKFLAk81wo0Y8U%2Bt1v%2BinmpjjKthUBAUypDiAFYE5mMbyIx1qjPMrXeulHYMrQ2LqkP%2B4POu6KrOUPiqTqXPYN%2B0szL2%2FbbvDhIY%2FiAMZXaEZyrJe1E1WRoJzuBmV5%2FsTbMC%2FaPFXwrM4Jt65e%2FSZEY35e%2FvPuQAvyAZeBpYSlM19%2Fnz2bQ6Tjl3bGmT%2FmgIAMcv6dszanG7Yv1iuFaaHCwOMXJvyjjGnhzPnTtkSA7Xv0XLJXb1e%2Fc35P%2BMiWSUDLvgAfurwOyQLbyAy%2FYJBaYhblH9COT14a3fRY6UVdklE%2BAhs0Is5W7OGjRioFlAuyoI256%2BuErtoM6mWkK%2FTiRIzn8TnWf%2Brrmm5GBqF93EIJxO34IfKbqpWN8FtJRjmGskRV4u6j5g38aWI2FOxrAdSWkxzwc8XC0Y0TlIVmgUKyoeAOXQdD9vbwDH4Gp%2BO%2F%2BP1pZpVro%2FPwI1YNFhDAyi%2BrqEQbg3gHiJ8HXgYYW2MPCiZN441Z4Il8LcuFArqvGz5FNscXKcVogH8dyLkT%2Bz45PQ1kvkW9LNjrzTQTK9sVJ6QY5BEATnY0tnchorhRVTKUOE4jRIrS%2Fyqf7hRDDipsnJBjqkAVCTSte7oUPm5e5SxlRJgNfWjYx50nrbXL%2FVvZ3KhyOnMvEWxryUW6iw95Da6rGD3NdwtAUdkk5qKjNjXI8xhuj7BztD%2FjA30XLvq0YsauqIJbyoNym2W%2BjVtzs9i9kyN%2BP7yuWpyPgb3%2B3svDp4iGMjsA3O%2Bm1ELUK4DPSrvJJMTNEWaEvGBGqNmZ1IS%2Blb1Te3QRnnFS6DwIWsTrowb80Ro3k5&X-Amz-Signature=777eee175f61b92beab9857b8193f2215d31de4ed0e730bc0a866b3c36c44756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

