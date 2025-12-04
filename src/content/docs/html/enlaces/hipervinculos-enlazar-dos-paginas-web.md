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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3GOS7TX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIGOGwLImmJqFNG%2FWQkL4%2BEqCyQjnDm8mlwBGwt21K5zgAiByxRBPTESAUP9sTKQQUf5upZCXPEO%2BL34xpRn%2FdDo9vCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM2pFfdl%2BY1l6lMzBdKtwDBu3mCxG4g9iH56I3a7UB9VkJmJTuLhJL4lugnMiswWhK7kv8h5WAou6Way%2FpdS9V9oZ%2FsCcCBkwgQjaGj0ripanNC6DBWe7GHNTLyf7zOSxo%2FDtX4emO1pyN4wvpBlYDEwrePYf2z%2Fx8OTMQpksfrG%2BmCRbCIKJxidkDVkNIiLV03d4%2FP3rrK2Ef4GdkWsKLfQL0tuwy8PR8q6peD0kzcj%2BUgbIwl9CrtIJW55uVnitMnYGGW%2FlPXurvPF6IYoXbGuqQFg1rHFrP6oWyNyrRklzxvopiCvmqImST26OaaVjVHU0CBjpGt1TH%2FWzKzrgoiSaloCA7Ru%2FXnrEYl4wrkG5D9vMm2Wq7NfB%2Bu5J%2F%2F6kMKYv9JS83UPBIjPv%2Bywoo41mGGU%2FhdqAWeFWMoGyLl06D1I0xhxDj93ZiIN%2Foj%2BiuuQt1WqDnmx%2B7Y6YKNfj6WkO5YyHZ%2FLCWyJ41og%2FpfGoMqcqmXOyPY4uCUbwNBgCqZJfOciW9Xn1eQwB4D7GWrmFsoNkAfwjNpshK8SlxY%2FpUPA%2Fg81KD03tmfJYrvtuij8wlpiyhopJn2pwNH8Rx5Kn8m%2FPWEnMjpDmLerofAehOOfzwItk0VLFTFGjDYX3y8jeQQSoYMfaq7pIw5ujEyQY6pgEx55j%2BKPUY0Ged%2F9G2qB%2BmUc%2FyLf%2FiHR%2BidEs2wi%2FJ0nWGqDsDYSWXHdJ3Dyl3KNXDHlDurtEpSpKmwpmp0W4nNJMh5mTjV%2FsFvY1tz%2BSlKubMHIuhFNq9vyxRc71DR7WB%2FZjTqgTmeTy21wbSxDXEP68fKJm6Lb6WhXNhJfNW2Fd9WjgNlTiN%2FNUIa1DbbnP38bLsvhwE12GOLDq68LjazL7PPccD&X-Amz-Signature=4af72aa5d6509857fd8c075ef59655d9d45b73c5bec940168e62641c8ab8d998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

