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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJKK5VSL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG39o8Cg0MK71MO8HimrsYsyIrBbh04OXFRaVZ6kg5RzAiA2P9qVkbU2ijOMABsvu83mRO%2BzNiL1B4ZA%2B7Ytwky9Iir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMPrjKOZbStKvmmGm2KtwDw7TYu0if9b2rXw4zfuoS3FVg1uzXmAmwjso9W94UGS99BEEicXAG6MRqS0sU2PvodV%2BbL679VEvyIJLWtH6dCkqMKTvm37mm4NzsDJttxNt22YUo0F9V8BE89BOU0MoitQJpvcZ%2FX7EPs08iTs2Zw2XWbAQcKCeFiWRx2fNgfolY0HGHl6hGsZAMwmCBtBnrmvjQz%2FQd2stC9anMfLsEAXLvcJmyvUESj2uGANTMAvkdKVHoKcfvyoTBqg564yAH192r9hCd4C0l22clBWFPqxX8ZnM6ezE%2B6sh03bfSoZaeTLWwK%2F4VIRu7LkrLAaNeZUfezX%2Fufp0Qrr7soZW2By6JnPWMyNjRNgoydbhp7ZYo1BKPqSN0tj7KTyayVEIl92%2FMxmRqYP3y6huQota2GDmlV06H1KxsdfrOPbtFwcvCn%2FpkuSEotLgYAU0duuWz%2FxPcULOBFiXduWAiL%2Bp2ygIlNXHe%2FCp8RXp%2B3pUC1pwkf%2F89GO5SDoMaVVSKFmPWXir7YXghUX%2FUswAbhbnFz92SlaFQLXuDIu21clhT3t4X9AhQqQLUaM3Q4aL6nPqfBtL0rCUOSmaX1UIq3elpgy9oK8ciXFA07nfSQUPCuolEbN4dr6AqlxEdOTow386IygY6pgGZtcK21Z8dLiN3MxFb26hrXP649fAVTTurLVd9%2FwQZKqb27FjK6pYo4bf1Vt3KxORKkaW1TMRQkUN01etF3V7i%2Fl%2BsuWfCF7XRJFrhJO4hFFjKS7ka54p6ZJ6HAxBkVvjNa%2BDQ0Jqx1X%2FJ5Ng386fBoA6PyeCbK%2BbR9hSV%2Be1uw%2BtfmyjeJCKZOd%2BXbDACkHirU1JOYT1PJz342gsvrtsRvMNz2PI9&X-Amz-Signature=9b226bce1f5cbeed6cf3060b3e5773c2268ff60996defc89e4d4a5476e02d9f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJKK5VSL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG39o8Cg0MK71MO8HimrsYsyIrBbh04OXFRaVZ6kg5RzAiA2P9qVkbU2ijOMABsvu83mRO%2BzNiL1B4ZA%2B7Ytwky9Iir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMPrjKOZbStKvmmGm2KtwDw7TYu0if9b2rXw4zfuoS3FVg1uzXmAmwjso9W94UGS99BEEicXAG6MRqS0sU2PvodV%2BbL679VEvyIJLWtH6dCkqMKTvm37mm4NzsDJttxNt22YUo0F9V8BE89BOU0MoitQJpvcZ%2FX7EPs08iTs2Zw2XWbAQcKCeFiWRx2fNgfolY0HGHl6hGsZAMwmCBtBnrmvjQz%2FQd2stC9anMfLsEAXLvcJmyvUESj2uGANTMAvkdKVHoKcfvyoTBqg564yAH192r9hCd4C0l22clBWFPqxX8ZnM6ezE%2B6sh03bfSoZaeTLWwK%2F4VIRu7LkrLAaNeZUfezX%2Fufp0Qrr7soZW2By6JnPWMyNjRNgoydbhp7ZYo1BKPqSN0tj7KTyayVEIl92%2FMxmRqYP3y6huQota2GDmlV06H1KxsdfrOPbtFwcvCn%2FpkuSEotLgYAU0duuWz%2FxPcULOBFiXduWAiL%2Bp2ygIlNXHe%2FCp8RXp%2B3pUC1pwkf%2F89GO5SDoMaVVSKFmPWXir7YXghUX%2FUswAbhbnFz92SlaFQLXuDIu21clhT3t4X9AhQqQLUaM3Q4aL6nPqfBtL0rCUOSmaX1UIq3elpgy9oK8ciXFA07nfSQUPCuolEbN4dr6AqlxEdOTow386IygY6pgGZtcK21Z8dLiN3MxFb26hrXP649fAVTTurLVd9%2FwQZKqb27FjK6pYo4bf1Vt3KxORKkaW1TMRQkUN01etF3V7i%2Fl%2BsuWfCF7XRJFrhJO4hFFjKS7ka54p6ZJ6HAxBkVvjNa%2BDQ0Jqx1X%2FJ5Ng386fBoA6PyeCbK%2BbR9hSV%2Be1uw%2BtfmyjeJCKZOd%2BXbDACkHirU1JOYT1PJz342gsvrtsRvMNz2PI9&X-Amz-Signature=78704f427ec62dfa04215f8d701f284508eeaae17f6a8081f9693727fab753de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

