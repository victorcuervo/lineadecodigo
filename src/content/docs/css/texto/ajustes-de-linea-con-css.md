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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4BKDPE3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEckytwghHzA6v5SUPyTu6wZbnvduRfi5wyEVVzDeYFAiB8EEMOfwHeZbwDv3cewbf9N%2FlC%2FEtmEXH53JhuRUOiTSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMYehtpZ8pnfOu%2BbeGKtwDcmXNo2Mtpe%2FpVMZrdUaNUB2VJcIy85%2Bt%2B46POUQbWBzHxcSVL9o6NUj6lGVEHzbmp9IRx%2F58pKtZ%2FZE8bNDtXfsiVxMRVyEz51P3VD%2FxDYc1N6%2BySlen6rHfrtLjkkjzWEFL1RqxN6hf8%2FB1cfA6bmO5%2BLSHzSFBgxrSr3pyZpdnWVjTK3QF%2FbfG5295IDUIPWwv%2F0qktYugGCrtPHLittp%2FsZ34uR2tGPpv9uPVRRHoVRC7k1QnggYekS%2FksCS3BU0OxL6by0RIxo9w1mbSm2N%2Bth0KjGJO6Qiynt327k1gN9YeZW3X%2FruXYJDi4ls4KP3Jf9NGFAqUXCHpjI974PwIv7Jpjx7CH4U3Ga1%2FaOzAcPOXFMIQm8PvNG7gYPpgwqhbgwMnW7DRB%2Bli7DwH8enIRTBbjfaGmq2defAn4hmAp2ZYkgajLKurTiZIyKHC4hQYzlgeTDmtS0s5Qk8F0Ou7B4V8g8%2BojutDtE0ECYUATIy6j31pmuyU4%2FqlsdHHFelETwyIXi9fsPEOn3bWyyeHt6mJkJVmp3NVWvc9CLV47CUjvP0ko3EJgwc8%2BODbKE3uvazqNeMaovcJJ8g6i53az4QJ5irjq%2BsZUj1nTJOyIJu1HyahEHfi9zcw9c2IygY6pgGIELgheFgsTwUdMVOfVKtxixcMG5sJ2y%2BEFXdEf9gRQ2zTvNTvNykTxz8ad%2FDmmFVhXE3%2FBdtYNdb3YK2Y55XweoiYFvtR6sJtdshMixAU2A%2F%2BaGWqRCk47NgUxTihO4HcSACb0f7jZJjmk33IL1OB2g9sOKiDAeu%2FQXroPJYHrUsW7dJop94mkh9fgMxd13sn2gyeiAaG5M56KNOrv793gyjyw%2F3b&X-Amz-Signature=cd552365be51998ccef7e7a8322388bda369f8b2211ed4f3a661ec4dfcd11497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4BKDPE3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEckytwghHzA6v5SUPyTu6wZbnvduRfi5wyEVVzDeYFAiB8EEMOfwHeZbwDv3cewbf9N%2FlC%2FEtmEXH53JhuRUOiTSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMYehtpZ8pnfOu%2BbeGKtwDcmXNo2Mtpe%2FpVMZrdUaNUB2VJcIy85%2Bt%2B46POUQbWBzHxcSVL9o6NUj6lGVEHzbmp9IRx%2F58pKtZ%2FZE8bNDtXfsiVxMRVyEz51P3VD%2FxDYc1N6%2BySlen6rHfrtLjkkjzWEFL1RqxN6hf8%2FB1cfA6bmO5%2BLSHzSFBgxrSr3pyZpdnWVjTK3QF%2FbfG5295IDUIPWwv%2F0qktYugGCrtPHLittp%2FsZ34uR2tGPpv9uPVRRHoVRC7k1QnggYekS%2FksCS3BU0OxL6by0RIxo9w1mbSm2N%2Bth0KjGJO6Qiynt327k1gN9YeZW3X%2FruXYJDi4ls4KP3Jf9NGFAqUXCHpjI974PwIv7Jpjx7CH4U3Ga1%2FaOzAcPOXFMIQm8PvNG7gYPpgwqhbgwMnW7DRB%2Bli7DwH8enIRTBbjfaGmq2defAn4hmAp2ZYkgajLKurTiZIyKHC4hQYzlgeTDmtS0s5Qk8F0Ou7B4V8g8%2BojutDtE0ECYUATIy6j31pmuyU4%2FqlsdHHFelETwyIXi9fsPEOn3bWyyeHt6mJkJVmp3NVWvc9CLV47CUjvP0ko3EJgwc8%2BODbKE3uvazqNeMaovcJJ8g6i53az4QJ5irjq%2BsZUj1nTJOyIJu1HyahEHfi9zcw9c2IygY6pgGIELgheFgsTwUdMVOfVKtxixcMG5sJ2y%2BEFXdEf9gRQ2zTvNTvNykTxz8ad%2FDmmFVhXE3%2FBdtYNdb3YK2Y55XweoiYFvtR6sJtdshMixAU2A%2F%2BaGWqRCk47NgUxTihO4HcSACb0f7jZJjmk33IL1OB2g9sOKiDAeu%2FQXroPJYHrUsW7dJop94mkh9fgMxd13sn2gyeiAaG5M56KNOrv793gyjyw%2F3b&X-Amz-Signature=10f88f06aaf54a5df25b07b42f0f5823f14e0224482bdf2501147960a7736232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

