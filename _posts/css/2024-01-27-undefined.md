---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPOAXDSF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIHJ%2BfdHQvxSTVjktUYhvmjg3BRaJQeDeWidQ%2BTn1jXXaAiEAvKy4Rsnxo%2BxaIsfLLvIDohGkMEkhkhFQFvRKFTEbAo4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAsXr8bE7wuc%2F39W7yrcA1UzZ0ndDy9oCgrc4zxEcG6g4Fp4BriCFpbG%2Bdrgy%2BJNdYkWYiIR9jDYzvYDbCDahBn%2FM0bj6O9C%2Blnbg1YGnpcD57g1sxOIp7YwFCkO8i0jKeApREXHtBPk4a1eVAaFvrDQmBMBHpr7p5RJ9hupidwbseKOSitgpsHh2ctsRj%2BqaFTaKo9VT6KIU6Gi2quoB1kkJAyNiNtiGGUMxe3F65giuXexok36qioA%2F7Tswhtfdsvq6FlmhU2P%2FqjHwp3bcR%2F79mU%2FxR8nXFxg3WCgblbZTEuWV%2FoP%2B9k1wqxu3X81s84b2O1jNpWEo5cpSCTlgWur0fjtFPrlT7YNazAHexAT0oaxdJLxUuVb18kxZ4EmNVwAnxlPM%2FxO4QHN%2FFkWFFKC1D5ZA7PneS%2F8%2FvKsEbAwkoK4vDoy%2BLKvZupyz8Y4QdfJO0aUefioEAEE%2Fq31i3YBW3tcQcoztlhTgrQFWO8YjMVgqR5zhq71n2y9v3tBOwBgIJBqoexghtXU5SBUfTLs3eGMgAWtzE9FcLTdOAjTXqDfv3KKvPigQCj5JR%2B562%2FJGCn0nY1P32NydmkPHhA2cv0djHpAJ0CjYaLg6UusFwlh%2B4ZHCQ%2FrwVkkYD%2FwOh0XXKsMjVWYYg%2F7MIb3v8kGOqUBRKlQAI1Iy74txjwfRbTXvxSPgndJdn5dxw0e0gpPUKHLgegB1HP2uIB7RbGrZfI7oEq3PfAZQAIhErb3uKhcqZHHzs%2FUfjXx8QJoyZXijP744iECL5rsgl6j630hyIXir4FmVVtPjipbvYU5mFMWCMr3uLYt5e1tSD9KSGQiE1CmBE88tRxU%2FsE3ixQ3w6tvyMzSleJlozq9JArzFKCVtpP9atyx&X-Amz-Signature=a5e2cf3265a15998207bfbd89a8e7d58d0d120be57b12035f0f61a2e09b6e77d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPOAXDSF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIHJ%2BfdHQvxSTVjktUYhvmjg3BRaJQeDeWidQ%2BTn1jXXaAiEAvKy4Rsnxo%2BxaIsfLLvIDohGkMEkhkhFQFvRKFTEbAo4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAsXr8bE7wuc%2F39W7yrcA1UzZ0ndDy9oCgrc4zxEcG6g4Fp4BriCFpbG%2Bdrgy%2BJNdYkWYiIR9jDYzvYDbCDahBn%2FM0bj6O9C%2Blnbg1YGnpcD57g1sxOIp7YwFCkO8i0jKeApREXHtBPk4a1eVAaFvrDQmBMBHpr7p5RJ9hupidwbseKOSitgpsHh2ctsRj%2BqaFTaKo9VT6KIU6Gi2quoB1kkJAyNiNtiGGUMxe3F65giuXexok36qioA%2F7Tswhtfdsvq6FlmhU2P%2FqjHwp3bcR%2F79mU%2FxR8nXFxg3WCgblbZTEuWV%2FoP%2B9k1wqxu3X81s84b2O1jNpWEo5cpSCTlgWur0fjtFPrlT7YNazAHexAT0oaxdJLxUuVb18kxZ4EmNVwAnxlPM%2FxO4QHN%2FFkWFFKC1D5ZA7PneS%2F8%2FvKsEbAwkoK4vDoy%2BLKvZupyz8Y4QdfJO0aUefioEAEE%2Fq31i3YBW3tcQcoztlhTgrQFWO8YjMVgqR5zhq71n2y9v3tBOwBgIJBqoexghtXU5SBUfTLs3eGMgAWtzE9FcLTdOAjTXqDfv3KKvPigQCj5JR%2B562%2FJGCn0nY1P32NydmkPHhA2cv0djHpAJ0CjYaLg6UusFwlh%2B4ZHCQ%2FrwVkkYD%2FwOh0XXKsMjVWYYg%2F7MIb3v8kGOqUBRKlQAI1Iy74txjwfRbTXvxSPgndJdn5dxw0e0gpPUKHLgegB1HP2uIB7RbGrZfI7oEq3PfAZQAIhErb3uKhcqZHHzs%2FUfjXx8QJoyZXijP744iECL5rsgl6j630hyIXir4FmVVtPjipbvYU5mFMWCMr3uLYt5e1tSD9KSGQiE1CmBE88tRxU%2FsE3ixQ3w6tvyMzSleJlozq9JArzFKCVtpP9atyx&X-Amz-Signature=7c37a71edccc632f3997298ee2aee383fb78b0f698aff360fb662838a5f6f93d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

