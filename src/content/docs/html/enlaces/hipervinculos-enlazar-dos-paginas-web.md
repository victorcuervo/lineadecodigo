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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEKW47I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCqEdlb07Xks95OdD7W%2BRUBsGfxqY3dXw3pV4oIHAgjcAIgYBsDTfN3EKOGtArJf1FrqNOKHYD664gCZneH%2BcnZwh4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDzoxIHj4IHNCG94hCrcA2d6OjXMT6DsVpmo7cW4myoPvniGe4xYWrCPR%2B%2B%2BijWjS5Wvzie4XexYlnf%2B5r0MTZ0JUcNe2GIF5sPEM2au1CjioGRKFrzHege4ZN42Hrt7rhfTb2IWdC41YEzhHsCIJumnqxjVwkW4Gd4auNEUUm05%2B9rdr9Fqv8WwmOJ3cl1zpkZ1t%2BSthpvN1dyijfnKHVEFYaS8hK1ebUk60X4drd9Py1yTMGCpacahdgbdTjuvFM8QLvVZCkNoIgrjgfAAVdIEWmdp3jnePyf6NfGfZVY%2Bsg6dBsZ0b5saV1mF1FeIWB2oeA6AIlKUhoRqn3gRK8A83mIt00QHbT2QLn7d2PQDmGCZZCBziOES6tNHeDksefjAVkgdqXo9lmdnIubkmhnYztRHc%2Bgn41W3DmiNt%2Bust5Y%2BLAPhVbD%2FvEKTyEHLjNHAG2DlsSrOnJo9xcGcPnZ5kzmScm7zyP%2BNzGdhE2v9hD4B%2FfpT2tsBk3DLeYM9SkfK9CHproCAKfz8xd1vmQrLcyFqtGTLoWgbt%2Bowf3LN0Ue4tjVYMO7uf2tNhoJMiaHqwsx7irpFkjhNSNNJxHXoxYvqVAQRuQbIlvZxC57SvOBeiEQaF43%2FVDPhGECtJbOEDk7N1BazxNR9MLKVw8kGOqUBOR2p47sT9%2BTP7SU13EQEvdyji9D7oAvT5ApuHYWF6ClewhcLFJiv7uz54MQYG5j9zieiyZvRyXwhTgDMjLLcKZH7fRktSJrg%2B5rkOQPzDDdAtcs8vIT%2BgX3%2BkN1NxxoxuB%2F6KspgfL0g929y16dsvUy6DAYHVbFw%2Bhpno31ZyH7GhInr%2BORBqYnLYdF8wh17Eth76eYWDOMczN8xVqTI%2BPqDR5gp&X-Amz-Signature=c2b8517edafa8be0c1f81c81be33506841ccf98a4a0aeb0257a6bc425c979b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

