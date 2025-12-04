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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAZFAWBE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCAuNkTi7dvYGV40bhctt7ddlN9ur29MY%2BlNK5hyKm8GQIhAKl%2BG%2FhOOE%2FUasjJkAG9UL5w15aybVodtOYH4%2FJJorFiKv8DCEcQABoMNjM3NDIzMTgzODA1IgxtADNvTFF8fcNu%2FWIq3APbB8kObUUI5iBWtPoCuzstfGNDaPcPcslymk9oNx%2BgK%2BVNxN99eNSRHEmVLEvU1wOUm8HR5ddmZh3rcOkTOu1nf0c7UwYgFfEcF66lPGiXGcndhDy472P57%2BVM4ImlVp4CKHQDDFfIMK7A3H%2FgO5jJHo3mThaCC5f96%2B5Km3F1xHQ1%2BGqQNool3JmQtFq6qI5kWm3anw3MrTft18DUdzgUUa2DLQ4w6B23wFF1tMJCnjwSw3nL0c9ZYXfLxxQ%2B2p6CUlYwmdlv0%2FlOWeaXSsy8hLVR%2FF5ggrUNjWiQgE8HTreXQA6JJi%2F%2FEVA8MSdlwA4Ioz9s79W3LXVBn5bZf08cv%2BTQEtnBTYKcWYFQ5jzUKbwvvXOAO%2BPZtd5G%2F2r%2FvCCf6zzE5DX7ZGIdFKJUdQE3LXOe3fp%2Fl88B%2BD7lhuVPWOI8pz2enmLUHbZ%2FVHXAEI%2BxumGOb8yJXgSUpYcF7f4ESVos1ATpCDumlTQ4nAyP0xwv3dNJhljMLCwZ%2F6uJy66vI64xaOfMtFaRQCpOlXXrX1dIJjP4uNRdhPyiffa6T0jtw8vrIiUxTs57NlviiBE7jFvGskwsIVIklZtfQqAXq9IBfti4clNzEYMHPffHjZX85tqeNTspO6DRxTDFosbJBjqkASo3PinDcjbbo9SFbEEH%2Fp%2F5EVBDmMT8nvcl6ngPpcjx066WvFdi9HJwX2DpMbg8YGsa%2FvgovZ6ygZ9QQpfyYrcv69y8Kls5aTkgd93CGkkFA%2Bz64dFW7I7BPhsSPRxCU9ZA2YwX4liLazS2IcCZSQ0IvFxwfPKCTt%2FFXJmy8dKEnZfOzTFsy%2F%2BrB7OvCxwQv6tixOQaG2V4ZVa6chs4Xe7hRURR&X-Amz-Signature=5978820603420b9398d9c4b088ef0ae7e07e99519cef61b71a51c304b9bf64dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

