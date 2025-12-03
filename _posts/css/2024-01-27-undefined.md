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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPWTKP53%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T142330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBGLt21%2BT0Bvr9jDlgJID0KKGsllmW%2B%2FpW2n%2FJY1F6d9AiBNsIKld7cvXVVPyE%2FAhEIDNmNSYi40nqCPUAQY8ynAbCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM8XgFnZQerPZdrp%2F9KtwDrL2mHpTj1HpBVwvcIx94Qxj2s7DClceL8MwJOo2fzHHN0AYjLRH64gfLZpCZEcxfRJ03PUKfd1niOPXihqJRNIN6qhqqMtQ%2BomfA9ZQ%2F7bbHmwJYP0FY4cyFrWpD3y8QJsDSUS6SXyNq7Ep76fXlTB3MZf4RSjwOXgfw%2FQC17fKdLG5LJRoigioqnYTzYh4s09H57jjwosv1ANDRvToCTafzkg3NhKXCSiDYZaABm4Bhy3si9LO8b1aqHNzNFjD0Zu1ndBpyZZ8tqXnWhVly40uJAFseWYyYXSK4LUji0tAV0jmefifTl7ARHV%2BrGrkOAVkD%2FOCgo%2FItIW5EfCqxWif%2BfIj%2BIcbocZNIFXhgcBoq2Yig4cTu3WSPPp5hm8lwWHTXwA6N1SlphTUHmP3txuOSMOqgUk%2BrYG3jnvBMFvgBFII53vsIL1mWV4Sv7u%2B%2Bc%2Fq6rwRGDcXHUhwHO%2BryIe7WC3aatgYa4lbw7oaat4bTQHXozPf4aQ8BrLD8y2iPIwzF%2FM8OKHCpPvVG8%2BVuY6%2B9gwF93vRHSLulwiwlFy%2BFogJ0CZOIfcSRewdn8DHcTNR64ID9fk4q9wSB%2F%2BR8UVaWZot0tm4%2FosslBhOCYb%2BxUaibLLk72E3T70MwwIfByQY6pgGAUykQPrli0YqCGw%2BadMJtBxPKb%2FnglFK4M11MqjKSu%2FjF6ZsML8plMdhZQtyWyWVqKDLTj2TWUpLPX6UgNzsxY1XZJyRFKt%2FXxvQIf%2FngjAfPB1scrJ7GVs6dYEEJkL%2F71%2F7%2Fmu4f9XExFYfG3bQJ0JeEU5ChA1uBD9hVXqXmxOQXgxv6vVIYi8XZrjIgnfuERs3fvNL1k7J6EqIwWJt1Oogjf1YK&X-Amz-Signature=97ef440372332d07730e442ac32dec0a06ece57745ff8d016fe071b172e11968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPWTKP53%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T142330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBGLt21%2BT0Bvr9jDlgJID0KKGsllmW%2B%2FpW2n%2FJY1F6d9AiBNsIKld7cvXVVPyE%2FAhEIDNmNSYi40nqCPUAQY8ynAbCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM8XgFnZQerPZdrp%2F9KtwDrL2mHpTj1HpBVwvcIx94Qxj2s7DClceL8MwJOo2fzHHN0AYjLRH64gfLZpCZEcxfRJ03PUKfd1niOPXihqJRNIN6qhqqMtQ%2BomfA9ZQ%2F7bbHmwJYP0FY4cyFrWpD3y8QJsDSUS6SXyNq7Ep76fXlTB3MZf4RSjwOXgfw%2FQC17fKdLG5LJRoigioqnYTzYh4s09H57jjwosv1ANDRvToCTafzkg3NhKXCSiDYZaABm4Bhy3si9LO8b1aqHNzNFjD0Zu1ndBpyZZ8tqXnWhVly40uJAFseWYyYXSK4LUji0tAV0jmefifTl7ARHV%2BrGrkOAVkD%2FOCgo%2FItIW5EfCqxWif%2BfIj%2BIcbocZNIFXhgcBoq2Yig4cTu3WSPPp5hm8lwWHTXwA6N1SlphTUHmP3txuOSMOqgUk%2BrYG3jnvBMFvgBFII53vsIL1mWV4Sv7u%2B%2Bc%2Fq6rwRGDcXHUhwHO%2BryIe7WC3aatgYa4lbw7oaat4bTQHXozPf4aQ8BrLD8y2iPIwzF%2FM8OKHCpPvVG8%2BVuY6%2B9gwF93vRHSLulwiwlFy%2BFogJ0CZOIfcSRewdn8DHcTNR64ID9fk4q9wSB%2F%2BR8UVaWZot0tm4%2FosslBhOCYb%2BxUaibLLk72E3T70MwwIfByQY6pgGAUykQPrli0YqCGw%2BadMJtBxPKb%2FnglFK4M11MqjKSu%2FjF6ZsML8plMdhZQtyWyWVqKDLTj2TWUpLPX6UgNzsxY1XZJyRFKt%2FXxvQIf%2FngjAfPB1scrJ7GVs6dYEEJkL%2F71%2F7%2Fmu4f9XExFYfG3bQJ0JeEU5ChA1uBD9hVXqXmxOQXgxv6vVIYi8XZrjIgnfuERs3fvNL1k7J6EqIwWJt1Oogjf1YK&X-Amz-Signature=df4b8467be66fddfd449e6d8b12501205ffc7a6f8bdf02323a8a4e77b26d0031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

