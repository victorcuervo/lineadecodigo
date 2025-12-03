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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIDAIQTK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T142037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCNyksHkUgGNR2ryC1%2BI6HedCTVxLS3wvrNYISCNgoFjwIhANV8rwtTif%2F3BUVVA1lR1Xil%2B9VqpwXpzgppkTIDmtZPKv8DCC8QABoMNjM3NDIzMTgzODA1Igxj3ox1QfmlkzcUEhMq3ANXZ7Vn8ENyCt5QZjJ9gArO9N%2Fa%2Fej3jG5Om%2Bs9bcOuYebZdOEqmfNjYl%2BF7vT6RUYWLb%2B7U3AxjLhAI5tcMggcFH3aUK05KLGiTLKs6C4Fe0zNkmTR%2BpSDzvpvpduD0E5gf70blJjj4XniUQJFa5UtQTZosIBjPqrw5D1zhaCUcwnqrJ0z0WOxpaciY%2FS8RVgspeSmyVK02ZVpnf8g7Uz5TH3qqJslBDaI2dbJzcydP3elnWNTC%2FTxS%2FPFUmwJBe2BXNnSBCJT1Ug9NjI9X1QSyhNSgvrOpKQUyGk8XSYURlOyJFXbknzI2bZazOTlNENQjD%2B0%2BaJaumf8%2FuMaEh68XlSU9tdyFCCW3BHA%2BwtjcOkASsEN6OLaHsU9iBiGJ2uWv3dqIC6QImg0alvO3AxLm3pvJbPuVweXUFDZ5qD%2FlBp1XnXU9fKTmzbrw9HRpOVxUBxvM7gNsBlpIvCnc1rRnYk3ApDwXX%2B1HK5UFEqsqz3l%2BfxiMjvUqhrvA7r9r%2Fa1gJGXq0SB9KFGcRCMeuP73i8Djcbu%2BRVPjDqaSeEHVDgRiDjvMy52Z1vQ6sjpdQjEZt4qzNTvlv1TIa5Bl3JpR7wWqympb7F5VfFNaMQ%2BRp7Un1yu8dK%2FZPEsFjD4iMHJBjqkAePZCgKt66mU7pLqoyHhNy7MczbYr3Vu6N9lh7BnQCqQbwSGUYCKV%2FouQuhl1VE8xo%2BLdU07JnvpxiEz4ZtEnHro5ZRtNorawLPdYDJQVV3mBfoz1mM1uyph2jnjh%2FVLh1LBGm9s6mHJ4oB8FaxNzQuGUJXvG%2BnefyFrErDscmYTiqwhnVU4F1m6WOO4LVa8PFh5zto0jGwswBE5Qj8GBw1uX3Fa&X-Amz-Signature=b4c95f776a04eec4ea4e282d0fa3214733a6232e5a731c5d4061d7d8749f0753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIDAIQTK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T142037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCNyksHkUgGNR2ryC1%2BI6HedCTVxLS3wvrNYISCNgoFjwIhANV8rwtTif%2F3BUVVA1lR1Xil%2B9VqpwXpzgppkTIDmtZPKv8DCC8QABoMNjM3NDIzMTgzODA1Igxj3ox1QfmlkzcUEhMq3ANXZ7Vn8ENyCt5QZjJ9gArO9N%2Fa%2Fej3jG5Om%2Bs9bcOuYebZdOEqmfNjYl%2BF7vT6RUYWLb%2B7U3AxjLhAI5tcMggcFH3aUK05KLGiTLKs6C4Fe0zNkmTR%2BpSDzvpvpduD0E5gf70blJjj4XniUQJFa5UtQTZosIBjPqrw5D1zhaCUcwnqrJ0z0WOxpaciY%2FS8RVgspeSmyVK02ZVpnf8g7Uz5TH3qqJslBDaI2dbJzcydP3elnWNTC%2FTxS%2FPFUmwJBe2BXNnSBCJT1Ug9NjI9X1QSyhNSgvrOpKQUyGk8XSYURlOyJFXbknzI2bZazOTlNENQjD%2B0%2BaJaumf8%2FuMaEh68XlSU9tdyFCCW3BHA%2BwtjcOkASsEN6OLaHsU9iBiGJ2uWv3dqIC6QImg0alvO3AxLm3pvJbPuVweXUFDZ5qD%2FlBp1XnXU9fKTmzbrw9HRpOVxUBxvM7gNsBlpIvCnc1rRnYk3ApDwXX%2B1HK5UFEqsqz3l%2BfxiMjvUqhrvA7r9r%2Fa1gJGXq0SB9KFGcRCMeuP73i8Djcbu%2BRVPjDqaSeEHVDgRiDjvMy52Z1vQ6sjpdQjEZt4qzNTvlv1TIa5Bl3JpR7wWqympb7F5VfFNaMQ%2BRp7Un1yu8dK%2FZPEsFjD4iMHJBjqkAePZCgKt66mU7pLqoyHhNy7MczbYr3Vu6N9lh7BnQCqQbwSGUYCKV%2FouQuhl1VE8xo%2BLdU07JnvpxiEz4ZtEnHro5ZRtNorawLPdYDJQVV3mBfoz1mM1uyph2jnjh%2FVLh1LBGm9s6mHJ4oB8FaxNzQuGUJXvG%2BnefyFrErDscmYTiqwhnVU4F1m6WOO4LVa8PFh5zto0jGwswBE5Qj8GBw1uX3Fa&X-Amz-Signature=cffbed288601daeeefa19624e8609113598859ace6ddce56c07e72ce053ce3b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

