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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROTPH25L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T065015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIE0ZOWVk%2BkT99%2FXhmRgnXRTZO2wf2fHN7dWxhLZPF7PqAiEA9vDt5%2BHE9Lyst64qfSh6Fg341bvBt64edOBs%2B3uhUXoq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMJjmqzIrD8nWVIZzSrcA%2BXA62gwapUqtMt0CLvvo557%2B5GmCuN2glfCpoAT72sVYgHA64tTdGNYa1i7xvWW2hAzGPRfXx5nBr0P%2BNR50mrvr3RMztW7sUz%2FcWanKqQDmIF5ILnvHw3gy0IZGZEp%2Fm8faIWFLMp9Fxs8%2BcN6XHliFCGxzxWq%2FDJylmI6fGmavblQejxhyYGCsKhv7QRDYtRYNA69oIOm0FhxzXzPRUvksazq%2Bgx52sJoKDuS8n1vg2TzMl863dDgPPMbq9MbtUxFHZ6tw6wn%2BFvyeCUBCo%2FazV52PhRyyZVXMBZcCF8cWWzDgiMwGbpSJ0hRJC%2Bz2SnzvzmcUrBKrhH5HB0MK0so99pfHKcYKSsU8bzgjuDEgXFahiLgx3Eddjn5iqL8IOMm%2FMpj2wSw9DLndHeMNriDtmaUksQSP7KOlMSNYnnxWkXFM4CmG0X%2F%2FflJC2j60%2FqwjhphJK8gVc4syR7KnBwKj9N72RH6rq%2F2JJ7udw2QQe10XKqNdAy2K%2BatBof79yhOx1A4uOA5GMKiJpO4UEl0Z1z4We8zOHPT9YQ46buZRuA%2Bss7Xg2z%2FZGFaGZkpW6JhEfflRcyfvx7ArWeMrb64ElcIH8ZF1OBAsWauGlSG9TRHN%2B9F2e6%2BlsI9MNmbv8kGOqUBW1MJ%2B2kTRKzneHs%2BFJ3ns6JfurcxO5IcQEnwXUpC66dL2nR3ameT%2FbuB6jGUdFNMTgFmUakjRNK%2BoAMHKai6i7Imtn6uUbfrTEy7985oQ0PcCIgm%2BqdVuFMeY66SngDJ%2FxWHxt7f%2FzvKp1kPX9SatMxlEO3kO50MuiM5CZRW7wp7mlHv7AMEpVbERL8BnmUx3XqKwtPfHzTdBcFsPuKuGm%2BfY6JR&X-Amz-Signature=0d3f49ce6927ae4e5becbb4548979734f4222f5cba1b93f4ee59386d4dc8f54b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROTPH25L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T065015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIE0ZOWVk%2BkT99%2FXhmRgnXRTZO2wf2fHN7dWxhLZPF7PqAiEA9vDt5%2BHE9Lyst64qfSh6Fg341bvBt64edOBs%2B3uhUXoq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMJjmqzIrD8nWVIZzSrcA%2BXA62gwapUqtMt0CLvvo557%2B5GmCuN2glfCpoAT72sVYgHA64tTdGNYa1i7xvWW2hAzGPRfXx5nBr0P%2BNR50mrvr3RMztW7sUz%2FcWanKqQDmIF5ILnvHw3gy0IZGZEp%2Fm8faIWFLMp9Fxs8%2BcN6XHliFCGxzxWq%2FDJylmI6fGmavblQejxhyYGCsKhv7QRDYtRYNA69oIOm0FhxzXzPRUvksazq%2Bgx52sJoKDuS8n1vg2TzMl863dDgPPMbq9MbtUxFHZ6tw6wn%2BFvyeCUBCo%2FazV52PhRyyZVXMBZcCF8cWWzDgiMwGbpSJ0hRJC%2Bz2SnzvzmcUrBKrhH5HB0MK0so99pfHKcYKSsU8bzgjuDEgXFahiLgx3Eddjn5iqL8IOMm%2FMpj2wSw9DLndHeMNriDtmaUksQSP7KOlMSNYnnxWkXFM4CmG0X%2F%2FflJC2j60%2FqwjhphJK8gVc4syR7KnBwKj9N72RH6rq%2F2JJ7udw2QQe10XKqNdAy2K%2BatBof79yhOx1A4uOA5GMKiJpO4UEl0Z1z4We8zOHPT9YQ46buZRuA%2Bss7Xg2z%2FZGFaGZkpW6JhEfflRcyfvx7ArWeMrb64ElcIH8ZF1OBAsWauGlSG9TRHN%2B9F2e6%2BlsI9MNmbv8kGOqUBW1MJ%2B2kTRKzneHs%2BFJ3ns6JfurcxO5IcQEnwXUpC66dL2nR3ameT%2FbuB6jGUdFNMTgFmUakjRNK%2BoAMHKai6i7Imtn6uUbfrTEy7985oQ0PcCIgm%2BqdVuFMeY66SngDJ%2FxWHxt7f%2FzvKp1kPX9SatMxlEO3kO50MuiM5CZRW7wp7mlHv7AMEpVbERL8BnmUx3XqKwtPfHzTdBcFsPuKuGm%2BfY6JR&X-Amz-Signature=7c628eb384e9d69aa19d5642494cfe9f07d3dae4a63cb6c5b71cd95cf90e14e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

