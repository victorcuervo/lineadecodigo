---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LIZOPDV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ6YW4uGt1UbNsFNq%2FYDxtiWlUas%2BOI1ipXbinwWHx4gIgcLyoiCjkURM61aNtn3FwVMyihuKmqdMkDY%2Fn7tQLbQEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkuahhgaKYpXUWc3ircA5%2BMUC%2BS4SsLMoFwmb%2B6e3n5HBMG6hryAbeeDFvJxSYsg5YxJ6viOyBbCOQUU2UEvFXyzgnyULgF2hacsFrf2bF90lTMqve1eHOJLUgyMXYzP4ur%2FN6fCgRkm%2B2MLoQrRDZy4p0VdcWRi45TS8zEQQfHHBmp%2F1EIg0B9E9ed4KM6PWSTO7FVB3Dqsy9n1bLQXOK%2FgA7y77fD%2FFYLPZxUoPcbZ09FCwkzbAFSshozw26wXewLotFoq3WC7Mm%2BwPbhXWLZv5BabAl%2BykvzKjlrVI80xKNkkSios%2BupyIyIScSOTfY8If1MXC%2FpURL9fAEaiR%2FiC1E%2Bbt5zhmxVoJEnSzR2H7%2B2vm6Pv9xB%2BFKnw5Ibhl5EUr2vEDu5EzavRnueZkOf3Epdvuizr4K4iyYzaMzG8jXY2owk8udb0DewjtYYTX3g6d64wrEFJcAVqZSR7qyK3zRn3InQ5o2gbSKvVdBxFSauCs4YkT784nDzp64Hw2meqST51KZZGxIwLNAhvpVHfGaYrlyillFi9gOEvJbZzwVQHurNUI4473Ez6ZHa7aNQiLDcJPQjdHAY1ft%2BU78hoSF202Ua9IFbQrSye9JoxinPl7bAYBeK6ZGOGa7x0H8RdNQWk2xZ%2Bk71MN6h3ckGOqUBJ5TCghfbHMGLwK7uQTjKbv7ijV7wlU%2BGHPmDON8nzRAclwLazLYmlt9DxrDECgOzp9xex164AIkC3ALNmkkxvmqXJuST5SQzfe7%2BWxZhIt9AGxDii1VJTNQXBzRwQSU3AjXOzCvNodudJYVEyHowC9Igri90C9U9djKxEF65EAPdjDED6oaDCNZ5Jr8zTqVu3ZusxaNHjwuoOEsfwnBnN9QLyjvF&X-Amz-Signature=48334d0c3d476538329c672d4dc2c73445344211267c45be455aed4b5dad2025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LIZOPDV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ6YW4uGt1UbNsFNq%2FYDxtiWlUas%2BOI1ipXbinwWHx4gIgcLyoiCjkURM61aNtn3FwVMyihuKmqdMkDY%2Fn7tQLbQEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkuahhgaKYpXUWc3ircA5%2BMUC%2BS4SsLMoFwmb%2B6e3n5HBMG6hryAbeeDFvJxSYsg5YxJ6viOyBbCOQUU2UEvFXyzgnyULgF2hacsFrf2bF90lTMqve1eHOJLUgyMXYzP4ur%2FN6fCgRkm%2B2MLoQrRDZy4p0VdcWRi45TS8zEQQfHHBmp%2F1EIg0B9E9ed4KM6PWSTO7FVB3Dqsy9n1bLQXOK%2FgA7y77fD%2FFYLPZxUoPcbZ09FCwkzbAFSshozw26wXewLotFoq3WC7Mm%2BwPbhXWLZv5BabAl%2BykvzKjlrVI80xKNkkSios%2BupyIyIScSOTfY8If1MXC%2FpURL9fAEaiR%2FiC1E%2Bbt5zhmxVoJEnSzR2H7%2B2vm6Pv9xB%2BFKnw5Ibhl5EUr2vEDu5EzavRnueZkOf3Epdvuizr4K4iyYzaMzG8jXY2owk8udb0DewjtYYTX3g6d64wrEFJcAVqZSR7qyK3zRn3InQ5o2gbSKvVdBxFSauCs4YkT784nDzp64Hw2meqST51KZZGxIwLNAhvpVHfGaYrlyillFi9gOEvJbZzwVQHurNUI4473Ez6ZHa7aNQiLDcJPQjdHAY1ft%2BU78hoSF202Ua9IFbQrSye9JoxinPl7bAYBeK6ZGOGa7x0H8RdNQWk2xZ%2Bk71MN6h3ckGOqUBJ5TCghfbHMGLwK7uQTjKbv7ijV7wlU%2BGHPmDON8nzRAclwLazLYmlt9DxrDECgOzp9xex164AIkC3ALNmkkxvmqXJuST5SQzfe7%2BWxZhIt9AGxDii1VJTNQXBzRwQSU3AjXOzCvNodudJYVEyHowC9Igri90C9U9djKxEF65EAPdjDED6oaDCNZ5Jr8zTqVu3ZusxaNHjwuoOEsfwnBnN9QLyjvF&X-Amz-Signature=231a5935371ba7b5ef31c9c689561ceaf04334aa188848126d9a06d2559cccf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

