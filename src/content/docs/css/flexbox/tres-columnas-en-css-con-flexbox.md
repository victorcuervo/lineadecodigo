---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6DELK5P%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTMJ2co1IwLy5Sfl5JLY9dAM7NhxI6QF%2BMNowZLnvWlAiB6hRaWNZqY%2Bj8XJuCfHm3QXIqYc1R7Iy9RkYpBr%2BIZ7yqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeY601qanTESFXCvEKtwDlScesuHnylyTd9%2BT3YIUzf8VzzAvzv9NRJ9gVPCVCw97rK8QuQMeNbGU1GTWGwAOluXtDjYCpN7k5TXmIvPJtj9GP%2FLtnbcOWEDycVOo4EqFbD8vpE0fN6gy%2BT9jnIneGHiytX7mABHluXhVq%2BBXuMpHhillmNUIjGkyewweQnWbcK1UlWrzRD%2BVN%2FFXTUW0MmLtXzjLiqRYeCTEEvIRSIC9laaK29E%2BnOGgDaKkdV4Lz%2BGGj36u3X2Kjii%2BsaFCwDr45rUCTcPnKI8gChh7CLeBQlg10M%2BcyRgpLVVjCfGj6ZP0yA9vHddPXZWz4nNf%2FsMyeFiMN%2FC%2FKs8PZopdsEuqGWsRhgcjZ4GimI9Ljqy0zxKbqzM5YxPDKAcTJbBrDzBjW1acTy6tXUMOKyHY%2F7Ktm9ZxxSVcc6fyKIry8b%2BssO3IVEYeNIVk9kk2UtQ%2FoO9mkvKN2LLGkudWRKJlLCGd3oiOGPmPLfdqpCqv3UX7JqGFH%2BRJ2fgD%2FZewo4ILntRS7mGeTnRqcGAypkZqPbkD5o4R9THKRzkjefz6Gn1UtDwTNzkvcoOhZD0dZTLce66P8MN26qMUgNpsmPU%2F018nLlhDGbT0YYuvP9cetfrFGr1K3TvqG%2FRQx5wwqqPUyQY6pgF46dQUJk0b54II0K9u2XuMYze3hAsfPMsja56oHkz2S63XbGrtBhd6rQeG5kjJ0fROgcccWXZN3r1p%2BbX06FsnRjTO3lLUWLMZoiaaSzM0K%2Fds0vm8Rt7LK%2BNZwEgdKyShI1XU%2FRSMuLhipu478MxmJCc7AKnUxxx8DzKxpZMzHhj0Nt757AQTU1RV496H9vgxiJ5GzGcjhzE0kuKqHuZd7FajGfpX&X-Amz-Signature=2640afd6d68f6b2c50ef857aa2df3d24b19c1fe76d41b43b140e04ed60fe4bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6DELK5P%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTMJ2co1IwLy5Sfl5JLY9dAM7NhxI6QF%2BMNowZLnvWlAiB6hRaWNZqY%2Bj8XJuCfHm3QXIqYc1R7Iy9RkYpBr%2BIZ7yqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeY601qanTESFXCvEKtwDlScesuHnylyTd9%2BT3YIUzf8VzzAvzv9NRJ9gVPCVCw97rK8QuQMeNbGU1GTWGwAOluXtDjYCpN7k5TXmIvPJtj9GP%2FLtnbcOWEDycVOo4EqFbD8vpE0fN6gy%2BT9jnIneGHiytX7mABHluXhVq%2BBXuMpHhillmNUIjGkyewweQnWbcK1UlWrzRD%2BVN%2FFXTUW0MmLtXzjLiqRYeCTEEvIRSIC9laaK29E%2BnOGgDaKkdV4Lz%2BGGj36u3X2Kjii%2BsaFCwDr45rUCTcPnKI8gChh7CLeBQlg10M%2BcyRgpLVVjCfGj6ZP0yA9vHddPXZWz4nNf%2FsMyeFiMN%2FC%2FKs8PZopdsEuqGWsRhgcjZ4GimI9Ljqy0zxKbqzM5YxPDKAcTJbBrDzBjW1acTy6tXUMOKyHY%2F7Ktm9ZxxSVcc6fyKIry8b%2BssO3IVEYeNIVk9kk2UtQ%2FoO9mkvKN2LLGkudWRKJlLCGd3oiOGPmPLfdqpCqv3UX7JqGFH%2BRJ2fgD%2FZewo4ILntRS7mGeTnRqcGAypkZqPbkD5o4R9THKRzkjefz6Gn1UtDwTNzkvcoOhZD0dZTLce66P8MN26qMUgNpsmPU%2F018nLlhDGbT0YYuvP9cetfrFGr1K3TvqG%2FRQx5wwqqPUyQY6pgF46dQUJk0b54II0K9u2XuMYze3hAsfPMsja56oHkz2S63XbGrtBhd6rQeG5kjJ0fROgcccWXZN3r1p%2BbX06FsnRjTO3lLUWLMZoiaaSzM0K%2Fds0vm8Rt7LK%2BNZwEgdKyShI1XU%2FRSMuLhipu478MxmJCc7AKnUxxx8DzKxpZMzHhj0Nt757AQTU1RV496H9vgxiJ5GzGcjhzE0kuKqHuZd7FajGfpX&X-Amz-Signature=5cdc35d9ea7915d5ee2653c774c61ac5d9694444171c179eb42892420ecf5329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

