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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OANQU72%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBM4xG9n1jIZUvDtpsJAa2Qiwo2%2FDhPpOUkL8T0nsTliAiApBrw534xCvrR2w5GvqnOjVyQ7GlZU2wKhiQieLFlhDyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM3Bs1103t%2F4N4ip%2FNKtwDU47vRHZIdGU1MF%2FMp54F3DfQL%2BTZQ%2Fryc7dC41g74R9w0Cp4xlYLPlf%2FHwxBlJTPEiUeFzVCsDQQS5OfRz2h8xz4Mhbe7Fd%2FcQlrLzqr4p7dc3SaU%2Fq5FE8o%2B%2FiuoKhQ8J3N86jcdIozwaRk9zbN2Sx2BkHEQ%2FgdrYgrnibEtNFHst6qba7OMxUP2TwIAJzsvL3crErMaETeti3kjiojolX%2FWcNWSl83wFbSSUsPECNoozkbZMEDws2AqefcU5n6QmiMUJ%2FlVxTE3NHfLvLx3nbi1L71OvMrzqjjObqJvH4IJraxIAx7E0IY4zxpkVkc5WxFMJUd4VMLGdwgh6tW3yvIzBaQTlKA%2BDBCA5vC2qXRTnA0XNoQLuPoffny%2BUzqVvZ6ePykvqkb%2BZ40vYXDALPgseb%2FrAFdbSWqn9YGQNDUEi8X1woRlJsndwnme%2BR3hd63jiTV0yuGK3tUXP3FW%2BbRKfQV4fEcyOloEUkSRarcjE3TF5lFoVO1ByAgP%2BcY8UhDzPv5QhQ7uv8azIixvl26gUJqN0mAUjLCurWkuAV4z4wgMo%2B%2FCqC%2FhgbjezTz1bUQcx1FC7Z2B20o65AYSxcJzTP7ATUWlf1syIbSc5GR1sBIihXdSJ7twM8wtKqKygY6pgH4hu1TfTAmjrc5djbL3Kvd1cdytgNHFZIwLPko3pL2uW9z07vS11BVMwa1YIAWn1oMf2mFuz3HyYPcQd5IggeFSv7P4bnV2N%2BfkDUrOnabkWhb1f%2FThBBtJWfNgpWDlRpn2C%2FdFF%2BCR4u4p5NqUKO6DRSoZVNaJE%2BEHxK1KczxLmqKaFnU4UxYPiow%2BP0ADSmeLmJGfvzOoUNBSiBX2jKKUuH%2BuWd1&X-Amz-Signature=f7d95783c34f95ca54b5ae986de675011e2788f57306da6ba4307aaaf9f007e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OANQU72%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBM4xG9n1jIZUvDtpsJAa2Qiwo2%2FDhPpOUkL8T0nsTliAiApBrw534xCvrR2w5GvqnOjVyQ7GlZU2wKhiQieLFlhDyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM3Bs1103t%2F4N4ip%2FNKtwDU47vRHZIdGU1MF%2FMp54F3DfQL%2BTZQ%2Fryc7dC41g74R9w0Cp4xlYLPlf%2FHwxBlJTPEiUeFzVCsDQQS5OfRz2h8xz4Mhbe7Fd%2FcQlrLzqr4p7dc3SaU%2Fq5FE8o%2B%2FiuoKhQ8J3N86jcdIozwaRk9zbN2Sx2BkHEQ%2FgdrYgrnibEtNFHst6qba7OMxUP2TwIAJzsvL3crErMaETeti3kjiojolX%2FWcNWSl83wFbSSUsPECNoozkbZMEDws2AqefcU5n6QmiMUJ%2FlVxTE3NHfLvLx3nbi1L71OvMrzqjjObqJvH4IJraxIAx7E0IY4zxpkVkc5WxFMJUd4VMLGdwgh6tW3yvIzBaQTlKA%2BDBCA5vC2qXRTnA0XNoQLuPoffny%2BUzqVvZ6ePykvqkb%2BZ40vYXDALPgseb%2FrAFdbSWqn9YGQNDUEi8X1woRlJsndwnme%2BR3hd63jiTV0yuGK3tUXP3FW%2BbRKfQV4fEcyOloEUkSRarcjE3TF5lFoVO1ByAgP%2BcY8UhDzPv5QhQ7uv8azIixvl26gUJqN0mAUjLCurWkuAV4z4wgMo%2B%2FCqC%2FhgbjezTz1bUQcx1FC7Z2B20o65AYSxcJzTP7ATUWlf1syIbSc5GR1sBIihXdSJ7twM8wtKqKygY6pgH4hu1TfTAmjrc5djbL3Kvd1cdytgNHFZIwLPko3pL2uW9z07vS11BVMwa1YIAWn1oMf2mFuz3HyYPcQd5IggeFSv7P4bnV2N%2BfkDUrOnabkWhb1f%2FThBBtJWfNgpWDlRpn2C%2FdFF%2BCR4u4p5NqUKO6DRSoZVNaJE%2BEHxK1KczxLmqKaFnU4UxYPiow%2BP0ADSmeLmJGfvzOoUNBSiBX2jKKUuH%2BuWd1&X-Amz-Signature=cbe7efdbf0f972a9145bd26797a24eef9ba58f810256676ac1b7a6d6384e934f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

