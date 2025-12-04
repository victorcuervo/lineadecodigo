---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WB3OQDV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIFITkjSEu98B6SbLjcWomI%2BYg2AOKzh3iL5HU6h4D6ELAiB5l%2FUQlCk5rZ%2BCarp%2BsDSe8sIH%2B%2FHD9w76CoGk8hqGeCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMMQu%2FGGqyEqDh4oc5KtwDjU358n8%2B61jRETIaO5Idk6T3Z8d7bG9qyJiDgAZnHZ3u7aixeZr9XBLLe5TI%2FdEu0fPrOb9jJeMAXp4WcqeXL5fpemMYP1JZuC76tZ6lUIVK142nl6HCcNdXc%2BZhDfRV13G0jFQGHKAI7P3BFZ%2FPLweQhheSVEnDoqzTWWTDZHDzbseVzoa2jL25yOE4s0wTcV5378Clipzsu6bACr1ZdLyEXVA3p%2FVysdVeyHZQZawbOBzLEc2OwCqS16Mcmc%2FqXr2Ql9LgJU3qU6d%2BidKHTdGVrqJLHgh5n38vDgX64b3Evvx4SosiGUnQzRro64GHnxxN%2BtL3ROAeGeMbciYYQRw21j6Ts%2B%2BYf1IO9lBUe0qWAqKRK8uPVoDIC1IRTzbZUN7OdAkiPgBTT2ZQhgajpcf3WNIm%2FcxOo3V5mMTI8YDGEcPDbnohksHxNzxnZHe9j%2B7FVJ0gGuc5eCYWwDSWIeMXpmKmZcEaNpyr0NvclEa1u19SSFxb043pKp8OK0dcglywQ9Ba4Eu3XpfqZxxEmiEMZ9wR0Ic2XjNTttR63ADSXawPco5uUhDF74KAkpuatV97kf%2F26WwOSdGbykDphNs7Foatd%2B7byzxmg71leeQue7I%2FjuSxDemR1FcwwOfEyQY6pgGnCef4qYhmggssmc25PswlvgsjhPaEa79E%2FvMBN%2BuB9qwkziYLIE6dL12yjPnXQwO8tX9umKZnUS2ld7QAaGaJlbghvaL4OLTpPn%2B4DyGFEDNYVzcNbgb5NVvQn1BjbIhQYxl1oLQHBT8PF%2BCwSz%2FVJAu8G7UIr6uzeV98re%2BEw2wZhs8Ihd8uvoZCfWzskAG252SwoskyVoSmnTlaNd1WJi5HdCBK&X-Amz-Signature=a30191050c31fe6740bf577e45b72f31930a46151928f73c93842fe3c49938f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WB3OQDV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIFITkjSEu98B6SbLjcWomI%2BYg2AOKzh3iL5HU6h4D6ELAiB5l%2FUQlCk5rZ%2BCarp%2BsDSe8sIH%2B%2FHD9w76CoGk8hqGeCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMMQu%2FGGqyEqDh4oc5KtwDjU358n8%2B61jRETIaO5Idk6T3Z8d7bG9qyJiDgAZnHZ3u7aixeZr9XBLLe5TI%2FdEu0fPrOb9jJeMAXp4WcqeXL5fpemMYP1JZuC76tZ6lUIVK142nl6HCcNdXc%2BZhDfRV13G0jFQGHKAI7P3BFZ%2FPLweQhheSVEnDoqzTWWTDZHDzbseVzoa2jL25yOE4s0wTcV5378Clipzsu6bACr1ZdLyEXVA3p%2FVysdVeyHZQZawbOBzLEc2OwCqS16Mcmc%2FqXr2Ql9LgJU3qU6d%2BidKHTdGVrqJLHgh5n38vDgX64b3Evvx4SosiGUnQzRro64GHnxxN%2BtL3ROAeGeMbciYYQRw21j6Ts%2B%2BYf1IO9lBUe0qWAqKRK8uPVoDIC1IRTzbZUN7OdAkiPgBTT2ZQhgajpcf3WNIm%2FcxOo3V5mMTI8YDGEcPDbnohksHxNzxnZHe9j%2B7FVJ0gGuc5eCYWwDSWIeMXpmKmZcEaNpyr0NvclEa1u19SSFxb043pKp8OK0dcglywQ9Ba4Eu3XpfqZxxEmiEMZ9wR0Ic2XjNTttR63ADSXawPco5uUhDF74KAkpuatV97kf%2F26WwOSdGbykDphNs7Foatd%2B7byzxmg71leeQue7I%2FjuSxDemR1FcwwOfEyQY6pgGnCef4qYhmggssmc25PswlvgsjhPaEa79E%2FvMBN%2BuB9qwkziYLIE6dL12yjPnXQwO8tX9umKZnUS2ld7QAaGaJlbghvaL4OLTpPn%2B4DyGFEDNYVzcNbgb5NVvQn1BjbIhQYxl1oLQHBT8PF%2BCwSz%2FVJAu8G7UIr6uzeV98re%2BEw2wZhs8Ihd8uvoZCfWzskAG252SwoskyVoSmnTlaNd1WJi5HdCBK&X-Amz-Signature=cf90f955ff9d510b2fb5067dddc1b2fd441e938fd321dc92bc439e7f3a48a597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

