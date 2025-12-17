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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGE5MV4T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbzbCQEi3AjhdqyuEGJVKs0wCogfH8yCGtc7KtM899sAiEA3rugWsJt%2B4DGr63eIDB1nbigfLkXwm0V2y3LPL0Pujgq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJXQlNweo0zmvZ447yrcAwq4jQ7LHQK2GN5tnuYJADZm5pi1XRv6VrAGL6EM5ge6t0pDPpkHDtJmKTxX4bQdLq1YqO43MadvQgVhyG3DP7AOM2aJ3vc6xLWLCYqUdoncGK%2FtNRSZ5Gm8o7MkIpCWW8uXfZyn0BCJE1xUiggAcs0UaCihYRWpJxOz7cOkRARxMSqMwFVFeI0OS4liEBg%2FFEh4ztSsMnuQ1v812rrvQFLwutkJywkqPhlZcpos%2F5ouTZjMa8iwrst1gff157cvjuZ%2Fsw5Ah%2Bt39mqj2dUuh5eLzUj4XxPny0OeQklzX88cg8uXTekNYANltbk4j1Q9n7uA%2Fo7fMDEWwwDbiOa9z%2FCcKkpCZzxB2RAtPzkNmBdnlfOm6W7yxvOXK9LbJ71yFBLb72g%2Be1Nw%2Bd2eniku91TbweFFZ1NtcAP8KizjC0MZ%2Fmrb0oK2N9VG2tFFeyFo02Ls6tfpc1a2i77SOpRgrJKhW2zFH29yd56RvNHQc9dW4eTgrVCGHMqDqMqyaQYNJW8IJVeB%2Fyh93J8eC2Rh%2Bp%2FGnKpJlu%2BwVG%2B7tBdXTo550NTF5FPN7K47BSWRYGcEEwvqnI0Ue3NcElyE7yn6FPtRGSAV5VGDhBUG9pzEQ36argJhcSFWjcKt9OyeMMvpiMoGOqUBCSFaL5ISYb7ohWMqey8N1dVZAYTeiaPyP%2BbXl9D%2BrhvfhzBLdLivSDkuZatgMThqlvCjNS3ZYLYLPrIiIEePjv5kUT%2FRQNgBQrboNm%2FmG6nGe1g0EA4%2Bc6MS8gbQByurPQNsamrQ4bfK8zqzDP3tRsU1Cn5zCShR6WaffYNQnHETIRlaAYaCHUWsPM144JIiDQenG%2BE0AtKy8mikihs4AVT9suGi&X-Amz-Signature=2a76e6630a574730b8e5c89ac51ef22f5a0cc24644dfea5ebbda67a2d81e9f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGE5MV4T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbzbCQEi3AjhdqyuEGJVKs0wCogfH8yCGtc7KtM899sAiEA3rugWsJt%2B4DGr63eIDB1nbigfLkXwm0V2y3LPL0Pujgq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJXQlNweo0zmvZ447yrcAwq4jQ7LHQK2GN5tnuYJADZm5pi1XRv6VrAGL6EM5ge6t0pDPpkHDtJmKTxX4bQdLq1YqO43MadvQgVhyG3DP7AOM2aJ3vc6xLWLCYqUdoncGK%2FtNRSZ5Gm8o7MkIpCWW8uXfZyn0BCJE1xUiggAcs0UaCihYRWpJxOz7cOkRARxMSqMwFVFeI0OS4liEBg%2FFEh4ztSsMnuQ1v812rrvQFLwutkJywkqPhlZcpos%2F5ouTZjMa8iwrst1gff157cvjuZ%2Fsw5Ah%2Bt39mqj2dUuh5eLzUj4XxPny0OeQklzX88cg8uXTekNYANltbk4j1Q9n7uA%2Fo7fMDEWwwDbiOa9z%2FCcKkpCZzxB2RAtPzkNmBdnlfOm6W7yxvOXK9LbJ71yFBLb72g%2Be1Nw%2Bd2eniku91TbweFFZ1NtcAP8KizjC0MZ%2Fmrb0oK2N9VG2tFFeyFo02Ls6tfpc1a2i77SOpRgrJKhW2zFH29yd56RvNHQc9dW4eTgrVCGHMqDqMqyaQYNJW8IJVeB%2Fyh93J8eC2Rh%2Bp%2FGnKpJlu%2BwVG%2B7tBdXTo550NTF5FPN7K47BSWRYGcEEwvqnI0Ue3NcElyE7yn6FPtRGSAV5VGDhBUG9pzEQ36argJhcSFWjcKt9OyeMMvpiMoGOqUBCSFaL5ISYb7ohWMqey8N1dVZAYTeiaPyP%2BbXl9D%2BrhvfhzBLdLivSDkuZatgMThqlvCjNS3ZYLYLPrIiIEePjv5kUT%2FRQNgBQrboNm%2FmG6nGe1g0EA4%2Bc6MS8gbQByurPQNsamrQ4bfK8zqzDP3tRsU1Cn5zCShR6WaffYNQnHETIRlaAYaCHUWsPM144JIiDQenG%2BE0AtKy8mikihs4AVT9suGi&X-Amz-Signature=0f6b38fe738b7ac4c066e2df55f1a10b3bdaca0e9efa52a3e67600b970320804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

