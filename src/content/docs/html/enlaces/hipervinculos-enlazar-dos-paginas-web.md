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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X45WZ6RG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNs7GiGtvtcDoQecBdTcyFxoAbg17pI7FGY90lprgjTAiEAh%2FwbV1zxJJgrTtBLcb22E%2BEhHHXQWgu7A1tr38S5lZAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7Z97CZYzIKeGXxJircA7ulAQUli9heqU7o%2B7JHLd8idOpzo7uXcaC9vYKaBU1SmwcIpy%2BMPa5snLFJiJ%2FMEscf3sDMqPlqD%2Fhx11T2i1X6842xjMZDKH3xfwoBoORVm9quLqViL4nv9IkH35q07ViJyZJe4acGxOzYet6sZVO5U1v8srXvs15krhkGCbiT8VOoB6hYvHAAdZrVSh1HX4g%2BGXe7lSc%2F0lt1mza2xGFExbUG84eEaadkIUtR83nOwQ9cCjPh0rW4%2F9a7C9Yq2n3w2R92wPzzuMqm%2BGB0sLX%2BCJc2I1x10kxc%2BmpGS5M6xCoaYweQz0cwfkcUCzieOQ0P7zsCCEINo9KgPzyKWN9bwX2riuRIWlY2Yf%2Bl7RI3daNl3DyIAJcoBOKPtXVO5KOEOezY3FECl2wa0Qqf27fDEx8VNFvcE0JlpJmG4wACQQrtenbmAmfQOWyNcURK8VQXGekz3t%2B86QfvKlG21%2FhhPTVfhy%2FHE7XPBE6Zu%2FcmwUUQT0zeVMmn7Da7SD8%2FijbQFZ%2BBOzifxyb0xlEyeYT1JGGy4f9kFp%2Bus9%2BmHSu5wxi5ftcISsJwGHgiAdfsn8956sIndsWOe8yk%2BIgcFcDqfrvj6RYvHPOf%2BiS3DInohXxaE%2BLCUp75hzKUMMmP28kGOqUBWyFooPNwg7O0UMZGm5orPt4jfrvVvAYR84I0k4xvKuB4AQBZqcga0k6Qnq%2FRuNCDUqtVcxjYuLDe7%2BNz3yd3NJA3UwLWEOj1UoRiCOTbx%2B8mH0eoJxbGJG7j3Fj%2FoswtInLp0KN8S0OYJSVNlIvvGaTE17YcUTXrktzdhLhJRNewOT449SSyL%2BjI8vys0y0Zo7FQs6A3tVWRiCNBCDo5bm2w4fOi&X-Amz-Signature=7f08554a58718741982e46d3a0ef69bfd050a7fc26fcffdc5d188174683fa637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

