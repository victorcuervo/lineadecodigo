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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHNXNGXC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL7qUV8kVcseTCJ7nSIzEboRm8edNBHEuIdHBruhK8wAIhAJtz%2F3fYup14hhsQhUxRhRKKrRj3EIyUvJpVojaWIJDoKv8DCHsQABoMNjM3NDIzMTgzODA1IgzNL%2F36j8k%2BbTCtLHwq3AO9qYgMdB0KPMnPUwDZrKvnzDyMF3cvY0eliryggnJjZwui%2FQu0c6NOOOElJt4%2FdTsF9ykprAxUgKmUG6QiiWcRpkN2NNdtpOwn60n32Fia9nxCe4LPV1xT7QmT48hQ4nwYJpcf2Z4vMRut9dcPHyPwGxKgluSXB%2BWcTIZApfgY98q6xZMqZIZs9wWGRcrQtF%2BF%2Fp1mlFmjXeOrwjIZmrtj2uRhlExVGwAk2diMaXPToclA%2FyoYBxcX2C0hfKcP77RBolXF1j%2Bf4VMsSgpgX82pIapK3i%2BbV1SzR%2BSpPRhYYrEs5E4ug4RBvpv%2BY%2FiovluqFHbKcqKJj%2FjpqqkWnOZaDbnVp%2FR60YXNUcWiNvsW%2FAIAJlx8nBW8TCphEbu4SrJiMsgNHaMBWB0yTKnOi9YFa8RcM%2FGpbSH3oDw4Gy5XVr%2FrWyFo%2F0PURaXSJ0jVaGywe4m0Q66RiQ8fSKviBVP6syiOru9u9FOdFssqF%2FAYAJTvAKgpmK2BIkxFhw9IgMbcQ05UJUT25lfikRsdE%2FGvPEfHgZM1R%2FhhXIo2Nssdv9bZi161QTKwINEMOLZSRsc0uAmCblrXsRnwMECnHv0EYVq4MTLK2as88VIv9SJClLWm2L0do3zm%2F4gUBjDg74nKBjqkARLNa%2BSymD1L%2FRLvvfjrnYAn3qJ4yfubUNkFWNRtKE2nsQos34YNhDO9whW8zFtsUNz3iIg6ciir2c%2B9xZbAlD2JD1woCAnN%2B75IFaSAsyqkA03dE%2BJoAXGsrISGwPcdm3Sw5TxEb1OvxzGV8Xjwc19nENy2lawG8ncpWDAef3pmcLz8Dai06fHdrl6vrPEoQYo%2FdenNll%2F0pY7Oh99klAixz%2Fjg&X-Amz-Signature=ac5cae3908520b337da9318c6db5a546d61c47fc2f06a2a68f9ce87c584d7cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHNXNGXC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL7qUV8kVcseTCJ7nSIzEboRm8edNBHEuIdHBruhK8wAIhAJtz%2F3fYup14hhsQhUxRhRKKrRj3EIyUvJpVojaWIJDoKv8DCHsQABoMNjM3NDIzMTgzODA1IgzNL%2F36j8k%2BbTCtLHwq3AO9qYgMdB0KPMnPUwDZrKvnzDyMF3cvY0eliryggnJjZwui%2FQu0c6NOOOElJt4%2FdTsF9ykprAxUgKmUG6QiiWcRpkN2NNdtpOwn60n32Fia9nxCe4LPV1xT7QmT48hQ4nwYJpcf2Z4vMRut9dcPHyPwGxKgluSXB%2BWcTIZApfgY98q6xZMqZIZs9wWGRcrQtF%2BF%2Fp1mlFmjXeOrwjIZmrtj2uRhlExVGwAk2diMaXPToclA%2FyoYBxcX2C0hfKcP77RBolXF1j%2Bf4VMsSgpgX82pIapK3i%2BbV1SzR%2BSpPRhYYrEs5E4ug4RBvpv%2BY%2FiovluqFHbKcqKJj%2FjpqqkWnOZaDbnVp%2FR60YXNUcWiNvsW%2FAIAJlx8nBW8TCphEbu4SrJiMsgNHaMBWB0yTKnOi9YFa8RcM%2FGpbSH3oDw4Gy5XVr%2FrWyFo%2F0PURaXSJ0jVaGywe4m0Q66RiQ8fSKviBVP6syiOru9u9FOdFssqF%2FAYAJTvAKgpmK2BIkxFhw9IgMbcQ05UJUT25lfikRsdE%2FGvPEfHgZM1R%2FhhXIo2Nssdv9bZi161QTKwINEMOLZSRsc0uAmCblrXsRnwMECnHv0EYVq4MTLK2as88VIv9SJClLWm2L0do3zm%2F4gUBjDg74nKBjqkARLNa%2BSymD1L%2FRLvvfjrnYAn3qJ4yfubUNkFWNRtKE2nsQos34YNhDO9whW8zFtsUNz3iIg6ciir2c%2B9xZbAlD2JD1woCAnN%2B75IFaSAsyqkA03dE%2BJoAXGsrISGwPcdm3Sw5TxEb1OvxzGV8Xjwc19nENy2lawG8ncpWDAef3pmcLz8Dai06fHdrl6vrPEoQYo%2FdenNll%2F0pY7Oh99klAixz%2Fjg&X-Amz-Signature=5b90e3864658231de5f574632db2c1aeb71cba6a12ec7a0859af74aece04c69a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

