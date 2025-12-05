---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAYK7A5U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5YeUaBvs9IgdTJPAf9AclmEHSZ%2BlBq66MPBFtc4SmawIgVnQLv%2BvbMqrt97BA49wFoJI4%2By%2B2qGZez8oJt7GNJ7Iq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGPlff7G5wVvf9SgGircA%2BBFqqaezuT7uc8liAheZMBq23Mv%2BnYuxWB9hDklAQbXiAEPAUu672iN5%2BXQRa3W7oe1Wlf6JoXfxiTvl6h3%2FSmvaAAKZTpJ9zbefjJFjorHoI4jYSqsNZvzkUGhha5Q6qfgz1GVDMi%2Bq44x1d63csEE3TqkeckOylIJZ4y4rvxSqfQHzT%2BwCkFKJlH6uAP%2FEzR8nSKssmLE5Na3IjLAos3ZuhRkLn3DrB8qE6SlUe%2BCTkkISHT7lAOYAAnTBz9kIitW6TeSZ1fyD6ZDzk6wdThn%2B7q1XIejzv6%2FlpJPhQ8ihC7QUmnPETwuF1zreH25vnZyLpqK6NcqaNQ4JhLsZcv0EIe23Bqlm4dp2s1bv4%2FHXR8xhxrYAF66hjGbsU9P92S0GhgccRDFB4OwbrmB0rC1%2FApmwiDHkUeXvz7Kgf%2FP9K%2FLeEnI4LW7HHsCZ2lxGOhkIlRKmRk71lvY13yeZzjD4RxhtqZoRNaBU%2BLycCZ88KbM8I2QO5pUxt0F04bfXsHF7yUlDfWp6MT9btLz8ecArG%2FSUulZXRgzKgMXUoapcONS4UqupD7iXNYuwNJPoPa35T6JzMflyv13Jp5TorkKkC5%2BJdrYzZ%2BYVkuaw%2BGaTJRI5oNp%2BOSt9K4bMKqMyMkGOqUBVhi6skbRTnnYYcLuBD082M2Jhldrtl6of7MkJ%2F0L7XAafJ5uHxbGON3TlZU1IHG1D3uQunXlh%2FJtnmuvLbLOJNep8yBBdBDgso%2BFT6EkYIyiUnmDguz8yFBrsVv2yr%2BIoJLSjCozSl1BeY9YGi3FHO2npntwN1fihQCG5705ZTmiNMObK6CorvaKJBnd5WFZgcKrLsvnz5%2F8Jxt%2F8xl7g4nfWtGU&X-Amz-Signature=4a31e271d8bb648d969dcbe8c3192be3ed66bff950657c7f877b99bf5f6127d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAYK7A5U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5YeUaBvs9IgdTJPAf9AclmEHSZ%2BlBq66MPBFtc4SmawIgVnQLv%2BvbMqrt97BA49wFoJI4%2By%2B2qGZez8oJt7GNJ7Iq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGPlff7G5wVvf9SgGircA%2BBFqqaezuT7uc8liAheZMBq23Mv%2BnYuxWB9hDklAQbXiAEPAUu672iN5%2BXQRa3W7oe1Wlf6JoXfxiTvl6h3%2FSmvaAAKZTpJ9zbefjJFjorHoI4jYSqsNZvzkUGhha5Q6qfgz1GVDMi%2Bq44x1d63csEE3TqkeckOylIJZ4y4rvxSqfQHzT%2BwCkFKJlH6uAP%2FEzR8nSKssmLE5Na3IjLAos3ZuhRkLn3DrB8qE6SlUe%2BCTkkISHT7lAOYAAnTBz9kIitW6TeSZ1fyD6ZDzk6wdThn%2B7q1XIejzv6%2FlpJPhQ8ihC7QUmnPETwuF1zreH25vnZyLpqK6NcqaNQ4JhLsZcv0EIe23Bqlm4dp2s1bv4%2FHXR8xhxrYAF66hjGbsU9P92S0GhgccRDFB4OwbrmB0rC1%2FApmwiDHkUeXvz7Kgf%2FP9K%2FLeEnI4LW7HHsCZ2lxGOhkIlRKmRk71lvY13yeZzjD4RxhtqZoRNaBU%2BLycCZ88KbM8I2QO5pUxt0F04bfXsHF7yUlDfWp6MT9btLz8ecArG%2FSUulZXRgzKgMXUoapcONS4UqupD7iXNYuwNJPoPa35T6JzMflyv13Jp5TorkKkC5%2BJdrYzZ%2BYVkuaw%2BGaTJRI5oNp%2BOSt9K4bMKqMyMkGOqUBVhi6skbRTnnYYcLuBD082M2Jhldrtl6of7MkJ%2F0L7XAafJ5uHxbGON3TlZU1IHG1D3uQunXlh%2FJtnmuvLbLOJNep8yBBdBDgso%2BFT6EkYIyiUnmDguz8yFBrsVv2yr%2BIoJLSjCozSl1BeY9YGi3FHO2npntwN1fihQCG5705ZTmiNMObK6CorvaKJBnd5WFZgcKrLsvnz5%2F8Jxt%2F8xl7g4nfWtGU&X-Amz-Signature=e5e7653be90e27c9c1c90ea0661bc2b26a7d9ddaa64b012d7e17910025c8032e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

