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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYI4PYME%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbYGMsCk9wKRaOwH0J%2FUEVyoeRApyN3ridCBTfRwJpOAiAviizizk3s3K7gpTTzDeJxCLnX8ByfuZz6HgUM0PL7ICqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMREXM6XIrSwk1gP8gKtwD27qq7PO5zdB%2BGB0SvSpQKRkbTbEM1rW94iFnSbGK0h7iYOC1zrlw%2BWxG4CqG%2Bkq8lfWob5qWLModA5odLYt6TyVbnmGzRY%2FJmV2V%2BOoaqMyFGZeWIjyhNSzDuAM%2B21U%2FPyPz9ooV4HPSAniiZTXhHBlzmG62gHk8BBidk5FFhZ%2FwVK6n9YYBIQnn%2B7SLtn96asNTx3eqJ%2FhJEwsdr7v6cQBADRT0GuU0m2kV%2F6UoWrB55izKMmptgf6GMRP0swW2denDc3H0QdjWEVbeYXao%2BqVcNxj0soqgi9OVTvHhlH83gHZ5CGM8WBWXHT0CpMRFokMVvy4F1LsHojruIsll7K8ypRztjbRTsGHfI%2FL1D9YFea2Sw%2BUqbmRORfoOWqKetrbVjAV3BJJv7vLCX8UePyBceeP7YlJ9xQr2s8k3vqA44lZidJMLw%2F5RBlunOfwiHdi5VEGVpvITLsFStWchxAK%2BADgVwGKz1ZbSAPGFUCsCXBWHlMyN21H3qwUMQuMGuzFVBvcLmkIh5K%2F6ImnZHPL%2F7FIeHqroU6HcYD5kVlOBA9CT08RyjY76gFKroKajkb1GDcrzeXzGkf0xBqs2eNwibDsaRAz0qNRiyWueco2%2BXA6iI7PdanUKc0ow6v3SyQY6pgGki5hD2Q%2FYZf9Z%2FiU%2FFcHJmdzXK4crKONbeCyhc5p7%2BSKAghT9aiiNrf2QwGIsHo91Q%2FjXE0J590541Epp%2BI%2FI2ilyFH8crHRTwVk3%2F0RxY9LcRJKERnUzNsiIQanXJfvY%2Fy4Awq9ndTTh8KPkz4uc7BiiYgnGLSbWtZjK7ot9zT%2F0tVxJxlIHF6oXW9nFcAh8Mcw9c1v8cvEfpAEZRRw6%2BN2rSsnc&X-Amz-Signature=54065775d7b472498de717d00fede312f825bfa87189341047fe295d4499abd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

