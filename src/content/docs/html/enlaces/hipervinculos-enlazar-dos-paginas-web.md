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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637GIOVKM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyHjn1Y4YuDfuaDWEXszUBy2iH5ucrPpuoOfQCYX9iiQIhAL1PZHM8BAWDSQ2YVBiqQjCCNFRdCRjIcPB5kMmoqRFfKv8DCHoQABoMNjM3NDIzMTgzODA1Igy2yhJlLSR8%2BEFptbQq3AP8R1EaPAxEMxnUjhEgWLa9UDOZzNRPO6kFi4AIxe4el62ubHqYq%2BZwshpWqRulSHwKbbipItEzRJSa6ccjuOoHPsap0pWi1GpQuRUfvPAOwcm0l9jBsRNvuNRBh4x0ApZFDVVRFZR1CMa1bicLGfg9M9Z6iKGgsFZV7OceGeuvghSv3mh7gDc19aMoIKwIoi2QikkH%2FpguvdqMS0JWAxm%2Bs724mBz3dfs%2BxgyOKsnNpCUgfnpuDwndaK8FvF4xWRQbrDx8FQy3KMbfA8KVSobWy%2BTuAbVtFPG3Nl8Dsp0rJnMEJCqHm%2Be3Rjf1yQE9ZKPCKgJmxVVNvFS%2BaGQ4QX1XgucgGE%2B%2FJ0PkPqlm1AhbkNigPXZOjNr7AUoNJBE6xiNxbAWX%2BgTnQbiZky74RUyY1dyh%2FVcrdyOGOLuuBsNSAMBMd32UxYFe4aZKQZuWDFRPZ432ejcsMlTmgaLL86WrnHrYxF0HlIoS9T%2F7Ovi7W4PlZ1Krjc6upzXjw5LPrWeLopMG%2FLPN8qmRxfcUo%2FLedOx2bRwxvLr%2FKoAxaaI2V4HLJ8pd43qfMLnAC6OSsa%2BaNSzqrNoi5yU31g1XQUUuIzv8YUffID0fY3XzNQGnAt5FK7eIax9hpDKEGjCjxdHJBjqkAVbkI7cVB13jplH%2FRVztN4rkQffaIC5phWIAmqub0okxd8zdAta5YiRGF5QSkrUC867%2FYDhJIDxTFWOK%2FyxPF1x%2F0VowcTjaK%2F3thvYBJ3zTGgET6GLcjcnnz%2BWZAtDcYVGX%2BjgEABNMiYbiSOOJrXtCfoszlvAd4kbqcgeVuM6lzm%2FUU0gwx7hyfE8oNmfJD8ZltRZmqXu7N6%2Fq0T%2FlOR5qDnb%2F&X-Amz-Signature=770168632f6e5f8a6bb6e0811e888d12b3792e4036e94c82a5650a80436f3234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

