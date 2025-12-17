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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XL2RYYW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDldRrw3j%2BmJAk0D3EjrmxOo6Y24G2FxeSlkFY2%2BGR5uAiBttru0H2UakB%2FizjUtQpzj%2FcplETIxVXtG%2BmKNFsQGsSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMZnjCUL5qk2N8dy%2BDKtwDKTX5yHmnh2MPIjo2SCi9Ao4aYv4mUMWEdOv48P3u4uGPFv4FfvXqnNDu9VU2sQ%2Fx9hpueOOarsrEoER1rKBHCbYF%2BVo2mHy%2BCGtnFBg6WA91%2BVNwtf9A%2BpE5qCq9Pluh%2BI9JyEqtTwrvAQ0Un8Td6x74pyp9MbNKqCHuY8vT1oy4MN6PJleqdHEHQjZpQkJSnaidZKuL54jvXG4x%2FjIln1r2eebcrdpRX0MtutJaXHsfD%2Fwz2NZzKL%2FG7pNdc%2BHbYmoN8lcUd%2FFVHECrw94WNxHCJNa2fvjF4DEXKmTeM1uCYac%2BCEVQtX4%2BlgI2vRKHvpvxiI6TbahBi6xwfaD9QVFshb7%2F9%2FGa4zyzxUkwtiPv9yI82ed%2BsrLfdUTKtVoI2z9MqK9YWLLkNTeuIDKqw8jDYVEzllp7rzX1QERxggqPma0piWKlk0xBqO%2BOMzrqP2MmSAmdEokH3Vnt%2Fhq0QbYbe3uJVRH8dsCsW1UTXxIrCeXWdH5164WjffW7o6IxriF0SqSU6TcLMiFyff%2BlJXCcFm48TGEMMv81Gg1AToylxRxd6zgOnb6jx2ALaBA7hBB%2FIjOnXEzBIFYouu%2Bk5eP2U2iZr2dUbUGGfPmO1SMKO0WZ6A%2BdBvgR%2FRkw0tKJygY6pgGVzEffIBvlHoMq5o5TrWI9sda9uEEUhtg0RckGSfUVF5uuPzqwITw9vu9Vijxhkqg1erwHHhRDuSHTfp0BjGwMxt%2Bf3EzZ3ZTSzWM0RcGKU%2BVb0olhKdlTRBc8K1KLKaCmVbVZHwieEjEvd5IxGtcUhf2Es3BmE3jEmV2cZEGWhV7C6vfmKF7SSn3ROU7%2FDGpa8lE1lDyamf0mkYfSKNYRLrtm7%2Be3&X-Amz-Signature=99a427a555e214008c1ef4b2cb775cc47e73e4e28b907d28b8ab9e49ba33d09b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XL2RYYW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDldRrw3j%2BmJAk0D3EjrmxOo6Y24G2FxeSlkFY2%2BGR5uAiBttru0H2UakB%2FizjUtQpzj%2FcplETIxVXtG%2BmKNFsQGsSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMZnjCUL5qk2N8dy%2BDKtwDKTX5yHmnh2MPIjo2SCi9Ao4aYv4mUMWEdOv48P3u4uGPFv4FfvXqnNDu9VU2sQ%2Fx9hpueOOarsrEoER1rKBHCbYF%2BVo2mHy%2BCGtnFBg6WA91%2BVNwtf9A%2BpE5qCq9Pluh%2BI9JyEqtTwrvAQ0Un8Td6x74pyp9MbNKqCHuY8vT1oy4MN6PJleqdHEHQjZpQkJSnaidZKuL54jvXG4x%2FjIln1r2eebcrdpRX0MtutJaXHsfD%2Fwz2NZzKL%2FG7pNdc%2BHbYmoN8lcUd%2FFVHECrw94WNxHCJNa2fvjF4DEXKmTeM1uCYac%2BCEVQtX4%2BlgI2vRKHvpvxiI6TbahBi6xwfaD9QVFshb7%2F9%2FGa4zyzxUkwtiPv9yI82ed%2BsrLfdUTKtVoI2z9MqK9YWLLkNTeuIDKqw8jDYVEzllp7rzX1QERxggqPma0piWKlk0xBqO%2BOMzrqP2MmSAmdEokH3Vnt%2Fhq0QbYbe3uJVRH8dsCsW1UTXxIrCeXWdH5164WjffW7o6IxriF0SqSU6TcLMiFyff%2BlJXCcFm48TGEMMv81Gg1AToylxRxd6zgOnb6jx2ALaBA7hBB%2FIjOnXEzBIFYouu%2Bk5eP2U2iZr2dUbUGGfPmO1SMKO0WZ6A%2BdBvgR%2FRkw0tKJygY6pgGVzEffIBvlHoMq5o5TrWI9sda9uEEUhtg0RckGSfUVF5uuPzqwITw9vu9Vijxhkqg1erwHHhRDuSHTfp0BjGwMxt%2Bf3EzZ3ZTSzWM0RcGKU%2BVb0olhKdlTRBc8K1KLKaCmVbVZHwieEjEvd5IxGtcUhf2Es3BmE3jEmV2cZEGWhV7C6vfmKF7SSn3ROU7%2FDGpa8lE1lDyamf0mkYfSKNYRLrtm7%2Be3&X-Amz-Signature=110788f92135539d4aabfe24d882e581dedf67eae689ea108b581ab95eae01c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

