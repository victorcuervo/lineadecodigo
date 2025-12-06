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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T763OYSO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeYRNYa3snO3Fx%2FUw07oEHvH5E3ieqoLBDBYguvAtCZAIgbDAfTuFVXQywhVj%2BiCbpu8jZqLjz1v%2B%2FEWIRUYANavEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDE%2BzAHxkEiGsPfiZOyrcAy2dTqrN7P%2BrQ1SmxLvf2FRN3ujIiB5ryxRnOMTJmkKervhy3UDUwmdgvKtlPhPqipRhTjNtXnbtmlNATRoK8CzloYX%2FtPmK8cqSeDl6PCuK75swcXgeUoOuNlAQ3Q4GhBoJFAuT1hBHU7Q69lXFnXPxCJYTAiJYj2DeZ11HZayVF4%2BHWQ3U2C68Mlo9EQ%2F%2BWS%2B1ryYmotPfyK3xr%2FE9jkZ3Y4xYvyxWWyZnhMbB1fJNXl2rKPU%2FtRp3uF5AbopvFGDQewllKuSLVX%2FL3sROJP%2B0rgsWkbSACGNzuTGznGB8dvgaTMzmBSW%2Fkc8Zt0tLLKMtDvQ7Rao4KZ0LMB66b4VxJdT60oFWB0rQH6VFVPQ9dqA3pQzbyr6n6GTs0fUY8ecKInZECCq7kfbpNzc%2FYmMhvaDlD6bPJ%2B8C89qtn8%2Fk01UtW4oAnZ1FLfROVw7TFtnAm3h7UpR5W%2Fgd41C0bINgBknUGpH5un8j7KPEAfvRFDvbMBIIL2iATizxcosTDdeav45okUjZzq8T83WX4c7ID3yS3YdAeT1lt2osdv0Kttmj%2FM7b4KfFcYLgiCohbprXY%2BTE1aOmu5l%2FKeQGaoCWCULrGiKWz9JoaXiOkNA3kwexLumGXv3eowVmMKam0MkGOqUBjQfocDUvFQFyqtV%2Fd%2Blr%2B4IZhRvkGE28PwLJGyV9kdU8XhY924OdQhSgp5IbwB2aTgiet3fNFOxjjKywlhbTE6i1ZMSatdtmj3hQHkPXpbpUEVEwtkaeEvFkyZu3U7ndOwRpplTggH1dW87q64He%2FDzHWO4KE0myYe35szC2nhddfQX2Q6p%2BUWknEcX1uAMTZs%2Fgydz3kJNofRoFAFzFVxuTebom&X-Amz-Signature=7bcd72adb7fc002ae4bcebf4908480f17ce6522cda1ce1db509fa0b4159aa6d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

