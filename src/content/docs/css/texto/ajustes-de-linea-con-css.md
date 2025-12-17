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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BRIUSM6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxTV05CPGBXiLo7aT56JirJFh7gW1TZo7to6CbRwuNzAiAsT9yOwS3WJHAF9bXsunbZmO6PUqQ5aa6BjFocMuSURiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM79yIU%2Bd6QpaKcz3GKtwDBg2Wv0YfwR44SG6soD0KzweL5FE7Hz9hLDxU0B27E9bWmh81wipimgoTfL7QQNTlX7%2FvAvxuuHV9lOys2JLvqn3dNnU9mw%2BaVELoadfNHiwmwjwKG%2FDsCYmcMNbrez%2FHpyWbUqknu%2By511gR9ImWumjkXoG3tyMr4dOZ971MR23FdAqbleZKSmoaChrxwTBLj0uwc0zL1Jd8lp21ZS29%2FoupwE5naAF%2FVt%2Fu%2FOheotZR5%2FntgCg8wQdtD1BJMidvWNynbqLjelV97CveikVid8nix7W5akvhbw3YIDWHheG7hurJKgj4yx9st4hMeCHWg0UQBXzLITCyb7ftr0jNHpUfj5yFOuPHoHSs33gq0p1hJ%2FRTd8Rajto8aYJbRwrCpGy2Lz2YswfTC6JGx5pCf8%2BoCijq98VQVbbyISCevTC6COiKQoPQ2L9t1hYApbFa4j1bQI1XxsIl2Ryqg26ff6b3g%2BPhniBLQead%2BmbwxXMK2RxJ9M9uqR%2FyEf6%2BWtIJC4%2FsMH7d%2F366RHPlL5KcbqmviJ%2B62dlige4nF0aBwjaGcw4fUZrIrQ8Gdi4nZn7ztLz5IyTUFaG4KF6Fm9SzG7wbaIBgjLg0xxuuoURxzdeIAvqnB5fP9R141rIw8KCLygY6pgEu8sX89s30iqbB3WPLOKEPk8MwMQETZlnpcLLUlM2t2FuaAl2slfuE0aSKMjjbM9EHppaqJFIoOOkTUpkOLCukvZLnifjBrylLM%2BoVYJ7t2nQw4nDnbioxoZxv7YlaaN3%2BeaJW5%2FjTPkgEdv3pCCPfNA6jh57Yx0GiuSowLsPGRe8ok9c%2FXvvs6zaG%2B9amidMtpiGD4tW%2BggpybeDkfPVaYLpJaW8J&X-Amz-Signature=135fb9f5980ad1b7f27fc756ca642ca8eb44a0e68f0a3c12149c51a292ed5850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BRIUSM6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxTV05CPGBXiLo7aT56JirJFh7gW1TZo7to6CbRwuNzAiAsT9yOwS3WJHAF9bXsunbZmO6PUqQ5aa6BjFocMuSURiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM79yIU%2Bd6QpaKcz3GKtwDBg2Wv0YfwR44SG6soD0KzweL5FE7Hz9hLDxU0B27E9bWmh81wipimgoTfL7QQNTlX7%2FvAvxuuHV9lOys2JLvqn3dNnU9mw%2BaVELoadfNHiwmwjwKG%2FDsCYmcMNbrez%2FHpyWbUqknu%2By511gR9ImWumjkXoG3tyMr4dOZ971MR23FdAqbleZKSmoaChrxwTBLj0uwc0zL1Jd8lp21ZS29%2FoupwE5naAF%2FVt%2Fu%2FOheotZR5%2FntgCg8wQdtD1BJMidvWNynbqLjelV97CveikVid8nix7W5akvhbw3YIDWHheG7hurJKgj4yx9st4hMeCHWg0UQBXzLITCyb7ftr0jNHpUfj5yFOuPHoHSs33gq0p1hJ%2FRTd8Rajto8aYJbRwrCpGy2Lz2YswfTC6JGx5pCf8%2BoCijq98VQVbbyISCevTC6COiKQoPQ2L9t1hYApbFa4j1bQI1XxsIl2Ryqg26ff6b3g%2BPhniBLQead%2BmbwxXMK2RxJ9M9uqR%2FyEf6%2BWtIJC4%2FsMH7d%2F366RHPlL5KcbqmviJ%2B62dlige4nF0aBwjaGcw4fUZrIrQ8Gdi4nZn7ztLz5IyTUFaG4KF6Fm9SzG7wbaIBgjLg0xxuuoURxzdeIAvqnB5fP9R141rIw8KCLygY6pgEu8sX89s30iqbB3WPLOKEPk8MwMQETZlnpcLLUlM2t2FuaAl2slfuE0aSKMjjbM9EHppaqJFIoOOkTUpkOLCukvZLnifjBrylLM%2BoVYJ7t2nQw4nDnbioxoZxv7YlaaN3%2BeaJW5%2FjTPkgEdv3pCCPfNA6jh57Yx0GiuSowLsPGRe8ok9c%2FXvvs6zaG%2B9amidMtpiGD4tW%2BggpybeDkfPVaYLpJaW8J&X-Amz-Signature=cfadedd0b742dd82eaf686af10754f4423730b309a73a0e9e364c23fb5589d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

