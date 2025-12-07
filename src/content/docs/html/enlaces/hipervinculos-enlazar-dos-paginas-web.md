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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQKRTWZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2Fptg5Wc3Yge8gRZUc4nm1%2FeOU0tuVpO6tuS5uICI3AIhAPKPRu4pEN1z4jfUlIfOy6%2F9mQyhEavKXn%2Brye7yeqeKKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxqt3VF1pf3UEJJ6IEq3AMn1wxJbs0hpzbKtnYsQfVkbIOYGKbtVZumFPgMQbg0dAcXEwpBibXCiGUxsMlfpX8oZ%2FXuU0DUqq%2BF6mgJ4WyoqLeiyrSPcc7OoeZ5J4SJGw5jBPDaZ6fuUzm9ZHLYJZZqh9eBoazR1BQcAgeKNAQEKLcmx2az6wSIHeFXtBelb0itVODMhD7NUSJ3mAxBneR3iAJvmjlDZpdHmprUpkR5dKfBYqHPtrdgqGieH7y6nLcMO5dbLiLPAW55VUuvo4Hkfx1WiRydIUr71Q%2Fft7iXMD95RBZXxcKRw%2F4G7U2Dyaan%2F4n7kHF17HMc58yHOmKISTyoVMOfD1Ua8vDBKR23zZtwOu2dOz31TBr4nR0dCey810%2FcCsaQT%2F0dNcl8E4dCCg14CZaRxxvETTfooQytw3Rkkn6AZn86t%2B7xzVVXtq%2Fl%2FCDTaI8L8fNfOhnNDFqn%2BXRvPtaD%2Bgj7kZAKgv5JV9RqizHt5Hx7cT2dag9iEpr5ioscV5LFzz%2B%2FQHg5J7y%2FS%2BPgCe7wh21bMWDqkI5mIehXNqSDWYKOl83xGGYE3m7Z0eC0pxOqy8%2BYafeGhhkYxsfwxnSugU5XMqEZC86wlOGlgjL4a4IvXAJ5VzB1TcEiE8%2Ff0qlP9nsDRjC%2BmtXJBjqkAfTT2zAgOOxtg8cSosxyS999jTX%2F9svX36c3JDtWmq0%2BzL8UkMMYqBVKogHgoVt2wdYL3rmaw78qKPZ2IaPRq%2B%2ForGi7S1KuqDtInzq7CssDI0XL7brimHielEIuJuGqLYcGyxzwe4KTafQCft769zYSJy5TFovUROTN03NsqDfw8kU1uWCHzKVSp8zCDvYhSR%2FpsJAJDqf4iq4sA%2BPEOonco7r6&X-Amz-Signature=b15dd95d10e4039a3386a01eb8712755a419d6c931504d1c80e15e5c1ea57f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

