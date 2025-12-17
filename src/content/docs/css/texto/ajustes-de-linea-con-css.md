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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU45LUMF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiqz57tXqJK1O4KCvg7VkbdwvXbAC5%2FjFj9CRD676joAIhAL0Y5ZJKd6SJekEmVvJJ%2FVVeXmCz2Ri8hPW6GX5MjLYNKv8DCH4QABoMNjM3NDIzMTgzODA1Igx75lJ4llj4XOdUxNwq3APKdDHYcV3f%2BHl7pW5eFm8IRFYYOHMzgGB%2FNRiu1hqf9caUXUG9CQfLV9dkLUrPrl1JY8rCYWrrV%2FjiCdG0RzV2jU%2Bl%2FqfsZgeOG7BV3uEylP2dlBH4mJikHhI27RjTgx9K%2F2DD%2BGhOAmc9gUx1BX6w%2B8MEafC592%2B51mY%2B%2BpvvfeE3ZG0EPIZM7TCGBB0njeLkdunoQX5Pl80xNlXjLKYSlBF8%2FkCwcZurOuSgMlg1mw2za%2Bl5Y898fEHP8ktpKYHOwQly7ywfI%2BaE%2BT5KC3%2Fk8XAVlj%2Fctvb5R1hCe2FFEy7xNDG7i9NklQl67Hw0by8%2F3QX%2B4QsqR7gHaqwbKHfsidVKEH6%2FbMBq3x5dcrL%2BaJlps5WMAbWqJa%2BqLEGM2dVMqlMkxqDl8EFWKOoommAVyoSzKQX0w1SNVjOweFeCvVW%2F2rbsXu6SF0vJXFSNCI4Brxud%2FDSDInL3QRcDysszJRPVeEv1SdfPmLMtiK0%2BsgMxpMNfjrnFLKFk06Nzsbs3SdIhD2Fg6MhmPHOJN4mOjbkdt8LTzrEw7EsZP42ccK58liFnHLzez5NrWXXm7qxrOkujlNvtFu94mGtCu6Q7d6SC1HPUdAOrbZofP5dCEkfATLmUH2Tm2%2B3oPDDTxorKBjqkAStSur6RZQBlh6Z9S4F11LpHMvDwZC1ZFFyoK8Q41uTiLH0ZDEEnaojSpeCNu0TqzJ%2Ff2vyHLCAf%2FzLwfWFxnGaNUhfTWDOqYTyJx6a3bXBdSoDh3vDomavIud2sRxnPISEsVh7ZGAVc4XFpXbct%2FdTd6Ybl%2BQt%2BFnZbnMPWCdTacXPN4FJ1rgKNOyRofJi%2FGMOuCUGNJDRRlTGD1HPY2cEOMc%2BQ&X-Amz-Signature=90b638f3291a9a7997f9fc60c544c65219124a8d3eac962a55159e7039b75299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU45LUMF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiqz57tXqJK1O4KCvg7VkbdwvXbAC5%2FjFj9CRD676joAIhAL0Y5ZJKd6SJekEmVvJJ%2FVVeXmCz2Ri8hPW6GX5MjLYNKv8DCH4QABoMNjM3NDIzMTgzODA1Igx75lJ4llj4XOdUxNwq3APKdDHYcV3f%2BHl7pW5eFm8IRFYYOHMzgGB%2FNRiu1hqf9caUXUG9CQfLV9dkLUrPrl1JY8rCYWrrV%2FjiCdG0RzV2jU%2Bl%2FqfsZgeOG7BV3uEylP2dlBH4mJikHhI27RjTgx9K%2F2DD%2BGhOAmc9gUx1BX6w%2B8MEafC592%2B51mY%2B%2BpvvfeE3ZG0EPIZM7TCGBB0njeLkdunoQX5Pl80xNlXjLKYSlBF8%2FkCwcZurOuSgMlg1mw2za%2Bl5Y898fEHP8ktpKYHOwQly7ywfI%2BaE%2BT5KC3%2Fk8XAVlj%2Fctvb5R1hCe2FFEy7xNDG7i9NklQl67Hw0by8%2F3QX%2B4QsqR7gHaqwbKHfsidVKEH6%2FbMBq3x5dcrL%2BaJlps5WMAbWqJa%2BqLEGM2dVMqlMkxqDl8EFWKOoommAVyoSzKQX0w1SNVjOweFeCvVW%2F2rbsXu6SF0vJXFSNCI4Brxud%2FDSDInL3QRcDysszJRPVeEv1SdfPmLMtiK0%2BsgMxpMNfjrnFLKFk06Nzsbs3SdIhD2Fg6MhmPHOJN4mOjbkdt8LTzrEw7EsZP42ccK58liFnHLzez5NrWXXm7qxrOkujlNvtFu94mGtCu6Q7d6SC1HPUdAOrbZofP5dCEkfATLmUH2Tm2%2B3oPDDTxorKBjqkAStSur6RZQBlh6Z9S4F11LpHMvDwZC1ZFFyoK8Q41uTiLH0ZDEEnaojSpeCNu0TqzJ%2Ff2vyHLCAf%2FzLwfWFxnGaNUhfTWDOqYTyJx6a3bXBdSoDh3vDomavIud2sRxnPISEsVh7ZGAVc4XFpXbct%2FdTd6Ybl%2BQt%2BFnZbnMPWCdTacXPN4FJ1rgKNOyRofJi%2FGMOuCUGNJDRRlTGD1HPY2cEOMc%2BQ&X-Amz-Signature=01977c6359f9edbc7a26f3629d8ce52da69ee29f9209c86523dee89b8f1b342c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

