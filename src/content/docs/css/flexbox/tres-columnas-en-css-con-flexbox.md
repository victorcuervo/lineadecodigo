---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IMGRBET%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHv9vsSwFRk7VJAhMmJUJ%2F3wbETz1LUWBoCFAjgRtyMGAiAXbPQOw47lgXZxm50Qt4JM1VGNRCOQFrDy%2BJzCjEeheyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxZI4Q9D1UTaqtheOKtwD%2Bz36LRMl0mpuYanjmQpphYjO9oyCBRpPrTqdENl7NEcgFqapFqxz95AtsGL3shrXbF6T%2BAJjfN%2FF8IYK7RnvXXMOsjGu98JQErZaNdPafWwzYoVa0FRA4aacUtdXtR%2FrbupAIV5rD4Kzp%2BEnIw883rWwpDlYlSUp0aHSfDYzyHnoMASWQYlOAwaYEhO575r8mBEFl%2FAZZbyipO2GXPAl0X6o8WkY3C4a19USS7Uyao2a2gAAxzppuoCfhW1mAkbaIapbWVz0VcfifxpJ0%2Fn%2BtxaKLsbu6cuRGjYnMlh8JSgkKa5u0fAzNp%2FFaVdRKNAT62Pky76GGHIfN7j6ANIbd9187RlP2rNfQaVjTtNZPUqyzkl3yXhB%2FXqKV9ydY2tVre8AVQ0nTc1ElIlCJwu%2FhOMsY6OpsRr0T%2B1YlmYmP1fLZ5cj7cETzwUtMbJKxWT5O44jYVxMOqlmXE4SpPJWeMTUQc2JVqPDC8N7Uyk9gU8766bM3pl1wH5fLTGgigiXNTRJEuA9JkmLPfct6q23qThdlWxavuE1zpa%2F8DYfPZfd4uSSnrYP4ftbp0ATf5juaRg42vGTA8Dhe6p6Kidmhw1V%2FlNuirNo%2B7ban6atwCbVtNsPbRH9C4q40tMwjZDbyQY6pgH4iMeGVWRCA7GDjnltYhtLGb1x8Cg3m8%2FQ4Pg59cwPXaY74pbfNIn7V%2BtGW9PFmAw%2F3xHZMbjXWZ5MJ1XffsyaKBK3rH16bI4q%2BafvVV%2Fi8lDUX2bBvy6a0e5s2zN4xRQ%2FOFBvHxdBa92FtbOT0dBf4z98nhr%2BqGu%2BItt0FNcqhncZTKer63Vya4VOQv9a%2F0i21ihScFS9JDSD2BX0Ibsg7x9HMVNB&X-Amz-Signature=a487e056d648f51fd64378119c804a645ecd639304291eb1e358828f37f37ffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IMGRBET%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHv9vsSwFRk7VJAhMmJUJ%2F3wbETz1LUWBoCFAjgRtyMGAiAXbPQOw47lgXZxm50Qt4JM1VGNRCOQFrDy%2BJzCjEeheyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxZI4Q9D1UTaqtheOKtwD%2Bz36LRMl0mpuYanjmQpphYjO9oyCBRpPrTqdENl7NEcgFqapFqxz95AtsGL3shrXbF6T%2BAJjfN%2FF8IYK7RnvXXMOsjGu98JQErZaNdPafWwzYoVa0FRA4aacUtdXtR%2FrbupAIV5rD4Kzp%2BEnIw883rWwpDlYlSUp0aHSfDYzyHnoMASWQYlOAwaYEhO575r8mBEFl%2FAZZbyipO2GXPAl0X6o8WkY3C4a19USS7Uyao2a2gAAxzppuoCfhW1mAkbaIapbWVz0VcfifxpJ0%2Fn%2BtxaKLsbu6cuRGjYnMlh8JSgkKa5u0fAzNp%2FFaVdRKNAT62Pky76GGHIfN7j6ANIbd9187RlP2rNfQaVjTtNZPUqyzkl3yXhB%2FXqKV9ydY2tVre8AVQ0nTc1ElIlCJwu%2FhOMsY6OpsRr0T%2B1YlmYmP1fLZ5cj7cETzwUtMbJKxWT5O44jYVxMOqlmXE4SpPJWeMTUQc2JVqPDC8N7Uyk9gU8766bM3pl1wH5fLTGgigiXNTRJEuA9JkmLPfct6q23qThdlWxavuE1zpa%2F8DYfPZfd4uSSnrYP4ftbp0ATf5juaRg42vGTA8Dhe6p6Kidmhw1V%2FlNuirNo%2B7ban6atwCbVtNsPbRH9C4q40tMwjZDbyQY6pgH4iMeGVWRCA7GDjnltYhtLGb1x8Cg3m8%2FQ4Pg59cwPXaY74pbfNIn7V%2BtGW9PFmAw%2F3xHZMbjXWZ5MJ1XffsyaKBK3rH16bI4q%2BafvVV%2Fi8lDUX2bBvy6a0e5s2zN4xRQ%2FOFBvHxdBa92FtbOT0dBf4z98nhr%2BqGu%2BItt0FNcqhncZTKer63Vya4VOQv9a%2F0i21ihScFS9JDSD2BX0Ibsg7x9HMVNB&X-Amz-Signature=0981011da16c657e4b98c9441dfa3e9cdf46dbd5988ba4a02c769207a88a1ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

