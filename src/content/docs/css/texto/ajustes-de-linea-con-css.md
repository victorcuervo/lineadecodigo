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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTI45QKA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGUt6%2FM1GYdqCyqH%2FbfsfSC2NnWevmgLba3VSk1GN2YQIgJ9SrOQxUHNoXQ3crbBBEgSHe%2FuyJI3qQedjnE6V5%2BJgq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBMC9a4DNZqqkeF%2FUircA6nUw5OCjdyenMuRURMUPxsziinQWj85faI%2BmTdDYsQ1Jng2dQHyPDudB5sBDqaETrZGmUQzuuISUwYTPa5zyUgC8IDYJ7QIrVnilfVpBZz3IcpXsHEBpWlnekxoC95pkYdT%2BOKzMAiIDqOT68ZL3OhvYP3x3BmAj3PX86OC2ZHM63XpCbhozEeMXz7hnySc%2BeY67NvUs%2BQ%2BGU%2Bx9%2BI36BfsXqPJSICL%2Bf1kgMgdqs7z1Qc3dJxgJfzvs6aMtvVEok7%2BPBuemJsZjYB3b2CsoUduJU%2F7g9VUfXFLrsd%2F7zWpizfE9rUiBihKeQeWN%2FCiAsG%2F1KZbAxJhYMKRttXZEg3B7mgRBywDYT558cHsNO9U2R6vUZPI9zkE5BVTBoUGMUyR9aeD5FEcIFP8i1MZ13WF1jcGVYbtM0qZ5U1KYGj3nezqgwcoTnD5fMkptMC3e7umbF9iP1QlUf%2BnPwhZkp4ZjysFtRNCH1d1ChUy%2FFFvwAiOrHT1Yfh6VwwXkHPXmtdflKWHrSBCkX34aXAX7qVZIOFWHDWfcstz%2BukY%2B0zbvXV3ZKpLdFmnpv%2Fst71gDLkGvYF8lp9UatiDYJdnVTqstq9cwqbcj3PF8HfER5bvisVGnsS20dhMXVbTMJi3icoGOqUBCyFn4JFekN9UewI9qG6zNqOibM6Mep0qYbQGOCbpz8Pb0jmDTpuBWzH1zYLIwPVJYDE4YgR3e43613%2FinQRf2e239IUO8HHM2%2F9fiUbGEj2lb3Mm6QOkp5lBFR28joLASt20SPPyk3rRu8qjIvbI02%2FoDKUA4A35C2nnBwlymDOWgpElKk1UQB6etJEAUbruILfnHvVMVwbZMmxShpuNgR2ig85b&X-Amz-Signature=577a0387ea8f876435760085eb1a9555923548aaff3d9c63c82ef60ea1e52e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTI45QKA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGUt6%2FM1GYdqCyqH%2FbfsfSC2NnWevmgLba3VSk1GN2YQIgJ9SrOQxUHNoXQ3crbBBEgSHe%2FuyJI3qQedjnE6V5%2BJgq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBMC9a4DNZqqkeF%2FUircA6nUw5OCjdyenMuRURMUPxsziinQWj85faI%2BmTdDYsQ1Jng2dQHyPDudB5sBDqaETrZGmUQzuuISUwYTPa5zyUgC8IDYJ7QIrVnilfVpBZz3IcpXsHEBpWlnekxoC95pkYdT%2BOKzMAiIDqOT68ZL3OhvYP3x3BmAj3PX86OC2ZHM63XpCbhozEeMXz7hnySc%2BeY67NvUs%2BQ%2BGU%2Bx9%2BI36BfsXqPJSICL%2Bf1kgMgdqs7z1Qc3dJxgJfzvs6aMtvVEok7%2BPBuemJsZjYB3b2CsoUduJU%2F7g9VUfXFLrsd%2F7zWpizfE9rUiBihKeQeWN%2FCiAsG%2F1KZbAxJhYMKRttXZEg3B7mgRBywDYT558cHsNO9U2R6vUZPI9zkE5BVTBoUGMUyR9aeD5FEcIFP8i1MZ13WF1jcGVYbtM0qZ5U1KYGj3nezqgwcoTnD5fMkptMC3e7umbF9iP1QlUf%2BnPwhZkp4ZjysFtRNCH1d1ChUy%2FFFvwAiOrHT1Yfh6VwwXkHPXmtdflKWHrSBCkX34aXAX7qVZIOFWHDWfcstz%2BukY%2B0zbvXV3ZKpLdFmnpv%2Fst71gDLkGvYF8lp9UatiDYJdnVTqstq9cwqbcj3PF8HfER5bvisVGnsS20dhMXVbTMJi3icoGOqUBCyFn4JFekN9UewI9qG6zNqOibM6Mep0qYbQGOCbpz8Pb0jmDTpuBWzH1zYLIwPVJYDE4YgR3e43613%2FinQRf2e239IUO8HHM2%2F9fiUbGEj2lb3Mm6QOkp5lBFR28joLASt20SPPyk3rRu8qjIvbI02%2FoDKUA4A35C2nnBwlymDOWgpElKk1UQB6etJEAUbruILfnHvVMVwbZMmxShpuNgR2ig85b&X-Amz-Signature=475d3e08032a57f7f2149b87597bde232061b6bab5715a534cfeaa5f3439f14e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

