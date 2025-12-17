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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VJKTOD3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDz%2FAjFeKAXH0Z6QfqWv84DT3qkgKnAApFkmlUc%2BaIkgAiB24oPkTlWvyA6EQ0FDpBot%2Bg5Xetf4f%2FRhs8SF7yI3Cir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMaXZ26vmWypi3mjU3KtwDFHEp2fBjbn13HJzaAkKcOFpBmcdnk2QS4mncjtAUIJhunh29%2F5gUBnUw9DCy6vamyNdui2dyqs01x%2B4C92Ptjbj8mYl26ZAE6J%2FCk%2BuasAaqUNrqwLLFEuGaf%2F9MofuzsrcZb507uE42pwM5Psn9%2Fe7RL%2BF4OCJgu1YjjI3uONymlxMVdNG3pugIhJruv%2F0OZxfrmMD6r15oGkKk6DNhL7bP7bc5rVrauFR3e87q4Yl%2FODGli3RmSK0TI7NjVk8EFKkPNNgiG0aBwSd0g7vpH1uPrn3cPXItIgigY6cdQT2dpoh30DSSo4l%2FExbHeV0iGN4gcbUWSeTmR6e9GcJf74nBY4%2FzlgcWcXL6AkUo1DUv8VACU3dF7ivfg0Ayt9nYYE3%2BQCSssL5NA%2Bg%2BGoMKMqwfXj8CjKa%2FIfjdoven7p8XNlHPJrE2lNo0aijEt3kYIroHegQj7fFYb5%2FsN1JfKHhvK%2FDRRkw7QowJ3oA3A9ibA%2BVTEVQ2UXLfewZvFRGHt0vBYvI9Jr9%2FmvhOZIib5sEQ8IkqtyNExu5q286dPUkOKOXeZBvHFWl%2FoXLcUgn%2FUiWTqv%2Ba2zDFxjwWRLTexM5GcldOx03V%2FBuavWxmQ53GF9Gec%2FpBN9m13HMwzJWIygY6pgF5TgYUQaZZFukZ2JmEsbZjxujcS%2Fi3JocB5zzYl%2FZ2OEFoC5%2BK4RdPlbxJMf3YL7NSNe%2Fxu9IJSadet4Ib3TuXHVr3HEb1MzdUu7yEzAp4IY5zwXs5qbS%2Fg3B2SuEeHKEVb1T0WXBbfs5UcPKlwtYEqvR%2F5u8%2BJo%2ButXjQci89OITcKchxnBx9CAzL3tm9YothueFMkicOhacyU%2FnxtoXUiykcy9Rj&X-Amz-Signature=bf3884d09d4e53ef9eed93c41139f3caa2311a2e73857118e19febb51ab4e982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VJKTOD3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDz%2FAjFeKAXH0Z6QfqWv84DT3qkgKnAApFkmlUc%2BaIkgAiB24oPkTlWvyA6EQ0FDpBot%2Bg5Xetf4f%2FRhs8SF7yI3Cir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMaXZ26vmWypi3mjU3KtwDFHEp2fBjbn13HJzaAkKcOFpBmcdnk2QS4mncjtAUIJhunh29%2F5gUBnUw9DCy6vamyNdui2dyqs01x%2B4C92Ptjbj8mYl26ZAE6J%2FCk%2BuasAaqUNrqwLLFEuGaf%2F9MofuzsrcZb507uE42pwM5Psn9%2Fe7RL%2BF4OCJgu1YjjI3uONymlxMVdNG3pugIhJruv%2F0OZxfrmMD6r15oGkKk6DNhL7bP7bc5rVrauFR3e87q4Yl%2FODGli3RmSK0TI7NjVk8EFKkPNNgiG0aBwSd0g7vpH1uPrn3cPXItIgigY6cdQT2dpoh30DSSo4l%2FExbHeV0iGN4gcbUWSeTmR6e9GcJf74nBY4%2FzlgcWcXL6AkUo1DUv8VACU3dF7ivfg0Ayt9nYYE3%2BQCSssL5NA%2Bg%2BGoMKMqwfXj8CjKa%2FIfjdoven7p8XNlHPJrE2lNo0aijEt3kYIroHegQj7fFYb5%2FsN1JfKHhvK%2FDRRkw7QowJ3oA3A9ibA%2BVTEVQ2UXLfewZvFRGHt0vBYvI9Jr9%2FmvhOZIib5sEQ8IkqtyNExu5q286dPUkOKOXeZBvHFWl%2FoXLcUgn%2FUiWTqv%2Ba2zDFxjwWRLTexM5GcldOx03V%2FBuavWxmQ53GF9Gec%2FpBN9m13HMwzJWIygY6pgF5TgYUQaZZFukZ2JmEsbZjxujcS%2Fi3JocB5zzYl%2FZ2OEFoC5%2BK4RdPlbxJMf3YL7NSNe%2Fxu9IJSadet4Ib3TuXHVr3HEb1MzdUu7yEzAp4IY5zwXs5qbS%2Fg3B2SuEeHKEVb1T0WXBbfs5UcPKlwtYEqvR%2F5u8%2BJo%2ButXjQci89OITcKchxnBx9CAzL3tm9YothueFMkicOhacyU%2FnxtoXUiykcy9Rj&X-Amz-Signature=862a2e8881461a0819808ab960d07a71526c9903feb360929f8f0da746f32919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

