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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYKTZAYK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDTs5%2FnwSYJydTeloZmPMy3x6t84JcBm8Ku5knmN4TJ5wIhAOiHwBhaY8v7tPOgd0rBMp4u5koJoMb8Ql8nXZP3b%2FyTKv8DCC4QABoMNjM3NDIzMTgzODA1IgwEUxSl8PlLs500LT4q3ANvyi0WtOXPkVlr5FhxIQqSV8rDczJO%2F1NLFSL95BjVT4OLmZIAWk9RhkEY6eUL8mySDGjvhW7%2F9c1zxycG5%2BRp7akL%2B5mUl8lZ71ES5e70zNFwk4%2Bro62N7sDESDJ0wWenovTsAR%2FeiXRWOIC%2Bgyxd65qYn5LRaw9GotlHfjok5GjyJIrX6o4TJ7XDaw53aLZ0dOc3xPqRFlnUgQv3pgr%2BxRw2ocHZTnUBhUNPu0kaeuo2ocgdaRQTq8sQ3djQzYN9zk80UCV%2FwsAOsYzf6AMda5b6eA1kLElz3%2B5el%2BXyxmfB0JQ6V%2FVl6XenqcYgbQ8vRdyHXdIzGOxKH29b3TXqfjWifspCX8%2BZu8A1F3b25fQ2CKFc7Jw%2FAq4TXKfwx8yxxkvUGoNrAsQbcgOu%2Fjsr%2F8warwzhAbrDU%2FnNpLB25zo6WxVDHLvROE2uXkM5DPs6wCH2T1ZwZmasJtFgWycsr5Amdag6WlNKUEsedhdZ%2BNE9I6hQrpd%2FXPRgTM5n%2BZoaV%2FUvgvZucCHvwq6YIkdGyC%2FuGUk2b3Do3jqThwy%2FYGyqej7gmW68Vj2q45IfPsHv9Oa7warz3mJ1AG1HG9t6%2B1zga95%2BGKMqVmQimPeiHKnpQwL7DelgDZXxmjD86MDJBjqkASGsk%2FaqBPod5rao%2Fi%2BkOb%2FkqwpRVMEa0kES936YVdqIjQsOhmjrgWQ%2FcicQ08iqOZCNIQ4QIdwyrRNGZxUW55VKU%2BDIMpWIUG7WDk%2BvfMwOgu3ZT1FfG5Fz6tbkTX5v3qwcFCotgM4QFHBi3qvsZGocFnDvh%2FIDCiGLzXhMrpPfDMLiZkQ4IaOf9c8RPZ%2BACC50W3lJIhgj4G2D7r2bUYvJyldx&X-Amz-Signature=f2fd879f89fdf4be0c7a9f742d7897b3829f22a726fe99782a194a93dc3a59f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYKTZAYK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDTs5%2FnwSYJydTeloZmPMy3x6t84JcBm8Ku5knmN4TJ5wIhAOiHwBhaY8v7tPOgd0rBMp4u5koJoMb8Ql8nXZP3b%2FyTKv8DCC4QABoMNjM3NDIzMTgzODA1IgwEUxSl8PlLs500LT4q3ANvyi0WtOXPkVlr5FhxIQqSV8rDczJO%2F1NLFSL95BjVT4OLmZIAWk9RhkEY6eUL8mySDGjvhW7%2F9c1zxycG5%2BRp7akL%2B5mUl8lZ71ES5e70zNFwk4%2Bro62N7sDESDJ0wWenovTsAR%2FeiXRWOIC%2Bgyxd65qYn5LRaw9GotlHfjok5GjyJIrX6o4TJ7XDaw53aLZ0dOc3xPqRFlnUgQv3pgr%2BxRw2ocHZTnUBhUNPu0kaeuo2ocgdaRQTq8sQ3djQzYN9zk80UCV%2FwsAOsYzf6AMda5b6eA1kLElz3%2B5el%2BXyxmfB0JQ6V%2FVl6XenqcYgbQ8vRdyHXdIzGOxKH29b3TXqfjWifspCX8%2BZu8A1F3b25fQ2CKFc7Jw%2FAq4TXKfwx8yxxkvUGoNrAsQbcgOu%2Fjsr%2F8warwzhAbrDU%2FnNpLB25zo6WxVDHLvROE2uXkM5DPs6wCH2T1ZwZmasJtFgWycsr5Amdag6WlNKUEsedhdZ%2BNE9I6hQrpd%2FXPRgTM5n%2BZoaV%2FUvgvZucCHvwq6YIkdGyC%2FuGUk2b3Do3jqThwy%2FYGyqej7gmW68Vj2q45IfPsHv9Oa7warz3mJ1AG1HG9t6%2B1zga95%2BGKMqVmQimPeiHKnpQwL7DelgDZXxmjD86MDJBjqkASGsk%2FaqBPod5rao%2Fi%2BkOb%2FkqwpRVMEa0kES936YVdqIjQsOhmjrgWQ%2FcicQ08iqOZCNIQ4QIdwyrRNGZxUW55VKU%2BDIMpWIUG7WDk%2BvfMwOgu3ZT1FfG5Fz6tbkTX5v3qwcFCotgM4QFHBi3qvsZGocFnDvh%2FIDCiGLzXhMrpPfDMLiZkQ4IaOf9c8RPZ%2BACC50W3lJIhgj4G2D7r2bUYvJyldx&X-Amz-Signature=3734b99c2254f003b36d40cfa83365e6489de4b63ef0ad230aa0e2fd9afdcd1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

