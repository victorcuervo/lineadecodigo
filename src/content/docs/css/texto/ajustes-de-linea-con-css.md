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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WANKXNDH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDglL%2FWmA7A299jblFpOatErz7mVBdTLm59YsdJpBaeLwIhAJ%2BslCE5K7XEPW1dzoTHbnbRiLNaeAUc1hUbFHdq90W%2FKv8DCHgQABoMNjM3NDIzMTgzODA1Igzs9xNCcQw9H5PdQNwq3AMl9Wbu%2BUGXEvGahaVH0b9AjX9vSSx%2FiVJDHdhEupwgq8Bc3QdJvrxsM%2FsjtGrDh%2FdKqiPEnys%2FfuXHGfYrBzKjAjUVWjsKsX3kEMcj5dIApjeyMG%2Bnq5fu5r%2FDKG8vC9bhsSbyDYG%2BXmhs5lF4TH1dEd0nPNK5nQ9SVY%2Bf06ZUd9vgpKu9h%2FXjKT7Hoq0Wpe%2B8Xxi7rIRHMdAB%2F5HYoPH2coESCbs%2BhOzopu0NtMRHMIWKKuUqLGb8z38kM1gjEh2WO543EBkoESQqEcH%2BX8QkoOymEJqKridij94JSAmHGnEl7X73CmGlLR1SEITtHg%2F25Plvo1QHUKeI8JZtUH3HJYKOsp%2Bvj%2F2lxZE47M%2Flq6ht2OBF9p1Jo0OFFzm2Wwq9MfVtsB2T%2BI6ctUfUhCOKhiTFw49Kv2C5MSY4if2dFhtIa%2F%2B63DY4bgTyCXm6iqepjLf4981LyTQ33gbwan8r%2FhoWuunnZ%2Blq2p8DMmfNTai%2BAzfnSqdXhCKiQAMZi93V7fIJuo5T%2FrIm8%2FdpIl25JZxbnsxeU55KSWcDw%2B57mvd1V6hlh52I6pxFQDlwlR6fuvfnuxNtnuw8fdRlNmHZ4koqLHtbC4g%2FYXG7%2FklUeqlxonmfh1JFD4Cr5TCrnInKBjqkAc6o7%2FwomcPPDozZ32ubFsEiImtEKH8ugUfsybogv8ivOyUajh3LoOQkAHLhCRX87OwG5jPt2rbaUxbPaKRQ9SVIBqWXksTat1eTeBcCiLJ5FaTXL41aK6VRcMclzq%2BYN1X7qLJ2u0w%2F85v5d0UydKAf%2Fpq6Lfq0TV79bLKezHVxGFbokkXOKrl4cQE40eTj%2FVzVAJNpvQ9ybYdle%2FoJjxhaYlvy&X-Amz-Signature=9196753f75ee64e8b3338ead9932d8e207cd91b28ec51bf954b152bcb3c37c13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WANKXNDH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDglL%2FWmA7A299jblFpOatErz7mVBdTLm59YsdJpBaeLwIhAJ%2BslCE5K7XEPW1dzoTHbnbRiLNaeAUc1hUbFHdq90W%2FKv8DCHgQABoMNjM3NDIzMTgzODA1Igzs9xNCcQw9H5PdQNwq3AMl9Wbu%2BUGXEvGahaVH0b9AjX9vSSx%2FiVJDHdhEupwgq8Bc3QdJvrxsM%2FsjtGrDh%2FdKqiPEnys%2FfuXHGfYrBzKjAjUVWjsKsX3kEMcj5dIApjeyMG%2Bnq5fu5r%2FDKG8vC9bhsSbyDYG%2BXmhs5lF4TH1dEd0nPNK5nQ9SVY%2Bf06ZUd9vgpKu9h%2FXjKT7Hoq0Wpe%2B8Xxi7rIRHMdAB%2F5HYoPH2coESCbs%2BhOzopu0NtMRHMIWKKuUqLGb8z38kM1gjEh2WO543EBkoESQqEcH%2BX8QkoOymEJqKridij94JSAmHGnEl7X73CmGlLR1SEITtHg%2F25Plvo1QHUKeI8JZtUH3HJYKOsp%2Bvj%2F2lxZE47M%2Flq6ht2OBF9p1Jo0OFFzm2Wwq9MfVtsB2T%2BI6ctUfUhCOKhiTFw49Kv2C5MSY4if2dFhtIa%2F%2B63DY4bgTyCXm6iqepjLf4981LyTQ33gbwan8r%2FhoWuunnZ%2Blq2p8DMmfNTai%2BAzfnSqdXhCKiQAMZi93V7fIJuo5T%2FrIm8%2FdpIl25JZxbnsxeU55KSWcDw%2B57mvd1V6hlh52I6pxFQDlwlR6fuvfnuxNtnuw8fdRlNmHZ4koqLHtbC4g%2FYXG7%2FklUeqlxonmfh1JFD4Cr5TCrnInKBjqkAc6o7%2FwomcPPDozZ32ubFsEiImtEKH8ugUfsybogv8ivOyUajh3LoOQkAHLhCRX87OwG5jPt2rbaUxbPaKRQ9SVIBqWXksTat1eTeBcCiLJ5FaTXL41aK6VRcMclzq%2BYN1X7qLJ2u0w%2F85v5d0UydKAf%2Fpq6Lfq0TV79bLKezHVxGFbokkXOKrl4cQE40eTj%2FVzVAJNpvQ9ybYdle%2FoJjxhaYlvy&X-Amz-Signature=ff53364fe33e3055cb6fa9b2f5172a8887c18b376548f38279633b87bdc49f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

