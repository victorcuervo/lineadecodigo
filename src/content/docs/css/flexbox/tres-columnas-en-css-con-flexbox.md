---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPR4DHMY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuyZzMyG7g2PwSwOgD68EiImfSq2dI9D0w4KCTx88EmAiBLYkpyv3F0X%2BP9dBL8jzTA6h9XFKDKjUDmAhUtZMBEkCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM1ubR1D3hEp3WPeKqKtwDFRYHpXeab6JwIYRRTv6m96f5WL2C9h3OfguzZuvf3Mn912PoCq9GErbwDYNAzBDBS4yOrSqmFnrJ%2B3YesTCfgrc85NbMlx9Minde7AREu9YZPqbSBg22pjFwg1MFj7CqZ%2BNvazkRJCbmFJFh3wluugTqDITGdlKc5opCWy6PzyJhktKB6vsibUyJ96NsSekqrotI3Ud3Z6KAiEdKFXrmIaP2xYlCjrHoGocX1eK4OGir0dfK7ZYkZMoT0kUkotIYWitDE8khFyw4y6G8D92ky5rM1ViA9p6mv0ku2vI72V8riok8XAppz%2FFbPYmh1VjYIf9VmSlG5BNDOTUpTiTk%2Bg4XkOy4GkcVBeG%2F4oo0y2CIdQ%2B1fd8TYgwAnLmqGJv9CriNoSHQLKQPwVlbleZBpR0NUtJvuSB7L7tSOLeoCHz%2BYIMq96j2OhtakFA0OGLDccYqwQOUH8Ace4IDmFu9lkhyswkT6xYSyA9PUa28I9b9lSjRzs1gad9jsivavLeDUacEsjyYwqKOvSSEQ3fMZHb8kvdadERW2FDCpSdJ7y8v4UGZyM43D1TUpaKowlHDgxwOmINrVnkFI0Dm8NYunpYOULUN5R8ZkhF8CxZ7XkhqLqSEPfjMTTkYCLYw5MnRyQY6pgGUoioDAzLULU6xWjA9ibPG1hOOZP0wb6rq4h51tvv1Us3Pj2ux3%2Fg0c3V1fZTrSraEMWErnsVnUYBTp6bu0hpgAwkfwl7Sis5hnWD0P3AhhJ2VhkYgTnYH8RmL1dOptvWnHBfFJUIRYe%2FCrLRsBC023FzjbHrpWalUDDZ5ZSGReTR7a%2BDD5nWuFEwEWMFeSkh1nznIvOlAS0QADo3pb0Gx89GfQ%2BOq&X-Amz-Signature=210796f5184338ce796e48909152f0bdf29ab349c8901b976b157808d3831de0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPR4DHMY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuyZzMyG7g2PwSwOgD68EiImfSq2dI9D0w4KCTx88EmAiBLYkpyv3F0X%2BP9dBL8jzTA6h9XFKDKjUDmAhUtZMBEkCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM1ubR1D3hEp3WPeKqKtwDFRYHpXeab6JwIYRRTv6m96f5WL2C9h3OfguzZuvf3Mn912PoCq9GErbwDYNAzBDBS4yOrSqmFnrJ%2B3YesTCfgrc85NbMlx9Minde7AREu9YZPqbSBg22pjFwg1MFj7CqZ%2BNvazkRJCbmFJFh3wluugTqDITGdlKc5opCWy6PzyJhktKB6vsibUyJ96NsSekqrotI3Ud3Z6KAiEdKFXrmIaP2xYlCjrHoGocX1eK4OGir0dfK7ZYkZMoT0kUkotIYWitDE8khFyw4y6G8D92ky5rM1ViA9p6mv0ku2vI72V8riok8XAppz%2FFbPYmh1VjYIf9VmSlG5BNDOTUpTiTk%2Bg4XkOy4GkcVBeG%2F4oo0y2CIdQ%2B1fd8TYgwAnLmqGJv9CriNoSHQLKQPwVlbleZBpR0NUtJvuSB7L7tSOLeoCHz%2BYIMq96j2OhtakFA0OGLDccYqwQOUH8Ace4IDmFu9lkhyswkT6xYSyA9PUa28I9b9lSjRzs1gad9jsivavLeDUacEsjyYwqKOvSSEQ3fMZHb8kvdadERW2FDCpSdJ7y8v4UGZyM43D1TUpaKowlHDgxwOmINrVnkFI0Dm8NYunpYOULUN5R8ZkhF8CxZ7XkhqLqSEPfjMTTkYCLYw5MnRyQY6pgGUoioDAzLULU6xWjA9ibPG1hOOZP0wb6rq4h51tvv1Us3Pj2ux3%2Fg0c3V1fZTrSraEMWErnsVnUYBTp6bu0hpgAwkfwl7Sis5hnWD0P3AhhJ2VhkYgTnYH8RmL1dOptvWnHBfFJUIRYe%2FCrLRsBC023FzjbHrpWalUDDZ5ZSGReTR7a%2BDD5nWuFEwEWMFeSkh1nznIvOlAS0QADo3pb0Gx89GfQ%2BOq&X-Amz-Signature=d0fc1c319e265161df05188cf89225353f6c174b9c29afa493c038ed5c3bb20e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

