---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677EMW7QU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FfNMuEJqfY8MkpuyKAzBh1cXCJcsfZHv4KDjq3MGSQgIgCtW4x%2BQnfZOAYcIVugKo78bXSI%2BQFhEtpdRKwATBHFcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPUucCbCFmr1Hx6tVCrcAyl%2BgdYn1FlGB80fK%2BjD%2Bg1x7bsKhXxOKHheJYi6OoMWNN1zJ%2Fc7HtOgYgtFsw5F5DeDn6NpQ%2FRDQkhaq697uqhuXSmm17olpr4311WgbM1r9vSkuXn61oBgTnvveeyqQPLRC4ahGRso3Qr7C1yK0Tg%2BbF6EeCFPGZjOm2Jq4iybBUQKtYAN%2FTEdX7PD4cY1tJELP7hiB080V5hA8S9kdnM0BK9JPTewveBdHO4Imt1CFswklWwyf%2FDmXFCFXvhiQ%2FqxQI4w%2FdNzHl4D0ner4TbsdRp7gTHfQtuuXr6nnqxOYozSfKDRTcqm26ni2WWW2z4%2BOYEyDbSRJMWvnuQx9GOdNekiyJGmDEVN%2BFtGJsZoQdfYcBQVI0%2BB1VvlPZxca221vjxWi1EtzT2gGllGA43Eaf0vQZijA%2BrJSuOnHQpNM8855G3r69p97rhZCJ7WO17JYghRl1TMoF614WHqV9VlW%2BsXym2WPmEQiqxRkntaLVq6GJ0ftVHPi2N%2FFyEPLt1iFT4cAKyWD3svFhmfSkPDOKWdhq3ncwFz35ZvNadFRxw2B5offvsFt0y9NiTRNWcRkBHh3y3l9k1f6GpVxr3dcLBAPV%2BSa9VKhry3LjPu3Zkq32verTLXtFEzMIHNyskGOqUBVifFMpoINjXPN9e%2BSlAZPoXT1P%2Fsh%2BNTlWYRamGj3AFHczR0U6w1MCfuLoERHL4iPhnary%2BN9dyXAMyFosybNCmhuIQckFaPbfWdsSM2qxGveVrNe9BaauoQlHgwiQyc01wAf62XOjFvRSJK8hGQv3Vc9Y1CFUSCXKW6Q8tCf0gW5%2BNP5Xh91B55JY1fq3vZ247hG3ijkv2qvkIKj7pav4sGAFm1&X-Amz-Signature=adf8469fa38d90a0faa98ca415ed2ca276d268bdcd208653cfa22c7db44258bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677EMW7QU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FfNMuEJqfY8MkpuyKAzBh1cXCJcsfZHv4KDjq3MGSQgIgCtW4x%2BQnfZOAYcIVugKo78bXSI%2BQFhEtpdRKwATBHFcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPUucCbCFmr1Hx6tVCrcAyl%2BgdYn1FlGB80fK%2BjD%2Bg1x7bsKhXxOKHheJYi6OoMWNN1zJ%2Fc7HtOgYgtFsw5F5DeDn6NpQ%2FRDQkhaq697uqhuXSmm17olpr4311WgbM1r9vSkuXn61oBgTnvveeyqQPLRC4ahGRso3Qr7C1yK0Tg%2BbF6EeCFPGZjOm2Jq4iybBUQKtYAN%2FTEdX7PD4cY1tJELP7hiB080V5hA8S9kdnM0BK9JPTewveBdHO4Imt1CFswklWwyf%2FDmXFCFXvhiQ%2FqxQI4w%2FdNzHl4D0ner4TbsdRp7gTHfQtuuXr6nnqxOYozSfKDRTcqm26ni2WWW2z4%2BOYEyDbSRJMWvnuQx9GOdNekiyJGmDEVN%2BFtGJsZoQdfYcBQVI0%2BB1VvlPZxca221vjxWi1EtzT2gGllGA43Eaf0vQZijA%2BrJSuOnHQpNM8855G3r69p97rhZCJ7WO17JYghRl1TMoF614WHqV9VlW%2BsXym2WPmEQiqxRkntaLVq6GJ0ftVHPi2N%2FFyEPLt1iFT4cAKyWD3svFhmfSkPDOKWdhq3ncwFz35ZvNadFRxw2B5offvsFt0y9NiTRNWcRkBHh3y3l9k1f6GpVxr3dcLBAPV%2BSa9VKhry3LjPu3Zkq32verTLXtFEzMIHNyskGOqUBVifFMpoINjXPN9e%2BSlAZPoXT1P%2Fsh%2BNTlWYRamGj3AFHczR0U6w1MCfuLoERHL4iPhnary%2BN9dyXAMyFosybNCmhuIQckFaPbfWdsSM2qxGveVrNe9BaauoQlHgwiQyc01wAf62XOjFvRSJK8hGQv3Vc9Y1CFUSCXKW6Q8tCf0gW5%2BNP5Xh91B55JY1fq3vZ247hG3ijkv2qvkIKj7pav4sGAFm1&X-Amz-Signature=edd6d5f96c76a06f3142428d3784c1a726e6b8f32935425dd2bf21bed5697af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

