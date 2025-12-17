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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPC6YDQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgYZwnRKncupvFgrw4BJeYoVNNW7rOb9zqPAlILHw7TAiA93Y38rgth6CxW0UVRxdRHXioghokAyPREQ7huGDWjvir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMfV4NQIyyaRTp9yqRKtwD76bxSCi0MH%2FN%2FX4yd28M9s1X%2FjXHuOPH2xS%2Br4c2NgM%2BVnrxemKTgCD29Tel2V2nnNPYV1s2gpM5vbguxjy0RhLLSMJRkL6AthWxoeghjX%2FeQh57jcvzhYjC5NiHT6GjoLH%2FUfT8970VcYCKVsKIEQTOuwuAukbGKLX3%2BZXGZBqE9EWDxb2uncKe0TFzOKppUh0BeYgUV1Fd80zSjylppWD7tFuuAnIKEFqgO0%2BpWHFELQ8sfQ7qwvJKf3aiX2geh9RpfczvN7me1gNatqhQiBNUqz13GHo2tQ1Cpqth0ZLpIQkOW%2By1jdy%2BMPqytn3nQ%2BBIo06KOBVClMmGGs57EAUvJcbkLaJsaMyLORJ3n6iMwPpsNar0n%2FM4vSQFIZkA%2BJmsQu2JdO1A2vtxvoh4oIC9m%2FeXF9YT1sGCPRm8BbYu6FFtdLUN051PK43SEW%2BrLamM4XFupmD%2FjvJeynWzsLrcS%2Frb9%2FutLqCN7D83G4euKpL%2FkvZGl4VEh%2BUPemo76QUbVrbhkzo3unMC2KAdwLLLsFqRzXwiyahMgdO84gDq2lqaptigPCS9Tnlzhy4J1tIC2S7hrHwYS%2BaJI%2FtNO3j8HJ3s74v078qx61o6RonwqpyYDC80VHqo3SwwtvqHygY6pgE3cIea2PNxVLIGupvyEn8NJ%2Bp8bSEXPDkW8%2FQIjzZILqy71rhL5e0D0MsNoCtL1O8Wp0BBzhmF6LmRAVEjr6KRt4%2B6xur94Rgtnv7v9N6R6kJTxtGn90F%2F43ruhPpXDqqpJYXmLIeqCTvO1w4Yx%2FFLhxE%2Fwa%2BHzk6yo%2BvroMdFerfgK2j94jgE4m6%2BmZ6sSsHp5t0DXu6%2BvFdVNqnKDXCrJvrbq5Qn&X-Amz-Signature=f7f90f5f6264a4dda85f51ff2edfaadc9cc61131a9e708feb188e46144391412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPC6YDQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgYZwnRKncupvFgrw4BJeYoVNNW7rOb9zqPAlILHw7TAiA93Y38rgth6CxW0UVRxdRHXioghokAyPREQ7huGDWjvir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMfV4NQIyyaRTp9yqRKtwD76bxSCi0MH%2FN%2FX4yd28M9s1X%2FjXHuOPH2xS%2Br4c2NgM%2BVnrxemKTgCD29Tel2V2nnNPYV1s2gpM5vbguxjy0RhLLSMJRkL6AthWxoeghjX%2FeQh57jcvzhYjC5NiHT6GjoLH%2FUfT8970VcYCKVsKIEQTOuwuAukbGKLX3%2BZXGZBqE9EWDxb2uncKe0TFzOKppUh0BeYgUV1Fd80zSjylppWD7tFuuAnIKEFqgO0%2BpWHFELQ8sfQ7qwvJKf3aiX2geh9RpfczvN7me1gNatqhQiBNUqz13GHo2tQ1Cpqth0ZLpIQkOW%2By1jdy%2BMPqytn3nQ%2BBIo06KOBVClMmGGs57EAUvJcbkLaJsaMyLORJ3n6iMwPpsNar0n%2FM4vSQFIZkA%2BJmsQu2JdO1A2vtxvoh4oIC9m%2FeXF9YT1sGCPRm8BbYu6FFtdLUN051PK43SEW%2BrLamM4XFupmD%2FjvJeynWzsLrcS%2Frb9%2FutLqCN7D83G4euKpL%2FkvZGl4VEh%2BUPemo76QUbVrbhkzo3unMC2KAdwLLLsFqRzXwiyahMgdO84gDq2lqaptigPCS9Tnlzhy4J1tIC2S7hrHwYS%2BaJI%2FtNO3j8HJ3s74v078qx61o6RonwqpyYDC80VHqo3SwwtvqHygY6pgE3cIea2PNxVLIGupvyEn8NJ%2Bp8bSEXPDkW8%2FQIjzZILqy71rhL5e0D0MsNoCtL1O8Wp0BBzhmF6LmRAVEjr6KRt4%2B6xur94Rgtnv7v9N6R6kJTxtGn90F%2F43ruhPpXDqqpJYXmLIeqCTvO1w4Yx%2FFLhxE%2Fwa%2BHzk6yo%2BvroMdFerfgK2j94jgE4m6%2BmZ6sSsHp5t0DXu6%2BvFdVNqnKDXCrJvrbq5Qn&X-Amz-Signature=3af4b2929746a98a324b01d54a9ea8592c3f97d6069251829fb6556db0acb0ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

