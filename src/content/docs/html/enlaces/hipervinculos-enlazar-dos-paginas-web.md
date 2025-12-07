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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BGRRVQP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjMdlMEgZMGcTNVJsBhh2NkNRa9uoaPN0ZQr5w8NoZZAiEA%2Bk4De7v5%2Fs3afozU7PwwK6hbraXkvqV%2Bd%2F2iuAr5MVoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7C140q8BRtlu8cMSrcA1OEOJP2zxCwQEE%2FXGtXSHeG0dSazpypVuadzbtUkgwqLtIYnN5FiYr7HxfNkrhzB9kuFbvhhXUhCrm7hj80c9w%2B5UDR8sAxHvFb%2FU2wnaL1I%2BsRef4Dbqayd8ztRcsqmlIcBboe2KxWeAV6DnL2awsvHYTjaRMeu3XAl7J%2FbQpm8QHfo%2BCVCHkVrNH7atk3oIMc7p%2BlhggTpgGXDfJB%2Bku06eh1q6ePvw4sY5ONcm6oWgm0TOZAxP0LVlh2vJ9IItNYv%2F%2BOQrsg9%2BuGThY6eUxF114f5NOTlTyuu82Pv8bMjomBQvzfTugP7zxWEdLHfzgVe6eBQ08ZSuqfRhSmkKAm1KPxa3dcuqQQjw9prTBcDnTt6U3ePqgnYLp9oNfD3C1aj7xpKg38ra60B6UaoXe%2B7yxaZw1yKKukHJOoYMosmPgb8M9RRjm%2FFVWliaDuXTt8Ni9fUROjt8glTLx7e8HH1hhEsl2dwkk2UQNEWUVtWPLC0CQZmSqhw8Y%2Fs9nkeizx4GSkESwCKgBgFQH56YJbjfbH6k%2F1ZnZZbtoCXdOL9a1fJc%2BN%2FbNd5VYymiopdCT9sLGaabbjMcR%2Bzej2aLkd6zvo31uE%2BdyjXoAOgN8REM383DzUk4NsTRchMIGa1ckGOqUBpvVynBNEvKtl3cPLYVJ5192pzFrU%2FPeBKCgF7W4vePU1VPO1wp6uRf0cs4gBVg7rTivDK%2FoAMgmFChla8483VQmivCzC2Gn%2F5NE%2ByoBD1AP27ALCQSb0cQK0MqbKaKeOYhNOEF5E1R4f1nrhHMifamL88Z3VRPc%2BT34LIrH12YavCs5ifnnNh6Dvq88YECRxqA2WcOMXVVMghSygEZIUZumrbUjF&X-Amz-Signature=e7145456a11e9042de8735ad790652349a0b476d4066d25a84af1891c4cb68c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

