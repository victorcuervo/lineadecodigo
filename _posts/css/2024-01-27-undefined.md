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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7PJYPB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDSAJ3DtpeGNu2%2BWMkGv707lZ1V7aMaFgYEzCeIhLRodAiBw3%2FXEHE7sDOuimbxNIYIO1Q%2FkqvdSKXXyy2eZ5UMZpSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMZHEB%2BnA%2BCoxgUNCJKtwDP7d6vAF0vmhXTox7%2F5e6EmQgJouD7%2FPzq7aQiIMMIX1%2Bo0DxaprD5LfA%2F8wV%2Bsz0q4Kdr9qAabSVPGGpa3ZJJ48HeGejBgwD75G9yZ%2B9kwxYbfTlVoejjQSrLPnZaMwdEQbIIJz2HlupkeFvZffC915MNg34d%2B0JNBeUJUDimHQ4zUG2q0aM92dCziy%2Bo2JRxJMUEWvti5srIKicfYShOVKBVTdBEa2YwUX1UgCcAql7izGaTQv%2FhggowplCObvgcMSot3AI2lLz%2F9twNXljl2clrzkLu6NF0ARQR2dLEfRTV1maMOzkOcA0HZsTVjTbLz%2B7EQ36P9b29JUlx9J0sIGhhBsZCmdWwmFQLkQ%2FywChsweboe8Xw7BNpVLJCfLFVfTTKJ31Rd%2Fh5sr1DQCWmCEgV%2FBhGWEGPTDQDjWToX1p1S2Kn7HEBV7Qm3zHOGtkzpC94xhHUYCjzd9zrBA5%2F1Rbf5S6imyGTimvsR7lO4LKaoaWnRLkR4M98V7oEiIM2%2FP3x58pm%2BXBxBiNS%2ForC%2Fx3%2FPaF1EhGnVRZQqmj7%2B2dmkoqvdle0%2BMg3TRLbviKhuTOYlqYsXm1MTUANgge3LINbICHylbKuSLfIcFdwdUucQex2t6TdzYEUwAw8JPAyQY6pgEWK093g0ucNuaoAaIGeXRfGGyvMSfkzFREKb0nD9Ahgp%2FpqAbTpuSigtAfeXXDsSJihFYSI0Tw9pFNkj5KwZ%2BZ9oFoL%2FU%2FvYDwu7heGvNIfM8GN03OS5p1VbqXmlWiRV%2FIR0yOLBtLM7lVNqruguDv9GQre4PZ87gRYXWOP2aHN33lta5hUC0xtn%2FkXruTx5OL1cDKOH8TNYALasLi7P0c6OQsFQMN&X-Amz-Signature=fdfcb9b0a86766e2740076f3a29f158d92033754003449789a7d7df38bde296e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7PJYPB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDSAJ3DtpeGNu2%2BWMkGv707lZ1V7aMaFgYEzCeIhLRodAiBw3%2FXEHE7sDOuimbxNIYIO1Q%2FkqvdSKXXyy2eZ5UMZpSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMZHEB%2BnA%2BCoxgUNCJKtwDP7d6vAF0vmhXTox7%2F5e6EmQgJouD7%2FPzq7aQiIMMIX1%2Bo0DxaprD5LfA%2F8wV%2Bsz0q4Kdr9qAabSVPGGpa3ZJJ48HeGejBgwD75G9yZ%2B9kwxYbfTlVoejjQSrLPnZaMwdEQbIIJz2HlupkeFvZffC915MNg34d%2B0JNBeUJUDimHQ4zUG2q0aM92dCziy%2Bo2JRxJMUEWvti5srIKicfYShOVKBVTdBEa2YwUX1UgCcAql7izGaTQv%2FhggowplCObvgcMSot3AI2lLz%2F9twNXljl2clrzkLu6NF0ARQR2dLEfRTV1maMOzkOcA0HZsTVjTbLz%2B7EQ36P9b29JUlx9J0sIGhhBsZCmdWwmFQLkQ%2FywChsweboe8Xw7BNpVLJCfLFVfTTKJ31Rd%2Fh5sr1DQCWmCEgV%2FBhGWEGPTDQDjWToX1p1S2Kn7HEBV7Qm3zHOGtkzpC94xhHUYCjzd9zrBA5%2F1Rbf5S6imyGTimvsR7lO4LKaoaWnRLkR4M98V7oEiIM2%2FP3x58pm%2BXBxBiNS%2ForC%2Fx3%2FPaF1EhGnVRZQqmj7%2B2dmkoqvdle0%2BMg3TRLbviKhuTOYlqYsXm1MTUANgge3LINbICHylbKuSLfIcFdwdUucQex2t6TdzYEUwAw8JPAyQY6pgEWK093g0ucNuaoAaIGeXRfGGyvMSfkzFREKb0nD9Ahgp%2FpqAbTpuSigtAfeXXDsSJihFYSI0Tw9pFNkj5KwZ%2BZ9oFoL%2FU%2FvYDwu7heGvNIfM8GN03OS5p1VbqXmlWiRV%2FIR0yOLBtLM7lVNqruguDv9GQre4PZ87gRYXWOP2aHN33lta5hUC0xtn%2FkXruTx5OL1cDKOH8TNYALasLi7P0c6OQsFQMN&X-Amz-Signature=c619a382e8d504b0791eb8bf6db6aa43a9bee1774ab34616f2fd6f8de38a7b15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

