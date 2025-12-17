---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675WHBBEM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjP6kbVYRRyRr%2F4JdNGjFXpXNNYS4cBKYYmtzgzqjVPgIgHNiNOsB5HRzZpKwod3Do7uqNT2vhZO4Bcfa%2BQUWrmUgq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDF8p8gIGzumG1Bpn1ircAwQXpKpc2GtV%2FKb7JZ2d9BKol64PCzsakopxxEpcopiIvtbs6b8DEpMj8hLgfQJmkfLxmvoVfxXiLlmbj%2Fe0wH66q3gOyRKiFnhitUZM0aRnwsOcZH55XEf3B83FE2E5xsIrnwCMRFlwes0xKbn66tW5nzEC7U85ZXtF88Eo16a%2B0nbasx4iLiG1okXewHI1KWw9G60wCbDeNVGuUvJJt4p3rTstyN9Yz09lTl%2FO4rTwXQfdlPA9TU9oiVz0CbZ2D0N8xM0jx7mJNAxW0hM%2BQOPFiPT1l7dK0bQYsOXgfeBGIaSZqsurarFTNbUmVTvEbC64m7eYPd8YWCSiryVfQ1VcWuSXuYT9YBNvzg5gbs9CFcAL7yFGKGCkEZUdtQGjW%2Fd2S8IkJRbRWIC%2B1l3zplBLVAtQI%2FNM%2Bb19Ei7QOHm593d0nU3RdVgDN5fXtpXyp0cPldXnT7z5Hq%2Bk2THSnsIPAJyxWFjP%2FOWHx3X9qApwbfulfaA8AryXqK331mdUWh4bv4nW7q9eXGN%2BO8LrjsGY2w9f0j6rlydeeZFAjX21sClBHxCJI77zE06mWS05y2t0NsMSNyoEegA2wUMjW%2BHrgBZnEwz8k6dMU7n%2BOf3ZMW2uWUO4nHRdzQ2oMOvwicoGOqUBlTkTkH460gXKNqsSyjAON9bddA8HcSemPRq4vMwxzph35OLqe6VAorW3jNzpFMZ32Ou%2BuJwYGHhobK%2Fe8DCnPNAQbUQTVDmeqkRuFsY8XP1Tb8P2y%2FT8bnQ4Ecg%2BSvbyQZ2lEKlCljXEs%2BQHgHRwfVUAjOlDjV%2BUdtOXqYEf5cpd3kjlloNpFBXQrjVx%2Fso6AxyscsdHH8%2FPmW9JNSWP008CC6Um&X-Amz-Signature=292a5a013116fe6b244841cb4bc1b1efdd2a8043945727e70d231202d43dcba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675WHBBEM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjP6kbVYRRyRr%2F4JdNGjFXpXNNYS4cBKYYmtzgzqjVPgIgHNiNOsB5HRzZpKwod3Do7uqNT2vhZO4Bcfa%2BQUWrmUgq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDF8p8gIGzumG1Bpn1ircAwQXpKpc2GtV%2FKb7JZ2d9BKol64PCzsakopxxEpcopiIvtbs6b8DEpMj8hLgfQJmkfLxmvoVfxXiLlmbj%2Fe0wH66q3gOyRKiFnhitUZM0aRnwsOcZH55XEf3B83FE2E5xsIrnwCMRFlwes0xKbn66tW5nzEC7U85ZXtF88Eo16a%2B0nbasx4iLiG1okXewHI1KWw9G60wCbDeNVGuUvJJt4p3rTstyN9Yz09lTl%2FO4rTwXQfdlPA9TU9oiVz0CbZ2D0N8xM0jx7mJNAxW0hM%2BQOPFiPT1l7dK0bQYsOXgfeBGIaSZqsurarFTNbUmVTvEbC64m7eYPd8YWCSiryVfQ1VcWuSXuYT9YBNvzg5gbs9CFcAL7yFGKGCkEZUdtQGjW%2Fd2S8IkJRbRWIC%2B1l3zplBLVAtQI%2FNM%2Bb19Ei7QOHm593d0nU3RdVgDN5fXtpXyp0cPldXnT7z5Hq%2Bk2THSnsIPAJyxWFjP%2FOWHx3X9qApwbfulfaA8AryXqK331mdUWh4bv4nW7q9eXGN%2BO8LrjsGY2w9f0j6rlydeeZFAjX21sClBHxCJI77zE06mWS05y2t0NsMSNyoEegA2wUMjW%2BHrgBZnEwz8k6dMU7n%2BOf3ZMW2uWUO4nHRdzQ2oMOvwicoGOqUBlTkTkH460gXKNqsSyjAON9bddA8HcSemPRq4vMwxzph35OLqe6VAorW3jNzpFMZ32Ou%2BuJwYGHhobK%2Fe8DCnPNAQbUQTVDmeqkRuFsY8XP1Tb8P2y%2FT8bnQ4Ecg%2BSvbyQZ2lEKlCljXEs%2BQHgHRwfVUAjOlDjV%2BUdtOXqYEf5cpd3kjlloNpFBXQrjVx%2Fso6AxyscsdHH8%2FPmW9JNSWP008CC6Um&X-Amz-Signature=a814335b94e556d693c2559226161bcaab53cb9473bd1209ecdf5cd88941f4b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

