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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXW7HEGA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2CEOh3msSlvyVXlMCnwkR%2FXH7Xpw5TfHnwR0422yx2AiAbWrdhHo8pMc%2BEi4tZlc9f6I2oLiwOxXkEEzwgYQBN5yr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMbnE1Tr8tlSfY5qzMKtwD06n58I5BcpPUPrEhLugy9dGRimQjhnkAVhfiuANsT00vC36P1034qwWvYQwOre1ExQ26VBQuDhNVNMSabdIynyx780bfKiVMdZaA6PjPg6Vr4CFh%2F8xsSJ74gykrGp11RvePkqJjTTBtIdUviUcx3vY%2FGWpUid3xBIsQ%2BzZWNF8xUb0Rr15jlD22Xxs1yT87fZU6%2FgEiaqnSQW2WaZBVymQf4YzapiNEQC%2FCrnbUjDrNy%2F8VavzU9SqQQUOZSHSgM3%2B7FWIMK39Nn0jGZ8iFYnUHVdfyLw5e%2B3Gju8dfKU4KhsZbt4lDmp3FSP86xSxrSjO%2BPO6mLF1WwXmrvoUssq%2FBJRcXNQH1kMpwzDWpJndLHePNsztC4YZBlt2jDtlGgkV2buO9Jvi7E5UseRSPINa7Gxhqu%2Fq%2FX6EhMcwq1h%2Bz6ILtH2k4OgP7WDuITtRYCcaaMIPpQu37zp9RHnL5CWzwY8y646XwLkfmvPxEgJ2TSB5ftmDC0%2Fq3d7CbclWo8LsIg9HECRQPDEx2YgzAz3hbfCaKHfRYsEMuofL18dq5goQXDY57RN9h2eJ805cG8p7r0TgW3xyJl3xfWOm6nyPqMoI7Z%2BLb19pYYS08ijW5Mf6pkihi18xsgIww2LGIygY6pgGq1QvjANJUXbYcEPlgzWL0L6WULqHX1zJ7SMOoVloaxREPGxDJ9xI7fFTteIfzVTd%2BYroyftJ0Au4oykmFyx%2F9tNgc6NDO7IJERJrcxj7yZptSRO6ja46Yuzv8taj5GVAuPKG3B%2B%2FFsEulaIvzrL7NZkCOYWBmFPlJciS5o%2BKT1IZ7IC3oj3Pxmg9%2Fr5xok4PgFdxr3dTw0IyOIV0Sho0rSqIEsWrg&X-Amz-Signature=0e71d2833f986f0f06aff5b0996b388964c0660bfb63dc90e2840453037bd283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXW7HEGA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2CEOh3msSlvyVXlMCnwkR%2FXH7Xpw5TfHnwR0422yx2AiAbWrdhHo8pMc%2BEi4tZlc9f6I2oLiwOxXkEEzwgYQBN5yr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMbnE1Tr8tlSfY5qzMKtwD06n58I5BcpPUPrEhLugy9dGRimQjhnkAVhfiuANsT00vC36P1034qwWvYQwOre1ExQ26VBQuDhNVNMSabdIynyx780bfKiVMdZaA6PjPg6Vr4CFh%2F8xsSJ74gykrGp11RvePkqJjTTBtIdUviUcx3vY%2FGWpUid3xBIsQ%2BzZWNF8xUb0Rr15jlD22Xxs1yT87fZU6%2FgEiaqnSQW2WaZBVymQf4YzapiNEQC%2FCrnbUjDrNy%2F8VavzU9SqQQUOZSHSgM3%2B7FWIMK39Nn0jGZ8iFYnUHVdfyLw5e%2B3Gju8dfKU4KhsZbt4lDmp3FSP86xSxrSjO%2BPO6mLF1WwXmrvoUssq%2FBJRcXNQH1kMpwzDWpJndLHePNsztC4YZBlt2jDtlGgkV2buO9Jvi7E5UseRSPINa7Gxhqu%2Fq%2FX6EhMcwq1h%2Bz6ILtH2k4OgP7WDuITtRYCcaaMIPpQu37zp9RHnL5CWzwY8y646XwLkfmvPxEgJ2TSB5ftmDC0%2Fq3d7CbclWo8LsIg9HECRQPDEx2YgzAz3hbfCaKHfRYsEMuofL18dq5goQXDY57RN9h2eJ805cG8p7r0TgW3xyJl3xfWOm6nyPqMoI7Z%2BLb19pYYS08ijW5Mf6pkihi18xsgIww2LGIygY6pgGq1QvjANJUXbYcEPlgzWL0L6WULqHX1zJ7SMOoVloaxREPGxDJ9xI7fFTteIfzVTd%2BYroyftJ0Au4oykmFyx%2F9tNgc6NDO7IJERJrcxj7yZptSRO6ja46Yuzv8taj5GVAuPKG3B%2B%2FFsEulaIvzrL7NZkCOYWBmFPlJciS5o%2BKT1IZ7IC3oj3Pxmg9%2Fr5xok4PgFdxr3dTw0IyOIV0Sho0rSqIEsWrg&X-Amz-Signature=050f2664b9ac5770988f9c277506bda4f7353f050d23db24296e342fc42c7595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

