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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STLMB2XE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2EqM0lJzysw8DQZfaaqbZqbuSxEZ3Dl4jYXvQITCp%2FAiEAw2IONtUIhdQ8zv9IA9hRQPpRIPVNGIJMW1d2PwIFAdUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDE9i1m0EQdKY5SODnCrcA9vi06PbrOQjzJqgKn7riKv2WtpBBYqF6ZKETra3lSBHY9gXMtno8jfNajOlBpc4Zgkv1n7USszAet1%2BZF9Jr0rP4X4RA3sxzqLgC7Z653TtuY1HfT9oqFfA7tY5r%2FOm7OoTI%2FA8vNQgbj4Eg1YrhYxn3e3znEqi8rn2OUE7DSOHF2CaSz9tnEMf1K63bp8uHnjckSwnVTr%2BUZxSQtze%2Fw35awpcZzHKsHB5DbB7CVDMwABpPmc1oecaAFSY8kLOL5iafiQMaZp0kK%2B%2B4vGNhATt0Nm51S05iy%2BMqv1Qu0OjFGKH4lD%2Fw7K%2FY551ATVvlmCamoBT5Dw2i7Tu0EvvZsYZImdgugaY7ee5RMP2xm9jnJpCi0kOYHSvk6ruII1%2B1pHKeZn6uudaiJrrZJpvQ81VlYYdW%2ByKcbd1lhejr5w%2FVYrZm0F7HXB9lLYAKRFGExPaEPuy88qzE4Ki2QQG%2Fa2l5n45c0N9lSN9GLjxRckovYi2hU%2BbMLyEzpgrPF0CfF75mgHGfYIc3xYQaYiNNIIUWyOWjwQMWtrHPYpBE%2BCrK4ps7U8RmeviEtjwlBMoen2wpVev9NX76DpBeLRN8BFyXRxMFtVq1GCSlXcs0ZpWaltwCjrIPl1aP1HJMJaCicoGOqUB1I%2Fec%2FaniEMbxk3OJ4gtLPsMr7DJv1DGEpAjB4B%2FgethDgsJ2vaYsiITAKQnFQYSunRPpOYfjfMOSkzemFVWHtMOxtMf65pA6OGLRmdfIUQ4gcm%2B8c31IELLx9dA7frluHGt4Cz4UkI7oVXa5TrdfxP6Wmxs2w5bS3K1nZGDJ7HKQYKYm3FLy7MrvRqu7ut2DhQbfDhHVparfJwKMtdvhZ8pJVgM&X-Amz-Signature=f343f9f93fe0fca1ad64053107c42670fc8e5da21f3a4c85272943835ea3aedc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STLMB2XE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2EqM0lJzysw8DQZfaaqbZqbuSxEZ3Dl4jYXvQITCp%2FAiEAw2IONtUIhdQ8zv9IA9hRQPpRIPVNGIJMW1d2PwIFAdUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDE9i1m0EQdKY5SODnCrcA9vi06PbrOQjzJqgKn7riKv2WtpBBYqF6ZKETra3lSBHY9gXMtno8jfNajOlBpc4Zgkv1n7USszAet1%2BZF9Jr0rP4X4RA3sxzqLgC7Z653TtuY1HfT9oqFfA7tY5r%2FOm7OoTI%2FA8vNQgbj4Eg1YrhYxn3e3znEqi8rn2OUE7DSOHF2CaSz9tnEMf1K63bp8uHnjckSwnVTr%2BUZxSQtze%2Fw35awpcZzHKsHB5DbB7CVDMwABpPmc1oecaAFSY8kLOL5iafiQMaZp0kK%2B%2B4vGNhATt0Nm51S05iy%2BMqv1Qu0OjFGKH4lD%2Fw7K%2FY551ATVvlmCamoBT5Dw2i7Tu0EvvZsYZImdgugaY7ee5RMP2xm9jnJpCi0kOYHSvk6ruII1%2B1pHKeZn6uudaiJrrZJpvQ81VlYYdW%2ByKcbd1lhejr5w%2FVYrZm0F7HXB9lLYAKRFGExPaEPuy88qzE4Ki2QQG%2Fa2l5n45c0N9lSN9GLjxRckovYi2hU%2BbMLyEzpgrPF0CfF75mgHGfYIc3xYQaYiNNIIUWyOWjwQMWtrHPYpBE%2BCrK4ps7U8RmeviEtjwlBMoen2wpVev9NX76DpBeLRN8BFyXRxMFtVq1GCSlXcs0ZpWaltwCjrIPl1aP1HJMJaCicoGOqUB1I%2Fec%2FaniEMbxk3OJ4gtLPsMr7DJv1DGEpAjB4B%2FgethDgsJ2vaYsiITAKQnFQYSunRPpOYfjfMOSkzemFVWHtMOxtMf65pA6OGLRmdfIUQ4gcm%2B8c31IELLx9dA7frluHGt4Cz4UkI7oVXa5TrdfxP6Wmxs2w5bS3K1nZGDJ7HKQYKYm3FLy7MrvRqu7ut2DhQbfDhHVparfJwKMtdvhZ8pJVgM&X-Amz-Signature=f80398e3008ef077331383c4b1242d4a1c5ae1745604e4de60f6e6a345559bdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

