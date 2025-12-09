---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNJOV6AH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T020803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGknnH9E0aSNWs6fAA42DnHGxGmCn%2FYaWpE%2BCtH6au%2BjAiBYDyStXGOaaVv5BF4Z5O5P7wqY8Wde2OBUrv1bM2AeHyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMntyMXKEYKPPXFwhiKtwDw%2BrFGt2vkyQ2DYTkZA9IH3x1RCKS5Yr7c7eUgcT9zGCulVBcUvEVDK6GrJY3zpyFmmzrlKDQsBQHDxBKponApmFNtn0RfGfgksl9nbD2Da1qpfQGlWuNrRf%2BiA9VyMslur%2FZ0pLYq%2FgKreurrxSDWry8LLuivmHmsIvADVbB8lG%2BrmWQfOB%2FNQgM5K8MnhFEnWgi6a7SKlF9AzBZe9iBYvPZ0onBBmgeaqsz1jXFIkTd1qoVVvEMCm1%2BOo5d2U%2FyI82cXnWI4IvnyP9WwjqNKUOno8BoEZ8QP3Y59xpF1WT4KWLcS0WPC1Qveg7SZY2bBEeX3%2Fkk8k08NkUxau0AfJ97QlM3HKphPO5BFUM8%2FFPTskmgQbidlBCKBNDIDuFabu0hDLV7heJifJ3dlNBEEhwsxKyADe7dM50K%2Fz3CCm8QeqjdK3cq1wZq1Q1jgipW8PGIY1hfGLYoRygnWkX74GAmOMYVohOWBi%2Bd6iFXHcaTFRZidxwTYjanu3gRnOrs6l5r%2B4oXxnahh1BmpaSxrlW2mV134iVzTHcinjpPmEsc2GvY4NpO9lDgiKFd%2B9Yg5vVpa5bcV%2Fnlirs5RHJs1I%2BB7K1LU9uCvPMwNH1eA1f1ASBZ%2FTV7Vy9zTJIwoendyQY6pgHjvjo0Y4APyZrwKDjcSwvalcry8gpNEUPgeQPago5fFxKZ4moGv6ccSkBFKaFPk%2BddRvkjMOWqxH%2BnWomP3gPiENdH%2FVJaYb%2FQB5li8gWMaRCdq2HmtqGE2Rj5d%2F26EWmaW6k11mAU5wkvs%2F3XdeaU6WOtlZn1R358MiZab%2BMI1lL0fio0HMTHGWXLXWoFutXG1%2Fln5eBaOKNV%2FRi6rr%2B00tnpHX54&X-Amz-Signature=3f456e6066f37b46896c80211e1cca1eec7342aad4e9b6dde0a1c7310601c935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNJOV6AH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T020803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGknnH9E0aSNWs6fAA42DnHGxGmCn%2FYaWpE%2BCtH6au%2BjAiBYDyStXGOaaVv5BF4Z5O5P7wqY8Wde2OBUrv1bM2AeHyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMntyMXKEYKPPXFwhiKtwDw%2BrFGt2vkyQ2DYTkZA9IH3x1RCKS5Yr7c7eUgcT9zGCulVBcUvEVDK6GrJY3zpyFmmzrlKDQsBQHDxBKponApmFNtn0RfGfgksl9nbD2Da1qpfQGlWuNrRf%2BiA9VyMslur%2FZ0pLYq%2FgKreurrxSDWry8LLuivmHmsIvADVbB8lG%2BrmWQfOB%2FNQgM5K8MnhFEnWgi6a7SKlF9AzBZe9iBYvPZ0onBBmgeaqsz1jXFIkTd1qoVVvEMCm1%2BOo5d2U%2FyI82cXnWI4IvnyP9WwjqNKUOno8BoEZ8QP3Y59xpF1WT4KWLcS0WPC1Qveg7SZY2bBEeX3%2Fkk8k08NkUxau0AfJ97QlM3HKphPO5BFUM8%2FFPTskmgQbidlBCKBNDIDuFabu0hDLV7heJifJ3dlNBEEhwsxKyADe7dM50K%2Fz3CCm8QeqjdK3cq1wZq1Q1jgipW8PGIY1hfGLYoRygnWkX74GAmOMYVohOWBi%2Bd6iFXHcaTFRZidxwTYjanu3gRnOrs6l5r%2B4oXxnahh1BmpaSxrlW2mV134iVzTHcinjpPmEsc2GvY4NpO9lDgiKFd%2B9Yg5vVpa5bcV%2Fnlirs5RHJs1I%2BB7K1LU9uCvPMwNH1eA1f1ASBZ%2FTV7Vy9zTJIwoendyQY6pgHjvjo0Y4APyZrwKDjcSwvalcry8gpNEUPgeQPago5fFxKZ4moGv6ccSkBFKaFPk%2BddRvkjMOWqxH%2BnWomP3gPiENdH%2FVJaYb%2FQB5li8gWMaRCdq2HmtqGE2Rj5d%2F26EWmaW6k11mAU5wkvs%2F3XdeaU6WOtlZn1R358MiZab%2BMI1lL0fio0HMTHGWXLXWoFutXG1%2Fln5eBaOKNV%2FRi6rr%2B00tnpHX54&X-Amz-Signature=1ac5135578623e63e41b35a59a80215a231f941b146c9e677386020db01d8774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

