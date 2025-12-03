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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJVXQZDN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCWWyTKfpEfr251K71rH6y1%2BtPdF48bHYW8A65YqG8kBgIhAP1NEPWC0KHN%2F8yHG1Ti4GrPkZQ06F7p%2B8uCYBABCidYKv8DCDgQABoMNjM3NDIzMTgzODA1IgwjbqrmERH0JxpNFSoq3AOeZop9ILcuBkE0UPsBFeogl7JbsM63fF4iWiIQw221MaPZS58DGz7Eeq4SROQVrZ5WUGvTtiStv6HY7ehYFUCe9xoc7kQRcTDIJnoj54dAQmzio%2FcQGPcl5tXURfvo302u46c%2Fst9SR81R4qj8iIc6m2U3kOwIRbadhJq5zbA2rQ1UCKf%2FgfRGoNCqJjMRtZx8yabc3AmOb5kLmX2dTZtHVzlZGlTkr0FutXhmDq5SQCGc3lfTWVF3NAnzvECKmmt9oINuruKvKU6%2FCcJfEUGD%2FR1VGNar%2Ba43styXjgSVCoCPro4qM32zYX8TkYadJNLS2EMTVRHIVtILlIVi3XHF3bZmMJkKfiPUQQQP5beJyxgA9oYzRv5g7W0C4wXw3fEmx0YWIomiFkS5WFyQBSzbCiG7IVUabGwLsuNmuZT9fZB61tB1H6dhdzEgFUkAg3VfTIbM1N0t%2BbnQODoahnNAzzMSqUjtuQyX6vW3iHWph808pVMDlx1Sj6MAOnOMgZocuSkmMXvvjak9XO%2Fq9vQgy%2BWYXHfIecoCFgyKYf36pZw6ABq3Ug9KtFrxA8wHe8lgGZa0Sary%2B4exDY1Ae2jKC8L%2FcpCERX%2FCxWcA2iN6bquWrkqiK0GjLMk7sDDM98LJBjqkAeVvD4d9a898d493Kfso0hdyA6ja9oMTsvcSd2AtT%2FjNor6VQPdSUxq1wG0ymzHOlLz5Yv0qtD2mtWkpaPb2DPSnLGBcngqe8jkSDGBY7xxsGJ1UZegsOs9YvhrHzD8N%2Bg8d7YfA8Xv6ZCkX3rVMaoxHDP5utdXWDsnT3EURf%2FeuaS7ujT%2Brj9ThMDgLFPd6t6SxZrkq9S3lirkrHucsJskEIlGc&X-Amz-Signature=f4165de76dfbee798023f42131b5ae9fa6f77c1c45bea40bf12744b41657c23b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

