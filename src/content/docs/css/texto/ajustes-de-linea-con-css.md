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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAVIYDZ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7fkLy4iaH4uASYmHR0UE1fQ60hFp7VEUgapvX004m4AiBEpB4H8mLEekEGS%2FGVnIeOnKisifZSE0qdOb8rpPZJUyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMFWIKJfMZ%2BkFXfDp7KtwD9MLc57SL4NxeLZ%2F5%2BcYh89a4kmEVUa1YeVUVgIoHCrqlTTr%2Byz%2FnJyolRD3mmEk%2BkU31TgPWV6Fn%2Fzrh%2FPEWjPx63XIqw90t%2F28WjB0Lp0diDtBmKj5kXx0aynIKt8DS5GFPUgfXL4gFjyYSfb1ZV6CD9gIyB8PMovkI6JY80LVoMFRzCGi1PBu2QxaX0q7RhSbIxa9eWu%2FR%2F%2B4Xrkjjote2CsoLo8VxuSJWWKruiw6eZiJNvqLUqdUpox79zdpDubIiLtq3IMMqCy1YXox4yfBr0dQO4EVav3lNG1cCj9eB0Hmc9b8d5PlFdjefkUqohJBBgM1glciyo7MEeZhpS5k%2B0kdVx5iB%2BII2KVpuwOWS2TsO7xiCvDyLIB1GdomcqDbUaYmJZa7gGP8C4CpccA95Rhx%2FYQqbTwiENmI61aTtwEn9pX%2FYrpfQIOSk4H%2FyXbWxRvlvVSb6hRSvAfHMAl3hL0NrSAhIoCHL60ZzUMY68TKgZYDKfvhhmAqtlJDV%2Fd6seyTi8wFzeKNduX1DKAldEKTqunUOwBK405NK1uMIBe7W7Bk9wyWx4hrJnz5cO405G9tNFwoAv7y5Q8LHqacoN6u8dg5e53CVQCOA5jkxhX0ef3vUauSA1h0wh9%2BHygY6pgGRWmJW2rcd1zl0Bgw1Dzs%2BwjylZL1vtfBNeGSEGymhk0hnLpg58i1bEJNUwGqWSbCMr3Abux1TiUQ6%2F2hjnJXu7DA3ZiGbl2yi18Q%2BGFPZ9YYIdDmS2g6Q0xgVUlohoXC9%2BuOr55iYBOr9veZPQRyRiHmQlEr%2BVHB8t4hDeEPDu5xIOJ5csT2ELMat71KvIZFUk3M8gI0oNNelkMmjcJGrwLRhXSVI&X-Amz-Signature=cf7dcdeed8a73386e23fb4df2a34a1f95f05ab6de0848e55941336ad923efa95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAVIYDZ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7fkLy4iaH4uASYmHR0UE1fQ60hFp7VEUgapvX004m4AiBEpB4H8mLEekEGS%2FGVnIeOnKisifZSE0qdOb8rpPZJUyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMFWIKJfMZ%2BkFXfDp7KtwD9MLc57SL4NxeLZ%2F5%2BcYh89a4kmEVUa1YeVUVgIoHCrqlTTr%2Byz%2FnJyolRD3mmEk%2BkU31TgPWV6Fn%2Fzrh%2FPEWjPx63XIqw90t%2F28WjB0Lp0diDtBmKj5kXx0aynIKt8DS5GFPUgfXL4gFjyYSfb1ZV6CD9gIyB8PMovkI6JY80LVoMFRzCGi1PBu2QxaX0q7RhSbIxa9eWu%2FR%2F%2B4Xrkjjote2CsoLo8VxuSJWWKruiw6eZiJNvqLUqdUpox79zdpDubIiLtq3IMMqCy1YXox4yfBr0dQO4EVav3lNG1cCj9eB0Hmc9b8d5PlFdjefkUqohJBBgM1glciyo7MEeZhpS5k%2B0kdVx5iB%2BII2KVpuwOWS2TsO7xiCvDyLIB1GdomcqDbUaYmJZa7gGP8C4CpccA95Rhx%2FYQqbTwiENmI61aTtwEn9pX%2FYrpfQIOSk4H%2FyXbWxRvlvVSb6hRSvAfHMAl3hL0NrSAhIoCHL60ZzUMY68TKgZYDKfvhhmAqtlJDV%2Fd6seyTi8wFzeKNduX1DKAldEKTqunUOwBK405NK1uMIBe7W7Bk9wyWx4hrJnz5cO405G9tNFwoAv7y5Q8LHqacoN6u8dg5e53CVQCOA5jkxhX0ef3vUauSA1h0wh9%2BHygY6pgGRWmJW2rcd1zl0Bgw1Dzs%2BwjylZL1vtfBNeGSEGymhk0hnLpg58i1bEJNUwGqWSbCMr3Abux1TiUQ6%2F2hjnJXu7DA3ZiGbl2yi18Q%2BGFPZ9YYIdDmS2g6Q0xgVUlohoXC9%2BuOr55iYBOr9veZPQRyRiHmQlEr%2BVHB8t4hDeEPDu5xIOJ5csT2ELMat71KvIZFUk3M8gI0oNNelkMmjcJGrwLRhXSVI&X-Amz-Signature=7eb0f7850e956671f3ea35c7e1d1691f9121f287fe0c369d4cbabda6bfcc4f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

