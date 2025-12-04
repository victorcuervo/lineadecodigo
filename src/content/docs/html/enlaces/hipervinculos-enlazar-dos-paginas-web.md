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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNALQOSI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCnsv4vSqV9hIMq2Ijbm%2FHN0DH%2BWK3BPLEo6YSrczeVFwIhAPTa6gETGDl3i6yLs8Iiz7AqVNlF3%2Fs2XIsPfrNgx%2BDJKv8DCDwQABoMNjM3NDIzMTgzODA1IgzEQI6rFdRhHXq4a6cq3AP%2BmGdGrRjXj1gP%2Fhdy2kVgtO8nrUJcTRB28z3xwPscb8kYc%2Bf%2FNtPvw%2B1jAW7dd918vG1k%2ByAd6bsktWEY8%2BeOm8GWNiQxvwX4%2FCOiQ4%2FEiNH8a0kyPGOEirs4nMdzs9RteVJRFJsbeTwK8ydqrazjuHqgeamoxA%2B00n9RT0QkYJclTu%2BgBduBwUlEPOXFNonldHIMOWr%2B9gOPz%2BmdbqFJEwJjOMfiTKrnvvfl%2FHXyQjXFmiNEqsGvaOFwYf7yKWtJuI%2Fu2qp7EaucunfpbtLWYuA71EwxBLqNV7Nii4erJXAWu33Sgmd%2B6FIw0bKgzh2StFpt4lnn5djpbV2Zlw2RZNBZWKSRbyXTLPseUPas6DY5T%2F35iR0VUAexDDlMLBohUQ%2FJzbV9T7oGth3Pp%2BxWZPcxGdyvHsbf5fz94QsB2wbwvSxxv5gYcbIbOldBQ8%2BhWYTn0p7Mb3Dmt4b32lJe6P4Rm39U%2FNwHCn3BY5%2F4SFCylUY4mGupmOvGWUyEPsZIa2LNQfSwPtAbTAZNAZ3IbgaPwWIkqqLlAgXGvm8m0EjOkzAv1fETnJ1EehHfFlT7EiT9S8n%2B8jF9GuEx69jTTLpF46VW4aqFCDm76YJX9MWwIWA87MgV%2Bl%2BZMjC388PJBjqkAR12H%2Bqb7KK3AYoSADT476RNmPd5BQiKdUuwTYCstV0UdUk2xYI2ovX08PgEfAxdujd2dqkIj%2F4Mz5qIrii2HOfXy5bh4fx8LEG7%2FJwgzi%2FEP1Stc7fHNDLAQf3SegDT7mjYzMbS%2FaNLzi5fGeqEv38gyjUuq6lOLozJ2FGau5u4UqX6K96HLylECvkqz2C7fadrAlWjkTjsLaUsCKG3ihBgV8dj&X-Amz-Signature=abea60c736cc60fd8e6cc2d2d429857f0146ffdd56cac891a895402f71ff3da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

