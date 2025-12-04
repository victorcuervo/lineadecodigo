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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGW7UG6P%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICIQgI8xZK9T7AfEnH9jCO%2B40t1ig5b1QnynxAyko48rAiBSu%2BpdM6kWx9j0WQps45UfdX35IM42Iksswvx2t6WPKyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMevDsEmrF4W0m6c4RKtwD6USV0b3qLW%2B3GLsajPGvLAKreFXm8X52KeqU9C7BPQ%2FpZqX9jvBwYvIszfBPyd8KwYHhH0hupIQpdsneTg2KdJMknbr%2BUYTQBYqUKX6WcRkXfamN7qmb5AsczfIKIbmulXAgQSdBLwrDoQ7kvjk1MMDJn%2BySZ%2BGJD09cZmQW9LxlAcMtaA%2BT1IXY%2FVOaJ6mWdRQ9cAmyXROGUiTniqUoherxL%2FPGHCqxVh60u%2FEchzVcbo%2Bo80iCJ4HXW86jz1XV3MJua0BnHYTX5U4gtxCqxmoGrcU5MU1djuA3wuT8%2FBT1Ymrjb4tUG7cT9q67h4FzUohdDZdZnPAMqiCCOM3aD2Uc%2Flb8yyDS1dlW%2BW2bZ%2BjqKoSGHH%2FaRpQwhufojqlnx2OzKlC9IWBMp308eiXKS7UIDZJ4c1ckZKUa9RiQzw66sWN%2BCuMuO%2BaS307ZRNeyI5wBBpD0%2FwnZkQUdY5qXjz%2BZ1bnvaxxzi1f3eeYltSNH0sd0rm9OVXnlCtOJuXGWdX3dcCbYoI7kD5Pm%2BPDBpm7AH1DHtDggSDlNe8i45xKn6U2%2BNCrXvCx2wL9HTXoYmsk9gBJfKa4q4b%2Fm3xFhBWyCxuRIwpKkd2qWtkhyZ0ZoL7hiDgY5outbf7cwh%2FPDyQY6pgGWoGiYsgGMQNOu7toq8L6y8JKjUamOsD3UZ1gx4VoiEFONtI2%2BW7byJsgPFYXwQvVl9dbF6ypzatE60VAZ%2BoqnLLKzVBzwmk%2FVGn5hdQEt%2FeROP843ZtxSNJpUzZipNJEMY5wf9uethqkp7jup%2FFb4Ce3uuN3qDALCm2hIXNfRs%2BLh35tmwvgaQF6nySx%2FHjX5XDQDqKVZ7VcNDyJrubVUw0BJ8yV8&X-Amz-Signature=f426baa3ca838f6fe5b068d31f0b4942f7ee959a0c46fa7306f47b621691bc46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

