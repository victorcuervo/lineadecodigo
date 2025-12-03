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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMCSQPU5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIEg%2BFn2wimQjEAFF7tCeRRCqk0XPX1mfrxG0UrxOPhB5AiBkqyYXGpLvJKV9XVf9eIoHed9xnw7hAByeM5FwVFI0Yir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMK5E%2FhM6J0hJdrgREKtwDtXaVXVBoWl%2FSh6A38NvflN1evGLV34Q4qVLVvkKItvxXw3SqSYcMyUEeteP0NO%2FWvoGaj7jc8w8p8pNWDEJa3R7FIZZB7rX7HusfwP28ES3d7I0uH1lkEoCoMrA%2Fwg%2BgMVakU%2Fa1GKyuM3Ycx4EtPIKdax7IS%2FNTBV7%2Fj05lCBn7Ft3MmhA8QZZh2%2FkuD%2BE2xjw201XnRHet7ILYi4uF75Om1ROCVsVz8LXzvedWDgG1xDo%2BQSqGPCrjuoSMIwghqNPuW3vP0%2Fy1dSBP3UejQrsPqxiytkYMiHdzCznMpMYLRx25b28ZDKiEn8s25TuAys03jmu6gSAkImPSo4aBv8y2zflJK1Knf%2BIV5FBfecVKhnx4TseRmR6F9Xjo6mSckRttMz3U8ruPui9h08hfLLu4tiknSnr1NsfA6ZzZayT8zcgFoosC0HQn8e1D5lQre9g4V5cNLD8d0glBgssoPfTfmgxD7QgOS4UO%2BC2dFlt69el24xGtQKUUnxrajLi%2F77Bsx%2FGWUjDRRksAcBlbORPH64XpMLwIM2W8bcupZmsPR9X29S6CTs82hCY%2FfjtsRfsDtl0HOCRqSkc8D5yP46BnyvAneahnwfkqfvYTXvLrIzLl%2FUkFfRK9oEowiP%2B9yQY6pgFJSQS%2FeR%2B0g4uZBbuMtpfbzj4MAFV6t7t4oZb2YYYEF4Xp%2BxU8VXkSPFvt67yHo2qR3vJun1%2BCHLH8ID3qvHXn5SJKCScJWmkzItGi%2FQkbriJoS2zSAwxQ%2Fh%2B5xEFA3%2F0OU%2FAA954QHGO8%2FEbEfIpY%2F8bwbqeR1gW%2BjIcNQtD6kh5pDQLeDa%2BhAOIAnYTkm%2FXXduY6f53o1x7DhhH%2F%2Bed%2FynurIwhU&X-Amz-Signature=d03e87ac87365083684f34259029b3fa1ccc11cb9d059d139fee5d35bdb7ed8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMCSQPU5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIEg%2BFn2wimQjEAFF7tCeRRCqk0XPX1mfrxG0UrxOPhB5AiBkqyYXGpLvJKV9XVf9eIoHed9xnw7hAByeM5FwVFI0Yir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMK5E%2FhM6J0hJdrgREKtwDtXaVXVBoWl%2FSh6A38NvflN1evGLV34Q4qVLVvkKItvxXw3SqSYcMyUEeteP0NO%2FWvoGaj7jc8w8p8pNWDEJa3R7FIZZB7rX7HusfwP28ES3d7I0uH1lkEoCoMrA%2Fwg%2BgMVakU%2Fa1GKyuM3Ycx4EtPIKdax7IS%2FNTBV7%2Fj05lCBn7Ft3MmhA8QZZh2%2FkuD%2BE2xjw201XnRHet7ILYi4uF75Om1ROCVsVz8LXzvedWDgG1xDo%2BQSqGPCrjuoSMIwghqNPuW3vP0%2Fy1dSBP3UejQrsPqxiytkYMiHdzCznMpMYLRx25b28ZDKiEn8s25TuAys03jmu6gSAkImPSo4aBv8y2zflJK1Knf%2BIV5FBfecVKhnx4TseRmR6F9Xjo6mSckRttMz3U8ruPui9h08hfLLu4tiknSnr1NsfA6ZzZayT8zcgFoosC0HQn8e1D5lQre9g4V5cNLD8d0glBgssoPfTfmgxD7QgOS4UO%2BC2dFlt69el24xGtQKUUnxrajLi%2F77Bsx%2FGWUjDRRksAcBlbORPH64XpMLwIM2W8bcupZmsPR9X29S6CTs82hCY%2FfjtsRfsDtl0HOCRqSkc8D5yP46BnyvAneahnwfkqfvYTXvLrIzLl%2FUkFfRK9oEowiP%2B9yQY6pgFJSQS%2FeR%2B0g4uZBbuMtpfbzj4MAFV6t7t4oZb2YYYEF4Xp%2BxU8VXkSPFvt67yHo2qR3vJun1%2BCHLH8ID3qvHXn5SJKCScJWmkzItGi%2FQkbriJoS2zSAwxQ%2Fh%2B5xEFA3%2F0OU%2FAA954QHGO8%2FEbEfIpY%2F8bwbqeR1gW%2BjIcNQtD6kh5pDQLeDa%2BhAOIAnYTkm%2FXXduY6f53o1x7DhhH%2F%2Bed%2FynurIwhU&X-Amz-Signature=7f91f7098677fa74f0a465defc1bae17acfdf04806494ff49dbe7daa28da48a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

