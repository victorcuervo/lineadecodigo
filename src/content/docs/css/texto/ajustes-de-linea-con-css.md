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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LDC6CQ7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1TvW35qaSn0ECYwrIEAC%2B7UJ2lLpKZDoR755XhSH2LAIhAMqkSMV3QCGonvfrU3wEBwkb2t6XNYBr6jf8o0yWRP%2BcKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu7kiZkctIGVuacD4q3APNOVAVHK%2B2gM1%2FP08Un0b9%2FStGaWm73e%2BhLlp2mq%2BcBrQypk4seTc7O59RYnEP5juIg9ZjN2k2u619iXPNU%2BQrayZdVYR10Ic6JNlducdlNL9vDMC3VlEkS3Af9CbqSB350Z7IW6J%2F06boWJfcSMIvXgKbfHgzAdLMVYXr5nkLiI3PPpKMyeBszI4Ip8mlAyzfTigpSqo1Eg7JYxldIr%2FsqVPtyPtLc84r27bdXR7TpXTTHWkPljg0qd9sC97wrlY4TgWKYaZobmu07mzTbuuvBleIk1RrRbAeQW%2BXWD7gJrMRJ7NCBUhXKlX70M5Xxec3DViRYgoft7zZQQKS2yBa%2Bi5IqEz%2FAaKYCP7lo1DQD50%2FSEjqVV6dcjShOtuf%2BSH7ZSvDq0%2BbeS3WWL8lvzfP0gmqWOk7%2B3yH%2F7F67Utn3uVo9qc0EucKNmct46h7TY7TxBAQ5qxOvdv%2BreiD9HRUZHlqQT869h5nRd8tgVOhr9GDSa0aKXlfaEFK2RkHBtSOthLVc5N17tihwIMyhgYH%2FjELAZ5AGnRydgp9IUEiARJFuSXBwzvmY8W9E0PNBUz%2BLMBCkfl1cjpSr0nGDXl9TV1V5MybeDED78e2Es683GmqIpcL1XeRlvc0KzCCi4zKBjqkAbHhrNWSQOAK6yg145NmO4EtQBwfDrU4doi7fsYfCaOJaR7mW9qzO3aTxW3fS7seZ968uW7e9xHGDZIlSIY0cBTJ%2FX51rhmxO3U8XzPK%2Fm4CzZWrHlzQvTiVoVujsT2pj0ZKx8Tjq7pWaSKcoCYi4wiVm5bojPEJc0YgMoLLoXW0niC7l9sK6JIfndNFwzLi9%2B8ntK1S3yl586ZGQajvKjJp0cKc&X-Amz-Signature=e09531d74af659ff37bf7a25ef95020da15056564245783a12741fcc91989515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LDC6CQ7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1TvW35qaSn0ECYwrIEAC%2B7UJ2lLpKZDoR755XhSH2LAIhAMqkSMV3QCGonvfrU3wEBwkb2t6XNYBr6jf8o0yWRP%2BcKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu7kiZkctIGVuacD4q3APNOVAVHK%2B2gM1%2FP08Un0b9%2FStGaWm73e%2BhLlp2mq%2BcBrQypk4seTc7O59RYnEP5juIg9ZjN2k2u619iXPNU%2BQrayZdVYR10Ic6JNlducdlNL9vDMC3VlEkS3Af9CbqSB350Z7IW6J%2F06boWJfcSMIvXgKbfHgzAdLMVYXr5nkLiI3PPpKMyeBszI4Ip8mlAyzfTigpSqo1Eg7JYxldIr%2FsqVPtyPtLc84r27bdXR7TpXTTHWkPljg0qd9sC97wrlY4TgWKYaZobmu07mzTbuuvBleIk1RrRbAeQW%2BXWD7gJrMRJ7NCBUhXKlX70M5Xxec3DViRYgoft7zZQQKS2yBa%2Bi5IqEz%2FAaKYCP7lo1DQD50%2FSEjqVV6dcjShOtuf%2BSH7ZSvDq0%2BbeS3WWL8lvzfP0gmqWOk7%2B3yH%2F7F67Utn3uVo9qc0EucKNmct46h7TY7TxBAQ5qxOvdv%2BreiD9HRUZHlqQT869h5nRd8tgVOhr9GDSa0aKXlfaEFK2RkHBtSOthLVc5N17tihwIMyhgYH%2FjELAZ5AGnRydgp9IUEiARJFuSXBwzvmY8W9E0PNBUz%2BLMBCkfl1cjpSr0nGDXl9TV1V5MybeDED78e2Es683GmqIpcL1XeRlvc0KzCCi4zKBjqkAbHhrNWSQOAK6yg145NmO4EtQBwfDrU4doi7fsYfCaOJaR7mW9qzO3aTxW3fS7seZ968uW7e9xHGDZIlSIY0cBTJ%2FX51rhmxO3U8XzPK%2Fm4CzZWrHlzQvTiVoVujsT2pj0ZKx8Tjq7pWaSKcoCYi4wiVm5bojPEJc0YgMoLLoXW0niC7l9sK6JIfndNFwzLi9%2B8ntK1S3yl586ZGQajvKjJp0cKc&X-Amz-Signature=251c7f0eaa721d164852ce08b1dd95032606c55e479bf676b250f900b764e175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

