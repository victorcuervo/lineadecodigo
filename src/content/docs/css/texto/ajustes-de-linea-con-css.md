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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3RBJIC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNQu7IoUcDBwYQKY63mY1H3iXby7a5f5KjgW6N4oU%2BeQIgWfbvcD4z%2FANl9d40ChwVXjzM%2B2OY3gZBdaCo%2BW1ei7Yq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKQKtKSrrC5FzKXy9SrcA7t48Hl%2FhWYYQQQ828Ay6brsH7Bftavqf0GsEsel8VmsabUP8a%2BL6e4xSM9a5sZ4xRkJUVfdQyNBODWyQ%2F2D8OEJjgT%2BBnUOQO%2BlvdwObTg79S%2B4ydSZ8FNXUQco2vl18JlEGUzYt1j4eHTmZxZXesR5Uibzyutq%2FTyEJ5aKQxh4pS1rctdsUarfgSFF%2F5yDk4%2FEnhnOcHsJ0meJ0nHpoG9AwVcn0On31N%2FHJlOxwZ6rRyNHGqadUDSezFbv9AnWFIlL6WUIkpTV3DGZm5K5BY2YR0kt8DHpm2uObDbOHLBKyk88ijHXgbWFDVQJlAfgdVJJsGgCZPosGEU3xtFS9YdSh0l%2Fz%2ForkK3WFnNC%2FAT7GbiRae%2BRmZAJOOHoewRJCHV1giEImfHh8FAW8kh3C2fNiHRzlvhZuhdyZIq%2F5srd229YIN8WKm%2Flsn11RC78R%2BE6UHW%2BEudUvGWfNoonOoEybvQ8Nhz%2Fr7hShPmPJ4Tkovb%2B4eovvtwJ%2FB79ixF0R04GxFMznQea7W7y9da3nZvhZKYzFs4fTt8WlyhFQyMOs9Npm9CCnSFGppoknmqK3F6uNwyDLPC33o2YUW7pwJE%2F3kPUb8OYCyg3zhU9c%2FeoqGekexHRexW%2BdleZMNqWiMoGOqUBCxSH4kqgf%2FpECA6TxYROfhcR8AZi977YiRCkYCbl3%2Fa2OAmpyqQlhvP4OG74NR92PJLjH9IMJZhRg2U51eDIK6Fo8DSmx8dzm7Zfr4AX3aECfRvZS2DWm8bstV3K0SckiRJSpjGJ8Wht7jCiK%2BE1BMuRS0ZAsqgNtQXKEyMyusXwuFS5KQ8lvl70Pg8Tu2V5BnoxXp6bbGpYw5tCYUELowwjP6kB&X-Amz-Signature=e1a8e404c2e19b36b08b3083c111f242cb2cd9c5901c7fddd91f4d252dbb9e1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3RBJIC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNQu7IoUcDBwYQKY63mY1H3iXby7a5f5KjgW6N4oU%2BeQIgWfbvcD4z%2FANl9d40ChwVXjzM%2B2OY3gZBdaCo%2BW1ei7Yq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKQKtKSrrC5FzKXy9SrcA7t48Hl%2FhWYYQQQ828Ay6brsH7Bftavqf0GsEsel8VmsabUP8a%2BL6e4xSM9a5sZ4xRkJUVfdQyNBODWyQ%2F2D8OEJjgT%2BBnUOQO%2BlvdwObTg79S%2B4ydSZ8FNXUQco2vl18JlEGUzYt1j4eHTmZxZXesR5Uibzyutq%2FTyEJ5aKQxh4pS1rctdsUarfgSFF%2F5yDk4%2FEnhnOcHsJ0meJ0nHpoG9AwVcn0On31N%2FHJlOxwZ6rRyNHGqadUDSezFbv9AnWFIlL6WUIkpTV3DGZm5K5BY2YR0kt8DHpm2uObDbOHLBKyk88ijHXgbWFDVQJlAfgdVJJsGgCZPosGEU3xtFS9YdSh0l%2Fz%2ForkK3WFnNC%2FAT7GbiRae%2BRmZAJOOHoewRJCHV1giEImfHh8FAW8kh3C2fNiHRzlvhZuhdyZIq%2F5srd229YIN8WKm%2Flsn11RC78R%2BE6UHW%2BEudUvGWfNoonOoEybvQ8Nhz%2Fr7hShPmPJ4Tkovb%2B4eovvtwJ%2FB79ixF0R04GxFMznQea7W7y9da3nZvhZKYzFs4fTt8WlyhFQyMOs9Npm9CCnSFGppoknmqK3F6uNwyDLPC33o2YUW7pwJE%2F3kPUb8OYCyg3zhU9c%2FeoqGekexHRexW%2BdleZMNqWiMoGOqUBCxSH4kqgf%2FpECA6TxYROfhcR8AZi977YiRCkYCbl3%2Fa2OAmpyqQlhvP4OG74NR92PJLjH9IMJZhRg2U51eDIK6Fo8DSmx8dzm7Zfr4AX3aECfRvZS2DWm8bstV3K0SckiRJSpjGJ8Wht7jCiK%2BE1BMuRS0ZAsqgNtQXKEyMyusXwuFS5KQ8lvl70Pg8Tu2V5BnoxXp6bbGpYw5tCYUELowwjP6kB&X-Amz-Signature=dd3d9bf70e558aaddf6585afe2f25b87db9b27b83c5ecf9221cc45bf1f25fd33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

