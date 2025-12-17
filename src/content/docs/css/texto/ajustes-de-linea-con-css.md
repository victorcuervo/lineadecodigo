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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ETMBGLK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw7jDQVsRbctOqSaRBUgGr0As8hPE7q2AZ5mtYCLVXfQIgEi4xI4y7drfmPgKtKdWGwh4TE6zz%2FJgmBvtzkTorZo4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHBInQ%2BjpzCUtlDE%2FyrcAwmeV%2B5ACvgWNbK1UVmGEVmL9mIB7arPZzRlom3t9U8LITAtB4UyMzhz%2FW2dIaBLSckoRK%2FFJ0kNp7WeSrAXgtVKBSVFxkbGhHbKgLkpgWfbUgrQJSfGfGuefeucj%2BmciLPXhHi%2BqVEGQhsJfTH2G%2Bjh9Nmx3Tl9uqwQIh%2BazaS6y3B5wJjpCL7hwu9En9eUF6Uf8l9nZN%2BtCDhBSHaM2kKkB4b%2BrBdPfC72vuubdEo8bii74GkdnaJxPYugn9jJpkSyxcggJV3xh6M6TribB%2FLu5m2s8Nu%2Fm3YiUFsZIbHVDj3GZCXAWrtN%2Fbm3h2I%2BAjK2Giytx7xdca3FRMXD5ttWO7UkK9i%2BwlFF%2BIQW3R8Dk%2FPZHh2TfktU1l%2F5%2F%2Fc5eb1NI9q4jiejlgdv8GsTkqqq6xoOk5tmjX96xbE5u7TbKXhFZJHkxcVU2rsvotQWv3Rznjukj7ZSVCt0vdCNzE8jVzyTuyRSNXQpckqCJl3kWFWwrokdlFjG4nT4gxqcWLo3RkMXlRnZk47e7n2FfaWauRoZvxvKaljWp8AIzjk8neqX1w7GKOp38dVTUZVPOKbqNwU9i99biuF5vo13Ik%2Bg5qrnvPTr4ntBbeDqFB4Otv%2BHy7%2B1FSy3VymSMN7eh8oGOqUBOgxmIiY89lyxfJZL6Vhu9bYWY26bsWC7YB4s69rED22xwcD868%2Bk2R3tNo5VnBC5g0cB20KQjWLloRR5cMmtO2GxdVWX6YjrEXbuhe8kvAHcPLmqyk0smvUPdcn00vcjHv2V2K8gLAcVUzRHK39mCAQGnNvbK8ts09IHDHL3JGb%2BAuRfWeG1WEaSX%2BVLH8lYTUOL9zALd8KPiHN4%2F4PoPuj2ViKm&X-Amz-Signature=6187af96dbe13cad2a95f3059fa310d894adcdb4689868ac0533938538b21805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ETMBGLK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw7jDQVsRbctOqSaRBUgGr0As8hPE7q2AZ5mtYCLVXfQIgEi4xI4y7drfmPgKtKdWGwh4TE6zz%2FJgmBvtzkTorZo4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHBInQ%2BjpzCUtlDE%2FyrcAwmeV%2B5ACvgWNbK1UVmGEVmL9mIB7arPZzRlom3t9U8LITAtB4UyMzhz%2FW2dIaBLSckoRK%2FFJ0kNp7WeSrAXgtVKBSVFxkbGhHbKgLkpgWfbUgrQJSfGfGuefeucj%2BmciLPXhHi%2BqVEGQhsJfTH2G%2Bjh9Nmx3Tl9uqwQIh%2BazaS6y3B5wJjpCL7hwu9En9eUF6Uf8l9nZN%2BtCDhBSHaM2kKkB4b%2BrBdPfC72vuubdEo8bii74GkdnaJxPYugn9jJpkSyxcggJV3xh6M6TribB%2FLu5m2s8Nu%2Fm3YiUFsZIbHVDj3GZCXAWrtN%2Fbm3h2I%2BAjK2Giytx7xdca3FRMXD5ttWO7UkK9i%2BwlFF%2BIQW3R8Dk%2FPZHh2TfktU1l%2F5%2F%2Fc5eb1NI9q4jiejlgdv8GsTkqqq6xoOk5tmjX96xbE5u7TbKXhFZJHkxcVU2rsvotQWv3Rznjukj7ZSVCt0vdCNzE8jVzyTuyRSNXQpckqCJl3kWFWwrokdlFjG4nT4gxqcWLo3RkMXlRnZk47e7n2FfaWauRoZvxvKaljWp8AIzjk8neqX1w7GKOp38dVTUZVPOKbqNwU9i99biuF5vo13Ik%2Bg5qrnvPTr4ntBbeDqFB4Otv%2BHy7%2B1FSy3VymSMN7eh8oGOqUBOgxmIiY89lyxfJZL6Vhu9bYWY26bsWC7YB4s69rED22xwcD868%2Bk2R3tNo5VnBC5g0cB20KQjWLloRR5cMmtO2GxdVWX6YjrEXbuhe8kvAHcPLmqyk0smvUPdcn00vcjHv2V2K8gLAcVUzRHK39mCAQGnNvbK8ts09IHDHL3JGb%2BAuRfWeG1WEaSX%2BVLH8lYTUOL9zALd8KPiHN4%2F4PoPuj2ViKm&X-Amz-Signature=0e4ecf690ce9dc549659efd5357b3388b3f9f239045b8ea2408e89ffba4ac989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

