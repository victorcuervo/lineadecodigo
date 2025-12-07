---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIBAOCNA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC2aB7Aeb1Py%2FLm7%2FQIkZkYnDZrpdTIQVbsUtMJJ4x7AiAAl3cjpe3OW7Sz%2Bka9a0gouLsePFiHQZ%2Bwa9g8H0R4YiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk%2FwlYRJ%2BLOdxWuliKtwDx%2FDttWWq%2Fdjv9EQHx9U77wCOtlvKGp7qnCj09qFS%2F5dHB23tlg%2FtJiwpkqEnz0sXIx0CinurhXnn4QMS1ZUrnrqOhSksnGBY19yndEHKnvb%2F4ZPbpQ%2BAQlTBJYQRuUOXexqBg%2FBCPagNpkTf2jHAJolIj8kXK3gzPEiQIWuO4JaHPEkJq%2Bzk5nuFw7loc8735l3E8FSCgmDY6VMzFQyL%2BiDe6z8dlLhaRf29Jpd4HGbukN1Y%2FjVCH5NUQXCT53a5qsZKNl4tEZkHCodzUhBBpYGS6a4s3bYkf5NLE%2BuQRTYwPp2QqXYdQOFXNqw%2Fp6mrHNuWBaazNUgKHTlcbQY1icytVvNbeLWemV%2B2lqjsXkX%2FZk6O41sTfEsFvco0Rcis1tBORJM8zmm8smn2JepRTcXHS9fY2Lzpx4wyE6wJSEBriRLRdSRMliskV5mT4yXbqe3TmVq9i6IlD0ghVZREv3IKahZtnm9voQ6U1boOSWeLHiwK%2BSUJudqs%2BJsCExxhzvDeen5cyGIa%2FZhU98G4d9iBeuD8vcmRGNqKIHJUC4GaUSLvcj6AM65pQJTJHIGGOvPpCVAj%2Bd%2BkWMppSruVORne5xCTku%2FVLYGWlulICumdvY0AEdIMkD5W1bMwhv3SyQY6pgHvs9TSs2%2FtIqu9B%2FUrlGKhFiRHeHrkYHMQ7IljoFteVlmHoiG%2BsK70S3LLHnpzf%2BYiVZUABJsc62e7b4exrJHyaOFj%2BFZ5gyH36pZOwzUB%2FQcu%2FLH85C3JoDQWXyVUF%2BX6x9i79%2BAyI7iVkGOPjsW3B%2F5CBaaZfyP1mkgflDIhwOdA1Bpn6YKFwj4lq%2FS3uwT9u8A38v1BulCA3oiG3gIwzC11Ic8J&X-Amz-Signature=1cf387c9fb30442df36c9793cea57cf43b86b6d2b08db6f9b63a0594268cd208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIBAOCNA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC2aB7Aeb1Py%2FLm7%2FQIkZkYnDZrpdTIQVbsUtMJJ4x7AiAAl3cjpe3OW7Sz%2Bka9a0gouLsePFiHQZ%2Bwa9g8H0R4YiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk%2FwlYRJ%2BLOdxWuliKtwDx%2FDttWWq%2Fdjv9EQHx9U77wCOtlvKGp7qnCj09qFS%2F5dHB23tlg%2FtJiwpkqEnz0sXIx0CinurhXnn4QMS1ZUrnrqOhSksnGBY19yndEHKnvb%2F4ZPbpQ%2BAQlTBJYQRuUOXexqBg%2FBCPagNpkTf2jHAJolIj8kXK3gzPEiQIWuO4JaHPEkJq%2Bzk5nuFw7loc8735l3E8FSCgmDY6VMzFQyL%2BiDe6z8dlLhaRf29Jpd4HGbukN1Y%2FjVCH5NUQXCT53a5qsZKNl4tEZkHCodzUhBBpYGS6a4s3bYkf5NLE%2BuQRTYwPp2QqXYdQOFXNqw%2Fp6mrHNuWBaazNUgKHTlcbQY1icytVvNbeLWemV%2B2lqjsXkX%2FZk6O41sTfEsFvco0Rcis1tBORJM8zmm8smn2JepRTcXHS9fY2Lzpx4wyE6wJSEBriRLRdSRMliskV5mT4yXbqe3TmVq9i6IlD0ghVZREv3IKahZtnm9voQ6U1boOSWeLHiwK%2BSUJudqs%2BJsCExxhzvDeen5cyGIa%2FZhU98G4d9iBeuD8vcmRGNqKIHJUC4GaUSLvcj6AM65pQJTJHIGGOvPpCVAj%2Bd%2BkWMppSruVORne5xCTku%2FVLYGWlulICumdvY0AEdIMkD5W1bMwhv3SyQY6pgHvs9TSs2%2FtIqu9B%2FUrlGKhFiRHeHrkYHMQ7IljoFteVlmHoiG%2BsK70S3LLHnpzf%2BYiVZUABJsc62e7b4exrJHyaOFj%2BFZ5gyH36pZOwzUB%2FQcu%2FLH85C3JoDQWXyVUF%2BX6x9i79%2BAyI7iVkGOPjsW3B%2F5CBaaZfyP1mkgflDIhwOdA1Bpn6YKFwj4lq%2FS3uwT9u8A38v1BulCA3oiG3gIwzC11Ic8J&X-Amz-Signature=4b8a968ffa48c4e6905354dda509a05e060bc34692b595fdd0d2e2d51e690e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

