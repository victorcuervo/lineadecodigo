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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632Q5O2C6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJuIE9SP912mi2t0FUv0qpawmk5MpOcR5092F8MCy6%2FwIhAKOmg9qj6kQWALmXpH7I%2F4FWmehIMfZ6AHqoq4JnIOADKv8DCHwQABoMNjM3NDIzMTgzODA1Igw0TntJ%2FR5yEDxP6rUq3AMq4utc7BtPkmJOM2NuksvBEXzNTVRtiIj37%2BwejFACXkXDg%2BM16JrpssZDTeze4dHJg%2BQVc%2F0%2B%2FcM5SZipockt2wVKkOF%2Fvru0dg%2FoAM5v5gjIZKG2ZaObx%2B8IRp69pXyLCrFMLarP2%2FIZfjcnkOPbqQk0JRJObjdDbWiNgMao3x61pbBcCH6MdhhNGvX47vnb9F4wjNxO1EXeF9ijWc4dhuuI4sseovJlbyAOOi6ZSfKlckfZWsDZGivF0tVEhI0U3qMYWnTveOrSKHt9ZUYqxPJCLMPwr9jHh0cG1r7JbERQfvbT2IV9p4mWWcd3%2B6nF24jisF0CSXQHtX3eFU%2BHY%2BaC1E1W0R0czjGi7m7HdgEWWyu%2FJg4T5E4%2BNsFsEr%2FTVRs%2FJXhQkZcK3SFQHe2y1p3Sqd%2Fw8Vj6kUxyEkD9l%2FQhLgAKNO6ay%2B2RQ6LVNjKtnN6n6E7qLUg5nJUSTlf%2F%2FdSL1IAIxbT7sUYnl5LkNLRddw%2F8Q3aWiqkDa9yVWFCzJCQncQl2566p4a48qo3ulfiKjZ6c3yxVWX0nsuRLKWtXZP8bx1MgWSSGAF4dl5K7ekzWBrvSOLRqMJWvXql1ODREHd79t9Ab1fUaMgzgy1Csc5L3vQpoJnw9FTCfj4rKBjqkAYii6kZJe%2BI1PkjcyDkk9fHgAs4eMSGymkJG37b1NYaiePKCdn1s2zOL1moygEy6hwZeI3Ag7ElVS6TcQWrwSoXedq%2B4WJtOjRv3wQl%2BaazavI0DJz0iWJi1mjdrX2d7FaS668slRBLkS%2BK9vLe148G79CgjXCOgLp%2FxMpYeAaRDYZF%2BHvRDnmHaKXicB2Ox9JOpajRdzW2b5Rug0NX8qO%2BitQ85&X-Amz-Signature=04f57d2be5cda6b19321e37a9939b5690af8907e2bae2c2f90625a363eeef84a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632Q5O2C6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJuIE9SP912mi2t0FUv0qpawmk5MpOcR5092F8MCy6%2FwIhAKOmg9qj6kQWALmXpH7I%2F4FWmehIMfZ6AHqoq4JnIOADKv8DCHwQABoMNjM3NDIzMTgzODA1Igw0TntJ%2FR5yEDxP6rUq3AMq4utc7BtPkmJOM2NuksvBEXzNTVRtiIj37%2BwejFACXkXDg%2BM16JrpssZDTeze4dHJg%2BQVc%2F0%2B%2FcM5SZipockt2wVKkOF%2Fvru0dg%2FoAM5v5gjIZKG2ZaObx%2B8IRp69pXyLCrFMLarP2%2FIZfjcnkOPbqQk0JRJObjdDbWiNgMao3x61pbBcCH6MdhhNGvX47vnb9F4wjNxO1EXeF9ijWc4dhuuI4sseovJlbyAOOi6ZSfKlckfZWsDZGivF0tVEhI0U3qMYWnTveOrSKHt9ZUYqxPJCLMPwr9jHh0cG1r7JbERQfvbT2IV9p4mWWcd3%2B6nF24jisF0CSXQHtX3eFU%2BHY%2BaC1E1W0R0czjGi7m7HdgEWWyu%2FJg4T5E4%2BNsFsEr%2FTVRs%2FJXhQkZcK3SFQHe2y1p3Sqd%2Fw8Vj6kUxyEkD9l%2FQhLgAKNO6ay%2B2RQ6LVNjKtnN6n6E7qLUg5nJUSTlf%2F%2FdSL1IAIxbT7sUYnl5LkNLRddw%2F8Q3aWiqkDa9yVWFCzJCQncQl2566p4a48qo3ulfiKjZ6c3yxVWX0nsuRLKWtXZP8bx1MgWSSGAF4dl5K7ekzWBrvSOLRqMJWvXql1ODREHd79t9Ab1fUaMgzgy1Csc5L3vQpoJnw9FTCfj4rKBjqkAYii6kZJe%2BI1PkjcyDkk9fHgAs4eMSGymkJG37b1NYaiePKCdn1s2zOL1moygEy6hwZeI3Ag7ElVS6TcQWrwSoXedq%2B4WJtOjRv3wQl%2BaazavI0DJz0iWJi1mjdrX2d7FaS668slRBLkS%2BK9vLe148G79CgjXCOgLp%2FxMpYeAaRDYZF%2BHvRDnmHaKXicB2Ox9JOpajRdzW2b5Rug0NX8qO%2BitQ85&X-Amz-Signature=6a26e06afd0f784d99775668f7cedd623bdec4358d60b17484bdaa68d12a62ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

